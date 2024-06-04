const button = document.querySelector(".button");

 button.addEventListener("click", (event    ) => {
    const getInput = document.getElementById("get-input").value;
   console.log(getInput);
});

 function add(a, b) {return a + b;}
 function sub(a, b) {return a - b;}
 function multiply(a, b) {return a * b;}
function divide(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль!";
    } else {
        return a / b;
    }
}
function calculator() {
    let operation = prompt("Выберите операцию (+, -, *, /):");
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
}
switch(operation) {
    case '+':
        console.log("Результат:", add(num1, num2));
        break;
    case '-':
        console.log("Результат:", subtract(num1, num2));
        break;
    case '*':
        console.log("Результат:", multiply(num1, num2));
        break;
    case '/':
        console.log("Результат:", divide(num1, num2));
        break;
    default:
        console.log("Неверная операция!");
}

