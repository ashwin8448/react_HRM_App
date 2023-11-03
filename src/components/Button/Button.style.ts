import styled from "styled-components";

const ButtonWrapper = styled.button`
  align-items: center;
  background-color: var(--button);
  border-radius: 5px;
  padding: 5px;
  gap: 5px;

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

  &.negative {
    background-color: red;
    color: white;
  }
`;

export default ButtonWrapper;
