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
      'ASpreadOfRampantGreen': Colors.spirits['RG'],
      'LightningsSwiftStrike': Colors.spirits['L'],
      'Thunderspeaker': Colors.spirits['TS'],
      'RiverSurgesInSunlight': Colors.spirits['R'],
      'SerpentSlumberingBeneathTheIsland': Colors.spirits['S'],
    },
  },
}

export default SpiritBadge
