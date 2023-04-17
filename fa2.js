var answer;
var operation;
var op;
var input;

var NumOne = 0;
function firstNum(){
    NumOne = document.getElementById("num1").value;
}

var NumTwo = 0;
function scdNum(){
    NumTwo = document.getElementById("num2").value;
}

function addi(){
    input = "+";
    op = "sum";
    finalAns();
}
function subt(){
    input = "-";
    op = "difference";
    finalAns();
}
function mult(){
    input = "*";
    op = "product";
    finalAns();
}
function divi(){
    input = "/";
    op = "quotient";
    finalAns();
}
function perc(){
    input = "%";
    op = "remainder";
    finalAns();
}

function finalAns(){
    operation = input;

    if(operation == "+"){
        answer = parseInt(NumOne) + parseInt(NumTwo);
    }
    if(operation == "-"){
        answer = parseInt(NumOne) - parseInt(NumTwo);
    }
    if(operation == "*"){
        answer = parseInt(NumOne) * parseInt(NumTwo);
    }
    if(operation == "/"){
        answer = parseInt(NumOne) / parseInt(NumTwo);
    }
    if(operation == "%"){
        answer = parseInt(NumOne) % parseInt(NumTwo);
    }

    if(operation == "%" || operation == "/"){
        document.getElementById("result").innerHTML = ("The "+op+" of "+NumOne+" divided by "+NumTwo+" is "+answer);
    }
    else{
        document.getElementById("result").innerHTML = ("The "+op+" of "+NumOne+" and "+NumTwo+" is "+answer);
    }
    event.preventDefault();
}
