import { useState } from "react"

interface Props {
  callback: React.Dispatch<React.SetStateAction<number>>
}


function AllButtons({ callback }: Props) {
  const [isNumber, isNewNumber] = useState(false)

  const AddNumber = (avalue: any) => {
    if (isNumber == false) {
      callback(Number(avalue))
      console.log(Number(avalue))
      isNewNumber(true);
    } else {
      callback(avalue.toString())
      console.log(avalue.toString())
      isNewNumber(false);
    }
  }
  const AddOperator = (avalue: any) => {
    callback(avalue)
    console.log(avalue)
    
  }
  const ClearOutput = (avalue: any) => {
    callback(avalue)
    console.log(avalue)
    
  }

  const AnswerProblem = (avalue: any) => {
    callback(avalue)
    console.log(avalue)
    
  }

  return (
    <div>
      <div>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(1) }} >1</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(2) }} >2</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(3) }} >3</button>
        <button className="OperatorButtons border m-1 shadow" onClick={() => { AddOperator(" + ") }} >+</button>
      </div>
      <div>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(4) }} >4</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(5) }} >5</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(6) }} >6</button>
        <button className="OperatorButtons border m-1 shadow" onClick={() => { AddOperator(" - ") }} >-</button>
      </div>
      <div>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(8) }}>8</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(9) }}>9</button>
        <button className="NumberButtons border m-1 shadow" onClick={() => { AddNumber(0) }}>0</button>
        <button className="OperatorButtons border m-1 shadow" onClick={() => { AddOperator(" / ") }}>/</button>
      </div>
      <button className="OperatorButtons2 border m-1 shadow" onClick={() =>{ClearOutput("Clear")}} >AC</button>
      <button className="OperatorButtons border m-1 shadow" onClick={() =>{AnswerProblem("Answer")}} >=</button>
      <button className="OperatorButtons border m-1 shadow" onClick={() => { AddOperator(" * ") }}>x</button>
    </div>

  )
}

export default AllButtons