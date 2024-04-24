const display = document.querySelector("#display");

function updateDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

const buttons = document.querySelectorAll(".grid button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.innerText;
        if (buttonValue === "AC") {
            clearDisplay();
        } else if (buttonValue === "C") {
            deleteLastCharacter();
        } else if (buttonValue === "=") {
            calculate();
        } else {
            updateDisplay(buttonValue);
        }
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === "=") {
        event.preventDefault(); 
        calculate(); 
    }
});