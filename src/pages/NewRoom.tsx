import { useAuth } from '../hooks/useAuth'
import { handleNavigateTo } from '../utils/handleNavigateTo'

export const PageNewRoom = () => {
    const { user } = useAuth()

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1>{user.name}</h1>
            <input type="text" placeholder="Nome da Sala" />
            <button>Criar Sala</button>
            <a onClick={() => handleNavigateTo('/')}>
                Entrar em sala existente
            </a>
        </div>
    )
}
