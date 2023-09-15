const typeForm = document.querySelector('.login-form');
document.body.style.cssText = `background-color: green;`;

const input = document.querySelectorAll('input');
input[1].style.cssText = `background-color: yellow;`;
input[0].style.cssText = `background-color: blue;`;

function submitResult(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value.trim() === '' || password.value.trim() === '') {
      return  alert('Всі поля форми повинні бути заповнені');
    } 
        const user = {
            email: email.value,
            password: password.value,
        };
        event.currentTarget.reset();
        console.log(user);
    };

typeForm.addEventListener('submit', submitResult);