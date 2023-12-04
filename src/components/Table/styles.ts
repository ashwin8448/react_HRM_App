import styled from "styled-components";

const TableWrapper = styled.section`
  background-color: var(--table);
  margin: 20px auto 20px auto;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  border-radius: 10px;

  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid black;
      height: 50px;
    }
    th {
      text-align: left;
      width: 20%;
      button {
        width: 100%;
        background-color: var(--table);
        margin: 5px 0;
        min-height: 42px;
      }
    }
    td {
      padding: 5px;
    }
    .employee-actions {
      gap: 15px;
      align-items: center;
    }
    th .icon {
      transition: all 0.5s;
    }
    .invert {
      transform: rotateX(180deg);
    }
    .table-no-data {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

export default TableWrapper;
