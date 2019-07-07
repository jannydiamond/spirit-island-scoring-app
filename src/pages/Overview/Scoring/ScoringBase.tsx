import React from 'react';
import ScoringValue from './ScoringValue';

type Props = {
  score: number,
  className?: string
}

const ScoringBase = (props: Props) => (
  <div className={props.className}>
    <ScoringValue>{props.score}</ScoringValue>
  </div>
);

export default ScoringBase;