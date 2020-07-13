var isComputerTurn = true;
var userScore = 0;
var comScore = 0;

function onComputerShoot(){
    var textElem = document.getElementById('text');

    if (!isComputerTurn){
        textElem.innerHTML = '컴퓨터의 차례가 아닙니다.';
        return;
    }

    var shootType = Math.random() < 0.5 ? 2 : 3;
    var comScoreElem = document.getElementById('computer-score');

    if(shootType ===2){
        if(Math.random()<0.5){
            // 2점슛 성공확률 50%
            textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다!';
            comScore+=2;
            comScoreElem.innerHTML =  comScore;
        }else{
            // 실패
            textElem.innerHTML = '컴퓨터가 2점슛을 실패했습니다!';
        }
    }else{
        if(Math.random()<0.33333){
            // 3점슛 성공확률 33%
            textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다!';
            comScore+=3;
            comScoreElem.innerHTML = comScore;
        }else{
            // 실패
            textElem.innerHTML = '컴퓨터가 3점슛을 실패했습니다!';
        }
    }

    isComputerTurn = false;
}

function onUserShoot(shootType){
    var textElem = document.getElementById('text');

    var userScoreElem = document.getElementById('user-score');

    if (isComputerTurn){
        textElem.innerHTML = '사용자의 차례가 아닙니다.';
        return;
    }

    if(shootType ===2){
        if(Math.random()<0.5){
            // 2점슛 성공확률 50%
            textElem.innerHTML = '2점슛이 성공했습니다!';
            userScore+=2;
            userScoreElem.innerHTML = userScore;
        }else{
            // 실패
            textElem.innerHTML = '2점슛이 실패했습니다.';
        }
    }else{
        if(Math.random()<0.33333){
            // 3점슛 성공확률 33%
            textElem.innerHTML = '3점슛이 성공했습니다!';
            userScore+=3;
            userScoreElem.innerHTML = userScore;
        }else{
            // 실패
            textElem.innerHTML = '3점슛이 실패했습니다.';
        }
    }

    isComputerTurn = true;
}