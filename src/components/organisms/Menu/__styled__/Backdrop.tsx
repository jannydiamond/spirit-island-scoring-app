import styled from 'styled-components/macro'

type Props = {
  menuIsOpen: boolean
}

const Backdrop = styled('div')<Props>`
  position: fixed;
  left: 0;
  top: ${props => props.theme.components.header.height};
  width: 100%;
  height: 100%;
  background: ${props => props.theme.components.menu.backdrop.background};
  visibility: ${props => props.menuIsOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.menuIsOpen ? '1' : '0'};
  z-index: ${props => props.menuIsOpen ? props.theme.zIndex.menu.backdrop : '-1'};
  transition: opacity .2s ease-in-out;
`

export default Backdrop
