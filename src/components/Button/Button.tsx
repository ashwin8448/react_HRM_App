import { IButtonAttributes } from "./types";
import ButtonWrapper from "./styles";

const Button = ({ className = "", onClick, children }: IButtonAttributes) => {
  return (
    <ButtonWrapper className={className} onClick={onClick} type="button">
      {children}
    </ButtonWrapper>
  );
};

export default Button;
