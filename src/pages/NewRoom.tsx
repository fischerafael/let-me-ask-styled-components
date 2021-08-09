import { PrivateMainNewRoom } from '../components/organisms/PrivateMainNewRoom'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'
import { useAuth } from '../hooks/useAuth'

export const PageNewRoom = () => {
    const { user } = useAuth()

    return (
        <TemplatePublic
            sidebar={<PublicSideBar />}
            main={<PrivateMainNewRoom />}
        />
    )
}
