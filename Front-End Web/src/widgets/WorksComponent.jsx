import '../assets/scss/works.scss'
import left from '../assets/images/Left.png'
import right from '../assets/images/Right.png'
import qrcode from '../assets/images/qrcode.png'
import cyber from '../assets/images/image1.png'
import java from '../assets/images/image2.png'
import react from '../assets/images/image3.png'
import { createPortfolio, editPortfolio, deletePortfolio } from '../service/PortfoliosCRUD'
import { createPost, editPost, deletePost } from '../service/PostsCRUD'
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

    let imagemAtual = ""
    function handleId(){
        if(imagemAtual === "cyber"){
            imagemAtual = "java"
            return java
        } else if(imagemAtual === "java"){
            imagemAtual = "react"
            return react
        } else{
            imagemAtual = "cyber"
            return cyber
        }
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

    const [modalPortfolioIsOpen, setModalPortfolioIsOpen] = useState(false)
    function openCloseModalOfPortfolio() {
        if (modalPortfolioIsOpen === false) {
            setModalPortfolioIsOpen(true)
        } else {
            setModalPortfolioIsOpen(false)
        }
    }

    const [modalAddPostIsOpen, setModalAddPostIsOpen] = useState(false)
    function openCloseModalOfPosts() {
        if (modalAddPostIsOpen === false) {
            setModalAddPostIsOpen(true)
        } else {
            setModalAddPostIsOpen(false)
        }
    }

    const [modalEditPostIsOpen, setModalEditPostIsOpen] = useState(false)
    function openEditModalOfPost() {
        setModalEditPostIsOpen(true)
    }
    function closeEditModalOfPost() {
        setModalEditPostIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeletePostIsOpen, setModalDeletePostIsOpen] = useState(false)
    async function openDeleteModalOfPost() {
        setModalDeletePostIsOpen(true)
    }
    function closeDeleteModalOfPost() {
        setModalDeletePostIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    const [postContent, setPostContent] = useState("")
    const postBody = {
        contentPost: postContent,
        portfolioFromPost: { id: localStorage.getItem("idSelecionedForView") }
    }

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        await axios
            .get("http://localhost:8080/post/")
            .then(res => setPosts(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getPosts()
        console.log(modalDeletePostIsOpen);
    }, [modalDeletePostIsOpen])

    const [postForEdit, setPostForEdit] = useState("")
    async function getPostById() {
        await axios
            .get("http://localhost:8080/post/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setPostForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [postContentForEdit, setPostContentForEdit] = useState("")
    let postBodyForEdit = {
        contentPost: postContentForEdit,
        portfolioFromPost: { id: 1 }
    }

    return (
        <div className="main-works">

            {modalPortfolioIsOpen === true && (
                <div className="modalPosts">
                    <div className="content">
                        {modalAddPostIsOpen === true && (
                            <div className="modal" >
                                <div className="content">
                                    <button className="closeModal"><i className="fi fi-br-cross" onClick={openCloseModalOfPosts}></i></button>
                                    <h1 className="textModal">Adicione um novo post!</h1>

                                    <input
                                        value={postContent}
                                        onChange={(e) => {
                                            setPostContent(e.target.value)
                                        }}
                                        className="inputModal"
                                        type="text"
                                        placeholder="Descrição do seu post" />
                                    <button className="submitNewPost" onClick={() => createPost(postBody)}>Criar Post</button>
                                </div>
                            </div>
                        )}

                        {modalEditPostIsOpen === true && (
                            <div className="modalEdit">
                                {/* USAR URL + ID NO MAP (FIND BY ID) */}

                                <div key={postForEdit.id} className="content">
                                    <button className="close"><i className="fi fi-br-cross" onClick={() => closeEditModalOfPost()}></i></button>
                                    <h1>Edite sua Post !</h1>

                                    <input
                                        type="text"
                                        defaultValue={postForEdit.contentPost}
                                        onChange={(e) => { setPostContentForEdit(e.target.value) }}
                                        id={"postNameInput"}
                                    />

                                    <div className="buttons">
                                        <button className="edit" onClick={() => {
                                            if (postContentForEdit === undefined || postContentForEdit === "" || postContentForEdit === null) {
                                                postBodyForEdit = {
                                                    contentPost: postContentForEdit,
                                                    portfolioFromPost: { id: 1 }
                                                }
                                            } else {
                                                postBodyForEdit = {
                                                    contentPost: postContentForEdit,
                                                    portfolioFromPost: { id: 1 }
                                                }
                                            }
                                            editPost(postBodyForEdit)
                                        }}>Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {modalDeletePostIsOpen === true && (
                            <div className="modalDelete">
                                <div className="content">
                                    <h1>Tem certeza que deseja deletar esse Post?</h1>
                                    <div className="buttons">
                                        <button onClick={() => closeDeleteModalOfPost()}>Não</button>
                                        <button onClick={() => deletePost()}>Sim</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="header">
                            <h1>Posts</h1>
                            <button className="closePortfolio" onClick={openCloseModalOfPortfolio}><i className="fi fi-br-cross"></i></button>
                            <button className="newPost" onClick={openCloseModalOfPosts}><i className="fi fi-br-plus"></i></button>
                            {/*<img src={left} alt="left" className="back" />
                            <img src={right} alt="right" className="back" /> */}
                        </div>

                        {posts.length === 0 && (
                            <h2 className="textMotivate">Adicione posts ao seu portfolio</h2>
                        )}

                        {posts.length !== 0 && (
                            <article className="rowPosts">
                                {posts.map(post => {
                                    return(
                                        <div key={post.id} className="cardPost">
                                            <button className="editPost">
                                                <i className="fi fi-br-edit" onClick={() => {
                                                    localStorage.setItem("idSelecionedForEdit", post.id)
                                                    getPostById(post.id)
                                                    openEditModalOfPost()
                                                }} />
                                            </button>
                                            <button className="deletePost" >
                                                <i className="fi fi-br-cross" onClick={() => {
                                                    localStorage.setItem("idSelecionedForDelete", post.id)
                                                    openDeleteModalOfPost()
                                                }} />
                                            </button>
                                            <img src={qrcode} alt="" />
                                            <h3>{post.contentPost}</h3>
                                        </div>
                                    )    
                                })}
                            </article>
                        )}
                    </div>
                </div>
            )}

            {/* <div className="content">
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
            </div> */}

            {modalAddPortfolioIsOpen === true && (
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className="fi fi-br-cross" onClick={openCloseModalOfPortfolios}></i></button>
                        <h1 className="textModal">Adicione um novo portfolio!</h1>

                        <input
                            value={portfolioName}
                            onChange={(e) => {
                                setPortfolioName(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Nome do seu Portfólio" />
                        <input
                            value={portfolioDescription}
                            onChange={(e) => {
                                setPortfolioDescription(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Descrição do seu Portfólio" />
                        <button className="submitNewPortfolio" onClick={() => createPortfolio(portfolioBody)}>Criar Portfolio</button>
                    </div>
                </div>
            )}

            {modalEditPortfolioIsOpen === true && (
                <div className="modalEdit">
                    {/* USAR URL + ID NO MAP (FIND BY ID) */}

                    <div key={portfolioForEdit.id} className="content">
                        <button className="close"><i className="fi fi-br-cross" onClick={() => closeEditModalOfPortfolio()}></i></button>
                        <h1>Edite seu Portfolio !</h1>

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
                <h1>Portfólios</h1>
                <button className="newPortfolio" onClick={openCloseModalOfPortfolios}><i className="fi fi-br-plus"></i></button>
                {/* <img src={left} alt="left" className="back" />
                    <img src={right} alt="right" className="back" /> */}
            </div>

            {portfolios.length === 0 && (
                <h2 className="textMotivate">Adicione um novo portfolio</h2>
            )}

            {portfolios.length !== 0 && (
                <article className="rowPortfolios">
                    {portfolios.map(portfolio => {
                        return (
                            <div key={portfolio.id} className="cardPortfolio">
                                <button className="viewPortfolio">
                                    <i class="fi fi-br-search" onClick={() => {
                                        localStorage.setItem("idSelecionedForView", portfolio.id)
                                        getPortfolioById(portfolio.id)
                                        openCloseModalOfPortfolio()
                                    }} />
                                </button>
                                <button className="deletePortfolio" >
                                    <i className="fi fi-br-cross" onClick={() => {
                                        localStorage.setItem("idSelecionedForDelete", portfolio.id)
                                        openDeleteModalOfPortfolio()
                                    }} />
                                </button>
                                <button className="editPortfolio">
                                    <i className="fi fi-br-edit" onClick={() => {
                                        localStorage.setItem("idSelecionedForEdit", portfolio.id)
                                        getPortfolioById(portfolio.id)
                                        openEditModalOfPortfolio()
                                    }} />
                                </button>

                                <img src={handleId()} />

                                <div className="cardLegend">
                                    <h3>{portfolio.name}</h3>
                                    <p>{portfolio.description}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </article>
            )}
        </div>
    )
}