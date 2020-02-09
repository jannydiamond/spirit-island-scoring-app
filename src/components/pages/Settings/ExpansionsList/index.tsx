import React from 'react'

import * as types from 'types'

import Checkbox from 'components/atoms/Checkbox'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'

type Props = {
  expansions: types.Expansions
}

const renderExpansions = (expansions: types.Expansions ) => {
  const EXPANSIONS = Object.values(expansions)
  return EXPANSIONS.map((expansion: types.Expansion) => (
    <ListItem key={expansion.id}>
      <Checkbox
        id={expansion.id}
        name="expansions"
        label={expansion.name}
        checked={false}
      />
    </ListItem>
  ))
}

const ExpansionsList = ({
  expansions
}: Props) => {
  return(
    <List>
      {renderExpansions(expansions)}
    </List>
  )
}

export default React.memo(ExpansionsList)
