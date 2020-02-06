import React from 'react'

import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import IconItem from './IconItem'

type Props = {
  playerCount: number,
  difficulty: number,
}

const ScoringInfoList = ({
  playerCount,
  difficulty
}: Props) => {
  return (
    <List>
      <ListItem>
        <IconItem icon="player" title="Players" amount={playerCount} />
      </ListItem>
      <ListItem>
        <IconItem icon="cubes" title="Difficulty" amount={difficulty} />
      </ListItem>
    </List>
  )
}

export default React.memo(ScoringInfoList)
