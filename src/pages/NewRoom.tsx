import { FormEvent, useState } from 'react'
import { PrivateMainNewRoom } from '../components/organisms/PrivateMainNewRoom'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { handleNavigateTo } from '../utils/handleNavigateTo'

export const PageNewRoom = () => {
    const { user } = useAuth()

    const [formData, setFormData] = useState({ newRoom: '' })

    console.log('formData', formData)

    const handleCreateRoom = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const roomReference = database.ref('rooms')
            const firebaseRoom = await roomReference.push({
                title: formData.newRoom,
                authorId: user.id
            })

            console.log(firebaseRoom)
            return
            handleNavigateTo(`/rooms/${firebaseRoom}`)
        } catch (e) {}
    }

    return (
        <TemplatePublic
            sidebar={<PublicSideBar />}
            main={
                <PrivateMainNewRoom
                    onSubmit={handleCreateRoom}
                    value={formData.newRoom}
                    onChange={(e) =>
                        setFormData({ ...formData, newRoom: e.target.value })
                    }
                />
            }
        />
    )
}
