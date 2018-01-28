import * as module from './modules';

class App {
  constructor() {
    // events

    this.events();

    // modules

    this.nav = new module.Nav();
    this.members = new module.Members(this.onMembersResize);
  }

  events() {
    // events

    this.onMembersResize = (listSize) => {
      this.nav.resizeMembersTab(listSize);
    };
  }
}

window.onload = () => {
  const CGA = new App();
};
