import { FormEvent } from 'react'
import { PrivateMainNewRoom } from '../components/organisms/PrivateMainNewRoom'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'
import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

export const PageNewRoom = () => {
    const { user } = useAuth()
    const { createRoom, roomName, setRoomName } = useRoom()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        createRoom(roomName, user.id)
    }

    return (
        <TemplatePublic
            sidebar={<PublicSideBar />}
            main={
                <PrivateMainNewRoom
                    onSubmit={onSubmit}
                    value={roomName}
                    onChange={(e: any) => setRoomName(e.target.value)}
                />
            }
        />
    )
}
