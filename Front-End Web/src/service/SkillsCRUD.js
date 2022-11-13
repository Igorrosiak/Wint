import axios from "axios"
import { env } from "../data/env"

export function createSkill(skillBody){
    console.log("Adicionando Skill")

    console.log(skillBody);
    console.table(skillBody)

    axios
        .post(env.local.newSkill, skillBody)
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
        .put(env.local.editSkill, skillBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to edit skill")
        });
}

export function deleteSkill(){
    axios.delete(env.local.deleteSkill)
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}