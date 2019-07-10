import styled from 'styled-components';

const Content = styled.main`
  margin-top: 48px;
  padding: 16px 16px 56px;

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 8px;
  }

  h2 {
    font-size: 16px;
  }

  section {
    padding: 16px 0 8px;

    h2 {
      padding-bottom: 8px;
      border-bottom: 1px solid #dadada;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 0 -8px;

      thead {
        tr {
          th {
            font-size: 12px;
            padding: 4px 8px 8px;
            text-align: left;

            &.spirit {
              width: 32px;
            }

            &.board {
              text-align: center;
              width: 48px;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 4px 8px;

            &.spirit {
              width: 32px;
            }

            &.board {
              text-align: center;
              width: 48px;
            }
          }

          &:last-child {
            td {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export default Content;