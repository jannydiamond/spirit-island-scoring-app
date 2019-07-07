import React from 'react';

type Props = {
  playerCount: number,
  difficulty: number,
  className?: string
}

const TileInfoListBase = (props: Props) => (
  <ul className={props.className}>
    <li>
      <i className="ra ra-player" title="Players"></i>
      <span>{props.playerCount}</span>
    </li>
    <li>
      <i className="ra ra-cubes" title="Difficulty"></i>
      <span>{props.difficulty}</span>
    </li>
  </ul>
);

export default TileInfoListBase;