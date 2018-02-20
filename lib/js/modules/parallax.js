class Parallax {
  constructor() {
    // parallax effects

    this._events();
    $(document).scroll(this.onScroll);
  }

  _events() {
    // doc events

    this.onScroll = () => {
      const y = $(document).scrollTop();
      const y2 = y + window.innerHeight;

      $('.parallax').each((i, e) => {
        const elem = $(e);
        const top = elem.offset().top;

        if (top <= y2) {
          elem.addClass('active');
        } else {
          elem.removeClass('active');
        }
      });

      if (y == 0) {
        $('.parallax.nav').removeClass('active');
      } else {
        $('.parallax.nav').addClass('active');
      }
    };
  }
}

export default Parallax;
