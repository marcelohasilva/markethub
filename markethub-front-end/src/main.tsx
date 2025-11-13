import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cadastro from './components/cadastro'
import Header from './components/header.tsx'
import Painel from './components/painel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='overflow-hidden h-screen'>
    <Header />  
   <div className="flex flex-col md:flex-row justify-center items-start w-full ">
    <Painel />
    <Cadastro />
        </div>
      </div>
  </StrictMode>,
)
