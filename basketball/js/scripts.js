var isComputerTurn = true;
var userScore = 0;
var comScore = 0;
var shotsLeft = 15;
function onComputerShoot(){
    var shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType ===2){
        if(Math.random()<0.5){
            // 2점슛 성공확률 50%
            showText('컴퓨터가 2점슛을 성공시켰습니다!');
            updateComputerScore(2);
        }else{
            // 실패
            showText('컴퓨터가 2점슛을 실패했습니다!');
        }
    }else{
        if(Math.random()<0.33333){
            // 3점슛 성공확률 33%
            showText('컴퓨터가 3점슛을 성공시켰습니다!');
            updateComputerScore(3);
        }else{
            // 실패
            showText('컴퓨터가 3점슛을 실패했습니다!');
        }
    }

    isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);
}

function onUserShoot(shootType){
    if(shootType ===2){
        if(Math.random()<0.5){
            // 2점슛 성공확률 50%
            showText('2점슛이 성공했습니다!');
            updateUserScore(2);
        }else{
            // 실패
            showText('2점슛이 실패했습니다.');
        }
    }else{
        if(Math.random()<0.33333){
            // 3점슛 성공확률 33%
            showText('3점슛이 성공했습니다!');
            updateUserScore(3);
        }else{
            // 실패
            showText('3점슛이 실패했습니다.');
        }
    }

    isComputerTurn = true;

    disableComputerButtons(false);
    disableUserButtons(true);

    shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if(shotsLeft === 0){
        if(userScore>comScore){
            showText('승리했습니다!');
        } else if (userScore < comScore){
            showText('패배했습니다..');
        } else {
            showText('비겼습니다.');
        }

       disableComputerButtons(true);
       disableUserButtons(true);
    }
}

function showText(s){
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score) {
    comScore += score;
    var comScoreElem = document.getElementById('computer-score');
    comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
    userScore += score;
    var userScoreElem = document.getElementById('user-score');
    userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag) {
    var computerButtons = document.getElementsByClassName('btn-computer');
    for(var i=0; i<computerButtons.length; i++){
        computerButtons[i].disabled = flag;
    }
}

function disableUserButtons(flag) {
    var userButtons = document.getElementsByClassName('btn-user');
    for(var i=0; i<userButtons.length; i++){
        userButtons[i].disabled = flag;
    }
}