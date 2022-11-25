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
            .then(res => setRecommendations(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getRecommendations()
        console.log(modalDeleteRecommendationIsOpen);
    }, [modalDeleteRecommendationIsOpen])

    const [recommendationForEdit, setRecommendationForEdit] = useState("")
    async function getRecommendationById() {
        await axios
            .get("http://localhost:8080/recommendation/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setRecommendationForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [recommendationDescriptionForEdit, setRecommendationDescriptionForEdit] = useState("")
    let recommendationBodyForEdit = {
        description: recommendationDescriptionForEdit,
        userRecommended: {id: 1},
        userWhoRecommended: {id: 2}
    }

    return (
        <div className="main-recommendation">

            { modalAddRecommendationIsOpen === true &&(
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className ="fi fi-br-cross" onClick={openCloseModalOfRecommendation}></i></button>
                        <h1 className="textModal">Adicione uma recomendação!</h1>

                        <input
                            value={recommendationDescription}
                            onChange={(e) => {
                                setRecommendationDescription(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Sua avaliaçao do usuario"
                        />
                        <button className="submitNewSkill" onClick={() => createRecommendation(recommendationBody)}>Inserir Recomendação</button>
                    </div>
                </div>
            )}

            { modalEditRecommendationIsOpen === true &&(
                <div className="modalEdit">
                    {/* ARRUMAR */}

                    <div key={recommendationForEdit.id} className="content"> 
                        <button className="close"><i className ="fi fi-br-cross" onClick={() => closeEditModalOfRecommendation()}></i></button>
                        <h1>Edite sua Recomendação !</h1>
                        
                        <input 
                        type="text" 
                        defaultValue={recommendationForEdit.description}
                        onChange={(e) => {setRecommendationDescriptionForEdit(e.target.value)}}
                        id={"recommendationDescriptionInput"}
                        />
                        <div className="buttons">
                            <button className="edit" onClick={() => {
                                if(recommendationDescriptionForEdit === undefined || recommendationDescriptionForEdit === "" || recommendationDescriptionForEdit === null){
                                    recommendationBodyForEdit = {
                                        description: recommendationForEdit.description,
                                        userRecommended: {id: 1},
                                        userWhoRecommended: {id: 2}
                                    }
                                } else {
                                    recommendationBodyForEdit = {
                                        description: recommendationDescriptionForEdit,
                                        userRecommended: {id: 1},
                                        userWhoRecommended: {id: 2}
                                    }
                                }
                                editRecommendation(recommendationBodyForEdit)
                            }}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}

            { modalDeleteRecommendationIsOpen === true &&(
                <div className="modalDelete">
                    <div className="content">
                        <h1>Tem certeza que deseja deletar essa recomendação?</h1>
                        <div className="buttons">
                            <button onClick={() => closeDeleteModalOfRecommendation()}>Não</button>
                            <button onClick={() => deleteRecommendation()}>Sim</button>
                        </div> 
                    </div>
                </div>
            )}

            <div className="header">
                <h4>- R E C O M E N D A Ç Õ E S</h4>
                <div className="title">
                    <h1>Testemunhas</h1>
                    <button className="newSkill" onClick={openCloseModalOfRecommendation}><i className="fi fi-br-plus"></i></button>
                </div>
            </div>

            { recommendations.length === 0 &&(
                <h2 className="textMotivate">Adicione uma Recomendação!</h2>
            )}

            { recommendations.length !== 0 &&(
                <article className="rowSkills">
                    {
                        recommendations.map(recommendation => {
                            console.log(recommendation)
                            console.log(recommendation.userRecommended)
                            return(
                                <div key={recommendation.id} className="cardSkill">
                                    <button className="editSkill">
                                        <i className="fi fi-br-edit" onClick={() => {
                                                localStorage.setItem("idSelecionedForEdit", recommendation.id)
                                                getRecommendationById(recommendation.id)
                                                openEditModalOfRecommendation()
                                        }}/>
                                    </button>
                                    <button className="deleteSkill" >
                                        <i className="fi fi-br-cross" onClick={() => {
                                            localStorage.setItem("idSelecionedForDelete", recommendation.id)
                                            openDeleteModalOfRecommendation()
                                        }}/>
                                    </button>
                                    <h3>{recommendation.description}</h3>
                                    <h3>{recommendation.userRecommended}</h3>
                                    <h3>{recommendation.userWhoRecommended}</h3>
                                </div>
                            )
                        })
                    }
                </article>
            )}
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           