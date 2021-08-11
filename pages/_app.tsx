import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/Theme'
import { AuthProvider } from '../src/hooks/useAuth'

import '../styles/globals.css'
import '../src/services/firebase'
import { RoomProvider } from '../src/hooks/useRoom'

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <RoomProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </RoomProvider>
        </AuthProvider>
    )
}
