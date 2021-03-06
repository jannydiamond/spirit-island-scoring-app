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

const Checkbox = ({
  id,
  label,
  checked,
  name
}: Props) => {
  const [checkboxCheckedState, setCheckboxCheckedState] = useState(checked);

  const handleChange = () => {
    setCheckboxCheckedState(!checkboxCheckedState);
  }

  return (
    <Wrapper>
      <Input id={id} type="checkbox" name={name} onChange={handleChange} defaultChecked={checkboxCheckedState} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}

export default Checkbox
