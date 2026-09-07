const player = document.getElementById("player");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const objective = document.getElementById("objective");

let playerX = 50;
let playerY = 55;
let gameStarted = false;

const speed = 1.5;

// Start game
startButton.addEventListener("click", () => {
  gameStarted = true;
  startScreen.style.display = "none";
  objective.textContent = "Explore the abandoned house...";
});

// Move player
function movePlayer(direction) {
  if (!gameStarted) return;

  if (direction === "up") {
    playerY -= speed;
  }

  if (direction === "down") {
    playerY += speed;
  }

  if (direction === "left") {
    playerX -= speed;
  }

  if (direction === "right") {
    playerX += speed;
  }

  // Keep player inside screen
  playerX = Math.max(5, Math.min(95, playerX));
  playerY = Math.max(10, Math.min(90, playerY));

  player.style.left = playerX + "%";
  player.style.top = playerY + "%";
}

// Touch controls
document.getElementById("up").addEventListener("touchstart", (e) => {
  e.preventDefault();
  movePlayer("up");
});

document.getElementById("down").addEventListener("touchstart", (e) => {
  e.preventDefault();
  movePlayer("down");
});

document.getElementById("left").addEventListener("touchstart", (e) => {
  e.preventDefault();
  movePlayer("left");
});

document.getElementById("right").addEventListener("touchstart", (e) => {
  e.preventDefault();
  movePlayer("right");
});

// Mouse support for testing
document.getElementById("up").addEventListener("click", () => {
  movePlayer("up");
});

document.getElementById("down").addEventListener("click", () => {
  movePlayer("down");
});

document.getElementById("left").addEventListener("click", () => {
  movePlayer("left");
});

document.getElementById("right").addEventListener("click", () => {
  movePlayer("right");
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
    movePlayer("up");
  }

  if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
    movePlayer("down");
  }

  if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
    movePlayer("left");
  }

  if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
    movePlayer("right");
  }
});
