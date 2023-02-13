var rs = require('readline-sync');

let validOperators = ["/", "*", "-", "+"];
let chosenOperator = '';
let firstNumber = 0;
let secondNumber = 0;

function operatorChooser(){
    chosenOperator = rs.question('What operation would you like to perform? ');
    while(!validOperators.includes(chosenOperator)){
        console.log('That is not a valid operation.');
        if(validOperators.includes(chosenOperator)){
            console.log('That works');
            return chosenOperator;
        }
        chosenOperator = rs.question('What operation would you like to perform? ');
    }
} 
function operation(){
    if(chosenOperator === "/"){
        console.log("The result is: " + (firstNumber / secondNumber)); 
    }
    if(chosenOperator === "*"){
        console.log("The result is: " + (firstNumber * secondNumber)); 
    }  
    if(chosenOperator === "-"){
        console.log("The result is: " + (firstNumber - secondNumber)); 
    }  
    if(chosenOperator === "+"){
        console.log("The result is: " + (firstNumber + secondNumber)); 
    }  
}
function main(){
    operatorChooser();
    firstNumber = rs.questionInt('Please enter the first number: ');
    secondNumber = rs.questionInt('Please enter the second number: ');
    operation();
}
main();
