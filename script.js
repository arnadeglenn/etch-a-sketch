//Query Selectors
const grid = document.querySelector('#grid');
const drawingStart = document.querySelector('#drawingStart');
const drawingRemove = document.querySelector('#drawingRemove');
const numberSquare = document.querySelector('#numberSquare');
const blackWhiteButton = document.querySelector('#blackWhiteButton');
const rainbowButton = document.querySelector('#rainbowButton');

//Functions
function gridCreation() {
    for (let i=1; i<257; i++) {
        const square = document.createElement('div');
        square.className = `square square${i}`;
        square.style.height = '32px';
        square.style.width = '32px';
        grid.appendChild(square);
}
};

function gridChange(squareChoice) {
    grid.innerHTML = "";
    let sqrtSquareChoice = Math.ceil(Math.sqrt(squareChoice));
    
    for (let i=1; i<=squareChoice; i++) {
        const square = document.createElement('div');
        square.className = `square square${i}`;
        let squareSize = 512/sqrtSquareChoice;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        grid.appendChild(square);
}
};

function gridPick() {
    let squareChoice = parseInt(prompt('How Many Squares Do You Want?'));
    if (!Number.isInteger(squareChoice)) {
        alert("Pick a Square Root Number!");
    } else if (squareChoice <=0 || squareChoice >=530 || Number.isInteger(Math.sqrt(squareChoice)) !== true) {
        alert("Choose a Perfect Square Number from 1-529!");
    } else {
        gridChange(squareChoice);
    }
};

function mouseSketch() {
    const squareAppend = document.querySelectorAll('.square');
    squareAppend.forEach(function(square) {
        square.addEventListener('mouseenter', e => {
        square.style.background = 'black';
    });
});
};

function rgbRandomFunc() {
    let redRandom = Math.floor(Math.random() * 256);
    let greenRandom = Math.floor(Math.random() * 256);
    let blueRandom = Math.floor(Math.random() * 256);
    let rgbRandom = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
    return rgbRandom;
}

function rainbowDraw() {
    const squareAppend = document.querySelectorAll('.square');
    squareAppend.forEach(function(square) {
        square.addEventListener('mouseenter', e => {
        square.style.background = rgbRandomFunc();
    });
});
};

function eraseDrawing() {
    const squareAppend = document.querySelectorAll('.square');
    squareAppend.forEach(function(square) {
        square.style.background = 'white';
    });
};

//Function Call
gridCreation();

//Event Listeners
numberSquare.addEventListener('click', gridPick);
drawingStart.addEventListener('click', mouseSketch);
drawingRemove.addEventListener('click', eraseDrawing);
blackWhiteButton.addEventListener('click', e => {
    eraseDrawing();
    mouseSketch();
});
rainbowButton.addEventListener('click', e => {
    eraseDrawing();
    rainbowDraw();
});
