import logoWint from '../../assets/images/logo-completa-wint.svg'
import "./profileView.scss"
import "./navbar.scss"

export const ProfileView = _ => {
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

        </main>
    )
}