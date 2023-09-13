import '../../styles/Global.css'
import './Card_integrantes.css'

export const Card = (props) => {
    return(
        <article className='fundo_card'>
            <div className='grid_card'>
                <img src={props.imgIntegrante} alt="" />
                <p><b>{props.nomeIntegrante}</b></p>
                <p>RM: {props.rmIntegrante}</p>
            </div>
        </article>
    )
}