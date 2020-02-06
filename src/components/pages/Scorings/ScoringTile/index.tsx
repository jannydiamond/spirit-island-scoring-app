import React from 'react'

import * as types from 'types'

import Scoring from 'components/atoms/Scoring'
import ScoringInfoList from 'components/atoms/ScoringInfoList'
import ScoringSpiritList from 'components/atoms/ScoringSpiritList'
import Tile from './__styled__/Tile'
import Content from './__styled__/Content'
import Title from './__styled__/Title'

type Props = {
  game: types.Game,
}

const ScoringTile = ({
  game
}: Props) => {
  return (
    <Tile> 
      <Content>
        <Title>{game.date}</Title>
        <ScoringInfoList playerCount={game.players.length} difficulty={game.difficulty} />
        <ScoringSpiritList players={game.players} />
      </Content>
      <Scoring score={game.scoring} />
    </Tile>
  )
}

export default React.memo(ScoringTile)
