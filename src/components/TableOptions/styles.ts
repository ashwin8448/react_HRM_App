import styled from "styled-components";

const TableOptionsWrapper = styled.section`
  .table-options {
    justify-content: space-between;
    align-items: center;
  }

  div input{
    height: 35px;
  }

  @media (max-width: 530px) {
    .table-options {
      flex-direction: column;
      gap: 10px;
      align-items: baseline;
    }

    .table-options .custom-dropdown {
      box-sizing: border-box;
      width: 100%;
    }
  }
`;

export default TableOptionsWrapper;
