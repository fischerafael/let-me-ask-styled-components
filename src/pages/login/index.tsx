import { LoginIcon } from '@heroicons/react/outline'

import {
    LayoutPage,
    Image,
    Input,
    Button,
    LayoutActions,
    SecondaryButton,
    TextSeparator,
    LayoutForm
} from '../../../styles/components'

import { SideBar } from '../../components/SideBar'
import { CustomInput } from '../../components/Input'

export const LoginPage = () => {
    return (
        <LayoutPage>
            <SideBar />

            <LayoutActions>
                <Image
                    src="/assets/logo.svg"
                    alt="Logo Let me Ask"
                    style={{ maxWidth: '10rem', maxHeight: '10rem' }}
                />

                <SecondaryButton>
                    <img
                        src="/assets/google-logo-white.svg"
                        alt="Logo da Google"
                    />
                    Cria sua sala com o Google
                </SecondaryButton>

                <TextSeparator>ou entre em uma sala</TextSeparator>

                <LayoutForm>
                    <CustomInput type="text" label="Código da sala" />
                    <Button>
                        <LoginIcon
                            style={{ width: '1.5rem', height: '1.5rem' }}
                        />
                        Entrar na sala
                    </Button>
                </LayoutForm>
            </LayoutActions>
        </LayoutPage>
    )
}
