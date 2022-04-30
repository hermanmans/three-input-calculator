

function ifCalc(){
    let num1 = parseFloat(prompt("Please insert variable number 1"));
    let num2 = parseFloat(prompt("Please insert variable number 2"));
    let num3 = (prompt("Please insert an mathematical operator"));
    console.log(typeof(num3));
    if (num3 == "+"){
        console.log(num1 + num2);
    }else if (num3 == "-"){
        console.log(num1 - num2);
    }else if (num3 =="/"){
        console.log(num1/num2);
    }else if (num3 == "*"){
        console.log(num1 * num2);
    }else{
        console.log("Error");
    }
}


    let num1 = parseFloat(prompt("Please insert variable number 1"));
    let num2 = parseFloat(prompt("Please insert variable number 2"));
    let num3 = (prompt("Please insert an mathematical operator"));
    switch (num3){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    default:
        console.log("Error");
}