import React from 'react';
import Header from '../../components/Header';

import Content from './Content';
import FloatingButton from './FloatingButton';

import Tile from './Tile';

import { Games } from './data';
import { Game } from './types';

const Overview = () => {
  const renderTiles = () => {
    return Games.map((game: Game) => (
      <Tile to="#" key={game.id} game={game}/>
    ));
  }

  return (
    <React.Fragment>
      <Header title="Overview" />
      <Content>
        {renderTiles()}
      </Content>
      <FloatingButton icon="add" />
    </React.Fragment>
  );
}

export default Overview;