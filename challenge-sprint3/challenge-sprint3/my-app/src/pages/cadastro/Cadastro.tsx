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
        const dadosCadastro = {emailCadastro, senhaCadastro, cpf, apolice, placaVeiculo};

        fetch('urlapi', {
            method: 'POST',
            headers: {"Cpntent-type" : "application/json"},
            body: JSON.stringify(dadosCadastro)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            console.log('usuario cadastrado')
        })
        .catch((err) => console.log(err))
    }

    const handleEmailCadastro = (event) =>{
        setEmailCadastro(event.target.value)
    }

    const handleSenhaCadastro = (event) =>{
        setSenhaCadastro(event.target.value)
    }

