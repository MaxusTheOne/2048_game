"use strict";
window.addEventListener("load", start);

function start() {
  for (let i = 0; i < 16; i++) createCells(i);
  allCellDisplay();
}

function createCells(num) {
  console.log(`createCells`);
  let cellElement = /*html*/ `
    <div id="cell${num}" class="cell_obj">${num}</div>
  `;
  document.querySelector("#board").insertAdjacentHTML("beforeend", cellElement);
}

function allCellDisplay() {
  for (let i = 0; i < 16; i++) cellDisplay(i);
}
function cellDisplay(num) {
  let cell_obj = document.querySelector("#cell" + num);
  if (cell_obj.textContent == 0) cell_obj.classList.add("empty");
}
