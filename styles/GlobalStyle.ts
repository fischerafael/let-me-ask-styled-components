import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => resetCSS}
`

const resetCSS = css`
    *,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #29292e;
    }

    body,
    input,
    button,
    textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`
