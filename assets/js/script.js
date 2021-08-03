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