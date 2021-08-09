import { PublicMainLogin } from '../components/organisms/PublicMainLogin'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'
import { useAuth } from '../hooks/useAuth'

export const PageLogin = () => {
    const { signInWithGoogle, user } = useAuth()

    console.log(user)

    const onClick = async (e) => {
        e.preventDefault()
        await signInWithGoogle()
    }

    return (
        <TemplatePublic
            sidebar={<PublicSideBar />}
            main={<PublicMainLogin onClick={onClick} />}
        />
    )
}
