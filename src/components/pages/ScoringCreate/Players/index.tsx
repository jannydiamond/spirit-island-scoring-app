import React from 'react'

import FormGroupRadio from 'components/molecules/FormGroupRadio'
import SectionHeadline from 'components/atoms/__styled__/SectionHeadline'
import Section from '../__styled__/Section'
import SectionContent from '../__styled__/SectionContent'
import Player from './Player'

const Players = () => {

  return (
    <Section>
      <SectionHeadline>Players</SectionHeadline>
      <SectionContent>
        <FormGroupRadio
          groupLabel="Amount of players"
          name="playerAmount"
          options={[
            { id: 'playerAmount1', label: '1', isDefault: true },
            { id: 'playerAmount2', label: '2' },
            { id: 'playerAmount3', label: '3' },
            { id: 'playerAmount4', label: '4' },
          ]}
        />
        
        <Player playerNumber={1} />
      </SectionContent>
    </Section>
  )
}

export default React.memo(Players)
