import * as Maths from './maths';

class CanvasNode {
  constructor(root, index) {
    // animated scene node

    this.index = index;
    this.root = root;
    this.direction = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 5 + 5;
    this.radius = 100;
    this.vector = new Maths.Vector(Math.cos(this.direction) * this.speed, Math.sin(this.direction) * this.speed);

    // set position

    const x = (root.width + this.radius * 2) * Math.random() - this.radius;
    const y = (root.height + this.radius * 2) * Math.random() - this.radius;
    this.position = new Maths.Vector(x, y);
    this.offset = new Maths.Vector(Math.random() * 50, Math.random() * 50);
    this.end = new Maths.Vector(0, 0);
  }

  update(delta) {
    // update node position

    this.position.x = Maths.wrap(this.position.x + this.vector.x * delta, -this.radius, this.root.width + this.radius);
    this.position.y = Maths.wrap(this.position.y + this.vector.y * delta, -this.radius, this.root.height + this.radius);
    this.end.x = this.position.x + this.offset.x;
    this.end.y = this.position.y + this.offset.y;
  }

  draw(ctx, siblings) {
    // draw node

    let count = 0;

    for (let i=0; i<siblings.length; i++) {
      if (i != this.index) {
        const dist = this.position.distanceTo(siblings[i].position);

        if (dist < this.radius) {
          ctx.globalAlpha = 1 - (dist / this.radius);
          ctx.beginPath();
          ctx.moveTo(this.position.x, this.position.y);
          ctx.lineTo(this.end.x, this.end.y);
          ctx.lineTo(siblings[i].position.x, siblings[i].position.y);
          ctx.fill();

          // limit

          //if (++count == 4) { break; }
        }
      }
    }
  }
}

export default CanvasNode;
