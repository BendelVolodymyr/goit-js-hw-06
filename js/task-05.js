// attributes search
const textInput = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output')
// result input
textInput.addEventListener('input', (even) => {
    outPut.textContent = textInput.value !== "" ? even.currentTarget.value : 'Anonymous';
})
// style
const style = document.querySelector('body');
style.style.cssText = `
    color: green;
    background: yellow;
`;
