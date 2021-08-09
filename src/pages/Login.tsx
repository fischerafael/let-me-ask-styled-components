import { useAuth } from '../hooks/useAuth'

export const PageLogin = () => {
    const { signInWithGoogle, user } = useAuth()

    const onClick = async () => {
        await signInWithGoogle()
    }

    return (
        <div className="w-screen grid grid-cols-2 items-center justify-center">
            <aside className="bg-purple-500 h-screen w-full flex flex-col justify-center px-4 gap-4">
                <img src="/assets/hero.svg" alt="" className="w-screen h-3/6" />
                <h1 className="font-bold text-white text-4xl">
                    Toda pergunta tem uma resposta.
                </h1>
                <h3 className="text-white text-base">
                    Aprenda e compartilhe conhecimento com outras pessoas.
                </h3>
            </aside>
            <main className="bg-purple-50 h-screen w-full flex flex-col items-center justify-center px-4 gap-4">
                <img src="/assets/logo.svg" alt="" className="w-32" />
                <form className="flex flex-col w-3/4 gap-4">
                    <button
                        className="bg-red-500 px-8 py-4 text-white font-semibold text-base flex gap-4 items-center justify-center"
                        onClick={onClick}
                    >
                        <img src="/assets/google.svg" alt="" />
                        Crie sua sala com o Google
                    </button>
                    <input type="text" placeholder="Digite o código da sala" />
                    <button>Entrar na sala</button>
                </form>
            </main>
        </div>
    )
}
