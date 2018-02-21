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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function SelectFrom() {
  return arguments[Math.floor(Math.random() * arguments.length)];
};

exports.SelectFrom = SelectFrom;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modules = __webpack_require__(2);

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

    this.members = new _module.Members(this.onMembersResize);
    this.canvas = new _module.Canvas();
    this.parallax = new _module.Parallax();
    this.menu = new _module.Menu();

    // show

    this.menu.removeLoading();

    setTimeout(function () {
      _this.parallax.onScroll();
      setTimeout(function () {
        _this.canvas.run();
      }, 400);
    }, 800);
  }

  _createClass(App, [{
    key: 'events',
    value: function events() {
      // events

      this.onMembersResize = function (listSize) {
        // do something
      };
    }
  }]);

  return App;
}();

window.onload = function () {
  var CGA = new App();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.Parallax = exports.Canvas = exports.Members = undefined;

var _members = __webpack_require__(3);

var _members2 = _interopRequireDefault(_members);

var _canvas = __webpack_require__(4);

var _canvas2 = _interopRequireDefault(_canvas);

var _parallax = __webpack_require__(6);

var _parallax2 = _interopRequireDefault(_parallax);

var _menu = __webpack_require__(7);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Members = _members2.default;
exports.Canvas = _canvas2.default;
exports.Parallax = _parallax2.default;
exports.Menu = _menu2.default;

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
    this.maxColumns = 4;
    this.maxColumnsTablet = 3;
    this.maxColumnsMobile = 2;
    this.breakpointTablet = 900;
    this.breakpointMobile = 500;

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

      var maxColumns = window.innerWidth <= this.breakpointTablet ? window.innerWidth <= this.breakpointMobile ? this.maxColumnsMobile : this.maxColumnsTablet : this.maxColumns;
      var totalSize = 0;
      var columnIndex = setColumns == true ? 0 : false;

      $('.member').each(function (i, e) {
        _this2.resizeMember($(e), columnIndex);

        if (setColumns && !$(e).hasClass('hidden')) {
          columnIndex = (columnIndex + 1) % maxColumns;
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

        for (var i = 0; i < maxColumns; i++) {
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _canvas_cell = __webpack_require__(5);

var _canvas_cell2 = _interopRequireDefault(_canvas_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    // canvas

    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');

    // doc

    this.events();
    this.resize();
    $('body').append(this.cvs);
  }

  _createClass(Canvas, [{
    key: 'run',
    value: function run() {
      // set up logic, run

      this.complete = 0;
      this.targetComplete = 1;
      this.threshold = 0.002;
      this.radius = 55;
      this.lineWidth = 30;
      this.adjust = 0.015;
      this.resetNodes();
      this.now = new Date().getTime();
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      this.cvs.style.opacity = 0.5;

      this.loop();
    }
  }, {
    key: 'resetNodes',
    value: function resetNodes() {
      // create node list

      this.nodes = [];

      for (var i = 0; i < 180; i++) {
        this.nodes.push(new _canvas_cell2.default(this.radius));
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this = this;

      // draw CGA graphic

      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

      // draw graphics nodes

      this.ctx.lineWidth = this.lineWidth / 8;
      this.ctx.fillStyle = this.ctx.strokeStyle = '#aae';
      this.ctx.lineCap = 'round';
      this.nodes.forEach(function (node) {
        node.draw(_this.ctx, _this.complete);
      });

      // draw static letters
    }
  }, {
    key: 'update',
    value: function update() {
      // update logic

      var now = new Date().getTime();
      var delta = (now - this.now) / 1000.0;
      var mag = this.targetComplete - this.complete;

      this.complete += Math.abs(mag) < this.threshold ? mag : mag * this.adjust;
      this.now = now;

      return mag != 0;
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this2 = this;

      // main loop

      var needsDraw = this.update();
      requestAnimationFrame(function () {
        _this2.loop();
      });
      if (needsDraw) {
        this.draw();
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      // resize canvas

      this.cvs.width = window.innerWidth * window.devicePixelRatio;
      this.cvs.height = window.innerHeight * window.devicePixelRatio;
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      // handle scroll

      this.targetComplete = Math.max(0.0, 1.0 - $(document).scrollTop() / window.innerHeight);

      if (this.complete != this.targetComplete && this.paused) {
        // do stuff
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var _this3 = this;

      // set doc events

      $(window).resize(function () {
        _this3.resize();
        if (_this3.nodes && (Math.abs(window.innerWidth - _this3.innerWidth) > _this3.radius || Math.abs(window.innerHeight - _this3.innerHeight) > _this3.radius)) {
          // if size < threshold, reposition nodes

          _this3.innerWidth = window.innerWidth;
          _this3.innerHeight = window.innerHeight;
          _this3.nodes.forEach(function (node) {
            node.randomisePosition();
          });
        }
      });
      $(document).scroll(function () {
        _this3.onScroll();
      });

      // set css

      this.cvs.style.position = 'absolute';
      this.cvs.style.zIndex = 5;
      this.cvs.style.top = 0;
      this.cvs.style.left = 0;
      this.cvs.style.pointerEvents = 'none';
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasCell = function () {
  function CanvasCell(radius) {
    _classCallCheck(this, CanvasCell);

    // canvas graphical node

    this.colour = Math.random() > 0.75 ? 'rgb(' + Math.floor(64 + 32 * Math.random()) + ', ' + Math.floor(64 + 32 * Math.random()) + ', ' + Math.floor(184 + 32 * Math.random()) + ')' : 'rgb(32, 32, ' + Math.floor(184 + 32 * Math.random()) + ')';
    this.radius = radius / 2;
    this.diameter = radius * 2.25;
    this.start = 0;
    this.stop = this.start - Math.PI * 2;
    this.fill = Math.random() > 0.75;
    this.randomisePosition();

    // line
    var q = Math.floor(Math.random() * 8);
    this.extend = Math.PI * 0.25 * q;
    if (q % 2 == 1) {
      this.length = 2 * this.diameter * Math.sqrt(2) - this.radius;
    } else {
      this.length = 2 * this.diameter - this.radius;
    }
  }

  _createClass(CanvasCell, [{
    key: 'randomisePosition',
    value: function randomisePosition() {
      // change pos

      var w = window.innerWidth * window.devicePixelRatio;
      var h = window.innerHeight * window.devicePixelRatio;

      this.x = Math.floor(Math.random() * w / this.diameter) * this.diameter + this.radius / 2;
      this.y = Math.floor(Math.random() * h / this.diameter) * this.diameter + this.radius / 2;

      if (this.y > h * 0.4 && this.y < h * 0.6) {
        // statisically clear centre

        this.y = Math.floor(Math.random() * h / this.diameter) * this.diameter + this.radius / 2;
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx, complete) {
      // draw node

      ctx.strokeStyle = this.colour;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, this.start, this.start + this.stop * complete, true);
      var ext = this.radius + (this.length - this.radius) * complete;
      ctx.moveTo(this.x + Math.cos(this.extend) * this.radius, this.y + Math.sin(this.extend) * this.radius);
      ctx.lineTo(this.x + Math.cos(this.extend) * ext, this.y + Math.sin(this.extend) * ext);
      ctx.stroke();

      if (this.fill) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius - 10, this.start, this.start + this.stop * complete, true);
        ctx.stroke();
      }
    }
  }]);

  return CanvasCell;
}();

exports.default = CanvasCell;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = function () {
  function Parallax() {
    _classCallCheck(this, Parallax);

    // parallax effects

    this._events();
    $(document).scroll(this.onScroll);
  }

  _createClass(Parallax, [{
    key: '_events',
    value: function _events() {
      // doc events

      this.onScroll = function () {
        var y = $(document).scrollTop();
        var y2 = y + window.innerHeight;

        $('.parallax').each(function (i, e) {
          var elem = $(e);
          var top = elem.offset().top;
          var bottom = elem.offset().top + elem.height();

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
  }]);

  return Parallax;
}();

exports.default = Parallax;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    // hook up menu

    this.step = 100;
    this.getTime = function (index) {
      return _this.step * (index + 1);
    };
    this._events();
  }

  _createClass(Menu, [{
    key: 'lighten',
    value: function lighten() {
      // swap menu button to dark version

      $('.menu-dark').removeClass('active');
      $('.menu-light').addClass('active');
    }
  }, {
    key: 'darken',
    value: function darken() {
      // swap menu button to light version

      $('.menu-light').removeClass('active');
      $('.menu-dark').addClass('active');
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      // open/ close menu

      $('.menu').toggleClass('active');

      // freeze scrolling

      if ($('.menu').hasClass('active')) {
        $('html').addClass('freeze');
        this.showMenu();
      } else {
        $('html').removeClass('freeze');
        this.hideMenu();
      }

      // trigger scroll menu evt

      this.onScroll();
    }
  }, {
    key: 'showMenu',
    value: function showMenu() {
      var _this2 = this;

      // show menu items

      $('.menu-item').each(function (i, e) {
        setTimeout(function () {
          $(e).addClass('active');
        }, _this2.getTime(i));
      });
      this.showLoading();
      this.darken();
    }
  }, {
    key: 'hideMenu',
    value: function hideMenu() {
      var _this3 = this;

      // remove menu items

      $('.menu-item').each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass('active');
        }, _this3.getTime(i));
      });
      this.removeLoading();
      this.lighten();
    }
  }, {
    key: 'showLoading',
    value: function showLoading() {
      var _this4 = this;

      // show loading screen

      $('.loading__background__tab').each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass('active');
        }, _this4.getTime(i));
      });
    }
  }, {
    key: 'removeLoading',
    value: function removeLoading() {
      var _this5 = this;

      // remove loading screen

      $('.loading__background__tab').each(function (i, e) {
        setTimeout(function () {
          $(e).addClass('active');
        }, _this5.getTime(i));
      });
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      // change menu button colour

      if (!$('.menu').hasClass('active')) {
        var y = $(document).scrollTop() + 20;
        var sections = $('.section');

        for (var i = sections.length - 1; i > -1; i--) {
          if ($(sections[i]).offset().top <= y) {
            this.currentSection = $(sections[i]);
            break;
          }
        }

        if (this.currentSection) {
          if (this.currentSection.find('.section-home').length) {
            this.lighten();
            $('.nav__title').css({ opacity: 0 });
          } else {
            this.darken();
            $('.nav__title').css({ opacity: 1 });
          }
        }
      }
    }
  }, {
    key: '_events',
    value: function _events() {
      var _this6 = this;

      // doc events

      $('.nav__menu').click(function () {
        _this6.toggleMenu();
      });
      $('.nav__title').click(function () {
        _this6.showLoading();
        $('.nav__title').css({ opacity: 0 });
        setTimeout(function () {
          $(document).scrollTop(0);
          if (!$('.menu').hasClass('active')) {
            _this6.removeLoading();
          }
        }, 1300);
      });
      $('.menu-item').click(function (e) {
        var target = $(e.currentTarget).data('target');
        $(document).scrollTop($(target).offset().top);
        _this6.toggleMenu();
      });
      $('.parallax-next').click(function (e) {
        var elem = $(e.currentTarget);
        var top = elem.offset().top + elem.outerHeight();
        $('html, body').animate({ scrollTop: top + 'px' }, 1200);
      });
      $(document).scroll(function () {
        _this6.onScroll();
      });

      this.onScroll();
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ })
/******/ ]);