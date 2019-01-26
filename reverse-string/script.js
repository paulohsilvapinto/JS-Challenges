var stringInput;
var stringReversed;


function getInput(){
    stringInput = document.querySelector("#stringInput").value;
    return stringInput;
}

/*-------------------------
* My function
-------------------------*/
function changeCharacterOrder(str){

    for(var index = str.length -1; index >= 0; index--){
        stringReversed = stringReversed + stringInput.charAt(index);
    }

    /*-------------------------
    * Built-in function
    * first split the string, which creates an array of characters, e.g. ['c','a','t']
    * then call the reverse function on this array 
    * and finally turn the reversed array back into a string using the join function
    -------------------------*/
    //str.split('').reverse().join('');

}

function showResult(){

    document.querySelector("#reverseResult").textContent = stringReversed;

}

function reverseString(){

    stringReversed = "";

    changeCharacterOrder(getInput());
    console.log(stringReversed);
    showResult();

}