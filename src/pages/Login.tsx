import { handleNavigateTo } from '../utils/handleNavigateTo'

export const PageLogin = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <button onClick={() => handleNavigateTo('/rooms/new')}>
                Crie sua sala com o Google
            </button>
            <input type="text" placeholder="Digite o código da sala" />
            <button>Entrar na sala</button>
        </div>
    )
}
