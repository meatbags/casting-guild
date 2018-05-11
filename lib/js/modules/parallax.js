class Parallax {
  constructor() {
    // parallax effects

    this._events();
    this._setImages();
    $(document).scroll(this.onScroll);
  }

  _conformImage(image, section) {
    // parallax effects
    /*
    const img = image.find('img')
    const size = 320;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    img.css({
      width: size,
      height: 'auto',
      left: x,
      top: y,
      border: '2px solid blue'
    });
    */
  }

  _setImages() {
    // set parallax image positions

    $('.section').each((i, sec) => {
      $(sec).find('.parallax-images').each((j, pim) => {
        $(pim).find('.image').each((k, img) => {
          this._conformImage($(img), $(sec));
        });
      })
    });
  }

  _events() {
    // doc events

    this.onScroll = () => {
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
    };
  }
}

export default Parallax;
