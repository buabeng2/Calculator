const add = function(num_one, num_two) {
    return parseInt(num_one) + parseInt(num_two);
}

const subtract = function(num_one, num_two) {
    return parseInt(num_one) - parseInt(num_two);
}

const multiply = function(num_one, num_two) {
    return parseInt(num_one) * parseInt(num_two);
}

const divide = function(num_one, num_two) {
    num_one = parseInt(num_one);
    num_two = parseInt(num_two);
    return Math.round((num_one / num_two) * 100) / 100;
}

const remainder = function(num_one, num_two) {
    num_one = parseInt(num_one);
    num_two = parseInt(num_two);
    return num_one % num_two;
}

const operate = function() {
    let array_numbers = numbers_for_operation();
    let result = 0;
    if (array_numbers.length === 3) {
        let num_one = array_numbers[0];
        operator = array_numbers[1];
        num_two = array_numbers[2];
    switch(operator) {
        case "+":
        result = add(num_one, num_two);
        break;
        case "-":
        result = subtract(num_one, num_two);
        break;
        case "x":
        result =  multiply(num_one, num_two);
        break;
        case "/":
        result = divide(num_one, num_two);
        break;
        case "%":
        result = remainder(num_one, num_two);
    }
    } else {
        result = operate_two();
    }
    display_result(result);
    clear_computation();
}

const operate_two = function() {
    let array_numbers = numbers_for_operation();
    let operator = array_numbers[0];
    let num_two = array_numbers[1];
    let current_value = parseInt(document.querySelector(".value").textContent);
    let result = 0;
    switch(operator) {
        case "+":
        result = add(current_value, num_two);
        break;
        case "-":
        result = subtract(current_value, num_two);
        break;
        case "x":
        result =  multiply(current_value, num_two);
        break;
        case "/":
        result = divide(current_value, num_two);
        break;
        case "%":
        result = remainder(current_value, num_two);
    }
    return result;
}

const numbers_for_operation = function() {
    const computation = document.querySelector(".computation");
    let text = computation.textContent;
    let array_numbers = text.split(" ").filter(item => item !== "");
    return array_numbers;
}


function display_computation(event) {
    const computation = document.querySelector(".computation");
    let text = event.target.textContent;
    let string_add = "";
        if (text == "+" || text == "-" || text == "x" || text == "/" || text == "%") {
            string_add += " " + `${text}` + " "; 
        } else {
            string_add += `${text}`;
        }
    computation.textContent += string_add;
}

function display_result(value) {
    const value_content = document.querySelector(".value");
    value_content.textContent = value;
}

function clear_everything() {
    const computation = document.querySelector(".computation");
    computation.textContent="";
    const value = document.querySelector(".value");
    value.textContent = 0;
}

function clear_computation() {
    const computation = document.querySelector(".computation");
    computation.textContent="";
}

const all_buttons = Array.from(document.querySelectorAll("button"));
const display_buttons = all_buttons.filter(button =>  button.id !== "clear" && button.id !== "eraser" && button.id !== "equals");


display_buttons.forEach(button => {
    button.addEventListener("click", display_computation);
})

let clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", clear_everything);

let equals_button = document.querySelector("#equals");
equals_button.addEventListener("click", operate);
