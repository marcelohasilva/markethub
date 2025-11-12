import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cadastro from './cadastro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
