import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App.jsx'
import FavsProvider from './contexts/FavsContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavsProvider>
      <App />
      <Toaster richColors />
    </FavsProvider>
  </StrictMode>
)
