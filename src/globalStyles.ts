import { createGlobalStyle } from 'styled-components'
import { Theme } from 'types'

type Props = {
  theme: Theme
}

const GlobalStyles = createGlobalStyle<Props>`
  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    color: ${props => props.theme.colors.text.primary};
    font-weight: ${props => props.theme.typography['text'].fontWeight};
    font-size: ${props => props.theme.typography['text'].fontSize};
    line-height: ${props => props.theme.typography['text'].lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.menu-open {
      overflow: hidden;
    }
  }

 
`

export default GlobalStyles
