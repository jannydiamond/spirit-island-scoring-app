import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Overview from '../../pages/Overview';
import ScoringView from '../../pages/Scoring';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/overview' />} />
        <Route exact path='/overview' component={Overview} />
        <Route exact path='/scoring/:id' component={ScoringView} />
      </Switch>
    </HashRouter>
  );
}

export default App;



