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
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + 'vw';

  heart.style.animationDuration = Math.random() * 2 + 3 + 's';

  heart.innerText = '❤️️';

  document.body.appendChild(heart);
}

setInterval(() => {
  writeText();
}, 350);

setInterval(() => {
  createHeart();
}, 150);