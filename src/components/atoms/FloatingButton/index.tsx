import React from 'react'

import Button from './__styled__/Button'
import Icon from './__styled__/Icon'

type Props = {
  icon: string,
  onClick?: () => void
}

const FloatingButton = ({
  icon,
  onClick
}: Props) => (
  <Button onClick={onClick}>
    <Icon className="material-icons">{icon}</Icon>
  </Button>
);

export default React.memo(FloatingButton)
