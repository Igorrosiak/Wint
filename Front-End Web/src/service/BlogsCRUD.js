import axios from "axios"

export function createBlog(blogBody){
    console.log("Adicionando Blog")

    console.log(blogBody);
    console.table(blogBody)

    axios
        .post("http://localhost:8080/blog/", blogBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to create blog")
        });
}

export function editBlog(blogBodyForEdit){
    console.log("Editando blog")

    console.log(blogBodyForEdit);
    console.table(blogBodyForEdit)

    axios
        .put("http://localhost:8080/blog/" + localStorage.getItem("idSelecionedForEdit"), blogBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to edit blog")
        });
}

export function deleteBlog(){
    axios.delete("http://localhost:8080/blog/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}