import ButtonWrapper from "./Button.style";

interface buttonAttributes {
  className?: string;
  description?: string;
  src?: string;
  alt?: string;
  action?: string;
  onClick?: () => void;
}

<button></button>
const Button = ({
  className = "",
  description,
  src,
  alt,
  action,
  onClick,
}: buttonAttributes) => {
  return (
    <ButtonWrapper className="flex" onClick={onClick} data-action={action}>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} className={`icon ${className}`} />}
    </ButtonWrapper>    
  );
};

export default Button;
