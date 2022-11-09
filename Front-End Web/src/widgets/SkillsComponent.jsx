import '../assets/scss/skills.scss'
import Coroa from '../assets/images/coroa.png'
import Planeta from '../assets/images/planetinha.png'
import Quadrado from '../assets/images/quadrado.png'


export const SkillsComponent = _ => {
    return (
        <>
            <h4>S K I L L S</h4>

            <br />

            <h1>Especializado(a) em...</h1>

            <article className="image-box">
                <div className="box">
                    <img src={Coroa} alt="icon-coroa" />
                    <h3>UI/UX Design</h3> <br />
                    <p>Breve graduação em experiências de <br/> usuários</p>
                </div>

                <div className="box">
                    <img src={Quadrado} alt="icon-quadrado" />
                    <h3>Aplication Development</h3> <br />
                    <p>Skils desenvolvidas ao longo do <br/> curso técnico de Desenvolvimento <br/> de Sistemas do SENAI</p>
                </div>

                <div className="box">
                    <img src={Planeta} alt="icon-planeta" />
                    <h3>Gestão empresarial</h3> <br />
                    <p>Após estudos e práticas, tenho <br/> conhecimento e habilidades voltadas <br/> para a gestão de equipes e negócios</p>
                </div>
            </article>
        </>
    )

}