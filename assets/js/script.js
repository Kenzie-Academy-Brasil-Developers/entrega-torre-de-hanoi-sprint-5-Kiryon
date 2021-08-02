function addTowers() {
    let ids = ["first-tower", "second-tower", "third-tower"] 
   
    for (let counter = 0; counter < ids.length; counter++){

    function adcElemento () {

        let divNova = document.createElement("div");
        divNova.setAttribute("id", ids[counter]);

        let conteudoNovo = document.createTextNode("Olá!");


        divNova.appendChild(conteudoNovo); 
    
        let divAtual = document.getElementById("area-do-jogo");
        divAtual.appendChild(divNova);
        }
        adcElemento();
    }
    
}
addTowers();