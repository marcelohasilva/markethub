import { useState } from 'react'
import Painel from './components/painel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Painel />
  )
}

export default App