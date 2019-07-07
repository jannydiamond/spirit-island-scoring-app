import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Overview from '../../pages/Overview';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/overview' />} />
        <Route exact path='/overview' component={Overview} />
      </Switch>
    </HashRouter>
  );
}

export default App;



