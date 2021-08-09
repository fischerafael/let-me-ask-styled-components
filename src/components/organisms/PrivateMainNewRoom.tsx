import { handleNavigateTo } from '../../utils/handleNavigateTo'
import { MainButton } from '../atoms/Button'

export const PrivateMainNewRoom = () => {
    return (
        <main className="bg-purple-50 h-screen w-full flex flex-col items-center justify-center px-4 gap-4">
            <img src="/assets/logo.svg" alt="" className="w-32" />
            <form className="flex flex-col w-3/4 gap-4">
                <input
                    type="text"
                    placeholder="Nome da sala"
                    className="h-14 flex items-center justify-center px-8 border border-gray-200 rounded-lg"
                />
                <MainButton>Criar Sala</MainButton>
                <a
                    className="cursor-pointer text-xs"
                    onClick={() => handleNavigateTo('/')}
                >
                    Quer entrar em uma sala existente?{' '}
                    <span className="text-pink-400 font-bold">Clique aqui</span>
                </a>
            </form>
        </main>
    )
}
