const content = document.querySelector(".content");

const buttons = document.querySelectorAll(".calculator-buttons button");

for(let button of buttons)
{
    button.addEventListener('click', e => handleInputButton(e));
}

function handleInputButton(e)
{
    const target = e.target;
    const buttonString = target.textContent;

    const inputNumber = parseInt(buttonString);
    if(!isNaN(inputNumber))
        handleInputNumber(inputNumber);
    else
        handleInputOperator(buttonString);
}

function handleInputNumber(n)
{
    
}
function handleInputOperator(op)
{

}
