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


var _modules = __webpack_require__(1);

var _module = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.canvas = new _module.Canvas();
};

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
exports.Canvas = undefined;

var _canvas = __webpack_require__(2);

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Canvas = _canvas2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_node = __webpack_require__(3);

var _canvas_node2 = _interopRequireDefault(_canvas_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas() {
    var _this = this;

    _classCallCheck(this, Canvas);

    // animated header canvas app

    this.$canvas = $('<canvas></canvas>', { id: 'cga-canvas' });
    this.cvs = this.$canvas[0];
    this.ctx = this.cvs.getContext('2d');

    // add to doc

    $('.nav').append(this.$canvas);

    // events

    this.resize();
    $(window).on('resize', function () {
      _this.resize();
    });

    // set up scene

    this.initScene(120);

    // run loop

    this.loop();
  }

  _createClass(Canvas, [{
    key: 'resize',
    value: function resize() {
      // resize canvas to fit nav

      this.cvs.width = $('.nav').outerWidth();
      this.cvs.height = $('.nav').outerHeight();
    }
  }, {
    key: 'initScene',
    value: function initScene(nodes) {
      // set up scene logic

      this.scene = [];

      for (var i = 0; i < nodes; i++) {
        this.scene.push(new _canvas_node2.default(this.cvs, i));
      }

      // framerate

      this.now = new Date().getTime();
      this.paused = false;
      this.fps = 20;
      this.frameInterval = 1 / this.fps;
    }
  }, {
    key: 'update',
    value: function update(delta) {
      // update nodes

      for (var i = 0; i < this.scene.length; i++) {
        this.scene[i].update(delta);
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      // draw all nodes

      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.ctx.fillStyle = this.ctx.strokeStyle = '#92d1f3';

      for (var i = 0; i < this.scene.length; i++) {
        this.scene[i].draw(this.ctx, this.scene);
      }
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this2 = this;

      // the main loop

      if (!this.paused) {
        requestAnimationFrame(function () {
          _this2.loop();
        });

        // timing

        var t = new Date().getTime();
        var delta = (t - this.now) / 1000.;

        if (delta > this.frameInterval) {
          this.now = t;
          this.update(delta);
          this.draw();
        }
      }
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _maths = __webpack_require__(5);

var Maths = _interopRequireWildcard(_maths);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasNode = function () {
  function CanvasNode(root, index) {
    _classCallCheck(this, CanvasNode);

    // animated scene node

    this.index = index;
    this.root = root;
    this.direction = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 5 + 5;
    this.radius = 100;
    this.vector = new Maths.Vector(Math.cos(this.direction) * this.speed, Math.sin(this.direction) * this.speed);

    // set position

    var x = (root.width + this.radius * 2) * Math.random() - this.radius;
    var y = (root.height + this.radius * 2) * Math.random() - this.radius;
    this.position = new Maths.Vector(x, y);
    this.offset = new Maths.Vector(Math.random() * 50, Math.random() * 50);
    this.end = new Maths.Vector(0, 0);
  }

  _createClass(CanvasNode, [{
    key: 'update',
    value: function update(delta) {
      // update node position

      this.position.x = Maths.wrap(this.position.x + this.vector.x * delta, -this.radius, this.root.width + this.radius);
      this.position.y = Maths.wrap(this.position.y + this.vector.y * delta, -this.radius, this.root.height + this.radius);
      this.end.x = this.position.x + this.offset.x;
      this.end.y = this.position.y + this.offset.y;
    }
  }, {
    key: 'draw',
    value: function draw(ctx, siblings) {
      // draw node

      var count = 0;

      for (var i = 0; i < siblings.length; i++) {
        if (i != this.index) {
          var dist = this.position.distanceTo(siblings[i].position);

          if (dist < this.radius) {
            ctx.globalAlpha = 1 - dist / this.radius;
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.end.x, this.end.y);
            ctx.lineTo(siblings[i].position.x, siblings[i].position.y);
            ctx.fill();

            // limit

            //if (++count == 4) { break; }
          }
        }
      }
    }
  }]);

  return CanvasNode;
}();

exports.default = CanvasNode;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    // two-dimensional vector

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "distanceTo",
    value: function distanceTo(vec) {
      // get distance to vector

      return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
    }
  }]);

  return Vector;
}();

var wrap = function wrap(value, min, max) {
  return value < min ? value + (max - min) : value > max ? value - (max - min) : value;
};

exports.Vector = Vector;
exports.wrap = wrap;

/***/ })
/******/ ]);