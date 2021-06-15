const computerTag = document.querySelector("#computer");
const rockTag = document.querySelector("#rock");
const paperTag = document.querySelector("#paper");
const scissorsTag = document.querySelector("#scissors");
const scoreTag = document.querySelector("#score");

let computerChoice = 'rock';
const rspCoord = {
    rock: '0px',
    scissors: '-142px',
    paper: '-284px'
};

const intervalMaker = () => {
    return setInterval(() => {
        if (computerChoice == 'rock') {
            computerChoice = 'scissors';
        } else if (computerChoice == 'scissors') {
            computerChoice = 'paper';
        } else if (computerChoice == 'paper') {
            computerChoice = 'rock';
        }
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
    }, 50);
}
let intervalId = intervalMaker();

const clickButton = (myChoice) => {
    return () => {
        clearInterval(intervalId);
        const score = {
            rock: 1,
            scissors: 0,
            paper: -1
        };
        const myScore = score[myChoice];
        const computerScore = score[computerChoice];
        const diff = myScore - computerScore;
        let accScore = Number(scoreTag.textContent);
        
        if (diff == 1 || diff == -2) {
            accScore += 1;
        } else if (diff == -1 || diff == 2) {
            accScore -= 1;
        };
        scoreTag.textContent = accScore;

        setTimeout(() => {
            intervalId = intervalMaker();
        }, 1000)
    };
};

rockTag.addEventListener('click', clickButton('rock'));
scissorsTag.addEventListener('click', clickButton('scissors'));
paperTag.addEventListener('click', clickButton('paper'));