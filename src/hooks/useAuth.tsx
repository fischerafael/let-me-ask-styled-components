import { createContext, useContext, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase'
import { handleNavigateTo } from '../utils/handleNavigateTo'

interface IUser {
    id: string
    name: string
    avatar: string
}

interface AuthContextProps {
    user: IUser | undefined
    signInWithGoogle: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ id: '', name: '', avatar: '' })

    useEffect(() => {
        //verifies if user is logged
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL)
                    throw new Error('Missing name or photo')

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })
    }, [])

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const { user } = await auth.signInWithPopup(provider)

        if (user) {
            const { displayName, photoURL, uid } = user

            if (!displayName || !photoURL)
                throw new Error('Missing name or photo')

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })

            handleNavigateTo('/rooms/new')
        }
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
