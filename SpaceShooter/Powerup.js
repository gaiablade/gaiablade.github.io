class Powerup {
  position = {x: 100, y: 0};
  size = {width: 20, height: 20};
  time = 0;
  velocity = {x: 0, y: 0};
  sprite = null;

  constructor(position) {
    this.position = position;
  }

  update(dt) {
    this.time += dt;
    this.velocity.y = 1 * this.time;
    this.position.y += this.velocity.y;
  }

  draw(graphics) {
    graphics.drawImage(this.sprite, this.position.x, this.position.y, this.size.width, this.size.height);
  }
}

class BombPowerup extends Powerup {
  constructor(position, gm) {
    super(position);
    this.gm = gm;
    this.sprite = i_BombPowerup;
  }

  collisionFunc() {
    gm.player.numBombs++;
  }
}

class SpeedPowerup extends Powerup {
  constructor(position, gm) {
    super(position);
    this.gm = gm;
    this.sprite = i_SpeedPowerup;
  }

  collisionFunc() {
    Config.laserColor = "#1111FF";
    Config.fireDelay = 0.001;
  }
}
