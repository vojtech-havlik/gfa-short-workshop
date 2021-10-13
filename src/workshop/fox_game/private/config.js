import { commandsForKarelTheFox } from "../script";

/*
ÚKOLY
- Obejít celou mapu po obvodu
- Vypnout po obvodu všechna světla, na která po cestě narazí
- Vypnout na celé mapě všechna světla
 */

export class Robot {
  constructor(imageSource, orientation, position) {
    let robotElement = document.createElement("img");
    robotElement.src = imageSource;
    robotElement.id = "robot";
    robotElement.alt = "robot";
    this.image = robotElement;
    this.orientation = orientation;
    this.position = {
      x: position && position.x ? position.x : 0,
      y: position && position.y ? position.y : 0
    };
    this.isTurnedOff = false;
  }
}

export class Game {
  constructor(boardSize, delay, robotPosition) {
    this.board = Array(boardSize)
      .fill()
      .map(() => Array(boardSize).fill(0));
    this.delay = delay;
    this.robot = new Robot("assets/foxOn.png", "right", robotPosition);
    this.loadLevel2();
    this.createBoard();
  }

  createBoard() {
    let gameSection = document.querySelector("#game");
    let table = document.createElement("table");
    for (let i = 0; i < this.board.length; i++) {
      let tableRow = document.createElement("tr");
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === 2) {
          let cell = document.createElement("td");
          cell.classList.add("lightsOn");
          tableRow.appendChild(cell);
        } else {
          tableRow.appendChild(document.createElement("td"));
        }
      }
      table.appendChild(tableRow);
    }
    gameSection.appendChild(table);
  }

  loadLevel1() {
    // empty map
  }

  loadLevel2() {
    // random turned on lights around the walls in room

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.isTileAtWall(i, j) && !this.isTileCorner(i, j)) {
          this.board[i][j] = Math.random() < 0.5 ? 2 : 0;
        }
      }
    }
  }

  isTileAtWall(x, y) {
    if (x === 0 || x === this.board.length - 1) {
      return true;
    }

    if (y === 0 || y === this.board.length - 1) {
      return true;
    }

    return false;
  }

  isTileCorner(x, y) {
    if (x === 0 || x === this.board.length - 1) {
      if (y === 0 || y === this.board.length - 1) {
        return true;
      }
    }
    return false;
  }
}

export function update() {
  if (game.robot.isTurnedOff === true) {
    return;
  }
  let htmlBoard = document.querySelector("table");
  let tile = htmlBoard
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  tile.appendChild(game.robot.image);
}

export function removeFromCurrentPos() {
  if (game.robot.isTurnedOff === true) {
    return;
  }
  let tile = document
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  tile.innerHTML = "";
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isInFrontOfWall() {
  if (game.robot.isTurnedOff) {
    return;
  }
  if (
    game.robot.orientation === "right" &&
    game.robot.position.y === game.board[game.robot.position.x].length - 1
  ) {
    return true;
  }
  if (game.robot.orientation === "left" && game.robot.position.y === 0) {
    return true;
  }
  if (game.robot.orientation === "up" && game.robot.position.x === 0) {
    return true;
  }
  if (
    game.robot.orientation === "down" &&
    game.robot.position.x === game.board.length - 1
  ) {
    return true;
  }
  return false;
}

export function isRoomLightsOn() {
  let htmlBoard = document.querySelector("#game table");
  let tile = htmlBoard
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  if (tile.classList.contains("lightsOn")) {
    return true;
  }
  return false;
}

export async function turnLightOff() {
  let htmlBoard = document.querySelector("#game table");
  let tile = htmlBoard
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  tile.classList = "";
  await sleep(game.delay);
}

export async function turnLightOn() {
  let htmlBoard = document.querySelector("#game table");
  let tile = htmlBoard
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  tile.classList.add("lightsOn");
  await sleep(game.delay);
}

export async function move() {
  if (isInFrontOfWall()) {
    game.robot.image.src = "assets/foxOff.png";
    game.robot.isTurnedOff = true;
    console.log("Karel the Fox crashed and turned off!");
    return;
  }

  removeFromCurrentPos();
  switch (game.robot.orientation) {
    case "right":
      game.robot.position.y++;
      break;
    case "left":
      game.robot.position.y--;
      break;
    case "up":
      game.robot.position.x--;
      break;
    case "down":
      game.robot.position.x++;
      break;
    default:
  }
  update();
  await sleep(game.delay);
}

async function turnLeft() {
  removeFromCurrentPos();
  let tile = document
    .querySelectorAll("tr")
    [game.robot.position.x].querySelectorAll("td")[game.robot.position.y];
  let currOrientation;
  game.robot.image.setAttribute("class", "");
  switch (game.robot.orientation) {
    case "right":
      currOrientation = "up";
      break;
    case "left":
      currOrientation = "down";
      break;
    case "up":
      currOrientation = "left";
      break;
    case "down":
      currOrientation = "right";
      break;
    default:
      console.log("unknown direction");
  }
  game.robot.orientation = currOrientation;
  game.robot.image.classList.add(currOrientation);
  tile.appendChild(game.robot.image);
  await sleep(game.delay);
}

export async function turnRight() {
  for (let i = 0; i < 3; i++) {
    turnLeft();
  }
  await sleep(game.delay);
}

async function main() {
  update();
  await sleep(1000);
  await commandsForKarelTheFox();
}

let game = new Game(10, 100, { x: 0, y: 0 });
main();
