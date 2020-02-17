// Main Section
const player = new Player();
const game = new InputHandler(player);
let l_Time = null;

function start() {
  Config.entities = [];
  graphics.drawImage(i_ArrowKeys, 15, 8);
  graphics.drawImage(i_ZKey, Config.width - i_ZKey.width - 12, 20);
  player.draw(graphics);
}

function update(dt) {
  game.update(dt);
}

function draw(graphics) {
  //graphics.fillStyle = '#FFFFFF';
  graphics.fillStyle = "#555555";
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
