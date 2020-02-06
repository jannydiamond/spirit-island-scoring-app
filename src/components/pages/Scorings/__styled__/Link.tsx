import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: ${props => props.theme.pages.scorings.link.color};
  text-decoration: none;
`

export default Link
