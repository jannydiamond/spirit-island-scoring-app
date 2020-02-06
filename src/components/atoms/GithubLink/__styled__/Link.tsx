import styled from 'styled-components/macro'

const Link = styled('a')`
  display: flex;
  align-items: center;
  color: ${props => props.theme.components.githubLink.link.color};
  text-decoration: none;
  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: .6;
  }
`

export default Link
