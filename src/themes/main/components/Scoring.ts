import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'
import { pxToRem } from 'themes/main/helpers/pxToRem'

const Scoring = {
  background: Colors.secondary.default,
  border: `4px solid ${Colors.secondary.default}`,
  label: {
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
  },
  default: {
    size: '48px',
    label: {
      fontSize: pxToRem(24),
    }
  },
  large: {
    size: '128px',
    label: {
      fontSize: pxToRem(64)
    }
  }
}

export default Scoring
