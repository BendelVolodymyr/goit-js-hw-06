const list = document.querySelectorAll(".item");
const numberCategories = list.forEach((element, index, array) => {
    const numberChildren = array.length;
    console.dir(`Number of categories: ${numberChildren}`);
});
const filterCategories = list.forEach((element) => {
    const nameElement = element.firstElementChild.textContent;
    const lengthElement = element.lastElementChild.children.length;
    console.dir(`Category: ${nameElement}`);
    console.dir(`Elements: ${lengthElement}`);
});
