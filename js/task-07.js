const inputRef = document.querySelector('#font-size-control');
const spanRef = document.getElementById('text');

const onInputSize = () => {
    spanRef.style.fontSize = inputRef.value + 'px';
}

inputRef.addEventListener('input', onInputSize);