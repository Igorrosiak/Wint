import "./profileView.scss"

export const ProfileView = _ => {
    return (
        <main className="profile">
            <h2>EDITAR PERFIL</h2>

            <div>
                <label class="required" for="name">Nome:</label>
                <input id="name" class="input" name="name" type="text" value="" size="30" placeholder="ariany"/>
                
                <label class="required" for="sobrenome">Sobrenome:</label>
                <input id="lastname" class="input" name="lastname" type="text" value="" size="30" />
        
                <label class="required" for="name">Nome usuário:</label>
                <input id="username" class="input" name="username" type="text" value="" size="30" />
                
                <label class="required" for="sobrenome">Biografia:</label>
                <input id="email" class="input" name="email" type="text" value="" size="30" />

                <label class="required" for="sobrenome">Email:</label>
                <input id="email" class="input" name="email" type="text" value="" size="30" />

                <label class="required" for="sobrenome">Telefone:</label>
                <input id="email" class="input" name="email" type="text" value="" size="30" />

                <label class="required" for="sobrenome">Alterar senha:</label>
                <input id="email" class="input" name="email" type="text" value="" size="30" />

                <label class="required" for="sobrenome">Repetir senha:</label>
                <input id="email" class="input" name="email" type="text" value="" size="30" />

            </div>
        </main>
    )
}