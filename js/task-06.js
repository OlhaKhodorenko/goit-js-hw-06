const inputEl = document.querySelector("#validation-input");

const changeBorderColor = () => {
    const inputValue = inputEl.value.length;
    const dataLength = Number(inputEl.getAttribute("data-length"));
   if(inputValue === dataLength){
     inputEl.classList.add("valid");
     inputEl.classList.remove("invalid");
    } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
}   
};
inputEl.addEventListener("blur", changeBorderColor);