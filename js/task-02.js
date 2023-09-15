const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul#ingredients');
let allIngredients = [];
function newIngredient(ingredients = []) {
  ingredients.filter((ingredient) => { 
    const newElement = document.createElement('li');
    newElement.textContent = ingredient;
    newElement.classList.add('item');
    allIngredients.push(newElement);
  });
 return list.append(...allIngredients);
}

newIngredient(ingredients);


 

