class EnemySpawner {
  constructor() {
    this.sinceSpawn = Config.enemySpawnRate;
  }
  update(dt) {
    this.sinceSpawn += dt;
    if (this.sinceSpawn >= Config.enemySpawnRate) {
      this.spawnEnemy();
      this.sinceSpawn = 0;
    }
  }
  spawnEnemy() {
    enemies.push(new Enemy());
  }
}
