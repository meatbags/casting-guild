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
    _classCallCheck(this, App);

    // events

    this.events();

    // modules

    this.nav = new _module.Nav();
    this.members = new _module.Members(this.onMembersResize);
  }

  _createClass(App, [{
    key: 'events',
    value: function events() {
      var _this = this;

      // events

      this.onMembersResize = function (listSize) {
        _this.nav.resizeMembersTab(listSize);
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

    this.tabHeight = 0;
    this.scrollSpeed = 750;
    this.events();

    // begin

    this.fadeInNav();
  }

  _createClass(Nav, [{
    key: 'fadeInNav',
    value: function fadeInNav() {
      // cascade show nav items

      var step = 225;

      $('.section__header__inner .title.hidden').each(function (i, e) {
        // show in a bit

        setTimeout(function () {
          $(e).removeClass('hidden');
        }, i * step);
      });
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
        $tab.css({ height: $tab.hasClass('hover') ? this.tabHeight : 0 });
      }
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

        $tab.css({
          height: searchSize + listSize + padding
        });
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
        $prompt.css({ height: 0 });
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      // hook up events

      $('.section__header').on('click', function (e) {
        // toggle tab

        $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
          _this.toggleTab($(elem));
        });
      });

      $('.section__header').on('mouseenter', function (e) {
        // tab open prompt

        $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
          _this.promptOpen($(elem));
        });
      });

      $('.section__header').on('mouseleave', function (e) {
        // remove tab prompt

        $(e.currentTarget).siblings('.section__body').each(function (i, elem) {
          _this.promptClose($(elem));
        });
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

    this.onResize = onResize;
    this.events();

    // set up

    this.resizeMembers();
  }

  _createClass(Members, [{
    key: 'resizeMembers',
    value: function resizeMembers() {
      // set size of member containers

      var totalSize = 0;

      $('.member').each(function (i, e) {
        var $e = $(e);

        if ($e.hasClass('hidden')) {
          // filtered

          $e.css({ height: 0 });
        } else {
          // visible

          var height = $e.find('.member__inner').outerHeight();
          totalSize += height;
          $e.css({ height: height });
        }
      });

      // send up

      this.onResize(totalSize);
    }
  }, {
    key: 'clearText',
    value: function clearText() {
      // clear text input

      $('#filter-name').val('');
    }
  }, {
    key: 'searchText',
    value: function searchText() {}
  }, {
    key: 'toggleMember',
    value: function toggleMember(member) {
      // toggle member info

      if (!member.hasClass('active')) {
        // open


        member.addClass('active');
      } else {
        // close


        member.removeClass('active');
      }
    }
  }, {
    key: 'filterState',
    value: function filterState(state) {
      // filter members by state

      if (state == 'all') {
        // show all

        $('.member.hidden').removeClass('hidden');
      } else {
        // show only state, hide rest

        $('.member').addClass('hidden');
        $('.member*[data-state=' + state + ']').removeClass('hidden');
      }

      // dynamically resize

      this.resizeMembers();

      // clear text input

      this.clearText();
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      // set up search/ filters

      $('.filter-state__item').on('click', function (e) {
        var $e = $(e.currentTarget);

        if (!$e.hasClass('active')) {
          // activate

          _this.filterState($e.data('state'));
          $('.filter-state__item').removeClass('active');
          $e.addClass('active');
        } else {
          // deactivate

          _this.filterState('all');
          $('.filter-state__item').removeClass('active');
        }
      });
      $('#filter-name').on('change', function () {
        _this.searchText();
      });
      $('.filter-name-search').on('click', function () {
        _this.searchText();
      });
      $('.filter-name-clear').on('click', function () {
        _this.clearText();
      });

      // open member info

      $('.member').on('click', function (e) {
        _this.toggleMember($(e.currentTarget));
      });
    }
  }]);

  return Members;
}();

exports.default = Members;

/***/ })
/******/ ]);