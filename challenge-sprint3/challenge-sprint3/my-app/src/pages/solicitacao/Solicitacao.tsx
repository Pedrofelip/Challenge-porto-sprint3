import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import alerta from '../../assets/sinal-alerta.png'
import maps from '../../assets/sinal-localizacao.png'
import '../../styles/Global.css'
import './Solicitacao.css'

export const Solicitacao = () => {
    return (
        <>
            <Header></Header>
            <section className="fundo_solicitacao">
                <div className="grid_solicitacao">
                    <h1>Preencha os campos para <br /> realizar sua solicitação</h1>
                    <div className="fundo_form_solicitacao">
                        <div className="grid_legenda_alerta_form">
                        <div className="legenda_form">
                            <img src={alerta} alt="" />
                            <p>Insira as informações do veículo baseado na documentação</p>
                        </div>
                        </div>
                        <form action="" className="formulario_solicitacao">
                            <div className="grid_label_input1 tamanho_input1">
                                <label htmlFor="">Qual o motivo da solicitação?</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">Comprimento</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">Altura</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">Largura</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Quantidade de eixos</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Chassi</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Tara</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">PBT</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">CMT</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">PBTC</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_switch">
                                <p>O veículo possui carga?</p>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Peso</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Altura</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Comprimento</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input2">
                                    <label htmlFor="">Largura</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_legenda_form">
                            <div className="legenda_form">
                                <img src={maps} alt="" />
                                <p>Insira as informações do veículo baseado na documentação</p>
                            </div>
                            </div>
                            <div className="grid_inputs_lado_a_lado">
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">Qual o motivo da solicitação?</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">Qual o motivo da solicitação?</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="grid_label_input1 tamanho_input3">
                                    <label htmlFor="">CEP</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="grid_label_input1 tamanho_input1">
                                <label htmlFor="">Endereço</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="grid_label_input1 tamanho_input1">
                                <label htmlFor="">Dê uma referência de localização</label>
                                <input type="text" name="" id="" />
                            </div>

                            <button type="button" className="button_solicitar">solicitar</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}