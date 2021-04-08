const counterValue = document.querySelector('#value');

let counter = Number(counterValue.textContent);

console.log(counterValue);

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment ()  {
    counter += 1;
    counterValue.textContent = counter;
};

function decrement ()  {
    counter -= 1;
    counterValue.textContent = counter; 
}

