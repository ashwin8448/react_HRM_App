import styled from "styled-components";

const PaginationWrapper = styled.section`
  align-items: center;
  justify-content: center;
  gap: 20px;
  display: flex;

  input {
    width: 55px;
    text-align: center;
    height: 42px;
  }
  .mirror {
    transform: rotate(180deg);
  }
`;

export default PaginationWrapper;
