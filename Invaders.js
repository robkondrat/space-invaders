class Invaders {
  constructor(alienImage, rowsCount) {
    this.alienImage = alienImage;
    this.rowsCount = rowsCount;
    this.direction = 0;
    this.y = 40;
    this.aliens = this.initializeAliens();
    this.bullets = [];

    this.speed = 0.2;
  }

  update() {
    for (let alien of this.aliens) {
      if (this.direction == 0) {
        alien.x += this.speed;
      } else if (this.direction == 1) {
        alien.x -= this.speed;
      }
    }

    if (this.hasChangedDirection()) {
      this.moveAlienDown();
    }
  }

  hasChangedDirection() {
    for (let alien of this.aliens) {
      if (alien.x >= width - 40) {
        this.direction = 1;
        return true;
      } else if (alien.x <= 20) {
        this.direction = 0;
        return true;
      }
    }
    return false;
  }

  moveAlienDown() {
    for (let alien of this.aliens) {
      alien.y += 10;
    }
  }

  initializeAliens() {
    let aliens = [];
    let y = 40;
    for (let i = 0; i < this.rowsCount; i++) {
      for (let x = 40; x < width - 40; x += 30) {
        aliens.push(new Alien(x, y, this.alienImage))
      }
      y += 40;
    }
    return aliens;
  }

  draw() {
    for (let alien of this.aliens) {
      alien.draw();
    }
  }
}