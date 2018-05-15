class Sliders {
  constructor() {
    // init slick sliders
    $('.slider-target').slick({
      variableWidth: true,
      dots: true,
      arrows: false,
      centerMode: true,
    });
  }
}

export { Sliders };
