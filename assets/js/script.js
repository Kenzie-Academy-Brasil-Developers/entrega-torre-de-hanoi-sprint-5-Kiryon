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





















// function extrairClasse(elementId){
//     let classe = document.getElementById(elementId)
//     return classe.innerText;
// }


// function extrair(id){
//     let content = document.getElementById(id);
//     let nums = content.innerText

//     for (let counter = 0; counter<nums.length; counter++){
//         if (Number(nums[counter]) <= 3){
//             return (Number(nums[counter]));
//         }
//     }
// }

// function vaiQueDa(currentMoveDisc, towerToMove){

//     function validation(currentMoveDisc, towerToMove){
//         if(extrair(towerToMove) == undefined || extrair(towerToMove) > currentMoveDisc){
//             function adcElemento(){
//                 let btn = document.createElement('button');
//                 btn.setAttribute("id", 'btn_firstTo_second');
//                 let labl = document.createTextNode(">");        
//                 btn.appendChild(labl); 
            
//                 let divAtual = document.getElementById("area-do-jogo");
//                 divAtual.appendChild(btn);
//             }
//             adcElemento();   
//         }
//     }
//     validation(currentMoveDisc, towerToMove);

//     function mover(currentMoveDisc, towerToMove){
//         let btn = document.getElementById("btn_firstTo_second");
//         btn.addEventListener('click', function(){

//             let elemento = document.getElementById(currentMoveDisc);
//             let area = document.getElementById(towerToMove);

//             area.appendChild(elemento);
//         });
//     }
//     mover(currentMoveDisc, towerToMove);
    
// }



// function createButton(){

//      let btn = document.createElement('BUTTON');
//      let lbl = document.createTextNode("CLICK ME");        
//      btn.appendChild(lbl);

//      document.body.appendChild(btn);    
// }
// createButton();


// function adcElemento(){
//     let btn = document.createElement('button');
//     let labl = document.createTextNode("boitão");        
//     btn.appendChild(labl); 

//     let divAtual = document.getElementById("area-do-jogo");
//     divAtual.appendChild(btn);
// }
// adcElemento();




// let discReplace = document.querySelectorAll(".bolacha");

// let dragStart = function(event){
//     // console.log("dragstart")
// }


// let dragEnd = function(event){
//     console.log("dragend");

//     discReplace.appendChild(document.getElementById(event.target.id));


//     // let novaAlocação = document.getElementById(event.target.id);
//     // discReplace.appendChild(novaAlocação);
    


// }


// document.addEventListener("dragstart", dragStart);
// document.addEventListener("dragend", dragEnd);








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
