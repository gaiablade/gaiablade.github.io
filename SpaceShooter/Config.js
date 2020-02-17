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
  },
  runningId: 0,
  entities: []
};
Config.updateRate.seconds = 1 / Config.updateRate.fps;
