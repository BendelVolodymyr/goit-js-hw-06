const allCategories = document.querySelector('#categories');
const lengthCategorries = allCategories.children.length;
console.log(`Number of categories: ${lengthCategorries}`);


const items = document.querySelectorAll(".item");

const total = items.forEach((element) => {
    const categoryName = element.firstElementChild.textContent;
    const categoryElement = element.lastElementChild.children.length;
    console.log(`Category: ${categoryName}`);
    console.dir(`Elements: ${categoryElement}`);  
    
});
