import './App.css'
import { useState, useRef } from 'react'
import CustomInput from './CustomInput';

function App() {
const [value, setValue] = useState("red")
const inputRef=useRef()

const focus = () => {
  inputRef.current.focus()
}

  return (
    <>
      <CustomInput ref={inputRef} value={value} onChange={e => setValue(e.target.value)}/>
      <br />
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
