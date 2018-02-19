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

    this.members = new _module.Members(this.onMembersResize);
    this.canvas = new _module.Canvas();
    this.parallax = new _module.Parallax();
    this.menu = new _module.Menu();

    // show

    this.menu.removeLoading();
    this.parallax.onScroll();

    setTimeout(function () {
      _this.canvas.run();
    }, 600);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.Parallax = exports.Canvas = exports.Members = undefined;

var _members = __webpack_require__(2);

var _members2 = _interopRequireDefault(_members);

var _canvas = __webpack_require__(3);

var _canvas2 = _interopRequireDefault(_canvas);

var _parallax = __webpack_require__(4);

var _parallax2 = _interopRequireDefault(_parallax);

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Members = _members2.default;
exports.Canvas = _canvas2.default;
exports.Parallax = _parallax2.default;
exports.Menu = _menu2.default;

/***/ }),
/* 2 */
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
    this.maxColumnsMobile = 1;
    this.maxColumnSize = 670;
    this.mobileBreakpoint = 500;

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

      var maxColumns = window.innerWidth <= this.mobileBreakpoint ? this.maxColumnsMobile : this.maxColumns;
      var totalSize = 0;
      var columnIndex = setColumns == true ? 0 : false;

      $('.member').each(function (i, e) {
        _this2.resizeMember($(e), columnIndex);

        if (setColumns == true) {
          totalSize += _this2.getSize($(e));

          if (totalSize >= _this2.maxColumnSize) {
            totalSize = 0;
            columnIndex += columnIndex >= maxColumns - 1 ? 0 : 1;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(6);

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
            this.radius = 100;
            this.lineWidth = 30;
            this.resetNodes();
            this.now = new Date().getTime();

            this.loop();
        }
    }, {
        key: 'resetNodes',
        value: function resetNodes() {
            // create node list

            this.nodes = [];

            for (var i = 0; i < 120; i++) {
                this.nodes.push(this.createNode());
            }
        }
    }, {
        key: 'createNode',
        value: function createNode() {
            // create random fx node

            var radius = this.radius * 0.5;
            var diam = radius * 2;
            var x = Math.floor(Math.random() * window.innerWidth / diam) * diam;
            var y = Math.floor(Math.random() * window.innerHeight / diam) * diam;
            var extended = Math.random() > 0.75;
            var node = {
                x: x,
                y: y,
                radius: radius,
                start: (0, _utils.SelectFrom)(0, 1, 2, 3) * Math.PI * 0.5,
                stop: (0, _utils.SelectFrom)(1, 2, 3) * Math.PI * 0.5,
                extended: extended,
                length: radius * (0, _utils.SelectFrom)(2, 3, 4, 5),
                draw: function draw(ctx, complete) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, this.start, this.start + this.stop * complete, false);
                    if (this.extended) {
                        var _x = this.x + Math.cos(this.start) * this.radius;
                        ctx.moveTo(_x, this.y);
                        ctx.lineTo(_x, this.y + this.length);
                    }
                    ctx.stroke();
                }
            };

            return node;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this = this;

            // draw CGA graphic

            this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

            // draw graphics nodes

            this.ctx.lineWidth = this.lineWidth / 4;
            this.ctx.fillStyle = this.ctx.strokeStyle = '#aae';
            this.nodes.forEach(function (node) {
                node.draw(_this.ctx, _this.complete);
            });

            // draw static letters

            this.ctx.lineWidth = this.lineWidth;
            this.ctx.fillStyle = this.ctx.strokeStyle = '#ddf';
            this.drawLetters();
        }
    }, {
        key: 'drawLetters',
        value: function drawLetters() {
            // draw static objects

            var x = this.cvs.width * 0.4;
            var y = this.cvs.height * 0.45;
            var start = 0;
            var stop = 0;

            this.ctx.beginPath();
            start = Math.PI * 1.5;
            stop = start - this.complete * Math.PI * 1.25;
            this.ctx.arc(x, y, this.radius * 1.5, start, stop, true);
            this.ctx.stroke();

            this.ctx.beginPath();
            start -= Math.PI * 1.75;
            stop = start + this.complete * Math.PI * 1.75;
            y += this.radius / 2;
            this.ctx.arc(x, y, this.radius / 2, start, stop, false);
            this.ctx.stroke();

            this.ctx.beginPath();
            x += this.radius / 2;
            this.ctx.moveTo(x, y);
            y += this.complete * this.radius * 2;
            this.ctx.lineTo(x, y);
            this.ctx.stroke();

            this.ctx.beginPath();
            start = 0;
            stop = Math.PI * this.complete;
            x -= this.radius / 2;
            y -= 1;
            this.ctx.arc(x, y, this.radius / 2, start, stop, false);
            this.ctx.stroke();

            x = this.cvs.width * 0.4 + this.radius * Math.sqrt(2) * 1.5;
            y = this.cvs.height * 0.45 + this.radius * Math.sqrt(2) * 1.5;
            start = Math.PI * 0.75;
            stop = start - Math.PI * 1.75 * this.complete;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.radius * 1.5, start, stop, true);
            this.ctx.stroke();

            x += this.radius * 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(x, window.innerHeight);
            y += (window.innerHeight - y) * (1 - this.complete);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }
    }, {
        key: 'update',
        value: function update() {
            // update logic

            var now = new Date().getTime();
            var delta = (now - this.now) / 1000.0;
            var mag = this.targetComplete - this.complete;

            this.complete += Math.abs(mag) < this.threshold ? mag : mag * 0.02;
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
            if (needsDraw) this.draw();
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
                _this3.resetNodes();
                _this3.draw();
            });
            $(document).scroll(function () {
                _this3.onScroll();
            });

            // set css

            this.cvs.style.position = 'absolute';
            this.cvs.style.zIndex = 10;
            this.cvs.style.top = 0;
            this.cvs.style.left = 0;
            this.cvs.style.pointerEvents = 'none';
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 4 */
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

        $('.parallax').each(function (i, e) {
          var elem = $(e);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    // hook up menu

    this.step = 100;
    this._events();
  }

  _createClass(Menu, [{
    key: 'getTime',
    value: function getTime(index) {
      // get time for index

      return (index + 1) * this.step;
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      // open/ close menu

      $('.menu').toggleClass('active');

      // freeze scrolling

      if ($('.menu').hasClass('active')) {
        $('html').addClass('freeze');
        this.showLoading();
        this.showMenu();
      } else {
        $('html').removeClass('freeze');
        this.removeLoading();
        this.hideMenu();
      }
    }
  }, {
    key: 'showMenu',
    value: function showMenu() {
      var _this = this;

      // show menu items

      $('.menu-item').each(function (i, e) {
        setTimeout(function () {
          $(e).addClass('active');
        }, _this.getTime(i));
      });
    }
  }, {
    key: 'hideMenu',
    value: function hideMenu() {
      var _this2 = this;

      // remove menu items

      $('.menu-item').each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass('active');
        }, _this2.getTime(i));
      });
    }
  }, {
    key: 'showLoading',
    value: function showLoading() {
      var _this3 = this;

      // show loading screen

      $('.loading__background__tab').each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass('active');
        }, _this3.getTime(i));
      });
    }
  }, {
    key: 'removeLoading',
    value: function removeLoading() {
      var _this4 = this;

      // remove loading screen

      $('.loading__background__tab').each(function (i, e) {
        setTimeout(function () {
          $(e).addClass('active');
        }, _this4.getTime(i));
      });
    }
  }, {
    key: '_events',
    value: function _events() {
      var _this5 = this;

      // doc events

      $('.nav__menu').click(function () {
        _this5.toggleMenu();
      });
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function SelectFrom() {
  return arguments[Math.floor(Math.random() * arguments.length)];
};

exports.SelectFrom = SelectFrom;

/***/ })
/******/ ]);