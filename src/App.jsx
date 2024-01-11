import './App.css'
import { useState, useRef } from 'react'

function App() {
const [value, setValue] = useState("red")
const inputRef=useRef()

  return (
    <>
      <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)}/>
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}

export default App
