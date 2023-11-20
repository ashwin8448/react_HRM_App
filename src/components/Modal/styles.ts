import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-bg);
  .modal {
    background-color: var(--modal-bg);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000000;
  }
`;

export default ModalWrapper;
