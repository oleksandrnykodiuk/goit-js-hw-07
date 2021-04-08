const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



const onInputChange =() => {
     if (inputRef.value.length < 1) {
        spanRef.textContent = 'незнакомец';
    } else {
        spanRef.textContent = inputRef.value;
    };

    
}

inputRef.addEventListener('input', onInputChange);

