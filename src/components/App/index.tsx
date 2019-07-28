import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Overview from '../../pages/Overview';
import ScoringView from '../../pages/Scoring';
import Settings from '../../pages/Settings';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/overview' />} />
        <Route exact path='/overview' component={Overview} />
        <Route exact path='/scoring/:id' component={ScoringView} />
        <Route exact path='/settings' component={Settings} />
      </Switch>
    </HashRouter>
  );
}

export default App;



