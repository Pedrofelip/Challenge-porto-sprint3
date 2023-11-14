import { useState } from "react"
import { Header } from "../../components/header/Header"
import { Link } from 'react-router-dom'
import '../../styles/Global.css'
import './Login.css'

export const Login = () => {
    const[emaiLogin, setEmailLogin] = useState("")
    const[senhaLogin, setSenhaLogin] = useState("")

    const handleEmailLogin = (event) =>{
        setEmailLogin(event.target.value)
    }

    const handleSenhaLogin = (event) =>{
        setSenhaLogin(event.target.value)
    }
    return (
        <>
            <Header></Header>
            <section className="secao_form">
                <div className="tit_secao_form">
                    <h1>login</h1>
                    <hr />
                </div>
                <form action="" className="fundo_form_login">
                    <input type="email" placeholder="E-mail" className="input_form" value={emaiLogin} onChange={handleEmailLogin}/>
                    <input type="password" placeholder="Senha" className="input_form" value={senhaLogin} onChange={handleSenhaLogin}/>
                    <button type="button" className="btn_form">login</button>
                    <a href="#" className="forget_psw">Esqueceu sua senha?</a>
                </form>
                <p className="redirect_fomrs">Não possui uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
            </section>
        </>
    )
}