// We are building a simple calculator using JavaScript Functions //

const add = (a , b) => {
    let results = a + b;
    return results;
}
add(a , b);

const subtract = (a , b) => {
    let results = a - b;
    return results;
}
subtract(a , b);

const multiply = (a , b) => {
    let results = a * b;
    return results;
}
multiply(a , b);

const divide = (a , b) => {
    let results = a / b;
    return results;
}
divide(a , b);

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}