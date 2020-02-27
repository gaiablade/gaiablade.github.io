const canvas = document.getElementById("game_canvas");
const graphics = game_canvas.getContext('2d');

// Images/Sprites:
const i_ArrowKeys = document.getElementById("arrow_keys");
const i_ZKey = document.getElementById("z_key");
const i_Ship = document.getElementById("ship");
const i_Enemy = document.getElementById('enemy');
const i_Retry = document.getElementById('replay_key');
const i_Explosion = document.getElementById('explosion');

// Animations:
const explosionParameters = new AnimationParameters(i_Explosion,
  [new AnimationTextureCoord(0.04, 0, 0),
    new AnimationTextureCoord(0.04, 64, 0),
    new AnimationTextureCoord(0.04, 128, 0),
    new AnimationTextureCoord(0.04, 128 + 64, 0),
    new AnimationTextureCoord(0.04, 0, 64),
    new AnimationTextureCoord(0.04, 64, 64),
    new AnimationTextureCoord(0.04, 128, 64),
    new AnimationTextureCoord(0.04, 128 + 64, 64),
  ], 64, 64);

const Config = {
  statBarDimensions: {
    width: 150, height: canvas.height
  },
  //width: canvas.width - Config.statBarDimensions.width,
  height: canvas.height,
  playerSpeed: 250,
  playerHealth: 50,
  enemySpeed: 125,
  laserSpeed: 500,
  updateRate: {
    fps: 60,
    seconds: null
  },
  runningId: 0,
  entities: [],
  enemySpawnRate: 0.5,
  fireDelay: 0.15, // in ms
  particleInterval: 0.5
};
Config.updateRate.seconds = 1 / Config.updateRate.fps;
Config.width = canvas.width - Config.statBarDimensions.width;

const fsExplosionParameters = new AnimationParameters(i_Explosion,
  [new AnimationTextureCoord(0.04, 0, 0),
    new AnimationTextureCoord(0.04, 64, 0),
    new AnimationTextureCoord(0.04, 128, 0),
    new AnimationTextureCoord(0.04, 128 + 64, 0),
    new AnimationTextureCoord(0.04, 0, 64),
    new AnimationTextureCoord(0.04, 64, 64),
    new AnimationTextureCoord(0.04, 128, 64),
    new AnimationTextureCoord(0.04, 128 + 64, 64),
  ], 64, 64);
