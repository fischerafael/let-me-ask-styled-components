import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/Theme'
import { AuthProvider } from '../src/hooks/useAuth'
import { RoomProvider } from '../src/hooks/useRoom'
import { QuestionProvider } from '../src/hooks/useQuestion'

import '../styles/globals.css'
import '../src/services/firebase'

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <RoomProvider>
                <QuestionProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </QuestionProvider>
            </RoomProvider>
        </AuthProvider>
    )
}
