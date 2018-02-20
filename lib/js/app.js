import * as module from './modules';

class App {
  constructor() {
    // events

    this.events();

    // modules

    this.members = new module.Members(this.onMembersResize);
    this.canvas = new module.Canvas();
    this.parallax = new module.Parallax();
    this.menu = new module.Menu();

    // show

    this.menu.removeLoading();

    setTimeout(() => {
      this.canvas.run();
      this.parallax.onScroll();
    }, 800);
  }

  events() {
    // events

    this.onMembersResize = (listSize) => {
      // do something
    };
  }
}

window.onload = () => {
  const CGA = new App();
};
