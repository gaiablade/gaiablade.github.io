class Laser {
  position = null;
  size = {x: 4, y: 10};
  constructor(player) {
    this.gm = player.gm;
    this.position = {x: player.position.x + (player.size.width / 2), y: player.position.y};
  }
  update(dt) {
    this.updatePosition(dt);
    this.checkCollision();
    if (this.position.y < 0) {
      delete this;
    }
  }
  draw(graphics) {
    graphics.fillStyle = "#1eff00";
    graphics.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
  updatePosition(dt) {
    this.position.y -= Math.ceil(Config.laserSpeed * dt);
  }
  checkCollision() {
    // Check for collision with enemy:
    this.gm.enemies.forEach((value, index) => {
      if (this.position.x >= value.position.x && this.position.x <= value.position.x + value.size.width) {
        if (this.position.y >= value.position.y && this.position.y <= value.position.y + value.size.height) {
          this.gm.animations.push(new Animation(explosionParameters, value.position.x, value.position.y))
          delete this.gm.enemies[index];
          this.gm.numKills++;
        }
      }
    });
  }
}
