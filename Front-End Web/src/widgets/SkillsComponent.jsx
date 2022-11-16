import '../assets/scss/skills.scss'
import Coroa from '../assets/images/coroa.png'
import Planeta from '../assets/images/planetinha.png'
import Quadrado from '../assets/images/quadrado.png'
import { createSkill, editSkill, deleteSkill } from '../service/SkillsCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const SkillsComponent = _ => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    function openCloseModal(){
        if(modalIsOpen === false){    
            setModalIsOpen(true)
        } else{
            setModalIsOpen(false)
        } 
    }

    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    function openEditModal(){
        setModalEditIsOpen(true)
    }
    function closeEditModal(){
        setModalEditIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
    async function openDeleteModal(){
        setModalDeleteIsOpen(true)
    }
    function closeDeleteModal(){
        setModalDeleteIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
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

    const [skillName, setSkillName] = useState("")
    const [skillDescription, setSkillDescription] = useState("")        
    const skillBody = {
        name: skillName,
        description: skillDescription,
        userFromSkill: {id: 1}
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

    const [skillForEdit, setSkillForEdit] = useState("")
    async function getSkillById() {
        await axios
            .get("http://localhost:8080/skill/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setSkillForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [skillNameForEdit, setSkillNameForEdit] = useState("")
    const [skillDescriptionForEdit, setSkillDescriptionForEdit] = useState("")   
    let skillBodyForEdit = {
        name: skillNameForEdit,
        description: skillDescriptionForEdit,
        userFromSkill: {id: 1}
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
                <div className="modalEdit">
                    {/* USAR URL + ID NO MAP (FIND BY ID) */}

                    <div key={skillForEdit.id} className="content"> 
                        <button className="close"><i className ="fi fi-br-cross" onClick={() => closeEditModal()}></i></button>
                        <h1>Edite sua Skill !</h1>
                        
                        <input 
                        type="text" 
                        defaultValue={skillForEdit.name}
                        onChange={(e) => {setSkillNameForEdit(e.target.value)}}
                        id={"skillNameInput"}
                        />
                        <input 
                        type="text" 
                        defaultValue={skillForEdit.description}
                        onChange={(e) => {setSkillDescriptionForEdit(e.target.value)}}
                        id={"skillDesInput"}
                        />
                        <div className="buttons">
                            <button className="edit" onClick={() => {
                                if((skillNameForEdit === undefined || skillNameForEdit === "" || skillNameForEdit === null) && (skillDescriptionForEdit === undefined || skillDescriptionForEdit === "" || skillDescriptionForEdit === null)){
                                    skillBodyForEdit = {
                                        name: skillForEdit.name,
                                        description: skillForEdit.description,
                                        userFromSkill: {id: 1}
                                    }
                                } else if(skillNameForEdit === undefined || skillNameForEdit === "" || skillNameForEdit === null){
                                    skillBodyForEdit = {
                                        name: skillForEdit.name,
                                        description: skillDescriptionForEdit,
                                        userFromSkill: {id: 1}
                                    }
                                } else if(skillDescriptionForEdit === undefined || skillDescriptionForEdit === "" || skillDescriptionForEdit === null){
                                    skillBodyForEdit = {
                                        name: skillNameForEdit,
                                        description: skillForEdit.description,
                                        userFromSkill: {id: 1}
                                    }
                                } else {}

                                editSkill(skillBodyForEdit)
                            }}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}

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
                                    <button className="editSkill">
                                        <i className="fi fi-br-edit" onClick={() => {
                                                localStorage.setItem("idSelecionedForEdit", skill.id)
                                                getSkillById(skill.id)
                                                openEditModal()
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
                </article>
            )}
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           