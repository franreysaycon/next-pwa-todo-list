  
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.main};
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    background-color: ${({ theme }) => theme.bgColor.main};
    color: ${({ theme }) => theme.fontColor.main};
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
