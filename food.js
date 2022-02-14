import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition} from './grid.js';
import { getExpansion} from "./input.js";
let food = { x:11, y:1 }
const EXPANSION_RATE = getExpansion();

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumn = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}