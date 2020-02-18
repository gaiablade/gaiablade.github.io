class Player extends Entity {
  keys = {
    left: {
      key: "left",
      polled: false,
      state: "x_movement",
      mod: -1
    },
    right: {
      key: "right",
      polled: false,
      state: "x_movement",
      mod: 1
    },
    up: {
      key: "up",
      polled: false,
      state: "y_movement",
      mod: -1
    },
    down: {
      key: "down",
      polled: false,
      state: "y_movement",
      mod: 1
    },
  };
  actions = {
    z: {
      key: "z",
      polled: false,
      state: "fire",
    }
  }
  polledActions = {
    x_movement: 0,
    y_movement: 0,
    fire: false
  };
  size = {
    width: 34,
    height: 37
  };
  input_handler = null;
  lasers = null;
  silent_duration = 100;
  constructor() {
    super();
    this.position.x = Config.width / 2;
    this.position.y = Config.height - 100;
    this.input_handler = new InputHandler(this);
    this.lasers = [];
  }
  update(dt) {
    this.silent_duration += dt;
    // Handle movement:
    Object.entries(this.keys).forEach(([key, value]) => {
      const mapping = this.keys[key];
      if (mapping.polled) {
        this.polledActions[mapping.state] += mapping.mod;
      }
    });
    // Math.ceil is used to ensure whole number movement:
    this.position.x += Math.ceil(this.polledActions.x_movement * dt * Config.playerSpeed);
    this.position.y += Math.ceil(this.polledActions.y_movement * dt * Config.playerSpeed);
    this.polledActions.x_movement = 0;
    this.polledActions.y_movement = 0;
    if (this.actions.z.polled && this.silent_duration >= Config.fire_delay) {
      this.silent_duration = 0;
      this.fireLaser();
    }
  }
  draw(graphics) {
    graphics.drawImage(i_Ship, this.position.x, this.position.y);
  }
  fireLaser() {
    createLaser(this);
  }
}
