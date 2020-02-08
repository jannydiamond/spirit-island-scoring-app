import React from 'react'

import Fieldset from 'components/atoms/__styled__/Fieldset'
import Legend from 'components/atoms/__styled__/Legend'
import Radiobutton from 'components/atoms/Radiobutton'
import Wrapper from './__styled__/Wrapper'

type Props = {
  groupLabel: string
  name: string
  options: Options
}

type Option = {
  id: string
  label: string
  isDefault?: boolean
}

type Options = Option[]

const FormGroupRadio = ({ 
  groupLabel,
  name, 
  options
}: Props) => {
  return (
    <Wrapper>
      <Fieldset>
        <Legend>{groupLabel}</Legend>
        {options.map((option: Option) => (
          <Radiobutton
            key={option.id}
            id={option.id}
            name={name}
            label={option.label}
            checked={option.isDefault ? true : false}
          />
        ))}
      </Fieldset>
    </Wrapper>
  )
}

export default FormGroupRadio
