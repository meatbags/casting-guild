class Menu {
  constructor() {
    // hook up menu

    this.step = 100;
    this.getTime = (index) => { return this.step * (index + 1); };
    this._events();
  }

  darken() {
    // swap menu button to dark version

    $('.menu-dark').removeClass('display-none');
    $('.menu-light').addClass('display-none');
  }

  lighten() {
    // swap menu button to light version

    $('.menu-light').removeClass('display-none');
    $('.menu-dark').addClass('display-none');
  }

  toggleMenu() {
    // open/ close menu

    $('.menu').toggleClass('active');

    // freeze scrolling

    if ($('.menu').hasClass('active')) {
      $('html').addClass('freeze');
      this.showMenu();
    } else {
      $('html').removeClass('freeze');
      this.hideMenu();
    }

    // trigger scroll menu evt

    this.onScroll();
  }

  showMenu() {
    // show menu items

    $('.menu-item').each((i, e) => {
      setTimeout(() => {
        $(e).addClass('active');
      }, this.getTime(i));
    });
    this.showLoading();
    this.darken();
  }

  hideMenu() {
    // remove menu items

    $('.menu-item').each((i, e) => {
      setTimeout(() => {
        $(e).removeClass('active');
      }, this.getTime(i))
    });
    this.removeLoading();
    this.lighten();
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

  onScroll() {
    // change menu button colour

    if (!$('.menu').hasClass('active')) {
      const y = $(document).scrollTop() + 20;
      const sections = $('.section');

      for (let i=sections.length-1; i>-1; i--) {
        if ($(sections[i]).offset().top <= y) {
          this.currentSection = $(sections[i]);
          break;
        }
      }

      if (this.currentSection) {
        if (this.currentSection.find('.section-home').length) {
          this.lighten();
        } else {
          this.darken();
        }
      }
    }
  }

  _events() {
    // doc events

    $('.nav__menu').click(() => {
      this.toggleMenu();
    });
    $('.menu-item').click((e) => {
      const target = $(e.currentTarget).data('target');
      $(document).scrollTop($(target).offset().top);
      this.toggleMenu();
    });
    $('.scroll-down').click(() => {
      $('html, body').animate({scrollTop: `${window.innerHeight}px`}, 1200);
    });
    $(document).scroll(() => { this.onScroll(); });

    this.onScroll();
  }
}

export default Menu;
