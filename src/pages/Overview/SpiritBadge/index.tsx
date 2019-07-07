import styled from 'styled-components';
import SpiritBadgeBase from './SpiritBadgeBase';

const SpiritBadge = styled(SpiritBadgeBase)`
  width: 32px;
  height: 32px;
  background-color: ${props => {
    switch (props.id) {
      case 'RG':
        return 'green'
      case 'L':
        return 'darkred'
      case 'TS':
        return 'purple'
      case 'R':
        return 'dodgerblue'
      default:
        return '#dadada'
    }
  }};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SpiritBadge;