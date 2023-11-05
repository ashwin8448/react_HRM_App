import styled from "styled-components";

const ButtonWrapper = styled.button`
  &.close-button {
    float: right;
    justify-content: center;
    background: none;
    padding: 0;
    margin: 5px 5px 0 0;
  }

  &.mirror > img {
    transform: rotate(180deg);
  }
`;

export default ButtonWrapper;
