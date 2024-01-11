import "./CustomInput.css"
import React, {useImperativeHandle} from "react"

function CustomInput(props, ref) {
    // useImperativeHandle take 3 different properties
    // First ref
    // Second is a function that returns new value and that value is the value for our ref
    // Third is array of dependencies. If it is never changing leave array empty. 
    // useImperativeHandle(ref, () => {return {ConsoleLog: () => console.log(props)}}, [props])
    useImperativeHandle(ref, () => {return {ConsoleLog: () => console.log(props.value)}}, [props.value])
    // it will console log default State value of parent component
    // bc ref is linking to custom component CustomInput and onChange function 
    // is calling setValue with default State value
  return (
    <input {...props}/>
  )
}

export default React.forwardRef(CustomInput)