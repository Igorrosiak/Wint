import '../assets/scss/blog.scss'
import notebook from '../assets/images/img-left.png'
import accordion from '../assets/images/img-right.png'
import notion from '../assets/images/center.png'
import { createBlog, editBlog, deleteBlog } from '../service/BlogsCRUD'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const BlogComponent = _ => {

    const [modalAddBlogIsOpen, setModalAddBlogIsOpen] = useState(false)
    function openCloseModalOfBlogs(){
        if(modalAddBlogIsOpen === false){    
            setModalAddBlogIsOpen(true)
        } else{
            setModalAddBlogIsOpen(false)
        } 
    }

    const [modalEditBlogIsOpen, setModalEditBlogIsOpen] = useState(false)
    function openEditModalOfBlog(){
        setModalEditBlogIsOpen(true)
    }
    function closeEditModalOfBlog(){
        setModalEditBlogIsOpen(false)
        localStorage.removeItem("idSelecionedForEdit")
    }

    const [modalDeleteBlogIsOpen, setModalDeleteBlogIsOpen] = useState(false)
    async function openDeleteModalOfBlog(){
        setModalDeleteBlogIsOpen(true)
    }
    function closeDeleteModalOfBlog(){
        setModalDeleteBlogIsOpen(false)
        localStorage.removeItem("idSelecionedForDelete")
    }

    let imagemAtual = ""
    function handleId(){
        if(imagemAtual === "notebook"){
            imagemAtual = "notion"
            return notion
        } else if(imagemAtual === "notion"){
            imagemAtual = "accordion"
            return accordion
        } else{
            imagemAtual = "notebook"
            return notebook
        }
    }

    const [blogName, setBlogName] = useState("")
    const [blogContent, setBlogContent] = useState("") 
    const blogBody = {
        name: blogName,
        content: blogContent,
        userFromBlog: {id: 1}
    }

    const [blogs, setBlogs] = useState([])
    const getBlogs = async () => {
        await axios
            .get("http://localhost:8080/blog/")
            .then(res => setBlogs(res.data))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getBlogs()
        console.log(modalDeleteBlogIsOpen);
    }, [modalDeleteBlogIsOpen])

    const [blogForEdit, setBlogForEdit] = useState("")
    async function getBlogById() {
        await axios
            .get("http://localhost:8080/blog/" + localStorage.getItem("idSelecionedForEdit"))
            .then(res => setBlogForEdit(res.data))
            .catch(e => console.log(e))
    }

    const [blogNameForEdit, setBlogNameForEdit] = useState("")
    const [blogContentForEdit, setBlogContentForEdit] = useState("")   
    let blogBodyForEdit = {
        name: blogNameForEdit,
        content: blogContentForEdit,
        userFromBlog: {id: 1}
    }

    return (
        <article className="main-blog">

            { modalAddBlogIsOpen === true &&(
                <div className="modal" >
                    <div className="content">
                        <button className="closeModal"><i className ="fi fi-br-cross" onClick={openCloseModalOfBlogs}></i></button>
                        <h1 className="textModal">Adicione um novo blog!</h1>

                        <input
                            value={blogName}
                            onChange={(e) => {
                                setBlogName(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Titulo do seu blog"/>
                        <input
                            value={blogContent}
                            onChange={(e) => {
                                setBlogContent(e.target.value)
                            }}
                            className="inputModal"
                            type="text"
                            placeholder="Conteúdo do seu blog"/>
                        <button className="submitNewBlog" onClick={() => createBlog(blogBody)}>Criar Blog</button>
                    </div>
                </div>
            )}

            { modalEditBlogIsOpen === true &&(
                <div className="modalEdit">
                    {/* USAR URL + ID NO MAP (FIND BY ID) */}

                    <div key={blogForEdit.id} className="content"> 
                        <button className="close"><i className ="fi fi-br-cross" onClick={() => closeEditModalOfBlog()}></i></button>
                        <h1>Edite seu Blog !</h1>
                        
                        <input 
                        type="text" 
                        defaultValue={blogForEdit.name}
                        onChange={(e) => {setBlogNameForEdit(e.target.value)}}
                        />
                        <input 
                        type="text" 
                        defaultValue={blogForEdit.content}
                        onChange={(e) => {setBlogContentForEdit(e.target.value)}}
                        />
                        <div className="buttons">
                            <button className="edit" onClick={() => {
                                if((blogNameForEdit === undefined || blogNameForEdit === "" || blogNameForEdit === null) && (blogContentForEdit === undefined || blogContentForEdit === "" || blogContentForEdit === null)){
                                    blogBodyForEdit = {
                                        name: blogForEdit.name,
                                        content: blogForEdit.content,
                                        userFromBlog: {id: 1}
                                    }
                                } else if(blogNameForEdit === undefined || blogNameForEdit === "" || blogNameForEdit === null){
                                    blogBodyForEdit = {
                                        name: blogForEdit.name,
                                        content: blogContentForEdit,
                                        userFromBlog: {id: 1}
                                    }
                                } else if(blogContentForEdit === undefined || blogContentForEdit === "" || blogContentForEdit === null){
                                    blogBodyForEdit = {
                                        name: blogNameForEdit,
                                        content: blogForEdit.content,
                                        userFromBlog: {id: 1}
                                    }
                                } else {}

                                editBlog(blogBodyForEdit)
                            }}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}

            { modalDeleteBlogIsOpen === true &&(
                <div className="modalDelete">
                    <div className="content">
                        <h1>Tem certeza que deseja deletar esse Blog?</h1>
                        <div className="buttons">
                            <button onClick={() => closeDeleteModalOfBlog()}>Não</button>
                            <button onClick={() => deleteBlog()}>Sim</button>
                        </div> 
                    </div>
                </div>
            )}

            <div className="header">
                <h1>Blog Pessoal</h1>
                <button className="newBlog" onClick={openCloseModalOfBlogs}><i className="fi fi-br-plus"></i></button>
            </div>

            { blogs.length === 0 &&(
                <h2 className="textMotivate">Adicione um novo Blog!</h2>
            )}

            { blogs.length !== 0 &&(
                <article className="images-box">
                    {
                        blogs.map(blog => {
                            return(
                                <div key={blog.id} className="box">
                                    <button className="editBlog">
                                        <i className="fi fi-br-edit" onClick={() => {
                                                localStorage.setItem("idSelecionedForEdit", blog.id)
                                                getBlogById(blog.id)
                                                openEditModalOfBlog()
                                        }}/>
                                    </button>
                                    <button className="deleteBlog" >
                                        <i className="fi fi-br-cross" onClick={() => {
                                            localStorage.setItem("idSelecionedForDelete", blog.id)
                                            openDeleteModalOfBlog()
                                        }}/>
                                    </button>
                                    
                                    <img src={handleId()} alt="left" />
                                    <p className="desc">{blog.name}</p>
                                    <br />
                                    <p className="date">Dez 15, 2021</p>
                                    <br />
                                    <p className='txt'>{blog.content}</p>
                                    <br />
                                    <p className='p'>Continuar lendo</p>
                                </div>
                            )
                        })
                    }
                </article>
            )}
        </article>
    )
}