import "./Button.css"

const  Button = ({value, name, onClick,}) => {
  
    return (
  
      <button onClick={onClick} className={name}>
        {value}
 
      </button>
        )
      }
  export default Button