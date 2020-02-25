class InputHandler {
  keyBindings = {
    movement: {
      37: { key: "left",  state: "x_movement", mod: -1 },
      39: { key: "right", state: "x_movement", mod:  1 },
      38: { key: "up",    state: "y_movement", mod: -1 },
      40: { key: "down",  state: "y_movement", mod:  1 }
    },
    actions: {
      90: { key: "z", state: "fire" },
      88: { key: "x", state: "bomb" }
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
      const mapping = this.keyBindings.actions[event.keyCode];
      this.player.actions[mapping.key].polled = true;
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
    if (this.keyBindings.actions.hasOwnProperty(event.keyCode)) {
      const mapping = this.keyBindings.actions[event.keyCode];
      this.player.actions[mapping.key].polled = false;
    }
  }
  update(dt) {
    this.player.update(dt);
  }
}
