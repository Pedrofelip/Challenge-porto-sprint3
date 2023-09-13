import '../../styles/Global.css'
import './Header.css'
import imgUser from '../../assets/profile.png'
import { Link } from 'react-router-dom'



export const Header = () => {

    return (
        <header className='cabecalho'>
            <div className='grid_cabecalho'>
                <Link to='/' className='logo_grupo'>Code Masters Group</Link>
                <nav className='nav_cabecalho'>
                    <ul className='ul_cabecalho'>
                        <li className='li_cabecalho'><Link className='a_cabecalho' to='/solicitações'>Solicitação</Link></li>
                        <li className='li_cabecalho'><Link className='a_cabecalho' to='/acompanhamento'>Acompanhamento</Link></li>
                        <li className='li_cabecalho'><Link className='a_cabecalho' to='/integrantes'>Integrantes</Link></li>
                    </ul>
                </nav>
                <Link to='/login'><img src={imgUser} alt="" className='img_cabecalho' /></Link>
            </div>
        </header>
    )
}