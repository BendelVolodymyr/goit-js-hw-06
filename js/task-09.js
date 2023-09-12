const bodyStyle = document.querySelector('body');
const button = document.querySelector('.change-color');
const nameColor = document.querySelector('span.color');

const random = () => {
  bodyStyle.style.cssText = ` background-color: ${getRandomHexColor()}`;
  nameColor.innerHTML = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', random);
