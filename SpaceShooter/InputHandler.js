class InputHandler {
  keyBindings = {
    movement: {
      37: { key: "left", state: "x_movement", mod: -1 },
      39: { key: "right", state: "x_movement", mod: 1 },
      38: { key: "up", state: "y_movement", mod: -1 },
      40: { key: "down", state: "y_movement", mod: 1 }
    },
    actions: {
      90: { key: "z", state: "fire_1"},
      88: { key: "x", state: "fire_2"}
    }
  }
  constructor(player) {
    this.player = player;
    window.addEventListener("keydown", (event) => this.keydown(event), false);
    window.addEventListener("keyup", (event) => this.keyup(event), false);
  }
  keydown(event) {
    if (this.keyBindings.actions.hasOwnProperty(event.keyCode)) {
      if (event.repeat) {
        return;
      }
    }
    if (this.keyBindings.movement.hasOwnProperty(event.keyCode)) {
      this.player.keys[this.keyBindings.movement[event.keyCode].key].polled = true;
    }
  }
  keyup(event) {
    if (this.keyBindings.movement.hasOwnProperty(event.keyCode)) {
      const mapping = this.keyBindings.movement[event.keyCode];
      this.player.keys[mapping.key].polled = false;
    }
  }
  update(dt) {
    this.player.update(dt);
  }
}
