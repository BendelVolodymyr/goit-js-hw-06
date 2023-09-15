const bodyStyle = document.querySelector('body');
const button = document.querySelector('.change-color');
const nameColor = document.querySelector('span.color');

const random = () => {
  const randomColor = getRandomHexColor();
  bodyStyle.style.cssText = ` background-color: ${randomColor}`;
  nameColor.innerHTML = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', random);
