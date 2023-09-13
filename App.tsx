import { Suspense } from 'react'
import './App.css'
import { Integrantes } from './pages/integrantes/Integrantes'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Cadastro } from './pages/cadastro/Cadastro'
import { Solicitacao } from './pages/solicitacao/Solicitacao'
import { Acompanhamento } from './pages/acompanhamento/Acompanhamento'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div>carregando...</div>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/integrantes' element={<Integrantes/>}/>
      <Route path='/solicitações' element={<Solicitacao/>}/>
      <Route path='/acompanhamento' element={<Acompanhamento/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
