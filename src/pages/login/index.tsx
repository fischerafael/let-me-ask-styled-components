import styled from 'styled-components'

export const LoginPage = () => {
    return (
        <LayoutPage>
            <LayoutSideBar>
                <Image
                    src="/assets/illustration.svg"
                    alt=""
                    style={{ width: '14rem' }}
                />
                <TextTitle>Toda pergunta tem uma resposta.</TextTitle>
                <TextSubTitle>
                    Aprenda e compartilhe conhecimento com outras pessoas
                </TextSubTitle>
            </LayoutSideBar>

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

                <form>
                    <label>
                        <span>Código da sala</span>
                        <input type="text" />
                    </label>
                    <Button>Entrar na sala</Button>
                </form>
            </LayoutActions>
        </LayoutPage>
    )
}

const LayoutPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const LayoutSideBar = styled.aside`
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
`

const LayoutActions = styled.main`
    background: ${(props) => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const TextTitle = styled.h1`
    font-size: 2rem;
    color: white;
`

const TextSubTitle = styled.h2`
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
    font-weight: normal;
`

const TextSeparator = styled.span`
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 3rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border-radius: 0.5rem;
    gap: 1rem;
`

const SecondaryButton = styled(Button)`
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
`
