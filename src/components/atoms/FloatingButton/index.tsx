import React from 'react'

import Button from './__styled__/Button'
import Icon from './__styled__/Icon'

type Props = {
  icon: string
}

const FloatingButton = (props: Props) => (
  <Button>
    <Icon className="material-icons">{props.icon}</Icon>
  </Button>
);

export default React.memo(FloatingButton)
