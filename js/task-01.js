

const ulChildrenRef = document.querySelectorAll('li.item');

 console.log(`В списке ${ulChildrenRef.length} категории`);

const showTitleAndNumberOfElements = elements => {
    return elements.forEach(el => {
        const titleRef = el.querySelector('h2');
        const ulRef = el.querySelector('ul');
        console.log(`Категория: ${titleRef.textContent}`);
        console.log(`Количество элементов: ${ulRef.children.length}`)
    })

}

showTitleAndNumberOfElements(ulChildrenRef);

