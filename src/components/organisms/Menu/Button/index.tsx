import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Icon from './__styled__/Icon'

type Props = {
  icon: string,
  menuIsOpen: boolean,
  toggleMenu: () => void
}

const Button = ({
  icon,
  menuIsOpen,
  toggleMenu
}: Props) => {
  return (
    <Wrapper menuIsOpen={menuIsOpen} onClick={toggleMenu}>
      <Icon className="material-icons">{icon}</Icon>
    </Wrapper>
  );
}

export default Button
