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
                </div>
                <div className="form-singup">
                    <div class="label-float">
                        <input type="text" placeholder=" " />
                        <label>Nome</label>
                    </div>
                    <div class="label-float">
                        <input type="text" placeholder=" " required />
                        <label>Sobrenome</label>
                    </div>
                    <div class="label-float">
                        <input type="date" placeholder=" " />
                        <label>Data de Nascimento</label>
                    </div>
                    <div class="label-float">
                        <input type="text" placeholder=" " required />
                        <label>Nome de Usuário</label>
                    </div>
                    <div class="label-float">
                        <input type="text" placeholder=" " />
                        <label>Email</label>
                    </div>
                    <div class="label-float">
                        <input type="text" placeholder=" " required />
                        <label>Telefone</label>
                    </div>
                    <div class="label-float">
                        <input type="password" placeholder=" " />
                        <label>Senha</label>
                    </div>
                    <div class="label-float">
                        <input type="password" placeholder=" " required />
                        <label>Confirmar Senha</label>
                    </div>
                </div>

                <div className="checkbox-terms">
                    <input type="checkbox" id="terms" className="terms-checkbox" />
                    <label htmlFor="terms"> Concordo com os <a href="">Termos, Política de Privacidade e Política de Cookies</a>.</label>
                </div>

                <div className="button-singup">
                    <button>Cadastrar</button>
                </div>
            </main>
        </>
    )
}