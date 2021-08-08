import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/Theme'
import { AuthProvider } from '../src/hooks/useAuth'

import '../styles/globals.css'
import '../src/services/firebase'

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthProvider>
    )
}
