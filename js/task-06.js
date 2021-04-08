const inputRef = document.querySelector('#validation-input');

const makeInputBorder = () => {
    if (inputRef.value.length === 6) {
        inputRef.classList.toggle('valid', true)
        inputRef.classList.toggle('invalid', false);
    }else{inputRef.classList.toggle('invalid', true);
        inputRef.classList.toggle('valid', false)}
}

inputRef.addEventListener('input', makeInputBorder);