const button = document.querySelector(".button");
const resultElement = document.querySelector(".result");

button.addEventListener("click", (event) => {
    const getInput = document.getElementById("get-input").value;
    const result = eval(getInput);

    resultElement.classList.remove("hide");
    resultElement.classList.add("show");

    // Вывести результат в элемент с классом "result"
    resultElement.textContent = result;
});