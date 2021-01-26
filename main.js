const text = "Arimoro Olamilekan";

let index = 0;

function writeText() {
  document.getElementById('main').innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

function createHeart() {
  const nigeria = document.createElement('div');
  nigeria.classList.add('nigeria');

  nigeria.style.left = Math.random() * 100 + 'vw';

  nigeria.style.animationDuration = Math.random() * 2 + 3 + 's';

  nigeria.innerText = '❤️️';

  document.body.appendChild(nigeria);

  // setTimeout(() => {
  //   nigeria.remove();
  // }, 5000);
}

setInterval(() => {
  writeText();
}, 350);

setInterval(() => {
  createHeart();
}, 150);