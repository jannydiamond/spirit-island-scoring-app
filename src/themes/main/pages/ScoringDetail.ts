import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'
import { pxToRem } from 'themes/main/helpers/pxToRem'

const ScoringDetail = {
  alternatingBackground: Colors.gray.light,
  border: `1px solid ${Colors.gray.light}`,
  header: {
    headline: {
      fontSize: pxToRem(28),
      fontWeight: Typography.fontWeightLight,
    }
  },
  playerTable: {
    theadCell: {
      fontSize: pxToRem(12),
      textAlign: 'left',
    },
    spiritCell: {
      width: '32px',
    },
    boardCell: {
      width: '48px',
      textAlign: 'center'
    }
  }
}

export default ScoringDetail
