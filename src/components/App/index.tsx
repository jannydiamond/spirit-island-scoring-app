import React from 'react';

import logo from '../../logo.svg';

import Wrapper from './Wrapper';
import Header from './Header';
import Link from './Link';
import Logo from './Logo';

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Wrapper>
  );
}

export default App;



