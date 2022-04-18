let lastrenderTime = 0
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js"




function main(currentTime)
{
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastrenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    console.log("Render")
    lastrenderTime = currentTime

    update()
    draw()


}

function update()
{
    updateSnake()
 
}

function draw()
{
    drawSnake()

}


window.requestAnimationFrame(main)