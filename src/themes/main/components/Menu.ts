import Colors from 'themes/main/global/Colors'

const Menu = {
  backdrop: {
    background: 'rgba(0, 0, 0, .4)',
  },
  button: {
    default: {
      background: {
        menuOpen: Colors.primary.dark,
        menuClosed: 'transparent',
      },
      color: Colors.white,
      size: '56px',
      border: 'none',
    },
    hover: {
      background: Colors.primary.dark,
    }
  },
  flyout: {
    background: Colors.white,
    color: Colors.black,
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, .1)',
    minWidth: '200px',
  },
}

export default Menu
