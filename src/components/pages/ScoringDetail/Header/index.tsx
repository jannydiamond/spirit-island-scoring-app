import React from 'react'

import * as types from 'types'


import Scoring from 'components/atoms/Scoring'
import ScoringInfoList from 'components/atoms/ScoringInfoList'
import BackLink from 'components/atoms/BackLink'
import Wrapper from './__styled__/Wrapper'
import Content from './__styled__/Content'
import Headline from './__styled__/Headline'

type Props = {
  game: types.Game
}

const Header = ({
  game
}: Props) => {
  return (
    <Wrapper>
      <Content>
        <BackLink to="/scorings" label="Back to scorings" />
        <Headline>{game.date}</Headline>
        <ScoringInfoList playerCount={game.players.length} difficulty={game.difficulty} />
      </Content>
      <Scoring score={game.scoring} large />
    </Wrapper>
  );
}

export default React.memo(Header)
