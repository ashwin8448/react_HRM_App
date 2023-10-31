
const Button = ({description, src}:{description: string, src: string}) => {
  return (
    <button>
      <span>{description}</span>
      <img src={src}/>  
    </button>
  )
}

export default Button