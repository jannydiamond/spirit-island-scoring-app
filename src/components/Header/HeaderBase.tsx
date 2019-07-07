import React from 'react';

const HeaderBase = (props: any) => (
  <header className={props.className}>
    <h1>{props.title}</h1>
    <div>
      Menu
    </div>
  </header>
);

export default HeaderBase;