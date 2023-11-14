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


    function Cadastrar() {
        const dadosCadastro = {
                                nome: emailCadastro, 
                                senha: senhaCadastro,
                                cpf: cpf, 
                                apolice: apolice, 
                                placa: placaVeiculo
                            };

        console.log(dadosCadastro)

        fetch('http://localhost:3000/cliente', {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(dadosCadastro)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            console.log('usuario cadastrado')
        })
        .catch((error) => console.log(error))
    }

    const handleEmailCadastro = (event : any) =>{
        setEmailCadastro(event.target.value)
    }

    const handleSenhaCadastro = (event : any) =>{
        setSenhaCadastro(event.target.value)
    }

    const handleCpf = (event : any) =>{
        setCpf(event.target.value)
    }

    const handleApolice = (event : any) =>{
        setApolice(event.target.value)
    }

    const handlePlacaVeiculo = (event : any) =>{
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
                    <input type="email" placeholder="Nome" className="input_form" value={emailCadastro} onChange={handleEmailCadastro}/>
                    <input type="password" placeholder="Senha (até 6 digitos)" className="input_form" value={senhaCadastro} onChange={handleSenhaCadastro}/>
                    <input type="text" placeholder="CPF (11 digitos)" className="input_form" value={cpf} onChange={handleCpf}/>
                    <input type="text" placeholder="N da apólice" className="input_form" value={apolice} onChange={handleApolice}/>
                    <input type="text" placeholder="Placa do veículo(modelo aaa-0000 ou aaa-0a00)" className="input_form" value={placaVeiculo} onChange={handlePlacaVeiculo}/>
                    <button type="button" className="btn_form" onClick={Cadastrar}>cadastrar</button>
                </form>
                <p className="redirect_fomrs">Já possui uma conta? <Link to='/login'>Fazer login</Link></p>
            </section>
        </>
    )
}