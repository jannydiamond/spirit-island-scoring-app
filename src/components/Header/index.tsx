import styled from 'styled-components';
import HeaderBase from './HeaderBase';

const Header = styled(HeaderBase)`
  background-color: #0a3d62;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  z-index: 50;
  width: calc(100% - 32px);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    margin: 0;
    flex: 1 1 auto;
  }
`;

export default Header;