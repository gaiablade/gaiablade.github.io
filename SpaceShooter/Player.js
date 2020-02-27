class Player extends Entity {
  // Key-Bindings:
  keys = {
    left:  { key: "left",  polled: false, state: "x_movement", mod: -1 },
    right: { key: "right", polled: false, state: "x_movement", mod:  1 },
    up:    { key: "up",    polled: false, state: "y_movement", mod: -1 },
    down:  { key: "down",  polled: false, state: "y_movement", mod:  1 },
    z:     { key: "z",     polled: false, state: "fire",       mod:  1 },
    x:     { key: "x",     polled: false, state: "bomb",       mod:  1 },
  }
  polledActions = { x_movement: 0, y_movement: 0, fire: 0, bomb: 0 };

  // Dimensions:
  size = { width: 34, height: 37 };

  // Handle to input-handler:
  input_handler = null;

  // Lasers:
  silentDuration = 100;

  // Particles:
  particles = [];
  sinceLastParticle = Config.particleInterval;

  // Bombs:
  numBombs = 3;

  constructor(gm) {
    super();
    this.gm = gm;
    this.position.x = Config.width / 2;
    this.position.y = Config.height - 100;
    this.input_handler = new InputHandler(this);
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
    this.particles.forEach((value) => {
      value.draw(graphics);
    });
    graphics.drawImage(i_Ship, this.position.x, this.position.y);
  }

  fireLaser() {
    this.gm.createLaser();
  }

  checkCollisions() {
    this.gm.enemies.forEach((value, index) => {
      if (this.position.x < value.position.x + value.size.width && this.position.x + this.size.width > value.position.x
      && this.position.y < value.position.y + value.size.height && this.position.y + this.size.height > value.position.y) {
        this.health -= 5;
        delete this.gm.enemies[index];
      }
    });
  }

  updateInput() {
    // Handle movement:
    Object.values(this.keys).forEach((key, index) => {
      if (key.polled) {
        this.polledActions[key.state] += key.mod;
      }
    });
  }

  updateAttack() {
    if (this.keys.z.polled && this.silentDuration >= Config.fireDelay) {
      this.silentDuration = 0;
      this.fireLaser();
    }
    if (this.keys.x.polled && this.numBombs > 0) {
      gm.bombScreen();
      this.numBombs--;
      this.keys.x.polled = false;
    }
  }

  updateMovement(dt) {
    this.sinceLastParticle += dt;
    this.velocity.x += Math.ceil(this.polledActions.x_movement * dt * Config.playerSpeed);
    this.velocity.y += Math.ceil(this.polledActions.y_movement * dt * Config.playerSpeed);
    if (this.polledActions.x_movement != 0 && this.polledActions.y_movement != 0) {
      this.velocity.x /= Math.sqrt(2);
      this.velocity.y /= Math.sqrt(2);
    }
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
