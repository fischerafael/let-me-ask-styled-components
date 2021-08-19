import { useRoom } from '../../hooks/useRoom'
import { GhostButton } from '../atoms/Button'
import { LogoutIcon } from '@heroicons/react/outline'

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
            <img
                src="/assets/logo.svg"
                alt=""
                className="w-28 hidden sm:flex"
            />
            <section>
                <p>Sala #{roomId}</p>
            </section>

            <section></section>

            <GhostButton onClick={onClick} className="p-0">
                <LogoutIcon className="h-6 text-purple-500 hover:text-purple-100" />
            </GhostButton>
        </section>
    )
}
