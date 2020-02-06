import React from 'react'

import Wrapper from './__styled__/Wrapper'
import List from './__styled__/List'
import ListItem from './__styled__/ListItem'
import Link from './__styled__/Link'

const Navigation = () => {
  return (
    <Wrapper>
      <List>
        <ListItem><Link to="/scorings">Scorings</Link></ListItem>
        <ListItem><Link to="/settings">Settings</Link></ListItem>
      </List>
    </Wrapper>
  )
}

export default React.memo(Navigation)
