import "../scss/main.scss";

/* place your code below */

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");
const history = document.querySelector(".music__history");

function playSound(e) {
  audios.forEach((audio) => {
    if (e.keyCode == audio.id) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  buttons.forEach((button) => {
    if (e.keyCode == button.name) {
      button.classList.toggle("first__special");
      const myTempate = `<button class="first__button">${button.innerHTML}</button>`;
      history.innerHTML += myTempate;
    }
  });
}

window.addEventListener("keydown", playSound);

for (let button of buttons) {
  button.addEventListener("click", () => {
    button.classList.toggle("first__special");
    for (let audio of audios) {
      if (audio.id == button.name) {
        audio.currentTime = 0;
        audio.play();
      }
    }
    const myTempate = `<button class="first__button">${button.innerHTML}</button>`;
    history.innerHTML += myTempate;
  });
}
