class Menu {
  constructor() {
    // hook up menu

    this.step = 100;
    this._events();
  }

  getTime(index) {
    // get time for index

    return (index + 1) * this.step;
  }

  toggleMenu() {
    // open/ close menu

    $('.menu').toggleClass('active');

    // freeze scrolling

    if ($('.menu').hasClass('active')) {
      $('html').addClass('freeze');
      this.showLoading();
      this.showMenu();
    } else {
      $('html').removeClass('freeze');
      this.removeLoading();
      this.hideMenu();
    }
  }

  showMenu() {
    // show menu items

    $('.menu-item').each((i, e) => {
      setTimeout(() => {
        $(e).addClass('active');
      }, this.getTime(i));
    });
  }

  hideMenu() {
    // remove menu items

    $('.menu-item').each((i, e) => {
      setTimeout(() => {
        $(e).removeClass('active');
      }, this.getTime(i))
    });
  }

  showLoading() {
    // show loading screen

    $('.loading__background__tab').each((i, e) => {
      setTimeout(() => {
        $(e).removeClass('active');
      }, this.getTime(i));
    });
  }

  removeLoading() {
    // remove loading screen

    $('.loading__background__tab').each((i, e) => {
      setTimeout(() => {
        $(e).addClass('active');
      }, this.getTime(i));
    });
  }

  _events() {
    // doc events

    $('.nav__menu').click(() => { this.toggleMenu(); });
  }
}

export default Menu;
