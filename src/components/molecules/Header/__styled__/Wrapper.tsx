import styled from 'styled-components/macro'

const Wrapper = styled('header')`
  background: ${props => props.theme.components.header.background};
  color: ${props => props.theme.components.header.color};

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.theme.components.header.height};
  width: 100%;
  padding: 0 16px;
  position: fixed;
  top: 0;
  z-index: ${props => props.theme.zIndex.header};
  box-shadow: ${props => props.theme.components.header.boxShadow};
`

export default Wrapper
