const numberInput = document.querySelector('#input')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const divideButton = document.querySelector('#divide')
const multiplyButton = document.querySelector('#multiply')
const equalsButton = document.querySelector('#equals')
const resultInput = document.querySelector('#result')
const clearButton = document.querySelector('#clear')

let temp
let operator

plusButton.addEventListener('click', () => {
    if (numberInput.value) {
        temp = Number(numberInput.value)
        operator = '+'
        numberInput.value = null
    }
})

minusButton.addEventListener('click', () => {
    if (numberInput.value) {
        temp = Number(numberInput.value)
        operator = '-'
        numberInput.value = null
    }
})

divideButton.addEventListener('click', () => {
    if (numberInput.value) {
        temp = Number(numberInput.value)
        operator = '/'
        numberInput.value = null
    }
})

multiplyButton.addEventListener('click', () => {
    if (numberInput.value) {
        temp = Number(numberInput.value)
        operator = '*'
        numberInput.value = null
    }
})

equalsButton.addEventListener('click', () => {
    if (operator) {
        if (numberInput.value) {
            if (operator === '+') {
                numberInput.value = temp + Number(numberInput.value)
                temp = numberInput.value
            } else if (operator === '-') {
                numberInput.value = temp - Number(numberInput.value)
                temp = Number(numberInput.value)
            } else if (operator === '*') {
                numberInput.value = temp * Number(numberInput.value)
                temp = Number(numberInput.value)
            } else if (operator === '/') {
                numberInput.value = temp / Number(numberInput.value)
                temp = Number(numberInput.value)
            }
        }
    } else {
        if (numberInput.value) {
            numberInput.value = temp
        }
    }
})

clearButton.addEventListener('click', () => {
numberInput.value = null
temp = null
operator = null
})