import React from 'react'

import Label from 'components/atoms/__styled__/Label'
import Select from 'components/atoms/__styled__/Select'
import Wrapper from './__styled__/Wrapper'

type SelectValue = {
  value: string
  label: string
}

type Props = {
  id: string
  label: string
  defaultValue?: SelectValue
  options: SelectValue[]
}

const FormGroupSelect = ({
  id,
  label,
  defaultValue,
  options
}: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Select
        id={id}
        defaultValue={defaultValue}
        label={label}
        isSearchable={false}
        options={options}
        classNamePrefix="react-select"
      />
    </Wrapper>
  )
}

export default FormGroupSelect
