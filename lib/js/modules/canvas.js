import CanvasNode from './canvas_node';

class Canvas {
  constructor() {
    // animated header canvas app

    this.$canvas = $('<canvas></canvas>', {id: 'cga-canvas'});
    this.cvs = this.$canvas[0];
    this.ctx = this.cvs.getContext('2d');

    // add to doc

    $('body').append(this.$canvas);

    // events

    this.resize();
    $(window).on('resize', () => { this.resize(); });

    // set up scene

    this.drawGrid();

    //
  }

  resize() {
    // resize canvas to fit nav

    this.cvs.width = window.innerWidth;
    this.cvs.height = window.innerHeight; // $('.nav')
  }

  drawGrid() {
    // draw grid graphics

    const size = 32;
    const offset = 32;

    this.ctx.fillStyle = this.ctx.strokeStyle = '#92d1f3';
    this.ctx.globalAlpha = 0.5;

    for (let x=0; x<this.cvs.width; x+=size) {
      let traceX = 0;
      let traceY = Math.floor(Math.random() * window.innerHeight / 32) * 32;

      this.ctx.beginPath();
      this.ctx.moveTo(traceX, traceY);

      let limit = Math.floor(Math.random() * 200) + 10;

      for (let i=0; i<limit; i++) {
        traceX += (Math.random() < 0.75) ? 0 : (Math.random() < 0.5) ? offset : -offset;
        traceY += (Math.random() < 0.75) ? 0 : (Math.random() < 0.5) ? offset : -offset;
        this.ctx.lineTo(traceX, traceY);
      }

      this.ctx.stroke();
      //this.ctx.fill();
    }
  }

  initScene() {
    // set up scene logic

    this.scene = [];

    for (let i=0; i<120; i++) {
      this.scene.push(
        new CanvasNode(this.cvs, i)
      )
    }

    // framerate

    this.now = (new Date()).getTime();
    this.paused = false;
    this.fps = 20;
    this.frameInterval = 1 / this.fps;
  }

  update(delta) {
    // update nodes

    for (let i=0; i<this.scene.length; i++) {
      this.scene[i].update(delta);
    }
  }

  draw() {
    // draw all nodes

    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    this.ctx.fillStyle = this.ctx.strokeStyle = '#92d1f3';

    for (let i=0; i<this.scene.length; i++) {
      this.scene[i].draw(this.ctx, this.scene);
    }
  }

  loop() {
    // the main loop

    if (!this.paused) {
      requestAnimationFrame(() => { this.loop(); });

      // timing

      const t = (new Date()).getTime();
      const delta = (t - this.now) / 1000.;

      if (delta > this.frameInterval) {
        this.now = t;
        this.update(delta);
        this.draw();
      }
    }
  }
}

export default Canvas;
