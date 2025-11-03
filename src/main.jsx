import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/home'
import './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
