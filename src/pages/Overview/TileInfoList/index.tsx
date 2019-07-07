import styled from 'styled-components';
import TileInfoListBase from './TileInfoListBase';

const TileInfoList = styled(TileInfoListBase)`
  margin: 8px -8px;
  padding: 0;
  list-style: none;

  li {
    float: left;
    padding: 0 8px;

    i {
      font-size: 20px;
      vertical-align: text-bottom;

      &.ra-player {
        margin: 0 -6px;
      }
    }

    span {
      padding-left: 8px;
    }
  }
`

export default TileInfoList;