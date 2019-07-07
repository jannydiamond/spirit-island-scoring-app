import React from 'react';
import SpiritBadgeText from './SpiritBadgeText';

type Props = {
  id: string,
  name: string,
  className?: string
}

const SpiritBadgeBase = (props: Props) => (
  <div className={props.className}>
    <SpiritBadgeText title={props.name}>{props.id}</SpiritBadgeText>
  </div>
);

export default SpiritBadgeBase;