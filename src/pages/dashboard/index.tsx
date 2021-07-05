import {
    Image,
    OutlineButton,
    LayoutHeader,
    LayoutNavBar,
    NavBarActionsSection
} from '../../../styles/components'

import { ChatAlt2Icon } from '@heroicons/react/outline'
import { CustomInputWithIcon } from '../../components/InputWithIcon'

export const DashboardPage = () => {
    return (
        <div>
            <LayoutHeader>
                <LayoutNavBar>
                    <Image
                        src="/assets/logo.svg"
                        alt=""
                        style={{ width: '6rem' }}
                    />
                    <NavBarActionsSection>
                        <CustomInputWithIcon label="Sala">
                            <ChatAlt2Icon />
                        </CustomInputWithIcon>
                        <OutlineButton>Encerrar Sala</OutlineButton>
                    </NavBarActionsSection>
                </LayoutNavBar>
            </LayoutHeader>
            <main>
                <h1>Sal</h1>
            </main>
        </div>
    )
}
