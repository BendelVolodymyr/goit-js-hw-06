const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newIngredients = document.createElement("li");
const list = document.querySelector("#ingredients");
newIngredients.classList.add('item');
// list.append(newIngredients);
// const ingredient = ingredients.forEach((element) =>
//   newIngredients.textContent = element);
for (let i = 0; i < ingredients.length; i+= 1) {
 newIngredients.textContent = ingredients[i];
list.append(newIngredients.cloneNode(ingredients[i])); 
}

 

