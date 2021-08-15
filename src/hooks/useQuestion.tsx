import {
    FirebaseQuestions,
    IQuestions,
    ISendQuestion
} from '../entities/IQuestions'
import { createContext, useContext, useEffect, useState } from 'react'
import { database } from '../services/firebase'

interface IQuestionContext {
    newQuestion: string
    setNewQuestion: (e: any) => void
    sendQuestion: (data: ISendQuestion) => Promise<void>
}

const QuestionContext = createContext({} as IQuestionContext)

const QuestionProvider = ({ children }) => {
    const [newQuestion, setNewQuestion] = useState('')

    const sendQuestion = async ({
        question,
        room,
        user
    }: ISendQuestion): Promise<void> => {
        try {
            if (question.trim() === '')
                throw new Error('Question should not be empty')

            if (!user) throw new Error('You must be logged in')

            const questionData = {
                content: question,
                author: {
                    name: user.name,
                    avatar: user.avatar
                },
                isHighLighted: false,
                isAnswered: false
            }

            await database.ref(`rooms/${room}/questions`).push(questionData)

            setNewQuestion('')
        } catch (e) {
            console.log('error sending question', e)
        }
    }

    return (
        <QuestionContext.Provider
            value={{ newQuestion, setNewQuestion, sendQuestion }}
        >
            {children}
        </QuestionContext.Provider>
    )
}

const useQuestion = (room: string) => {
    const useContextQuestion = useContext(QuestionContext)

    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState<IQuestions[]>([])

    useEffect(() => {
        const rooms = database.ref(`rooms/${room}`)

        rooms.on('value', (room) => {
            const databaseRoom = room.val()

            if (databaseRoom?.questions === undefined) return

            const firebaseQuestions: FirebaseQuestions = databaseRoom?.questions

            const questionsArray = Object.entries(firebaseQuestions).map(
                ([key, value]) => {
                    return {
                        id: key,
                        content: value.content,
                        author: value.author,
                        isAnswered: value.isAnswered,
                        isHighLighted: value.isHighLighted
                    }
                }
            )

            setTitle(databaseRoom.title)
            setQuestions(questionsArray)
        })
    }, [room])

    return { ...useContextQuestion, questions, title }
}

export { useQuestion, QuestionProvider }
