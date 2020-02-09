import React from 'react'

import * as types from 'types'

import SpiritBadge from 'components/atoms/SpiritBadge'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'

type Props = {
  players: types.Player[]
}

const renderPlayers = (players: types.Player[]) => {
  return players.map((player: types.Player) => (
    <ListItem key={player.id}>
      <SpiritBadge name={player.spirit.name} id={player.spirit.id} shortName={player.spirit.shortName} />
    </ListItem>
  ));
};

const ScoringSpiritList = ({
  players
}: Props) => {
  return (
    <List>
      {renderPlayers(players)}
    </List>
  )
}

export default React.memo(ScoringSpiritList)
