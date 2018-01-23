class Menu {
  constructor() {
    // menu handler

    this.setIndicator();
  }

  setIndicator() {
    // menu sliding indicator

    const checkActive = () => {
      if ($('.nav-item.active').length > 0) {
        const left = $('.nav-item.active').position().left + $('.nav-item.active').width() / 2 - $('.nav__indicator__slider').width() / 2;
        $('.nav__indicator__slider').css({left: left});
      }
    };

    checkActive();

    // mouse events

    $('.nav-item').on('mouseenter', (e) => {
      const left = $(e.currentTarget).position().left + $(e.currentTarget).width() / 2 - $('.nav__indicator__slider').width() / 2;
      $('.nav__indicator__slider').css({left: left});
    });

    $('.nav-item').on('mouseleave', checkActive);

    // transition set

    setTimeout(() => {
      $('.nav__indicator__slider').css({transition: '0.5s'});
    }, 500);
  }
}

export default Menu;
