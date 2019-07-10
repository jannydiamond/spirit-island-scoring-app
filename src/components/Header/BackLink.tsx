import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  color: white;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-left: -16px;
`;

export default BackLink;