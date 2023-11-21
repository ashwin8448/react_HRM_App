import { IButtonAttributes } from "./types";
import ButtonWrapper from "./styles";

const Button = ({
  buttonType = "",
  onClick,
  children,
  isNegative = false,
}: IButtonAttributes) => {
  return (
    <ButtonWrapper
      $buttonType={buttonType}
      $isNegative={isNegative}
      onClick={onClick}
      type="button"
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
