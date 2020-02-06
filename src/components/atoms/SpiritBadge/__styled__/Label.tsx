import styled from 'styled-components/macro'

const Label = styled('span')`
  color: ${props => props.theme.components.spiritBadge.label.color};
  font-size: ${props => props.theme.components.spiritBadge.label.fontSize};
  padding-top: 2px;
`

export default Label
