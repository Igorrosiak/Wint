import "./signInView.scss"
import imagem from "../../assets/images/logo-wint.png"
import textWint from "../../assets/images/texto-wint.png"

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
                    <input type="text" placeholder="LOGIN" />
                    <input type="text" placeholder="SENHA" />
                    <small>ESQUECEU A SENHA?</small>
                    <button>ENTRAR</button>
                    <p>NÃO TEM UMA CONTA? <a href="canva.com">CADASTRE-SE</a></p>
                    <img src="#" alt="Imagem App Store" />
                    <img src="#" alt="Imagem Google Play" />
                </div>
            </article>
        </main>
    )
}