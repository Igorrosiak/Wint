import axios from "axios"

export function createProfExp(profExpBody){
    console.log("Adicionando Skill")

    console.log(profExpBody);
    console.table(profExpBody)

    axios
        .post("http://localhost:8080/professional-experience/", profExpBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((error) => {
            console.log("[!] Error trying to create skill")
        });
}

export function editProfExp(profExpBodyForEdit){
    console.log("Editando Skill")

    console.log(profExpBodyForEdit);
    console.table(profExpBodyForEdit)

    axios
        .put("http://localhost:8080/professional-experience/" + localStorage.getItem("idSelecionedForEdit"), profExpBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((error) => {
            console.log("[!] Error trying to edit skill")
        });
}

export function deleteProfExp(){
    axios
        .delete("http://localhost:8080/professional-experience/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}