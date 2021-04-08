const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


  ingredients.map(element => {
  const ulRef = document.querySelector('#ingredients');
  const liRef = document.createElement('li');
  liRef.textContent = element;
  ulRef.appendChild(liRef);
  })



