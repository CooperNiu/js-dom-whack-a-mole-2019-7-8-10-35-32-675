window.onload = function () {

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startBtn = document.getElementById('start_btn');
    let titleH1 = document.getElementById('title');

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;


    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();

        startBtn.classList.add('animate');
        // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
        setTimeout(() => {
            startBtn.classList.remove('animate');
            startBtn.style.display = 'none';
        }, 700);
    }


    function startGame() {
        // TODO: 写开始新游戏后发生的事
        if (startBtn.textContent === "Replay!") {
            titleH1.textContent = "WHACK A MOLE!";
            scoreBoard.textContent = "0";
            score = 0;
            timeUp = false;
            lastHole && lastHole.classList.remove("up");
            clearTimeout(holesTimer);
            clearTimeout(gametimer);
        }
        
        
        holesUp();
        
       
        gametimer = setTimeout(()=>{
            timeUp = true;
            titleH1.textContent = "Time up!";
            startBtn.textContent = "Replay!";
            startBtn.style.display = "inline";
            lastHole.classList.remove("up");
        },gameTime);
    } 
    
    for(const mole of moles) {
        mole.addEventListener('click',function(){
            if(!this.parentElement.click && !timeUp){
                score++;
                this.parentElement.click = true;
                this.parentElement.classList.remove("up");
                scoreBoard.textContent=score.toString();
            }
            
        })
    }
    }

};
