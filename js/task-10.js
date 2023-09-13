const inputNumber = document.querySelector('input');
const div = document.querySelector('div#boxes');
const buttonDestroy = document.querySelector('button[data-destroy]');
const buttonCreate = document.querySelector('button[data-create]');
div.style.cssText = `display: flex;
flex-wrap: wrap;
row-gap: 20px;
gap: 20px;`


function destroyBoxes() {
  inputNumber.value = '';
 div.innerHTML = '';
}

function createBoxes(amount) {
  let total = 30;
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    total += 10;
      div.append(newDiv);
      newDiv.style.cssText = `background-color: ${getRandomHexColor()};
      width: ${total}px;
      height: ${total}px;
      `;
};
};
const inputResult = () => {
  if ( Number(inputNumber.value) < Number(inputNumber.min) || Number(inputNumber.value) > Number(inputNumber.max)) {
    alert(`    Min numbers: ${inputNumber.min} 
    Max numbers: ${inputNumber.max}`);
  } else {
    createBoxes(inputNumber.value.trim());
    }
  }

buttonCreate.addEventListener('click', inputResult);

buttonDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
