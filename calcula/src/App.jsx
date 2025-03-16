import { useState } from 'react'
import Card from "./components/Card"
import Display from "./components/Display"
import Button from "./components/Button"


import './App.css'

const App = () => {
const [value, setValue] = useState("")

  const data = [
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '/'],
    ['C']
    ];

    const dataHandler = (val) =>{
      console.log(val)
      if(val === "="){
        try{
          setValue(eval(value))
        } catch (err){

          setValue(err)
        }
      }else if (val === "C"){
        setValue(val = "")
      }else{
        setValue((preValue) => preValue + val )
      }
    }

  return (
  <Card>
  <Display text={value}/>
  {data.map((row, i) => (
    <div key={i} className="row">
      {row.map((btnValue) => (
        <Button key={btnValue} value={btnValue} name="btn" onClick={() =>dataHandler(btnValue)} />

      ))}

    </div>
  ))}
  </Card>

      )
    }
export default App
