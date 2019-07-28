import React from 'react';

const MenuButtonBase = (props: any) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      <span className="material-icons">menu</span>
    </button>
  );
}

export default MenuButtonBase;