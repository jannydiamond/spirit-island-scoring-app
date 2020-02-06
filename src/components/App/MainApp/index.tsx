import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Scorings from 'components/pages/Scorings'
import ScoringDetail from 'components/pages/ScoringDetail'
import Settings from 'components/pages/Settings'
import Header from 'components/molecules/Header'
import Main from 'components/atoms/__styled__/Main'

const MainApp = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  // ToDo: Find better way to set overflow: hidden when menu is open
  const body = document.querySelector('body')

  const toggleMenu = () => {
    body && body.classList.toggle('menu-open')
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <React.Fragment>
      <Header menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <Main>
        <Switch>
          <Route exact path='/scorings' component={Scorings} />
          <Route exact path='/scorings/:id' component={ScoringDetail} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/' render={() => <Redirect to='/scorings' />} />
        </Switch>
      </Main>
    </React.Fragment>
  )
}

export default React.memo(MainApp)
