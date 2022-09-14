import "./profileView.scss"

export const ProfileView = _ => {
    return (
        <main className="profile">
            <h2>EDITAR PERFIL</h2>
            <div className="main">
                <form className="formulario">
                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="name">Nome</label>
                            <input id="name" class="input" name="name" type="text" value="" size="30" placeholder="ariany" />
                        </div>

                        <div className="text-area">
                            <label class="required" for="sobrenome">Sobrenome</label>
                            <input id="lastname" class="input" name="lastname" type="text" value="" size="30" />
                        </div>
                    </div>
    
                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="name">Nome Usuário</label>
                            <input id="username" class="input" name="username" type="text" value="" size="30" />
                        </div>
                        <div className="text-area">
                            <label class="required" for="sobrenome">Biografia</label>
                            <input id="email" class="input" name="email" type="text" value="" size="30" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="sobrenome">Email</label>
                            <input id="email" class="input" name="email" type="text" value="" size="30" />
                        </div>
    
                        <div className="text-area">
                            <label class="required" for="telefone">telefone</label>
                            <input id="email" class="input" name="telefone" type="number" value="" size="30" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text-area">
                            <label class="required" for="sobrenome">Alterar Senha</label>
                            <input id="email" class="input" name="email" type="text" value="" size="30" />
                        </div>
    
                        <div className="text-area">
                            <label class="required" for="sobrenome">Repetir Senha</label>
                            <input id="email" class="input" name="email" type="text" value="" size="30" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}