import {Snake_Speed as speed,update as updateSnake,draw as drawSnake,snakeHead, intersect} from "./snake.js"
import {food as drawFood,update as updateFood,Score} from './food.js'
const gameboard=document.getElementById('gameboard');
const score=document.getElementById('points')
let gameover=false
setInterval(()=>{
    update()
    draw()
},speed)
function update(){
    updateSnake()
    updateFood()
    score.innerHTML=`${Score}`
    lose()
    if(gameover){
        window.location.reload()
        alert("Game Over, Press OK to Restart.")
    }
}
function draw(){
    gameboard.innerHTML=''
    drawSnake(gameboard);
    drawFood(gameboard);
}
function lose(){
    gameover=snakeHead()||intersect()
}