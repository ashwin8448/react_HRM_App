import { IButtonAttributes } from "./types";
import ButtonWrapper from "./styles";

const Button = ({
  buttonType = "",
  description,
  src,
  alt,
  onClick,
}: IButtonAttributes) => {
  return (
    <ButtonWrapper $buttonType={buttonType} onClick={onClick}>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} className="icon" />}
    </ButtonWrapper>
  );
};

export default Button;
