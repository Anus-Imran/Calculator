const currentDisplay = document.querySelector(".curr_display");
const previousDisplay = document.querySelector(".prev_display");
const numbers = document.querySelectorAll(".number");
const operand = document.querySelectorAll(".Operation");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

let Operation;

function appendNumber(number)
{
    if(number === "." && currentDisplay.innerText.includes("."))
    {
        // console.log("return");
        return;
        
    }
    currentDisplay.innerText += number;
}

function chooseOperation(operand)
{
    if(currentDisplay.innerText === "")
    {
        return;
    }
    compute();
    Operation = operand;
    // console.log(Operation);
    currentDisplay.innerText += operand;
    previousDisplay.innerText = currentDisplay.innerText;
    currentDisplay.innerText = "";
}
function clearDisplay()
{
    currentDisplay.innerText = "";
    previousDisplay.innerText = "";

}

function compute()
{
    let result;
    const previousValue = parseFloat(previousDisplay.innerText);
    const currentValue = parseFloat(currentDisplay.innerText);

    if(isNaN(previousValue) || isNaN(currentValue))
    {
        return;
    }


    switch(Operation)
    {
        case "+" :
            result = previousValue + currentValue ;
            break;
        case "-":
            result = previousValue - currentValue ;
            break;
        case "*":
            result = previousValue * currentValue ;
            break;
        case "/":
            result = previousValue / currentValue ; 
            break;
        default :
            return;
    }
    currentDisplay.innerText = result ;

}

numbers.forEach((number) => {
    number.addEventListener("click" , () => {
        appendNumber(number.innerText);
    });
});

operand.forEach((operand) => {
    operand.addEventListener("click" , () => {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click" , () => {
    clearDisplay();
});

equalBtn.addEventListener("click" , () => {
    compute();
    previousDisplay.innerText = "";
});

deleteBtn.addEventListener("click" , () => {
    currentDisplay.innerText = currentDisplay.innerText.slice(0 , -1);
});


