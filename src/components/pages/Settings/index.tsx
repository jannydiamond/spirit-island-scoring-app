import React from 'react'

import * as data from 'config/data'

import P from 'components/atoms/__styled__/P'
import Tile from 'components/atoms/__styled__/Tile'
import ExpansionsList from './ExpansionsList'

const Settings = () => {
  return (
    <React.Fragment>
      <Tile>
        <P>Choose the expansions you have:</P>
        <ExpansionsList expansions={data.Expansions} />
      </Tile>
    </React.Fragment>
  );
}

export default Settings;
