let num1 = prompt('first number')
let num2 = prompt('second number')
let operator = prompt("please enter an operator from the list (+, -, *, /,%)")
let x = parseInt(num1)
let y = parseInt(num2)

if (operator == '+'){
    alert(x + y);
}

else if(operator == '-'){
    alert(x - y);
}

else if(operator == '/'){
    alert(x / y);
}

else if(operator == '*'){
    alert(x * y);
}

else if(operator == '%'){
    alert(x % y);
}

alert('Refresh page to re-run calculator')