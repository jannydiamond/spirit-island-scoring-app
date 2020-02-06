import styled from 'styled-components/macro'

const Icon = styled('i')`
  font-size: ${props => props.theme.components.scoringInfoList.icon.fontSize};
  vertical-align: text-bottom;

  &.ra-player {
    margin: 0 -6px;
  }
`

export default Icon
