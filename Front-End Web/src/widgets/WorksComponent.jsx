import '../assets/scss/works.scss'
import left from '../assets/images/Left.png'
import right from '../assets/images/Right.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import { createPortfolio, editPortfolio, deletePortfolio } from '../service/PortfoliosCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const WorksComponent = _ => {

    const [modalAddPortfolioIsOpen, setModalAddPortfolioIsOpen] = useState(false)
    function openCloseModalOfPortfolios() {
        if (modalAddPortfolioIsOpen === false) {
            setModalAddPortfolioIsOpen(true)
        } else {
            setModalAddPortfolioIsOpen(false)
        }
    }

    const [modalEditPortfolioIsOpen, setModalEditPortfolioIsOpen] = useState(false)
    function openEditModalOfPortfolio() {
        setModalEditPortfolioIsOpen(true)
    }
    function closeEditModalOfPortfolio() {
        setModalEditPortfolioIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeletePortfolioIsOpen, setModalDeletePortfolioIsOpen] = useState(false)
    async function openDeleteModalOfPortfolio() {
        setModalDeletePortfolioIsOpen(true)
    }
    function closeDeleteModalOfPortfolio() {
        setModalDeletePortfolioIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    const [portfolioName, setPortfolioName] = useState("")
    const [portfolioDescription, setPortfolioDescription] = useState("")
    const portfolioBody = {
        name: portfolioName,
        description: portfolioDescription,
        userPortfolio: { id: 1 }
    }

    const [portfolios, setPortfolios] = useState([])
    const getPortfolios = async () => {
        await axios
            .get("http://localhost:8080/portfolio/")
            .then(res => setPortfolios(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getPortfolios()
        console.log(modalDeletePortfolioIsOpen);
    }, [modalDeletePortfolioIsOpen])

    const [portfolioForEdit, setPortfolioForEdit] = useState("")
    async function getPortfolioById() {
        await axios
            .get("http://localhost:8080/portfolio/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setPortfolioForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [portfolioNameForEdit, setPortfolioNameForEdit] = useState("")
    const [portfolioDescriptionForEdit, setPortfolioDescriptionForEdit] = useState("")
    let portfolioBodyForEdit = {
        name: portfolioNameForEdit,
        description: portfolioDescriptionForEdit,
        userPortfolio: { id: 1 }
    }

    return (
        <div className="main-works">

            {modalAddPortfolioIsOpen === true && (
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className="fi fi-br-cross" onClick={openCloseModalOfPortfolios}></i></button>
                        <h1 className="textModal">Adicione sua nova portfolio!</h1>

                        <input
                            value={portfolioName}
                            onChange={(e) => {
                                setPortfolioName(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Nome da sua especialidade" />
                        <input
                            value={portfolioDescription}
                            onChange={(e) => {
                                setPortfolioDescription(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Descrição da sua especialidade" />
                        <button className="submitNewPortfolio" onClick={() => createPortfolio(portfolioBody)}>Criar Portfolio</button>
                    </div>
                </div>
            )}

            {modalEditPortfolioIsOpen === true && (
                <div className="modalEdit">
                    {/* USAR URL + ID NO MAP (FIND BY ID) */}

                    <div key={portfolioForEdit.id} className="content">
                        <button className="close"><i className="fi fi-br-cross" onClick={() => closeEditModalOfPortfolio()}></i></button>
                        <h1>Edite sua Portfolio !</h1>

                        <input
                            type="text"
                            defaultValue={portfolioForEdit.name}
                            onChange={(e) => { setPortfolioNameForEdit(e.target.value) }}
                            id={"portfolioNameInput"}
                        />
                        <input
                            type="text"
                            defaultValue={portfolioForEdit.description}
                            onChange={(e) => { setPortfolioDescriptionForEdit(e.target.value) }}
                            id={"portfolioDesInput"}
                        />
                        <div className="buttons">
                            <button className="edit" onClick={() => {
                                if ((portfolioNameForEdit === undefined || portfolioNameForEdit === "" || portfolioNameForEdit === null) && (portfolioDescriptionForEdit === undefined || portfolioDescriptionForEdit === "" || portfolioDescriptionForEdit === null)) {
                                    portfolioBodyForEdit = {
                                        name: portfolioForEdit.name,
                                        description: portfolioForEdit.description,
                                        userPortfolio: { id: 1 }
                                    }
                                } else if (portfolioNameForEdit === undefined || portfolioNameForEdit === "" || portfolioNameForEdit === null) {
                                    portfolioBodyForEdit = {
                                        name: portfolioForEdit.name,
                                        description: portfolioDescriptionForEdit,
                                        userPortfolio: { id: 1 }
                                    }
                                } else if (portfolioDescriptionForEdit === undefined || portfolioDescriptionForEdit === "" || portfolioDescriptionForEdit === null) {
                                    portfolioBodyForEdit = {
                                        name: portfolioNameForEdit,
                                        description: portfolioForEdit.description,
                                        userPortfolio: { id: 1 }
                                    }
                                } else { }

                                editPortfolio(portfolioBodyForEdit)
                            }}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}

            {modalDeletePortfolioIsOpen === true && (
                <div className="modalDelete">
                    <div className="content">
                        <h1>Tem certeza que deseja deletar esse portfolio?</h1>
                        <div className="buttons">
                            <button onClick={() => closeDeleteModalOfPortfolio()}>Não</button>
                            <button onClick={() => deletePortfolio()}>Sim</button>
                        </div>
                    </div>
                </div>
            )}

            <h4>-WORKS</h4>

            <div className="header">
                    <h1>Portfólio</h1>
                    <button className="newPortfolio" onClick={openCloseModalOfPortfolios}><i className="fi fi-br-plus"></i></button>
                    {/* <img src={left} alt="left" className="back" />
                    <img src={right} alt="right" className="back" /> */}
            </div>

            {portfolios.length === 0 && (
                <h2 className="textMotivate">Adicione um novo portfolio</h2>
            )}

            {portfolios.length !== 0 && (
                <article className="image-box">
                    {portfolios.map(portfolio => {
                        return (
                            <div key={portfolio.id} className="box-img">

                                <button className="editPortfolio">
                                    <i className="fi fi-br-edit" onClick={() => {
                                        localStorage.setItem("idSelecionedForEdit", portfolio.id)
                                        getPortfolioById(portfolio.id)
                                        openEditModalOfPortfolio()
                                    }} />
                                </button>
                                <button className="deletePortfolio" >
                                    <i className="fi fi-br-cross" onClick={() => {
                                        localStorage.setItem("idSelecionedForDelete", portfolio.id)
                                        openDeleteModalOfPortfolio()
                                    }} />
                                </button>

                                <img src={image1} />
                                <h3>{portfolio.name}</h3>
                                <p>{portfolio.description}</p>
                            </div>
                        )
                    })
                    }

                </article>
            )}
        </div>
    )
}