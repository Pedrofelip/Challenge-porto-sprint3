import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import imgBtn from "../../assets/icone-btn-banner1.png"
import img1Banner2 from "../../assets/img-card-banner2.png"
import img2Banner2 from "../../assets/img3-card-banner2.png"
import img3Banner2 from "../../assets/img2-card-banner2.png"
import caminhao from '../../assets/caminhao-vetor.png'
import celular from '../../assets/vetor-celular-seta.png'
import './Home.css'
import '../../styles/Global.css'

export const Home = () =>{
    return(
        <>
            <Header></Header>
            <section className="banner1">
                <div className="grid_banner1">
                    <a href="" className="btn_banner1">iniciar atendimento <img src={imgBtn} alt="" /></a>
                </div>
            </section>
            <section className="banner2">
                <div className="grid_div1_banner2">
                    <article className="card_banner2">
                        <div className="img_linha_banner">
                            <img src={img1Banner2} alt="" />
                            <hr />
                        </div>
                        <h2>assertividade</h2>
                        <p>
                        Através do nosso sistema, a porcentagem de acerto da escolha do modal será maior, e evoluirá para cada vez ser mais alta.
                        </p>
                    </article>
                    <article className="card_banner2">
                        <div className="img_linha_banner">
                            <img src={img2Banner2} alt="" />
                            <hr />
                        </div>
                        <h2>inovação</h2>
                        <p>
                        Acompanhando a evolução da tecnologia, utilizamos inteligência artificial para seleção do guincho mais adaptado para a sua necessidade, aprimorando-o cada vez mais. 
                        </p>
                    </article>
                    <article className="card_banner2">
                        <div className="img_linha_banner">
                            <img src={img3Banner2} alt="" />
                            <hr />
                        </div>
                        <h2>agilidade</h2>
                        <p>
                        Com toda técnica e modernidade aplicada em nosso sistema, seu atendimento se tornará mais efetivo, garantindo a satisfação de todos nossos clientes. 
                        </p>
                    </article>
                </div>
                <hr className="linha_home"/>
                <div className="grid_div2_banner2">
                    <div className="card_div2_banner2">
                        <h2>serviços<br /><b>24 horas</b></h2>
                    </div>
                    <div className="txt_img_banner2">
                        <p>
                        Após a solicitação, analisamos e solicitamos o veículo mais adequado e próximo ao local de atendimento, onde o cliente receberá o melhor serviço.
                        </p>
                        <div className="img_div2_banner2">
                            <img src={caminhao} alt="" />
                            <p>guinchos 24 horas</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner3">
                <div className="grid_banner3">
                    <div className="img_linha_banner3">
                        <img src={celular} alt="" />
                        <hr />
                    </div>
                    <div className="txts_banner3">
                        <h2>gostaria de fazer uma solicitação?</h2>
                        <p>Venha conhecer nosso serviço!</p>
                    </div>
                    <a href="" className="btn_banner3">clique aqui</a>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}