function calculate(order) {
    var result;
    var firstInput = parseInt(document.getElementById('firstinput').value);
    var secondInput = parseInt(document.getElementById('secondinput').value);

    if (order === 'add') {
        result = add(firstInput, secondInput);
    } else if (order === 'subtract') {
        result = subtract(firstInput, secondInput);
    }

    if (order === 'multiply') {
      result = multiply(firstInput, secondInput);
    } else if (order === 'divide')
    result = divide(firstInput, secondInput);

    if (order === 'pi') {
      result = pi();
    } else if (order === 'circumference')
    result = circumference(firstInput, secondInput);

    if (order === 'sqrt') {
      result = sqrt(firstInput, secondInput);
    } else if (order === 'pow')
    result = pow(firstInput, secondInput);

    document.getElementById('final-result').innerText = result;
}

function add(a, b){
    return a + b;
}

function subtract(a, b) {
return a - b;                     
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
return a / b;
}

function pi() {
return(Math.PI);             
}

function circumference(a, b) {
return Math.PI*(a + b);             
}

function pow (a, b) {
return(Math.pow(a, b));
}
  
function sqrt(a, b) {
return(Math.sqrt((a * a) + (b * b)));
}