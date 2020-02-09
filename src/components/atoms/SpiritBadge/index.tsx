import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Label from './__styled__/Label'

type Props = {
  id: string
  name: string
  shortName: string
}

const SpiritBadge = ({
  id,
  name,
  shortName
}: Props) => {
  return (
    <Wrapper id={id}>
      <Label title={name}>{shortName}</Label>
    </Wrapper>
  )
}

export default React.memo(SpiritBadge)
