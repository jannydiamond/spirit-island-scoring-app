import React from 'react'

import Wrapper from './__styled__/Wrapper'
import Label from './__styled__/Label'

type Props = {
  score: number,
  large?: boolean
}

const Scoring = ({
  score,
  large
}: Props) => {
  return (
    <Wrapper large={large}>
      <Label large={large}>{score}</Label>
    </Wrapper>
  )
}

export default React.memo(Scoring)
