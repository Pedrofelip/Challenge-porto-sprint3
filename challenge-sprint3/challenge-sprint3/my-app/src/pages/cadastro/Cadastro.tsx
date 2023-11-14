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


