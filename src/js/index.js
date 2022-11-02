import "../scss/main.scss";

/* place your code below */

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");
const history = document.querySelector(".music__history--js");
const load = document.querySelector(".history__load--js");
const reset = document.querySelector(".history__reset--js");
const currentHeading = document.querySelector(".music__heading--js");
const previousHeading = document.querySelector(".music__heading-second--js");
const myInfo = document.querySelector(".music__info--js");

function playSound(e) {
  audios.forEach((audio) => {
    if (e.keyCode == audio.id) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  buttons.forEach((button) => {
    if (e.keyCode == button.name) {
      myInfo.innerHTML=" ";
      button.classList.toggle("first__special");
      previousHeading.classList.remove('music__heading-second--open');
      currentHeading.classList.add('music__heading--open');
      const myTempate = `<button class="first__button">${button.innerHTML}</button>`;
      history.innerHTML += myTempate;
      localStorage.setItem('sound', JSON.stringify(history.innerHTML));
    }
  });
}

window.addEventListener("keydown", playSound);

for (let button of buttons) {
  button.addEventListener("click", () => {
    myInfo.innerHTML=" ";
    button.classList.toggle("first__special");
    for (let audio of audios) {
      if (audio.id == button.name) {
        audio.currentTime = 0;
        audio.play();
      }
    }
    previousHeading.classList.remove('music__heading-second--open');
    currentHeading.classList.add('music__heading--open');
    const myTempate = `<button class="first__button">${button.innerHTML}</button>`;
    history.innerHTML += myTempate;
    localStorage.setItem('sound', JSON.stringify(history.innerHTML));

  });
}

load.addEventListener('click', () => {
  currentHeading.classList.remove('music__heading--open');
  const myResult=localStorage.getItem('sound');
  if(myResult){
  previousHeading.classList.add('music__heading-second--open');
  history.innerHTML=JSON.parse(myResult);}else{
    myInfo.innerHTML=`There are no previous sounds`;
  }
})

reset.addEventListener('click', () => {
  history.innerHTML=" ";
  localStorage.removeItem('sound');
  previousHeading.classList.remove('music__heading-second--open');
  currentHeading.classList.remove('music__heading--open');
  buttons.forEach(button => {
    button.classList.remove("first__special");
  })
})
