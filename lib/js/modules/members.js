class Members {
  constructor(onResize) {
    // members list filters and drop-downs

    this.onResize = onResize;
    this.events();

    // set up

    this.resizeMembers();
  }

  resizeMembers() {
    // set size of member containers

    let totalSize = 0;

    $('.member').each((i, e) => {
      const $e = $(e);

      if ($e.hasClass('hidden')) {
        // filtered

        $e.css({height: 0});
      } else {
        // visible

        const height = $e.find('.member__inner').outerHeight();
        totalSize += height;
        $e.css({height: height});
      }
    });

    // send up

    this.onResize(totalSize);
  }

  clearText() {
    // clear text input

    $('#filter-name').val('');
  }

  searchText() {

  }

  toggleMember(member) {
    // toggle member info

    if (!member.hasClass('active')) {
      // open


      member.addClass('active');
    } else {
      // close

      
      member.removeClass('active');
    }
  }

  filterState(state) {
    // filter members by state

    if (state == 'all') {
      // show all

      $('.member.hidden').removeClass('hidden');
    } else {
      // show only state, hide rest

      $('.member').addClass('hidden');
      $(`.member*[data-state=${state}]`).removeClass('hidden');
    }

    // dynamically resize

    this.resizeMembers();

    // clear text input

    this.clearText();
  }

  events() {
    // set up search/ filters

    $('.filter-state__item').on('click', (e) => {
      const $e = $(e.currentTarget);

      if (!$e.hasClass('active')) {
        // activate

        this.filterState($e.data('state'));
        $('.filter-state__item').removeClass('active');
        $e.addClass('active');
      } else {
        // deactivate

        this.filterState('all');
        $('.filter-state__item').removeClass('active');
      }
    });
    $('#filter-name').on('change', () => { this.searchText(); });
    $('.filter-name-search').on('click', () => { this.searchText(); });
    $('.filter-name-clear').on('click', () => { this.clearText(); });

    // open member info

    $('.member').on('click', (e) => {
      this.toggleMember($(e.currentTarget));
    });
  }
}

export default Members;
