const idForEdit = localStorage.getItem("idSelecionedForEdit");
const idForDelete = localStorage.getItem("idSelecionedForDelete");

export const env = {    
    
    local : {
        newSkill : "http://localhost:8080/skill/", 
        editSkill : "http://localhost:8080/skill/" + idForEdit,
        deleteSkill : "http://localhost:8080/skill/" + idForDelete
    }
}