import { MainButton, RedButton } from '../atoms/Button'

export const PublicMainLogin = ({ onClick }) => {
    return (
        <main className="bg-purple-50 h-screen w-full flex flex-col items-center justify-center px-4 gap-4">
            <img src="/assets/logo.svg" alt="" className="w-32" />
            <form className="flex flex-col w-3/4 gap-4">
                <RedButton className="" onClick={onClick}>
                    <img src="/assets/google.svg" alt="" />
                    Crie sua sala com o Google
                </RedButton>
                <div className="flex w-full items-center gap-4 py-4">
                    <hr className="w-full" />
                    <p>ou</p>
                    <hr className="w-full" />
                </div>

                <input
                    type="text"
                    placeholder="Digite o código da sala"
                    className="h-14 flex items-center justify-center px-8 border border-gray-200 rounded-lg"
                />
                <MainButton>Entrar na sala</MainButton>
            </form>
        </main>
    )
}
