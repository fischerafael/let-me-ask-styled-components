import { FormEvent, useState } from 'react'
import { PrivateMainNewRoom } from '../components/organisms/PrivateMainNewRoom'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'
import { database } from '../services/firebase'

export const PageNewRoom = () => {
    const [formData, setFormData] = useState({ newRoom: '' })

    console.log('formData', formData)

    const handleCreateRoom = async (e: FormEvent) => {
        e.preventDefault()
        alert('ma oie')
        try {
            const roomReference = database.ref('rooms')
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
