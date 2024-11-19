import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { SectionContext } from './infrastructure/components/SectionContext.tsx'
// import { Testimonios } from './infrastructure/components/pages/Testimonios.tsx'
// import { HowWorks } from './infrastructure/components/pages/HowWorks.tsx'
// import { MakeFetch } from './infrastructure/components/pages/MakeFetch.tsx'
// import { Footer } from './infrastructure/components/pages/Footer.tsx'
import App from './App.tsx'
// import { OurServices } from './infrastructure/components/OurServices.tsx'
// import { Header } from './infrastructure/components/Header/Header.tsx'
// import { PrintipalPet } from './infrastructure/components/PrintipalPet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <SectionContext>
    <App />
    {/* <Header /> */}
    {/* <PrintipalPet /> */}
    {/* <OurServices /> */}
    {/* <Footer /> */}
    {/* <Layout /> */}

  </SectionContext>
  </StrictMode>,
)
