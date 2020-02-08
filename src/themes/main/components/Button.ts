import Colors from 'themes/main/global/Colors'
import { pxToRem } from 'themes/main/helpers/pxToRem'

const Button = {
  height: '40px',
  border: `2px solid ${Colors.primary.default}`,
  borderRadius: '4px',
  fontSize: pxToRem(16),
  background: {
    default: Colors.primary.default,
    outline: Colors.white
  },
  color: {
    default: Colors.white,
    outline: Colors.primary.default
  },
  hover: {
    background: Colors.secondary.default,
    borderColor: Colors.secondary.default,
    color: Colors.white,
  }
}

export default Button
