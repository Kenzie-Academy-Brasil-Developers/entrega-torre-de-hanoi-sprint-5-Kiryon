let container = document.getElementById("container")

// CRIAR START TOWER
let start = document.createElement('div');
let startBloco4 = document.createElement('div');
startBloco4.setAttribute('id', 'bloco4');
start.setAttribute('id', 'start');
start.setAttribute('class' , 'tower');
container.appendChild(start);
let barra1 = document.createElement('div');
barra1.setAttribute('id', 'barra1');
barra1.setAttribute('class', 'barras');
start.appendChild(barra1);
start.appendChild(startBloco4);
// CRIAR START TOWER


// CRIAR OFFSET TOWER
let offset = document.createElement('div');
let startBloco5 = document.createElement('div');
startBloco5.setAttribute('id', 'bloco5');
offset.setAttribute('id', 'offset');
offset.setAttribute('class', 'tower');
container.appendChild(offset);
let barra2 = document.createElement('div');
barra2.setAttribute('id', 'barra2');
barra2.setAttribute('class', 'barras');
offset.appendChild(barra2);
offset.appendChild(startBloco5);
// CRIAR OFFSET TOWER


// CRIAR END TOWER
let end = document.createElement('div');
let startBloco6 = document.createElement('div');
startBloco6.setAttribute('id', 'bloco6');
end.setAttribute('id' , 'end');
end.setAttribute('class', 'tower');
container.appendChild(end);
let barra3 = document.createElement('div');
barra3.setAttribute('id', 'barra3');
barra3.setAttribute('class', 'barras');
end.appendChild(barra3);
end.appendChild(startBloco6);
// CRIAR END TOWER



for (let i = 3; i >= 0; i--) {
  let bloco = document.createElement("div");
  bloco.setAttribute('id', `bloco${i}`);
  bloco.setAttribute('class', 'bloco');
//   bloco.style.width = `${(1+i)*25}px`;
  start.appendChild(bloco);
}


container.addEventListener("click", selected);

let firstClick;
let secondClick;

function validate() {
  if (secondClick.childElementCount === 1 || secondClick.childElementCount === 0){
    secondClick.appendChild(firstClick.lastChild);
  }
  if (secondClick.lastChild.id > firstClick.lastChild.id) {
    secondClick.appendChild(firstClick.lastChild);
  } 
}

function selected(event) {
  if (firstClick == undefined){
    firstClick = event.target.closest("div .tower")
  } else {
    secondClick = event.target.closest("div .tower")
    
    validate()
    firstClick = undefined
    secondClick = undefined
  }
}

function victoryCondition(){

    let areaClick = document.getElementById('container');
    areaClick.addEventListener("click", function(evt){

        let current = evt.target.id;
        let idTorre = document.getElementById(current);
        let qtdFilhos = idTorre.childElementCount;
        
        console.log(current);
        console.log(qtdFilhos);

        let idTorre2 = document.getElementById('offset');
        let qtdFilhosT2 = idTorre2.childElementCount;
        let idTorre3 = document.getElementById('end');
        let qtdFilhosT3 = idTorre3.childElementCount;

        if(qtdFilhosT2 === 6 || qtdFilhosT3 === 6){
            alert("YOU WON!!!");
        }
    });
}
victoryCondition();
