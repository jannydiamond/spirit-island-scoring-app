import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: ${ props => props.theme.components.navigation.link.color };
  text-decoration: none;
  display: block;
  line-height: ${ props => props.theme.components.navigation.link.lineHeight };
  padding: 0 16px;
`

export default Link
