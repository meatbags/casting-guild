class Parallax {
  constructor() {
    // parallax effects
    $(document).scroll(() => { this.onScroll() });
  }

  onScroll() {
    const y = $(document).scrollTop();
    const y2 = y + window.innerHeight;

    $('.parallax').each((i, e) => {
      const elem = $(e);
      const top = elem.offset().top;
      const bottom = elem.offset().top + elem.height();

      if (top <= y2 && bottom > y) {
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
  }
}

export default Parallax;
