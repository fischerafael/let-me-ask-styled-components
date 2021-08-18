import { IUser } from '../../entities/IUser'

interface Props {
    content: string
    author: IUser
    action: any
    isAnswered?: boolean
    isHighlighted?: boolean
}

export const Question = ({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    action
}: Props) => {
    return (
        <article className="bg-white p-4 rounded-lg flex flex-col gap-4">
            <header className="text-sm">{content}</header>
            <footer className="flex justify-between items-center">
                <section className="flex gap-4 items-center">
                    <img
                        className="rounded-full w-12 h-12 border-2 border-purple-500"
                        src={author.avatar}
                    />
                    <span className="text-sm font-bold">{author.name}</span>
                </section>
                <section>{action}</section>
            </footer>
        </article>
    )
}
