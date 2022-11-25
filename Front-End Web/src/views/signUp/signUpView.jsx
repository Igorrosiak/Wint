import "./signUpView.scss"
import nameWint from "../../assets/images/logo-wint2.png"

export const SignUpView = _ => {
    return (
        <>
            <div class="azul-circulo rotate-right"></div>
            <div class="roxo-circulo rotate-left"></div>
            <main className="singUp">
                <div className="box-image">
                    <img src={nameWint} alt="Logo escrita Wint" />
                    <h2>Engaje sua carreira com Wint. Cadastre-se abaixo</h2>
                </div>
                <div className="form-singup">
                    <div class="label-float">
                        <label>Nome</label>
                        <input type="text" placeholder=" " />
                    </div>
                    <div class="label-float">
                        <label>Sobrenome</label>
                        <input type="text" placeholder=" " required />
                    </div>
                    <div class="label-float">
                        <label>Data de Nascimento</label>
                        <input type="date" placeholder=" " />
                    </div>
                    <div class="label-float">
                        <label>Nome de Usuário</label>
                        <input type="text" placeholder=" " required />
                    </div>
                    <div class="label-float">
                        <label>Email</label>
                        <input type="text" placeholder=" " />
                    </div>
                    <div class="label-float">
                        <label>Telefone</label>
                        <input type="text" placeholder=" " required />
                    </div>
                    <div class="label-float">
                        <label>Senha</label>
                        <input type="password" placeholder=" " />
                    </div>
                    <div class="label-float">
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder=" " required />
                    </div>
                </div>

                <div className="checkbox-terms">
                    <input type="checkbox" id="terms" className="terms-checkbox" />
                    <label htmlFor="terms"> Concordo com os <a href="">Termos, Política de Privacidade e Política de Cookies</a>.</label>
                </div>

                <div className="button-singup">
                    <button><a href="/">Cadastrar</a></button>
                </div>
            </main>
        </>
    )
}