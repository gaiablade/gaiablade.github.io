class EnemySpawner {
  constructor(gm) {
    this.gm = gm;
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
    this.gm.enemies.push(new Enemy(this.gm));
  }
}
