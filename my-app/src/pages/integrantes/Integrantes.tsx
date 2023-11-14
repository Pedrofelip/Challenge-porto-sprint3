import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import './Integrantes.css'
import '../../styles/Global.css'
import { Card } from "../../components/card_integrantes/Card_integrantes"
import fotoKaue from "../../assets/kaue.png"
import fotoJoao from "../../assets/joao.png"
import fotoIgor from "../../assets/igor.png"
import fotoGustavo from "../../assets/gustavo.png"
import fotoPedro from "../../assets/pedro.jpg"




export const Integrantes = () => {
    const img = fotoPedro
    const nome = 'pedro felipe barros'
    const rm = '98093'

    return (
        <>
            <Header></Header>
            <section className="fundo_integrantes">
                <div className="grid_integrantes">
                    <h1>Integrantes</h1>
                    <hr />
                    <div className="grid_cards">
                        <Card imgIntegrante={fotoKaue} nomeIntegrante='Kaue Santana'rmIntegrante='551732'/>
                        <Card imgIntegrante={fotoJoao} nomeIntegrante='João Pedro Feitosa'rmIntegrante='98442'/>
                        <Card imgIntegrante={img} nomeIntegrante={nome} rmIntegrante={rm}/>
                        <Card imgIntegrante={fotoIgor} nomeIntegrante='Igor Miguel Silva'rmIntegrante='99495'/>
                        <Card imgIntegrante={fotoGustavo} nomeIntegrante='Gustavo René'rmIntegrante='551288'/>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}