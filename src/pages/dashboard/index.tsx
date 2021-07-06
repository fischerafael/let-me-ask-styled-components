import {
    Image,
    OutlineButton,
    LayoutHeader,
    LayoutNavBar,
    LayoutMain,
    LayoutHeaderMain,
    LayoutMainMain,
    NavBarActionsSection,
    TextTitleDark,
    TextHashtag
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
            <LayoutMain>
                <LayoutHeaderMain>
                    <TextTitleDark>Sala React</TextTitleDark>
                    <TextHashtag>4 perguntas</TextHashtag>
                </LayoutHeaderMain>

                <LayoutMainMain>
                    <li>
                        <p>
                            Olá, eu gostaria de saber como criar componente
                            funcional dentro do React e se existe diferença na
                            performance entre um componente com classes?
                        </p>
                        <footer>
                            <section>
                                <img src="/" alt="user icon" />
                                <p>Rachel Laguna Martins</p>
                            </section>
                            <section>
                                <img src="" alt="check" />
                                <img src="" alt="comment" />
                                <img src="" alt="trash" />
                            </section>
                        </footer>
                    </li>
                </LayoutMainMain>
            </LayoutMain>
        </div>
    )
}
