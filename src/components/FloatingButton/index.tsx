import styled from 'styled-components';
import FloatingButtonBase from './FloatinButtonBase';

const FloatingButton = styled(FloatingButtonBase)`
  display: block;
  width: 48px;
  height: 48px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.4);
  border-radius: 100%;
  background-color: #0a3d62;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  z-index: 10;

  i {
    vertical-align: middle;
  }
`

export default FloatingButton;