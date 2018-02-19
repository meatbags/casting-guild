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
    this.parallax.onScroll();

    setTimeout(() => {
      this.canvas.run();
    }, 600);
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
