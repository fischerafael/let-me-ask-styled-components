import {
    UserCircleIcon,
    CheckIcon,
    ChatAltIcon,
    TrashIcon
} from '@heroicons/react/outline'

import {
    Image,
    OutlineButton,
    LayoutHeader,
    LayoutNavBar,
    LayoutMain,
    LayoutHeaderMain,
    LayoutMainMain,
    LayoutCard,
    LayoutCardHeader,
    LayoutCardFooter,
    NavBarActionsSection,
    TextTitleDark,
    TextHashtag,
    TextParagraph
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
                    <LayoutCard>
                        <LayoutCardHeader>
                            <TextParagraph>
                                Olá, eu gostaria de saber como criar componente
                                funcional dentro do React e se existe diferença
                                na performance entre um componente com classes?
                            </TextParagraph>
                        </LayoutCardHeader>

                        <LayoutCardFooter>
                            <section
                                style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    alignItems: 'center'
                                }}
                            >
                                <UserCircleIcon
                                    style={{
                                        width: '2rem',
                                        height: '2rem',
                                        color: '#835AFD'
                                    }}
                                />
                                <p style={{ color: '#737380' }}>
                                    Rachel Laguna Martins
                                </p>
                            </section>
                            <section style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckIcon
                                    style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        color: '#737380'
                                    }}
                                />
                                <ChatAltIcon
                                    style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        color: '#737380'
                                    }}
                                />
                                <TrashIcon
                                    style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        color: '#737380'
                                    }}
                                />
                            </section>
                        </LayoutCardFooter>
                    </LayoutCard>
                </LayoutMainMain>
            </LayoutMain>
        </div>
    )
}
