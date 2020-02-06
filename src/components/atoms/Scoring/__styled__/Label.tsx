import styled from 'styled-components/macro'

type Props = {
  large?: boolean
}

const Label = styled('span')<Props>`
  color: ${props => props.theme.components.scoring.label.color};
  font-weight: ${props => props.theme.components.scoring.label.fontWeight};
  font-size: ${props => props.large
    ? props.theme.components.scoring.large.label.fontSize
    : props.theme.components.scoring.default.label.fontSize};
`

export default Label
