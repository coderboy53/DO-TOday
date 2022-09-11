import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div id='content'>
    <Navbar />
    <MainContent />
   </div>
  )
}

export default App
