"use strict";

let ball = document.querySelector("img");
let rect = ball.getBoundingClientRect();
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
        if(parseInt(ball.style.top)<= 80){
        ball.style.top = parseInt(ball.style.top) + 5 + "%";
        console.log(level);
        }
        if(parseInt(ball.style.top) > 75){
            gameOver.style.display = "block";
            startAgain.style.display = "block";
        }

        fall();
    }, 1000 / level);
}


ball.addEventListener("click", () =>{
    if(parseInt(ball.style.top)>= 10){
    ball.style.top = parseInt(ball.style.top) - 10 + "%";
    kicks++;
    score.textContent = "Score: "+ kicks;
    }
    if(kicks % 15 === 0){
        level++;
    } 
    console.log(level);
    // fall();
});

startAgain.addEventListener("click", () =>{
    location.reload();
})

