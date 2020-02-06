import styled from 'styled-components/macro'

import List from 'components/atoms/ScoringSpiritList/__styled__/List';

const Content = styled('div')`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  ${List} {
    margin-top: 16px;
  }
`

export default Content
