import { useState } from 'react' //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) //hook

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }
  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>radha vallabh sri harivansh</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={decreaseValue}>decrease value</button>
      <p>counter: {counter}</p>
    </>
  )
}

export default App
