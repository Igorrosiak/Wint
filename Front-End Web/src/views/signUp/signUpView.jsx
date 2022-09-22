import "./signUpView.scss"
import nameWint from "../../assets/images/logotext.svg"

export const SignUpView = _ => {
    return (
        <main className="singUp">
            <div className="box-image">
                <img src={nameWint} alt="Logo escrita Wint" />
            </div>
            <div className="form-singup">
                <div class="label-float">
                    <input type="text" placeholder=" "/>
                    <label>Telefone</label>
                    </div>
                    <div class="label-float">
                    <input type="text" placeholder=" " required/>
                    <label>Nome de Usuário</label>
                </div>
                <div class="label-float">
                    <input type="text" placeholder=" "/>
                    <label>Telefone</label>
                    </div>
                    <div class="label-float">
                    <input type="text" placeholder=" " required/>
                    <label>Nome de Usuário</label>
                </div>
                <div class="label-float">
                    <input type="text" placeholder=" "/>
                    <label>Telefone</label>
                    </div>
                    <div class="label-float">
                    <input type="text" placeholder=" " required/>
                    <label>Nome de Usuário</label>
                </div>
                <div class="label-float">
                    <input type="text" placeholder=" "/>
                    <label>Telefone</label>
                    </div>
                    <div class="label-float">
                    <input type="text" placeholder=" " required/>
                    <label>Nome de Usuário</label>
                </div>
            </div>
            
            <div className="checkbox-terms">
                <input type="checkbox"id="terms" className="terms-checkbox"/>
                <label htmlFor="terms"> Concordo com os <a href="">Termos, Política de Privacidade e Política de Cookies</a>.</label>
            </div>

            <div className="button-singup">
                <button>Cadastrar</button>
            </div>
        </main>
    )
}