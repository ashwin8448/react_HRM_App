import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  &.close-button {
    float: right;
    justify-content: center;
    background: none;
    padding: 0;
    margin: 5px 5px 0 0;
  }
`;

export default ButtonWrapper;
