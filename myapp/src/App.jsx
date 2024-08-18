import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flexContainer'> 
      <h1 className = 'nameTitle'style = {{ fontWeight: 'bold'}}> Vincent A. Toledo</h1>
      <div className='regTitle'>I'm a junior Computer Science student at the University of Florida</div>
      <div style={{ margin: '100px' }}> </div>
      <div className='regTitle'>What I've been working On...</div>
      <p>sdfsadfsdfasdfasdfasdfasfd</p>
      <div></div>
    </div>
  )
}

export default App
