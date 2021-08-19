import { FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'
import { MainButton, RedButton } from '../atoms/Button'

export const PublicMainLogin = () => {
    const { signInWithGoogle } = useAuth()
    const { setRoomId, roomId, joinRoom } = useRoom()

    const onClick = async (e: any) => {
        e.preventDefault()
        await signInWithGoogle()
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await joinRoom()
    }

    return (
        <>
            <img src="/assets/logo.svg" alt="" className="w-32" />
            <form className="flex flex-col w-3/4 gap-4" onSubmit={onSubmit}>
                <RedButton className="" onClick={onClick}>
                    <img src="/assets/google.svg" alt="" />
                    Criar com Google
                </RedButton>
                <div className="flex w-full items-center gap-4 py-4">
                    <hr className="w-full" />
                    <p>ou</p>
                    <hr className="w-full" />
                </div>

                <input
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    type="text"
                    placeholder="Digite o código da sala"
                    className="h-14 flex items-center justify-center px-8 border border-gray-200 rounded-lg"
                />
                <MainButton>Entrar na sala</MainButton>
            </form>
        </>
    )
}
