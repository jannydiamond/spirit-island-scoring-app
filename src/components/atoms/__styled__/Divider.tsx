import styled from 'styled-components/macro'

const Divider = styled('hr')`
  height: ${props => props.theme.components.divider.height};
  border: ${props => props.theme.components.divider.border};
  background-color: ${props => props.theme.components.divider.background};
  margin: 0;
`

export default Divider
