    

<<<<<<< HEAD
// function animacao(){
//     torre.forEach((torre, torreid) => {
//         torre.forEach((barra, position)=> {

//             let d = document.querySelector('.d'+barra);
            
//             // position.forEach(position =>{
//             //     d.classList.remove(position)
//             // })

//             d.classList.remove(position);
//             d.classList.add('t'+(torreid+1));
//             d.classList.add('p'+(position+1));
//         });
//     });
// }


// function mover(datorre, paratorre){

//     let barra = torre[datorre].pop();
//     let d = document.querySelector('.d'+barra);

//     d.classList.add('p0');
//     torre[paratorre].push(barra);
//     setTimeout(animacao,1000);
// }
// animacao();

function resetInicialPositions(){
function inicialMenorBarra(){
    
    let barra = document.querySelector("#d1");

    barra.classList.add('p3');
    barra.classList.add('t1');
}
inicialMenorBarra();

function inicialMediaBarra(){
    
    let barra = document.querySelector("#d2");

    barra.classList.add('p2');
    barra.classList.add('t1');
}
inicialMediaBarra();

function inicialMaiorBarra(){
    
    let barra = document.querySelector("#d3");

    barra.classList.add('p1');
    barra.classList.add('t1');
}
inicialMaiorBarra();
console.log('funfei');
}
resetInicialPositions();

    
let torre = [[3,2,1],[],[]];
let positionY = ['p0','p1','p2','p3']
let positionX = ['t1','t2','t3'];


function movement(x, y){

    let barra = document.querySelector('#d1');

    barra.className = (positionX[x] + ' ' + positionY[y]);
}
movement(1, 3);
=======
let torre = [[3,2,1],[],[]];
let position = ['p0','p1','p2','p3','t1','t2','t3']
function initPos(){
    torre.forEach((torre, torreid) => {
        torre.forEach((barra, position)=> {
            let r = document.querySelector('.d'+barra)
            r.classList.remove('t'+(torreid))
            r.classList.remove('p'+(position))
            let d = document.querySelector('.d'+barra)
            d.classList.add('t'+(torreid+1));
            d.classList.add('p'+(position+1));
        })
    })
}
function mover(datorre, paratorre){

    if(!torre[datorre].length)return
    let barra = torre[datorre].pop();
    if (torre[datorre].length){
        if (torre[datorre][torre[paratorre].length-1]<barra){
            return
        }
    }
    let d = document.querySelector('.d'+barra)
    d.classList.add('p0');
    torre[paratorre].push(barra);
    setTimeout(initPos,2000);
}
initPos();
>>>>>>> 8b03435113d1c401172772e7542e47221b4aff7e
