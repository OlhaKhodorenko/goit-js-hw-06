const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsItems = ingredients.map(el => {const itemList = document.createElement("li");
 itemList.textContent = el;
 itemList.classList.add("item");
 return itemList;
});
const ingredientsList = document.querySelector("#ingredients").append(...ingredientsItems);