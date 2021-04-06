
import {getDirection as dir} from "./input.js"
export const Snake_Speed=200;
export let snake=[{x:11,y:11 }]
export function update(){
    const direction=dir()
    for(let i=snake.length-2;i>=0;i--){
        snake[i+1]={...snake[i]};
    }
    snake[0].x+=direction.x
    snake[0].y+=direction.y
    console.log(snake)
}
export function draw(gameboard){
    snake.forEach(segment=>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement);
    })
}
export function snakeHead(){
    return snake[0].x<1||snake[0].x>21||snake[0].y<0||snake[0].y>21
}
export function intersect(){
    for(let i=1;i<=snake.length-1&&snake.length!=2;i++){
        if(snake[0].x===snake[i].x&&snake[0].y===snake[i].y){
            return true
        }
    }
}
export function snakeOn(food){
    return snake.some(segment=>{
        return equall(food,segment)
    })
}
function equall(food,seg){
    return seg.x===food.x&&seg.y===food.y
}
export function size(){
    snake.push({...snake[snake.length-1]})
}