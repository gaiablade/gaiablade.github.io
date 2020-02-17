const canvas = document.getElementById("game_canvas");
const graphics = game_canvas.getContext('2d');
const i_ArrowKeys = document.getElementById("arrow_keys");
const i_ZKey = document.getElementById("z_key");
const i_Ship = document.getElementById("ship");

const Config = {
  width: canvas.width,
  height: canvas.height,
  playerSpeed: 250,
  updateRate: {
    fps: 60,
    seconds: null
  }
};
Config.updateRate.seconds = 1 / Config.updateRate.fps;

console.log(Config);
console.log(i_ArrowKeys.width, i_ArrowKeys.height);

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

class Entity {
  position = {x:0, y:0};
  velocity = {x:0, y:0};
  constructor() {
  }
  update(dt) {
  }
}

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

const player = new Player();
const game = new InputHandler(player);
let l_Time = null;

function start() {
  graphics.drawImage(i_ArrowKeys, 15, 8);
  graphics.drawImage(i_ZKey, Config.width - i_ZKey.width - 12, 20);
  player.draw(graphics);
}

function update(dt) {
  game.update(dt);
}

function draw(graphics) {
  graphics.fillStyle = '#FFFFFF';
  graphics.fillRect(0, 0, Config.width, Config.height);
  graphics.drawImage(i_ArrowKeys, 15, 8);
  graphics.drawImage(i_ZKey, Config.width - i_ZKey.width - 12, 20);
  player.draw(graphics);
}

function loop(c_Time) {
  c_Time /= 1000;
  if (l_Time === null) {
    l_Time = c_Time;
  }
  let d_Time = c_Time - l_Time;
  while (d_Time > Config.updateRate.seconds) {
    update(Config.updateRate.seconds);
    draw(graphics);
    d_Time -= Config.updateRate.seconds;
    l_Time = c_Time;
  }
  window.requestAnimationFrame(loop);
}

start();

window.requestAnimationFrame(loop);
