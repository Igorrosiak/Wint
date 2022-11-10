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