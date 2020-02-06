import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from 'components/organisms/Menu'
import Wrapper from './__styled__/Wrapper'
import Title from './__styled__/Title'

type Props = {
  menuIsOpen: boolean
  toggleMenu: () => void
}

const Header = ({
  menuIsOpen,
  toggleMenu
}: Props) => (
  <Wrapper>
    <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    <Title>
      <Switch>
        <Route exact path='/scorings' render={() => 'Scorings'} />
        <Route exact path='/scorings/:id' render={() => 'Scorings'} />
        <Route exact path='/settings' render={() => 'Settings'} />
      </Switch>
    </Title>
  </Wrapper>
);

export default React.memo(Header)
