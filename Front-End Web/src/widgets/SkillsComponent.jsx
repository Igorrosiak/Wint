import '../assets/scss/skills.scss'
import Coroa from '../assets/images/coroa.png'
import Planeta from '../assets/images/planetinha.png'
import Quadrado from '../assets/images/quadrado.png'
import { createSkill } from '../service/newSkills'
import { useState } from 'react'
import axios from 'axios'

export const SkillsComponent = _ => {

    const [skills, setSkills] = useState([])

    axios
        .get("http://localhost:8080/skill/")
        .then(res => setSkills(res.data))

    return (
        <div className='main-skill'>
            <div className="header">
                <h4>---- S K I L L S</h4>

                <button onClick={createSkill}>+</button>
            </div>

            <h1>Especializado(a) em...</h1>

            <article className="image-box">
                {
                    skills.map(skill => {
                        return(
                            <div key={skill.id} className="box">
                                <img src={Quadrado} alt="icon-quadrado" />
                                <h3>{skill.name}</h3>
                                <p>{skill.description}</p>
                            </div>
                        )
                    })
                }
            </article>
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           