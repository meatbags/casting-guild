class Nav {
  constructor() {
    // navigation

    this.tabHeight = 0;
    this.scrollSpeed = 750;
    this.events();

    // begin

    this.fadeInNav();
  }

  fadeInNav() {
    // cascade show nav items

    const step = 225;

    $('.section__header__inner .title.hidden').each((i, e) => {
      // show in a bit

      setTimeout(() => {
        $(e).removeClass('hidden');
      }, i * step);
    });
  }

  toggleTab($tab) {
    // open, close tab

    $tab.toggleClass('active');

    if ($tab.hasClass('active')) {
      // close prompt, open content tab

      this.promptClose($tab);
      $tab.css({height: $tab.find('.section__body__inner').outerHeight()});

      // scroll to tab top

      $("html, body").animate({scrollTop: $tab.closest('.section').offset().top}, this.scrollSpeed);
    } else {
      $tab.css({height: $tab.hasClass('hover') ? this.tabHeight : 0});
    }
  }

  resizeMembersTab(listSize) {
    // resize tab (ie: on dynamic content sizing)

    const $tab = $('#members .section__body');

    if ($tab.hasClass('active')) {
      // calculate new height

      const searchSize = $tab.find('.members-search').outerHeight();
      const padding = $tab.find('.section__body__inner').outerHeight() - $tab.find('.section__body__inner').height();

      $tab.css({
        height: searchSize + listSize + padding
      });
    }
  }

  promptOpen($elem) {
    // prompt tab open

    if (!$elem.hasClass('active') && !$elem.hasClass('hover')) {
      $elem.addClass('hover');

      // open tab a little

      $elem.css({height: this.tabHeight});

      // show arrow

      const $prompt = $elem.siblings('.section__header').find('.section__header__prompt');
      $prompt.css({ height: $prompt.find('.section__header__prompt__inner').outerHeight() });
    }
  }

  promptClose($elem) {
    // close prompt

    if ($elem.hasClass('hover')) {
      $elem.removeClass('hover');

      // close tab if not active

      if (!$elem.hasClass('active')) {
        $elem.css({height: 0});
      }

      // hide arrow indicator

      const $prompt = $elem.siblings('.section__header').find('.section__header__prompt');
      $prompt.css({ height: 0 });
    }
  }

  events() {
    // hook up events

    $('.section__header').on('click', (e) => {
      // toggle tab

      $(e.currentTarget).siblings('.section__body').each((i, elem) => {
        this.toggleTab($(elem));
      });
    });

    $('.section__header').on('mouseenter', (e) => {
      // tab open prompt

      $(e.currentTarget).siblings('.section__body').each((i, elem) => {
        this.promptOpen($(elem));
      });
    });

    $('.section__header').on('mouseleave', (e) => {
      // remove tab prompt

      $(e.currentTarget).siblings('.section__body').each((i, elem) => {
        this.promptClose($(elem));
      });
    });
  }
}

export default Nav;
