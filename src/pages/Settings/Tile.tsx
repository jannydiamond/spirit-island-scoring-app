import styled from "styled-components";

const Tile = styled.div`
  border-radius: 4px;
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.1);
  margin: 0 8px 16px;
  padding: 16px;
  user-select: none;
  text-decoration: none;
  color: inherit;

  > p {
    margin-top: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 8px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Tile;