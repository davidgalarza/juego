var selectedItem = 0;
var menuLengt = 2;
var level = 5;
var levelInfo = levels[level];

const UP_ARROW = 38;
const DOWN_ARROW = 40;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACE = 32;
const ENTER = 13;

const Screens = {
  MAIN: "main-screen",
  PLAY: "play-screen",
  CONTROLS: "controls-screen"
};

var actualScreen = Screens.MAIN;

goToSreeen(actualScreen);

// MAIN Screen Utils

function changeMainMenu(delta) {
  selectedItem += delta;
  if (selectedItem < 0) selectedItem = 0;
  if (selectedItem == menuLengt) selectedItem = menuLengt - 1;

  $("#main-screen .selected-item").removeClass("selected-item");
  $("#menu li").each(function(index) {
    if (index == selectedItem) $(this).addClass("selected-item");
  });
}

function goToSreeen(screenToShow) {
  Object.values(Screens).forEach(screen => {
    $(`#${screen}`).hide();
  });

  $(`#${screenToShow}`).show();

  actualScreen = screenToShow;
  console.log(actualScreen);
}

function getPageForIndexMenu(index) {
  if (index == 0) return Screens.PLAY;
  if (index == 1) return Screens.CONTROLS;
}

/*
  PLAYER SCREEN
*/

// CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lightWorld = true;

// ===== Elements ====

var bryan = new Block(levelInfo[0][0], levelInfo[0][1], 26, 49, 1);

// WORLD
var blocks = levelInfo[2].map(
  blocInfo =>
    new Block(blocInfo[0], blocInfo[1], blocInfo[2], blocInfo[3], blocInfo[4])
);
// Prize

var prize = new Block(levelInfo[1][0], levelInfo[1][1], 20, 20, 1);


buildWorld();


function buildBlock(block) {
  ctx.beginPath();
  ctx.rect(block.x, block.y, block.width, block.height);
  ctx.fillStyle = block.light ? "#333" : "rgba(235, 235, 235)";
  ctx.fill();
}

function walkBryan(dx) {
  bryan.x += dx;
  buildWorld();
}


function buildWorld() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < blocks.length; i++) {
    buildBlock(blocks[i]);
  }

  buildBlock(bryan);
  buildBlock(prize);

  ctx.closePath();
}


function chekBryanY(){
  
}


// KEYBOARD EVENTS

document.onkeydown = function(e) {
  e = e || window.event;

  if (actualScreen == Screens.MAIN) {
    switch (e.keyCode) {
      case UP_ARROW:
        changeMainMenu(-1);
        break;
      case DOWN_ARROW:
        changeMainMenu(1);
        break;
      case ENTER:
        goToSreeen(getPageForIndexMenu(selectedItem));
        break;
    }
  } else if (actualScreen == Screens.CONTROLS) {
    switch (e.keyCode) {
      case ENTER:
        goToSreeen(Screens.MAIN);
        break;
    }
  } else if (actualScreen == Screens.PLAY) {
    switch (e.keyCode) {
      case RIGHT_ARROW:
        walkBryan(20);
        break;
      case LEFT_ARROW:
        walkBryan(-20);
        break;
      case UP_ARROW:
        jumpBryan();
        break;
    }
  }
};
