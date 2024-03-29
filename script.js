const X_class = "x"
const CIRCLE_Class = "circle"
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 6],

]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById("board")
const winningMessageElement = document.getElementById("winningMessage")
const WINNINGMessageTextElement = document.querySelector('[data-winning-message-text]')
const reststartButton = document.getElementById("restartButton")
let circleTurn 
startGame()

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

reststartButton.addEventListener("click", startGame)

function startGame(){
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_class)
        cell.classList.remove(CIRCLE_Class)
        cell.removeEventListener("click", handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove("show")
}

function handleClick(e){
    
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_Class : X_class
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHoverClass()
    }

}

function endGame(draw){
    if(draw)
    {
        WINNINGMessageTextElement.innerText = "Draw"

    }else{
        WINNINGMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} WINS!`
    }
    winningMessageElement.classList.add("show")

}

function isDraw()
{
    return  [...cellElements].every(cell => {
        return cell.classList.contains(X_class) || cell.classList.contains(CIRCLE_Class)
    })
}

function placeMark(cell, currentClass)
{
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_class)
    board.classList.remove(CIRCLE_Class)
    if(circleTurn){
        board.classList.add(CIRCLE_Class)
    }else{
        board.classList.add(X_class)
    }

}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}