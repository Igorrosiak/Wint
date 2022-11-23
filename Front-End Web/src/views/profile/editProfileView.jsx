import "./editProfileView.scss"
import  user  from "../../assets/images/user.png"
export const EditProfileView = _ => {
    return (
        <main className="profile">
            <div className="main">
                <form className="formulario">
                    <article className="img">
                        <div className="box-image">
                            <div className="info-user">
                                <p className="username">USERNAME</p>
                                <p className="date">xx/xx/xxxx</p>
                            </div>
                            <img src={ user } alt="User-icon"/>
                        </div>
                    </article>
                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="name">NOME</label>
                            <input type="text" size="30" placeholder="" />
                        </div>

                        <div className="text-area">
                            <label class="required" for="sobrenome">SOBRENOME</label>
                            <input type="text" size="30" />
                        </div>
                    </div>
    
                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="name">NOME USUÁRIO</label>
                            <input type="text" size="30" />
                        </div>
                        <div className="text-area">
                            <label class="required" for="sobrenome">BIOGRAFIA</label>
                            <input type="text" size="30" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="sobrenome">EMAIL</label>
                            <input type="text" size="30" />
                        </div>
    
                        <div className="text-area">
                            <label class="required" for="telefone">TELEFONE</label>
                            <input type="tel" size="30" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="sobrenome">ALTERAR SENHA</label>
                            <input type="text" size="30" />
                        </div>
    
                        <div className="text-area">
                            <label class="required" for="sobrenome">REPETIR SENHA</label>
                            <input type="text" size="30" />
                        </div>
                    </div>
                    <button>
                         ENVIAR
                    </button>
                </form>
            </div>
        </main>
    )
}