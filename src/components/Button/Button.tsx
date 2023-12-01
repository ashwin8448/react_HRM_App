import { IButtonAttributes } from "./types";
import ButtonWrapper from "./styles";

const Button = ({
  buttonType = "",
  onClick,
  children,
  isNegative = false,
  title
}: IButtonAttributes) => {
  return (
    <ButtonWrapper
      $buttonType={buttonType}
      $isNegative={isNegative}
      onClick={onClick}
      type="button"
      title={title}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
