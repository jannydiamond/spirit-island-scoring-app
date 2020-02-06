import Colors from 'themes/main/global/Colors'
import { pxToRem } from 'themes/main/helpers/pxToRem'

const SpiritBadge = {
  borderRadius: '100%',
  size: '32px',
  label: {
    fontSize: pxToRem(12),
    color: Colors.white,
  },
  spirit: {
    background: {
      'RG': Colors.spirits['RG'],
      'L': Colors.spirits['L'],
      'TS': Colors.spirits['TS'],
      'R': Colors.spirits['R'],
      'S': Colors.spirits['S'],
    },
  },
}

export default SpiritBadge
