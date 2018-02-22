import { SelectFrom } from './utils';
import CanvasCell from './canvas_cell';

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
    this.radius = 99;
    this.lineWidth = 30;
    this.adjust = 0.015;
    this.resetNodes();
    this.now = (new Date()).getTime();
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.cvs.style.opacity = 0.6;

    this.loop();
  }

  resetNodes() {
    // create node list

    this.nodes = [];

    for (let i=0; i<120; i++) {
      this.nodes.push(new CanvasCell(this.radius));
    }
  }

  draw() {
    // draw CGA graphic

    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

    // draw graphics nodes

    this.ctx.lineWidth = this.lineWidth / 10;
    this.ctx.fillStyle = this.ctx.strokeStyle = '#aae';
    this.ctx.lineCap = 'round';
    this.nodes.forEach((node) => { node.draw(this.ctx, this.complete); });

    // draw static letters
  }

  update() {
    // update logic

    const now = (new Date()).getTime();
    const delta = (now - this.now) / 1000.0;
    const mag = this.targetComplete - this.complete;

    this.complete += (Math.abs(mag) < this.threshold) ? mag : mag * this.adjust;
    this.now = now;

    return (mag != 0);
  }

  loop() {
    // main loop

    const needsDraw = this.update();
    requestAnimationFrame(() => { this.loop(); });
    if (needsDraw) {
      this.draw();
    }
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
      if (this.nodes && (Math.abs(window.innerWidth - this.innerWidth) > this.radius || Math.abs(window.innerHeight - this.innerHeight) > this.radius)) {
        // if size < threshold, reposition nodes

        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.nodes.forEach((node) => {
          node.randomisePosition();
        });
      }
    });
    $(document).scroll(() => {
      this.onScroll();
    });

    // set css

    this.cvs.style.position = 'absolute';
    this.cvs.style.zIndex = 5;
    this.cvs.style.top = 0;
    this.cvs.style.left = 0;
    this.cvs.style.pointerEvents = 'none';
  }
}

export default Canvas;
