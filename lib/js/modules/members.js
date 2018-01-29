class Members {
  constructor(onResize) {
    // members list filters and drop-downs

    this.fadeTime = 750;
    this.maxColumns = 3;
    this.maxColumnSize = 670;

    // events

    this.onResize = onResize;
    this.events();

    // set up

    this.resizeList(true);
  }

  getSize(member) {
    // get projected size

    if (member.hasClass('hidden')) {
      return 0;
    }

    if (member.hasClass('active')) {
      return member.find('.member__body__inner').outerHeight() + member.find('.member__header').outerHeight();
    }

    return member.find('.member__header').outerHeight();
  }

  getColumnHeight(column) {
    // get projected column size

    let height = 0;

    column.find('.member').each((i, e) => {
      height += this.getSize($(e));
    });

    return height;
  }

  resizeMember(member, column) {
    // resize element, change column

    if (column !== false) {
      $('.members-list__column').eq(column).append(member);
    }

    if (member.hasClass('hidden')) {
      // shrink

      member.css({height: 0});
    } else {
      // adjust

      if (member.hasClass('active')) {
        // resize container, body

        const bodySize = member.find('.member__body__inner').outerHeight();
        member.css({height: member.find('.member__header').outerHeight() + bodySize})
        member.find('.member__body').css({height: bodySize});
      } else {
        // resize to label height

        member.css({height: member.find('.member__header').outerHeight()});
        member.find('.member__body').css({height: 0});
      }
    }
  }

  resizeList(setColumns) {
    // set size of member containers, move between columns

    let totalSize = 0;
    let columnIndex = (setColumns == true) ? 0 : false;

    $('.member').each((i, e) => {
      this.resizeMember($(e), columnIndex);

      if (setColumns == true) {
        totalSize += this.getSize($(e));

        if (totalSize >= this.maxColumnSize) {
          totalSize = 0;
          columnIndex += (columnIndex >= this.maxColumns - 1) ? 0 : 1;
        }
      }
    });

    // handle column sizes

    if ($('.member').length == $('.member.hidden').length) {
      // show "none found" message

      const size = $('.no-members').find('.no-members__inner').outerHeight();
      $('.no-members').css({height: size});
      $('.no-members').removeClass('hidden');

      // send up

      this.onResize(size);
    } else {
      // hide msg

      if (!$('.no-members').hasClass('hidden')) {
        $('.no-members').addClass('hidden');
        $('.no-members').css({height: 0});
      }

      // get biggest column

      let size = 0;

      for (let i=0; i<this.maxColumns; i++) {
        size = Math.max(size, this.getColumnHeight($('.members-list__column').eq(i)));
      }

      this.onResize(size);
    }
  }

  clearText() {
    // clear text input

    $('#filter-name').val('');
  }

  fadeOutAll() {
    // fade out all members

    $('.member.active').removeClass('active');
    $('.member, .no-members').addClass('hidden').css({height: 0});
  }

  searchText() {
    // filter members by text input

    const text = $('#filter-name').val();
    const clean = text.replace(/\W/g, '').toLowerCase();

    this.fadeOutAll();

    // remove state filters

    $('.filter-state__item.active').removeClass('active');

    // fade and resize

    setTimeout(() => {
      $('.member').each((i, e) => {
        // check against name tag

        const $e = $(e);
        const tag = $e.data('name').replace(/-/g, '');

        if (tag.indexOf(clean) != -1) {
          $e.removeClass('hidden');
        }
      });

      this.resizeList(true);
    }, this.fadeTime);
  }

  toggleMember(member) {
    // toggle member info

    member.toggleClass('active');
    this.resizeList(false);
  }

  filterState(elem) {
    // filter members by state

    if (elem.hasClass('active')) {
      // already active

      return;
    }

    if (!this.lock) {
      // guard input

      this.lock = true;

      // make active

      $('.filter-state__item').removeClass('active');
      elem.addClass('active');

      // remove active members, hide all

      this.fadeOutAll();

      // clear text input

      this.clearText();

      // fade out, time, dynamically fade in

      setTimeout(() => {
        if (elem.data('state') == 'all') {
          // show all

          $('.member.hidden').removeClass('hidden');
        } else {
          // show only state, hide rest

          $('.member').addClass('hidden');
          $(`.member*[data-state=${elem.data('state')}]`).removeClass('hidden');
        }

        // resize, unlock input

        this.resizeList(true);
        this.lock = false;
      }, this.fadeTime);
    }
  }

  events() {
    // set up search/ filters

    $('.filter-state__item').on('click', (e) => { this.filterState($(e.currentTarget)); });
    $('#filter-name').on('change', () => { this.searchText(); });
    $('.filter-name-search').on('click', () => { this.searchText(); });
    $('.filter-name-clear').on('click', () => { this.clearText(); });

    // open member info

    $('.member').on('click', '.member__header', (e) => {
      this.toggleMember($(e.currentTarget).closest('.member'));
    });
  }
}

export default Members;
