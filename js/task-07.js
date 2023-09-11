const rangeInput = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

const newContent = document.createElement('h1');
rangeInput.after(newContent);
newContent.style.color = 'brown';

const rangeResult = e => {
    spanText.style.cssText = ` font-size: ${e.currentTarget.value}px;
    color: green;`;
    newContent.textContent = e.currentTarget.value;
}

rangeInput.addEventListener('input', rangeResult);



