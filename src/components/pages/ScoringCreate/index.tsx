import React from 'react'

import BackLink from 'components/atoms/BackLink'
import Players from './Players'
import GameSetup from './GameSetup'
import GameResults from './GameResults'
import FormControls from './FormControls'

const ScoringCreate = () => {
  return (
    <React.Fragment>
      <BackLink to="/scorings" label="Back to scorings" />
      <Players />
      <GameSetup />
      <GameResults />
      <FormControls />
    </React.Fragment>
  )
}

export default React.memo(ScoringCreate)
