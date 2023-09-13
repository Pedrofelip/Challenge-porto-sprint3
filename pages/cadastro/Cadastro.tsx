import { useState } from "react"
import { Header } from "../../components/header/Header"
import { Link } from 'react-router-dom'
import '../../styles/Global.css'
import './Cadastro.css'

export const Cadastro = () =>{
    const[emailCadastro, setEmailCadastro] = useState("")
    const[senhaCadastro, setSenhaCadastro] = useState("")
    const[cpf, setCpf] = useState("")
    const[apolice, setApolice] = useState("")
    const[placaVeiculo, setPlacaVeiculo] = useState("")

    const handleEmailCadastro = (event) =>{
        setEmailCadastro(event.target.value)
    }

    const handleSenhaCadastro = (event) =>{
        setSenhaCadastro(event.target.value)
    }

    const handleCpf = (event) =>{
        setCpf(event.target.value)
    }

    const handleApolice = (event) =>{
        setApolice(event.target.value)
    }

    const handlePlacaVeiculo = (event) =>{
        setPlacaVeiculo(event.target.value)
    }
    return(
        <>
            <Header></Header>
            <section className="secao_form">
                <div className="tit_secao_form">
                    <h1>cadastro</h1>
                    <hr />
                </div>
                <form action="" className="fundo_form_cadastro">
                    <input type="email" placeholder="E-mail" className="input_form" value={emailCadastro} onChange={handleEmailCadastro}/>
                    <input type="password" placeholder="Senha" className="input_form" value={senhaCadastro} onChange={handleSenhaCadastro}/>
                    <input type="text" placeholder="CPF" className="input_form" value={cpf} onChange={handleCpf}/>
                    <input type="text" placeholder="N da apólice" className="input_form" value={apolice} onChange={handleApolice}/>
                    <input type="text" placeholder="Placa do veículo" className="input_form" value={placaVeiculo} onChange={handlePlacaVeiculo}/>
                    <button type="button" className="btn_form">cadastrar</button>
                </form>
                <p className="redirect_fomrs">Já possui uma conta? <Link to='/login'>Fazer login</Link></p>
            </section>
        </>
    )
}