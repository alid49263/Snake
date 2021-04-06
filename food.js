
 
import {snakeOn,size} from './snake.js'
export var Score=0
let foodPos={x:Math.ceil(Math.random()*21),y:Math.ceil(Math.random()*21)}
export function update(){
    if(snakeOn(foodPos)){
        size()
        let x=Math.ceil(Math.random()*21)
        let y=Math.ceil(Math.random()*21)
        foodPos.x=x
        foodPos.y=y
        Score+=1
    }
}
export function food(gameboard){
    const foodElmt=document.createElement('div')
    foodElmt.style.gridColumnStart=foodPos.x
    foodElmt.style.gridRowStart=foodPos.y
    foodElmt.classList.add('food')
    gameboard.appendChild(foodElmt)
}

