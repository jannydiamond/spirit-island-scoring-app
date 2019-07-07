import styled from 'styled-components';
import TileBase from './TileBase';

const Tile = styled(TileBase)`
  border-radius: 4px;
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.1);
  margin: 0 8px 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
  color: inherit;
`;

export default Tile;