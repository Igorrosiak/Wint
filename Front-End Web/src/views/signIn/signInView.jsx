import "./signInView.scss"
import logoWint from "../../assets/images/logo-wint2.png"
import textWint from "../../assets/images/texto-wint2.png"
import imgAppStore from "../../assets/images/imgAppStore.png"
import imgGooglePlay from "../../assets/images/imgGooglePlay.png"

export const SignInView = _ => {
    return (
        <main className="signIn">
            <article className="image">
                <div className="box-image">
                    <img src={logoWint} alt="Logo Wint" />
                </div>
            </article>
            <article className="login-area">
                <div className="form-area">
                    <div className="image-logo">
                        <img src={textWint} alt="Logo Wint" />
                    </div>

                    <div className="form">
                        <input type="text" placeholder="LOGIN" />
                        <input type="password" placeholder="SENHA" />
                        <small><a href="#">ESQUECEU A SENHA?</a></small>
                        <button>ENTRAR</button>
                        <p>NÃO TEM UMA CONTA? <a href="#">CADASTRE-SE</a></p>
                        <div className="images">
                            <img className="appStore" src={imgAppStore} alt="Imagem App Store" />
                            <img className="googlePlay" src={imgGooglePlay} alt="Imagem Google Play" />
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}