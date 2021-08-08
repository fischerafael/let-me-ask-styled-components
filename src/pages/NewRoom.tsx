import { handleNavigateTo } from '../utils/handleNavigateTo'

export const PageNewRoom = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <input type="text" placeholder="Nome da Sala" />
            <button>Criar Sala</button>
            <a onClick={() => handleNavigateTo('/')}>
                Entrar em sala existente
            </a>
        </div>
    )
}
