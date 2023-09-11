// result in scoreboard
const span = document.querySelector('span#value');

let counterValue = 0;


// plus and minus

const minus = () => {
    counterValue -= 1;
    span.innerHTML = `${counterValue}`;
};

const plus = () => {
    counterValue += 1;
   span.innerHTML = `${counterValue}`;
};

// attribute search

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

// event call

buttonDecrement.addEventListener('click', minus);
buttonIncrement.addEventListener('click', plus);

// style
buttonDecrement.style.cssText = `
    background-color: #4D5AE5;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #ffff00;
    cursor: pointer;
    min-width: 169px;
    height: 56px;
    border: none;
    border-radius: 4px;
    display: block;
    margin: 48px auto 0 auto;
`;

buttonIncrement.style.cssText = `
    background-color: #ffff00;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #4D5AE5;
    cursor: pointer;
    min-width: 169px;
    height: 56px;
    border: none;
    border-radius: 4px;
    display: block;
    margin: 48px auto 0 auto;
`;


span.style.cssText = `
   background: rgb(77,90,229);
    background: linear-gradient(180deg, rgba(77,90,229,1) 0%, rgba(255,255,0,1) 100%);
    font-weight: 800;
    font-size: 60px;
    line-height: 1.5;
    letter-spacing: 0.14em;
    color: #ffffff;
    

    max-width: 169px;
    height: 100px;
    border: none;
    border-radius: 25px;
    display: block;
    margin: 48px auto 0 auto;
`;
