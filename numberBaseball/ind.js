const input = document.querySelector('#input')
const check = document.querySelector('#check')
const logs = document.querySelector('#logs')
const gameOver = document.querySelector('#gameover')

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let answer = []

for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * (10 - i))
    answer.push(numbers[index])
    numbers.splice(index, 1)
}

let count = 0

check.addEventListener('click', () => {
    const value = input.value
    
    if (count < 10) {
        count++
        if (value && value.length === 4) {

            if (answer.join('') === value) {
                logs.textContent = ''
                logs.appendChild(document.createTextNode('HomeRun!!!!'))
            } else {
                let strike = 0
                let ball = 0

                for (const [aIndex, aNumb] of answer.entries()) {

                    for (const [iIndex, iNumb] of value.split('').entries()) {

                        if (aNumb === Number(iNumb)) {

                            if (aIndex === iIndex) {
                                strike++
                            } else {
                                ball++
                            }
                        }
                    }
                }
                logs.appendChild(document.createTextNode(`${value}: ${strike} strike ${ball} ball`))
                logs.appendChild(document.createElement('br'))
            }
        }
    } else {
        logs.appendChild(document.createTextNode('GameOver' + ' Answer is ' + answer.join('')))
        logs.appendChild(document.createElement('br'))
    }
})



