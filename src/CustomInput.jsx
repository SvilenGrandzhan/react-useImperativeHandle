import "./CustomInput.css"
import React from "react"

function CustomInput(props, ref) {
  return (
    <input ref={ref} {...props}/>
  )
}

export default React.forwardRef(CustomInput)