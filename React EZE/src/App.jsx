import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Titulo} from './components/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo/>
    </>
  )
}

export default App
