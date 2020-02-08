import React from 'react'

import FormGroupRadio from 'components/molecules/FormGroupRadio'
import FormGroupSelect from 'components/molecules/FormGroupSelect'
import SectionHeadline from 'components/atoms/__styled__/SectionHeadline'
import Section from '../__styled__/Section'
import SectionContent from '../__styled__/SectionContent'

const optionsMapTyp = [
  { value: 'normal', label: 'Normal' },
  { value: 'special', label: 'Special' },
]

const optionsAdversary = [
  { value: 'BP', label: 'Brandenburg-Preußen' },
]

const optionsScenario = [
  { value: 'XX', label: 'Scenario X' },
]

const optionsAdversaryLevel = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
]

const GameSetup = () => {
  return (
    <Section>
      <SectionHeadline>Game Setup</SectionHeadline>
      <SectionContent>
        <FormGroupSelect
          id="mapType"
          defaultValue={optionsMapTyp[0]}
          label="Map Type"
          options={optionsMapTyp}
        />
        <FormGroupSelect
          id="adversary"
          label="Adversary"
          options={optionsAdversary}
        />
        <FormGroupSelect
          id="adversaryLevel"
          label="Adversary Level"
          options={optionsAdversaryLevel}
        />
        <FormGroupSelect
          id="scenario"
          label="Scenario"
          options={optionsScenario}
        />
        <FormGroupRadio
          groupLabel="Blight Card"
          name="blightCard"
          options={[
            { id: 'blightYes', label: 'Yes' },
            { id: 'blightNo', label: 'No', isDefault: true },
          ]}
        />
        <FormGroupRadio
          groupLabel="Event Deck"
          name="eventDeck"
          options={[
            { id: 'eventDeckYes', label: 'Yes' },
            { id: 'eventDeckNo', label: 'No', isDefault: true },
          ]}
        />
      </SectionContent>
    </Section>
  )
}

export default React.memo(GameSetup)
