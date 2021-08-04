let ids = ["first-tower", "second-tower", "third-tower"]; 
function addTowers() {
    
    for (let counter = 0; counter < ids.length; counter++){

    function adcElemento () {
        let divNova = document.createElement("div");
        divNova.setAttribute("id", ids[counter]);

        let conteudoNovo = document.createTextNode("");
        divNova.appendChild(conteudoNovo);
    
        let divAtual = document.getElementById("area-do-jogo");
        divAtual.appendChild(divNova);
        }
        adcElemento();
    }
}
addTowers();

let idsD = [" ", "first-disc", "second-disc", "third-disc"];
function addDiscs() {
    for (let counter = 1; counter < idsD.length; counter++){

    function adcElemento () {
        let divNova = document.createElement("div");
        divNova.setAttribute("id", idsD[counter]);
        divNova.setAttribute("class", counter);

        let conteudoNovo = document.createTextNode(counter);
        divNova.appendChild(conteudoNovo); 
    
        let divAtual = document.getElementById("first-tower");
        divAtual.appendChild(divNova);
        }
        adcElemento();
    }
}
addDiscs();


function interpretaEventoClick(){
    let areaClick = document.getElementById('principal');
    areaClick.addEventListener("click", function(evt){

        let current = evt.target.id;
        
        let idTorre = document.getElementById(current);
        let qtdFilhos = idTorre.childElementCount;
        
        let topoFilho = idTorre.lastElementChild;

        
        console.log(current);
        console.log(qtdFilhos);
        console.log(topoFilho);

        let torreRecebedora = document.getElementById("ESCOLHERTORRE");
        torreRecebedora.appendChild(topoFilho);


    });
}
interpretaEventoClick();
