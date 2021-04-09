const inputRef = document.querySelector('#validation-input');

const onInputBorder = () => {
    if (inputRef.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.toggle('valid', true)
        inputRef.classList.toggle('invalid', false);
    }else{inputRef.classList.toggle('invalid', true);
        inputRef.classList.toggle('valid', false)}
}

inputRef.addEventListener('input', onInputBorder);