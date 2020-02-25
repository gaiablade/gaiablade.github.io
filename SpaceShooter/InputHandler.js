class InputHandler {
  keyBindings = {
    37: { key: "left"  },
    39: { key: "right" },
    38: { key: "up"    },
    40: { key: "down"  },
    90: { key: "z"     },
    88: { key: "x"     }
  };
  constructor(player) {
    this.player = player;
    window.addEventListener("keydown", (event) => this.keydown(event), false);
    window.addEventListener("keyup", (event) => this.keyup(event), false);
  }
  keydown(event) {
    if (event.repeat) return;
    if (this.keyBindings.hasOwnProperty(event.keyCode)) {
      const mapping = this.keyBindings[event.keyCode];
      this.player.keys[mapping.key].polled = true;
    }
  }
  keyup(event) {
    if (this.keyBindings.hasOwnProperty(event.keyCode)) {
      const mapping = this.keyBindings[event.keyCode];
      this.player.keys[mapping.key].polled = false;
    }
  }
  update(dt) {
    this.player.update(dt);
  }
}
