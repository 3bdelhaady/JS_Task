let num1 = parseFloat(prompt("number1"));
let num2 = parseFloat(prompt("number2"));

function addNumbers(a, b) {
    return a + b;
}

let x = addNumbers(num1, num2);

document.getElementById("message").textContent = x;