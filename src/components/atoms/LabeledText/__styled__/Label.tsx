import styled from 'styled-components/macro'

const Label = styled('span')`
  font-size: ${props => props.theme.components.labeledText.label.fontSize};
  display: block;
  font-weight: ${props => props.theme.components.labeledText.label.fontWeight};
`

export default Label
