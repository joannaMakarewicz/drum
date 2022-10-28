import "../scss/main.scss";

/* place your code below */

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const keys = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

for (let element of keys) {
  element.addEventListener("click", () => {
    element.classList.toggle("first__special");
    for (let audio of audios) {
      if (audio.id == element.id) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  });
}



