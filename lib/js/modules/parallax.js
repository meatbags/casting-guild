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

      $('.parallax').each((i, e) => {
        const elem = $(e);
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
