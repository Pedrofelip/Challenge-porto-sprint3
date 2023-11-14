import '../../styles/Global.css'
import './Footer.css'
import logoInsta from '../../assets/logo-insta-branco-removebg-preview.png'
import logoFace from '../../assets/logo-face-branco-removebg-preview (1).png'
import logoLinkedIn from '../../assets/logo-linkedIn-branco-removebg-preview.png'

export const Footer = () => {
    return(
        <footer className='rodape'>
            <div className='grid_rodape'>
                <p>&copy;2023 Code Masters Group | Todos os direitos reservados</p>
                <div className='links_rodape'>
                <a href="https://www.instagram.com/" target='_blank'><img src={logoInsta} alt="logo da rede social instagram" className='img_rodape'/></a>
                <a href="https://www.facebook.com/" target='_blank'><img src={logoFace} alt="logo da rede social facebook" className='img_rodape'/></a>
                <a href="https://br.linkedin.com/" target='_blank'><img src={logoLinkedIn} alt="logo da rede social linkedIn" className='img_rodape'/></a>
                </div>
            </div>
        </footer>
    )
}