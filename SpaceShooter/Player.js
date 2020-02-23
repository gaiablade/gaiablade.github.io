class Player extends Entity {
  keys = {
    left: { key: "left", polled: false, state: "x_movement", mod: -1 },
    right: { key: "right", polled: false, state: "x_movement", mod: 1 },
    up: { key: "up", polled: false, state: "y_movement", mod: -1 },
    down: { key: "down", polled: false, state: "y_movement", mod: 1 },
  };
  actions = {
    z: { key: "z", polled: false, state: "fire", }
  }
  polledActions = { x_movement: 0, y_movement: 0, fire: false };
  size = { width: 34, height: 37 };
  input_handler = null;
  lasers = null;
  silentDuration = 100;
  constructor() {
    super();
    this.position.x = Config.width / 2;
    this.position.y = Config.height - 100;
    this.input_handler = new InputHandler(this);
    this.lasers = [];
  }
  update(dt) {
    this.silentDuration += dt;
    this.updateInput();
    this.updateMovement(dt);
    this.updateAttack();
    this.checkCollisions();
  }
  draw(graphics) {
    graphics.drawImage(i_Ship, this.position.x, this.position.y);
    graphics.font = "17px Arial";
    graphics.fillStyle = '#000000';
    graphics.fillText(`HP: ${this.health}`, Config.width + 15, 30);
  }
  fireLaser() {
    createLaser(this);
  }
  checkCollisions() {
    enemies.forEach((value, index) => {
      if (this.position.x < value.position.x + value.size.width && this.position.x + this.size.width > value.position.x
      && this.position.y < value.position.y + value.size.height && this.position.y + this.size.height > value.position.y) {
        this.health -= 5;
        delete enemies[index];
      }
    });
  }
  updateInput() {
    // Handle movement:
    Object.entries(this.keys).forEach(([key, value]) => {
      const mapping = this.keys[key];
      if (mapping.polled) {
        this.polledActions[mapping.state] += mapping.mod;
      }
    });
  }
  updateAttack() {
    if (this.actions.z.polled && this.silentDuration >= Config.fireDelay) {
      this.silentDuration = 0;
      this.fireLaser();
    }
  }
  updateMovement(dt) {
    this.position.x += Math.ceil(this.polledActions.x_movement * dt * Config.playerSpeed);
    this.position.y += Math.ceil(this.polledActions.y_movement * dt * Config.playerSpeed);

    // Check if player is out of bounds of canvas:
    if (this.position.x > Config.width - this.size.width) {
      this.position.x = Config.width - this.size.width;
    }
    else if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    else if (this.position.y > Config.height - this.size.height) {
      this.position.y = Config.height - this.size.height;
    }
    this.polledActions.x_movement = 0;
    this.polledActions.y_movement = 0;
  }
}
