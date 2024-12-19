import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SectionContext } from './infrastructure/components/SectionContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <SectionContext>
    <App />

  </SectionContext>
  </StrictMode>,
)
