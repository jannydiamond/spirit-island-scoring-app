import { pxToRem } from 'themes/main/helpers/pxToRem'

import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'

const Header = {
  background: Colors.primary.default,
  color: Colors.white,
  height: '56px',
  boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.2)',
  title: {
    fontSize: pxToRem(24),
    fontWeight: Typography.fontWeightLight
  }
}

export default Header
