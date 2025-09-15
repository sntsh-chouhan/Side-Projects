import { useState } from 'react'
import './App.css'

import Login from './components/accounts/Login'
import DataProvider from './context/DataProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{marginTop:64}}>
      <DataProvider>
        <Login/>
      </DataProvider>
    </div>
  )
}

export default App
