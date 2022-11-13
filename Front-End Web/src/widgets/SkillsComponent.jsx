import '../assets/scss/skills.scss'
import Coroa from '../assets/images/coroa.png'
import Planeta from '../assets/images/planetinha.png'
import Quadrado from '../assets/images/quadrado.png'
import { createSkill, editSkill, deleteSkill } from '../service/SkillsCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const SkillsComponent = _ => {
    const [skillName, setSkillName] = useState("")
    const [skillDescription, setSkillDescription] = useState("")        
    const skillBody = {
        name: skillName,
        description: skillDescription,
        userFromSkill: {id: 1}
    }

    const [skillNameForEdit, setSkillNameForEdit] = useState("")
    const [skillDescriptionForEdit, setSkillDescriptionForEdit] = useState("")        
    const skillBodyForEdit = {
        name: skillName,
        description: skillDescription,
        userFromSkill: {id: 1}
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    function openCloseModal(){
        if(modalIsOpen === false){
            setModalIsOpen(true)
        } else{
            setModalIsOpen(false)
        } 
    }

    let imagemAtual = ""
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

    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
    async function openDeleteModal(){
        setModalDeleteIsOpen(true)
    }
    function closeDeleteModal(){
        setModalDeleteIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    const [skills, setSkills] = useState([])
    const getSkills = async () => {
        await axios
            .get("http://localhost:8080/skill/")
            .then(res => setSkills(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getSkills()
        console.log(modalDeleteIsOpen);
    }, [modalDeleteIsOpen])

    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    function openEditModal(){
        setModalEditIsOpen(true)
    }
    function closeEditModal(){
        setModalEditIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    return (
        <div className="main-skill">

            { modalIsOpen === true &&(
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className ="fi fi-br-cross" onClick={openCloseModal}></i></button>
                        <h1 className="textModal">Adicione sua nova skill!</h1>

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
                        <button className="submitNewSkill" onClick={() => createSkill(skillBody)}>Criar Skill</button>
                    </div>
                </div>
            )}

            { modalEditIsOpen === true &&(
                <div className="modalDelete">
                    {/* USAR URL + ID NO MAP (FIND BY ID) */}
                    <div className="content">
                        <h1>Edite sua Skill</h1>
                        <div className="buttons">
                            <button onClick={() => closeEditModal()}>X</button>
                            <button onClick={() => editSkill()}>Sim</button>
                        </div> 
                    </div>
                </div>
            )}

            <h4>- S K I L L S</h4>

            <div className="header">
                <h1>Especializado(a) em...</h1>
                <button className="newSkill" onClick={openCloseModal}><i className="fi fi-br-plus"></i></button>
            </div>

            { skills.length === 0 &&(
                <h2 className="textMotivate">Adicione uma nova Skill!</h2>
            )}

            { skills.length !== 0 &&(
                <article className="rowSkills">
                    {
                        skills.map(skill => {
                            return(
                                <div key={skill.id} className="cardSkill">
                                    <button className="editSkill" >
                                    <i className="fi fi-br-cross" onClick={() => {
                                            openEditModal()
                                            localStorage.setItem("idSelecionedForEdit", skill.id)
                                        }}/>
                                    </button>
                                    <button className="deleteSkill" >
                                        <i className="fi fi-br-cross" onClick={() => {
                                            localStorage.setItem("idSelecionedForDelete", skill.id)
                                            openDeleteModal()
                                        }}/>
                                    </button>
                                    <img src={handleId()} alt="icon-quadrado" />
                                    <h3>{skill.name}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            )
                        })
                    }
            
                    { modalDeleteIsOpen === true &&(
                        <div className="modalDelete">
                            <div className="content">
                                <h1>Tem certeza que deseja deletar essa skill?</h1>
                                <div className="buttons">
                                    <button onClick={() => closeDeleteModal()}>Não</button>
                                    <button onClick={() => deleteSkill()}>Sim</button>
                                </div> 
                            </div>
                        </div>
                    )}
                </article>
            )}
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           