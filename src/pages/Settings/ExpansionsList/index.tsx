import styled from 'styled-components';
import ExpansionsListBase from './ExpansionsListBase';

const ExpansionsList = styled(ExpansionsListBase)`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 8px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default ExpansionsList;