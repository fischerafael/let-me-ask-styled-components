import { FormEvent } from 'react'
import { MainButton } from '../components/atoms/Button'
import { IQuestions } from '../entities/IQuestions'
import { useAuth } from '../hooks/useAuth'
import { useQuestion } from '../hooks/useQuestion'

export const PageRoom = ({ roomId }: { roomId: string }) => {
    const room = roomId
    const { user } = useAuth()
    const { newQuestion, setNewQuestion, sendQuestion, questions, title } =
        useQuestion(room)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        sendQuestion({ user, room, question: newQuestion })
    }

    return (
        <div className="bg-purple-50 w-screen h-screen flex flex-col items-center">
            <header className="w-full border border-b h-1/6 flex justify-center px-4">
                <section className="max-w-screen-lg w-full flex justify-between items-center">
                    <img src="/assets/logo.svg" alt="" className="w-28" />
                    <section>
                        <section></section>
                        <section>
                            <p>Sala #{roomId}</p>
                        </section>
                    </section>
                </section>
            </header>

            <main className="max-w-screen-lg w-full h-5/6 overflow-y-auto flex flex-col gap-8 py-8 px-4">
                <section className="w-full flex gap-4 items-center">
                    <h2 className="font-bold text-xl">Sala {title}</h2>
                    {questions.length > 0 && (
                        <span className="bg-pink-500 p-2 px-4 rounded-full text-white font-bold text-xs">
                            {questions.length} pergunta(s)
                        </span>
                    )}
                </section>

                <form
                    onSubmit={onSubmit}
                    className="w-full flex flex-col gap-8 items-center"
                >
                    <textarea
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-full rounded-lg p-4 h-32 outline-none"
                        placeholder="Digite sua dúvida aqui"
                    />

                    <section className="flex justify-between items-center w-full">
                        {user ? (
                            <div className="flex gap-4 items-center">
                                <img
                                    className="rounded-full w-12 h-12 border-2 border-purple-500"
                                    src={user.avatar}
                                    alt={user.name}
                                />
                                <span className="text-sm font-bold">
                                    {user.name}
                                </span>
                            </div>
                        ) : (
                            <p className="text-xs">
                                Para enviar uma pergunta,{' '}
                                <span className="text-pink-500">
                                    faça seu login.
                                </span>
                            </p>
                        )}

                        <MainButton type="submit" disabled={!user}>
                            Enviar Pergunta
                        </MainButton>
                    </section>
                </form>

                <section className="flex flex-col gap-4">
                    {questions?.map((question) => (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            isAnswered={question.isAnswered}
                            isHighlighted={question.isHighLighted}
                            action={''}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

const Question = ({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    action
}) => {
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
