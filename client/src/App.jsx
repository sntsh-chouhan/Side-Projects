import { useState } from 'react'
import './App.css'

import Login from './components/accounts/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{marginTop:64}}>
    <Login/>
    </div>
  )
}

export default App
