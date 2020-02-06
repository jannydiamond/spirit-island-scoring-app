import styled from 'styled-components/macro'

const Button = styled('button')`
  display: block;
  width: ${props => props.theme.components.floatingButton.size};
  height: ${props => props.theme.components.floatingButton.size};
  position: fixed;
  right: 16px;
  bottom: 16px;
  box-shadow: ${props => props.theme.components.floatingButton.boxShadow};
  border-radius: ${props => props.theme.components.floatingButton.borderRadius};
  background-color: ${props => props.theme.components.floatingButton.background};
  border: ${props => props.theme.components.floatingButton.border};
  color: ${props => props.theme.components.floatingButton.color};
  outline: none;
  cursor: pointer;
  z-index: ${props => props.theme.zIndex.floatingButton};
`

export default Button
