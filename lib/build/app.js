var stk =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modules = __webpack_require__(1);

var _module = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    // events

    this.events();

    // modules

    this.nav = new _module.Nav();
    this.members = new _module.Members(this.onMembersResize);

    // remove loading screen, show nav

    $('.loading').fadeOut();
    $('html, body').animate({ scrollTop: 0 }, 50);
    setTimeout(function () {
      _this.nav.animateIn();
    }, 250);
  }

  _createClass(App, [{
    key: 'events',
    value: function events() {
      var _this2 = this;

      // events

      this.onMembersResize = function (listSize) {
        _this2.nav.resizeMembersTab(listSize);
      };
    }
  }]);

  return App;
}();

window.onload = function () {
  var CGA = new App();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Members = exports.Nav = undefined;

var _nav = __webpack_require__(2);

var _nav2 = _interopRequireDefault(_nav);

var _members = __webpack_require__(3);

var _members2 = _interopRequireDefault(_members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Nav = _nav2.default;
exports.Members = _members2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
  function Nav() {
    _classCallCheck(this, Nav);

    // navigation

    this.tabHeight = 10;
    this.scrollSpeed = 600;
    this.hoverGuard = true;
    this.events();
  }

  _createClass(Nav, [{
    key: 'animateIn',
    value: function animateIn() {
      var _this = this;

      // cascade show nav items

      var step = 225;

      $('.section__header__inner .title.hidden').each(function (i, e) {
        // show in a bit

        setTimeout(function () {
          $(e).removeClass('hidden');
        }, i * step);
      });

      // remove hover guard

      setTimeout(function () {
        _this.hoverGuard = false;
      }, step * 5);
    }
  }, {
    key: 'toggleTab',
    value: function toggleTab($tab) {
      // open, close tab

      $tab.toggleClass('active');

      if ($tab.hasClass('active')) {
        // close prompt, open content tab

        this.promptClose($tab);
        $tab.css({ height: $tab.find('.section__body__inner').outerHeight() });

        // scroll to tab top

        $("html, body").animate({ scrollTop: $tab.closest('.section').offset().top }, this.scrollSpeed);
      } else {
        // close prompt, close tab

        this.promptClose($tab);
        $tab.css({ height: $tab.hasClass('hover') ? this.tabHeight : 0 });
      }
    }
  }, {
    key: 'closeAllTabs',
    value: function closeAllTabs() {
      var _this2 = this;

      // close all open tabs

      $('.section__body').each(function (i, e) {
        if ($(e).hasClass('active')) {
          _this2.toggleTab($(e));
        }
      });

      // zoom top

      $("html, body").animate({ scrollTop: 0 }, this.scrollSpeed);
    }
  }, {
    key: 'resizeMembersTab',
    value: function resizeMembersTab(listSize) {
      // resize tab (ie: on dynamic content sizing)

      var $tab = $('#members .section__body');

      if ($tab.hasClass('active')) {
        // calculate new height

        var searchSize = $tab.find('.members-search').outerHeight();
        var padding = $tab.find('.section__body__inner').outerHeight() - $tab.find('.section__body__inner').height();
        var extra = 20;

        $tab.css({ height: searchSize + listSize + padding + extra });
      }
    }
  }, {
    key: 'promptOpen',
    value: function promptOpen($elem) {
      // prompt tab open

      if (!$elem.hasClass('active') && !$elem.hasClass('hover')) {
        $elem.addClass('hover');

        // open tab a little

        $elem.css({ height: this.tabHeight });

        // show arrow

        var $prompt = $elem.siblings('.section__header').find('.section__header__prompt');
        $prompt.css({ height: $prompt.find('.section__header__prompt__inner').outerHeight() });
      } else if ($elem.hasClass('active') && !$elem.hasClass('hover')) {
        // prompt close tab

        $elem.addClass('hover');

        // show inverse arrow

        var _$prompt = $elem.siblings('.section__header').find('.section__header__prompt-inverse');
        _$prompt.css({ height: _$prompt.find('.section__header__prompt-inverse__inner').outerHeight() });
      }
    }
  }, {
    key: 'promptClose',
    value: function promptClose($elem) {
      // close prompt

      if ($elem.hasClass('hover')) {
        $elem.removeClass('hover');

        // close tab if not active

        if (!$elem.hasClass('active')) {
          $elem.css({ height: 0 });
        }

        // hide arrow indicator

        var $prompt = $elem.siblings('.section__header').find('.section__header__prompt');
        var $promptInverse = $elem.siblings('.section__header').find('.section__header__prompt-inverse');
        $prompt.css({ height: 0 });
        $promptInverse.css({ height: 0 });
      }
    }
  }, {
    key: 'zoomToSection',
    value: function zoomToSection(section) {
      // zoom to section, open if closed

      var $target = section.closest('.section').find('.section__body');

      if (!$target.hasClass('active')) {
        // open

        this.toggleTab($target);
      } else {
        // scroll to section

        $("html, body").animate({ scrollTop: $target.closest('.section').offset().top }, this.scrollSpeed);
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var _this3 = this;

      // hook up events

      $('.section__header').on('click', function (e) {
        // toggle tab

        $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
          _this3.toggleTab($(elem));
        });
      });
      $('.section__header').on('mouseenter', function (e) {
        // tab open prompt

        if (!_this3.hoverGuard) {
          $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
            _this3.promptOpen($(elem));
          });
        }
      });
      $('.section__header').on('mouseleave', function (e) {
        // remove tab prompt

        if (!_this3.hoverGuard) {
          $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
            _this3.promptClose($(elem));
          });
        }
      });

      // one-click buttons

      $('#button-members').on('click', function (e) {
        _this3.zoomToSection($('.section-members'));
      });
      $('#button-join').on('click', function (e) {
        _this3.zoomToSection($('.section-join'));
      });
      $('.home-button').on('click', function () {
        _this3.closeAllTabs();
      });
    }
  }]);

  return Nav;
}();

