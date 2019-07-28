import React, { useState } from 'react';
import BackLink from './BackLink';
import MenuButton from './MenuButton';
import Menu from './Menu';

const HeaderBase = (props: any) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const renderBackLink = (url: string) => {
    if(url) return (
      <BackLink to={url}><i className="material-icons">chevron_left</i></BackLink>
    )
  }

  const handleClick = () => {
    setMenuOpenState(!menuOpenState);
  }

  return (
    <header className={props.className}>
      {renderBackLink(props.back)}
      <h1>{props.title}</h1>
      <div>
        <MenuButton handleClick={handleClick} />
        { 
          props.onSettingsPage 
            ? (<Menu className={menuOpenState ? 'is-open' : ''} onSettingsPage /> )
            : (<Menu className={menuOpenState ? 'is-open' : ''} />)
        }      
      </div>
      
    </header>
  )
};

export default HeaderBase;