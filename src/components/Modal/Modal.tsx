import closeButton from "../../assets/images/close_button_icon.svg";
import Button from "../Button/Button";
import ModalWrapper from "./styles";
import IModal from "./types";

const Modal = ({ children }: IModal) => {
  return (
    <ModalWrapper>
      <Button
        className="icon close-button"
        src={closeButton}
        alt="Close icon"
      ></Button>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