exports.default = Nav;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Members = function () {
  function Members(onResize) {
    _classCallCheck(this, Members);

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

  _createClass(Members, [{
    key: 'getSize',
    value: function getSize(member) {
      // get projected size

      if (member.hasClass('hidden')) {
        return 0;
      }

      if (member.hasClass('active')) {
        return member.find('.member__body__inner').outerHeight() + member.find('.member__header').outerHeight();
      }

      return member.find('.member__header').outerHeight();
    }
  }, {
    key: 'getColumnHeight',
    value: function getColumnHeight(column) {
      var _this = this;

      // get projected column size

      var height = 0;

      column.find('.member').each(function (i, e) {
        height += _this.getSize($(e));
      });

      return height;
    }
  }, {
    key: 'resizeMember',
    value: function resizeMember(member, column) {
      // resize element, change column

      if (column !== false) {
        $('.members-list__column').eq(column).append(member);
      }

      if (member.hasClass('hidden')) {
        // shrink

        member.css({ height: 0 });
      } else {
        // adjust

        if (member.hasClass('active')) {
          // resize container, body

          var bodySize = member.find('.member__body__inner').outerHeight();
          member.css({ height: member.find('.member__header').outerHeight() + bodySize });
          member.find('.member__body').css({ height: bodySize });
        } else {
          // resize to label height

          member.css({ height: member.find('.member__header').outerHeight() });
          member.find('.member__body').css({ height: 0 });
        }
      }
    }
  }, {
    key: 'resizeList',
    value: function resizeList(setColumns) {
      var _this2 = this;

      // set size of member containers, move between columns

      var totalSize = 0;
      var columnIndex = setColumns == true ? 0 : false;

      $('.member').each(function (i, e) {
        _this2.resizeMember($(e), columnIndex);

        if (setColumns == true) {
          totalSize += _this2.getSize($(e));

          if (totalSize >= _this2.maxColumnSize) {
            totalSize = 0;
            columnIndex += columnIndex >= _this2.maxColumns - 1 ? 0 : 1;
          }
        }
      });

      // handle column sizes

      if ($('.member').length == $('.member.hidden').length) {
        // show "none found" message

        var size = $('.no-members').find('.no-members__inner').outerHeight();
        $('.no-members').css({ height: size });
        $('.no-members').removeClass('hidden');

        // send up

        this.onResize(size);
      } else {
        // hide msg

        if (!$('.no-members').hasClass('hidden')) {
          $('.no-members').addClass('hidden');
          $('.no-members').css({ height: 0 });
        }

        // get biggest column

        var _size = 0;

        for (var i = 0; i < this.maxColumns; i++) {
          _size = Math.max(_size, this.getColumnHeight($('.members-list__column').eq(i)));
        }

        this.onResize(_size);
      }
    }
  }, {
    key: 'clearText',
    value: function clearText() {
      // clear text input

      $('#filter-name').val('');
    }
  }, {
    key: 'fadeOutAll',
    value: function fadeOutAll() {
      // fade out all members

      $('.member.active').removeClass('active');
      $('.member, .no-members').addClass('hidden').css({ height: 0 });
    }
  }, {
    key: 'searchText',
    value: function searchText() {
      var _this3 = this;

      // filter members by text input

      var text = $('#filter-name').val();
      var clean = text.replace(/\W/g, '').toLowerCase();

      this.fadeOutAll();

      // remove state filters

      $('.filter-state__item.active').removeClass('active');

      // fade and resize

      setTimeout(function () {
        $('.member').each(function (i, e) {
          // check against name tag

          var $e = $(e);
          var tag = $e.data('name').replace(/-/g, '');

          if (tag.indexOf(clean) != -1) {
            $e.removeClass('hidden');
          }
        });

        _this3.resizeList(true);
      }, this.fadeTime);
    }
  }, {
    key: 'toggleMember',
    value: function toggleMember(member) {
      // toggle member info

      member.toggleClass('active');
      this.resizeList(false);
    }
  }, {
    key: 'filterState',
    value: function filterState(elem) {
      var _this4 = this;

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

        setTimeout(function () {
          if (elem.data('state') == 'all') {
            // show all

            $('.member.hidden').removeClass('hidden');
          } else {
            // show only state, hide rest

            $('.member').addClass('hidden');
            $('.member*[data-state=' + elem.data('state') + ']').removeClass('hidden');
          }

          // resize, unlock input

          _this4.resizeList(true);
          _this4.lock = false;
        }, this.fadeTime);
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var _this5 = this;

      // set up search/ filters

      $('.filter-state__item').on('click', function (e) {
        _this5.filterState($(e.currentTarget));
      });
      $('#filter-name').on('change', function () {
        _this5.searchText();
      });
      $('.filter-name-search').on('click', function () {
        _this5.searchText();
      });
      $('.filter-name-clear').on('click', function () {
        _this5.clearText();
      });

      // open member info

      $('.member').on('click', '.member__header', function (e) {
        _this5.toggleMember($(e.currentTarget).closest('.member'));
      });
    }
  }]);

  return Members;
}();

exports.default = Members;

/***/ })
/******/ ]);