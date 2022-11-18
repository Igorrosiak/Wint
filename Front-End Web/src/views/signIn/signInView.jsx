import "./signInView.scss"
import LogoLogin from "../../assets/images/logo-login.svg"


export const SignInView = _ => {
    return (
        <>
            <div className="main-login">
                <div className="col-login">
                    <div className="form">
                        <div className="header-form">
                            <h2>Bem-vindo(a)!</h2>
                            <p>Coloque os dados abaixo para usufruir do melhor da Wint!</p>
                        </div>

                        <div className="body-form">
                            <form action="/pagina-processa-dados-do-form" method="post">
                                <div>
                                    <label for="email">E-mail</label>
                                    <input type="email" id="email" />
                                </div>
                                <div>
                                    <label for="nome">Senha</label>
                                    <input type="password" id="senha" />
                                    <p>Esqueceu a senha?</p>
                                </div>
                            </form>
                        </div>

                        <div className="button-form">
                            <button>Entrar</button>
                            <p>Ainda não tem uma conta? <b><a href="">Registre-se aqui!</a></b></p>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={LogoLogin} alt="Logo quebrada cima e baixo" />
                    </div>
                </div>
            </div>
        </>
    )
}