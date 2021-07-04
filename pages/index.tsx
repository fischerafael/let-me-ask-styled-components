import styled from 'styled-components'
import { LoginPage } from '../src/pages/login'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
    return <LoginPage />
}
