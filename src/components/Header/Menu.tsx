import styled from 'styled-components';
import MenuBase from './MenuBase';

const Menu = styled(MenuBase)`
  position: absolute;
  right: 0;
  z-index: 10;
  background: white;
  top: 100%;
  transform: translateX(200%);
  transition: transform .3s ease-in-out;
  padding: 16px 0;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
  color: black;
  min-width: 200px;

  &.is-open {
    transform: translateX(0);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      cursor: pointer;
      height: 40px;
      transition: background-color .3s ease-in-out;

      &:hover {
        background-color: #efefef;
      }

      a {
        color: inherit;
        text-decoration: none;
        display: block;
        line-height: 40px;
        padding: 0 16px;
      }
    }
  }
`;

export default Menu;