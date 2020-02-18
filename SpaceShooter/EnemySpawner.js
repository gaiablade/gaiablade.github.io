class EnemySpawner {
  constructor() {
    this.since_spawn = Config.enemy_spawn_rate;
  }
  update(dt) {
    this.since_spawn += dt;
    if (this.since_spawn >= Config.enemy_spawn_rate) {
      this.spawnEnemy();
      this.since_spawn = 0;
    }
  }
  spawnEnemy() {
    enemies.push(new Enemy());
  }
}
