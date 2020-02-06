import styled from 'styled-components/macro'

type Props = {
  id: string
}

const Wrapper = styled('div')<Props>`
  width: ${props => props.theme.components.spiritBadge.size};
  height: ${props => props.theme.components.spiritBadge.size};
  content: ${props => `'${props.id}'`};
  background: ${props => props.theme.components.spiritBadge.spirit.background[props.id]};
  border-radius: ${props => props.theme.components.spiritBadge.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Wrapper
