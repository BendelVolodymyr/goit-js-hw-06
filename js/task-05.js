// attributes search
const textInput = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output')
// result input
textInput.addEventListener('input', (even) => {
    const valueInput = even.currentTarget.value.trim();
    outPut.textContent = valueInput !== "" ? valueInput: 'Anonymous';
})
// style
const style = document.querySelector('body');
style.style.cssText = `
    color: green;
    background: yellow;
`;
