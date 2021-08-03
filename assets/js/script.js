
let torre = [[3,2,1],[],[]];
let position = ['p0','p1','p2','p3','t1','t2','t3']
function animacao(){
    torre.forEach((torre, torreid) => {
        torre.forEach((barra, position)=> {
            let d = document.querySelector('.d'+barra)
            // position.forEach(position =>{
            //     d.classList.remove(position)
            // })
            d.classList.remove(position);
            d.classList.add('t'+(torreid+1));
            d.classList.add('p'+(position+1));
        })
    })
}
function mover(datorre, paratorre){
    let barra = torre[datorre].pop();
    let d = document.querySelector('.d'+barra)
    d.classList.add('p0');
    torre[paratorre].push(barra);
    setTimeout(animacao,2000);
}
animacao();