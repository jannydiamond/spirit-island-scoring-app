import React from 'react';
import { Link } from 'react-router-dom';
import TileContent from './TileContent';
import TileTitle from './TileTitle';
import TileInfoList from '../TileInfoList';
import TileSpiritList from '../TileSpiritList';
import Scoring from '../Scoring';

import { Game } from '../../../types';

type Props = {
  to: string,
  game: Game,
  className?: string
}

const TileBase = (props: Props) => (
  <Link to={props.to} className={props.className}>
    <TileContent>
      <TileTitle>{props.game.date}</TileTitle>
      <TileInfoList playerCount={props.game.players.length} difficulty={props.game.difficulty} />
      <TileSpiritList players={props.game.players} />
    </TileContent>
    <Scoring score={props.game.scoring} />
  </Link>
);

export default TileBase;