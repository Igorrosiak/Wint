import { variables } from "../global/variables"
import axios from "axios"
import { env } from "../data/env"

export function createSkill(){
    console.log("Adicionando Skill")

    console.table(variables.skillBody)

    axios
        .post(env.local.newSkill, variables.skillBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
        })
        .catch((res) => {
            console.log("[!] Error trying to create skill")
        });
}