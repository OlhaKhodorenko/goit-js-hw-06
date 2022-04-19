const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categorieLog = allCategories.forEach((el) => console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${el.lastElementChild.children.length }`));