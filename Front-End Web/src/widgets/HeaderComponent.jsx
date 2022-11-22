import logoWint from '../assets/images/logo-completa-wint.svg'
import backgroundImage from '../assets/images/background-image.svg'
import imagePerfil from '../assets/images/image-teste-perfil.svg'
import '../assets/scss/profileView.scss'
import '../assets/scss/navbar.scss'
import { IoIosHeart } from "react-icons/io";


export const HeaderComponent = _ => {
    return (
        <main className="myProfile">
            <div className="nav-bar">
                <img className='logo' src={logoWint} alt="" onClick={() => { window.location.href = "/" }} />
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li className='menu-item'>
                        <a href='#objectives' className="menu-link">Skills</a>
                    </li>
                    <li className='menu-item'>
                        <a href='#participants' className="menu-link">Portfolio</a>
                    </li>
                    <li className='menu-item'>
                        <a href='#steps' className="menu-link">Experiencias</a>
                    </li>
                    <li className='menu-item'>
                        <a href='#prices' className="menu-link">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="body-header">
                <div className="col">
                    <div className="class-component">
                        <p>- HELLO WORD</p>
                    </div>

                    <div className="infos">
                        <div className='name'>
                            <h2 id='first'>Gabriela</h2><h2 id='last'>Senna</h2>
                        </div>
                        <p>Seja bem vindo ao meu portfolio virtual da Wint, aqui voce encontrara meus trabalhos do senai, cursos especializantes e demais areas que mando bem! </p>
                    </div>

                    <div className="social-media">
                        <i class="fi fi-brands-instagram"></i>
                        <i class="fi fi-brands-twitter"></i>
                        <i class="fi fi-brands-linkedin"></i>
                        <i class="fi fi-brands-github"></i>
                    </div>
                </div>

                <div className="col">
                    <div className="image-perfil">
                        <img src={backgroundImage}  className="back"/>
                        <img src={imagePerfil} className="image" />
                    </div>
                </div>
            </div>
        </main>
    )
}