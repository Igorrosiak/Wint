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
    const skillBody = {
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

    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
    function openDeleteModal(){
        setModalDeleteIsOpen(true)
    }
    function closeDeleteModal(){
        setModalDeleteIsOpen(false)
        localStorage.removeItem("idSelecionado")
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

    function deleteSkill(){
        const id = localStorage.getItem("idSelecionado")
        axios.delete("http://localhost:8080/skill/" + id)
            .then(res => {
                console.log("Delete successful")
                document.location.reload(true);
            })
            .catch(error => {
                console.log("Erro para deletar evento")
            });
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
                                    <button className="deleteSkill" >
                                        <i className="fi fi-br-cross" onClick={() => {
                                            openDeleteModal()
                                            localStorage.setItem("idSelecionado", skill.id)
                                        }}/>
                                    </button>
                                    <img src={handleId()} alt="icon-quadrado" />
                                    <h3>{skill.name}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            )
                        })
                    }
            
                    {modalDeleteIsOpen === true &&(
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