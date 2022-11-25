import axios from "axios"

export function createPost(postBody){
    console.log("Adicionando Post")

    console.log(postBody);
    console.table(postBody)

    axios
        .post("http://localhost:8080/post/", postBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to create post")
        });
}

export function editPost(postBodyForEdit){
    console.log("Editando Post")

    console.log(postBodyForEdit);
    console.table(postBodyForEdit)

    axios
        .put("http://localhost:8080/post/" + localStorage.getItem("idSelecionedForEdit"), postBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to edit post")
        });
}

export function deletePost(){
    axios.delete("http://localhost:8080/post/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}