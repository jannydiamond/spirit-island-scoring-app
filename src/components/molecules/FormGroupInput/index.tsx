import React from 'react'

import Label from 'components/atoms/__styled__/Label'
import Input from 'components/atoms/__styled__/Input'
import Wrapper from './__styled__/Wrapper'

type Props = {
  id: string
  label: string
  defaultValue?: string
  type?: string
}

const FormGroupInput = ({ id, label, defaultValue, type }: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type || 'text'} value={defaultValue} />
    </Wrapper>
  )
}

export default FormGroupInput
