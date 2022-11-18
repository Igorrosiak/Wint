import logoWint from '../assets/images/logo-completa-wint.svg'
import '../assets/scss/profileView.scss'
import '../assets/scss/navbar.scss'

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
                        <p>H e l l o W o r d!</p>
                    </div>

                    <div className="infos">
                        <h2>Gabriela Senna</h2>
                        <p>Seja bem vindo ao meu portfolio virtual da Wint, aqui voce encontrara meus trabalhos do senai, cursos especializantes e demais areas que mando bem! </p>
                    </div>

                    <div className="social-media">
                        <p>(icons)</p>
                    </div>
                </div>

                <div className="col">
                    <div className="image-perfil">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </main>
    )
}