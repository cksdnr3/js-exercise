const input = document.querySelector('#input')
const button = document.querySelector('#check')
const logs = document.querySelector('#logs')

let answer = []
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]    

for (let i = 0; i < 4; i++) {

    const index = Math.floor(Math.random() * numbers.length)
    answer.push(numbers[index])
    numbers.splice(index, 1)
}

console.log(answer)
let count = 0

button.addEventListener('click', () => {
    const value = input.value

    if (count < 10) {
        count++
        if (value) {

            if (value.length === 4) {

                if (value === answer.join('')) {
                    logs.appendChild(document.createTextNode('HomeRun'))
                } else {
                    let strike = 0
                    let ball = 0
                    for (let aIndex = 0; aIndex < 4; aIndex++) {
                        let aNumber = answer[aIndex]
                        for (let iIndex = 0; iIndex < 4; iIndex++) {
                            
                            let iNumber = value[iIndex]
                            if (aNumber === Number(iNumber)) {
                                if (aIndex === iIndex) {
                                    strike++
                                } else {
                                    ball++
                                }
                            }
                        }
                    
                    }
                    // for (const [aIndex, aNumber] of answer.entries()) {
                    //     for (const [iIndex, iNumber] of value.split('').entries()) {
                    //         if (aNumber === Number(iNumber)) {
                    //             if (aIndex === iIndex) {
                    //                 strike++
                    //             } else {
                    //                 ball++
                    //             }
                                
                    //         }
                    //     }
                    // }
                    logs.appendChild(document.createTextNode(`input ${value} : ${strike} Strike ${ball} Ball`))
                }
            }
        }
    } else {
        logs.appendChild(document.createTextNode('GameOver'))
    }
})

