import styled from "styled-components";

const TableWrapper = styled.section`
  &.table-section {
    background-color: var(--table);
    margin: 20px auto 20px auto;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    border-radius: 10px;
  }
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
      }
    }
    td {
      padding: 5px;
    }
    .employee-actions {
      gap: 15px;
      align-items: center;
    }
  }
`;

export default TableWrapper;
