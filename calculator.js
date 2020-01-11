const display = document.querySelector('.display')
const btns = document.querySelectorAll('.btn-operator, .btn-no')
const eqlButton = document.querySelector('.btn-eql')
const clrButton = document.querySelector('.btn-clr')

let displayDigits = "";

//Loop for finding the numbers
btns.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-num');
        displayDigits += buttonValue;
        display.textContent = displayDigits;
    })
});

//Equals button
eqlButton.addEventListener('click', () => {
    displayDigits = eval(displayDigits)
    display.textContent = displayDigits
})

//Clear button
clrButton.addEventListener('click', () => {
    displayDigits = "";
    display.textContent = displayDigits;
})
