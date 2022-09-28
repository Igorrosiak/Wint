import user from "../../assets/images/user.png"
import edit from "../../assets/images/editar.png"
import box from "../../assets/images/box.png"
import "./profileView.scss"

export const ProfileView = _ =>{
    return(
        <main className="myProfile">
            <article className="cabecalho">
                <div className="imgUserIcon">
                    <img src={user} alt="userIcon"/>
                </div>

                <div className="imgEditIcon">
                    <p>Nome de Usuário</p>
                    <img src={edit} alt="editIcon" />
                </div>
            </article>

            <article className="images-box">
                <div>
                    <div className="box-1">
                        <img src={box} alt="box-1" />
                    </div>
                    <div className="box-2">
                        <img src={box} alt="box-2" />
                    </div>
                    <div className="box-3">
                        <img src={box} alt="box-3" />
                    </div>
                </div>
            </article>
        </main>
    )
}