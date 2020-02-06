import styled from 'styled-components/macro'

const Tile = styled('div')`
  border-radius: ${props => props.theme.components.tile.borderRadius};
  box-shadow: ${props => props.theme.components.tile.boxShadow};
  margin: 0 0 16px;
  padding: 16px;
  user-select: none;
  text-decoration: none;
  color: ${props => props.theme.components.tile.color};
`

export default Tile
