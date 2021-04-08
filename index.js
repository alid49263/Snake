import {Snake_Speed as speed,update as updateSnake,draw as drawSnake,snakeHead, intersect} from "./snake.js"
import {food as drawFood,update as updateFood,Score} from './food.js'
import {mobileList} from './input.js'
const gameboard=document.getElementById('gameboard');
const score=document.getElementById('points')
const highscore=document.getElementById('hs')
const top=document.getElementById('top')
const left=document.getElementById('left')
const bottom=document.getElementById('bottom')
const right=document.getElementById('right')
let gameover=false
mobileList(top,bottom,left,right)
setInterval(()=>{
    update()
    draw()
},speed)
function update(){
    updateSnake()
    updateFood()
    score.innerHTML=`${Score}`
    lose()
    if(Score>localStorage.getItem("highscore")){
        localStorage.setItem("highscore", Score);
     }
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
highscore.innerHTML=localStorage.getItem("highscore")