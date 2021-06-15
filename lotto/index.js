const shuffle = []      // 무작위 숫자 45개를 담을 배열
const candidate = Array(45).fill().map((v, i) => i + 1)
// 숫자 45개를 담은 통 같은 배열 Array(45) - 길이가 45이고 빈값(empty)을 가진 배열 선언, fill() - 배열에 값을 undefined로 채워준다. ()안에 값을 넣어 배열을 채울 수 있다.
// map((v, i) => i + 1) - 값과 인덱스를 1:1로 매칭 시키는 메서드 첫번째 매개변수v가 값 두번째 매개변수 i가 인덱스이고 화살표 오른쪽의 값이 value에 인덱스 순서대로 들어간다.
// return값이 있을 때 map을 주로 사용 <-> return값이 없을 때 arr.forEach((v, i) => {})를 사용한다. 단순히 배열을 반복 할 때 사용한다.
//                                       배열arr의 값을 인덱스 순서대로 매개변수 v에 담는다.
while (candidate.length > 0) {                                  // 숫자 45개를 통에서 섞어서 배열 shuffle에 담는 반복문
    const random = Math.floor(Math.random() * candidate.length) // 무작위 숫자 45개중 하나의 숫자
    const spliceArray = candidate.splice(random, 1)             // candidate.splice(random, 1) 배열 candidate의 값을 숫자 random에서 시작해 1개의 배열을 뽑는 메서드  
    const value = spliceArray[0]                                // 뽑혀진 배열1개의 값을 number형으로 바꿔 변수value에 담는 코드
    shuffle.push(value)                                         // 변수 value에 담긴 값을 배열 shuffle에 담는 코드 결국 shuffle의 값은 항상 무작위로 섞이는 중
}

const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c)      
// shuffle.slice(0, 6) - 무작위 숫자 45개가 담긴 배열 shuffle의 값중 0 <= a < 6 a범위 만큼  배열을 잘라내는 메서드
// .sort((p, c) => p - c) - 첫번째 매개변수인 앞 요소 p 와 두번째 매개변수인 뒷 요소 c 의 값을 빼 양수면 자리를 바꿔 배열의 순서를 오름차순으로 바꾸는 코드
// 뽑힌 6개의 요소를 배열 wniBalls에 담는다.
const bonus = shuffle[6]                                        // 무작위 숫자 45개중 6번째 값을 bonus변수에 담는다.

function colorSet(number, tag) {                                // html color를 담당하는 함수

    if (number <= 10) {
        tag.style.backgroundColor = 'red'
    } else if (number <= 20) {
        tag.style.backgroundColor = 'orange'
    } else if (number <= 30) {
        tag.style.backgroundColor = 'yellow'
    } else if (number <= 40) {
        tag.style.backgroundColor = 'green'
    } else {
        tag.style.backgroundColor = 'lightblue'
    }
}

function elementSet(number, tag) {
    tag.className = 'ball'
    tag.textContent = number
}

for (let i = 0; i < winBalls.length; i++) {                     // html과 css를 그려내는 반복문
    setTimeout(() => {                                          
        // 시간에 조건을 주는 비동기 코드 비동기 : 구동되지 않다 특정 조건에 의해 구동되는 코드 ex)button
        const resultTag = document.querySelector('#result')
        const ball = document.createElement('div')
        colorSet(winBalls[i], ball)
        elementSet(winBalls[i], ball)
        resultTag.appendChild(ball)
    }, 1000 * (i + 1))                                          // 숫자 1당 1밀리초 즉 숫자 1000은 1초
}

setTimeout(() => {
    const bonusTag = document.querySelector('#bonus')
    const bonusBall = document.createElement('div')
    colorSet(bonus, bonusBall)
    elementSet(bonus, bonusBall)
    bonusTag.appendChild(bonusBall)
}, 7000)