import { createContext, useContext, useState } from 'react'
import { database } from '../services/firebase'

interface IQuestion {
    question: string
    user: { name: string; avatar: string }
    room: string
}

interface IQuestionContext {
    newQuestion: string
    setNewQuestion: (e: any) => void
    sendQuestion: (data: IQuestion) => void
}

const QuestionContext = createContext({} as IQuestionContext)

const QuestionProvider = ({ children }) => {
    const [newQuestion, setNewQuestion] = useState('')

    const sendQuestion = async ({ question, room, user }: IQuestion) => {
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

const useQuestion = () => {
    return useContext(QuestionContext)
}

export { useQuestion, QuestionProvider }
