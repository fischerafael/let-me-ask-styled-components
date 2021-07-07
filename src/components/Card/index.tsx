import {
    UserCircleIcon,
    CheckIcon,
    ChatAltIcon,
    TrashIcon
} from '@heroicons/react/outline'

import {
    LayoutCard,
    LayoutCardHeader,
    LayoutCardFooter,
    TextParagraph
} from '../../../styles/components'

export const Card = () => {
    return (
        <LayoutCard>
            <LayoutCardHeader>
                <TextParagraph>
                    Olá, eu gostaria de saber como criar componente funcional
                    dentro do React e se existe diferença na performance entre
                    um componente com classes?
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
                    <p style={{ color: '#737380' }}>Rachel Laguna Martins</p>
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
    )
}
