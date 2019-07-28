import styled from 'styled-components';
import MenuButtonBase from './MenuButtonBase';

const MenuButton = styled(MenuButtonBase)`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: #fff;
  outline: 0;
  height: 48px;
  width: 48px;
  cursor: pointer;
  margin-right: -16px;

  &:hover {
    background-color: #133352;
  }
`;

export default MenuButton;