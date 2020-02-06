import styled from 'styled-components/macro'

import TableRow from './TableRow'

const TableBody = styled('tbody')`
  ${TableRow} {
    &:nth-child(2n) {
      background: ${props => props.theme.pages.scoringDetail.alternatingBackground};
    }
  }
`

export default TableBody
