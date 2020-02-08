import styled from 'styled-components/macro'

import Table from 'components/pages/ScoringDetail/PlayerTable/__styled__/Table'
import LabeledText from 'components/atoms/LabeledText/__styled__/Wrapper'
import SectionBase from 'components/atoms/__styled__/Section'

const Section = styled(SectionBase)`
  ${LabeledText} {
    margin: 0;
    padding: 16px;
    
    &:nth-child(2n+1) {
      background: ${props => props.theme.pages.scoringDetail.alternatingBackground};
    }
  }

  ${Table} {
    margin: 16px 0 0;
  }
`

export default Section
