import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home/Home'
import Quemsomos from './pages/Quemsomos/Quemsomos'
import Pedidos from './pages/Pedidos/Pedidos'
import Cadastro from './pages/Cadastro/Cadastro'
import Contato from './pages/Contato/Contato'
import  Login  from './pages/Login/Login'
import Perfil from './pages/Perfil/Perfil'
import CadastroVazio from './pages/CadastroVazio/CadastroVazio'
import AvaliacaoCliente from './pages/Avaliacao/AvaliacaoCliente'
import AvaliacaoEmpresaria from './pages/Avaliacao/AvaliacaoEmpresaria'
import AvaliacaoEntregadora from './pages/Avaliacao/AvaliacaoEntregadora'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Quemsomos" element={<Quemsomos />}></Route>
        <Route path="/Pedidos" element={<Pedidos />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/CadastroVazio" element={<CadastroVazio />}></Route>
        <Route path="/Perfil" element={<Perfil />}></Route>
        <Route path="/AvaliacaoCliente" element={<AvaliacaoCliente />}></Route>
        <Route path="/AvaliacaoEmpresaria" element={<AvaliacaoEmpresaria />}></Route>
        <Route path="/AvaliacaoEntregadora" element={<AvaliacaoEntregadora />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
