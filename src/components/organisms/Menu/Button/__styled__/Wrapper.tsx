import styled from 'styled-components/macro'

type Props = {
  menuIsOpen: boolean
}

const Wrapper = styled('button')<Props>`
  appearance: none;
  background: ${props => props.menuIsOpen 
    ? props.theme.components.menu.button.default.background.menuOpen
    : props.theme.components.menu.button.default.background.menuClosed
  };
  border: ${props => props.theme.components.menu.button.default.border};
  color: ${props => props.theme.components.menu.button.default.color};
  outline: 0;
  height: ${props => props.theme.components.menu.button.default.size};
  width: ${props => props.theme.components.menu.button.default.size};
  cursor: pointer;
  margin: 0 16px 0 -16px;
  transition: background-color .2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.components.menu.button.hover.background};
  }
`

export default Wrapper
