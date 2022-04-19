const refs ={
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector("#name-output"),
}
const formHandler = () => {
    if(refs.inputEl.value  === ""){
        return refs.outputEl.textContent = "Anonymous";}
    refs.outputEl.textContent = refs.inputEl.value;
    console.log(refs.inputEl.value);
}

refs.inputEl.addEventListener("input", formHandler);