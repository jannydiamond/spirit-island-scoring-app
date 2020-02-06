import React from 'react'

import Icon from './__styled__/Icon'
import Text from './__styled__/Text'

type Props = {
  icon: string,
  title: string,
  amount: number,
}

const IconItem = ({
  icon,
  title,
  amount
}: Props) => {
  return (
    <React.Fragment>
      <Icon className={`ra ra-${icon}`} title={title} />
      <Text>{amount}</Text>
    </React.Fragment>
  )
}

export default React.memo(IconItem)
