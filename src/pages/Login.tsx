import { PublicMainLogin } from '../components/organisms/PublicMainLogin'
import { PublicSideBar } from '../components/organisms/PublicSideBar'
import { TemplatePublic } from '../components/templates/TemplatePublic'

export const PageLogin = () => {
    return (
        <TemplatePublic
            sidebar={<PublicSideBar />}
            main={<PublicMainLogin />}
        />
    )
}
