import styled, { css } from 'styled-components/macro'

type Props = {
  type: 'spirit' | 'board' | 'player'
}

const spiritMixin = css`
  width: ${props => props.theme.pages.scoringDetail.playerTable.spiritCell.width};
`

const boardMixin = css`
  text-align: ${props => props.theme.pages.scoringDetail.playerTable.boardCell.textAlign};
  width: ${props => props.theme.pages.scoringDetail.playerTable.boardCell.width};
`

const TableCellBody = styled('td')<Props>`
  padding: 16px;

  ${props => {
    switch(props.type) {
      case 'spirit': {
        return spiritMixin
      }
      case 'board': {
        return boardMixin
      }
      default: {
        return
      }
    }
  }}
`

export default TableCellBody
