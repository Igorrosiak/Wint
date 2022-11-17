import '../assets/scss/recommendation.scss'
import { createRecommendation, editRecommendation, deleteRecommendation } from '../service/RecommendationsCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const RecommendationComponent = _ => {

    const [modalAddRecommendationIsOpen, setModalAddRecommendationIsOpen] = useState(false)
    function openCloseModalOfRecommendation(){
        if(modalAddRecommendationIsOpen === false){    
            setModalAddRecommendationIsOpen(true)
        } else{
            setModalAddRecommendationIsOpen(false)
        } 
    }

    const [modalEditRecommendationIsOpen, setModalEditRecommendationIsOpen] = useState(false)
    function openEditModalOfRecommendation(){
        setModalEditRecommendationIsOpen(true)
    }
    function closeEditModalOfRecommendation(){
        setModalEditRecommendationIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeleteRecommendationIsOpen, setModalDeleteRecommendationIsOpen] = useState(false)
    async function openDeleteModalOfRecommendation(){
        setModalDeleteRecommendationIsOpen(true)
    }
    function closeDeleteModalOfRecommendation(){
        setModalDeleteRecommendationIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    const [recommendationDescription, setRecommendationDescription] = useState("")
    const recommendationBody = {
        description: recommendationDescription,
        userRecommended: {id: 1},
        userWhoRecommended: {id: 2}
    }

    const [recommendations, setRecommendations] = useState([])
    const getRecommendations = async () => {
        await axios
            .get("http://localhost:8080/recommendation/")
            .then(res => recommendations(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getRecommendations()
        console.log(modalDeleteProfExpIsOpen);
    }, [modalDeleteProfExpIsOpen])

    const [profExpForEdit, setProfExpForEdit] = useState("")
    async function getProfExpById() {
        await axios
            .get("http://localhost:8080/professional-experience/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setProfExpForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [profExpCompanyForEdit, setProfExpCompanyForEdit] = useState("")
    const [profExpRoleForEdit, setProfExpRoleForEdit] = useState("")
    const [profExpPlaceForEdit, setProfExpPlaceForEdit] = useState("")
    const [profExpDataForEdit, setProfExpDataForEdit] = useState("")
    const [profExpTagForEdit, setProfExpTagForEdit] = useState("")
    const [profExpDescriptionForEdit, setProfExpDescriptionForEdit] = useState("")  
    let profExpBodyForEdit = {
        company: profExpCompanyForEdit,
        role: profExpRoleForEdit,
        place: profExpPlaceForEdit,
        data: profExpDataForEdit,
        tag: profExpTagForEdit,
        description: profExpDescriptionForEdit,
        userExperiences: {id: 1}
    }

    return (
        <div className="main-profExp">

            { modalAddProfExpIsOpen === true &&(
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className ="fi fi-br-cross" onClick={openCloseModalOfProfExp}></i></button>
                        <h1 className="textModal">Adicione sua nova Experiência Profissional!</h1>

                        <input
                            value={profExpCompany}
                            onChange={(e) => {
                                setProfExpCompany(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Nome da Empresa"
                        />
                        <input
                            value={profExpRole}
                            onChange={(e) => {
                                setProfExpRole(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Seu Cargo ou Função"
                        />
                        <input
                            value={profExpPlace}
                            onChange={(e) => {
                                setProfExpPlace(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Local do seu Trabalho"
                        />
                        <input
                            value={profExpData}
                            onChange={(e) => {
                                setProfExpData(e.target.value)
                            }}
                            className="inputModal"
                            type="date"
                            placeholder="Periodo de trabalho"
                        />
                        <input
                            value={profExpTag}
                            onChange={(e) => {
                                setProfExpTag(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Suas tags (assunto)"
                        />
                        <input
                            value={profExpDescription}
                            onChange={(e) => {
                                setProfExpDescription(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Descrição do seu trabalho"
                        />
                        <button className="submitNewSkill" onClick={() => createProfExp(profExpBody)}>Inserir Experiência Profissional</button>
                    </div>
                </div>
            )}

            { modalEditProfExpIsOpen === true &&(
                <div className="modalEdit">
                    {/* ARRUMAR */}

                    {/* <div key={skillForEdit.id} className="content"> 
                        <button className="close"><i className ="fi fi-br-cross" onClick={() => closeEditModalOfProfExp()}></i></button>
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
                    </div> */}
                </div>
            )}

            { modalDeleteProfExpIsOpen === true &&(
                <div className="modalDelete">
                    <div className="content">
                        <h1>Tem certeza que deseja deletar essa skill?</h1>
                        <div className="buttons">
                            <button onClick={() => closeDeleteModalOfProfExp()}>Não</button>
                            <button onClick={() => deleteProfExp()}>Sim</button>
                        </div> 
                    </div>
                </div>
            )}

            <h4>- C U R R I C U L O</h4>

            <div className="header">
                <h1>Experiências Profissionais</h1>
                <button className="newSkill" onClick={openCloseModalOfProfExp}><i className="fi fi-br-plus"></i></button>
            </div>

            { profExps.length === 0 &&(
                <h2 className="textMotivate">Adicione uma experiência profissional!</h2>
            )}

            { profExps.length !== 0 &&(
                <article className="rowSkills">
                    {
                        profExps.map(profExp => {
                            return(
                                <div key={profExp.id} className="cardSkill">
                                    <button className="editSkill">
                                        <i className="fi fi-br-edit" onClick={() => {
                                                localStorage.setItem("idSelecionedForEdit", profExp.id)
                                                getProfExpById(profExp.id)
                                                openEditModalOfProfExp()
                                        }}/>
                                    </button>
                                    <button className="deleteSkill" >
                                        <i className="fi fi-br-cross" onClick={() => {
                                            localStorage.setItem("idSelecionedForDelete", profExp.id)
                                            openDeleteModalOfProfExp()
                                        }}/>
                                    </button>
                                    <h3>{profExp.company}</h3>
                                    <p>{profExp.role}</p>
                                    <p>{profExp.place}</p>
                                    <p>{profExp.data}</p>
                                    <p>{profExp.tag}</p>
                                    <p>{profExp.description}</p>
                                </div>
                            )
                        })
                    }
                </article>
            )}
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           