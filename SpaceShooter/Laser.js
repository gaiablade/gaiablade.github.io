class Laser {
  position = null;
  size = {x: 4, y: 10};
  constructor(player) {
    this.position = {x: player.position.x + (player.size.width / 2), y: player.position.y};
  }
  update(dt) {
    this.position.y -= Math.ceil(Config.laserSpeed * dt);
  }
  draw(graphics) {
    graphics.fillStyle = "#1eff00";
    graphics.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
