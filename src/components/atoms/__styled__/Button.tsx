import styled from 'styled-components/macro'

type Props = {
  outline?: boolean
}

const Button = styled('button')<Props>`
  background: ${props => props.outline 
    ? props.theme.components.button.background.outline
    : props.theme.components.button.background.default};
  color: ${props => props.outline
    ? props.theme.components.button.color.outline
    : props.theme.components.button.color.default};
  border: ${props => props.theme.components.button.border};
  height: ${props => props.theme.components.button.height};
  padding: 0px 12px;
  border-radius: ${props => props.theme.components.button.borderRadius};
  outline: 0;
  transition: background-color .2s ease-in-out, border-color .2s ease-in-out, color .2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: ${props => props.theme.components.button.hover.background};
    border-color: ${props => props.theme.components.button.hover.borderColor};
    color: ${props => props.theme.components.button.hover.color};
  }
`

export default Button
