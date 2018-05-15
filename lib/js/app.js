import * as module from './modules';

class App {
  constructor() {
    // modules
    this.members = new module.Members((size) => {});
    this.canvas = new module.Canvas();
    this.parallax = new module.Parallax();
    this.menu = new module.Menu();
    this.sliders = new module.Sliders();

    // show
    this.menu.removeLoading();

    setTimeout(() => {
      this.parallax.onScroll();
      setTimeout(() => {
        this.canvas.run();
      }, 400);
    }, 800);
  }
}

window.onload = () => {
  const CGA = new App();
};
