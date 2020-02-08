import React from 'react'
import { useHistory } from 'react-router-dom'

import { Games } from 'config/data'

import * as types from 'types'

import FloatingButton from 'components/atoms/FloatingButton'
import Link from './__styled__/Link'
import ScoringTile from './ScoringTile'

const renderTiles = () => Games.map(
  (game: types.Game) => (
    <Link to={`/scorings/${game.id}`} key={game.id}>
      <ScoringTile game={game} />
    </Link>
  )
)

const Scorings = () => {
  const history = useHistory()
  
  return (
    <React.Fragment>
      {renderTiles()}
      <FloatingButton icon="add" onClick={() => history.push('/create-scoring')} />
    </React.Fragment>
  );
}

export default React.memo(Scorings)
