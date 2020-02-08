import Colors from 'themes/main/global/Colors'
import Input from 'themes/main/components/Input'
import Tile from 'themes/main/components/Tile'

const Select = {
  height: Input.height,
  border: Input.border,
  borderRadius: Input.borderRadius,
  hover: {
    borderColor: Input.hover.borderColor,
  },
  focus: {
    borderColor: Input.hover.borderColor,
  },
  menu: {
    boxShadow: Tile.boxShadow,
  },
  option: {
    background: {
      hover: Colors.gray.light,
      selected: Colors.primary.default,
    }
  }
}

export default Select
