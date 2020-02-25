class GameManager {
  gameOver = false;
  player = null;
  lastTime = null;
  lasers = [];
  enemies = [];
  enemySpawner = null;
  numKills = 0;

  constructor() {
    this.player = new Player(this);
    this.lastTime = 0;
    this.enemySpawner = new EnemySpawner(this);
  }

  update(dt) {
    this.enemySpawner.update(dt);
    this.player.update(dt);
    this.enemies.forEach((enemy) => {
      enemy.update(dt);
    });
    this.lasers.forEach((laser) => {
      laser.update(dt);
    });
  }

  draw(graphics) {
    this.enemies.forEach((enemy) => {
      enemy.draw(graphics);
    });
    this.lasers.forEach((laser) => {
      laser.draw(graphics);
    })
    graphics.fillStyle = "#ffffff";
    graphics.fillRect(Config.width, 0, Config.statBarDimensions.width, Config.statBarDimensions.height);
    graphics.font = "17px Arial";
    graphics.fillStyle = '#000000';
    graphics.fillText(`Stats`, Config.width + 50, 20);
    graphics.fillText(`# of kills: ${this.numKills}`, Config.width + 15, 70);
    this.player.draw(graphics);
  }

  checkGameOver() {
    if (this.player.health <= 0) {
      // game lost
      this.gameOver = true;
    }
  }

  bombScreen() {
    this.enemies = [];
  }

  createLaser() {
    this.lasers.push(new Laser(this.player));
  }
}
