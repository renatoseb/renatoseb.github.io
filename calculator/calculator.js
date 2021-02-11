var buffer = "0";
var ans = 0;
var currentOperation;
const screen = document.querySelector('.screen');

function handler(input){
    if(isNaN(input)){
        handleSymbol(input);
    }
    else{
        handleNumber(input);
    }
    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value){
        case 'C':
            buffer = "0";
            ans = 0;
            currentOperation = undefined;
            break;
        case '←':
            if(buffer.length > 1) buffer = buffer.substr(0,buffer.length-1);
            else buffer = "0";
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(value);
            break;
        case '=':
            buffer = parseInt(buffer);
            doMath();
            buffer = ans.toString();
            break;
    }
}

function handleNumber(value){
    if(buffer == "0"){
        buffer = value;
    }
    else{
        buffer += value;
    }
}

function handleMath(value){
    currentOperation = value;
    ans = parseInt(buffer);
    buffer = "0";
}

function doMath(){
    if(currentOperation == '+') ans += buffer;
    else if(currentOperation == '-') ans -= buffer;
    else if(currentOperation == 'x') ans *= buffer;
    else if(currentOperation == '÷') ans /= buffer;
}

function mainFunction(){
    document.querySelector(".buttons").addEventListener('click', (event) => {
        handler(event.target.innerText);
    })
}

mainFunction();