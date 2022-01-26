import "./Inputs.css"

const Inputs = ({text,result}) =>{
    return (
        <div className="input-wrapper">
            <div className="result" >
                <h1 title="results">{result}</h1>
            </div>
            <div className="text" title="input">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default Inputs;