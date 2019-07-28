import React from 'react';
import Header from '../../components/Header';
import Content from './Content';

import Tile from './Tile';
import ExpansionsList from './ExpansionsList/index';

const Expansions = [
  {
    id: "core",
    name: "Spirit Island Core Game",
    checked: false
  },
  {
    id: "bac",
    name: "Branch and Claws",
    checked: false
  },
  {
    id: "promo1",
    name: "Promo Spirits 1",
    checked: false
  }
];

const Settings = () => {
  return (
    <div>
      <Header title="Settings" back="/overview" onSettingsPage />
      <Content>
        <Tile>
          <p>Choose the expansions you have:</p>
          <ExpansionsList expansions={Expansions} />
        </Tile>
      </Content>
    </div>
  );
}

export default Settings;