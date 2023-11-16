import closeButton from "../../assets/images/close_button_icon.svg";
import Button from "../Button/Button";
import ModalWrapper from "./styles";
import IModal from "./types";

const Modal = ({ children, updateIdToDelete }: IModal) => {
  return (
    <ModalWrapper>
      <Button buttonType="close-button" onClick={() => updateIdToDelete(0)}>
        <img src={closeButton} alt="Close icon" />
      </Button>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
