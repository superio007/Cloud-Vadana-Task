var title = document.querySelector("title");
var display = document.querySelector("input");
var buttons = document.querySelectorAll("button");
var storage = [];
var result = 0;
var temp = "";

function toggleTitle() {
    if (title.innerHTML === "calculator") {
        title.innerHTML = "CloudVadana";
    } else {
        title.innerHTML = "calculator";
    }
}

setInterval(toggleTitle, 3000);

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonText = button.innerHTML;
        calculation(buttonText);
    });
});


function calculation(input) {
    if (input === "AC") {
        storage = [];
        temp = "";
        display.value = "";
    } else if (input === "=") {
        try {
            result = eval(temp);
            display.value = result;
            temp = result.toString();
        } catch (error) {
            display.value = "Error";
        }
    } else {
        temp += input;
        display.value = temp;
    }
}

function evaluateExpression(expression) {
    var stack = [];
    var operators = "+-*/";
    var parts = expression.split(/([\+\-\*\/])/);

    parts.forEach(function(part) {
        if (!operators.includes(part)) {
            stack.push(parseFloat(part));
        } else {
            var b = stack.pop();
            var a = stack.pop();
            switch (part) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    if (b !== 0) {
                        stack.push(a / b);
                    } else {
                        alert("Error: Division by zero");
                        return 0;
                    }
                    break;
            }
        }
    });

    return stack[0];
}
