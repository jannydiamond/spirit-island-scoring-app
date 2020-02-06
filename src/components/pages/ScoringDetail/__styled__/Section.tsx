import styled from 'styled-components/macro'

import Table from 'components/pages/ScoringDetail/PlayerTable/__styled__/Table'
import LabeledText from 'components/atoms/LabeledText/__styled__/Wrapper'

const Section = styled('section')`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: 0 -16px;

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
