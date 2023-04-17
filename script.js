"use strict";
window.addEventListener("load", start);
const boardArray = new Array(16).fill(0);
const boardMovableArray = new Array(16).fill(true);
console.log(boardArray);
document.addEventListener("keydown", function (event) {
  // console.log(event.key);
  if (event.key === "w") {
    moveAllUp();
  }
  if (event.key === "s") {
    moveAllDown();
  }
  if (event.key === "d") {
    moveAllRight();
  }
  if (event.key === "a") {
    moveAllLeft();
  }
});
function start() {
  for (let i = 0; i < 16; i++) createCells(i);
  boardArray[11] = 4;
  boardArray[13] = 2;
  boardArray[2] = 2;

  displayAllNums();
  allCellDisplay();
}

function createCells(num) {
  console.log(`createCells`);
  let cellElement = /*html*/ `
    <div id="cell${num}" class="cell_obj"></div>
  `;
  document.querySelector("#board").insertAdjacentHTML("beforeend", cellElement);
}

function allCellDisplay() {
  for (let i = 0; i < 16; i++) cellDisplay(i);
}
function cellDisplay(num) {
  let cell_obj = document.querySelector("#cell" + num);
  if (cell_obj.textContent === "0") cell_obj.classList.add("empty");
  else cell_obj.classList.remove("empty");
}
function displayAllNums() {
  for (let i = 0; i < 16; i++) document.querySelector("#cell" + i).textContent = boardArray[i];
}

// movement of the numbers in array
function move(from, to) {
  if (boardMovableArray[from] != false && boardMovableArray[to] != false) {
    if (boardArray[to] === 0) {
      console.log(`move, from: ${from} to: ${to}`);
      boardArray[to] = boardArray[from];
      boardArray[from] = 0;
      boardMovableArray[from] = true;
      boardMovableArray[to] = displayAllNums();
      allCellDisplay();
      console.log(boardArray);
    } else if (boardArray[from] === boardArray[to]) {
      boardArray[to] = boardArray[from] * 2;
      boardArray[from] = 0;
      boardMovableArray[to] = false;
    }
  }
}

function moveAllUp() {
  for (let i = 0; i <= 4; i++) for (let i = 0; i < 16; i++) moveUp(i);
  endMove();
}
function moveUp(num) {
  if (boardArray[num] != 0 && num >= 4) {
    move(num, num - 4);
  }
}

function moveAllDown() {
  for (let i = 0; i <= 4; i++) for (let i = 15; i >= 0; i--) moveDown(i);
  endMove();
}
function moveDown(num) {
  console.log(boardArray[num] != 0 && num <= 11);
  if (boardArray[num] != 0 && num <= 11) {
    move(num, num + 4);
  }
}

function moveAllRight() {
  for (let i = 0; i <= 4; i++) for (let i = 15; i >= 0; i--) moveRight(i);
  endMove();
}
function moveRight(num) {
  console.log(boardArray[num] != 0 && num != 3);
  if (boardArray[num] != 0 && num != 3 && num != 7 && num != 11 && num != 15) {
    move(num, num + 1);
  }
}
function moveAllLeft() {
  for (let i = 0; i <= 4; i++) for (let i = 0; i < 16; i++) moveLeft(i);
  endMove();
}
function moveLeft(num) {
  console.log(boardArray[num] != 0 && num != 0 && num != 4 && num != 8 && num != 12);
  if (boardArray[num] != 0 && num != 0 && num != 4 && num != 8 && num != 12) {
    move(num, num - 1);
  }
}
function endMove() {
  boardMovableArray.fill(true);
  addRandomNum();
  displayAllNums();
  allCellDisplay();
}

function addRandomNum() {
  let loopBool = true;
  while (loopBool) {
    const randNum = Math.floor(Math.random() * 16);
    console.log(`doing a loop with randNum: ${randNum} this will be: ${boardArray[randNum] == 2}`);
    if (boardArray[randNum] == 0) {
      loopBool = false;
      boardArray[randNum] = 2;
    }
  }
}
