const canvas = document.getElementById("game_canvas");
const graphics = game_canvas.getContext('2d');

// Images/Sprites:
const i_ArrowKeys = document.getElementById("arrow_keys");
const i_ZKey = document.getElementById("z_key");
const i_Ship = document.getElementById("ship");
const i_Enemy = document.getElementById('enemy');

const Config = {
  width: canvas.width,
  height: canvas.height,
  playerSpeed: 250,
  enemySpeed: 125,
  laserSpeed: 500,
  updateRate: {
    fps: 60,
    seconds: null
  },
  runningId: 0,
  entities: [],
  enemy_spawn_rate: 0.2,
  fire_delay: 0.2 // in ms
};
Config.updateRate.seconds = 1 / Config.updateRate.fps;
