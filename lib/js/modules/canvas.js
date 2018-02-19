import { SelectFrom } from './utils';

class Canvas {
  constructor() {
    // canvas

    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');

    // doc

    this.events();
    this.resize();
    $('body').append(this.cvs);
  }

  run() {
    // set up logic, run

    this.complete = 0;
    this.targetComplete = 1;
    this.threshold = 0.002;
    this.radius = 100;
    this.lineWidth = 30;
    this.resetNodes();
    this.now = (new Date()).getTime();

    this.loop();
  }

  resetNodes() {
    // create node list

    this.nodes = [];

    for (let i=0; i<120; i++) {
      this.nodes.push(this.createNode());
    }
  }

  createNode() {
    // create random fx node

    const radius = this.radius * 0.5;
    const diam = radius * 2;
    const x = Math.floor(Math.random() * window.innerWidth / diam) * diam;
    const y = Math.floor(Math.random() * window.innerHeight / diam) * diam;
    const extended = Math.random() > 0.75;
    const node = {
      x: x,
      y: y,
      radius: radius,
      start: SelectFrom(0, 1, 2, 3) * Math.PI * 0.5,
      stop: SelectFrom(1, 2, 3) * Math.PI * 0.5,
      extended: extended,
      length: radius * SelectFrom(2, 3, 4, 5),
      draw: function(ctx, complete) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.start, this.start + this.stop * complete, false);
        if (this.extended) {
          const x = this.x + Math.cos(this.start) * this.radius;
          ctx.moveTo(x, this.y);
          ctx.lineTo(x, this.y + this.length);
        }
        ctx.stroke();
      }
    };

    return node;
  }

  draw() {
    // draw CGA graphic

    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

    // draw graphics nodes

    this.ctx.lineWidth = this.lineWidth / 4;
    this.ctx.fillStyle = this.ctx.strokeStyle = '#aae';
    this.nodes.forEach((node) => { node.draw(this.ctx, this.complete); });

    // draw static letters

    this.ctx.lineWidth = this.lineWidth;
    this.ctx.fillStyle = this.ctx.strokeStyle = '#ddf';
    this.drawLetters();
  }

  drawLetters() {
    // draw static objects

    let x = this.cvs.width * 0.4;
    let y = this.cvs.height * 0.45;
    let start = 0;
    let stop = 0;

    this.ctx.beginPath();
    start = Math.PI * 1.5;
    stop = start - this.complete * Math.PI * 1.25;
    this.ctx.arc(x, y, this.radius * 1.5, start, stop, true);
    this.ctx.stroke();

    this.ctx.beginPath();
    start -= Math.PI * 1.75;
    stop = start + this.complete * Math.PI * 1.75;
    y += this.radius / 2;
    this.ctx.arc(x, y, this.radius / 2, start, stop, false);
    this.ctx.stroke();

    this.ctx.beginPath();
    x += this.radius / 2;
    this.ctx.moveTo(x, y);
    y += this.complete * this.radius * 2;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();

    this.ctx.beginPath();
    start = 0;
    stop = Math.PI * this.complete;
    x -= this.radius / 2;
    y -= 1;
    this.ctx.arc(x, y, this.radius / 2, start, stop, false);
    this.ctx.stroke();

    x = this.cvs.width * 0.4 + this.radius * Math.sqrt(2) * 1.5;
    y = this.cvs.height * 0.45 + this.radius * Math.sqrt(2) * 1.5;
    start = Math.PI * 0.75;
    stop = start - Math.PI * 1.75 * this.complete;
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius * 1.5, start, stop, true);
    this.ctx.stroke();

    x += this.radius * 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x, window.innerHeight);
    y += (window.innerHeight - y) * (1 - this.complete);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  update() {
    // update logic

    const now = (new Date()).getTime();
    const delta = (now - this.now) / 1000.0;
    const mag = this.targetComplete - this.complete;

    this.complete += (Math.abs(mag) < this.threshold) ? mag : mag * 0.02;
    this.now = now;

    return (mag != 0);
  }

  loop() {
    // main loop

    const needsDraw = this.update();
    requestAnimationFrame(() => { this.loop(); });
    if (needsDraw)
      this.draw();
  }

  resize() {
    // resize canvas

    this.cvs.width = window.innerWidth * window.devicePixelRatio;
    this.cvs.height = window.innerHeight * window.devicePixelRatio;
  }

  onScroll() {
    // handle scroll

    this.targetComplete = Math.max(0.0, 1.0 - ($(document).scrollTop() / window.innerHeight));

    if (this.complete != this.targetComplete && this.paused) {
      // do stuff
    }
  }

  events() {
    // set doc events

    $(window).resize(() => {
      this.resize();
      this.resetNodes();
      this.draw();
    });
    $(document).scroll(() => {
      this.onScroll();
    });

    // set css

    this.cvs.style.position = 'absolute';
    this.cvs.style.zIndex = 10;
    this.cvs.style.top = 0;
    this.cvs.style.left = 0;
    this.cvs.style.pointerEvents = 'none';
  }
}

export default Canvas;
