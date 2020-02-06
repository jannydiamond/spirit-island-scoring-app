import styled from 'styled-components/macro'

const Logo = styled('img')`
  height: ${props => props.theme.components.githubLink.logo.size};
  width: ${props => props.theme.components.githubLink.logo.size};
  margin-right: 8px;
`

export default Logo
