import styled from "styled-components";

const ConfirmBoxWrapper = styled.div`
  padding: 10px;
  .confirm-box-buttons {
    margin: 0 0 10px 350px;
    gap: 15px;

    .primary-button {
      width: 60px;
      justify-content: center;
      height: 40px;
    }
    
    .primary-button.negative {
      background-color: red;
      color: white;
    }
  }

  & span.negative {
    color: red;
  }
`;

export default ConfirmBoxWrapper;
