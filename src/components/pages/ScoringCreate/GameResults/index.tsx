import React from 'react'

import FormGroupInput from 'components/molecules/FormGroupInput'
import SectionHeadline from 'components/atoms/__styled__/SectionHeadline'
import Section from '../__styled__/Section'
import SectionContent from '../__styled__/SectionContent'

const GameResults = () => {
  return (
    <Section>
      <SectionHeadline>Game Results</SectionHeadline>
      <SectionContent>
        <FormGroupInput id="blightTokens" label="Blight Tokens" type="number" />
        <FormGroupInput id="dahan" label="Dahan" type="number" />
        <FormGroupInput
          id="explorerCards"
          label="Explorer Cards"
          type="number"
        />
      </SectionContent>
    </Section>
  )
}

export default React.memo(GameResults)
