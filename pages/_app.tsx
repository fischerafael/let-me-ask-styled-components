import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/Theme'

import '../styles/globals.css'
import '../src/services/firebase'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
