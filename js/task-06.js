const inputText = document.querySelector('#validation-input');
const attributeLength = inputText.getAttribute('data-length');
inputText.focus();
inputText.addEventListener("input", () => {
    if (inputText.value.length == attributeLength) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    } else {
        inputText.classList.remove('valid')
        inputText.classList.add('invalid');
    }
});

inputText.style.cssText = `
    background: linear-gradient(0deg, rgba(212,222,46,1) 0%, rgba(5,219,222,1) 100%);
`;