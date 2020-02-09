import React from 'react'

import data from 'config'

import * as types from 'types'

import FormGroupInput from 'components/molecules/FormGroupInput'
import FormGroupSelect from 'components/molecules/FormGroupSelect'
import Wrapper from './__styled__/Wrapper'

type Props = {
  playerNumber: number
}

const optionsBoard = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
]

const SPIRITS = Object.values(data.NORMALIZEDDATA.spirits)
const optionsSpirit = SPIRITS.map((spirit: types.Spirit) => {
  return {
    value: spirit.id,
    label: spirit.name
  }
})

const Player = ({
  playerNumber
}: Props) => {
  return (
    <Wrapper>
      <FormGroupInput id={`player${playerNumber}`} label={`Player ${playerNumber}`} />
      <FormGroupSelect
        id={`boardPlayer${playerNumber}`}
        defaultValue={optionsBoard[0]}
        label="Board"
        options={optionsBoard}
      />
      <FormGroupSelect
        id={`spiritPlayer${playerNumber}`}
        defaultValue={optionsSpirit[0]}
        label="Spirit"
        options={optionsSpirit}
      />
    </Wrapper>
  )
}

export default React.memo(Player)
