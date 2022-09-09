import "./signInView.scss"
import imagem from "../../assets/images/logo-wint.png"
import textWint from "../../assets/images/texto-wint.png"
import imgAppStore from "../../assets/images/imgAppStore.png"
import imgGooglePlay from "../../assets/images/imgGooglePlay.png"

export const SignInView = _ => {
    return (
        <main className="signIn">
            <article className="image">
                <div className="box-image">
                    <img src={imagem} alt="Logo Wint" />
                </div>
            </article>
            <article className="login-area">
                <div className="form">
                    <img src={textWint} alt="Logo Wint" />
                    <input type="text" placeholder="  LOGIN" />
                    <input type="text" placeholder="  SENHA" />
                    <small>ESQUECEU A SENHA?</small>
                    <button>ENTRAR</button>
                    <div className="texto">
                        <p>NÃO TEM UMA CONTA? <a href="canva.com">CADASTRE-SE</a></p>
                    </div>
                <article className="images">
                    <div>
                        <img className="appStore" src={imgAppStore} alt="Imagem App Store" />
                        <img className="googlePlay" src={imgGooglePlay} alt="Imagem Google Play" />
                    </div>
                </article>
                </div>
            </article>
        </main>
    )
}