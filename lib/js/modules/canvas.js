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
    this.now = (new Date()).getTime();
    this.loop();
  }

  draw() {
    // draw CGA graphic

    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

    let x = this.cvs.width * 0.4;
    let y = this.cvs.height * 0.5;
    let start = 0;
    let stop = 0;

    this.ctx.lineWidth = this.lineWidth;
    this.ctx.beginPath();
    start = Math.PI * 1.5;
    stop = start - this.complete * Math.PI;
    this.ctx.arc(x, y, this.radius * 1.5, start, stop, true);
    this.ctx.stroke();
    this.ctx.beginPath();
    stop = start - this.complete * Math.PI * 2;
    this.ctx.arc(x, y + this.radius / 2, this.radius / 2, start, stop, true);
    this.ctx.stroke();
    this.ctx.beginPath();
  }

  update() {
    // update logic

    const now = (new Date()).getTime();
    const delta = (now - this.now) / 1000.0;
    const mag = this.targetComplete - this.complete;

    this.complete += (Math.abs(mag) < this.threshold) ? mag : mag * 0.05;
    this.now = now;
  }

  loop() {
    // main loop

    this.update();
    requestAnimationFrame(() => { this.loop(); });
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
