import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'
import { IUser } from '../entities/IUser'
import { auth, firebase } from '../services/firebase'
import { handleNavigateTo } from '../utils/handleNavigateTo'

interface AuthContextProps {
    user: IUser | undefined
    signInWithGoogle: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const { pathname } = useRouter()

    const [user, setUser] = useState({ id: '', name: '', avatar: '' })

    console.log('user_context', user)

    useEffect(() => {
        //verifies if user is logged
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL)
                    throw new Error('Missing name or photo')

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })

                if (pathname === '/') handleNavigateTo('/rooms/new')
            }
        })

        return () => unsubscribe()
    }, [])

    const signInWithGoogle = async (): Promise<void> => {
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
