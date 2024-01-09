import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Passenger Counter App</h1>
      </div>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
