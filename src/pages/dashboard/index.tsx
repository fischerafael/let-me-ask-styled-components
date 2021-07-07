import {
    Image,
    OutlineButton,
    LayoutHeader,
    LayoutNavBar,
    LayoutMain,
    LayoutHeaderMain,
    LayoutMainMain,
    LayoutDashboardPage,
    LayoutCardHeader,
    LayoutCardFooter,
    NavBarActionsSection,
    TextTitleDark,
    TextHashtag,
    TextParagraph
} from '../../../styles/components'

import { ChatAlt2Icon } from '@heroicons/react/outline'
import { CustomInputWithIcon } from '../../components/InputWithIcon'
import { Card } from '../../components/Card'

export const DashboardPage = () => {
    return (
        <LayoutDashboardPage>
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

            <main
                style={{
                    minHeight: '85vh',
                    background: '#f8f8f8',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '1rem 0'
                }}
            >
                <section
                    style={{
                        width: '100%',
                        maxWidth: '60rem',
                        padding: '0 1rem',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        height: '10vh'
                    }}
                >
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Sala React
                    </h1>
                    <h2
                        style={{
                            background: '#E559F9',
                            fontSize: '1rem',
                            padding: '0rem 2rem',
                            height: '2rem',
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white'
                        }}
                    >
                        4 perguntas
                    </h2>
                </section>

                <section style={{ display: 'flex' }}>
                    <h1>oi</h1>
                </section>
            </main>

            {/* <LayoutMain>
                <LayoutHeaderMain>
                    <TextTitleDark>Sala React</TextTitleDark>
                    <TextHashtag>4 perguntas</TextHashtag>
                </LayoutHeaderMain>

                <LayoutMainMain>
                    <Card />
                    <Card />
                    <Card />
                </LayoutMainMain>
            </LayoutMain> */}
        </LayoutDashboardPage>
    )
}
