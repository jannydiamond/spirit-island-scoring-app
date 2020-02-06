import styled from 'styled-components/macro'

const ListItem = styled('li')`
  cursor: pointer;
  height: ${props => props.theme.components.navigation.listItem.height};
  transition: background-color .2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.components.navigation.listItem.hover.background};
  }
`

export default ListItem
