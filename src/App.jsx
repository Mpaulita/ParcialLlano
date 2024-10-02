import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portafolio from './assets/parcialCards/Portafolio'
import Proyectos from './assets/parcialCards/proyectos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portafolio/>
      <Proyectos/>
    </>
  )
}

export default App
