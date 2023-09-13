import { Header } from "../../components/header/Header"
import { ProcessoAcompanhamento } from "../../components/processoAcompanhamento/ProcessoAcompanhamento"
import '../../styles/Global.css'
import './Acompanhamento.css'

export const Acompanhamento = () =>{

    const arrayInfo = [
        {data:'16/05/2021', hora:'12:45', cidade:'São Paulo/SP', mensagem:'O repoque foi realizado'},
        {data:'16/05/2021', hora:'11:45', cidade:'São Paulo/SP', mensagem:'O reboque esta a caminho'},
        {data:'16/05/2021', hora:'10:45', cidade:'São Paulo/SP', mensagem:'O reboque foi solicitado'}
    ]

    return(
        <>
            <Header></Header>
            <ProcessoAcompanhamento numSolicitão='12345' solicitado='true' aCaminho='true' rebocado='true' arrayInfos = {arrayInfo}/>
        </>
    )
}