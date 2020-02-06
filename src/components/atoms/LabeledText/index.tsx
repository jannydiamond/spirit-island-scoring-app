import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Label from './__styled__/Label'

type Props = {
  label: string
  children: React.ReactNode
}

const LabeledText = ({
  label,
  children
}: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  )
}

export default React.memo(LabeledText)
