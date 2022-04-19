
const bodyEl = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const descrColor = document.querySelector(".color");

const changeColor = () =>{
  const newColor = getRandomHexColor()
  bodyEl.style.backgroundColor = newColor;
  descrColor.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
colorBtn.addEventListener("click", changeColor);