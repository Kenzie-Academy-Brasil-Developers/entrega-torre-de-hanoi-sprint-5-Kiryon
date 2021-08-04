let ids = ["first-tower", "second-tower", "third-tower"]; 
function addTowers() {
    
    for (let counter = 0; counter < ids.length; counter++){

    function adcElemento () {
        let divNova = document.createElement("div");
        divNova.setAttribute("id", ids[counter]);

        let conteudoNovo = document.createTextNode(".");
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




// function victoryCondition(){
//     let areaClick = document.getElementById('principal');
//     areaClick.addEventListener("click", function(evt){

//         let current = evt.target.id;
        
//         let idTorre = document.getElementById(current);
//         let qtdFilhos = idTorre.childElementCount;
        
//         console.log(current);
//         console.log(qtdFilhos);

//         let idTorre2 = document.getElementById('second-tower');
//         let qtdFilhosT2 = idTorre2.childElementCount;
//         let idTorre3 = document.getElementById('third-tower');
//         let qtdFilhosT3 = idTorre3.childElementCount;

//         if(qtdFilhosT2 === 3 || qtdFilhosT3 === 3){
//             alert("YOU WON!!!");
//         }
//     });
// }
// victoryCondition();



// function interpretaEventoClick(){
//     let areaClick = document.getElementById('principal');
//     areaClick.addEventListener("click", function(evt){

//         let current = evt.target.id;
        
//         let idTorre = document.getElementById(current);
//         let qtdFilhos = idTorre.childElementCount;
        
//         let topoFilho = idTorre.lastElementChild;

        
//         console.log(current);
//         console.log(qtdFilhos);
//         console.log(topoFilho);

//         let torreRecebedora = document.getElementById("second-tower");
//         torreRecebedora.appendChild(topoFilho);
//     });
// }
// interpretaEventoClick();


// let discoTopo;
// function pegarPrimeiroDisco(){
    
//     let areaClick = document.getElementById('principal');
//     areaClick.addEventListener("click", function(evt){
        
//         let idTorreAtual = evt.target.id;
//         let torreAtual = document.getElementById(idTorreAtual);

//         discoTopo = torreAtual.lastElementChild;
//         // console.log(discoTopo);
//     });
// }
// pegarPrimeiroDisco();


// function destinoDisco(){

//     let areaClick = document.getElementById('principal');
//     areaClick.addEventListener("click", function(event){

//         let idTorreDestino = event.target.id;
//         let torreDestino = document.getElementById(idTorreDestino);
//         let qtdFilhosDestino = torreDestino.childElementCount;

//         console.log(qtdFilhosDestino);
        
//         if (discoTopo !== undefined && qtdFilhosDestino == 0) {
//             torreDestino.appendChild(discoTopo);
//         }


//     });
// }
// destinoDisco();
