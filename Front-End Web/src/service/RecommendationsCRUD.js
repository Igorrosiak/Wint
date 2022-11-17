import axios from "axios"

export function createRecommendation(recommendationBody){
    console.log("Adicionando Skill")

    console.log(recommendationBody);
    console.table(recommendationBody)

    axios
        .post("http://localhost:8080/recommendation/", recommendationBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((error) => {
            console.log("[!] Error trying to create skill")
        });
}

export function editRecommendation(recommendationBodyForEdit){
    console.log("Editando Skill")

    console.log(recommendationBodyForEdit);
    console.table(recommendationBodyForEdit)

    axios
        .put("http://localhost:8080/recommendation/" + localStorage.getItem("idSelecionedForEdit"), recommendationBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((error) => {
            console.log("[!] Error trying to edit skill")
        });
}

export function deleteRecommendation(){
    axios
        .delete("http://localhost:8080/recommendation/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}