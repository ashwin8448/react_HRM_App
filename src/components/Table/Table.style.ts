import styled from "styled-components";

const TableWrapper = styled.section`
  &.table-section {
    background-color: var(--table);
    margin: 50px auto;
    padding: 0 10px 10px 10px;
    border-radius: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid black;
      height: 50px;
    }
    th button {
      width: 100%;
      background-color: var(--table);
      margin: 5px 0;
    }
    th button:hover {
      background-color: var(--button);
    }
    .employee-actions {
      gap: 10px;
      align-items: center;
    }
    .employee-actions button {
      padding: 0;
    }
  }
`;

export default TableWrapper;
