let lastrenderTime = 0
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js"
import {update as updateFood, draw as drawFood } from "./food.js"

const gameBoard = document.getElementById("game-board")



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
   updateFood()
}

function draw()
{
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)

}


window.requestAnimationFrame(main)