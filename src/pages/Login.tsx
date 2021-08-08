import { useAuth } from '../hooks/useAuth'

export const PageLogin = () => {
    const { signInWithGoogle, user } = useAuth()

    const onClick = async () => {
        await signInWithGoogle()
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <button onClick={onClick}>Crie sua sala com o Google</button>
            <input type="text" placeholder="Digite o código da sala" />
            <button>Entrar na sala</button>
        </div>
    )
}
