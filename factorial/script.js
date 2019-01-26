var numberInput;
var stringResult;
var result;


function getInput(){

    numberInput = parseInt(document.querySelector("#numberInput").value, 10);

}



function isValidInput(){

    if(isNaN(numberInput)){
        stringResult = "Input must be a number.";
        return false;
    }

    return true;

}


function factorial(){

    for(var num = numberInput; num > 0; num--){
        result = result * num;

        num == numberInput ? stringResult = num.toString() : stringResult += " * " + num.toString();

    }

    stringResult += " = " + result.toString();

}

function showResult(){

    document.querySelector("#factorialResult").textContent = stringResult;

}

function calculateFactorial(){

    stringResult = "";
    result = 1

    getInput()
    isValidInput() ? factorial(numberInput) : null;
    showResult();

}