import { pxToRem } from '../helpers/pxToRem'

export const HTML_FONT_SIZE = 16

const generalTypo = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
}

const Typography = {
  ...generalTypo,
  text: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: pxToRem(14),
    lineHeight: 1.43,
  },
}

export default Typography
