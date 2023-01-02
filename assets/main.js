let color = "black";
let click = true;

function populateBoard(size){
    let board = document.querySelector('.pad');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size ;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        let squareEvent = square.addEventListener('mouseover', colorSquare);
        squareEvent;
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}
populateBoard(16);

function changeSize(input){
    if (input >= 2 && input <= 100){
        populateBoard(input);
    } else {
       alert('too many sqaures');
    }
};

function colorSquare() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random()*300}, 100%, 50%)`;
    }else {
        this.style.backgroundColor = color;
    }
}

function  changeColor(choice) {
    color = choice;
}
function resetBoard() {
    let board = document.querySelector('.pad');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = "white");
}










// const sketchPad = document.querySelector('.grid-container');
// let gridNum = 5;

// function addSquares () {
//     const row = document.createElement('div');
//     row.classList.add('row');
//     sketchPad.appendChild(row);
//     for (let i = 0; i < gridNum; i++) {
//         const column = document.createElement('div');
//         column.classList.add('column');
//         row.appendChild(column);
//     }
// };
// function padFill (num) {
//     for(let i = 0; i < num; i++ ) {

//         addSquares();
//     }
// }
// padFill(gridNum);




















// for (let i=0; i < 256; i++ ) {
//     const createDiv = document.createElement('div');
//     container.appendChild(createDiv);
// }

// const divs = container.querySelectorAll('div');
// divs.forEach((div) => {
//     div.addEventListener('mouseover', (e)=>{
//         e.target.style.backgroundColor = "black"
//     });
//     div.addEventListener('mouseout', (e) => {
//         e.target.style.backgroundColor = "white"
//     })

// })