import '../assets/scss/profExp.scss'
import { createProfExp, editProfExp, deleteProfExp } from '../service/ProfExpCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const ProfExpComponent = _ => {

    const [modalAddProfExpIsOpen, setModalAddProfExpIsOpen] = useState(false)
    function openCloseModalOfProfExp(){
        if(modalAddProfExpIsOpen === false){    
            setModalAddProfExpIsOpen(true)
        } else{
            setModalAddProfExpIsOpen(false)
        } 
    }

    const [modalEditProfExpIsOpen, setModalEditProfExpIsOpen] = useState(false)
    function openEditModalOfProfExp(){
        setModalEditProfExpIsOpen(true)
    }
    function closeEditModalOfProfExp(){
        setModalEditProfExpIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeleteProfExpIsOpen, setModalDeleteProfExpIsOpen] = useState(false)
    async function openDeleteModalOfProfExp(){
        setModalDeleteProfExpIsOpen(true)
    }
    function closeDeleteModalOfProfExp(){
        setModalDeleteProfExpIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    const [profExpCompany, setProfExpCompany] = useState("")
    const [profExpRole, setProfExpRole] = useState("")
    const [profExpPlace, setProfExpPlace] = useState("")
    const [profExpData, setProfExpData] = useState("")
    const [profExpTag, setProfExpTag] = useState("")
    const [profExpDescription, setProfExpDescription] = useState("")
    const profExpBody = {
        company: profExpCompany,
        role: profExpRole,
        place: profExpPlace,
        data: profExpData,
        tag: profExpTag,
        description: profExpDescription,
        userExperiences: {id: 1}
    }

    const [profExps, setProfExps] = useState([])
    const getProfExps = async () => {
        await axios
            .get("http://localhost:8080/professional-experience/")
            .then(res => setProfExps(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getProfExps()
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
                        <h1>Tem certeza que deseja deletar essa experiência?</h1>
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