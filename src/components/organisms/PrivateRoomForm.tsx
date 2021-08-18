import { IUser } from '../../entities/IUser'
import { MainButton } from '../atoms/Button'

interface Props {
    user: IUser
    textAreaValue: string
    onTextAreaChange: (e: any) => void
}

export const PrivateRoomForm = ({
    textAreaValue,
    onTextAreaChange,
    user
}: Props) => {
    return (
        <>
            <textarea
                value={textAreaValue}
                onChange={onTextAreaChange}
                className="w-full rounded-lg p-4 h-32 outline-none"
                placeholder="Digite sua dúvida aqui"
            />

            <section className="flex justify-between items-center w-full">
                {user ? (
                    <div className="flex gap-4 items-center">
                        <img
                            className="rounded-full w-12 h-12 border-2 border-purple-500"
                            src={user.avatar}
                            alt={user.name}
                        />
                        <span className="text-sm font-bold">{user.name}</span>
                    </div>
                ) : (
                    <p className="text-xs">
                        Para enviar uma pergunta,{' '}
                        <span className="text-pink-500">faça seu login.</span>
                    </p>
                )}

                <MainButton type="submit" disabled={!user}>
                    Enviar Pergunta
                </MainButton>
            </section>
        </>
    )
}
