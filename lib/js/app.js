import * as module from './modules';

class App {
  constructor() {
    // events

    this.events();

    // modules

    this.nav = new module.Nav();
    this.members = new module.Members(this.onMembersResize);

    // remove loading screen, show nav

    $('.loading').fadeOut();
    $('html, body').animate({scrollTop: 0}, 50);
    setTimeout(() => { this.nav.animateIn(); }, 250);
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
