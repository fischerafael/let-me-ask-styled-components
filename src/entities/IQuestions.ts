export interface IQuestions {
    id: string
    author: {
        name: string
        avatar: string
    }
    content: string
    isHighLighted: boolean
    isAnswered: boolean
    likes?: Record<string, { authorId: string }>
    likeCount?: number
    likeId?: string | undefined
}

export interface ISendQuestion {
    question: string
    user: { name: string; avatar: string }
    room: string
}

export type FirebaseQuestions = Record<string, IQuestions>
