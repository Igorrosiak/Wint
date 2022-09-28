import user from "../../assets/images/user.png"
import edit from "../../assets/images/editar.png"
import back from "../../assets/images/back.png"
import "./profileView.scss"

export const ProfileView = _ => {
    return (
        <main className="myProfile">
            <article className="cabecalho">
                <div className="imgUserIcon">
                    <img src={user} alt="userIcon" />
                </div>

                <div className="imgEditIcon">
                    <p>Nome de Usuário</p>
                    <img src={edit} alt="editIcon" />
                    <p className="bio">biografia do Usuário cadastrado</p>
                </div>
            </article>

            <div className="imgBack">
                    <img src={back} alt="backIcon"/>
                </div>


            <article className="images-box">

                <div className="box">

                </div>
                <div className="box">

                </div>
                <div className="box">

                </div>
            </article>

            <article className="images-box">

                <div className="box">

                </div>
                <div className="box">

                </div>
                <div className="box">

                </div>
            </article>
        </main>
    )
}