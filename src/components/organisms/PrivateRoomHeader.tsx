import { useRoom } from '../../hooks/useRoom'
import { GhostButton } from '../atoms/Button'

interface Props {
    roomId: string
}

export const PrivateRoomHeader = ({ roomId }: Props) => {
    const { endRoom } = useRoom()

    const onClick = () => {
        endRoom(roomId)
    }

    return (
        <section className="max-w-screen-lg w-full flex justify-between items-center">
            <img src="/assets/logo.svg" alt="" className="w-28" />

            <section className="flex gap-2 items-center">
                <section></section>

                <section>
                    <p>Sala #{roomId}</p>
                </section>

                <GhostButton onClick={onClick}>Finalizar Sala</GhostButton>
            </section>
        </section>
    )
}
