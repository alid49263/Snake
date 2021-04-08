let inputDirection={x:0,y:0}
let lastinput={x:0,y:0}
export function mobileList(top,bottom,left,rigth){
    top.addEventListener('click',()=>{
        if(lastinput.y!==0)return
        inputDirection={x:0,y:-1}
    })
    left.addEventListener('click',()=>{
        if(lastinput.x!==0)return
        inputDirection={x:-1,y:0}
    })
    bottom.addEventListener('click',()=>{
        if(lastinput.y!==0)return
        inputDirection={x:0,y:1}
    })
    right.addEventListener('click',()=>{
        if(lastinput.x!==0)return
        inputDirection={x:1,y:0}
    })
}
window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastinput.y!==0)return
            inputDirection={x:0,y:-1}
            break;
        case 'ArrowDown':
            if(lastinput.y!==0)return
            inputDirection={x:0,y:1}
            break;
        case 'ArrowLeft':
            if(lastinput.x!==0)return
            inputDirection={x:-1,y:0}
            break;
        case 'ArrowRight':
            if(lastinput.x!==0)return
            inputDirection={x:1,y:0}
            break;

    }
})
export function getDirection(){
    lastinput=inputDirection
    return inputDirection
}
