interface buttonAttributes {
  description?: string;
  src?: string;
  alt?: string;
}

const Button = ({ description, src, alt }: buttonAttributes) => {
  return (
    <button>
      {description && <span>{description}</span>}
      {src && <img src={src} alt={alt} />}
    </button>
  );
};

export default Button;
