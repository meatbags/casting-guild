import * as module from './modules';

class App {
  constructor() {
    this.canvas = new module.Canvas();
  }
}

window.onload = () => {
  const CGA = new App();
};
