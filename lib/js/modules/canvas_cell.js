import { SelectFrom } from './utils';

class CanvasCell {
  constructor(radius) {
    // canvas graphical node

    this.colour = `rgb(32, 32, ${Math.floor(32 + 64 * Math.random())})`;
    this.radius = radius / 2;
    this.diameter = radius * 2;
    this.x = Math.floor(Math.random() * window.innerWidth / this.diameter) * this.diameter + this.radius;
    this.y = Math.floor(Math.random() * window.innerHeight / this.diameter) * this.diameter + this.radius;
    this.start = 0;
    this.stop = this.start - Math.PI * 2;

    // line
    this.extend = Math.PI * 0.25 * Math.floor(Math.random() * 8);
    if (!(Math.sin(this.extend) == 0 || Math.cos(this.extend) == 0)) {
      this.length = 2 * this.diameter * Math.sqrt(2) - this.radius;
    } else {
      this.length = 2 * this.diameter - this.radius;
    }
  }

  draw(ctx, complete) {
    // draw node

    ctx.strokeStyle = this.colour;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.start, this.start + this.stop * complete, true);
    const ext = this.radius + (this.length - this.radius) * complete;
    ctx.moveTo(this.x + Math.cos(this.extend) * this.radius, this.y + Math.sin(this.extend) * this.radius);
    ctx.lineTo(this.x + Math.cos(this.extend) * ext, this.y + Math.sin(this.extend) * ext);
    ctx.stroke();
  }
}

export default CanvasCell;
