import "../scss/main.scss";

/* place your code below */

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

function playSound(e) {
  audios.forEach((audio) => {
    if (e.keyCode == audio.id) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  buttons.forEach((button) => {
    if (e.keyCode == button.id) {
      button.classList.toggle("first__special");
    }
  });
}

window.addEventListener("keydown", playSound);

for (let button of buttons) {
  button.addEventListener("click", () => {
    button.classList.toggle("first__special");
    for (let audio of audios) {
      if (audio.id == button.id) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  });
}
