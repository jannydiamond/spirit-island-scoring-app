import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  display: inline-block;
  font-size: ${props => props.theme.components.backLink.fontSize};
  margin-left: -6px;
  text-decoration: none;
  color: ${props => props.theme.components.backLink.color};
  transition: color .2s ease-in-out;

  &:hover,
  &:active {
    color: ${props => props.theme.components.backLink.hover.color};
  }
`

export default Link
