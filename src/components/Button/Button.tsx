import ButtonWrapper from "./Button.style";

interface buttonAttributes {
  className?: string;
  description?: string;
  src?: string;
  alt?: string;
}

const Button = ({ className, description, src, alt }: buttonAttributes) => {
  return (
    <ButtonWrapper className="flex">
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} className={`icon ${className}`} />}
    </ButtonWrapper>
  );
};

export default Button;
