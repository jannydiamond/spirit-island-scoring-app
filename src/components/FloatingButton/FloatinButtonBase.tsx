import React from 'react';

type Props = {
  icon: string,
  className?: string
}

const FloatingButtonBase = (props: Props) => (
  <button className={props.className}>
    <i className="material-icons">{props.icon}</i>
  </button>
);

export default FloatingButtonBase;