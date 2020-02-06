import styled from 'styled-components/macro'

import AppInfo from 'components/atoms/AppInfo/__styled__/Wrapper'

type Props = {
  menuIsOpen: boolean
}

const Wrapper = styled('div')<Props>`
  position: fixed;
  left: 0;
  z-index: ${props => props.theme.zIndex.menu.flyout};
  background: ${props => props.theme.components.menu.flyout.background};
  top: ${props => props.theme.components.header.height};
  transform: translateX(-200%);
  transition: transform .3s ease-in-out;
  padding: 0;
  box-shadow: ${props => props.theme.components.menu.flyout.boxShadow};
  color: ${props => props.theme.components.menu.flyout.color};
  min-width: ${props => props.theme.components.menu.flyout.minWidth};
  height: 100%;

  ${props => props.menuIsOpen && `transform: translateX(0);`}

  ${AppInfo} {
    padding: 16px;
  }
`

export default Wrapper
