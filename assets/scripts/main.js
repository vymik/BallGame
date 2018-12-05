"use strict";

let balls = document.querySelectorAll("img");
let score = document.querySelector("p");
let startButton = document.querySelector("h1");
let gameOver = document.querySelector("h2");
let startAgain = document.querySelector("h3");
let level=1;
let kicks = 0;

startButton.addEventListener("click", () =>{
    fall();
    startButton.style.display = "none";
})


let fall = () => {
    let myTimer = setTimeout(() => {
        for(let i =0; i<balls.length;i++){
            if(parseInt(balls[i].style.top)<= 85){
            balls[i].style.top = parseInt(balls[i].style.top) + 2 + "%";
            console.log(level);
            }
            if(parseInt(balls[i].style.top) > 75){
                gameOver.style.display = "block";
                startAgain.style.display = "block";
            }
        }
        fall();
    }, 200 / level);
}

let kick = (ball) => {
    if(parseInt(ball.style.top)>= 10){
        // ball.style.top = parseInt(ball.style.top) - 10 + "%";
        ball.style.top = "0%";
        kicks++;
        score.textContent = "Score: "+ kicks;
    }
    if(kicks % 15 === 0 && kicks > 0){
        levelUp();
    }
    // fall();
}

// ball.addEventListener("click", () =>{
//     if(parseInt(ball.style.top)>= 10){
//     // ball.style.top = parseInt(ball.style.top) - 10 + "%";
//     ball.style.top = "0%";
//     kicks++;
//     score.textContent = "Score: "+ kicks;
//     }
//     if(kicks % 15 === 0 && kicks > 0){
//         levelUp();
//     } 
//     console.log(level);
//     // fall();
// });

let levelUp = () => {
    level++;
    document.getElementById("levelUp").style.display = "block";
    document.getElementById("levelUp").innerText = "Level: " + level;
    
    // setTimeout(() => {
    //     document.getElementById("levelUp").style.display = "none";
    // }, 500);
}

startAgain.addEventListener("click", () =>{
    location.reload();
})

