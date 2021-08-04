let container = document.getElementById("container")

let start = document.createElement('div');
start.setAttribute('id', 'start');
start.setAttribute('class' , 'tower');
container.appendChild(start);
let barra1 = document.createElement('div');
barra1.setAttribute('id', 'barra1');
barra1.setAttribute('class', 'barras');
start.appendChild(barra1);

let offset = document.createElement('div');
offset.setAttribute('id', 'offset');
offset.setAttribute('class', 'tower');
container.appendChild(offset);
let barra2 = document.createElement('div');
barra2.setAttribute('id', 'barra2');
barra2.setAttribute('class', 'barras');
offset.appendChild(barra2);

let end = document.createElement('div');
end.setAttribute('id' , 'end');
end.setAttribute('class', 'tower');
container.appendChild(end);
let barra3 = document.createElement('div');
barra3.setAttribute('id', 'barra3');
barra3.setAttribute('class', 'barras');
end.appendChild(barra3);

for (let i = 3; i >= 0; i--) {
  let bloco = document.createElement("div");
  bloco.setAttribute('id', `bloco${i}`);
  bloco.setAttribute('class', 'bloco');
  bloco.style.width = `${(1+i)*50}px`;
  start.appendChild(bloco);
}

container.addEventListener("click", selected);
let firstClick;
let secondClick;

function validate() {
  if (secondClick.childElementCount === 1){
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
