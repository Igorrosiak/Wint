import axios from "axios"

export function createPortfolio(portfolioBody){
    console.log("Adicionando Portfolio")

    console.log(portfolioBody);
    console.table(portfolioBody)

    axios
        .post("http://localhost:8080/portfolio/", portfolioBody)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to create portfolio")
        });
}

export function editPortfolio(portfolioBodyForEdit){
    console.log("Editando Portfolio")

    console.log(portfolioBodyForEdit);
    console.table(portfolioBodyForEdit)

    axios
        .put("http://localhost:8080/portfolio/" + localStorage.getItem("idSelecionedForEdit"), portfolioBodyForEdit)
        .then((res) =>{
            console.log("[*] Success!", res.data)
            document.location.reload(true);
        })
        .catch((res) => {
            console.log("[!] Error trying to edit portfolio")
        });
}

export function deletePortfolio(){
    axios.delete("http://localhost:8080/portfolio/" + localStorage.getItem("idSelecionedForDelete"))
        .then(res => {
            console.log("Delete successful")
            document.location.reload(true);
        })
        .catch(error => {
            console.log("Erro para deletar evento")
        });
}