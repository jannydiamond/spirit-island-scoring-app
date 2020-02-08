import React from 'react'

import Button from 'components/atoms/__styled__/Button'
import Wrapper from './__styled__/Wrapper'

const FormControls = () => {
  return (
    <Wrapper>
      <Button outline>Abbrechen</Button>
      <Button>Speichern</Button>
    </Wrapper>
  )
}

export default React.memo(FormControls)
