import { FormEvent } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useQuestion } from '../hooks/useQuestion'

export const PageRoom = ({ roomId }: { roomId: string }) => {
    const { user } = useAuth()
    const { newQuestion, setNewQuestion, sendQuestion } = useQuestion()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        sendQuestion({ user: user, room: roomId, question: newQuestion })
    }

    console.log(newQuestion)

    return (
        <div className="bg-purple-50 w-screen h-screen flex flex-col items-center">
            <header className="w-full border border-b h-1/6 flex justify-center">
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

            <main className="max-w-screen-lg w-full h-5/6 overflow-y-auto flex flex-col gap-8 py-8">
                <section className="w-full flex gap-4 items-center">
                    <h2 className="font-bold text-xl">Sala React Q&A</h2>
                    <span className="bg-pink-500 p-2 px-4 rounded-full text-white font-bold text-xs">
                        4 perguntas
                    </span>
                </section>

                <form
                    onSubmit={onSubmit}
                    className="w-full flex gap-4 items-center"
                >
                    <textarea
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-full rounded-lg p-4 h-32"
                    />

                    <button type="submit">Enviar Pergunta</button>
                </form>
            </main>
        </div>
    )
}
