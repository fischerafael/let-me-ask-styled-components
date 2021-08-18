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

const useQuestion = (room: string, userId: string) => {
    const useContextQuestion = useContext(QuestionContext)

    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState<IQuestions[]>([])

    console.log('questions', questions)

    const likeQuestion = async (
        questionId: string,
        likeId: string | undefined
    ) => {
        try {
            if (likeId) {
                await database
                    .ref(
                        `rooms/${room}/questions/${questionId}/likes/${likeId}`
                    )
                    .remove()
                return
            }
            await database
                .ref(`rooms/${room}/questions/${questionId}/likes`)
                .push({ authorId: userId })
        } catch (e) {
            console.log('Error liking question', e)
        }
    }

    const deleteQuestion = async (questionId: string) => {
        if (window.confirm('Tem certeza que deseja excluir a pergunta?')) {
            try {
                await database
                    .ref(`rooms/${room}/questions/${questionId}`)
                    .remove()
                setQuestions(
                    questions.filter((question) => question.id !== questionId)
                )
            } catch (error) {
                console.log('error deleting question', error)
            }
        }
    }

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
                        isHighLighted: value.isHighLighted,
                        likeCount: Object.values(value.likes ?? {}).length,
                        likeId: Object.entries(value.likes ?? {}).find(
                            ([key, like]) => like.authorId === userId
                        )?.[0]
                    }
                }
            )

            setTitle(databaseRoom.title)
            setQuestions(questionsArray)
        })

        return () => {
            rooms.off('value')
        }
    }, [room, userId])

    return {
        ...useContextQuestion,
        questions,
        title,
        likeQuestion,
        deleteQuestion
    }
}

export { useQuestion, QuestionProvider }
