import '../../styles/Global.css'
import './ProcessoAcompanhamento.css'

export const ProcessoAcompanhamento = (props) => {

    return (
        <section className='fundo_acompanhamento'>
            <div className='grid_acompanhamento'>
                <h1>Solicitação N°{props.numSolicitão}</h1>
                <div className='grid_esterira_acompanhamento'>
                    <div className='grid_inputs_acompanhamento'>
                        <input type="text" name='solicitado' value={props.solicitado} id='1etapa' disabled />
                        <label htmlFor="">solicitado</label>
                    </div>
                    <div className='grid_inputs_acompanhamento'>
                        <input type="text" name='aCaminho' value={props.aCaminho} id='2etapa' disabled />
                        <label htmlFor="">A caminho</label>
                    </div>
                    <div className='grid_inputs_acompanhamento'>
                        <input type="text" name='rebocando' value={props.rebocado} id='3etapa' disabled />
                        <label htmlFor="">rebocando</label>
                    </div>
                </div>
                <div className='grid_acompanhamento_txt'>
                    <h2>Descrição da atual solicitação</h2>
                    <div className='grid_txts_info'>
                        {props.arrayInfos.map((card) => (
                            <div className='card_txt_info'>
                            <div className='data_card'>
                                <p>{card.data}</p>
                                <p>{card.hora}</p>
                                <p>{card.cidade}</p>
                            </div>
                            <p>{card.mensagem}</p>
                        </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}