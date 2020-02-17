class Entity {
  position = {x:0, y:0};
  velocity = {x:0, y:0};
  constructor() {
    this.id = Config.runningId++;
    Config.entities[this.id] = this;
  }
  update(dt) {
  }
}
