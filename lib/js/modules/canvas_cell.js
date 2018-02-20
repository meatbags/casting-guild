import { SelectFrom } from './utils';

class CanvasCell {
  constructor(radius) {
    // canvas graphical node

    this.colour = `rgb(32, 32, ${Math.floor(32 + 64 * Math.random())})`;
    this.radius = radius * 0.75;
    this.diam = radius * 2;
    this.x = Math.floor(Math.random() * window.innerWidth / this.diam) * this.diam + this.radius;
    this.y = Math.floor(Math.random() * window.innerHeight / this.diam) * this.diam + this.radius;
    this.extend = Math.PI * 0.5 * Math.floor(Math.random() * 4);
    if (!(Math.sin(this.extend) == 0 || Math.cos(this.extend) == 0)) {
      this.length = this.diam * Math.sqrt(2);
    } else {
      this.length = this.diam;
    }
    this.start = SelectFrom(0, 1, 2, 3) * Math.PI * 0.5;
    this.stop = this.start + Math.PI;
  }

  draw(ctx, complete) {
    // draw node

    ctx.strokeStyle = this.colour;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.start, this.start + this.stop * complete, false);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + Math.cos(this.extend) * this.length * complete, this.y + Math.sin(this.extend) * this.length * complete);
    ctx.stroke();
  }
}

export default CanvasCell;
