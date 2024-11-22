import { useState, useEffect } from "react";

interface Props {
  Output: number | string
}



function CalculatorOutput({ Output }: Props) {
  const [currentString, setSavedString] = useState<string>("0");

  useEffect(() => {

    const newOutput = Output.toString();

    console.log(currentString[currentString.length - 1] ,"eee")
    if (currentString === "0") {
      setSavedString(newOutput);
    } else if (newOutput !== "0" && currentString != "0" && newOutput !== "Clear" && newOutput !== "Answer" ){
      setSavedString(currentString + newOutput);
    } else if (newOutput === "0" && currentString != "0" && currentString[currentString.length - 1] != " "  && currentString[currentString.length - 1] != "+" && currentString[currentString.length - 1] != "-" && currentString[currentString.length - 1] != "/" && currentString[currentString.length - 1] != "*"){
      setSavedString(currentString + newOutput);
    } else if (newOutput == "Clear"){
      setSavedString("0");
    }else if (newOutput == "Answer"){
      try {
        eval(currentString); 
        setSavedString(eval(currentString))
      } catch (error) {
        setSavedString("error");
      }

    }




  }, [Output]);


  return (

    <div className="DivOutput shadow border m-1">
      <h1 className="Output"> {currentString} </h1>
    </div>


  )

}

export default CalculatorOutput