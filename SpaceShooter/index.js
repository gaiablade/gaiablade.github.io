// Main Section
const player = new Player();
let l_Time = null;
let lasers = [];
let enemies = [];
let enemy_spawner = new EnemySpawner();
let num_kills = 0;
let gm = null;

function createLaser(player) {
  lasers.push(new Laser(player));
}

function updateEnemySpawn() {
  Config.enemy_spawn_rate = 1 - num_kills / 100;
}

function start() {
  Config.entities = [];
  graphics.drawImage(i_ArrowKeys, 15, 8);
  graphics.drawImage(i_ZKey, Config.width - i_ZKey.width - 12, 20);
  player.draw(graphics);
  gm = new GameManager(player);
}

function update(dt) {
  player.update(dt);
  lasers.forEach((value) => {
    value.update(dt);
  })
  enemy_spawner.update(dt);
  enemies.forEach((value) => {
    value.update(dt);
  });
  updateEnemySpawn();
}

function draw(graphics) {
  graphics.fillStyle = "#3f3073";
  graphics.fillRect(0, 0, Config.width, Config.height);
  graphics.fillStyle = "#ffffff";
  graphics.fillRect(Config.width, 0, Config.statBarDimensions.width, Config.statBarDimensions.height);
  player.draw(graphics);
  lasers.forEach((value) => {
    value.draw(graphics);
  });
  graphics.drawImage(i_ArrowKeys, 15, 8);
  graphics.drawImage(i_ZKey, Config.width - i_ZKey.width - 12, 20);
  enemies.forEach((value) => {
    value.draw(graphics);
  });
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
  if (!gm.gameOver) window.requestAnimationFrame(loop);
}

start();

window.requestAnimationFrame(loop);
