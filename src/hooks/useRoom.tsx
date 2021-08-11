import { createContext, useContext, useState } from 'react'
import { database } from '../services/firebase'
import { handleNavigateTo } from '../utils/handleNavigateTo'

interface Props {
    roomId: string
    setRoomId: (e: any) => void
    joinRoom: () => Promise<void>
}

const RoomContext = createContext({} as Props)

const RoomProvider = ({ children }) => {
    const [roomId, setRoomId] = useState('')

    console.log('room_id_context', roomId)

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

    return (
        <RoomContext.Provider value={{ roomId, setRoomId, joinRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

const useRoom = () => {
    return useContext(RoomContext)
}

export { RoomProvider, useRoom }
