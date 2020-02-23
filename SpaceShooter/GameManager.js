class GameManager {
  gameOver = false;
  constructor(player) {
    this.player = player;
  }
  update(dt) {
  }
  checkGameOver() {
    if (this.player.health <= 0) {
      // game lost
      this.gameOver = true;
    }
  }
}
