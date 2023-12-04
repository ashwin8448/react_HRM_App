import { IButtonAttributes } from "./types";
import ButtonWrapper from "./styles";

const Button = ({
  buttonType = "",
  onClick,
  children,
  isNegative = false,
  title,
  styleClass,
}: IButtonAttributes) => {
  return (
    <ButtonWrapper
      $buttonType={buttonType}
      $isNegative={isNegative}
      onClick={onClick}
      type="button"
      title={title}
      className={styleClass}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
