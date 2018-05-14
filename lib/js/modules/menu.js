class Menu {
  constructor() {
    // hook up menu
    this.step = 100;
    this.getTime = (index) => { return this.step * (index + 1); };
    this._events();
  }

  toggleMenu() {
    // open close menu
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
    $('.nav__menu').addClass('active');
    this.showLoading();
  }

  hideMenu() {
    // remove menu items
    $('.menu-item').each((i, e) => {
      setTimeout(() => {
        $(e).removeClass('active');
      }, this.getTime(i))
    });
    $('.nav__menu').removeClass('active');
    this.removeLoading();
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
          $('.nav__title').css({opacity: 0});
          $('.nav__menu').removeClass('scrolled');
        } else {
          $('.nav__title').css({opacity: 1});
          $('.nav__menu').addClass('scrolled');
        }
      }
    }
  }

  _events() {
    // doc events
    $('.nav__menu').click(() => {
      this.toggleMenu();
    });
    $('.nav__title').click(() => {
      this.showLoading();
      $('.nav__title').css({opacity: 0});
      setTimeout(() => {
        $(document).scrollTop(0);
        if (!$('.menu').hasClass('active')) {
          this.removeLoading();
        }
      }, 1300);
    });
    $('.menu-item').click((e) => {
      const target = $(e.currentTarget).data('target');
      $(document).scrollTop($(target).offset().top);
      this.toggleMenu();
    });
    $('.title-box').click((e) => {
      $('html, body').animate({scrollTop: `${window.innerHeight}px`}, 1200);
    });
    $('.parallax-next').click((e) => {
      const elem = $(e.currentTarget);
      const top = elem.offset().top + elem.outerHeight();
      $('html, body').animate({scrollTop: `${top}px`}, 1200);
    });
    $(document).scroll(() => { this.onScroll(); });

    this.onScroll();
  }
}

export default Menu;
