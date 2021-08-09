import { useAuth } from '../hooks/useAuth'

export const PageLogin = () => {
    const { signInWithGoogle, user } = useAuth()

    const onClick = async () => {
        await signInWithGoogle()
    }

    return (
        <div className="w-screen grid grid-cols-2 items-center justify-center">
            <aside className="bg-purple-500 h-screen flex flex-col justify-center px-4 gap-4">
                <img src="/assets/hero.svg" alt="" className="w-screen h-3/6" />
                <h1 className="font-bold text-white text-4xl">
                    Toda pergunta tem uma resposta.
                </h1>
                <h3 className="text-white text-base">
                    Aprenda e compartilhe conhecimento com outras pessoas.
                </h3>
            </aside>
            <main>
                <button onClick={onClick}>Crie sua sala com o Google</button>
                <input type="text" placeholder="Digite o código da sala" />
                <button>Entrar na sala</button>
            </main>
        </div>
    )
}
