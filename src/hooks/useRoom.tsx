import { createContext, useContext, useState } from 'react'
import { database } from '../services/firebase'
import { handleNavigateTo } from '../utils/handleNavigateTo'

interface Props {
    roomId: string
    setRoomId: (e: any) => void
    roomName: string
    setRoomName: (e: any) => void
    joinRoom: () => Promise<void>
    createRoom: (roomTitle: string, authorId: string) => Promise<void>
}

const RoomContext = createContext({} as Props)

const RoomProvider = ({ children }) => {
    const [roomName, setRoomName] = useState('')
    const [roomId, setRoomId] = useState('')

    const joinRoom = async () => {
        if (roomId.trim() === '') return

        try {
            const roomReference = await database.ref(`rooms/${roomId}`).get()

            if (!roomReference.exists()) throw new Error('Room does not exist')

            handleNavigateTo(`/rooms/${roomId}`)
        } catch (e) {
            console.log('join room error', e)
        }
    }

    const createRoom = async (roomTitle: string, authorId: string) => {
        try {
            const roomReference = database.ref('rooms')
            const firebaseRoom = await roomReference.push({
                title: roomTitle,
                authorId: authorId
            })

            handleNavigateTo(`/rooms/${firebaseRoom.key}`)
        } catch (e) {
            console.log('create room error', e)
        }
    }

    return (
        <RoomContext.Provider
            value={{
                roomId,
                setRoomId,
                roomName,
                setRoomName,
                joinRoom,
                createRoom
            }}
        >
            {children}
        </RoomContext.Provider>
    )
}

const useRoom = () => {
    return useContext(RoomContext)
}

export { RoomProvider, useRoom }
