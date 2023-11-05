import closeButton from "../../assets/images/close_button_icon.svg";
import { ReactNode } from "react";
import Button from "../Button/Button";
import ModalWrapper from "./styles";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <ModalWrapper>
      <Button className="icon close-button" src={closeButton} alt="Close icon"></Button>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
