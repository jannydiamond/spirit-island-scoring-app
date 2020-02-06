import React from 'react'
import { useParams } from 'react-router-dom'

import { Games } from 'config/data'

import * as types from 'types'

import FloatingButton from 'components/atoms/FloatingButton'
import LabeledText from 'components/atoms/LabeledText'
import Section from './__styled__/Section'
import SectionHeadline from './__styled__/SectionHeadline'
import Header from './Header'
import PlayerTable from './PlayerTable'


const ScoringDetail = () => {
  const { id } = useParams()
  const game = Games.find((game: types.Game) => game.id === parseInt(id || '1')) || {} as types.Game

  return (
    <React.Fragment>
      <Header game={game} />

      <Section>
        <SectionHeadline>Players</SectionHeadline>
        <PlayerTable game={game} />
      </Section>

      <Section>
        <SectionHeadline>Game Setup</SectionHeadline>
        <LabeledText label="Map Type">
          {game.mapType}
        </LabeledText>
        <LabeledText label="Adversary">
          {game.adversary ? `${game.adversary.name}, Level ${game.adversary.level}` : '-'}
        </LabeledText>
        <LabeledText label="Scenario">
          {game.scenario ? `${game.scenario.name}, Level ${game.scenario.level}` : '-'}
        </LabeledText>
        <LabeledText label="Blight Card">
          {game.blightCard ? 'yes' : 'no'}
        </LabeledText>
        <LabeledText label="Event Deck">
          {game.eventDeck ? 'yes' : 'no'}
        </LabeledText>
      </Section>

      <Section>
        <SectionHeadline>Game Results</SectionHeadline>
        <LabeledText label="Blight Tokens">
          {game.blightToken}
        </LabeledText>
        <LabeledText label="Dahans">
          {game.dahan}
        </LabeledText>
        <LabeledText label="Explorer Cards">
          {game.explorerCards}
        </LabeledText>
      </Section> 

      <FloatingButton icon="edit" />
    </React.Fragment>
  )
}

export default React.memo(ScoringDetail)
