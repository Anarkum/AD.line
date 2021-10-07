let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-cabecalho')
let logoanim = document.querySelector('.logo')
let laranja1 = document.querySelector('.laranjadir')
let laranja2 = document.querySelector('.laranjaesq')
let branco1 = document.querySelector('.direita')
let branco2 = document.querySelector('.esquerda')
let index = document.querySelector('.entranessaporra')
let containter = document.querySelector('.container')


window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{logoanim.classList.add('ativo')},200);

    setTimeout(()=>{laranja1.classList.add('ativo');
                    laranja2.classList.add('ativo');
                    branco1.classList.add('ativo');
                    branco2.classList.add('ativo');}, 200)

    setTimeout(()=>{move()}, 500)

    setTimeout(()=>{intro.style.top = '-100vh';}, 1400);
    
    setTimeout(()=>{index.classList.add('ativo');}, 2000);
    setTimeout(()=>{containter.classList.add('ativo');}, 2100)

})


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 0.5);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        laranja1.style.width = width + "vw";
        laranja2.style.width = width + "vw";
        branco1.style.width = width + "vw";
        branco2.style.width = width + "vw";
      }
    }
  }
}
