const computerTag = document.querySelector("#computer");
let computerChoice = 'rock';    // setInterval 함수의 구간설정의 초기값
const rspCoord = {
    rock: '0',
    scissors: '-142px',         // 이미지 스플라이트와 interval 구간설정을 위한 객체
    paper: '-284px'             // 이미지스플라이트는 한장의 이미지를 잘라내 여러개로 사용하는 기법
};

const intervalMaker = () => {   // setInterval 함수를 담은 intervalMaker 고차함수 
    return setInterval(() => {  // setInterval 함수는 구간을 정해 무한 반복해주는 함수
        if (computerChoice == 'rock') {
            computerChoice = 'scissors';
        } else if (computerChoice == 'scissors') {  // 이함수는 conputerChoice의 초기값 rock을 시작으로 scissros - paper로 이어지고 다시 rock으로 무한 반복되는 함수
            computerChoice = 'paper';
        } else if (computerChoice == 'paper') {
            computerChoice = 'rock';
        };
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`; // 이미지 스플라이트를 위한 코드
    }, 50); // 0.05초 마다 묵찌빠가 바뀜
}
let intervalId = intervalMaker(); // 고차함수 intervalMaker를 담은 intervalId 변수

const clickButton = (myChoice) => { // mychoice를 매개변수로 가진 clickButton 화살표 고차함수, 리턴 값으로 함수를 가지고있으며 리턴값으로 함수를 사용하고싶은 곳에서 사용 가능
    return () => {
        clearInterval(intervalId); // intervalID가 가지고있는 intervalMaker함수의 setInterval함수를 멈추는 함수
        const score = {
            rock: 1,
            scissors: 0,    
            paper: -1
        };
        // 묵찌빠의 점수체계에 관한 알고리즘을 위한 객체, 가위바위보 사이의 이기고 지는 숫자차이로 컴퓨터와의 승패를 가른다.
        const scoreTag = document.querySelector("#score");
        const myScore = score[myChoice];    // 내가낸 묵찌빠
        const computerScore = score[computerChoice];    // 컴퓨터가낸 묵찌빠
        const diff = myScore - computerScore;   // 내가낸 묵찌빠와 컴퓨터가낸 묶찌빠의 차이수, 이걸로 승패를 가름
        let accScore = Number(scoreTag.textContent);    // 승패 점수 textContent가 문자열이라 숫자로 형변환
    
        if (diff == 1 || diff == -2) {  // 숫자차이가 1이거나 -2이면 승리
            accScore += 1;
        } else if (diff == -1 || diff == 2) {   // 숫자차이가 -1이거나 2이면 패배
            accScore -= 1;
        }
        scoreTag.textContent = accScore;    // 이기거나 졌을경우 승점 올림

        setTimeout(() => {  // 1초뒤 아래 내용 실행
                intervalId = intervalMaker();   // setInterval함수 재실행
        }, 1000)
    }
};

document.querySelector("#rock").addEventListener('click', clickButton('rock'));
document.querySelector("#scissors").addEventListener('click', clickButton('scissors'));
document.querySelector("#paper").addEventListener('click', clickButton('paper'));
// 이벤트 리스너 함수 첫번째 인자로 행위를 적고 두번째 인자로 기능(함수)를 적는다. 지금까지 화살표 함수로 적었지만 화살표함수를 위에 정의하고 호출함