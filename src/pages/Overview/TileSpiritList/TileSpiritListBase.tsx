import React from 'react';
import SpiritBadge from '../SpiritBadge/index';

import { Player } from '../../../types';

type Props = {
  players: Player[],
  className?: string
}

const TileSpiritListBase = (props: Props) => {
  const renderItems = (players: Player[]) => {
    return players.map((player: Player) => (
      <li key={player.id}>
        <SpiritBadge name={player.spirit.name} id={player.spirit.id} />
      </li>
    ));
  };

  return (
    <ul className={props.className}>
      {renderItems(props.players)}
    </ul>
  )
}

export default TileSpiritListBase;