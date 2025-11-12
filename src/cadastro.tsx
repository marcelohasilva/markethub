import { useState } from 'react'
import Painel from './components/painel'
import Cadastro from './components/cadastro'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="h-screen w-screen overflow-hidden">
  <Header />
  <div className="flex h-full pt-20">
    <Painel />
   <Cadastro />
  </div>
  
</div>

  )
}

export default App