import '../scss/main.scss';

/* place your code below */

console.log('HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!');

const keys = document.querySelectorAll('button');
let sounds = document.querySelector('.first__clap--js');

for(let element of keys){
    element.addEventListener('click', ()=>{
        element.classList.toggle('first__special');   
    })
    element.addEventListener('click', (e) => {
        sounds.play();
    })
}