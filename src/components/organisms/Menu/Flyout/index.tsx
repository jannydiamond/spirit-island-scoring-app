import React from 'react'

import Navigation from 'components/molecules/Navigation'
import Divider from 'components/atoms/__styled__/Divider'
import AppInfo from 'components/atoms/AppInfo'
import Wrapper from './__styled__/Wrapper'

type Props = {
  menuIsOpen: boolean,
  toggleMenu: () => void
}

const Flyout = ({
  menuIsOpen,
  toggleMenu
}: Props) => {
  return (
    <Wrapper menuIsOpen={menuIsOpen} onClick={toggleMenu}>
      <Navigation />
      <Divider />
      <AppInfo />
    </Wrapper>
  );
}

export default React.memo(Flyout)
