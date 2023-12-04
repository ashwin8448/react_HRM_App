import styled from "styled-components";

const TableOptionsWrapper = styled.section`
  .table-options {
    justify-content: space-between;
    align-items: center;
  }

  .add-icon {
    height: 40px;
  }

  @media (max-width: 575px) {
    .table-options {
      flex-direction: column;
      gap: 10px;
      width: 50%;
      align-items: baseline;
    }

    .table-options button, .table-options div{
      box-sizing: border-box;
    }
  }
`;

export default TableOptionsWrapper;
