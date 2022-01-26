import "./Button.css"

const Button = ({symbol, color, handleClick}) => {
    return ( 
    <div 
        onClick={() => handleClick(symbol)}
        className="button-wrapper" style={{background: color}}> 
        {symbol}
    </div>)
   
}

export default Button;