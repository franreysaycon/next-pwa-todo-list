import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../GlobalStyles'
import theme from '../theme'
import 'typeface-blinker'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
