class Laser {
  position = null;
  size = {width: Config.laserWidth, height: Config.laserHeight};
  collided = false;
  constructor(player) {
    this.gm = player.gm;
    this.position = {x: player.position.x + (player.size.width / 2), y: player.position.y};
  }
  update(dt) {
    this.updatePosition(dt);
    this.checkCollision();
  }
  draw(graphics) {
    graphics.fillStyle = "#1eff00";
    graphics.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
  updatePosition(dt) {
    this.position.y -= Math.ceil(Config.laserSpeed * dt);
  }
  checkCollision() {
    // Check for collision with enemy:
    this.gm.enemies.forEach((enemy, index) => {
      if (this.position.x < enemy.position.x + enemy.size.width && this.position.x + this.size.width > enemy.position.x) {
        if (this.position.y < enemy.position.y + enemy.size.height && this.position.y + this.size.height > enemy.position.y) {
          this.gm.animations.push(new Animation(explosionParameters, enemy.position.x, enemy.position.y))
          delete this.gm.enemies[index];
          this.gm.numKills++;
          this.collided = true;
        }
      }
    })
  }
}
