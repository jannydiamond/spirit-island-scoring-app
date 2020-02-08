import styled from 'styled-components/macro'

const Input = styled('input')`
  border: ${props => props.theme.components.input.border};
  height: ${props => props.theme.components.input.height};
  padding: 0px 12px;
  border-radius: ${props => props.theme.components.input.borderRadius};
  transition: border-color 0.2s ease-in-out;
  outline: 0;
  width: 100%;

  &:hover {
    border-color: ${props => props.theme.components.input.hover.borderColor};
  }

  &:focus {
    border-color: ${props => props.theme.components.input.focus.borderColor};
  }
`

export default Input
