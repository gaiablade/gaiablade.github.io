class Enemy extends Entity {
  time = 0;
  size = {width:22, height:23};
  sinceLastParticle = Config.particleInterval;
  particles = [];
  constructor(gm) {
    super();
    this.gm = gm;
    let x_pos = Math.floor(Math.random() * (Config.width - this.size.width));
    this.position = {x: x_pos, y: -10};
    this.velocity.x = 2 * (Math.random() - 0.5);
  }
  update(dt) {
    this.time += dt;
    this.sinceLastParticle += dt;
    this.particles.forEach((value) => {
      value.update(dt);
    });
    //this.position.y += Math.ceil(dt * Config.enemySpeed);
    this.position.x = this.position.x + this.velocity.x;
    this.position.y = Math.ceil(this.position.y + this.velocity.y);
    this.speedFunc();
    if (this.position.y > Config.height) {
      //delete this;
      this.gm.enemies.shift();
    }
    if (this.sinceLastParticle > Config.particleInterval) {
      this.particles.push(new Particle(this));
      this.sinceLastParticle = 0;
    }
  }
  draw(graphics) {
    this.particles.forEach((value) => {
      value.draw(graphics);
    });
    graphics.drawImage(i_Enemy, this.position.x, this.position.y);
  }
  speedFunc() {
    // Quadratic vertical speed:
    this.velocity.y = ((1.8 * (this.time - 0.8)) ** 4);
  }
}
