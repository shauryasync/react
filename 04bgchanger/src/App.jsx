import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  const bgRed = () => {
    setColor("red")
  }
  const bgBlue = () => {
    setColor("blue")
    
  }
  const bgPink = () => {
    setColor("pink")
  }
  return (
    <>
      
      <div className='h-screen w-full' style={{backgroundColor: color}}>
        <button className='m-4 bg-red-500' onClick={() => {setColor("red")}}>red</button>
        <button className='m-4 bg-blue-500' onClick={() => {setColor("blue")}}>blue</button>
        <button className='m-4 bg-pink-500' onClick={() => {setColor("pink")}}>pink</button>
      </div>

    </>
  )
}

export default App
