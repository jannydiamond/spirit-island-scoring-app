import React, { useState } from 'react'

import Wrapper from './__styled__/Wrapper'
import Input from './__styled__/Input'
import Label from './__styled__/Label'

type Props = {
  id: string
  label: string
  checked: boolean
  name: string
}

const Radiobutton = ({
  id,
  label,
  checked,
  name
}: Props) => {
  const [radioCheckedState, setRadioCheckedState] = useState(checked);

  const handleChange = () => {
    setRadioCheckedState(!radioCheckedState)
  }

  return (
    <Wrapper>
      <Input id={id} type="radio" name={name} onChange={handleChange} defaultChecked={radioCheckedState} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}

export default Radiobutton
