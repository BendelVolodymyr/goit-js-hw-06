const inputText = document.querySelector('#validation-input');
const attributeLength = Number(inputText.getAttribute('data-length'));
inputText.focus();
inputText.addEventListener("input", () => {
    if (inputText.value.length === attributeLength) {
        result('valid', 'invalid');
    } else {
        result('invalid','valid');
    }
});

function result(a, b) {
    inputText.classList.add(a);
    inputText.classList.remove(b);
};

inputText.style.cssText = `
    background: linear-gradient(0deg, rgba(212,222,46,1) 0%, rgba(5,219,222,1) 100%);
`;