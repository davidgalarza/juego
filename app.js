var selectedItem = 0;
var menuLengt = 2;

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
  }
};

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
