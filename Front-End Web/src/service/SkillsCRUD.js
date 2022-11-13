import axios from "axios"

export function createSkill(skillBody){
    console.log("Adicionando Skill")

    console.log(skillBody);
    console.table(skillBody)

    axios
        .post("http://localhost:8080/skill/", skillBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to create skill")
        });
}

export function editSkill(skillBodyForEdit){
    console.log("Editando Skill")

    console.log(skillBodyForEdit);
    console.table(skillBodyForEdit)

    axios
        .put("http://localhost:8080/skill/" + localStorage.getItem("idSelecionedForEdit"), skillBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to edit skill")
        });
}

export function deleteSkill(){
    axios.delete("http://localhost:8080/skill/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}