import React from 'react';
import BackLink from './BackLink';

const HeaderBase = (props: any) => {
  const renderBackLink = (url: string) => {
    if(url) return (
      <BackLink to={url}><i className="material-icons">chevron_left</i></BackLink>
    )
  }

  return (
    <header className={props.className}>
      {renderBackLink(props.back)}
      <h1>{props.title}</h1>
      <div>
        Menu
    </div>
    </header>
  )
};

export default HeaderBase;