class GameManager {
  gameOver = false;
  player = null;
  lastTime = null;
  lasers = [];
  enemies = [];
  enemySpawner = null;
  numKills = 0;
  upFrames = 0;
  globalUpTime = 0; // in seconds
  num_Minutes = 0;
  num_Seconds = 0;
  str_Minutes = "";
  str_Seconds = "";
  score = 0;
  animations = [];

  constructor() {
    this.player = new Player(this);
    this.lastTime = 0;
    this.enemySpawner = new EnemySpawner(this);
    window.addEventListener("keydown", (event) => this.keydown(event), false);
  }

  update(dt) {
    if (this.gameOver) {
      return;
    }
    // Update total number of frames that have passed:
    this.upFrames += dt;
    // Calculate up-time using the number of frames: (in seconds)
    this.globalUpTime = Math.floor(this.upFrames / 60 * 100);

    // Spawn a new enemy if interval has passed:
    this.enemySpawner.update(dt);

    // Check for player movement, attacks, etc.:
    this.player.update(dt);

    // Check for enemy movement:
    this.enemies.forEach((enemy) => {
      enemy.update(dt);
    });

    // Move lasers and check for collision with enemies:
    this.lasers.forEach((laser) => {
      laser.update(dt);
    });

    // Update Animations:
    this.animations.forEach((animation) => {
      animation.update(dt);
    });

    this.checkGameOver();

    // Calculations:
    this.num_Seconds = Math.floor(this.globalUpTime % 60);
    this.num_Minutes = Math.floor(this.globalUpTime / 60);
    this.str_Seconds = (this.num_Seconds < 10) ? "0" + this.num_Seconds : String(this.num_Seconds);
    this.str_Minutes = (this.num_Minutes < 10) ? "0" + this.num_Minutes : String(this.num_Minutes);
    this.score = Math.floor(30 * this.numKills + this.num_Seconds);
    Config.enemySpawnRate = 0.5 - 0.01 * Math.floor(this.numKills / 5);
  }

  draw(graphics) {
    // Draw player, enemies, particles, and lasers:
    this.player.draw(graphics);
    this.enemies.forEach((enemy) => {
      enemy.draw(graphics);
    });
    this.lasers.forEach((laser) => {
      laser.draw(graphics);
    })
    this.animations.forEach((animation) => {
      if (!animation.finished) {
        animation.draw(graphics);
      }
    })

    // Clear the stat bar on the right:
    graphics.fillStyle = "#ffffff";
    graphics.fillRect(Config.width, 0, Config.statBarDimensions.width, Config.statBarDimensions.height);

    // Configure text rendering:
    graphics.font = "17px Arial";
    graphics.fillStyle = '#000000';

    // Display stats:
    graphics.fillText(`Stats`, Config.width + 50, 20);
    graphics.fillText(`HP: ${this.player.health}`, Config.width + 15, 50);
    graphics.fillText(`# of kills: ${this.numKills}`, Config.width + 15, 70);
    graphics.fillText(`Time: ${this.str_Minutes}:${this.str_Seconds}`, Config.width + 15, 90);
    graphics.fillText(`Score: ${this.score}`, Config.width + 15, 110);
    graphics.fillText(`Enemies: ${this.enemies.length}`, Config.width + 15, 130);
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

  keydown(event) {
    if (this.gameOver) {
      if (event.keyCode == 82) {
        this.gameOver = false;
        this.player = new Player(this);
        this.enemies = [];
        this.score = 0;
        this.upFrames = 0;
      }
    }
  }
}
