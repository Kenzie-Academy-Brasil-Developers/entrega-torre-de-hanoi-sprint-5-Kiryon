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

function addDiscs() {
    let ids = ["first-disc", "second-disc", "third-disc"] 
    for (let counter = 0; counter < ids.length; counter++){

    function adcElemento () {
        let divNova = document.createElement("div");
        divNova.setAttribute("id", ids[counter]);
        divNova.setAttribute("draggable", true);
        divNova.setAttribute("class", "bolacha");

        let conteudoNovo = document.createTextNode("bolacha!");
        divNova.appendChild(conteudoNovo); 
    
        let divAtual = document.getElementById("area-do-jogo");
        divAtual.appendChild(divNova);
        }
        adcElemento();
    }
}
addDiscs();



let discReplace = document.querySelectorAll(".bolacha");

let dragStart = function(event){
    // console.log("dragstart")
}


let dragEnd = function(event){
    console.log("dragend");

    discReplace.appendChild(document.getElementById(event.target.id));


    // let novaAlocação = document.getElementById(event.target.id);
    // discReplace.appendChild(novaAlocação);
    


}


document.addEventListener("dragstart", dragStart);
document.addEventListener("dragend", dragEnd);








// function addDisc(){

//     let ids = ["first-disc", "first-disc", "first-disc"];
//     for (let counter = 0; counter < ids.length; ids++){

//         function adcDiscos() {
//             let divNova = document.createElement("div");
//             divNova.setAttribute("id", ids[counter]);

//             let conteudoNovo = document.createTextNode("bolacha");
//             divNova.appendChild(conteudoNovo);

//             let divAtual = document.getElementById("area-do-jogo");
//             divAtual.appendChild(divNova);
//         }
//         adcDiscos();
//     }
// }
// addDisc();
