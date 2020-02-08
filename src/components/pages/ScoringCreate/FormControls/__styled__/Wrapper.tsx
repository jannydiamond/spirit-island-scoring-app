import styled from 'styled-components/macro'
import Button from 'components/atoms/__styled__/Button'

const Wrapper = styled('div')`
  margin: 8px -8px;

  @media all and (max-width: 768px) {
    display: flex;
  }

  ${Button} {
    margin: 0 8px;

    @media all and (max-width: 768px) {
      width: 50%;
    }
  }
`

export default Wrapper
