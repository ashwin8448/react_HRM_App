import styled from "styled-components";

const ModalWrapper = styled.div`
  /* background-color: var(--modal-bg); */
  background-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  button {
    position: absolute;
    right: 0;
  }
`;

export default ModalWrapper;
