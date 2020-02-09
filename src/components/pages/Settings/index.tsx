import React from 'react'

import data from 'config'

import P from 'components/atoms/__styled__/P'
import Tile from 'components/atoms/__styled__/Tile'
import ExpansionsList from './ExpansionsList'

const Settings = () => {
  const { expansions } = data.NORMALIZEDDATA

  return (
    <React.Fragment>
      <Tile>
        <P>Choose the expansions you have:</P>
        <ExpansionsList expansions={expansions} />
      </Tile>
    </React.Fragment>
  )
}

export default Settings;
