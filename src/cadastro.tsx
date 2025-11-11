import { useState } from 'react'
import Painel from './components/painel'
import Login from './components/login'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="min-h-screen flex flex-col bg-[#EBEBEB]">
      <div className="h-screen w-screen overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row h-full pt-20">
          <div className="hidden md:block md:w-1/2">
            <Painel />
          </div>
          <div className="w-full md:w-1/2">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App