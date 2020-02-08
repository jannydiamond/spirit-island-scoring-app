import React from 'react'

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

const optionsSpirit = [
  { value: 'RG', label: 'Rampend Green' },
  { value: 'L', label: 'Lightning' },
  { value: 'TS', label: 'Thunder Speaker' },
  { value: 'R', label: 'River' },
  { value: 'S', label: 'Serpent' },
]

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
