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
    endRoom: (roomId: string) => Promise<void>
}

const RoomContext = createContext({} as Props)

const RoomProvider = ({ children }) => {
    const [roomName, setRoomName] = useState('')
    const [roomId, setRoomId] = useState('')

    const joinRoom = async (): Promise<void> => {
        if (roomId.trim() === '') return

        try {
            const roomReference = await database.ref(`rooms/${roomId}`).get()

            if (!roomReference.exists()) throw new Error('Room does not exist')

            handleNavigateTo(`/rooms/${roomId}`)
        } catch (e) {
            console.log('join room error', e)
        }
    }

    const createRoom = async (
        roomTitle: string,
        authorId: string
    ): Promise<void> => {
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

    const endRoom = async (roomId: string) => {
        try {
            await database.ref(`rooms/${roomId}`).update({
                endedAt: new Date()
            })

            handleNavigateTo('/')
        } catch (e) {
            console.log('error ending room', e)
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
                createRoom,
                endRoom
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
