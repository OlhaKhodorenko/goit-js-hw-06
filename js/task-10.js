const divBox = document.querySelector("#boxes");
const createBtn =document.querySelector('button[data-create="Create"]');
const destroyBtn =document.querySelector('button[data-destroy="Destroy"]');
const amount = document.querySelector("input").value;

const boxes = [];

const createBoxes = () =>{

const newDiv = document.createElement("div");
const newColor = getRandomHexColor();

newDiv.style.width = "30px";
newDiv.style.height ="30px";
newDiv.style.backgroundColor = newColor;
divBox.append("beforeend", newDiv);
return newDiv;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
createBtn.addEventListener("click", createBoxes);