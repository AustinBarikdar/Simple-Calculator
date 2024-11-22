import CalculatorOutput from "./components/Calculatoroutput"
import AllButtons from "./components/AllButtons"
import React from "react"

function App() {
  const[CurrentOutput, OutputNew] = React.useState(0)

  return (
    <div className = "d-flex justify-content-center">
      <div className="CalculatorDiv border shadow">
        <CalculatorOutput Output = {CurrentOutput} /> 
        <AllButtons callback = {OutputNew}/>
      </div>
    </div>
  )
}

export default App