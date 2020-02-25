class Player extends Entity {
  // Key-Bindings:
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

  // Dimensions:
  size = { width: 34, height: 37 };

  // Handle to input-handler:
  input_handler = null;

  // Lasers:
  lasers = null;
  silentDuration = 100;

  // Particles:
  particles = [];
  sinceLastParticle = Config.particleInterval;

  constructor() {
    super();
    this.position.x = Config.width / 2;
    this.position.y = Config.height - 100;
    this.input_handler = new InputHandler(this);
    this.lasers = [];
  }
  update(dt) {
    this.particles.forEach((value) => {
      value.update(dt);
    });
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
    graphics.fillText(`HP: ${this.health}`, Config.width + 15, 50);
    this.particles.forEach((value) => {
      value.draw(graphics);
    });
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
    this.sinceLastParticle += dt;
    this.velocity.x += Math.ceil(this.polledActions.x_movement * dt * Config.playerSpeed);
    this.velocity.y += Math.ceil(this.polledActions.y_movement * dt * Config.playerSpeed);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.sinceLastParticle > Config.particleInterval) {
      this.particles.push(new Particle(this));
      this.sinceLastParticle = 0;
    }

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
    this.velocity.x = 0;
    this.velocity.y = 0;
  }
}
