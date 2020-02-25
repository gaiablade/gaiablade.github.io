class Particle {
  velocity = {x: 0, y: 0};
  position = {x: 0, y: 0};
  time = 0;
  opacity = 1.0;
  constructor(entity) {
    // particles will move in opposite direction of player
    this.entity = entity;
    this.position.x = this.entity.position.x + this.entity.size.width / 2;
    this.position.y = this.entity.position.y + this.entity.size.height - 10;
    this.velocity.x = this.entity.velocity.x * -0.3 + ((Math.random() - 0.5) * 0.3);
    this.velocity.y = this.entity.velocity.y * -0.3;
  }
  movementFunc() {
    this.opacity = Math.sqrt(this.time * -1 + 0.4);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (Number.isNaN(this.opacity)) this.entity.particles.shift();
  }
  update(dt) {
    this.time += dt;
    this.movementFunc();
  }
  draw(graphics) {
    graphics.globalAlpha = this.opacity;
    graphics.fillStyle = '#FFFFFF';
    graphics.fillRect(this.position.x, this.position.y, 5, 5);
    graphics.globalAlpha = 1.0;
  }
}
