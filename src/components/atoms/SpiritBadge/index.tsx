import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Label from './__styled__/Label'

type Props = {
  id: string
  name: string
}

const SpiritBadge = ({
  id,
  name
}: Props) => {
  return (
    <Wrapper id={id}>
      <Label title={name}>{id}</Label>
    </Wrapper>
  )
}

export default React.memo(SpiritBadge)
