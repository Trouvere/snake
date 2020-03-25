let field = document.createElement("div");
document.body.appendChild(field);
field.classList.add("field");

for (let i = 1; i < 101; i++) {
  let excel = document.createElement("div");
  field.appendChild(excel);
  excel.classList.add("excel");
}
let excel = document.getElementsByClassName("excel");
let x = 1,
  y = 10;
for (let i = 0; i < excel.length; i++) {
  if (x > 10) {
    x = 1;
    y--;
  }
  excel[i].setAttribute("posX", x);
  excel[i].setAttribute("posY", y);
  x++;
}
// random position snake, min=3
function generateSnake() {
  let posX = Math.round(Math.random() * (10 - 3) + 3);
  let posY = Math.round(Math.random() * (10 - 3) + 3);
  return [posX, posY];
}
let coordinates = generateSnake();
let snakeBody = [
  document.querySelector(
    '[posX="' + coordinates[0] + '"][posY="' + coordinates[1] + '"]'
  ),
  document.querySelector(
    '[posX="' + (coordinates[0] - 1) + '"][posY="' + coordinates[1] + '"]'
  ),
  document.querySelector(
    '[posX="' + (coordinates[0] - 2) + '"][posY="' + coordinates[1] + '"]'
  )
];
for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add("snakeBody");
}
snakeBody[0].classList.add("snakeHead");
// console.log(coordinates);
// console.log(snakeBody);
let mouse;

function createMouse() {
  function generateMouse() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 3) + 3);
    return [posX, posY];
  }
  let coordinatesMouse = generateMouse();
  //   console.log(coordinatesMouse);
  mouse = document.querySelector(
    '[posX="' + coordinatesMouse[0] + '"][posY="' + coordinatesMouse[1] + '"]'
  );
  while (mouse.classList.contains("snakeBody")) {
    let coordinatesMouse = generateMouse();
    mouse = document.querySelector(
      '[posX="' + coordinatesMouse[0] + '"][posY="' + coordinatesMouse[1] + '"]'
    );
  }
  mouse.classList.add("mouse");
}
createMouse();
