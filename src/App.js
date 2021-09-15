import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Button from './Components/Button';
import Screen from './Components/Screen';

const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + " "])
  }

  const clearText = () => {
    setText("");
    setResult("");
  }

  const finalResult = () => {
    const input = text.join("")
    setResult(evaluate(input));
  }


  return (
    <div className="App">
      <div className="calculator">
        <Screen text = {text} result = {result} />
        <div className = "row">
          <Button symbol = "7" color ="pink" handleClick={addToText}/>
          <Button symbol = "8" color ="pink" handleClick={addToText}/>
          <Button symbol = "9" color ="pink" handleClick={addToText}/>
          <Button symbol = "/" color ="orange" handleClick={addToText}/>
        </div>
        <div className = "row">
          <Button symbol = "4" color ="pink" handleClick={addToText}/>
          <Button symbol = "5" color ="pink" handleClick={addToText}/>
          <Button symbol = "6" color ="pink" handleClick={addToText}/>
          <Button symbol = "*" color ="orange" handleClick={addToText}/>
        </div>
        <div className = "row">
          <Button symbol = "1" color ="pink" handleClick={addToText}/>
          <Button symbol = "2" color ="pink" handleClick={addToText}/>
          <Button symbol = "3" color ="pink" handleClick={addToText}/>
          <Button symbol = "+" color ="orange" handleClick={addToText}/>
        </div>
        <div className = "row">
          <Button symbol = "0" color ="pink" handleClick={addToText}/>
          <Button symbol = "." color ="pink" handleClick={addToText}/>
          <Button symbol = "=" color ="pink" handleClick={finalResult}/>
          <Button symbol = "-" color ="orange" handleClick={addToText}/>
        </div>
        <Button symbol = "Clear" color= "yellow" handleClick={clearText}/>
       
      </div>
    </div>
  );
}

export default App;
