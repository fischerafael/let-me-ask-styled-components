import styled from 'styled-components'

export const LayoutPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const LayoutSideBar = styled.aside`
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
`

export const LayoutActions = styled.main`
    background: ${(props) => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

export const TextTitle = styled.h1`
    font-size: 2rem;
    color: white;
`

export const TextSubTitle = styled.h2`
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
    font-weight: normal;
`

export const TextSubTitleDark = styled.h2`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
`

export const TextSeparator = styled.span`
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.grey};
`

export const TextAnchorTextHelper = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey};
`

export const TextAnchor = styled.a`
    cursor: pointer;
    font-weight: 700;
    color: ${(props) => props.theme.colors.pink};
`

export const Button = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    max-width: 20rem;

    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border-radius: 0.5rem;
    gap: 1rem;
    max-height: 3.5rem;

    transition: 0.5s;

    &:hover {
        filter: brightness(75%);
    }
`

export const SecondaryButton = styled(Button)`
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
`

export const OutlineButton = styled(Button)`
    background: transparent;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
    border: solid 1.5px ${(props) => props.theme.colors.primary};
    max-width: 10rem;

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
    }
`

export const LayoutForm = styled.form`
    width: 100%;
    max-width: 20rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const LayoutHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    border-bottom: solid 1px ${(props) => props.theme.colors.grey};
`

export const LayoutNavBar = styled.nav`
    display: flex;
    padding: 0 1rem;
    width: 100%;
    max-width: 60rem;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`

export const NavBarActionsSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
`

export const InputWithIcon = styled.div`
    display: flex;
    border: solid 1.5px ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    overflow: hidden;
    height: 3.5rem;

    div {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;

        svg {
            background: ${(props) => props.theme.colors.primary};
            color: white;
            width: 5rem;
            padding: 0.75rem;
            height: 100%;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 0 1rem;

        span {
            font-size: 0.75rem;
            color: ${(props) => props.theme.colors.grey};
        }

        input {
            border: none;
            outline: none;
        }
    }
`

export const Input = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: center;
    padding: 0 1rem;

    width: 100%;
    height: 3.5rem;

    background: white;
    border: solid 1px ${(props) => props.theme.colors.grey};
    border-radius: 0.5rem;

    span {
        font-size: 0.75rem;
        color: ${(props) => props.theme.colors.grey};
    }

    input {
        border: none;
        outline: none;
    }
`
