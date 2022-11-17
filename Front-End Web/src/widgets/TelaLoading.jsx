import '../assets/scss/loadingpage.scss'
import Logo from '../assets/images/logo-texto.svg'
import Simbolo from '../assets/images/logo-texto.svg'

export default function Animation(){
    return(
        <main className='MainLoadingView'>
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            
            <img src={Simbolo} className="simbolo" alt="Simbolo Wint" />
            <img src={Logo} className="logo-completa" alt="Logo Texto Wint" />

        </main>
    )
}