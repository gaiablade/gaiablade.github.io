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
    }
  }
  polledActions = {
    x_movement: 0,
    y_movement: 0,
    fire: false
  }
  constructor() {
    super();
    this.position.x = Config.width / 2;
    this.position.y = Config.height - 100;
  }
  update(dt) {
    // Handle movement:
    Object.entries(this.keys).forEach(([key, value]) => {
      const mapping = this.keys[key];
      if (mapping.polled) {
        this.polledActions[mapping.state] += mapping.mod;
      }
    });
    this.position.x += this.polledActions.x_movement * dt * Config.playerSpeed;
    this.position.y += this.polledActions.y_movement * dt * Config.playerSpeed;
    this.polledActions.x_movement = 0;
    this.polledActions.y_movement = 0;
  }
  draw(graphics) {
    graphics.drawImage(i_Ship, this.position.x, this.position.y);
  }
}
