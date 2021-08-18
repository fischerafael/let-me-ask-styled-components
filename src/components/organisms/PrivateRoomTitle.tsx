import { IQuestions } from '../../entities/IQuestions'

interface Props {
    title: string
    questions: IQuestions[]
}

export const PrivateRoomTitle = ({ title, questions }: Props) => {
    return (
        <section className="w-full flex gap-4 items-center">
            <h2 className="font-bold text-xl">Sala {title}</h2>
            {questions.length > 0 && (
                <span className="bg-pink-500 p-2 px-4 rounded-full text-white font-bold text-xs">
                    {questions.length} pergunta(s)
                </span>
            )}
        </section>
    )
}
