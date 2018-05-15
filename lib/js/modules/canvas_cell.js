import { SelectFrom } from './utils';

class CanvasCell {
  constructor(radius) {
    // canvas graphical node
    this.colour = Math.random() > 0.75 ? 'rgb(255, 255, 255)' : 'rgb(200, 200, 200)';
    this.radius = radius / 2;
    this.diameter = radius * 2;
    this.start = 0;
    this.stop = this.start - Math.PI * 2;
    this.fill = Math.random() > 0.75;
    this.randomisePosition();

    // line
    const q = Math.floor(Math.random() * 8);
    this.extend = Math.PI * 0.25 * q;
    if (q % 2 == 1) {
      this.length = 2 * this.diameter * Math.sqrt(2) - this.radius;
    } else {
      this.length = 2 * this.diameter - this.radius;
    }
  }

  randomisePosition() {
    // change pos
    const w = window.innerWidth * window.devicePixelRatio;
    const h = window.innerHeight * window.devicePixelRatio;
    this.x = Math.floor(Math.random() * w / this.diameter) * this.diameter;
    this.y = Math.floor(Math.random() * h / this.diameter) * this.diameter;

    if (this.y > h * 0.4 && this.y < h * 0.6) {
      // statisically clear centre
      this.y = Math.floor(Math.random() * h / this.diameter) * this.diameter;
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

    if (this.fill) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius - 10, this.start, this.start + this.stop * complete, true);
      ctx.stroke();
    }
  }
}

export { CanvasCell };
