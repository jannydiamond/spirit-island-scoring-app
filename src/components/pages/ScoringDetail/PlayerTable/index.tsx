import React from 'react'

import * as types from 'types'

import SpiritBadge from 'components/atoms/SpiritBadge'
import Table from './__styled__/Table'
import TableRow from './__styled__/TableRow'
import TableHead from './__styled__/TableHead'
import TableCellHead from './__styled__/TableCellHead'
import TableBody from './__styled__/TableBody'
import TableCellBody from './__styled__/TableCellBody'

type Props = {
  game: types.Game
}

const renderPlayers = (game: types.Game) => {
  return game.players.map(
    (player: types.Player) => (
      <TableRow key={player.id}>
        <TableCellBody type="spirit" className="spirit"><SpiritBadge name={player.spirit.name} id={player.spirit.id} /></TableCellBody>
        <TableCellBody type="board" className="board">{player.board}</TableCellBody>
        <TableCellBody type="player" className="player">{player.name}</TableCellBody>
      </TableRow>
    )
  );
}

const PlayerTable = ({
  game
}: Props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead type="spirit">Spirit</TableCellHead>
          <TableCellHead type="board">Board</TableCellHead>
          <TableCellHead type="player">Player</TableCellHead>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderPlayers(game)}
      </TableBody>
    </Table>
  )
}

export default React.memo(PlayerTable)
