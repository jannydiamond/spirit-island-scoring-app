import React from 'react';
import { Link } from 'react-router-dom';

import Divider from './Divider';
import AppInfo from './AppInfo';
import GithubLink from './GithubLink';
import GithubLogo from './GithubLogo';

const MenuBase = (props: any) => {
  return (
    <div className={props.className}>
      {
        !props.onSettingsPage
          ? (
            <React.Fragment>
              <ul>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
              <Divider />
            </React.Fragment>
          )
          : null
      }
      <AppInfo>
        <GithubLink
          href="https://github.com/jannydiamond/spirit-island-scoring-app"
          target="_blank"
        >
          <GithubLogo src="images/github-logo.svg" alt="SVG: Github logo" />
          Github
        </GithubLink>
        Version: {process.env.REACT_APP_VERSION}
      </AppInfo>
    </div>
  );
}

export default MenuBase;