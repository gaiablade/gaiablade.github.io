class AnimationTextureCoord {
  frameDuration = 0;
  x = 0;
  y = 0;
  constructor(duration, x, y) {
    this.frameDuration = duration;
    this.x = x;
    this.y = y;
  }
}

class AnimationParameters {
  texture = null;
  textureCoords = null;
  dimensions = {width: 0, height: 0};
  constructor(texture, array, width, height) {
    this.texture = texture;
    this.textureCoords = array;
    this.dimensions.width = width;
    this.dimensions.height = height;
  }
}

class Animation {
  position = {x: 0, y: 0};
  finished = false;

  constructor(parameters, x, y) {
    this.data = parameters;
    this.frameCounter = parameters.textureCoords[0].frameDuration;
    this.length = parameters.textureCoords.length;
    this.currentTexture = 0;
    this.position.x = x;
    this.position.y = y;
  }

  update(dt) {
    this.frameCounter -= dt;
    if (this.frameCounter <= 0) {
      this.currentTexture++;
      if (this.currentTexture >= this.data.textureCoords.length) {
        this.finished = true;
        return;
      }
      this.frameCounter = this.data.textureCoords[this.currentTexture].frameDuration;
    }
  }

  draw(graphics) {
    const texCoord = this.data.textureCoords[this.currentTexture];
    const dimensions = this.data.dimensions;
    graphics.drawImage(this.data.texture, texCoord.x, texCoord.y, dimensions.width, dimensions.height, this.position.x, this.position.y, dimensions.width, dimensions.height);
  }
}