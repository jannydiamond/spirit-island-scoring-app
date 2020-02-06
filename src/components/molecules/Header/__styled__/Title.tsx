import styled from 'styled-components/macro'

const Title = styled('h1')`
  font-size: ${props => props.theme.components.header.title.fontSize};
  font-weight: ${props => props.theme.components.header.title.fontWeight};
  margin: 0;
  flex: 1 1 auto;
`

export default Title
