import React from 'react'

import Backdrop from './__styled__/Backdrop'
import Button from './Button'
import Flyout from './Flyout'

type Props = {
  menuIsOpen: boolean
  toggleMenu: () => void
}

const Menu = ({
  menuIsOpen,
  toggleMenu
}: Props) => {

  return (
    <React.Fragment>
      <Button menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} icon="menu" />
      <Flyout menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <Backdrop menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </React.Fragment>
  )
};

export default React.memo(Menu)
