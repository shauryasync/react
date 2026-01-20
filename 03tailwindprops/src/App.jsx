import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Card  user = "shaurya" btnTxt = "go inside go inside go inside" />
    
    </>
  )
}

export default App
