class Entity {
  position = {x:0, y:0};
  velocity = {x:0, y:0};
  size = {width: 10, height: 10};
  health = Config.playerHealth;
  constructor() {
    this.id = Config.runningId++;
    Config.entities[this.id] = this;
  }
}
