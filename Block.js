const Touches = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
    NONE: 'NONE' 
}

class Block {
  constructor(x, y, width, height, light) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.light = light;
  }

}
