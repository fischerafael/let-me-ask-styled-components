import {
    LayoutPage,
    LayoutSideBar,
    Image,
    Input,
    Button,
    TextTitle,
    TextSubTitle,
    LayoutActions,
    SecondaryButton,
    TextSeparator,
    LayoutForm,
    TextSubTitleDark
} from '../../../styles/components'

import { SideBar } from '../../components/SideBar'
import { CustomInput } from '../../components/Input'

export const NewRoomPage = () => {
    return (
        <LayoutPage>
            <SideBar />
            <LayoutActions>
                <Image
                    src="/assets/logo.svg"
                    alt="Logo Let me Ask"
                    style={{ maxWidth: '10rem', maxHeight: '10rem' }}
                />

                <TextSubTitleDark>Crie uma nova sala</TextSubTitleDark>

                <LayoutForm>
                    <CustomInput type="text" label="Nome da sala" />
                    <Button>Entrar na sala</Button>
                </LayoutForm>
            </LayoutActions>
        </LayoutPage>
    )
}
