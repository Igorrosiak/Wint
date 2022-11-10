import '../assets/scss/skills.scss'
import Coroa from '../assets/images/coroa.png'
import Planeta from '../assets/images/planetinha.png'
import Quadrado from '../assets/images/quadrado.png'
import { createSkill } from '../service/newSkills'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const SkillsComponent = _ => {
    const [skillName, setSkillName] = useState("")
    const [skillDescription, setSkillDescription] = useState("")    
    
    const [skills, setSkills] = useState([])
    
    const skillBody = {
        name: skillName,
        description: skillDescription,
        userFromSkill: {id: 1}
    }

    var imagemAtual = ""

    function handleId(){
        if(imagemAtual === "Quadrado"){
            imagemAtual = "Coroa"
            return Coroa
        } else if(imagemAtual === "Coroa"){
            imagemAtual = "Planeta"
            return Planeta
        } else{
            imagemAtual = "Quadrado"
            return Quadrado
        }
    }

    const getSkills = async () => {
        await axios
            .get("http://localhost:8080/skill/")
            .then(res => setSkills(res.data))
            console.log("OI");
    }

    useEffect(() => {
        getSkills()
    }, [])

    return (
        <div className="main-skill">
            <h4>- S K I L L S</h4>

            <div className="header">
                <h1>Especializado(a) em...</h1>
                <button className="newSkill" onClick={createSkill}><i class="fi fi-br-plus"></i></button>
            </div>

            { skills.length === 0 &&(
                <h2 className="textMotivate">Adicione uma nova Skill!</h2>
            )}

            { skills.length !== 0 &&(
                <article className="image-box">
                    {
                        skills.map(skill => {
                            return(
                                <div key={skill.id} className="box">
                                    <img src={handleId()} alt="icon-quadrado" />
                                    <h3>{skill.name}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            )
                        })
                    }
                </article>
            )}

            <div className="modal">
                <h1 className="textModal">Crie sua nova skill!</h1>

                <input 
                    value={skillName}
                    onChange={(e) => {
                        setSkillName(e.target.value)
                    }}
                    className="inputModal" 
                    type="text" 
                    placeholder="Nome da sua especialidade"/>
                <input 
                    value={skillDescription}
                    onChange={(e) => {
                        setSkillDescription(e.target.value)
                    }}
                    className="inputModal" 
                    type="text" 
                    placeholder="Descrição da sua especialidade"/>
                <button onClick={() => createSkill(skillBody)}>Criar Skill</button>
            </div>
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           