var selectedItem = 0;
var menuLengt = 2;

const UP_ARROW = 38;
const DOWN_ARROW = 40;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACE = 32;
const ENTER = 13;

document.onkeydown = function(e) {
  e = e || window.event;

  switch (e.keyCode) {
    case UP_ARROW:
      console.log("UP");
      changeMainMenu(-1);
      break;
    case DOWN_ARROW:
      console.log("DOWN");
      changeMainMenu(1);
      break;
  }
};

function changeMainMenu(delta) {
  selectedItem += delta;
  if (selectedItem < 0) selectedItem = 0;
  if (selectedItem == menuLengt) selectedItem = menuLengt - 1;

  $('.selected-item').removeClass('selected-item');
  $('#menu li').each(function (index){
      if(index == selectedItem) $(this).addClass('selected-item');
  });
  
}
