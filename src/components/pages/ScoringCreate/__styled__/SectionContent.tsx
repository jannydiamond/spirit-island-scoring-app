import styled from 'styled-components/macro'

import FormGroupRadio from 'components/molecules/FormGroupRadio/__styled__/Wrapper'
import FormGroupInput from 'components/molecules/FormGroupInput/__styled__/Wrapper'
import FormGroupSelect from 'components/molecules/FormGroupSelect/__styled__/Wrapper'
import Radiobutton from 'components/atoms/Radiobutton/__styled__/Wrapper'

const SectionContent = styled('div')`
  padding: 16px 16px 0;

  ${FormGroupRadio},
  ${FormGroupInput},
  ${FormGroupSelect} {
    margin-bottom: 16px;
  }

  ${Radiobutton} {
    float: left;
    margin-right: 16px;
  }
`

export default SectionContent
