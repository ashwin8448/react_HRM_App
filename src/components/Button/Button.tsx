import { IButtonAttributes } from "../../core/interface/interface";
import ButtonWrapper from "./Button.style";

const Button = ({
  className = "",
  description,
  src,
  alt,
  action,
  onClick,
}: IButtonAttributes) => {
  return (
    <ButtonWrapper
      className={`flex ${className}`}
      onClick={onClick}
      data-action={action}
    >
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} className={`icon`} />}
    </ButtonWrapper>
  );
};

export default Button;
