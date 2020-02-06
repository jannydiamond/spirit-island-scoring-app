import styled, { css } from 'styled-components/macro'

type Props = {
  large?: boolean
}

const defaultMixin = css`
  height: ${props => props.theme.components.scoring.default.size};
  width: ${props => props.theme.components.scoring.default.size};
`

const largeMixin = css`
  height: ${props => props.theme.components.scoring.large.size};
  width: ${props => props.theme.components.scoring.large.size};
`

const Wrapper = styled('div')<Props>`
  ${props => props.large ? largeMixin : defaultMixin}
  border: ${props => props.theme.components.scoring.border};
  background: ${props => props.theme.components.scoring.background};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Wrapper
