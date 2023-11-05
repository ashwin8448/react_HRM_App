import { IButtonAttributes } from "../../core/interface/interface";
import ButtonWrapper from "./styles";

const Button = ({
  className = "",
  description,
  src,
  alt,
  onClick,
}: IButtonAttributes) => {
  return (
    <ButtonWrapper className={`flex ${className}`} onClick={onClick}>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} className={`icon`} />}
    </ButtonWrapper>
  );
};

export default Button;
