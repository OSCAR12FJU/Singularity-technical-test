import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { PrivateRoute } from './infrastructure/routes/PrivateRoute'
import { Layout } from './infrastructure/components/pages/Layout'
import { PageLogin } from './infrastructure/components/pages/PageLogin'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     {/* Rutas publicas */}
     <Route index path='/' element={<PageLogin />}/>
     <Route path='/login' element={<PageLogin />}/>

     {/* Rutas privadas */}
     <Route element={<PrivateRoute />}>
        <Route path='/inicio' element={<Layout />}/>
     </Route>
     
    </Routes>    
    </BrowserRouter>
    </>

  )
}

export default App
