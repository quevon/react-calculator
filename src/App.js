import { useState } from 'react';

import './App.css';
import Button from "./components/Button";
import Inputs from "./components/Inputs";


const App  = () => {
   const [text, setText] = useState("");
   const [result, setResult] = useState("");

   const addToText = (val) => {
      setText((text) => [...text, val + ""])
   }
   const resetInputs = () =>{
      setText("");
      setResult('');
   }
   const calculateResult = () => {
      const input = text.join("");
      try{
         setResult(eval(input).toString());
      }catch(err){
         setResult("Error")
      }
   }
   const backspace = () =>{
      setText(text.slice(0, text.length - 1));
   }
   const buttonColor = '#f2a33c';
  return (
    <div className='App'>
       <div className='calc-wrapper'>
         <Inputs text={text} result={result}/>
         <div className='row'>
            <Button symbol="AC" handleClick={resetInputs}/>
            <Button symbol="C" handleClick={backspace}/>
         </div>
         <div className='row'>
            <Button symbol="7" handleClick={addToText}/>
            <Button symbol="8" handleClick={addToText}/>
            <Button symbol="9" handleClick={addToText}/>
            <Button symbol="/" handleClick={addToText} color={buttonColor}/>
         </div>
         <div className='row'>
            <Button symbol="4" handleClick={addToText}/>
            <Button symbol="5" handleClick={addToText}/>
            <Button symbol="6" handleClick={addToText}/>
            <Button symbol="*" handleClick={addToText} color={buttonColor}/>
         </div>
         <div className='row'>
            <Button symbol="1" handleClick={addToText}/>
            <Button symbol="2" handleClick={addToText}/>
            <Button symbol="3" handleClick={addToText}/>
            <Button symbol="+" handleClick={addToText} color={buttonColor}/>
         </div>
         <div className='row'>
            <Button symbol="0" handleClick={addToText}/>
            <Button symbol="." handleClick={addToText}/>
            <Button symbol="=" handleClick={calculateResult}/>
            <Button symbol="-" handleClick={addToText} color={buttonColor}/>
         </div>   
       </div>
    </div>
  )
}
export default App;
