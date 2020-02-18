class Enemy extends Entity {
  size = {width:22, height:23};
  constructor() {
    super();
    let x_pos = Math.floor(Math.random() * Config.width);
    this.position = {x: x_pos, y: -10};
  }
  update(dt) {
    this.position.y += Math.ceil(dt * Config.enemySpeed);
    if (this.position.y > Config.height) {
      delete this;
    }
  }
  draw(graphics) {
    graphics.drawImage(i_Enemy, this.position.x, this.position.y);
  }
}
