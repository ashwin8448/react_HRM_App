import styled from "styled-components";

const ConfirmBoxWrapper = styled.div`
  padding: 10px;
  .confirm-box-buttons {
    margin: 0 0 10px 350px;
    gap: 15px;
  }

  & span.negative {
    color: red;
  }
`;

export default ConfirmBoxWrapper;
