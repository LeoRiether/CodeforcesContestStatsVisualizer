// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"api.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contest_status = void 0;
var api_base = 'https://codeforces.com/api';

var rand_hex = function rand_hex() {
  return (~~(Math.random() * 16)).toString(16);
};

var sha512 = function sha512(str) {
  return crypto.subtle.digest("SHA-512", new TextEncoder().encode(str)).then(function (buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (x) {
      return ('00' + x.toString(16)).slice(-2);
    }).join('');
  });
};

function api_sig(request_base, secret) {
  return __awaiter(this, void 0, Promise, function () {
    var rand, thingy, _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          rand = new Array(6).fill(null).map(rand_hex).join('');
          thingy = rand + "/" + request_base + "#" + secret;
          _a = rand;
          return [4
          /*yield*/
          , sha512(thingy)];

        case 1:
          return [2
          /*return*/
          , _a + _b.sent()];
      }
    });
  });
}

function request(creds, method, params) {
  return __awaiter(this, void 0, Promise, function () {
    var param_list, request_base, signature, request_url, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          params['time'] = (~~(new Date().getTime() / 1000)).toString();
          params['apiKey'] = creds.key;
          param_list = Object.entries(params);
          param_list.sort(); // This might work

          request_base = method + '?' + param_list.map(function (_a) {
            var key = _a[0],
                value = _a[1];
            return key + "=" + value;
          }).join('&');
          return [4
          /*yield*/
          , api_sig(request_base, creds.secret)];

        case 1:
          signature = _a.sent();
          request_url = api_base + "/" + request_base + "&apiSig=" + signature;
          return [4
          /*yield*/
          , fetch(request_url).then(function (res) {
            return res.json();
          })];

        case 2:
          response = _a.sent();
          if (response['status'] != 'OK') throw "The Codeforces API returned status " + response['status'] + ". Full response: " + JSON.stringify(response);
          return [2
          /*return*/
          , response['result']];
      }
    });
  });
}

function contest_status(creds, contestId) {
  return request(creds, 'contest.status', {
    contestId: contestId
  });
}

exports.contest_status = contest_status;
},{}],"../node_modules/chart.js/dist/chunks/helpers.segment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = merge;
exports.A = _isPointInArea;
exports.C = toPadding;
exports.D = each;
exports.E = getMaximumSize;
exports.F = _getParentNode;
exports.G = readUsedSize;
exports.I = throttled;
exports.L = _factorize;
exports.M = finiteOrDefault;
exports.N = callback;
exports.O = _addGrace;
exports.Q = toDegrees;
exports.R = _measureText;
exports.S = _int16Range;
exports.U = _alignPixel;
exports.V = renderText;
exports.W = toFont;
exports._ = _arrayUnique;
exports.a = resolve;
exports.a0 = _capitalize;
exports.a3 = _attachContext;
exports.a4 = _createResolver;
exports.a5 = _descriptors;
exports.a6 = mergeIf;
exports.a8 = debounce;
exports.a9 = retinaScale;
exports.aA = niceNum;
exports.aB = almostWhole;
exports.aC = almostEquals;
exports.aD = _decimalPlaces;
exports.aE = _longestText;
exports.aF = _filterBetween;
exports.aG = _lookup;
exports.aH = getHoverColor;
exports.aI = clone$1;
exports.aJ = _merger;
exports.aK = _mergerIf;
exports.aL = _deprecated;
exports.aM = toFontString;
exports.aN = splineCurve;
exports.aO = splineCurveMonotone;
exports.aP = getStyle;
exports.aQ = fontString;
exports.aR = toLineHeight;
exports.aX = _angleDiff;
exports.aa = clearCanvas;
exports.ac = _elementsEqual;
exports.ad = getAngleFromPoint;
exports.ae = _readValueToProps;
exports.af = _updateBezierControlPoints;
exports.ag = _computeSegments;
exports.ah = _boundSegments;
exports.ai = _steppedInterpolation;
exports.aj = _bezierInterpolation;
exports.ak = _pointInLine;
exports.al = _steppedLineTo;
exports.am = _bezierCurveTo;
exports.an = drawPoint;
exports.ao = addRoundedRectPath;
exports.ap = toTRBL;
exports.aq = toTRBLCorners;
exports.ar = _boundSegment;
exports.as = _normalizeAngle;
exports.at = getRtlAdapter;
exports.au = overrideTextDirection;
exports.aw = restoreTextDirection;
exports.ax = noop;
exports.ay = distanceBetweenPoints;
exports.az = _setMinAndMaxByKey;
exports.b = isArray;
exports.c = color;
exports.f = resolveObjectKey;
exports.i = isObject;
exports.j = isNullOrUndef;
exports.k = clipArea;
exports.l = listenArrayEvents;
exports.m = unclipArea;
exports.p = formatNumber;
exports.q = _angleBetween;
exports.t = toRadians;
exports.u = unlistenArrayEvents;
exports.v = valueOrDefault;
exports.w = isNumber;
exports.x = _limitValue;
exports.z = getRelativePosition;
exports.y = exports.s = exports.r = exports.o = exports.n = exports.h = exports.g = exports.e = exports.d = exports.av = exports.ab = exports.aW = exports.aV = exports.aU = exports.aT = exports.aS = exports.a7 = exports.a2 = exports.a1 = exports.Z = exports.Y = exports.X = exports.T = exports.P = exports.K = exports.J = exports.H = exports.B = void 0;

/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}

const requestAnimFrame = function () {
  if (typeof window === 'undefined') {
    return function (callback) {
      return callback();
    };
  }

  return window.requestAnimationFrame;
}();

exports.r = requestAnimFrame;

function throttled(fn, thisArg, updateFn) {
  const updateArgs = updateFn || (args => Array.prototype.slice.call(args));

  let ticking = false;
  let args = [];
  return function (...rest) {
    args = updateArgs(rest);

    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}

function debounce(fn, delay) {
  let timeout;
  return function () {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay);
    } else {
      fn();
    }

    return delay;
  };
}

const _toLeftRightCenter = align => align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';

exports.X = _toLeftRightCenter;

const _alignStartEnd = (align, start, end) => align === 'start' ? start : align === 'end' ? end : (start + end) / 2;

exports.Y = _alignStartEnd;

const _textX = (align, left, right) => align === 'right' ? right : align === 'center' ? (left + right) / 2 : left;

exports.av = _textX;

function noop() {}

const uid = function () {
  let id = 0;
  return function () {
    return id++;
  };
}();

exports.a7 = uid;

function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}

function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }

  const type = Object.prototype.toString.call(value);

  if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
    return true;
  }

  return false;
}

function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}

const isNumberFinite = value => (typeof value === 'number' || value instanceof Number) && isFinite(+value);

exports.g = isNumberFinite;

function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}

function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}

const toPercentage = (value, dimension) => typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : value / dimension;

exports.n = toPercentage;

const toDimension = (value, dimension) => typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;

exports.o = toDimension;

function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}

function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;

  if (isArray(loopable)) {
    len = loopable.length;

    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;

    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}

function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;

  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }

  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];

    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }

  return true;
}

function clone$1(source) {
  if (isArray(source)) {
    return source.map(clone$1);
  }

  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;

    for (; k < klen; ++k) {
      target[keys[k]] = clone$1(source[keys[k]]);
    }

    return target;
  }

  return source;
}

function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}

function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }

  const tval = target[key];
  const sval = source[key];

  if (isObject(tval) && isObject(sval)) {
    merge(tval, sval, options);
  } else {
    target[key] = clone$1(sval);
  }
}

function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;

  if (!isObject(target)) {
    return target;
  }

  options = options || {};
  const merger = options.merger || _merger;

  for (let i = 0; i < ilen; ++i) {
    source = sources[i];

    if (!isObject(source)) {
      continue;
    }

    const keys = Object.keys(source);

    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, source, options);
    }
  }

  return target;
}

function mergeIf(target, source) {
  return merge(target, source, {
    merger: _mergerIf
  });
}

function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }

  const tval = target[key];
  const sval = source[key];

  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone$1(sval);
  }
}

function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}

const emptyString = '';
const dot = '.';

function indexOfDotOrLength(key, start) {
  const idx = key.indexOf(dot, start);
  return idx === -1 ? key.length : idx;
}

function resolveObjectKey(obj, key) {
  if (key === emptyString) {
    return obj;
  }

  let pos = 0;
  let idx = indexOfDotOrLength(key, pos);

  while (obj && idx > pos) {
    obj = obj[key.substr(pos, idx - pos)];
    pos = idx + 1;
    idx = indexOfDotOrLength(key, pos);
  }

  return obj;
}

function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const defined = value => typeof value !== 'undefined';

exports.h = defined;

const isFunction = value => typeof value === 'function';

exports.a2 = isFunction;

const setsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }

  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }

  return true;
};

exports.ab = setsEqual;
const PI = Math.PI;
exports.P = PI;
const TAU = 2 * PI;
exports.T = TAU;
const PITAU = TAU + PI;
exports.aS = PITAU;
const INFINITY = Number.POSITIVE_INFINITY;
exports.aT = INFINITY;
const RAD_PER_DEG = PI / 180;
exports.aU = RAD_PER_DEG;
const HALF_PI = PI / 2;
exports.H = HALF_PI;
const QUARTER_PI = PI / 4;
exports.aV = QUARTER_PI;
const TWO_THIRDS_PI = PI * 2 / 3;
exports.aW = TWO_THIRDS_PI;
const log10 = Math.log10;
exports.K = log10;
const sign = Math.sign;
exports.s = sign;

function niceNum(range) {
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}

function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;

  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }

  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }

  result.sort((a, b) => a - b).pop();
  return result;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}

function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}

function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;

  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];

    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}

function toRadians(degrees) {
  return degrees * (PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / PI);
}

function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }

  let e = 1;
  let p = 0;

  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }

  return p;
}

function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

  if (angle < -0.5 * PI) {
    angle += TAU;
  }

  return {
    angle,
    distance: radialDistanceFromCenter
  };
}

function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}

function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}

function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}

function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);

  const s = _normalizeAngle(start);

  const e = _normalizeAngle(end);

  const angleToStart = _normalizeAngle(s - a);

  const angleToEnd = _normalizeAngle(e - a);

  const startToAngle = _normalizeAngle(a - s);

  const endToAngle = _normalizeAngle(a - e);

  return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}

function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}

const atEdge = t => t === 0 || t === 1;

const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));

const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;

const effects = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: t => -Math.cos(t * HALF_PI) + 1,
  easeOutSine: t => Math.sin(t * HALF_PI),
  easeInOutSine: t => -0.5 * (Math.cos(PI * t) - 1),
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: t => atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: t => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
  easeOutElastic: t => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),

  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },

  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },

  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },

  easeInOutBack(t) {
    let s = 1.70158;

    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }

    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },

  easeInBounce: t => 1 - effects.easeOutBounce(1 - t),

  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;

    if (t < 1 / d) {
      return m * t * t;
    }

    if (t < 2 / d) {
      return m * (t -= 1.5 / d) * t + 0.75;
    }

    if (t < 2.5 / d) {
      return m * (t -= 2.25 / d) * t + 0.9375;
    }

    return m * (t -= 2.625 / d) * t + 0.984375;
  },

  easeInOutBounce: t => t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */

exports.e = effects;
const map = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const hex = '0123456789ABCDEF';

const h1 = b => hex[b & 0xF];

const h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];

const eq = b => (b & 0xF0) >> 4 === (b & 0xF);

function isShort(v) {
  return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
}

function hexParse(str) {
  var len = str.length;
  var ret;

  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map[str[1]] * 17,
        g: 255 & map[str[2]] * 17,
        b: 255 & map[str[3]] * 17,
        a: len === 5 ? map[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map[str[1]] << 4 | map[str[2]],
        g: map[str[3]] << 4 | map[str[4]],
        b: map[str[5]] << 4 | map[str[6]],
        a: len === 9 ? map[str[7]] << 4 | map[str[8]] : 255
      };
    }
  }

  return ret;
}

function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '') : v;
}

function round(v) {
  return v + 0.5 | 0;
}

const lim = (v, l, h) => Math.max(Math.min(v, h), l);

function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}

function n2b(v) {
  return lim(round(v * 255), 0, 255);
}

function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}

function n2p(v) {
  return lim(round(v * 100), 0, 100);
}

const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;

  if (!m) {
    return;
  }

  if (m[7] !== r) {
    const v = +m[7];
    a = 255 & (m[8] ? p2b(v) : v * 255);
  }

  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : r);
  g = 255 & (m[4] ? p2b(g) : g);
  b = 255 & (m[6] ? p2b(b) : b);
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

function rgbString(v) {
  return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}

const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  return [f(0), f(8), f(4)];
}

function hsv2rgbn(h, s, v) {
  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);

  return [f(5), f(3), f(1)];
}

function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;

  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }

  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }

  return rgb;
}

function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;

  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h = h * 60 + 0.5;
  }

  return [h | 0, s || 0, l];
}

function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}

function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}

function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}

function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}

function hue(h) {
  return (h % 360 + 360) % 360;
}

function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;

  if (!m) {
    return;
  }

  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }

  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;

  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }

  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}

function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}

function hslString(v) {
  if (!v) {
    return;
  }

  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}

const map$1 = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};

function unpack() {
  const unpacked = {};
  const keys = Object.keys(names);
  const tkeys = Object.keys(map$1);
  let i, j, k, ok, nk;

  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];

    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map$1[k]);
    }

    k = parseInt(names[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }

  return unpacked;
}

let names$1;

function nameParse(str) {
  if (!names$1) {
    names$1 = unpack();
    names$1.transparent = [0, 0, 0, 0];
  }

  const a = names$1[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}

function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}

function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}

function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };

  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };

      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }

  return v;
}

function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }

  return hueParse(str);
}

class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }

    const type = typeof input;
    let v;

    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }

    this._rgb = v;
    this._valid = !!v;
  }

  get valid() {
    return this._valid;
  }

  get rgb() {
    var v = clone(this._rgb);

    if (v) {
      v.a = b2n(v.a);
    }

    return v;
  }

  set rgb(obj) {
    this._rgb = fromObject(obj);
  }

  rgbString() {
    return this._valid ? rgbString(this._rgb) : this._rgb;
  }

  hexString() {
    return this._valid ? hexString(this._rgb) : this._rgb;
  }

  hslString() {
    return this._valid ? hslString(this._rgb) : this._rgb;
  }

  mix(color, weight) {
    const me = this;

    if (color) {
      const c1 = me.rgb;
      const c2 = color.rgb;
      let w2;
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      me.rgb = c1;
    }

    return me;
  }

  clone() {
    return new Color(this.rgb);
  }

  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }

  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }

  greyscale() {
    const rgb = this._rgb;
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }

  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }

  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }

  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }

  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }

  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }

  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }

  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }

}

function index_esm(input) {
  return new Color(input);
}

const isPatternOrGradient = value => value instanceof CanvasGradient || value instanceof CanvasPattern;

function color(value) {
  return isPatternOrGradient(value) ? value : index_esm(value);
}

function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
}

const overrides = Object.create(null);
exports.Z = overrides;
const descriptors = Object.create(null);
exports.a1 = descriptors;

function getScope$1(node, key) {
  if (!key) {
    return node;
  }

  const keys = key.split('.');

  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }

  return node;
}

function set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }

  return merge(getScope$1(root, ''), scope);
}

class Defaults {
  constructor(_descriptors) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};

    this.devicePixelRatio = context => context.chart.platform.getDevicePixelRatio();

    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};

    this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);

    this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);

    this.hoverColor = (ctx, options) => getHoverColor(options.color);

    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.describe(_descriptors);
  }

  set(scope, values) {
    return set(this, scope, values);
  }

  get(scope) {
    return getScope$1(this, scope);
  }

  describe(scope, values) {
    return set(descriptors, scope, values);
  }

  override(scope, values) {
    return set(overrides, scope, values);
  }

  route(scope, name, targetScope, targetName) {
    const scopeObject = getScope$1(this, scope);
    const targetScopeObject = getScope$1(this, targetScope);
    const privateName = '_' + name;
    Object.defineProperties(scopeObject, {
      [privateName]: {
        value: scopeObject[name],
        writable: true
      },
      [name]: {
        enumerable: true,

        get() {
          const local = this[privateName];
          const target = targetScopeObject[targetName];

          if (isObject(local)) {
            return Object.assign({}, target, local);
          }

          return valueOrDefault(local, target);
        },

        set(value) {
          this[privateName] = value;
        }

      }
    });
  }

}

var defaults = new Defaults({
  _scriptable: name => !name.startsWith('on'),
  _indexable: name => name !== 'events',
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
});
exports.d = defaults;

function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }

  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}

function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];

  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }

  if (textWidth > longest) {
    longest = textWidth;
  }

  return longest;
}

function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];

  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }

  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;

  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];

    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];

        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }

  ctx.restore();
  const gcLen = gc.length / 2;

  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }

    gc.splice(0, gcLen);
  }

  return longest;
}

function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}

function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawPoint(ctx, options, x, y) {
  let type, xOffset, yOffset, size, cornerRadius;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;

  if (style && typeof style === 'object') {
    type = style.toString();

    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }

  if (isNaN(radius) || radius <= 0) {
    return;
  }

  ctx.beginPath();

  switch (style) {
    default:
      ctx.arc(x, y, radius, 0, TAU);
      ctx.closePath();
      break;

    case 'triangle':
      ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;

    case 'rectRounded':
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;

    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        ctx.rect(x - size, y - size, 2 * size, 2 * size);
        break;
      }

      rad += QUARTER_PI;

    case 'rectRot':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + yOffset, y - xOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      ctx.closePath();
      break;

    case 'crossRot':
      rad += QUARTER_PI;

    case 'cross':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;

    case 'star':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      rad += QUARTER_PI;
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;

    case 'line':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;

    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
      break;
  }

  ctx.fill();

  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}

function _isPointInArea(point, area, margin) {
  margin = margin || 0.5;
  return point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}

function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}

function unclipArea(ctx) {
  ctx.restore();
}

function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }

  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }

  ctx.lineTo(target.x, target.y);
}

function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }

  ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}

function renderText(ctx, text, x, y, font, opts = {}) {
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();

  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }

  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }

  ctx.font = font.string;

  if (opts.color) {
    ctx.fillStyle = opts.color;
  }

  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }

  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }

  for (i = 0; i < lines.length; ++i) {
    line = lines[i];

    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }

      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }

      ctx.strokeText(line, x, y, opts.maxWidth);
    }

    ctx.fillText(line, x, y, opts.maxWidth);

    if (opts.strikethrough || opts.underline) {
      const metrics = ctx.measureText(line);
      const left = x - metrics.actualBoundingBoxLeft;
      const right = x + metrics.actualBoundingBoxRight;
      const top = y - metrics.actualBoundingBoxAscent;
      const bottom = y + metrics.actualBoundingBoxDescent;
      const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.lineWidth = opts.decorationWidth || 2;
      ctx.moveTo(left, yDecoration);
      ctx.lineTo(right, yDecoration);
      ctx.stroke();
    }

    y += font.lineHeight;
  }

  ctx.restore();
}

function addRoundedRectPath(ctx, rect) {
  const {
    x,
    y,
    w,
    h,
    radius
  } = rect;
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
  ctx.lineTo(x, y + h - radius.bottomLeft);
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  ctx.lineTo(x + w, y + radius.topRight);
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  ctx.lineTo(x + radius.topLeft, y);
}

const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);

  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }

  value = +matches[2];

  switch (matches[3]) {
    case 'px':
      return value;

    case '%':
      value /= 100;
      break;
  }

  return size * value;
}

const numberOrZero = v => +v || 0;

function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value) ? objProps ? prop => valueOrDefault(value[prop], value[props[prop]]) : prop => value[prop] : () => value;

  for (const prop of keys) {
    ret[prop] = numberOrZero(read(prop));
  }

  return ret;
}

function toTRBL(value) {
  return _readValueToProps(value, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x'
  });
}

function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}

function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}

function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);

  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }

  let style = valueOrDefault(options.style, fallback.style);

  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = '';
  }

  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}

function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;

  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];

    if (value === undefined) {
      continue;
    }

    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }

    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }

    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }

      return value;
    }
  }
}

function _addGrace(minmax, grace) {
  const {
    min,
    max
  } = minmax;
  return {
    min: min - Math.abs(toDimension(grace, min)),
    max: max + toDimension(grace, max)
  };
}

function _lookup(table, value, cmp) {
  cmp = cmp || (index => table[index] < value);

  let hi = table.length - 1;
  let lo = 0;
  let mid;

  while (hi - lo > 1) {
    mid = lo + hi >> 1;

    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return {
    lo,
    hi
  };
}

const _lookupByKey = (table, key, value) => _lookup(table, value, index => table[index][key] < value);

exports.y = _lookupByKey;

const _rlookupByKey = (table, key, value) => _lookup(table, value, index => table[index][key] >= value);

exports.B = _rlookupByKey;

function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;

  while (start < end && values[start] < min) {
    start++;
  }

  while (end > start && values[end - 1] > max) {
    end--;
  }

  return start > 0 || end < values.length ? values.slice(start, end) : values;
}

const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);

    return;
  }

  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(key => {
    const method = '_onData' + _capitalize(key);

    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,

      value(...args) {
        const res = base.apply(this, args);

        array._chartjs.listeners.forEach(object => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });

        return res;
      }

    });
  });
}

function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;

  if (!stub) {
    return;
  }

  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);

  if (index !== -1) {
    listeners.splice(index, 1);
  }

  if (listeners.length > 0) {
    return;
  }

  arrayEvents.forEach(key => {
    delete array[key];
  });
  delete array._chartjs;
}

function _arrayUnique(items) {
  const set = new Set();
  let i, ilen;

  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }

  if (set.size === ilen) {
    return items;
  }

  const result = [];
  set.forEach(item => {
    result.push(item);
  });
  return result;
}

function _createResolver(scopes, prefixes = [''], rootScopes = scopes, fallback, getTarget = () => scopes[0]) {
  if (!defined(fallback)) {
    fallback = _resolve('_fallback', scopes);
  }

  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: rootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: scope => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback)
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete target._keys;
      delete scopes[0][prop];
      return true;
    },

    get(target, prop) {
      return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
    },

    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },

    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },

    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },

    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },

    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      storage[prop] = value;
      delete target[prop];
      delete target._keys;
      return true;
    }

  });
}

function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: ctx => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
    override: scope => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete proxy[prop];
      return true;
    },

    get(target, prop, receiver) {
      return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
    },

    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
        enumerable: true,
        configurable: true
      } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },

    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },

    has(target, prop) {
      return Reflect.has(proxy, prop);
    },

    ownKeys() {
      return Reflect.ownKeys(proxy);
    },

    set(target, prop, value) {
      proxy[prop] = value;
      delete target[prop];
      return true;
    }

  });
}

function _descriptors(proxy, defaults = {
  scriptable: true,
  indexable: true
}) {
  const {
    _scriptable = defaults.scriptable,
    _indexable = defaults.indexable,
    _allKeys = defaults.allKeys
  } = proxy;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
    isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
  };
}

const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;

const needsSubResolver = (prop, value) => isObject(value) && prop !== 'adapters';

function _cached(target, prop, resolve) {
  let value = target[prop];

  if (defined(value)) {
    return value;
  }

  value = resolve();

  if (defined(value)) {
    target[prop] = value;
  }

  return value;
}

function _resolveWithContext(target, prop, receiver) {
  const {
    _proxy,
    _context,
    _subProxy,
    _descriptors: descriptors
  } = target;
  let value = _proxy[prop];

  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }

  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }

  if (needsSubResolver(prop, value)) {
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }

  return value;
}

function _resolveScriptable(prop, value, target, receiver) {
  const {
    _proxy,
    _context,
    _subProxy,
    _stack
  } = target;

  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + [..._stack].join('->') + '->' + prop);
  }

  _stack.add(prop);

  value = value(_context, _subProxy || receiver);

  _stack.delete(prop);

  if (isObject(value)) {
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }

  return value;
}

function _resolveArray(prop, value, target, isIndexable) {
  const {
    _proxy,
    _context,
    _subProxy,
    _descriptors: descriptors
  } = target;

  if (defined(_context.index) && isIndexable(prop)) {
    value = value[_context.index % value.length];
  } else if (isObject(value[0])) {
    const arr = value;

    const scopes = _proxy._scopes.filter(s => s !== arr);

    value = [];

    for (const item of arr) {
      const resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }

  return value;
}

function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}

const getScope = (key, parent) => key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;

function addScopes(set, parentScopes, key, parentFallback) {
  for (const parent of parentScopes) {
    const scope = getScope(key, parent);

    if (scope) {
      set.add(scope);
      const fallback = resolveFallback(scope._fallback, key, scope);

      if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
        return fallback;
      }
    } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
      return null;
    }
  }

  return false;
}

function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [...parentScopes, ...rootScopes];
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop);

  if (key === null) {
    return false;
  }

  if (defined(fallback) && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key);

    if (key === null) {
      return false;
    }
  }

  return _createResolver([...set], [''], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
}

function addScopesFromKey(set, allScopes, key, fallback) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback);
  }

  return key;
}

function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();

  if (!(prop in parent)) {
    parent[prop] = {};
  }

  const target = parent[prop];

  if (isArray(target) && isObject(value)) {
    return value;
  }

  return target;
}

function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;

  for (const prefix of prefixes) {
    value = _resolve(readKey(prefix, prop), scopes);

    if (defined(value)) {
      return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
  }
}

function _resolve(key, scopes) {
  for (const scope of scopes) {
    if (!scope) {
      continue;
    }

    const value = scope[key];

    if (defined(value)) {
      return value;
    }
  }
}

function getKeysFromAllScopes(target) {
  let keys = target._keys;

  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }

  return keys;
}

function resolveKeysFromAllScopes(scopes) {
  const set = new Set();

  for (const scope of scopes) {
    for (const key of Object.keys(scope).filter(k => !k.startsWith('_'))) {
      set.add(key);
    }
  }

  return [...set];
}

const EPSILON = Number.EPSILON || 1e-14;

const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];

const getValueAxis = indexAxis => indexAxis === 'x' ? 'y' : 'x';

function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01;
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}

function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);

  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);

    if (!pointCurrent || !pointAfter) {
      continue;
    }

    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }

    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);

    if (squaredMagnitude <= 9) {
      continue;
    }

    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}

function monotoneCompute(points, mK, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);

  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);

    if (!pointCurrent) {
      continue;
    }

    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];

    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }

    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}

function splineCurveMonotone(points, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);

  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);

    if (!pointCurrent) {
      continue;
    }

    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }

    mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
  }

  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}

function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}

function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;

  let inAreaNext = _isPointInArea(points[0], area);

  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);

    if (!inArea) {
      continue;
    }

    point = points[i];

    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }

    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}

function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;

  if (options.spanGaps) {
    points = points.filter(pt => !pt.skip);
  }

  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];

    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }

  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

function _getParentNode(domNode) {
  let parent = domNode.parentNode;

  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }

  return parent;
}

function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;

  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);

    if (styleValue.indexOf('%') !== -1) {
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }

  return valueInPixels;
}

const getComputedStyle = element => window.getComputedStyle(element, null);

function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}

const positions = ['top', 'right', 'bottom', 'left'];

function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';

  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }

  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}

const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);

function getCanvasPosition(evt, canvas) {
  const e = evt.native || evt;
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const {
    offsetX,
    offsetY
  } = source;
  let box = false;
  let x, y;

  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }

  return {
    x,
    y,
    box
  };
}

function getRelativePosition(evt, chart) {
  const {
    canvas,
    currentDevicePixelRatio
  } = chart;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const {
    x,
    y,
    box
  } = getCanvasPosition(evt, canvas);
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let {
    width,
    height
  } = chart;

  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }

  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}

function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;

  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);

    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect();
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }

  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}

const round1 = v => Math.round(v * 10) / 10;

function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let {
    width,
    height
  } = containerSize;

  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }

  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));

  if (width && !height) {
    height = round1(width / 2);
  }

  return {
    width,
    height
  };
}

function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = deviceHeight / pixelRatio;
  chart.width = deviceWidth / pixelRatio;
  const canvas = chart.canvas;

  if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }

  if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }

  return false;
}

const supportsEventListenerOptions = function () {
  let passiveSupported = false;

  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }

    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {}

  return passiveSupported;
}();

exports.J = supportsEventListenerOptions;

function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}

function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}

function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {
    x: p1.cp2x,
    y: p1.cp2y
  };
  const cp2 = {
    x: p2.cp1x,
    y: p2.cp1y
  };

  const a = _pointInLine(p1, cp1, t);

  const b = _pointInLine(cp1, cp2, t);

  const c = _pointInLine(cp2, p2, t);

  const d = _pointInLine(a, b, t);

  const e = _pointInLine(b, c, t);

  return _pointInLine(d, e, t);
}

const intlCache = new Map();

function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);

  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }

  return formatter;
}

function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}

const getRightToLeftAdapter = function (rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },

    setWidth(w) {
      width = w;
    },

    textAlign(align) {
      if (align === 'center') {
        return align;
      }

      return align === 'right' ? 'left' : 'right';
    },

    xPlus(x, value) {
      return x - value;
    },

    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }

  };
};

const getLeftToRightAdapter = function () {
  return {
    x(x) {
      return x;
    },

    setWidth(w) {},

    textAlign(align) {
      return align;
    },

    xPlus(x, value) {
      return x + value;
    },

    leftForLtr(x, _itemWidth) {
      return x;
    }

  };
};

function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}

function overrideTextDirection(ctx, direction) {
  let style, original;

  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}

function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}

function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }

  return {
    between: (n, s, e) => n >= Math.min(s, e) && n <= Math.max(e, s),
    compare: (a, b) => a - b,
    normalize: x => x
  };
}

function normalizeSegment({
  start,
  end,
  count,
  loop,
  style
}) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}

function getSegment(segment, points, bounds) {
  const {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  const {
    between,
    normalize
  } = propertyFn(property);
  const count = points.length;
  let {
    start,
    end,
    loop
  } = segment;
  let i, ilen;

  if (loop) {
    start += count;
    end += count;

    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }

      start--;
      end--;
    }

    start %= count;
    end %= count;
  }

  if (end < start) {
    end += count;
  }

  return {
    start,
    end,
    loop,
    style: segment.style
  };
}

function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }

  const {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  const count = points.length;
  const {
    compare,
    between,
    normalize
  } = propertyFn(property);
  const {
    start,
    end,
    loop,
    style
  } = getSegment(segment, points, bounds);
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;

  const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;

  const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);

  const shouldStart = () => inside || startIsBefore();

  const shouldStop = () => !inside || endIsBefore();

  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];

    if (point.skip) {
      continue;
    }

    value = normalize(point[property]);

    if (value === prevValue) {
      continue;
    }

    inside = between(value, startBound, endBound);

    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }

    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({
        start: subStart,
        end: i,
        loop,
        count,
        style
      }));
      subStart = null;
    }

    prev = i;
    prevValue = value;
  }

  if (subStart !== null) {
    result.push(normalizeSegment({
      start: subStart,
      end,
      loop,
      count,
      style
    }));
  }

  return result;
}

function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;

  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);

    if (sub.length) {
      result.push(...sub);
    }
  }

  return result;
}

function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;

  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }

  while (start < count && points[start].skip) {
    start++;
  }

  start %= count;

  if (loop) {
    end += start;
  }

  while (end > start && points[end % count].skip) {
    end--;
  }

  end %= count;
  return {
    start,
    end
  };
}

function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;

  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];

    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;

      if (prev.skip) {
        start = end;
      }
    }

    prev = cur;
  }

  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop
    });
  }

  return result;
}

function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;

  if (!count) {
    return [];
  }

  const loop = !!line._loop;
  const {
    start,
    end
  } = findStartAndEnd(points, count, loop, spanGaps);

  if (spanGaps === true) {
    return splitByStyles([{
      start,
      end,
      loop
    }], points, segmentOptions);
  }

  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(solidSegments(points, start, max, completeLoop), points, segmentOptions);
}

function splitByStyles(segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }

  return doSplitByStyles(segments, points, segmentOptions);
}

function doSplitByStyles(segments, points, segmentOptions) {
  const count = points.length;
  const result = [];
  let start = segments[0].start;
  let i = start;

  for (const segment of segments) {
    let prevStyle, style;
    let prev = points[start % count];

    for (i = start + 1; i <= segment.end; i++) {
      const pt = points[i % count];
      style = readStyle(segmentOptions.setContext({
        type: 'segment',
        p0: prev,
        p1: pt
      }));

      if (styleChanged(style, prevStyle)) {
        result.push({
          start: start,
          end: i - 1,
          loop: segment.loop,
          style: prevStyle
        });
        prevStyle = style;
        start = i - 1;
      }

      prev = pt;
      prevStyle = style;
    }

    if (start < i - 1) {
      result.push({
        start,
        end: i - 1,
        loop: segment.loop,
        style
      });
      start = i - 1;
    }
  }

  return result;
}

function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}

function styleChanged(style, prevStyle) {
  return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}
},{}],"../node_modules/chart.js/dist/chart.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaults", {
  enumerable: true,
  get: function () {
    return _helpersSegment.d;
  }
});
exports.scales = exports.registry = exports.registerables = exports.plugins = exports.layouts = exports.elements = exports.controllers = exports.animator = exports._adapters = exports.Tooltip = exports.Title = exports.TimeSeriesScale = exports.TimeScale = exports.Ticks = exports.ScatterController = exports.Scale = exports.RadialLinearScale = exports.RadarController = exports.PolarAreaController = exports.PointElement = exports.PieController = exports.LogarithmicScale = exports.LinearScale = exports.LineElement = exports.LineController = exports.Legend = exports.Interaction = exports.Filler = exports.Element = exports.DoughnutController = exports.DomPlatform = exports.Decimation = exports.DatasetController = exports.Chart = exports.CategoryScale = exports.BubbleController = exports.BasicPlatform = exports.BasePlatform = exports.BarElement = exports.BarController = exports.ArcElement = exports.Animations = exports.Animation = void 0;

var _helpersSegment = require("./chunks/helpers.segment.js");

/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }

  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }

  _refresh() {
    const me = this;

    if (me._request) {
      return;
    }

    me._running = true;
    me._request = _helpersSegment.r.call(window, () => {
      me._update();

      me._request = null;

      if (me._running) {
        me._refresh();
      }
    });
  }

  _update(date = Date.now()) {
    const me = this;
    let remaining = 0;

    me._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }

      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;

      for (; i >= 0; --i) {
        item = items[i];

        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }

          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }

      if (draw) {
        chart.draw();

        me._notify(chart, anims, date, 'progress');
      }

      if (!items.length) {
        anims.running = false;

        me._notify(chart, anims, date, 'complete');

        anims.initial = false;
      }

      remaining += items.length;
    });

    me._lastDate = date;

    if (remaining === 0) {
      me._running = false;
    }
  }

  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);

    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }

    return anims;
  }

  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }

  add(chart, items) {
    if (!items || !items.length) {
      return;
    }

    this._getAnims(chart).items.push(...items);
  }

  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }

  start(chart) {
    const anims = this._charts.get(chart);

    if (!anims) {
      return;
    }

    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);

    this._refresh();
  }

  running(chart) {
    if (!this._running) {
      return false;
    }

    const anims = this._charts.get(chart);

    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }

    return true;
  }

  stop(chart) {
    const anims = this._charts.get(chart);

    if (!anims || !anims.items.length) {
      return;
    }

    const items = anims.items;
    let i = items.length - 1;

    for (; i >= 0; --i) {
      items[i].cancel();
    }

    anims.items = [];

    this._notify(chart, anims, Date.now(), 'complete');
  }

  remove(chart) {
    return this._charts.delete(chart);
  }

}

var animator = new Animator();
exports.animator = animator;
const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },

  color(from, to, factor) {
    const c0 = (0, _helpersSegment.c)(from || transparent);
    const c1 = c0.valid && (0, _helpersSegment.c)(to || transparent);
    return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
  },

  number(from, to, factor) {
    return from + (to - from) * factor;
  }

};

class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = (0, _helpersSegment.a)([cfg.to, to, currentValue, cfg.from]);
    const from = (0, _helpersSegment.a)([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _helpersSegment.e[cfg.easing] || _helpersSegment.e.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }

  active() {
    return this._active;
  }

  update(cfg, to, date) {
    const me = this;

    if (me._active) {
      me._notify(false);

      const currentValue = me._target[me._prop];
      const elapsed = date - me._start;
      const remain = me._duration - elapsed;
      me._start = date;
      me._duration = Math.floor(Math.max(remain, cfg.duration));
      me._total += elapsed;
      me._loop = !!cfg.loop;
      me._to = (0, _helpersSegment.a)([cfg.to, to, currentValue, cfg.from]);
      me._from = (0, _helpersSegment.a)([cfg.from, currentValue, to]);
    }
  }

  cancel() {
    const me = this;

    if (me._active) {
      me.tick(Date.now());
      me._active = false;

      me._notify(false);
    }
  }

  tick(date) {
    const me = this;
    const elapsed = date - me._start;
    const duration = me._duration;
    const prop = me._prop;
    const from = me._from;
    const loop = me._loop;
    const to = me._to;
    let factor;
    me._active = from !== to && (loop || elapsed < duration);

    if (!me._active) {
      me._target[prop] = to;

      me._notify(true);

      return;
    }

    if (elapsed < 0) {
      me._target[prop] = from;
      return;
    }

    factor = elapsed / duration % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = me._easing(Math.min(1, Math.max(0, factor)));
    me._target[prop] = me._fn(from, to, factor);
  }

  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({
        res,
        rej
      });
    });
  }

  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];

    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }

}

exports.Animation = Animation;
const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];

_helpersSegment.d.set('animation', {
  delay: undefined,
  duration: 1000,
  easing: 'easeOutQuart',
  fn: undefined,
  from: undefined,
  loop: undefined,
  to: undefined,
  type: undefined
});

const animationOptions = Object.keys(_helpersSegment.d.animation);

_helpersSegment.d.describe('animation', {
  _fallback: false,
  _indexable: false,
  _scriptable: name => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
});

_helpersSegment.d.set('animations', {
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  }
});

_helpersSegment.d.describe('animations', {
  _fallback: 'animation'
});

_helpersSegment.d.set('transitions', {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: 'transparent'
      },
      visible: {
        type: 'boolean',
        duration: 0
      }
    }
  },
  hide: {
    animations: {
      colors: {
        to: 'transparent'
      },
      visible: {
        type: 'boolean',
        easing: 'linear',
        fn: v => v | 0
      }
    }
  }
});

class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }

  configure(config) {
    if (!(0, _helpersSegment.i)(config)) {
      return;
    }

    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];

      if (!(0, _helpersSegment.i)(cfg)) {
        return;
      }

      const resolved = {};

      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }

      ((0, _helpersSegment.b)(cfg.properties) && cfg.properties || [key]).forEach(prop => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }

  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);

    if (!options) {
      return [];
    }

    const animations = this._createAnimations(options, newOptions);

    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {});
    }

    return animations;
  }

  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;

    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];

      if (prop.charAt(0) === '$') {
        continue;
      }

      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }

      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);

      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }

      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }

      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }

    return animations;
  }

  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }

    const animations = this._createAnimations(target, values);

    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }

}

exports.Animations = Animations;

function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);

  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];

    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }

  return Promise.all(running);
}

function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }

  let options = target.options;

  if (!options) {
    target.options = newOptions;
    return;
  }

  if (options.$shared) {
    target.options = options = Object.assign({}, options, {
      $shared: false,
      $animations: {}
    });
  }

  return options;
}

function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}

function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }

  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}

function toClip(value) {
  let t, r, b, l;

  if ((0, _helpersSegment.i)(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }

  return {
    top: t,
    right: r,
    bottom: b,
    left: l
  };
}

function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];

  const metasets = chart._getSortedDatasetMetas(filterVisible);

  let i, ilen;

  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }

  return keys;
}

function applyStack(stack, value, dsIndex, options) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;

  if (value === null) {
    return;
  }

  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];

    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }

      break;
    }

    otherValue = stack.values[datasetIndex];

    if ((0, _helpersSegment.g)(otherValue) && (singleMode || value === 0 || (0, _helpersSegment.s)(value) === (0, _helpersSegment.s)(otherValue))) {
      value += otherValue;
    }
  }

  return value;
}

function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;

  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }

  return adata;
}

function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}

function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}

function getUserBounds(scale) {
  const {
    min,
    max,
    minDefined,
    maxDefined
  } = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}

function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}

function getLastIndexInStack(stack, vScale, positive) {
  for (const meta of vScale.getMatchingVisibleMetas('bar').reverse()) {
    const value = stack[meta.index];

    if (positive && value > 0 || !positive && value < 0) {
      return meta.index;
    }
  }

  return null;
}

function updateStacks(controller, parsed) {
  const {
    chart,
    _cachedMeta: meta
  } = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {
    iScale,
    vScale,
    index: datasetIndex
  } = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;

  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {
      [iAxis]: index,
      [vAxis]: value
    } = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true);
    stack._bottom = getLastIndexInStack(stack, vScale, false);
  }
}

function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}

function createDatasetContext(parent, index) {
  return Object.assign(Object.create(parent), {
    active: false,
    dataset: undefined,
    datasetIndex: index,
    index,
    mode: 'default',
    type: 'dataset'
  });
}

function createDataContext(parent, index, element) {
  return Object.assign(Object.create(parent), {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}

function clearStacks(meta, items) {
  const axis = meta.vScale && meta.vScale.axis;

  if (!axis) {
    return;
  }

  items = items || meta._parsed;

  for (const parsed of items) {
    const stacks = parsed._stacks;

    if (!stacks || stacks[axis] === undefined || stacks[axis][meta.index] === undefined) {
      return;
    }

    delete stacks[axis][meta.index];
  }
}

const isDirectUpdateMode = mode => mode === 'reset' || mode === 'none';

const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);

class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.$context = undefined;
    this._syncList = [];
    this.initialize();
  }

  initialize() {
    const me = this;
    const meta = me._cachedMeta;
    me.configure();
    me.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    me.addElements();
  }

  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }

    this.index = datasetIndex;
  }

  linkScales() {
    const me = this;
    const chart = me.chart;
    const meta = me._cachedMeta;
    const dataset = me.getDataset();

    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;

    const xid = meta.xAxisID = (0, _helpersSegment.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = (0, _helpersSegment.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = (0, _helpersSegment.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = me.getScaleForId(xid);
    meta.yScale = me.getScaleForId(yid);
    meta.rScale = me.getScaleForId(rid);
    meta.iScale = me.getScaleForId(iid);
    meta.vScale = me.getScaleForId(vid);
  }

  getDataset() {
    return this.chart.data.datasets[this.index];
  }

  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }

  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }

  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale ? meta.vScale : meta.iScale;
  }

  reset() {
    this._update('reset');
  }

  _destroy() {
    const meta = this._cachedMeta;

    if (this._data) {
      (0, _helpersSegment.u)(this._data, this);
    }

    if (meta._stacked) {
      clearStacks(meta);
    }
  }

  _dataCheck() {
    const me = this;
    const dataset = me.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = me._data;

    if ((0, _helpersSegment.i)(data)) {
      me._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        (0, _helpersSegment.u)(_data, me);
        const meta = me._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }

      if (data && Object.isExtensible(data)) {
        (0, _helpersSegment.l)(data, me);
      }

      me._syncList = [];
      me._data = data;
    }
  }

  addElements() {
    const me = this;
    const meta = me._cachedMeta;

    me._dataCheck();

    if (me.datasetElementType) {
      meta.dataset = new me.datasetElementType();
    }
  }

  buildOrUpdateElements(resetNewElements) {
    const me = this;
    const meta = me._cachedMeta;
    const dataset = me.getDataset();
    let stackChanged = false;

    me._dataCheck();

    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);

    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }

    me._resyncElements(resetNewElements);

    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(me, meta._parsed);
    }
  }

  configure() {
    const me = this;
    const config = me.chart.config;
    const scopeKeys = config.datasetScopeKeys(me._type);
    const scopes = config.getOptionScopes(me.getDataset(), scopeKeys, true);
    me.options = config.createResolver(scopes, me.getContext());
    me._parsing = me.options.parsing;
  }

  parse(start, count) {
    const me = this;
    const {
      _cachedMeta: meta,
      _data: data
    } = me;
    const {
      iScale,
      _stacked
    } = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;

    if (me._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if ((0, _helpersSegment.b)(data[start])) {
        parsed = me.parseArrayData(meta, data, start, count);
      } else if ((0, _helpersSegment.i)(data[start])) {
        parsed = me.parseObjectData(meta, data, start, count);
      } else {
        parsed = me.parsePrimitiveData(meta, data, start, count);
      }

      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];

      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];

        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }

          prev = cur;
        }
      }

      meta._sorted = sorted;
    }

    if (_stacked) {
      updateStacks(me, parsed);
    }
  }

  parsePrimitiveData(meta, data, start, count) {
    const {
      iScale,
      vScale
    } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }

    return parsed;
  }

  parseArrayData(meta, data, start, count) {
    const {
      xScale,
      yScale
    } = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }

    return parsed;
  }

  parseObjectData(meta, data, start, count) {
    const {
      xScale,
      yScale
    } = meta;
    const {
      xAxisKey = 'x',
      yAxisKey = 'y'
    } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse((0, _helpersSegment.f)(item, xAxisKey), index),
        y: yScale.parse((0, _helpersSegment.f)(item, yAxisKey), index)
      };
    }

    return parsed;
  }

  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }

  getDataElement(index) {
    return this._cachedMeta.data[index];
  }

  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index, {
      mode
    });
  }

  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];

    if (stack && values) {
      stack.values = values;
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
      value = applyStack(stack, parsedValue, this._cachedMeta.index, {
        all: true
      });
    }

    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }

  getMinMax(scale, canStack) {
    const me = this;
    const meta = me._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;

    const otherScale = me._getOtherScale(scale);

    const stack = canStack && meta._stacked && {
      keys: getSortedDatasetIndices(me.chart, true),
      values: null
    };
    const range = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    const {
      min: otherMin,
      max: otherMax
    } = getUserBounds(otherScale);
    let i, value, parsed, otherValue;

    function _skip() {
      parsed = _parsed[i];
      value = parsed[scale.axis];
      otherValue = parsed[otherScale.axis];
      return !(0, _helpersSegment.g)(value) || otherMin > otherValue || otherMax < otherValue;
    }

    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }

      me.updateRangeFromParsed(range, scale, parsed, stack);

      if (sorted) {
        break;
      }
    }

    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }

        me.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }

    return range;
  }

  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;

    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];

      if ((0, _helpersSegment.g)(value)) {
        values.push(value);
      }
    }

    return values;
  }

  getMaxOverflow() {
    return false;
  }

  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = me.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }

  _update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    me.configure();
    me._cachedDataOpts = {};
    me.update(mode || 'default');
    meta._clip = toClip((0, _helpersSegment.v)(me.options.clip, defaultClip(meta.xScale, meta.yScale, me.getMaxOverflow())));
  }

  update(mode) {}

  draw() {
    const me = this;
    const ctx = me._ctx;
    const chart = me.chart;
    const meta = me._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = me._drawStart || 0;
    const count = me._drawCount || elements.length - start;
    let i;

    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }

    for (i = start; i < start + count; ++i) {
      const element = elements[i];

      if (element.active) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }

    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }

  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
  }

  getContext(index, active, mode) {
    const me = this;
    const dataset = me.getDataset();
    let context;

    if (index >= 0 && index < me._cachedMeta.data.length) {
      const element = me._cachedMeta.data[index];
      context = element.$context || (element.$context = createDataContext(me.getContext(), index, element));
      context.parsed = me.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = me.$context || (me.$context = createDatasetContext(me.chart.getContext(), me.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = me.index;
    }

    context.active = !!active;
    context.mode = mode;
    return context;
  }

  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }

  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }

  _resolveElementOptions(elementType, mode = 'default', index) {
    const me = this;
    const active = mode === 'active';
    const cache = me._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = me.enableOptionSharing && (0, _helpersSegment.h)(index);

    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }

    const config = me.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(me._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
    const names = Object.keys(_helpersSegment.d.elements[elementType]);

    const context = () => me.getContext(index, active);

    const values = config.resolveNamedOptions(scopes, names, context, prefixes);

    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }

    return values;
  }

  _resolveAnimations(index, transition, active) {
    const me = this;
    const chart = me.chart;
    const cache = me._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];

    if (cached) {
      return cached;
    }

    let options;

    if (chart.options.animation !== false) {
      const config = me.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(me._type, transition);
      const scopes = config.getOptionScopes(me.getDataset(), scopeKeys);
      options = config.createResolver(scopes, me.getContext(index, active, transition));
    }

    const animations = new Animations(chart, options && options.animations);

    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }

    return animations;
  }

  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }

    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }

  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }

  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }

  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }

  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);

    this._resolveAnimations(index, mode, active).update(element, {
      options: !active && this.getSharedOptions(options) || options
    });
  }

  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }

  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }

  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;

    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }

  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;

    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }

  _resyncElements(resetNewElements) {
    const me = this;
    const data = me._data;
    const elements = me._cachedMeta.data;

    for (const [method, arg1, arg2] of me._syncList) {
      me[method](arg1, arg2);
    }

    me._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);

    if (count) {
      me.parse(0, count);
    }

    if (numData > numMeta) {
      me._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      me._removeElements(numData, numMeta - numData);
    }
  }

  _insertElements(start, count, resetNewElements = true) {
    const me = this;
    const meta = me._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;

    const move = arr => {
      arr.length += count;

      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };

    move(data);

    for (i = start; i < end; ++i) {
      data[i] = new me.dataElementType();
    }

    if (me._parsing) {
      move(meta._parsed);
    }

    me.parse(start, count);

    if (resetNewElements) {
      me.updateElements(data, start, count, 'reset');
    }
  }

  updateElements(element, start, count, mode) {}

  _removeElements(start, count) {
    const me = this;
    const meta = me._cachedMeta;

    if (me._parsing) {
      const removed = meta._parsed.splice(start, count);

      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }

    meta.data.splice(start, count);
  }

  _onDataPush() {
    const count = arguments.length;

    this._syncList.push(['_insertElements', this.getDataset().data.length - count, count]);
  }

  _onDataPop() {
    this._syncList.push(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }

  _onDataShift() {
    this._syncList.push(['_removeElements', 0, 1]);
  }

  _onDataSplice(start, count) {
    this._syncList.push(['_removeElements', start, count]);

    this._syncList.push(['_insertElements', start, arguments.length - 2]);
  }

  _onDataUnshift() {
    this._syncList.push(['_insertElements', 0, arguments.length]);
  }

}

exports.DatasetController = DatasetController;
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;

function getAllScaleValues(scale) {
  if (!scale._cache.$bar) {
    const metas = scale.getMatchingVisibleMetas('bar');
    let values = [];

    for (let i = 0, ilen = metas.length; i < ilen; i++) {
      values = values.concat(metas[i].controller.getAllParsedValues(scale));
    }

    scale._cache.$bar = (0, _helpersSegment._)(values.sort((a, b) => a - b));
  }

  return scale._cache.$bar;
}

function computeMinSampleSize(scale) {
  const values = getAllScaleValues(scale);
  let min = scale._length;
  let i, ilen, curr, prev;

  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }

    if ((0, _helpersSegment.h)(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }

    prev = curr;
  };

  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }

  prev = undefined;

  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }

  return min;
}

function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;

  if ((0, _helpersSegment.j)(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }

  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - size / 2
  };
}

function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;

  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }

  if (next === null) {
    next = curr + curr - prev;
  }

  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}

function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;

  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }

  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}

function parseValue(entry, item, vScale, i) {
  if ((0, _helpersSegment.b)(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }

  return item;
}

function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;

  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }

  return parsed;
}

function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}

class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }

  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }

  parseObjectData(meta, data, start, count) {
    const {
      iScale,
      vScale
    } = meta;
    const {
      xAxisKey = 'x',
      yAxisKey = 'y'
    } = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse((0, _helpersSegment.f)(obj, iAxisKey), i);
      parsed.push(parseValue((0, _helpersSegment.f)(obj, vAxisKey), item, vScale, i));
    }

    return parsed;
  }

  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;

    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }

  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const {
      iScale,
      vScale
    } = meta;
    const parsed = me.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }

  initialize() {
    const me = this;
    me.enableOptionSharing = true;
    super.initialize();
    const meta = me._cachedMeta;
    meta.stack = me.getDataset().stack;
  }

  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    me.updateElements(meta.data, 0, meta.data.length, mode);
  }

  updateElements(bars, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const vScale = me._cachedMeta.vScale;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();

    const ruler = me._getRuler();

    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    me.updateSharedOptions(sharedOptions, mode, firstOpts);

    for (let i = start; i < start + count; i++) {
      const parsed = me.getParsed(i);
      const vpixels = reset || (0, _helpersSegment.j)(parsed[vScale.axis]) ? {
        base,
        head: base
      } : me._calculateBarValuePixels(i);

      const ipixels = me._calculateBarIndexPixels(i, ruler);

      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || me.index === stack._top || me.index === stack._bottom,
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : undefined,
        width: horizontal ? undefined : ipixels.size
      };

      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
      }

      me.updateElement(bars[i], i, properties, mode);
    }
  }

  _getStacks(last, dataIndex) {
    const me = this;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const metasets = iScale.getMatchingVisibleMetas(me._type);
    const stacked = iScale.options.stacked;
    const ilen = metasets.length;
    const stacks = [];
    let i, item;

    for (i = 0; i < ilen; ++i) {
      item = metasets[i];

      if (typeof dataIndex !== 'undefined') {
        const val = item.controller.getParsed(dataIndex)[item.controller._cachedMeta.vScale.axis];

        if ((0, _helpersSegment.j)(val) || isNaN(val)) {
          continue;
        }
      }

      if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === undefined && item.stack === undefined) {
        stacks.push(item.stack);
      }

      if (item.index === last) {
        break;
      }
    }

    if (!stacks.length) {
      stacks.push(undefined);
    }

    return stacks;
  }

  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }

  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);

    const index = name !== undefined ? stacks.indexOf(name) : -1;
    return index === -1 ? stacks.length - 1 : index;
  }

  _getRuler() {
    const me = this;
    const opts = me.options;
    const meta = me._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;

    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(me.getParsed(i)[iScale.axis], i));
    }

    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(iScale);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: me._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }

  _calculateBarValuePixels(index) {
    const me = this;
    const {
      vScale,
      _stacked
    } = me._cachedMeta;
    const {
      base: baseValue,
      minBarLength
    } = me.options;
    const parsed = me.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? me.applyStack(vScale, parsed, _stacked) : value;
    let head, size;

    if (length !== value) {
      start = length - value;
      length = value;
    }

    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;

      if (value !== 0 && (0, _helpersSegment.s)(value) !== (0, _helpersSegment.s)(custom.barEnd)) {
        start = 0;
      }

      start += value;
    }

    const startValue = !(0, _helpersSegment.j)(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);

    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }

    size = head - base;

    if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
      size = size < 0 ? -minBarLength : minBarLength;

      if (value === 0) {
        base -= size / 2;
      }

      head = base + size;
    }

    const actualBase = baseValue || 0;

    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = vScale.getLineWidthForValue(actualBase) / 2;

      if (size > 0) {
        base += halfGrid;
        size -= halfGrid;
      } else if (size < 0) {
        base -= halfGrid;
        size += halfGrid;
      }
    }

    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }

  _calculateBarIndexPixels(index, ruler) {
    const me = this;
    const scale = ruler.scale;
    const options = me.options;
    const skipNull = options.skipNull;
    const maxBarThickness = (0, _helpersSegment.v)(options.maxBarThickness, Infinity);
    let center, size;

    if (ruler.grouped) {
      const stackCount = skipNull ? me._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);

      const stackIndex = me._getStackIndex(me.index, me._cachedMeta.stack, skipNull ? index : undefined);

      center = range.start + range.chunk * stackIndex + range.chunk / 2;
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(me.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }

    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }

  draw() {
    const me = this;
    const chart = me.chart;
    const meta = me._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    (0, _helpersSegment.k)(chart.ctx, chart.chartArea);

    for (; i < ilen; ++i) {
      if (me.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(me._ctx);
      }
    }

    (0, _helpersSegment.m)(chart.ctx);
  }

}

exports.BarController = BarController;
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  interaction: {
    mode: 'index'
  },
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true
    }
  }
};

class BubbleController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }

  parseObjectData(meta, data, start, count) {
    const {
      xScale,
      yScale
    } = meta;
    const {
      xAxisKey = 'x',
      yAxisKey = 'y'
    } = this._parsing;
    const parsed = [];
    let i, ilen, item;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      item = data[i];
      parsed.push({
        x: xScale.parse((0, _helpersSegment.f)(item, xAxisKey), i),
        y: yScale.parse((0, _helpersSegment.f)(item, yAxisKey), i),
        _custom: item && item.r && +item.r
      });
    }

    return parsed;
  }

  getMaxOverflow() {
    const {
      data,
      _parsed
    } = this._cachedMeta;
    let max = 0;

    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size() / 2, _parsed[i]._custom);
    }

    return max > 0 && max;
  }

  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const {
      xScale,
      yScale
    } = meta;
    const parsed = me.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }

  update(mode) {
    const me = this;
    const points = me._cachedMeta.data;
    me.updateElements(points, 0, points.length, mode);
  }

  updateElements(points, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const {
      iScale,
      vScale
    } = me._cachedMeta;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;

    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && me.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);

      if (includeOptions) {
        properties.options = me.resolveDataElementOptions(i, mode);

        if (reset) {
          properties.options.radius = 0;
        }
      }

      me.updateElement(point, i, properties, mode);
    }

    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }

  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);

    if (values.$shared) {
      values = Object.assign({}, values, {
        $shared: false
      });
    }

    const radius = values.radius;

    if (mode !== 'active') {
      values.radius = 0;
    }

    values.radius += (0, _helpersSegment.v)(parsed && parsed._custom, radius);
    return values;
  }

}

exports.BubbleController = BubbleController;
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        }

      }
    }
  }
};

function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;

  if (circumference < _helpersSegment.T) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);

    const calcMax = (angle, a, b) => (0, _helpersSegment.q)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);

    const calcMin = (angle, a, b) => (0, _helpersSegment.q)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);

    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(_helpersSegment.H, startY, endY);
    const minX = calcMin(_helpersSegment.P, startX, endX);
    const minY = calcMin(_helpersSegment.P + _helpersSegment.H, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }

  return {
    ratioX,
    ratioY,
    offsetX,
    offsetY
  };
}

class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }

  linkScales() {}

  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    let i, ilen;

    for (i = start, ilen = start + count; i < ilen; ++i) {
      meta._parsed[i] = +data[i];
    }
  }

  _getRotation() {
    return (0, _helpersSegment.t)(this.options.rotation - 90);
  }

  _getCircumference() {
    return (0, _helpersSegment.t)(this.options.circumference);
  }

  _getRotationExtents() {
    let min = _helpersSegment.T;
    let max = -_helpersSegment.T;
    const me = this;

    for (let i = 0; i < me.chart.data.datasets.length; ++i) {
      if (me.chart.isDatasetVisible(i)) {
        const controller = me.chart.getDatasetMeta(i).controller;

        const rotation = controller._getRotation();

        const circumference = controller._getCircumference();

        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }

    return {
      rotation: min,
      circumference: max - min
    };
  }

  update(mode) {
    const me = this;
    const chart = me.chart;
    const {
      chartArea
    } = chart;
    const meta = me._cachedMeta;
    const arcs = meta.data;
    const spacing = me.getMaxBorderWidth() + me.getMaxOffset(arcs);
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min((0, _helpersSegment.n)(me.options.cutout, maxSize), 1);

    const chartWeight = me._getRingWeight(me.index);

    const {
      circumference,
      rotation
    } = me._getRotationExtents();

    const {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    } = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = (0, _helpersSegment.o)(me.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);

    const radiusLength = (outerRadius - innerRadius) / me._getVisibleDatasetWeightTotal();

    me.offsetX = offsetX * outerRadius;
    me.offsetY = offsetY * outerRadius;
    meta.total = me.calculateTotal();
    me.outerRadius = outerRadius - radiusLength * me._getRingWeightOffset(me.index);
    me.innerRadius = Math.max(me.outerRadius - radiusLength * chartWeight, 0);
    me.updateElements(arcs, 0, arcs.length, mode);
  }

  _circumference(i, reset) {
    const me = this;
    const opts = me.options;
    const meta = me._cachedMeta;

    const circumference = me._getCircumference();

    if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null) {
      return 0;
    }

    return me.calculateCircumference(meta._parsed[i] * circumference / _helpersSegment.T);
  }

  updateElements(arcs, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const chart = me.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : me.innerRadius;
    const outerRadius = animateScale ? 0 : me.outerRadius;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);

    let startAngle = me._getRotation();

    let i;

    for (i = 0; i < start; ++i) {
      startAngle += me._circumference(i, reset);
    }

    for (i = start; i < start + count; ++i) {
      const circumference = me._circumference(i, reset);

      const arc = arcs[i];
      const properties = {
        x: centerX + me.offsetX,
        y: centerY + me.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };

      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
      }

      startAngle += circumference;
      me.updateElement(arc, i, properties, mode);
    }

    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }

  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;

    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];

      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i)) {
        total += Math.abs(value);
      }
    }

    return total;
  }

  calculateCircumference(value) {
    const total = this._cachedMeta.total;

    if (total > 0 && !isNaN(value)) {
      return _helpersSegment.T * (Math.abs(value) / total);
    }

    return 0;
  }

  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const chart = me.chart;
    const labels = chart.data.labels || [];
    const value = (0, _helpersSegment.p)(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value
    };
  }

  getMaxBorderWidth(arcs) {
    const me = this;
    let max = 0;
    const chart = me.chart;
    let i, ilen, meta, controller, options;

    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;

          if (controller !== me) {
            controller.configure();
          }

          break;
        }
      }
    }

    if (!arcs) {
      return 0;
    }

    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);

      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }

    return max;
  }

  getMaxOffset(arcs) {
    let max = 0;

    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }

    return max;
  }

  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;

    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }

    return ringWeightOffset;
  }

  _getRingWeight(datasetIndex) {
    return Math.max((0, _helpersSegment.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }

  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }

}

exports.DoughnutController = DoughnutController;
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth']
    }
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  indexAxis: 'r'
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }

          return [];
        }

      },

      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }

    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },

        label(tooltipItem) {
          let dataLabel = tooltipItem.label;
          const value = ': ' + tooltipItem.formattedValue;

          if ((0, _helpersSegment.b)(dataLabel)) {
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return dataLabel;
        }

      }
    }
  }
};

class LineController extends DatasetController {
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }

  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    const {
      dataset: line,
      data: points = [],
      _dataset
    } = meta;
    const animationsDisabled = me.chart._animationsDisabled;
    let {
      start,
      count
    } = getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
    me._drawStart = start;
    me._drawCount = count;

    if (scaleRangesChanged(meta)) {
      start = 0;
      count = points.length;
    }

    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = me.resolveDatasetElementOptions(mode);

    if (!me.options.showLine) {
      options.borderWidth = 0;
    }

    options.segment = me.options.segment;
    me.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    me.updateElements(points, start, count, mode);
  }

  updateElements(points, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const {
      iScale,
      vScale,
      _stacked
    } = me._cachedMeta;
    const firstOpts = me.resolveDataElementOptions(start, mode);
    const sharedOptions = me.getSharedOptions(firstOpts);
    const includeOptions = me.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const spanGaps = me.options.spanGaps;
    const maxGapLength = (0, _helpersSegment.w)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = me.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && me.getParsed(start - 1);

    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = me.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = (0, _helpersSegment.j)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? me.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && parsed[iAxis] - prevParsed[iAxis] > maxGapLength;
      properties.parsed = parsed;

      if (includeOptions) {
        properties.options = sharedOptions || me.resolveDataElementOptions(i, mode);
      }

      if (!directUpdate) {
        me.updateElement(point, i, properties, mode);
      }

      prevParsed = parsed;
    }

    me.updateSharedOptions(sharedOptions, mode, firstOpts);
  }

  getMaxOverflow() {
    const me = this;
    const meta = me._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];

    if (!data.length) {
      return border;
    }

    const firstPoint = data[0].size(me.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(me.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }

  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }

}

exports.LineController = LineController;
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category'
    },
    _value_: {
      type: 'linear'
    }
  }
};

function getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;

  if (meta._sorted) {
    const {
      iScale,
      _parsed
    } = meta;
    const axis = iScale.axis;
    const {
      min,
      max,
      minDefined,
      maxDefined
    } = iScale.getUserBounds();

    if (minDefined) {
      start = (0, _helpersSegment.x)(Math.min((0, _helpersSegment.y)(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : (0, _helpersSegment.y)(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
    }

    if (maxDefined) {
      count = (0, _helpersSegment.x)(Math.max((0, _helpersSegment.y)(_parsed, iScale.axis, max).hi + 1, animationsDisabled ? 0 : (0, _helpersSegment.y)(points, axis, iScale.getPixelForValue(max)).hi + 1), start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }

  return {
    start,
    count
  };
}

function scaleRangesChanged(meta) {
  const {
    xScale,
    yScale,
    _scaleRanges
  } = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };

  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }

  const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}

class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }

  getLabelAndValue(index) {
    const me = this;
    const meta = me._cachedMeta;
    const chart = me.chart;
    const labels = chart.data.labels || [];
    const value = (0, _helpersSegment.p)(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value
    };
  }

  update(mode) {
    const arcs = this._cachedMeta.data;

    this._updateRadius();

    this.updateElements(arcs, 0, arcs.length, mode);
  }

  _updateRadius() {
    const me = this;
    const chart = me.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    me.outerRadius = outerRadius - radiusLength * me.index;
    me.innerRadius = me.outerRadius - radiusLength;
  }

  updateElements(arcs, start, count, mode) {
    const me = this;
    const reset = mode === 'reset';
    const chart = me.chart;
    const dataset = me.getDataset();
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = me._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;

    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _helpersSegment.P;

    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / me.countVisibleElements();

    for (i = 0; i < start; ++i) {
      angle += me._computeAngle(i, mode, defaultAngle);
    }

    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;

      let endAngle = angle + me._computeAngle(i, mode, defaultAngle);

      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(dataset.data[i]) : 0;
      angle = endAngle;

      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }

        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }

      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: me.resolveDataElementOptions(i, mode)
      };
      me.updateElement(arc, i, properties, mode);
    }
  }

  countVisibleElements() {
    const dataset = this.getDataset();
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }

  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index) ? (0, _helpersSegment.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
  }

}

exports.PolarAreaController = PolarAreaController;
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    }
  },
  indexAxis: 'r',
  startAngle: 0
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;

          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }

          return [];
        }

      },

      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }

    },
    tooltip: {
      callbacks: {
        title() {
          return '';
        },

        label(context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + context.formattedValue;
        }

      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};

class PieController extends DoughnutController {}

exports.PieController = PieController;
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};

class RadarController extends DatasetController {
  getLabelAndValue(index) {
    const me = this;
    const vScale = me._cachedMeta.vScale;
    const parsed = me.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }

  update(mode) {
    const me = this;
    const meta = me._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;

    if (mode !== 'resize') {
      const options = me.resolveDatasetElementOptions(mode);

      if (!me.options.showLine) {
        options.borderWidth = 0;
      }

      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      me.updateElement(line, undefined, properties, mode);
    }

    me.updateElements(points, 0, points.length, mode);
  }

  updateElements(points, start, count, mode) {
    const me = this;
    const dataset = me.getDataset();
    const scale = me._cachedMeta.rScale;
    const reset = mode === 'reset';

    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = me.resolveDataElementOptions(i, mode);
      const pointPosition = scale.getPointPositionForValue(i, dataset.data[i]);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      me.updateElement(point, i, properties, mode);
    }
  }

}

exports.RadarController = RadarController;
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  }
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear'
    }
  }
};

class ScatterController extends LineController {}

exports.ScatterController = ScatterController;
ScatterController.id = 'scatter';
ScatterController.defaults = {
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return '';
        },

        label(item) {
          return '(' + item.label + ', ' + item.formattedValue + ')';
        }

      }
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};
var controllers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BarController: BarController,
  BubbleController: BubbleController,
  DoughnutController: DoughnutController,
  LineController: LineController,
  PolarAreaController: PolarAreaController,
  PieController: PieController,
  RadarController: RadarController,
  ScatterController: ScatterController
});
exports.controllers = controllers;

function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}

class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }

  formats() {
    return abstract();
  }

  parse(value, format) {
    return abstract();
  }

  format(timestamp, format) {
    return abstract();
  }

  add(timestamp, amount, unit) {
    return abstract();
  }

  diff(a, b, unit) {
    return abstract();
  }

  startOf(timestamp, unit, weekday) {
    return abstract();
  }

  endOf(timestamp, unit) {
    return abstract();
  }

}

DateAdapter.override = function (members) {
  Object.assign(DateAdapter.prototype, members);
};

var adapters = {
  _date: DateAdapter
};
exports._adapters = adapters;

function getRelativePosition(e, chart) {
  if ('native' in e) {
    return {
      x: e.x,
      y: e.y
    };
  }

  return (0, _helpersSegment.z)(e, chart);
}

function evaluateAllVisibleItems(chart, handler) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  let index, data, element;

  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    ({
      index,
      data
    } = metasets[i]);

    for (let j = 0, jlen = data.length; j < jlen; ++j) {
      element = data[j];

      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}

function binarySearch(metaset, axis, value, intersect) {
  const {
    controller,
    data,
    _sorted
  } = metaset;
  const iScale = controller._cachedMeta.iScale;

  if (iScale && axis === iScale.axis && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _helpersSegment.B : _helpersSegment.y;

    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);

      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {
          lo: start.lo,
          hi: end.hi
        };
      }
    }
  }

  return {
    lo: 0,
    hi: data.length - 1
  };
}

function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];

  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {
      index,
      data
    } = metasets[i];
    const {
      lo,
      hi
    } = binarySearch(metasets[i], axis, value, intersect);

    for (let j = lo; j <= hi; ++j) {
      const element = data[j];

      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}

function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}

function getIntersectItems(chart, position, axis, useFinalPosition) {
  const items = [];

  if (!(0, _helpersSegment.A)(position, chart.chartArea, chart._minPadding)) {
    return items;
  }

  const evaluationFunc = function (element, datasetIndex, index) {
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };

  optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
  return items;
}

function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  let items = [];

  if (!(0, _helpersSegment.A)(position, chart.chartArea, chart._minPadding)) {
    return items;
  }

  const evaluationFunc = function (element, datasetIndex, index) {
    if (intersect && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }

    const center = element.getCenterPoint(useFinalPosition);

    if (!(0, _helpersSegment.A)(center, chart.chartArea, chart._minPadding)) {
      return;
    }

    const distance = distanceMetric(position, center);

    if (distance < minDistance) {
      items = [{
        element,
        datasetIndex,
        index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };

  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}

function getAxisItems(chart, e, options, useFinalPosition) {
  const position = getRelativePosition(e, chart);
  const items = [];
  const axis = options.axis;
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }

    if (element.inRange(position.x, position.y, useFinalPosition)) {
      intersectsItem = true;
    }
  });

  if (options.intersect && !intersectsItem) {
    return [];
  }

  return items;
}

var Interaction = {
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'x';
      const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);
      const elements = [];

      if (!items.length) {
        return [];
      }

      chart.getSortedVisibleDatasetMetas().forEach(meta => {
        const index = items[0].index;
        const element = meta.data[index];

        if (element && !element.skip) {
          elements.push({
            element,
            datasetIndex: meta.index,
            index
          });
        }
      });
      return elements;
    },

    dataset(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);

      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];

        for (let i = 0; i < data.length; ++i) {
          items.push({
            element: data[i],
            datasetIndex,
            index: i
          });
        }
      }

      return items;
    },

    point(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getIntersectItems(chart, position, axis, useFinalPosition);
    },

    nearest(chart, e, options, useFinalPosition) {
      const position = getRelativePosition(e, chart);
      const axis = options.axis || 'xy';
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
    },

    x(chart, e, options, useFinalPosition) {
      options.axis = 'x';
      return getAxisItems(chart, e, options, useFinalPosition);
    },

    y(chart, e, options, useFinalPosition) {
      options.axis = 'y';
      return getAxisItems(chart, e, options, useFinalPosition);
    }

  }
};
exports.Interaction = Interaction;
const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];

function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}

function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}

function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}

function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box;

  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    layoutBoxes.push({
      index: i,
      box,
      pos: box.position,
      horizontal: box.isHorizontal(),
      weight: box.weight
    });
  }

  return layoutBoxes;
}

function setLayoutDims(layouts, params) {
  let i, ilen, layout;

  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];

    if (layout.horizontal) {
      layout.width = layout.box.fullSize && params.availableWidth;
      layout.height = params.hBoxMaxHeight;
    } else {
      layout.width = params.vBoxMaxWidth;
      layout.height = layout.box.fullSize && params.availableHeight;
    }
  }
}

function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}

function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}

function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}

function updateDims(chartArea, params, layout) {
  const box = layout.box;
  const maxPadding = chartArea.maxPadding;

  if (!(0, _helpersSegment.i)(layout.pos)) {
    if (layout.size) {
      chartArea[layout.pos] -= layout.size;
    }

    layout.size = layout.horizontal ? box.height : box.width;
    chartArea[layout.pos] += layout.size;
  }

  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }

  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal ? {
    same: widthChanged,
    other: heightChanged
  } : {
    same: heightChanged,
    other: widthChanged
  };
}

function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;

  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }

  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}

function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;

  function marginForPositions(positions) {
    const margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(pos => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }

  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}

function fitBoxes(boxes, chartArea, params) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;

  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
    const {
      same,
      other
    } = updateDims(chartArea, params, layout);
    refit |= same && refitBoxes.length;
    changed = changed || other;

    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }

  return refit && fitBoxes(refitBoxes, chartArea, params) || changed;
}

function placeBoxes(boxes, chartArea, params) {
  const userPadding = params.padding;
  let x = chartArea.x;
  let y = chartArea.y;
  let i, ilen, layout, box;

  for (i = 0, ilen = boxes.length; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;

    if (layout.horizontal) {
      box.left = box.fullSize ? userPadding.left : chartArea.left;
      box.right = box.fullSize ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
      box.top = y;
      box.bottom = y + box.height;
      box.width = box.right - box.left;
      y = box.bottom;
    } else {
      box.left = x;
      box.right = x + box.width;
      box.top = box.fullSize ? userPadding.top : chartArea.top;
      box.bottom = box.fullSize ? params.outerHeight - userPadding.right : chartArea.top + chartArea.h;
      box.height = box.bottom - box.top;
      x = box.right;
    }
  }

  chartArea.x = x;
  chartArea.y = y;
}

_helpersSegment.d.set('layout', {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }

    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;

    item._layers = item._layers || function () {
      return [{
        z: 0,

        draw(chartArea) {
          item.draw(chartArea);
        }

      }];
    };

    chart.boxes.push(item);
  },

  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;

    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },

  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },

  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }

    const padding = (0, _helpersSegment.C)(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    (0, _helpersSegment.D)(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, (0, _helpersSegment.C)(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params);
    fitBoxes(verticalBoxes, chartArea, params);

    if (fitBoxes(horizontalBoxes, chartArea, params)) {
      fitBoxes(verticalBoxes, chartArea, params);
    }

    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w
    };
    (0, _helpersSegment.D)(boxes.chartArea, layout => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h);
    });
  }

};
exports.layouts = layouts;

class BasePlatform {
  acquireContext(canvas, aspectRatio) {}

  releaseContext(context) {
    return false;
  }

  addEventListener(chart, type, listener) {}

  removeEventListener(chart, type, listener) {}

  getDevicePixelRatio() {
    return 1;
  }

  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }

  isAttached(canvas) {
    return true;
  }

}

exports.BasePlatform = BasePlatform;

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }

}

exports.BasicPlatform = BasicPlatform;
const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};

const isNullOrEmpty = value => value === null || value === '';

function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';

  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = (0, _helpersSegment.G)(canvas, 'width');

    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }

  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = (0, _helpersSegment.G)(canvas, 'height');

      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }

  return canvas;
}

const eventListenerOptions = _helpersSegment.J ? {
  passive: true
} : false;

function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}

function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {
    x,
    y
  } = (0, _helpersSegment.z)(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}

function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0, _helpersSegment.F)(canvas);
  const element = container || canvas;
  const observer = new MutationObserver(entries => {
    const parent = (0, _helpersSegment.F)(element);
    entries.forEach(entry => {
      for (let i = 0; i < entry.addedNodes.length; i++) {
        const added = entry.addedNodes[i];

        if (added === element || added === parent) {
          listener(entry.target);
        }
      }
    });
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}

function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0, _helpersSegment.F)(canvas);

  if (!container) {
    return;
  }

  const observer = new MutationObserver(entries => {
    entries.forEach(entry => {
      for (let i = 0; i < entry.removedNodes.length; i++) {
        if (entry.removedNodes[i] === canvas) {
          listener();
          break;
        }
      }
    });
  });
  observer.observe(container, {
    childList: true
  });
  return observer;
}

const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;

function onWindowResize() {
  const dpr = window.devicePixelRatio;

  if (dpr === oldDevicePixelRatio) {
    return;
  }

  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}

function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }

  drpListeningCharts.set(chart, resize);
}

function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);

  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}

function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0, _helpersSegment.F)(canvas);

  if (!container) {
    return;
  }

  const resize = (0, _helpersSegment.I)((width, height) => {
    const w = container.clientWidth;
    listener(width, height);

    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;

    if (width === 0 && height === 0) {
      return;
    }

    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}

function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }

  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}

function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = (0, _helpersSegment.I)(event => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart, args => {
    const event = args[0];
    return [event, event.offsetX, event.offsetY];
  });
  addListener(canvas, type, proxy);
  return proxy;
}

class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');

    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }

    return null;
  }

  releaseContext(context) {
    const canvas = context.canvas;

    if (!canvas[EXPANDO_KEY]) {
      return false;
    }

    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach(prop => {
      const value = initial[prop];

      if ((0, _helpersSegment.j)(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach(key => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }

  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }

  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];

    if (!proxy) {
      return;
    }

    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }

  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }

  getMaximumSize(canvas, width, height, aspectRatio) {
    return (0, _helpersSegment.E)(canvas, width, height, aspectRatio);
  }

  isAttached(canvas) {
    const container = (0, _helpersSegment.F)(canvas);
    return !!(container && (0, _helpersSegment.F)(container));
  }

}

exports.DomPlatform = DomPlatform;

class Element {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }

  tooltipPosition(useFinalPosition) {
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }

  hasValue() {
    return (0, _helpersSegment.w)(this.x) && (0, _helpersSegment.w)(this.y);
  }

  getProps(props, final) {
    const me = this;
    const anims = this.$animations;

    if (!final || !anims) {
      return me;
    }

    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : me[prop];
    });
    return ret;
  }

}

exports.Element = Element;
Element.defaults = {};
Element.defaultRoutes = undefined;
const formatters = {
  values(value) {
    return (0, _helpersSegment.b)(value) ? value : '' + value;
  },

  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }

    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;

    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));

      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }

      delta = calculateDelta(tickValue, ticks);
    }

    const logDelta = (0, _helpersSegment.K)(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {
      notation,
      minimumFractionDigits: numDecimal,
      maximumFractionDigits: numDecimal
    };
    Object.assign(options, this.options.ticks.format);
    return (0, _helpersSegment.p)(tickValue, locale, options);
  },

  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }

    const remain = tickValue / Math.pow(10, Math.floor((0, _helpersSegment.K)(tickValue)));

    if (remain === 1 || remain === 2 || remain === 5) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }

    return '';
  }

};

function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;

  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }

  return delta;
}

var Ticks = {
  formatters
};
exports.Ticks = Ticks;

_helpersSegment.d.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (_ctx, options) => options.lineWidth,
    tickColor: (_ctx, options) => options.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0.0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: false,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2
  }
});

_helpersSegment.d.route('scale.ticks', 'color', '', 'color');

_helpersSegment.d.route('scale.grid', 'color', '', 'borderColor');

_helpersSegment.d.route('scale.grid', 'borderColor', '', 'borderColor');

_helpersSegment.d.route('scale.title', 'color', '', 'color');

_helpersSegment.d.describe('scale', {
  _fallback: false,
  _scriptable: name => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
  _indexable: name => name !== 'borderDash' && name !== 'tickBorderDash'
});

_helpersSegment.d.describe('scales', {
  _fallback: 'scale'
});

function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];

  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }

  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);

  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, (0, _helpersSegment.j)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);

    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }

    skip(ticks, newTicks, spacing, last, (0, _helpersSegment.j)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }

  skip(ticks, newTicks, spacing);
  return newTicks;
}

function determineMaxTicks(scale) {
  const offset = scale.options.offset;

  const tickLength = scale._tickSize();

  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}

function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;

  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }

  const factors = (0, _helpersSegment.L)(evenMajorSpacing);

  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];

    if (factor > spacing) {
      return factor;
    }
  }

  return Math.max(spacing, 1);
}

function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;

  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }

  return result;
}

function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);

  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}

function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = (0, _helpersSegment.v)(majorStart, 0);
  const end = Math.min((0, _helpersSegment.v)(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);

  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }

  next = start;

  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }

  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}

function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;

  if (len < 2) {
    return false;
  }

  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }

  return diff;
}

const reverseAlign = align => align === 'left' ? 'right' : align === 'right' ? 'left' : align;

const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;

function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;

  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }

  return result;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;

  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }

    lineValue += validIndex < index ? offset : -offset;

    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }

  return lineValue;
}

function garbageCollect(caches, length) {
  (0, _helpersSegment.D)(caches, cache => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;

    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }

      gc.splice(0, gcLen);
    }
  });
}

function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}

function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }

  const font = (0, _helpersSegment.W)(options.font, fallback);
  const padding = (0, _helpersSegment.C)(options.padding);
  const lines = (0, _helpersSegment.b)(options.text) ? options.text.length : 1;
  return lines * font.lineHeight + padding.height;
}

function createScaleContext(parent, scale) {
  return Object.assign(Object.create(parent), {
    scale,
    type: 'scale'
  });
}

function createTickContext(parent, index, tick) {
  return Object.assign(Object.create(parent), {
    tick,
    index,
    type: 'tick'
  });
}

function titleAlign(align, position, reverse) {
  let ret = (0, _helpersSegment.X)(align);

  if (reverse && position !== 'right' || !reverse && position === 'right') {
    ret = reverseAlign(ret);
  }

  return ret;
}

function titleArgs(scale, offset, position, align) {
  const {
    top,
    left,
    bottom,
    right
  } = scale;
  let rotation = 0;
  let maxWidth, titleX, titleY;

  if (scale.isHorizontal()) {
    titleX = (0, _helpersSegment.Y)(align, left, right);
    titleY = offsetFromEdge(scale, position, offset);
    maxWidth = right - left;
  } else {
    titleX = offsetFromEdge(scale, position, offset);
    titleY = (0, _helpersSegment.Y)(align, bottom, top);
    rotation = position === 'left' ? -_helpersSegment.H : _helpersSegment.H;
  }

  return {
    titleX,
    titleY,
    maxWidth,
    rotation
  };
}

class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }

  init(options) {
    const me = this;
    me.options = options.setContext(me.getContext());
    me.axis = options.axis;
    me._userMin = me.parse(options.min);
    me._userMax = me.parse(options.max);
    me._suggestedMin = me.parse(options.suggestedMin);
    me._suggestedMax = me.parse(options.suggestedMax);
  }

  parse(raw, index) {
    return raw;
  }

  getUserBounds() {
    let {
      _userMin,
      _userMax,
      _suggestedMin,
      _suggestedMax
    } = this;
    _userMin = (0, _helpersSegment.M)(_userMin, Number.POSITIVE_INFINITY);
    _userMax = (0, _helpersSegment.M)(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = (0, _helpersSegment.M)(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = (0, _helpersSegment.M)(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: (0, _helpersSegment.M)(_userMin, _suggestedMin),
      max: (0, _helpersSegment.M)(_userMax, _suggestedMax),
      minDefined: (0, _helpersSegment.g)(_userMin),
      maxDefined: (0, _helpersSegment.g)(_userMax)
    };
  }

  getMinMax(canStack) {
    const me = this;
    let {
      min,
      max,
      minDefined,
      maxDefined
    } = me.getUserBounds();
    let range;

    if (minDefined && maxDefined) {
      return {
        min,
        max
      };
    }

    const metas = me.getMatchingVisibleMetas();

    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(me, canStack);

      if (!minDefined) {
        min = Math.min(min, range.min);
      }

      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }

    return {
      min: (0, _helpersSegment.M)(min, (0, _helpersSegment.M)(max, min)),
      max: (0, _helpersSegment.M)(max, (0, _helpersSegment.M)(min, max))
    };
  }

  getPadding() {
    const me = this;
    return {
      left: me.paddingLeft || 0,
      top: me.paddingTop || 0,
      right: me.paddingRight || 0,
      bottom: me.paddingBottom || 0
    };
  }

  getTicks() {
    return this.ticks;
  }

  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }

  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }

  beforeUpdate() {
    (0, _helpersSegment.N)(this.options.beforeUpdate, [this]);
  }

  update(maxWidth, maxHeight, margins) {
    const me = this;
    const tickOpts = me.options.ticks;
    const sampleSize = tickOpts.sampleSize;
    me.beforeUpdate();
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    me.ticks = null;
    me._labelSizes = null;
    me._gridLineItems = null;
    me._labelItems = null;
    me.beforeSetDimensions();
    me.setDimensions();
    me.afterSetDimensions();
    me._maxLength = me.isHorizontal() ? me.width + margins.left + margins.right : me.height + margins.top + margins.bottom;

    if (!me._dataLimitsCached) {
      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();
      me._range = (0, _helpersSegment.O)(me, me.options.grace);
      me._dataLimitsCached = true;
    }

    me.beforeBuildTicks();
    me.ticks = me.buildTicks() || [];
    me.afterBuildTicks();
    const samplingEnabled = sampleSize < me.ticks.length;

    me._convertTicksToLabels(samplingEnabled ? sample(me.ticks, sampleSize) : me.ticks);

    me.configure();
    me.beforeCalculateLabelRotation();
    me.calculateLabelRotation();
    me.afterCalculateLabelRotation();

    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      me.ticks = autoSkip(me, me.ticks);
      me._labelSizes = null;
    }

    if (samplingEnabled) {
      me._convertTicksToLabels(me.ticks);
    }

    me.beforeFit();
    me.fit();
    me.afterFit();
    me.afterUpdate();
  }

  configure() {
    const me = this;
    let reversePixels = me.options.reverse;
    let startPixel, endPixel;

    if (me.isHorizontal()) {
      startPixel = me.left;
      endPixel = me.right;
    } else {
      startPixel = me.top;
      endPixel = me.bottom;
      reversePixels = !reversePixels;
    }

    me._startPixel = startPixel;
    me._endPixel = endPixel;
    me._reversePixels = reversePixels;
    me._length = endPixel - startPixel;
    me._alignToPixels = me.options.alignToPixels;
  }

  afterUpdate() {
    (0, _helpersSegment.N)(this.options.afterUpdate, [this]);
  }

  beforeSetDimensions() {
    (0, _helpersSegment.N)(this.options.beforeSetDimensions, [this]);
  }

  setDimensions() {
    const me = this;

    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }

    me.paddingLeft = 0;
    me.paddingTop = 0;
    me.paddingRight = 0;
    me.paddingBottom = 0;
  }

  afterSetDimensions() {
    (0, _helpersSegment.N)(this.options.afterSetDimensions, [this]);
  }

  _callHooks(name) {
    const me = this;
    me.chart.notifyPlugins(name, me.getContext());
    (0, _helpersSegment.N)(me.options[name], [me]);
  }

  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }

  determineDataLimits() {}

  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }

  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }

  buildTicks() {
    return [];
  }

  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }

  beforeTickToLabelConversion() {
    (0, _helpersSegment.N)(this.options.beforeTickToLabelConversion, [this]);
  }

  generateTickLabels(ticks) {
    const me = this;
    const tickOpts = me.options.ticks;
    let i, ilen, tick;

    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = (0, _helpersSegment.N)(tickOpts.callback, [tick.value, i, ticks], me);
    }

    for (i = 0; i < ilen; i++) {
      if ((0, _helpersSegment.j)(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
  }

  afterTickToLabelConversion() {
    (0, _helpersSegment.N)(this.options.afterTickToLabelConversion, [this]);
  }

  beforeCalculateLabelRotation() {
    (0, _helpersSegment.N)(this.options.beforeCalculateLabelRotation, [this]);
  }

  calculateLabelRotation() {
    const me = this;
    const options = me.options;
    const tickOpts = options.ticks;
    const numTicks = me.ticks.length;
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;

    if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
      me.labelRotation = minRotation;
      return;
    }

    const labelSizes = me._getLabelSizes();

    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = (0, _helpersSegment.x)(me.chart.width - maxLabelWidth, 0, me.maxWidth);
    tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);

    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = me.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, me.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = (0, _helpersSegment.Q)(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }

    me.labelRotation = labelRotation;
  }

  afterCalculateLabelRotation() {
    (0, _helpersSegment.N)(this.options.afterCalculateLabelRotation, [this]);
  }

  beforeFit() {
    (0, _helpersSegment.N)(this.options.beforeFit, [this]);
  }

  fit() {
    const me = this;
    const minSize = {
      width: 0,
      height: 0
    };
    const {
      chart,
      options: {
        ticks: tickOpts,
        title: titleOpts,
        grid: gridOpts
      }
    } = me;

    const display = me._isVisible();

    const isHorizontal = me.isHorizontal();

    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);

      if (isHorizontal) {
        minSize.width = me.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = me.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }

      if (tickOpts.display && me.ticks.length) {
        const {
          first,
          last,
          widest,
          highest
        } = me._getLabelSizes();

        const tickPadding = tickOpts.padding * 2;
        const angleRadians = (0, _helpersSegment.t)(me.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);

        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth + tickPadding);
        }

        me._calculatePadding(first, last, sin, cos);
      }
    }

    me._handleMargins();

    if (isHorizontal) {
      me.width = me._length = chart.width - me._margins.left - me._margins.right;
      me.height = minSize.height;
    } else {
      me.width = minSize.width;
      me.height = me._length = chart.height - me._margins.top - me._margins.bottom;
    }
  }

  _calculatePadding(first, last, sin, cos) {
    const me = this;
    const {
      ticks: {
        align,
        padding
      },
      position
    } = me.options;
    const isRotated = me.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && me.axis === 'x';

    if (me.isHorizontal()) {
      const offsetLeft = me.getPixelForTick(0) - me.left;
      const offsetRight = me.right - me.getPixelForTick(me.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;

      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }

      me.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * me.width / (me.width - offsetLeft), 0);
      me.paddingRight = Math.max((paddingRight - offsetRight + padding) * me.width / (me.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;

      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }

      me.paddingTop = paddingTop + padding;
      me.paddingBottom = paddingBottom + padding;
    }
  }

  _handleMargins() {
    const me = this;

    if (me._margins) {
      me._margins.left = Math.max(me.paddingLeft, me._margins.left);
      me._margins.top = Math.max(me.paddingTop, me._margins.top);
      me._margins.right = Math.max(me.paddingRight, me._margins.right);
      me._margins.bottom = Math.max(me.paddingBottom, me._margins.bottom);
    }
  }

  afterFit() {
    (0, _helpersSegment.N)(this.options.afterFit, [this]);
  }

  isHorizontal() {
    const {
      axis,
      position
    } = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }

  isFullSize() {
    return this.options.fullSize;
  }

  _convertTicksToLabels(ticks) {
    const me = this;
    me.beforeTickToLabelConversion();
    me.generateTickLabels(ticks);
    me.afterTickToLabelConversion();
  }

  _getLabelSizes() {
    const me = this;
    let labelSizes = me._labelSizes;

    if (!labelSizes) {
      const sampleSize = me.options.ticks.sampleSize;
      let ticks = me.ticks;

      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }

      me._labelSizes = labelSizes = me._computeLabelSizes(ticks, ticks.length);
    }

    return labelSizes;
  }

  _computeLabelSizes(ticks, length) {
    const {
      ctx,
      _longestTextCache: caches
    } = this;
    const widths = [];
    const heights = [];
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;

    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0;

      if (!(0, _helpersSegment.j)(label) && !(0, _helpersSegment.b)(label)) {
        width = (0, _helpersSegment.R)(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if ((0, _helpersSegment.b)(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];

          if (!(0, _helpersSegment.j)(nestedLabel) && !(0, _helpersSegment.b)(nestedLabel)) {
            width = (0, _helpersSegment.R)(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }

      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }

    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);

    const valueAt = idx => ({
      width: widths[idx] || 0,
      height: heights[idx] || 0
    });

    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights
    };
  }

  getLabelForValue(value) {
    return value;
  }

  getPixelForValue(value, index) {
    return NaN;
  }

  getValueForPixel(pixel) {}

  getPixelForTick(index) {
    const ticks = this.ticks;

    if (index < 0 || index > ticks.length - 1) {
      return null;
    }

    return this.getPixelForValue(ticks[index].value);
  }

  getPixelForDecimal(decimal) {
    const me = this;

    if (me._reversePixels) {
      decimal = 1 - decimal;
    }

    const pixel = me._startPixel + decimal * me._length;
    return (0, _helpersSegment.S)(me._alignToPixels ? (0, _helpersSegment.U)(me.chart, pixel, 0) : pixel);
  }

  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }

  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }

  getBaseValue() {
    const {
      min,
      max
    } = this;
    return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
  }

  getContext(index) {
    const me = this;
    const ticks = me.ticks || [];

    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context || (tick.$context = createTickContext(me.getContext(), index, tick));
    }

    return me.$context || (me.$context = createScaleContext(me.chart.getContext(), me));
  }

  _tickSize() {
    const me = this;
    const optionTicks = me.options.ticks;
    const rot = (0, _helpersSegment.t)(me.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));

    const labelSizes = me._getLabelSizes();

    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
  }

  _isVisible() {
    const display = this.options.display;

    if (display !== 'auto') {
      return !!display;
    }

    return this.getMatchingVisibleMetas().length > 0;
  }

  _computeGridLineItems(chartArea) {
    const me = this;
    const axis = me.axis;
    const chart = me.chart;
    const options = me.options;
    const {
      grid,
      position
    } = options;
    const offset = grid.offset;
    const isHorizontal = me.isHorizontal();
    const ticks = me.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = grid.setContext(me.getContext());
    const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
    const axisHalfWidth = axisWidth / 2;

    const alignBorderValue = function (pixel) {
      return (0, _helpersSegment.U)(chart, pixel, axisWidth);
    };

    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;

    if (position === 'top') {
      borderValue = alignBorderValue(me.bottom);
      ty1 = me.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(me.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = me.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(me.right);
      tx1 = me.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(me.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = me.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if ((0, _helpersSegment.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
      }

      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if ((0, _helpersSegment.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
      }

      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }

    for (i = 0; i < ticksLength; ++i) {
      const optsAtIndex = grid.setContext(me.getContext(i));
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = grid.borderDash || [];
      const borderDashOffset = optsAtIndex.borderDashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(me, i, offset);

      if (lineValue === undefined) {
        continue;
      }

      alignedLineValue = (0, _helpersSegment.U)(chart, lineValue, lineWidth);

      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }

      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset
      });
    }

    me._ticksLength = ticksLength;
    me._borderValue = borderValue;
    return items;
  }

  _computeLabelItems(chartArea) {
    const me = this;
    const axis = me.axis;
    const options = me.options;
    const {
      position,
      ticks: optionTicks
    } = options;
    const isHorizontal = me.isHorizontal();
    const ticks = me.ticks;
    const {
      align,
      crossAlign,
      padding,
      mirror
    } = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -(0, _helpersSegment.t)(me.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';

    if (position === 'top') {
      y = me.bottom - hTickAndPadding;
      textAlign = me._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = me.top + hTickAndPadding;
      textAlign = me._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = me._getYAxisLabelAlignment(tl);

      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = me._getYAxisLabelAlignment(tl);

      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
      } else if ((0, _helpersSegment.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = me.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }

      textAlign = me._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
      } else if ((0, _helpersSegment.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = me.chart.scales[positionAxisID].getPixelForValue(value);
      }

      textAlign = me._getYAxisLabelAlignment(tl).textAlign;
    }

    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }

    const labelSizes = me._getLabelSizes();

    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(me.getContext(i));
      pixel = me.getPixelForTick(i) + optionTicks.labelOffset;
      font = me._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = (0, _helpersSegment.b)(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;

      if (isHorizontal) {
        x = pixel;

        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }

        if (mirror) {
          textOffset *= -1;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }

      let backdrop;

      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = (0, _helpersSegment.C)(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = y + textOffset - labelPadding.top;
        let left = x - labelPadding.left;

        switch (textBaseline) {
          case 'middle':
            top -= height / 2;
            break;

          case 'bottom':
            top -= height;
            break;
        }

        switch (textAlign) {
          case 'center':
            left -= width / 2;
            break;

          case 'right':
            left -= width;
            break;
        }

        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor
        };
      }

      items.push({
        rotation,
        label,
        font,
        color,
        strokeColor,
        strokeWidth,
        textOffset,
        textAlign,
        textBaseline,
        translation: [x, y],
        backdrop
      });
    }

    return items;
  }

  _getXAxisLabelAlignment() {
    const me = this;
    const {
      position,
      ticks
    } = me.options;
    const rotation = -(0, _helpersSegment.t)(me.labelRotation);

    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }

    let align = 'center';

    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    }

    return align;
  }

  _getYAxisLabelAlignment(tl) {
    const me = this;
    const {
      position,
      ticks: {
        crossAlign,
        mirror,
        padding
      }
    } = me.options;

    const labelSizes = me._getLabelSizes();

    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;

    if (position === 'left') {
      if (mirror) {
        textAlign = 'left';
        x = me.right + padding;
      } else {
        x = me.right - tickAndPadding;

        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= widest / 2;
        } else {
          textAlign = 'left';
          x = me.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        textAlign = 'right';
        x = me.left + padding;
      } else {
        x = me.left + tickAndPadding;

        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = me.right;
        }
      }
    } else {
      textAlign = 'right';
    }

    return {
      textAlign,
      x
    };
  }

  _computeLabelArea() {
    const me = this;

    if (me.options.ticks.mirror) {
      return;
    }

    const chart = me.chart;
    const position = me.options.position;

    if (position === 'left' || position === 'right') {
      return {
        top: 0,
        left: me.left,
        bottom: chart.height,
        right: me.right
      };
    }

    if (position === 'top' || position === 'bottom') {
      return {
        top: me.top,
        left: 0,
        bottom: me.bottom,
        right: chart.width
      };
    }
  }

  drawBackground() {
    const {
      ctx,
      options: {
        backgroundColor
      },
      left,
      top,
      width,
      height
    } = this;

    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }

  getLineWidthForValue(value) {
    const me = this;
    const grid = me.options.grid;

    if (!me._isVisible() || !grid.display) {
      return 0;
    }

    const ticks = me.ticks;
    const index = ticks.findIndex(t => t.value === value);

    if (index >= 0) {
      const opts = grid.setContext(me.getContext(index));
      return opts.lineWidth;
    }

    return 0;
  }

  drawGrid(chartArea) {
    const me = this;
    const grid = me.options.grid;
    const ctx = me.ctx;

    const items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));

    let i, ilen;

    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }

      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };

    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];

        if (grid.drawOnChartArea) {
          drawLine({
            x: item.x1,
            y: item.y1
          }, {
            x: item.x2,
            y: item.y2
          }, item);
        }

        if (grid.drawTicks) {
          drawLine({
            x: item.tx1,
            y: item.ty1
          }, {
            x: item.tx2,
            y: item.ty2
          }, {
            color: item.tickColor,
            width: item.tickWidth,
            borderDash: item.tickBorderDash,
            borderDashOffset: item.tickBorderDashOffset
          });
        }
      }
    }
  }

  drawBorder() {
    const me = this;
    const {
      chart,
      ctx,
      options: {
        grid
      }
    } = me;
    const borderOpts = grid.setContext(me.getContext());
    const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;

    if (!axisWidth) {
      return;
    }

    const lastLineWidth = grid.setContext(me.getContext(0)).lineWidth;
    const borderValue = me._borderValue;
    let x1, x2, y1, y2;

    if (me.isHorizontal()) {
      x1 = (0, _helpersSegment.U)(chart, me.left, axisWidth) - axisWidth / 2;
      x2 = (0, _helpersSegment.U)(chart, me.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = (0, _helpersSegment.U)(chart, me.top, axisWidth) - axisWidth / 2;
      y2 = (0, _helpersSegment.U)(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }

    ctx.save();
    ctx.lineWidth = borderOpts.borderWidth;
    ctx.strokeStyle = borderOpts.borderColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  drawLabels(chartArea) {
    const me = this;
    const optionTicks = me.options.ticks;

    if (!optionTicks.display) {
      return;
    }

    const ctx = me.ctx;

    const area = me._computeLabelArea();

    if (area) {
      (0, _helpersSegment.k)(ctx, area);
    }

    const items = me._labelItems || (me._labelItems = me._computeLabelItems(chartArea));

    let i, ilen;

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      const item = items[i];
      const tickFont = item.font;
      const label = item.label;

      if (item.backdrop) {
        ctx.fillStyle = item.backdrop.color;
        ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
      }

      let y = item.textOffset;
      (0, _helpersSegment.V)(ctx, label, 0, y, tickFont, item);
    }

    if (area) {
      (0, _helpersSegment.m)(ctx);
    }
  }

  drawTitle() {
    const {
      ctx,
      options: {
        position,
        title,
        reverse
      }
    } = this;

    if (!title.display) {
      return;
    }

    const font = (0, _helpersSegment.W)(title.font);
    const padding = (0, _helpersSegment.C)(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;

    if (position === 'bottom') {
      offset += padding.bottom;

      if ((0, _helpersSegment.b)(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }

    const {
      titleX,
      titleY,
      maxWidth,
      rotation
    } = titleArgs(this, offset, position, align);
    (0, _helpersSegment.V)(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  }

  draw(chartArea) {
    const me = this;

    if (!me._isVisible()) {
      return;
    }

    me.drawBackground();
    me.drawGrid(chartArea);
    me.drawBorder();
    me.drawTitle();
    me.drawLabels(chartArea);
  }

  _layers() {
    const me = this;
    const opts = me.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = opts.grid && opts.grid.z || 0;

    if (!me._isVisible() || me.draw !== Scale.prototype.draw) {
      return [{
        z: tz,

        draw(chartArea) {
          me.draw(chartArea);
        }

      }];
    }

    return [{
      z: gz,

      draw(chartArea) {
        me.drawBackground();
        me.drawGrid(chartArea);
        me.drawTitle();
      }

    }, {
      z: gz + 1,

      draw() {
        me.drawBorder();
      }

    }, {
      z: tz,

      draw(chartArea) {
        me.drawLabels(chartArea);
      }

    }];
  }

  getMatchingVisibleMetas(type) {
    const me = this;
    const metas = me.chart.getSortedVisibleDatasetMetas();
    const axisID = me.axis + 'AxisID';
    const result = [];
    let i, ilen;

    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];

      if (meta[axisID] === me.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }

    return result;
  }

  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return (0, _helpersSegment.W)(opts.font);
  }

  _maxDigits() {
    const me = this;

    const fontSize = me._resolveTickFontOptions(0).lineHeight;

    return (me.isHorizontal() ? me.width : me.height) / fontSize;
  }

}

exports.Scale = Scale;

class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }

  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }

  register(item) {
    const me = this;
    const proto = Object.getPrototypeOf(item);
    let parentScope;

    if (isIChartComponent(proto)) {
      parentScope = me.register(proto);
    }

    const items = me.items;
    const id = item.id;
    const scope = me.scope + '.' + id;

    if (!id) {
      throw new Error('class does not have id: ' + item);
    }

    if (id in items) {
      return scope;
    }

    items[id] = item;
    registerDefaults(item, scope, parentScope);

    if (me.override) {
      _helpersSegment.d.override(item.id, item.overrides);
    }

    return scope;
  }

  get(id) {
    return this.items[id];
  }

  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;

    if (id in items) {
      delete items[id];
    }

    if (scope && id in _helpersSegment.d[scope]) {
      delete _helpersSegment.d[scope][id];

      if (this.override) {
        delete _helpersSegment.Z[id];
      }
    }
  }

}

function registerDefaults(item, scope, parentScope) {
  const itemDefaults = (0, _helpersSegment.$)(Object.create(null), [parentScope ? _helpersSegment.d.get(parentScope) : {}, _helpersSegment.d.get(scope), item.defaults]);

  _helpersSegment.d.set(scope, itemDefaults);

  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }

  if (item.descriptors) {
    _helpersSegment.d.describe(scope, item.descriptors);
  }
}

function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');

    _helpersSegment.d.route(sourceScope, sourceName, targetScope, targetName);
  });
}

function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}

class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }

  add(...args) {
    this._each('register', args);
  }

  remove(...args) {
    this._each('unregister', args);
  }

  addControllers(...args) {
    this._each('register', args, this.controllers);
  }

  addElements(...args) {
    this._each('register', args, this.elements);
  }

  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }

  addScales(...args) {
    this._each('register', args, this.scales);
  }

  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }

  getElement(id) {
    return this._get(id, this.elements, 'element');
  }

  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }

  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }

  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }

  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }

  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }

  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }

  _each(method, args, typedRegistry) {
    const me = this;
    [...args].forEach(arg => {
      const reg = typedRegistry || me._getRegistryForType(arg);

      if (typedRegistry || reg.isForType(arg) || reg === me.plugins && arg.id) {
        me._exec(method, reg, arg);
      } else {
        (0, _helpersSegment.D)(arg, item => {
          const itemReg = typedRegistry || me._getRegistryForType(item);

          me._exec(method, itemReg, item);
        });
      }
    });
  }

  _exec(method, registry, component) {
    const camelMethod = (0, _helpersSegment.a0)(method);
    (0, _helpersSegment.N)(component['before' + camelMethod], [], component);
    registry[method](component);
    (0, _helpersSegment.N)(component['after' + camelMethod], [], component);
  }

  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];

      if (reg.isForType(type)) {
        return reg;
      }
    }

    return this.plugins;
  }

  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);

    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }

    return item;
  }

}

var registry = new Registry();
exports.registry = registry;

class PluginService {
  constructor() {
    this._init = [];
  }

  notify(chart, hook, args, filter) {
    const me = this;

    if (hook === 'beforeInit') {
      me._init = me._createDescriptors(chart, true);

      me._notify(me._init, chart, 'install');
    }

    const descriptors = filter ? me._descriptors(chart).filter(filter) : me._descriptors(chart);

    const result = me._notify(descriptors, chart, hook, args);

    if (hook === 'destroy') {
      me._notify(descriptors, chart, 'stop');

      me._notify(me._init, chart, 'uninstall');
    }

    return result;
  }

  _notify(descriptors, chart, hook, args) {
    args = args || {};

    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];

      if ((0, _helpersSegment.N)(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }

    return true;
  }

  invalidate() {
    if (!(0, _helpersSegment.j)(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }

  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }

    const descriptors = this._cache = this._createDescriptors(chart);

    this._notifyStateChanges(chart);

    return descriptors;
  }

  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = (0, _helpersSegment.v)(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }

  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;

    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));

    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');

    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }

}

function allPlugins(config) {
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);

  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }

  const local = config.plugins || [];

  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];

    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
    }
  }

  return plugins;
}

function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }

  if (options === true) {
    return {};
  }

  return options;
}

function createDescriptors(chart, plugins, options, all) {
  const result = [];
  const context = chart.getContext();

  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    const id = plugin.id;
    const opts = getOpts(options[id], all);

    if (opts === null) {
      continue;
    }

    result.push({
      plugin,
      options: pluginOpts(chart.config, plugin, opts, context)
    });
  }

  return result;
}

function pluginOpts(config, plugin, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  return config.createResolver(scopes, context, [''], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}

function getIndexAxis(type, options) {
  const datasetDefaults = _helpersSegment.d.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}

function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;

  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }

  return axis;
}

function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}

function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }

  if (position === 'left' || position === 'right') {
    return 'y';
  }
}

function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y') {
    return id;
  }

  return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}

function mergeScaleConfig(config, options) {
  const chartDefaults = _helpersSegment.Z[config.type] || {
    scales: {}
  };
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const firstIDs = Object.create(null);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = (0, _helpersSegment.a6)(Object.create(null), [{
      axis
    }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = _helpersSegment.Z[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || firstIDs[axis] || axis;
      scales[id] = scales[id] || Object.create(null);
      (0, _helpersSegment.a6)(scales[id], [{
        axis
      }, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    (0, _helpersSegment.a6)(scale, [_helpersSegment.d.scales[scale.type], _helpersSegment.d.scale]);
  });
  return scales;
}

function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = (0, _helpersSegment.v)(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}

function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}

function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}

const keyCache = new Map();
const keysCached = new Set();

function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);

  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }

  return keys;
}

const addIfFound = (set, obj, key) => {
  const opts = (0, _helpersSegment.f)(obj, key);

  if (opts !== undefined) {
    set.add(opts);
  }
};

class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }

  get type() {
    return this._config.type;
  }

  set type(type) {
    this._config.type = type;
  }

  get data() {
    return this._config.data;
  }

  set data(data) {
    this._config.data = initData(data);
  }

  get options() {
    return this._config.options;
  }

  set options(options) {
    this._config.options = options;
  }

  get plugins() {
    return this._config.plugins;
  }

  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }

  clearCache() {
    this._scopeCache.clear();

    this._resolverCache.clear();
  }

  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType, () => [[`datasets.${datasetType}`, '']]);
  }

  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`, () => [[`datasets.${datasetType}.transitions.${transition}`, `transitions.${transition}`], [`datasets.${datasetType}`, '']]);
  }

  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`, () => [[`datasets.${datasetType}.elements.${elementType}`, `datasets.${datasetType}`, `elements.${elementType}`, '']]);
  }

  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`, () => [[`plugins.${id}`, ...(plugin.additionalOptionScopes || [])]]);
  }

  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;

    let cache = _scopeCache.get(mainScope);

    if (!cache || resetCache) {
      cache = new Map();

      _scopeCache.set(mainScope, cache);
    }

    return cache;
  }

  getOptionScopes(mainScope, keyLists, resetCache) {
    const {
      options,
      type
    } = this;

    const cache = this._cachedScopes(mainScope, resetCache);

    const cached = cache.get(keyLists);

    if (cached) {
      return cached;
    }

    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }

      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, _helpersSegment.Z[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, _helpersSegment.d, key));
      keys.forEach(key => addIfFound(scopes, _helpersSegment.a1, key));
    });
    const array = [...scopes];

    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }

    return array;
  }

  chartOptionScopes() {
    const {
      options,
      type
    } = this;
    return [options, _helpersSegment.Z[type] || {}, _helpersSegment.d.datasets[type] || {}, {
      type
    }, _helpersSegment.d, _helpersSegment.a1];
  }

  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {
      $shared: true
    };
    const {
      resolver,
      subPrefixes
    } = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;

    if (needContext(resolver, names)) {
      result.$shared = false;
      context = (0, _helpersSegment.a2)(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = (0, _helpersSegment.a3)(resolver, context, subResolver);
    }

    for (const prop of names) {
      result[prop] = options[prop];
    }

    return result;
  }

  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {
      resolver
    } = getResolver(this._resolverCache, scopes, prefixes);
    return (0, _helpersSegment.i)(context) ? (0, _helpersSegment.a3)(resolver, context, undefined, descriptorDefaults) : resolver;
  }

}

function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);

  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }

  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);

  if (!cached) {
    const resolver = (0, _helpersSegment.a4)(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }

  return cached;
}

function needContext(proxy, names) {
  const {
    isScriptable,
    isIndexable
  } = (0, _helpersSegment.a5)(proxy);

  for (const prop of names) {
    if (isScriptable(prop) && (0, _helpersSegment.a2)(proxy[prop]) || isIndexable(prop) && (0, _helpersSegment.b)(proxy[prop])) {
      return true;
    }
  }

  return false;
}

var version = "3.3.2";
const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];

function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}

function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}

function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  (0, _helpersSegment.N)(animationOptions && animationOptions.onComplete, [context], chart);
}

function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  (0, _helpersSegment.N)(animationOptions && animationOptions.onProgress, [context], chart);
}

function isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function getCanvas(item) {
  if (isDomSupported() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }

  if (item && item.canvas) {
    item = item.canvas;
  }

  return item;
}

const instances = {};

const getChart = key => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter(c => c.canvas === canvas).pop();
};

class Chart {
  constructor(item, config) {
    const me = this;
    this.config = config = new Config(config);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);

    if (existingChart) {
      throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas can be reused.');
    }

    const options = config.createResolver(config.chartOptionScopes(), me.getContext());
    this.platform = me._initializePlatform(initialCanvas, config);
    const context = me.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = (0, _helpersSegment.a7)();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this.scale = undefined;
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = (0, _helpersSegment.a8)(() => this.update('resize'), options.resizeDelay || 0);
    instances[me.id] = me;

    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }

    animator.listen(me, 'complete', onAnimationsComplete);
    animator.listen(me, 'progress', onAnimationProgress);

    me._initialize();

    if (me.attached) {
      me.update();
    }
  }

  get aspectRatio() {
    const {
      options: {
        aspectRatio,
        maintainAspectRatio
      },
      width,
      height,
      _aspectRatio
    } = this;

    if (!(0, _helpersSegment.j)(aspectRatio)) {
      return aspectRatio;
    }

    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }

    return height ? width / height : null;
  }

  get data() {
    return this.config.data;
  }

  set data(data) {
    this.config.data = data;
  }

  get options() {
    return this._options;
  }

  set options(options) {
    this.config.options = options;
  }

  _initialize() {
    const me = this;
    me.notifyPlugins('beforeInit');

    if (me.options.responsive) {
      me.resize();
    } else {
      (0, _helpersSegment.a9)(me, me.options.devicePixelRatio);
    }

    me.bindEvents();
    me.notifyPlugins('afterInit');
    return me;
  }

  _initializePlatform(canvas, config) {
    if (config.platform) {
      return new config.platform();
    } else if (!isDomSupported() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
      return new BasicPlatform();
    }

    return new DomPlatform();
  }

  clear() {
    (0, _helpersSegment.aa)(this.canvas, this.ctx);
    return this;
  }

  stop() {
    animator.stop(this);
    return this;
  }

  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {
        width,
        height
      };
    }
  }

  _resize(width, height) {
    const me = this;
    const options = me.options;
    const canvas = me.canvas;
    const aspectRatio = options.maintainAspectRatio && me.aspectRatio;
    const newSize = me.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || me.platform.getDevicePixelRatio();
    me.width = newSize.width;
    me.height = newSize.height;
    me._aspectRatio = me.aspectRatio;

    if (!(0, _helpersSegment.a9)(me, newRatio, true)) {
      return;
    }

    me.notifyPlugins('resize', {
      size: newSize
    });
    (0, _helpersSegment.N)(options.onResize, [me, newSize], me);

    if (me.attached) {
      if (me._doResize()) {
        me.render();
      }
    }
  }

  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    (0, _helpersSegment.D)(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }

  buildOrUpdateScales() {
    const me = this;
    const options = me.options;
    const scaleOpts = options.scales;
    const scales = me.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];

    if (scaleOpts) {
      items = items.concat(Object.keys(scaleOpts).map(id => {
        const scaleOptions = scaleOpts[id];
        const axis = determineAxis(id, scaleOptions);
        const isRadial = axis === 'r';
        const isHorizontal = axis === 'x';
        return {
          options: scaleOptions,
          dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
          dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
        };
      }));
    }

    (0, _helpersSegment.D)(items, item => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = (0, _helpersSegment.v)(scaleOptions.type, item.dtype);

      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }

      updated[id] = true;
      let scale = null;

      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: me.ctx,
          chart: me
        });
        scales[scale.id] = scale;
      }

      scale.init(scaleOptions, options);
    });
    (0, _helpersSegment.D)(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    (0, _helpersSegment.D)(scales, scale => {
      layouts.configure(me, scale, scale.options);
      layouts.addBox(me, scale);
    });
  }

  _updateMetasets() {
    const me = this;
    const metasets = me._metasets;
    const numData = me.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);

    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        me._destroyDatasetMeta(i);
      }

      metasets.splice(numData, numMeta - numData);
    }

    me._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }

  _removeUnreferencedMetasets() {
    const me = this;
    const {
      _metasets: metasets,
      data: {
        datasets
      }
    } = me;

    if (metasets.length > datasets.length) {
      delete me._stacks;
    }

    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        me._destroyDatasetMeta(index);
      }
    });
  }

  buildOrUpdateControllers() {
    const me = this;
    const newControllers = [];
    const datasets = me.data.datasets;
    let i, ilen;

    me._removeUnreferencedMetasets();

    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = me.getDatasetMeta(i);
      const type = dataset.type || me.config.type;

      if (meta.type && meta.type !== type) {
        me._destroyDatasetMeta(i);

        meta = me.getDatasetMeta(i);
      }

      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, me.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = me.isDatasetVisible(i);

      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {
          datasetElementType,
          dataElementType
        } = _helpersSegment.d.datasets[type];
        Object.assign(ControllerClass.prototype, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(me, i);
        newControllers.push(meta.controller);
      }
    }

    me._updateMetasets();

    return newControllers;
  }

  _resetElements() {
    const me = this;
    (0, _helpersSegment.D)(me.data.datasets, (dataset, datasetIndex) => {
      me.getDatasetMeta(datasetIndex).controller.reset();
    }, me);
  }

  reset() {
    this._resetElements();

    this.notifyPlugins('reset');
  }

  update(mode) {
    const me = this;
    const config = me.config;
    config.update();
    me._options = config.createResolver(config.chartOptionScopes(), me.getContext());
    (0, _helpersSegment.D)(me.scales, scale => {
      layouts.removeBox(me, scale);
    });
    const animsDisabled = me._animationsDisabled = !me.options.animation;
    me.ensureScalesHaveIDs();
    me.buildOrUpdateScales();
    const existingEvents = new Set(Object.keys(me._listeners));
    const newEvents = new Set(me.options.events);

    if (!(0, _helpersSegment.ab)(existingEvents, newEvents) || !!this._responsiveListeners !== me.options.responsive) {
      me.unbindEvents();
      me.bindEvents();
    }

    me._plugins.invalidate();

    if (me.notifyPlugins('beforeUpdate', {
      mode,
      cancelable: true
    }) === false) {
      return;
    }

    const newControllers = me.buildOrUpdateControllers();
    me.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;

    for (let i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
      const {
        controller
      } = me.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }

    me._minPadding = minPadding;

    me._updateLayout(minPadding);

    if (!animsDisabled) {
      (0, _helpersSegment.D)(newControllers, controller => {
        controller.reset();
      });
    }

    me._updateDatasets(mode);

    me.notifyPlugins('afterUpdate', {
      mode
    });

    me._layers.sort(compare2Level('z', '_idx'));

    if (me._lastEvent) {
      me._eventHandler(me._lastEvent, true);
    }

    me.render();
  }

  _updateLayout(minPadding) {
    const me = this;

    if (me.notifyPlugins('beforeLayout', {
      cancelable: true
    }) === false) {
      return;
    }

    layouts.update(me, me.width, me.height, minPadding);
    const area = me.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    me._layers = [];
    (0, _helpersSegment.D)(me.boxes, box => {
      if (noArea && box.position === 'chartArea') {
        return;
      }

      if (box.configure) {
        box.configure();
      }

      me._layers.push(...box._layers());
    }, me);

    me._layers.forEach((item, index) => {
      item._idx = index;
    });

    me.notifyPlugins('afterLayout');
  }

  _updateDatasets(mode) {
    const me = this;
    const isFunction = typeof mode === 'function';

    if (me.notifyPlugins('beforeDatasetsUpdate', {
      mode,
      cancelable: true
    }) === false) {
      return;
    }

    for (let i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._updateDataset(i, isFunction ? mode({
        datasetIndex: i
      }) : mode);
    }

    me.notifyPlugins('afterDatasetsUpdate', {
      mode
    });
  }

  _updateDataset(index, mode) {
    const me = this;
    const meta = me.getDatasetMeta(index);
    const args = {
      meta,
      index,
      mode,
      cancelable: true
    };

    if (me.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }

    meta.controller._update(mode);

    args.cancelable = false;
    me.notifyPlugins('afterDatasetUpdate', args);
  }

  render() {
    const me = this;

    if (me.notifyPlugins('beforeRender', {
      cancelable: true
    }) === false) {
      return;
    }

    if (animator.has(me)) {
      if (me.attached && !animator.running(me)) {
        animator.start(me);
      }
    } else {
      me.draw();
      onAnimationsComplete({
        chart: me
      });
    }
  }

  draw() {
    const me = this;
    let i;

    if (me._resizeBeforeDraw) {
      const {
        width,
        height
      } = me._resizeBeforeDraw;

      me._resize(width, height);

      me._resizeBeforeDraw = null;
    }

    me.clear();

    if (me.width <= 0 || me.height <= 0) {
      return;
    }

    if (me.notifyPlugins('beforeDraw', {
      cancelable: true
    }) === false) {
      return;
    }

    const layers = me._layers;

    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(me.chartArea);
    }

    me._drawDatasets();

    for (; i < layers.length; ++i) {
      layers[i].draw(me.chartArea);
    }

    me.notifyPlugins('afterDraw');
  }

  _getSortedDatasetMetas(filterVisible) {
    const me = this;
    const metasets = me._sortedMetasets;
    const result = [];
    let i, ilen;

    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];

      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }

    return result;
  }

  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }

  _drawDatasets() {
    const me = this;

    if (me.notifyPlugins('beforeDatasetsDraw', {
      cancelable: true
    }) === false) {
      return;
    }

    const metasets = me.getSortedVisibleDatasetMetas();

    for (let i = metasets.length - 1; i >= 0; --i) {
      me._drawDataset(metasets[i]);
    }

    me.notifyPlugins('afterDatasetsDraw');
  }

  _drawDataset(meta) {
    const me = this;
    const ctx = me.ctx;
    const clip = meta._clip;
    const area = me.chartArea;
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };

    if (me.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }

    (0, _helpersSegment.k)(ctx, {
      left: clip.left === false ? 0 : area.left - clip.left,
      right: clip.right === false ? me.width : area.right + clip.right,
      top: clip.top === false ? 0 : area.top - clip.top,
      bottom: clip.bottom === false ? me.height : area.bottom + clip.bottom
    });
    meta.controller.draw();
    (0, _helpersSegment.m)(ctx);
    args.cancelable = false;
    me.notifyPlugins('afterDatasetDraw', args);
  }

  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];

    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }

    return [];
  }

  getDatasetMeta(datasetIndex) {
    const me = this;
    const dataset = me.data.datasets[datasetIndex];
    const metasets = me._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();

    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }

    return meta;
  }

  getContext() {
    return this.$context || (this.$context = {
      chart: this,
      type: 'chart'
    });
  }

  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }

  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];

    if (!dataset) {
      return false;
    }

    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }

  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }

  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }

  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }

  _updateDatasetVisibility(datasetIndex, visible) {
    const me = this;
    const mode = visible ? 'show' : 'hide';
    const meta = me.getDatasetMeta(datasetIndex);

    const anims = meta.controller._resolveAnimations(undefined, mode);

    me.setDatasetVisibility(datasetIndex, visible);
    anims.update(meta, {
      visible
    });
    me.update(ctx => ctx.datasetIndex === datasetIndex ? mode : undefined);
  }

  hide(datasetIndex) {
    this._updateDatasetVisibility(datasetIndex, false);
  }

  show(datasetIndex) {
    this._updateDatasetVisibility(datasetIndex, true);
  }

  _destroyDatasetMeta(datasetIndex) {
    const me = this;
    const meta = me._metasets && me._metasets[datasetIndex];

    if (meta && meta.controller) {
      meta.controller._destroy();

      delete me._metasets[datasetIndex];
    }
  }

  destroy() {
    const me = this;
    const {
      canvas,
      ctx
    } = me;
    let i, ilen;
    me.stop();
    animator.remove(me);

    for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._destroyDatasetMeta(i);
    }

    me.config.clearCache();

    if (canvas) {
      me.unbindEvents();
      (0, _helpersSegment.aa)(canvas, ctx);
      me.platform.releaseContext(ctx);
      me.canvas = null;
      me.ctx = null;
    }

    me.notifyPlugins('destroy');
    delete instances[me.id];
  }

  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }

  bindEvents() {
    this.bindUserEvents();

    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }

  bindUserEvents() {
    const me = this;
    const listeners = me._listeners;
    const platform = me.platform;

    const _add = (type, listener) => {
      platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    };

    const listener = function (e, x, y) {
      e.offsetX = x;
      e.offsetY = y;

      me._eventHandler(e);
    };

    (0, _helpersSegment.D)(me.options.events, type => _add(type, listener));
  }

  bindResponsiveEvents() {
    const me = this;

    if (!me._responsiveListeners) {
      me._responsiveListeners = {};
    }

    const listeners = me._responsiveListeners;
    const platform = me.platform;

    const _add = (type, listener) => {
      platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    };

    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(me, type, listener);
        delete listeners[type];
      }
    };

    const listener = (width, height) => {
      if (me.canvas) {
        me.resize(width, height);
      }
    };

    let detached;

    const attached = () => {
      _remove('attach', attached);

      me.attached = true;
      me.resize();

      _add('resize', listener);

      _add('detach', detached);
    };

    detached = () => {
      me.attached = false;

      _remove('resize', listener);

      _add('attach', attached);
    };

    if (platform.isAttached(me.canvas)) {
      attached();
    } else {
      detached();
    }
  }

  unbindEvents() {
    const me = this;
    (0, _helpersSegment.D)(me._listeners, (listener, type) => {
      me.platform.removeEventListener(me, type, listener);
    });
    me._listeners = {};
    (0, _helpersSegment.D)(me._responsiveListeners, (listener, type) => {
      me.platform.removeEventListener(me, type, listener);
    });
    me._responsiveListeners = undefined;
  }

  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;

    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;

      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }

  getActiveElements() {
    return this._active || [];
  }

  setActiveElements(activeElements) {
    const me = this;
    const lastActive = me._active || [];
    const active = activeElements.map(({
      datasetIndex,
      index
    }) => {
      const meta = me.getDatasetMeta(datasetIndex);

      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }

      return {
        datasetIndex,
        element: meta.data[index],
        index
      };
    });
    const changed = !(0, _helpersSegment.ac)(active, lastActive);

    if (changed) {
      me._active = active;

      me._updateHoverStyles(active, lastActive);
    }
  }

  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }

  _updateHoverStyles(active, lastActive, replay) {
    const me = this;
    const hoverOptions = me.options.hover;

    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));

    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);

    if (deactivated.length) {
      me.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }

    if (activated.length && hoverOptions.mode) {
      me.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }

  _eventHandler(e, replay) {
    const me = this;
    const args = {
      event: e,
      replay,
      cancelable: true
    };

    const eventFilter = plugin => (plugin.options.events || this.options.events).includes(e.type);

    if (me.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }

    const changed = me._handleEvent(e, replay);

    args.cancelable = false;
    me.notifyPlugins('afterEvent', args, eventFilter);

    if (changed || args.changed) {
      me.render();
    }

    return me;
  }

  _handleEvent(e, replay) {
    const me = this;
    const {
      _active: lastActive = [],
      options
    } = me;
    const hoverOptions = options.hover;
    const useFinalPosition = replay;
    let active = [];
    let changed = false;
    let lastEvent = null;

    if (e.type !== 'mouseout') {
      active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
      lastEvent = e.type === 'click' ? me._lastEvent : e;
    }

    me._lastEvent = null;

    if ((0, _helpersSegment.A)(e, me.chartArea, me._minPadding)) {
      (0, _helpersSegment.N)(options.onHover, [e, active, me], me);

      if (e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu') {
        (0, _helpersSegment.N)(options.onClick, [e, active, me], me);
      }
    }

    changed = !(0, _helpersSegment.ac)(active, lastActive);

    if (changed || replay) {
      me._active = active;

      me._updateHoverStyles(active, lastActive, replay);
    }

    me._lastEvent = lastEvent;
    return changed;
  }

}

exports.Chart = Chart;

const invalidatePlugins = () => (0, _helpersSegment.D)(Chart.instances, chart => chart._plugins.invalidate());

const enumerable = true;
Object.defineProperties(Chart, {
  defaults: {
    enumerable,
    value: _helpersSegment.d
  },
  instances: {
    enumerable,
    value: instances
  },
  overrides: {
    enumerable,
    value: _helpersSegment.Z
  },
  registry: {
    enumerable,
    value: registry
  },
  version: {
    enumerable,
    value: version
  },
  getChart: {
    enumerable,
    value: getChart
  },
  register: {
    enumerable,
    value: (...items) => {
      registry.add(...items);
      invalidatePlugins();
    }
  },
  unregister: {
    enumerable,
    value: (...items) => {
      registry.remove(...items);
      invalidatePlugins();
    }
  }
});

function clipArc(ctx, element, endAngle) {
  const {
    startAngle,
    pixelMargin,
    x,
    y,
    outerRadius,
    innerRadius
  } = element;
  let angleMargin = pixelMargin / outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);

  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _helpersSegment.H, startAngle - _helpersSegment.H);
  }

  ctx.closePath();
  ctx.clip();
}

function toRadiusCorners(value) {
  return (0, _helpersSegment.ae)(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}

function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);

  const computeOuterLimit = val => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return (0, _helpersSegment.x)(val, 0, Math.min(halfThickness, outerArcLimit));
  };

  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: (0, _helpersSegment.x)(o.innerStart, 0, innerLimit),
    innerEnd: (0, _helpersSegment.x)(o.innerEnd, 0, innerLimit)
  };
}

function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta)
  };
}

function pathArc(ctx, element, offset, end) {
  const {
    x,
    y,
    startAngle: start,
    pixelMargin,
    innerRadius: innerR
  } = element;
  const outerRadius = Math.max(element.outerRadius + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + offset + pixelMargin : 0;
  const alpha = end - start;
  const beta = Math.max(0.001, alpha * outerRadius - offset / _helpersSegment.P) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset;
  const endAngle = end - angleOffset;
  const {
    outerStart,
    outerEnd,
    innerStart,
    innerEnd
  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);

  if (outerEnd > 0) {
    const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _helpersSegment.H);
  }

  const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
  ctx.lineTo(p4.x, p4.y);

  if (innerEnd > 0) {
    const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + _helpersSegment.H, innerEndAdjustedAngle + Math.PI);
  }

  ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);

  if (innerStart > 0) {
    const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _helpersSegment.H);
  }

  const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
  ctx.lineTo(p8.x, p8.y);

  if (outerStart > 0) {
    const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
    ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - _helpersSegment.H, outerStartAdjustedAngle);
  }

  ctx.closePath();
}

function drawArc(ctx, element, offset) {
  const {
    fullCircles,
    startAngle,
    circumference
  } = element;
  let endAngle = element.endAngle;

  if (fullCircles) {
    pathArc(ctx, element, offset, startAngle + _helpersSegment.T);

    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }

    if (!isNaN(circumference)) {
      endAngle = startAngle + circumference % _helpersSegment.T;

      if (circumference % _helpersSegment.T === 0) {
        endAngle += _helpersSegment.T;
      }
    }
  }

  pathArc(ctx, element, offset, endAngle);
  ctx.fill();
  return endAngle;
}

function drawFullCircleBorders(ctx, element, inner) {
  const {
    x,
    y,
    startAngle,
    pixelMargin,
    fullCircles
  } = element;
  const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
  const innerRadius = element.innerRadius + pixelMargin;
  let i;

  if (inner) {
    clipArc(ctx, element, startAngle + _helpersSegment.T);
  }

  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle + _helpersSegment.T, startAngle, true);

  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle, startAngle + _helpersSegment.T);

  for (i = 0; i < fullCircles; ++i) {
    ctx.stroke();
  }
}

function drawBorder(ctx, element, offset, endAngle) {
  const {
    options
  } = element;
  const inner = options.borderAlign === 'inner';

  if (!options.borderWidth) {
    return;
  }

  if (inner) {
    ctx.lineWidth = options.borderWidth * 2;
    ctx.lineJoin = 'round';
  } else {
    ctx.lineWidth = options.borderWidth;
    ctx.lineJoin = 'bevel';
  }

  if (element.fullCircles) {
    drawFullCircleBorders(ctx, element, inner);
  }

  if (inner) {
    clipArc(ctx, element, endAngle);
  }

  pathArc(ctx, element, offset, endAngle);
  ctx.stroke();
}

class ArcElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;

    if (cfg) {
      Object.assign(this, cfg);
    }
  }

  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {
      angle,
      distance
    } = (0, _helpersSegment.ad)(point, {
      x: chartX,
      y: chartY
    });
    const {
      startAngle,
      endAngle,
      innerRadius,
      outerRadius,
      circumference
    } = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition);
    const betweenAngles = circumference >= _helpersSegment.T || (0, _helpersSegment.q)(angle, startAngle, endAngle);
    const withinRadius = distance >= innerRadius && distance <= outerRadius;
    return betweenAngles && withinRadius;
  }

  getCenterPoint(useFinalPosition) {
    const {
      x,
      y,
      startAngle,
      endAngle,
      innerRadius,
      outerRadius
    } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition);
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }

  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }

  draw(ctx) {
    const me = this;
    const {
      options,
      circumference
    } = me;
    const offset = (options.offset || 0) / 2;
    me.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
    me.fullCircles = circumference > _helpersSegment.T ? Math.floor(circumference / _helpersSegment.T) : 0;

    if (circumference === 0 || me.innerRadius < 0 || me.outerRadius < 0) {
      return;
    }

    ctx.save();
    let radiusOffset = 0;

    if (offset) {
      radiusOffset = offset / 2;
      const halfAngle = (me.startAngle + me.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);

      if (me.circumference >= _helpersSegment.P) {
        radiusOffset = offset;
      }
    }

    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    const endAngle = drawArc(ctx, me, radiusOffset);
    drawBorder(ctx, me, radiusOffset, endAngle);
    ctx.restore();
  }

}

exports.ArcElement = ArcElement;
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  angle: undefined
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};

function setStyle(ctx, options, style = options) {
  ctx.lineCap = (0, _helpersSegment.v)(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash((0, _helpersSegment.v)(style.borderDash, options.borderDash));
  ctx.lineDashOffset = (0, _helpersSegment.v)(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = (0, _helpersSegment.v)(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = (0, _helpersSegment.v)(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = (0, _helpersSegment.v)(style.borderColor, options.borderColor);
}

function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}

function getLineMethod(options) {
  if (options.stepped) {
    return _helpersSegment.al;
  }

  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _helpersSegment.am;
  }

  return lineTo;
}

function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {
    start: paramsStart = 0,
    end: paramsEnd = count - 1
  } = params;
  const {
    start: segmentStart,
    end: segmentEnd
  } = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}

function pathSegment(ctx, line, segment, params) {
  const {
    points,
    options
  } = line;
  const {
    count,
    start,
    loop,
    ilen
  } = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {
    move = true,
    reverse
  } = params || {};
  let i, point, prev;

  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];

    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }

    prev = point;
  }

  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }

  return !!loop;
}

function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {
    count,
    start,
    ilen
  } = pathVars(points, segment, params);
  const {
    move = true,
    reverse
  } = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;

  const pointIndex = index => (start + (reverse ? ilen - index : index)) % count;

  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };

  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }

  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];

    if (point.skip) {
      continue;
    }

    const x = point.x;
    const y = point.y;
    const truncX = x | 0;

    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }

      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }

    lastY = y;
  }

  drawX();
}

function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}

function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _helpersSegment.ai;
  }

  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _helpersSegment.aj;
  }

  return _helpersSegment.ak;
}

function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;

  if (!path) {
    path = line._path = new Path2D();

    if (line.path(path, start, count)) {
      path.closePath();
    }
  }

  setStyle(ctx, line.options);
  ctx.stroke(path);
}

function strokePathDirect(ctx, line, start, count) {
  const {
    segments,
    options
  } = line;

  const segmentMethod = _getSegmentMethod(line);

  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();

    if (segmentMethod(ctx, line, segment, {
      start,
      end: start + count - 1
    })) {
      ctx.closePath();
    }

    ctx.stroke();
  }
}

const usePath2D = typeof Path2D === 'function';

function draw(ctx, line, start, count) {
  if (usePath2D && line.segments.length === 1) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}

class LineElement extends Element {
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;

    if (cfg) {
      Object.assign(this, cfg);
    }
  }

  updateControlPoints(chartArea, indexAxis) {
    const me = this;
    const options = me.options;

    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !me._pointsUpdated) {
      const loop = options.spanGaps ? me._loop : me._fullLoop;
      (0, _helpersSegment.af)(me._points, options, chartArea, loop, indexAxis);
      me._pointsUpdated = true;
    }
  }

  set points(points) {
    const me = this;
    me._points = points;
    delete me._segments;
    delete me._path;
    me._pointsUpdated = false;
  }

  get points() {
    return this._points;
  }

  get segments() {
    return this._segments || (this._segments = (0, _helpersSegment.ag)(this, this.options.segment));
  }

  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }

  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }

  interpolate(point, property) {
    const me = this;
    const options = me.options;
    const value = point[property];
    const points = me.points;
    const segments = (0, _helpersSegment.ah)(me, {
      property,
      start: value,
      end: value
    });

    if (!segments.length) {
      return;
    }

    const result = [];

    const _interpolate = _getInterpolationMethod(options);

    let i, ilen;

    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {
        start,
        end
      } = segments[i];
      const p1 = points[start];
      const p2 = points[end];

      if (p1 === p2) {
        result.push(p1);
        continue;
      }

      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));

      const interpolated = _interpolate(p1, p2, t, options.stepped);

      interpolated[property] = point[property];
      result.push(interpolated);
    }

    return result.length === 1 ? result[0] : result;
  }

  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);

    return segmentMethod(ctx, this, segment, params);
  }

  path(ctx, start, count) {
    const me = this;
    const segments = me.segments;

    const segmentMethod = _getSegmentMethod(me);

    let loop = me._loop;
    start = start || 0;
    count = count || me.points.length - start;

    for (const segment of segments) {
      loop &= segmentMethod(ctx, me, segment, {
        start,
        end: start + count - 1
      });
    }

    return !!loop;
  }

  draw(ctx, chartArea, start, count) {
    const me = this;
    const options = me.options || {};
    const points = me.points || [];

    if (!points.length || !options.borderWidth) {
      return;
    }

    ctx.save();
    draw(ctx, me, start, count);
    ctx.restore();

    if (me.animated) {
      me._pointsUpdated = false;
      me._path = undefined;
    }
  }

}

exports.LineElement = LineElement;
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: name => name !== 'borderDash' && name !== 'fill'
};

function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {
    [axis]: value
  } = el.getProps([axis], useFinalPosition);
  return Math.abs(pos - value) < options.radius + options.hitRadius;
}

class PointElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;

    if (cfg) {
      Object.assign(this, cfg);
    }
  }

  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
  }

  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }

  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }

  getCenterPoint(useFinalPosition) {
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }

  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }

  draw(ctx) {
    const me = this;
    const options = me.options;

    if (me.skip || options.radius < 0.1) {
      return;
    }

    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    (0, _helpersSegment.an)(ctx, options, me.x, me.y);
  }

  getRange() {
    const options = this.options || {};
    return options.radius + options.hitRadius;
  }

}

exports.PointElement = PointElement;
PointElement.id = 'point';
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};

function getBarBounds(bar, useFinalPosition) {
  const {
    x,
    y,
    base,
    width,
    height
  } = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;

  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }

  return {
    left,
    top,
    right,
    bottom
  };
}

function parseBorderSkipped(bar) {
  let edge = bar.options.borderSkipped;
  const res = {};

  if (!edge) {
    return res;
  }

  edge = bar.horizontal ? parseEdge(edge, 'left', 'right', bar.base > bar.x) : parseEdge(edge, 'bottom', 'top', bar.base < bar.y);
  res[edge] = true;
  return res;
}

function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }

  return edge;
}

function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}

function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : Math.max(Math.min(value, max), min);
}

function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = parseBorderSkipped(bar);
  const o = (0, _helpersSegment.ap)(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}

function parseBorderRadius(bar, maxW, maxH) {
  const {
    enableBorderRadius
  } = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = (0, _helpersSegment.aq)(value);
  const maxR = Math.min(maxW, maxH);
  const skip = parseBorderSkipped(bar);
  const enableBorder = enableBorderRadius || (0, _helpersSegment.i)(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}

function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
      }
    }
  };
}

function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
}

function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}

function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}

class BarElement extends Element {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;

    if (cfg) {
      Object.assign(this, cfg);
    }
  }

  draw(ctx) {
    const options = this.options;
    const {
      inner,
      outer
    } = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? _helpersSegment.ao : addNormalRectPath;
    ctx.save();

    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, outer);
      ctx.clip();
      addRectPath(ctx, inner);
      ctx.fillStyle = options.borderColor;
      ctx.fill('evenodd');
    }

    ctx.beginPath();
    addRectPath(ctx, inner);
    ctx.fillStyle = options.backgroundColor;
    ctx.fill();
    ctx.restore();
  }

  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }

  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }

  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }

  getCenterPoint(useFinalPosition) {
    const {
      x,
      y,
      base,
      horizontal
    } = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }

  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }

}

exports.BarElement = BarElement;
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  enableBorderRadius: true,
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
var elements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArcElement: ArcElement,
  LineElement: LineElement,
  PointElement: PointElement,
  BarElement: BarElement
});
exports.elements = elements;

function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;

  if (samples >= count) {
    return data.slice(start, start + count);
  }

  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];

  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;

    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }

    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const {
      x: pointAx,
      y: pointAy
    } = data[a];
    maxArea = area = -1;

    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));

      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }

    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }

  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}

function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;

  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;

    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }

      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;

      if (!(0, _helpersSegment.j)(minIndex) && !(0, _helpersSegment.j)(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);

        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({ ...data[intermediateIndex1],
            x: avgX
          });
        }

        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({ ...data[intermediateIndex2],
            x: avgX
          });
        }
      }

      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }

      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }

  return decimated;
}

function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {
      value: data
    });
  }
}

function cleanDecimatedData(chart) {
  chart.data.datasets.forEach(dataset => {
    cleanDecimatedDataset(dataset);
  });
}

function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {
    iScale
  } = meta;
  const {
    min,
    max,
    minDefined,
    maxDefined
  } = iScale.getUserBounds();

  if (minDefined) {
    start = (0, _helpersSegment.x)((0, _helpersSegment.y)(points, iScale.axis, min).lo, 0, pointCount - 1);
  }

  if (maxDefined) {
    count = (0, _helpersSegment.x)((0, _helpersSegment.y)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }

  return {
    start,
    count
  };
}

var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }

    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {
        _data,
        indexAxis
      } = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;

      if ((0, _helpersSegment.a)([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }

      if (meta.type !== 'line') {
        return;
      }

      const xAxis = chart.scales[meta.xAxisID];

      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }

      if (chart.options.parsing) {
        return;
      }

      let {
        start,
        count
      } = getStartAndCountOfVisiblePointsSimplified(meta, data);

      if (count <= 4 * availableWidth) {
        cleanDecimatedDataset(dataset);
        return;
      }

      if ((0, _helpersSegment.j)(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function () {
            return this._decimated;
          },
          set: function (d) {
            this._data = d;
          }
        });
      }

      let decimated;

      switch (options.algorithm) {
        case 'lttb':
          decimated = lttbDecimation(data, start, count, availableWidth, options);
          break;

        case 'min-max':
          decimated = minMaxDecimation(data, start, count, availableWidth);
          break;

        default:
          throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }

      dataset._decimated = decimated;
    });
  },

  destroy(chart) {
    cleanDecimatedData(chart);
  }

};
exports.Decimation = plugin_decimation;

function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}

function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = (0, _helpersSegment.v)(fillOption && fillOption.target, fillOption);

  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }

  if (fill === false || fill === null) {
    return false;
  }

  if (fill === true) {
    return 'origin';
  }

  return fill;
}

function decodeFill(line, index, count) {
  const fill = parseFillOption(line);

  if ((0, _helpersSegment.i)(fill)) {
    return isNaN(fill.value) ? false : fill;
  }

  let target = parseFloat(fill);

  if ((0, _helpersSegment.g)(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }

    if (target === index || target < 0 || target >= count) {
      return false;
    }

    return target;
  }

  return ['origin', 'start', 'end', 'stack'].indexOf(fill) >= 0 && fill;
}

function computeLinearBoundary(source) {
  const {
    scale = {},
    fill
  } = source;
  let target = null;
  let horizontal;

  if (fill === 'start') {
    target = scale.bottom;
  } else if (fill === 'end') {
    target = scale.top;
  } else if ((0, _helpersSegment.i)(fill)) {
    target = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }

  if ((0, _helpersSegment.g)(target)) {
    horizontal = scale.isHorizontal();
    return {
      x: horizontal ? target : null,
      y: horizontal ? null : target
    };
  }

  return null;
}

class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }

  pathSegment(ctx, bounds, opts) {
    const {
      x,
      y,
      radius
    } = this;
    bounds = bounds || {
      start: 0,
      end: _helpersSegment.T
    };
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }

  interpolate(point) {
    const {
      x,
      y,
      radius
    } = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }

}

function computeCircularBoundary(source) {
  const {
    scale,
    fill
  } = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const target = [];
  const start = options.reverse ? scale.max : scale.min;
  const end = options.reverse ? scale.min : scale.max;
  let i, center, value;

  if (fill === 'start') {
    value = start;
  } else if (fill === 'end') {
    value = end;
  } else if ((0, _helpersSegment.i)(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }

  if (options.grid.circular) {
    center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }

  for (i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }

  return target;
}

function computeBoundary(source) {
  const scale = source.scale || {};

  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }

  return computeLinearBoundary(source);
}

function pointsFromSegments(boundary, line) {
  const {
    x = null,
    y = null
  } = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(segment => {
    const first = linePoints[segment.start];
    const last = linePoints[segment.end];

    if (y !== null) {
      points.push({
        x: first.x,
        y
      });
      points.push({
        x: last.x,
        y
      });
    } else if (x !== null) {
      points.push({
        x,
        y: first.y
      });
      points.push({
        x,
        y: last.y
      });
    }
  });
  return points;
}

function buildStackLine(source) {
  const {
    chart,
    scale,
    index,
    line
  } = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(chart, index);
  linesBelow.push(createBoundaryLine({
    x: null,
    y: scale.bottom
  }, line));

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }

  return new LineElement({
    points,
    options: {}
  });
}

const isLineAndNotInHideAnimation = meta => meta.type === 'line' && !meta.hidden;

function getLinesBelow(chart, index) {
  const below = [];
  const metas = chart.getSortedVisibleDatasetMetas();

  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];

    if (meta.index === index) {
      break;
    }

    if (isLineAndNotInHideAnimation(meta)) {
      below.unshift(meta.dataset);
    }
  }

  return below;
}

function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];

  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {
      first,
      last,
      point
    } = findPoint(line, sourcePoint, 'x');

    if (!point || first && last) {
      continue;
    }

    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);

      if (!last) {
        break;
      }
    }
  }

  points.push(...postponed);
}

function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);

  if (!point) {
    return {};
  }

  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];

    if (pointValue >= firstValue && pointValue <= lastValue) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }

  return {
    first,
    last,
    point
  };
}

function getTarget(source) {
  const {
    chart,
    fill,
    line
  } = source;

  if ((0, _helpersSegment.g)(fill)) {
    return getLineByIndex(chart, fill);
  }

  if (fill === 'stack') {
    return buildStackLine(source);
  }

  const boundary = computeBoundary(source);

  if (boundary instanceof simpleArc) {
    return boundary;
  }

  return createBoundaryLine(boundary, line);
}

function createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;

  if ((0, _helpersSegment.b)(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = pointsFromSegments(boundary, line);
  }

  return points.length ? new LineElement({
    points,
    options: {
      tension: 0
    },
    _loop,
    _fullLoop: _loop
  }) : null;
}

function resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;

  if (!propagate) {
    return fill;
  }

  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!(0, _helpersSegment.g)(fill)) {
      return fill;
    }

    target = sources[fill];

    if (!target) {
      return false;
    }

    if (target.visible) {
      return fill;
    }

    visited.push(fill);
    fill = target.fill;
  }

  return false;
}

function _clip(ctx, target, clipY) {
  ctx.beginPath();
  target.path(ctx);
  ctx.lineTo(target.last().x, clipY);
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}

function getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }

  let start = first[property];
  let end = last[property];

  if (property === 'angle') {
    start = (0, _helpersSegment.as)(start);
    end = (0, _helpersSegment.as)(end);
  }

  return {
    property,
    start,
    end
  };
}

function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }

  return a ? a[prop] : b ? b[prop] : 0;
}

function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];

  for (const segment of segments) {
    const bounds = getBounds(property, points[segment.start], points[segment.end], segment.loop);

    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[segment.start],
        end: points[segment.end]
      });
      continue;
    }

    const targetSegments = (0, _helpersSegment.ah)(target, bounds);

    for (const tgt of targetSegments) {
      const subBounds = getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = (0, _helpersSegment.ar)(segment, points, subBounds);

      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }

  return parts;
}

function clipBounds(ctx, scale, bounds) {
  const {
    top,
    bottom
  } = scale.chart.chartArea;
  const {
    property,
    start,
    end
  } = bounds || {};

  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}

function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);

  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}

function _fill(ctx, cfg) {
  const {
    line,
    target,
    property,
    color,
    scale
  } = cfg;

  const segments = _segments(line, target, property);

  for (const {
    source: src,
    target: tgt,
    start,
    end
  } of segments) {
    const {
      style: {
        backgroundColor = color
      } = {}
    } = src;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);

    if (lineLoop) {
      ctx.closePath();
    } else {
      interpolatedLineTo(ctx, target, end, property);
    }

    const targetLoop = !!target.pathSegment(ctx, tgt, {
      move: lineLoop,
      reverse: true
    });
    const loop = lineLoop && targetLoop;

    if (!loop) {
      interpolatedLineTo(ctx, target, start, property);
    }

    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}

function doFill(ctx, cfg) {
  const {
    line,
    target,
    above,
    below,
    area,
    scale
  } = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();

  if (property === 'x' && below !== above) {
    _clip(ctx, target, area.top);

    _fill(ctx, {
      line,
      target,
      color: above,
      scale,
      property
    });

    ctx.restore();
    ctx.save();

    _clip(ctx, target, area.bottom);
  }

  _fill(ctx, {
    line,
    target,
    color: below,
    scale,
    property
  });

  ctx.restore();
}

function drawfill(ctx, source, area) {
  const target = getTarget(source);
  const {
    line,
    scale,
    axis
  } = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {
    above = color,
    below = color
  } = fillOption || {};

  if (target && line.points.length) {
    (0, _helpersSegment.k)(ctx, area);
    doFill(ctx, {
      line,
      target,
      above,
      below,
      area,
      scale,
      axis
    });
    (0, _helpersSegment.m)(ctx);
  }
}

var plugin_filler = {
  id: 'filler',

  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;

    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;

      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line
        };
      }

      meta.$filler = source;
      sources.push(source);
    }

    for (i = 0; i < count; ++i) {
      source = sources[i];

      if (!source || source.fill === false) {
        continue;
      }

      source.fill = resolveTarget(sources, i, options.propagate);
    }
  },

  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;

    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;

      if (!source) {
        continue;
      }

      source.line.updateControlPoints(area, source.axis);

      if (draw) {
        drawfill(chart.ctx, source, area);
      }
    }
  },

  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }

    const metasets = chart.getSortedVisibleDatasetMetas();

    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;

      if (source) {
        drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },

  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;

    if (!source || source.fill === false || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }

    drawfill(chart.ctx, source, chart.chartArea);
  },

  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};
exports.Filler = plugin_filler;

const getBoxSize = (labelOpts, fontSize) => {
  let {
    boxHeight = fontSize,
    boxWidth = fontSize
  } = labelOpts;

  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = Math.min(boxWidth, fontSize);
  }

  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};

const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;

class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }

  update(maxWidth, maxHeight, margins) {
    const me = this;
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins;
    me.setDimensions();
    me.buildLabels();
    me.fit();
  }

  setDimensions() {
    const me = this;

    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }
  }

  buildLabels() {
    const me = this;
    const labelOpts = me.options.labels || {};
    let legendItems = (0, _helpersSegment.N)(labelOpts.generateLabels, [me.chart], me) || [];

    if (labelOpts.filter) {
      legendItems = legendItems.filter(item => labelOpts.filter(item, me.chart.data));
    }

    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, me.chart.data));
    }

    if (me.options.reverse) {
      legendItems.reverse();
    }

    me.legendItems = legendItems;
  }

  fit() {
    const me = this;
    const {
      options,
      ctx
    } = me;

    if (!options.display) {
      me.width = me.height = 0;
      return;
    }

    const labelOpts = options.labels;
    const labelFont = (0, _helpersSegment.W)(labelOpts.font);
    const fontSize = labelFont.size;

    const titleHeight = me._computeTitleHeight();

    const {
      boxWidth,
      itemHeight
    } = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;

    if (me.isHorizontal()) {
      width = me.maxWidth;
      height = me._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = me.maxHeight;
      width = me._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    }

    me.width = Math.min(width, options.maxWidth || me.maxWidth);
    me.height = Math.min(height, options.maxHeight || me.maxHeight);
  }

  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const me = this;
    const {
      ctx,
      maxWidth,
      options: {
        labels: {
          padding
        }
      }
    } = me;
    const hitboxes = me.legendHitBoxes = [];
    const lineWidths = me.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    me.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }

      hitboxes[i] = {
        left: 0,
        top,
        row,
        width: itemWidth,
        height: itemHeight
      };
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }

  _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
    const me = this;
    const {
      ctx,
      maxHeight,
      options: {
        labels: {
          padding
        }
      }
    } = me;
    const hitboxes = me.legendHitBoxes = [];
    const columnSizes = me.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let top = 0;
    let col = 0;
    me.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

      if (i > 0 && currentColHeight + fontSize + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({
          width: currentColWidth,
          height: currentColHeight
        });
        left += currentColWidth + padding;
        col++;
        top = 0;
        currentColWidth = currentColHeight = 0;
      }

      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += fontSize + padding;
      hitboxes[i] = {
        left,
        top,
        col,
        width: itemWidth,
        height: itemHeight
      };
      top += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({
      width: currentColWidth,
      height: currentColHeight
    });
    return totalWidth;
  }

  adjustHitBoxes() {
    const me = this;

    if (!me.options.display) {
      return;
    }

    const titleHeight = me._computeTitleHeight();

    const {
      legendHitBoxes: hitboxes,
      options: {
        align,
        labels: {
          padding
        }
      }
    } = me;

    if (this.isHorizontal()) {
      let row = 0;
      let left = (0, _helpersSegment.Y)(align, me.left + padding, me.right - me.lineWidths[row]);

      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = (0, _helpersSegment.Y)(align, me.left + padding, me.right - me.lineWidths[row]);
        }

        hitbox.top += me.top + titleHeight + padding;
        hitbox.left = left;
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = (0, _helpersSegment.Y)(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);

      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = (0, _helpersSegment.Y)(align, me.top + titleHeight + padding, me.bottom - me.columnSizes[col].height);
        }

        hitbox.top = top;
        hitbox.left += me.left + padding;
        top += hitbox.height + padding;
      }
    }
  }

  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }

  draw() {
    const me = this;

    if (me.options.display) {
      const ctx = me.ctx;
      (0, _helpersSegment.k)(ctx, me);

      me._draw();

      (0, _helpersSegment.m)(ctx);
    }
  }

  _draw() {
    const me = this;
    const {
      options: opts,
      columnSizes,
      lineWidths,
      ctx
    } = me;
    const {
      align,
      labels: labelOpts
    } = opts;
    const defaultColor = _helpersSegment.d.color;
    const rtlHelper = (0, _helpersSegment.at)(opts.rtl, me.left, me.width);
    const labelFont = (0, _helpersSegment.W)(labelOpts.font);
    const {
      color: fontColor,
      padding
    } = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    me.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {
      boxWidth,
      boxHeight,
      itemHeight
    } = getBoxSize(labelOpts, fontSize);

    const drawLegendBox = function (x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }

      ctx.save();
      const lineWidth = (0, _helpersSegment.v)(legendItem.lineWidth, 1);
      ctx.fillStyle = (0, _helpersSegment.v)(legendItem.fillStyle, defaultColor);
      ctx.lineCap = (0, _helpersSegment.v)(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = (0, _helpersSegment.v)(legendItem.lineDashOffset, 0);
      ctx.lineJoin = (0, _helpersSegment.v)(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = (0, _helpersSegment.v)(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash((0, _helpersSegment.v)(legendItem.lineDash, []));

      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxWidth * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        (0, _helpersSegment.an)(ctx, drawOptions, centerX, centerY);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = (0, _helpersSegment.aq)(legendItem.borderRadius);
        ctx.beginPath();

        if (Object.values(borderRadius).some(v => v !== 0)) {
          (0, _helpersSegment.ao)(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }

        ctx.fill();

        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    const fillText = function (x, y, legendItem) {
      (0, _helpersSegment.V)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: legendItem.textAlign
      });
    };

    const isHorizontal = me.isHorizontal();

    const titleHeight = this._computeTitleHeight();

    if (isHorizontal) {
      cursor = {
        x: (0, _helpersSegment.Y)(align, me.left + padding, me.right - lineWidths[0]),
        y: me.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: me.left + padding,
        y: (0, _helpersSegment.Y)(align, me.top + titleHeight + padding, me.bottom - columnSizes[0].height),
        line: 0
      };
    }

    (0, _helpersSegment.au)(me.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    me.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor || fontColor;
      ctx.fillStyle = legendItem.fontColor || fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + fontSize / 2 + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(me.width);

      if (isHorizontal) {
        if (i > 0 && x + width + padding > me.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = (0, _helpersSegment.Y)(align, me.left + padding, me.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > me.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = (0, _helpersSegment.Y)(align, me.top + titleHeight + padding, me.bottom - columnSizes[cursor.line].height);
      }

      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = (0, _helpersSegment.av)(textAlign, x + boxWidth + halfFontSize, me.right);
      fillText(rtlHelper.x(x), y, legendItem);

      if (isHorizontal) {
        cursor.x += width + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    (0, _helpersSegment.aw)(me.ctx, opts.textDirection);
  }

  drawTitle() {
    const me = this;
    const opts = me.options;
    const titleOpts = opts.title;
    const titleFont = (0, _helpersSegment.W)(titleOpts.font);
    const titlePadding = (0, _helpersSegment.C)(titleOpts.padding);

    if (!titleOpts.display) {
      return;
    }

    const rtlHelper = (0, _helpersSegment.at)(opts.rtl, me.left, me.width);
    const ctx = me.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = me.left;
    let maxWidth = me.width;

    if (this.isHorizontal()) {
      maxWidth = Math.max(...me.lineWidths);
      y = me.top + topPaddingPlusHalfFontSize;
      left = (0, _helpersSegment.Y)(opts.align, left, me.right - maxWidth);
    } else {
      const maxHeight = me.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + (0, _helpersSegment.Y)(opts.align, me.top, me.bottom - maxHeight - opts.labels.padding - me._computeTitleHeight());
    }

    const x = (0, _helpersSegment.Y)(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign((0, _helpersSegment.X)(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    (0, _helpersSegment.V)(ctx, titleOpts.text, x, y, titleFont);
  }

  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = (0, _helpersSegment.W)(titleOpts.font);
    const titlePadding = (0, _helpersSegment.C)(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }

  _getLegendItemAt(x, y) {
    const me = this;
    let i, hitBox, lh;

    if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
      lh = me.legendHitBoxes;

      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];

        if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
          return me.legendItems[i];
        }
      }
    }

    return null;
  }

  handleEvent(e) {
    const me = this;
    const opts = me.options;

    if (!isListened(e.type, opts)) {
      return;
    }

    const hoveredItem = me._getLegendItemAt(e.x, e.y);

    if (e.type === 'mousemove') {
      const previous = me._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);

      if (previous && !sameItem) {
        (0, _helpersSegment.N)(opts.onLeave, [e, previous, me], me);
      }

      me._hoveredItem = hoveredItem;

      if (hoveredItem && !sameItem) {
        (0, _helpersSegment.N)(opts.onHover, [e, hoveredItem, me], me);
      }
    } else if (hoveredItem) {
      (0, _helpersSegment.N)(opts.onClick, [e, hoveredItem, me], me);
    }
  }

}

function isListened(type, opts) {
  if (type === 'mousemove' && (opts.onHover || opts.onLeave)) {
    return true;
  }

  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }

  return false;
}

var plugin_legend = {
  id: 'legend',
  _element: Legend,

  start(chart, _args, options) {
    const legend = chart.legend = new Legend({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },

  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },

  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },

  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },

  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },

  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,

    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;

      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },

    onHover: null,
    onLeave: null,
    labels: {
      color: ctx => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,

      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {
          labels: {
            usePointStyle,
            pointStyle,
            textAlign,
            color
          }
        } = chart.legend.options;
        return chart._getSortedDatasetMetas().map(meta => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = (0, _helpersSegment.C)(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: 0,
            datasetIndex: meta.index
          };
        }, this);
      }

    },
    title: {
      color: ctx => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: ''
    }
  },
  descriptors: {
    _scriptable: name => !name.startsWith('on'),
    labels: {
      _scriptable: name => !['generateLabels', 'filter', 'sort'].includes(name)
    }
  }
};
exports.Legend = plugin_legend;

class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }

  update(maxWidth, maxHeight) {
    const me = this;
    const opts = me.options;
    me.left = 0;
    me.top = 0;

    if (!opts.display) {
      me.width = me.height = me.right = me.bottom = 0;
      return;
    }

    me.width = me.right = maxWidth;
    me.height = me.bottom = maxHeight;
    const lineCount = (0, _helpersSegment.b)(opts.text) ? opts.text.length : 1;
    me._padding = (0, _helpersSegment.C)(opts.padding);

    const textSize = lineCount * (0, _helpersSegment.W)(opts.font).lineHeight + me._padding.height;

    if (me.isHorizontal()) {
      me.height = textSize;
    } else {
      me.width = textSize;
    }
  }

  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }

  _drawArgs(offset) {
    const {
      top,
      left,
      bottom,
      right,
      options
    } = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;

    if (this.isHorizontal()) {
      titleX = (0, _helpersSegment.Y)(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = (0, _helpersSegment.Y)(align, bottom, top);
        rotation = _helpersSegment.P * -0.5;
      } else {
        titleX = right - offset;
        titleY = (0, _helpersSegment.Y)(align, top, bottom);
        rotation = _helpersSegment.P * 0.5;
      }

      maxWidth = bottom - top;
    }

    return {
      titleX,
      titleY,
      maxWidth,
      rotation
    };
  }

  draw() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;

    if (!opts.display) {
      return;
    }

    const fontOpts = (0, _helpersSegment.W)(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + me._padding.top;

    const {
      titleX,
      titleY,
      maxWidth,
      rotation
    } = me._drawArgs(offset);

    (0, _helpersSegment.V)(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: (0, _helpersSegment.X)(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  }

}

function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}

var plugin_title = {
  id: 'title',
  _element: Title,

  start(chart, _args, options) {
    createTitle(chart, options);
  },

  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },

  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },

  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold'
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
exports.Title = plugin_title;
const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }

    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;

    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;

      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }

    return {
      x: x / count,
      y: y / count
    };
  },

  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }

    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;

    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;

      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = (0, _helpersSegment.ay)(eventPosition, center);

        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }

    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }

    return {
      x,
      y
    };
  }

};

function pushOrConcat(base, toPush) {
  if (toPush) {
    if ((0, _helpersSegment.b)(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }

  return base;
}

function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }

  return str;
}

function createTooltipItem(chart, item) {
  const {
    element,
    datasetIndex,
    index
  } = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {
    label,
    value
  } = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}

function getTooltipSize(tooltip, options) {
  const ctx = tooltip._chart.ctx;
  const {
    body,
    footer,
    title
  } = tooltip;
  const {
    boxWidth,
    boxHeight
  } = options;
  const bodyFont = (0, _helpersSegment.W)(options.bodyFont);
  const titleFont = (0, _helpersSegment.W)(options.titleFont);
  const footerFont = (0, _helpersSegment.W)(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = (0, _helpersSegment.C)(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;

  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
  }

  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
  }

  if (footerLineCount) {
    height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
  }

  let widthPadding = 0;

  const maxLineWidth = function (line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };

  ctx.save();
  ctx.font = titleFont.string;
  (0, _helpersSegment.D)(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  (0, _helpersSegment.D)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? boxWidth + 2 : 0;
  (0, _helpersSegment.D)(body, bodyItem => {
    (0, _helpersSegment.D)(bodyItem.before, maxLineWidth);
    (0, _helpersSegment.D)(bodyItem.lines, maxLineWidth);
    (0, _helpersSegment.D)(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  (0, _helpersSegment.D)(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {
    width,
    height
  };
}

function determineYAlign(chart, size) {
  const {
    y,
    height
  } = size;

  if (y < height / 2) {
    return 'top';
  } else if (y > chart.height - height / 2) {
    return 'bottom';
  }

  return 'center';
}

function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {
    x,
    width
  } = size;
  const caret = options.caretSize + options.caretPadding;

  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }

  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}

function determineXAlign(chart, options, size, yAlign) {
  const {
    x,
    width
  } = size;
  const {
    width: chartWidth,
    chartArea: {
      left,
      right
    }
  } = chart;
  let xAlign = 'center';

  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }

  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }

  return xAlign;
}

function determineAlignment(chart, options, size) {
  const yAlign = options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}

function alignX(size, xAlign) {
  let {
    x,
    width
  } = size;

  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= width / 2;
  }

  return x;
}

function alignY(size, yAlign, paddingAndSize) {
  let {
    y,
    height
  } = size;

  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= height / 2;
  }

  return y;
}

function getBackgroundPoint(options, size, alignment, chart) {
  const {
    caretSize,
    caretPadding,
    cornerRadius
  } = options;
  const {
    xAlign,
    yAlign
  } = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const radiusAndPadding = cornerRadius + caretPadding;
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);

  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= radiusAndPadding;
  } else if (xAlign === 'right') {
    x += radiusAndPadding;
  }

  return {
    x: (0, _helpersSegment.x)(x, 0, chart.width - size.width),
    y: (0, _helpersSegment.x)(y, 0, chart.height - size.height)
  };
}

function getAlignedX(tooltip, align, options) {
  const padding = (0, _helpersSegment.C)(options.padding);
  return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}

function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}

function createTooltipContext(parent, tooltip, tooltipItems) {
  return Object.assign(Object.create(parent), {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}

function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}

class Tooltip extends Element {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._chart = config._chart;
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }

  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }

  _resolveAnimations() {
    const me = this;
    const cached = me._cachedAnimations;

    if (cached) {
      return cached;
    }

    const chart = me._chart;
    const options = me.options.setContext(me.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(me._chart, opts);

    if (opts._cacheable) {
      me._cachedAnimations = Object.freeze(animations);
    }

    return animations;
  }

  getContext() {
    const me = this;
    return me.$context || (me.$context = createTooltipContext(me._chart.getContext(), me, me._tooltipItems));
  }

  getTitle(context, options) {
    const me = this;
    const {
      callbacks
    } = options;
    const beforeTitle = callbacks.beforeTitle.apply(me, [context]);
    const title = callbacks.title.apply(me, [context]);
    const afterTitle = callbacks.afterTitle.apply(me, [context]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }

  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
  }

  getBody(tooltipItems, options) {
    const me = this;
    const {
      callbacks
    } = options;
    const bodyItems = [];
    (0, _helpersSegment.D)(tooltipItems, context => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(me, context)));
      pushOrConcat(bodyItem.lines, scoped.label.call(me, context));
      pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(me, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }

  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
  }

  getFooter(tooltipItems, options) {
    const me = this;
    const {
      callbacks
    } = options;
    const beforeFooter = callbacks.beforeFooter.apply(me, [tooltipItems]);
    const footer = callbacks.footer.apply(me, [tooltipItems]);
    const afterFooter = callbacks.afterFooter.apply(me, [tooltipItems]);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }

  _createItems(options) {
    const me = this;
    const active = me._active;
    const data = me._chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;

    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(me._chart, active[i]));
    }

    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }

    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }

    (0, _helpersSegment.D)(tooltipItems, context => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(scoped.labelColor.call(me, context));
      labelPointStyles.push(scoped.labelPointStyle.call(me, context));
      labelTextColors.push(scoped.labelTextColor.call(me, context));
    });
    me.labelColors = labelColors;
    me.labelPointStyles = labelPointStyles;
    me.labelTextColors = labelTextColors;
    me.dataPoints = tooltipItems;
    return tooltipItems;
  }

  update(changed, replay) {
    const me = this;
    const options = me.options.setContext(me.getContext());
    const active = me._active;
    let properties;
    let tooltipItems = [];

    if (!active.length) {
      if (me.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(me, active, me._eventPosition);
      tooltipItems = me._createItems(options);
      me.title = me.getTitle(tooltipItems, options);
      me.beforeBody = me.getBeforeBody(tooltipItems, options);
      me.body = me.getBody(tooltipItems, options);
      me.afterBody = me.getAfterBody(tooltipItems, options);
      me.footer = me.getFooter(tooltipItems, options);
      const size = me._size = getTooltipSize(me, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(me._chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, me._chart);
      me.xAlign = alignment.xAlign;
      me.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }

    me._tooltipItems = tooltipItems;
    me.$context = undefined;

    if (properties) {
      me._resolveAnimations().update(me, properties);
    }

    if (changed && options.external) {
      options.external.call(me, {
        chart: me._chart,
        tooltip: me,
        replay
      });
    }
  }

  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }

  getCaretPosition(tooltipPoint, size, options) {
    const {
      xAlign,
      yAlign
    } = this;
    const {
      cornerRadius,
      caretSize
    } = options;
    const {
      x: ptX,
      y: ptY
    } = tooltipPoint;
    const {
      width,
      height
    } = size;
    let x1, x2, x3, y1, y2, y3;

    if (yAlign === 'center') {
      y2 = ptY + height / 2;

      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }

      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + cornerRadius + caretSize;
      } else if (xAlign === 'right') {
        x2 = ptX + width - cornerRadius - caretSize;
      } else {
        x2 = this.caretX;
      }

      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }

      y3 = y1;
    }

    return {
      x1,
      x2,
      x3,
      y1,
      y2,
      y3
    };
  }

  drawTitle(pt, ctx, options) {
    const me = this;
    const title = me.title;
    const length = title.length;
    let titleFont, titleSpacing, i;

    if (length) {
      const rtlHelper = (0, _helpersSegment.at)(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = (0, _helpersSegment.W)(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;

      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;

        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }

  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const me = this;
    const labelColors = me.labelColors[i];
    const labelPointStyle = me.labelPointStyles[i];
    const {
      boxHeight,
      boxWidth
    } = options;
    const bodyFont = (0, _helpersSegment.W)(options.bodyFont);
    const colorX = getAlignedX(me, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;

    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      (0, _helpersSegment.an)(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColors.borderColor;
      ctx.fillStyle = labelColors.backgroundColor;
      (0, _helpersSegment.an)(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = labelColors.borderWidth || 1;
      ctx.strokeStyle = labelColors.borderColor;
      ctx.setLineDash(labelColors.borderDash || []);
      ctx.lineDashOffset = labelColors.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
      const borderRadius = (0, _helpersSegment.aq)(labelColors.borderRadius);

      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        (0, _helpersSegment.ao)(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.beginPath();
        (0, _helpersSegment.ao)(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColors.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }

    ctx.fillStyle = me.labelTextColors[i];
  }

  drawBody(pt, ctx, options) {
    const me = this;
    const {
      body
    } = me;
    const {
      bodySpacing,
      bodyAlign,
      displayColors,
      boxHeight,
      boxWidth
    } = options;
    const bodyFont = (0, _helpersSegment.W)(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = (0, _helpersSegment.at)(options.rtl, me.x, me.width);

    const fillLineOfText = function (line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };

    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(me, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    (0, _helpersSegment.D)(me.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + 1 : boxWidth + 2 : 0;

    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = me.labelTextColors[i];
      ctx.fillStyle = textColor;
      (0, _helpersSegment.D)(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;

      if (displayColors && lines.length) {
        me._drawColorBox(ctx, pt, i, rtlHelper, options);

        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }

      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }

      (0, _helpersSegment.D)(bodyItem.after, fillLineOfText);
    }

    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    (0, _helpersSegment.D)(me.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }

  drawFooter(pt, ctx, options) {
    const me = this;
    const footer = me.footer;
    const length = footer.length;
    let footerFont, i;

    if (length) {
      const rtlHelper = (0, _helpersSegment.at)(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = (0, _helpersSegment.W)(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;

      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }

  drawBackground(pt, ctx, tooltipSize, options) {
    const {
      xAlign,
      yAlign
    } = this;
    const {
      x,
      y
    } = pt;
    const {
      width,
      height
    } = tooltipSize;
    const radius = options.cornerRadius;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);

    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }

    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }

    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }

    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);

    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }

    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();

    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }

  _updateAnimationTarget(options) {
    const me = this;
    const chart = me._chart;
    const anims = me.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;

    if (animX || animY) {
      const position = positioners[options.position].call(me, me._active, me._eventPosition);

      if (!position) {
        return;
      }

      const size = me._size = getTooltipSize(me, options);
      const positionAndSize = Object.assign({}, position, me._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);

      if (animX._to !== point.x || animY._to !== point.y) {
        me.xAlign = alignment.xAlign;
        me.yAlign = alignment.yAlign;
        me.width = size.width;
        me.height = size.height;
        me.caretX = position.x;
        me.caretY = position.y;

        me._resolveAnimations().update(me, point);
      }
    }
  }

  draw(ctx) {
    const me = this;
    const options = me.options.setContext(me.getContext());
    let opacity = me.opacity;

    if (!opacity) {
      return;
    }

    me._updateAnimationTarget(options);

    const tooltipSize = {
      width: me.width,
      height: me.height
    };
    const pt = {
      x: me.x,
      y: me.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = (0, _helpersSegment.C)(options.padding);
    const hasTooltipContent = me.title.length || me.beforeBody.length || me.body.length || me.afterBody.length || me.footer.length;

    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      me.drawBackground(pt, ctx, tooltipSize, options);
      (0, _helpersSegment.au)(ctx, options.textDirection);
      pt.y += padding.top;
      me.drawTitle(pt, ctx, options);
      me.drawBody(pt, ctx, options);
      me.drawFooter(pt, ctx, options);
      (0, _helpersSegment.aw)(ctx, options.textDirection);
      ctx.restore();
    }
  }

  getActiveElements() {
    return this._active || [];
  }

  setActiveElements(activeElements, eventPosition) {
    const me = this;
    const lastActive = me._active;
    const active = activeElements.map(({
      datasetIndex,
      index
    }) => {
      const meta = me._chart.getDatasetMeta(datasetIndex);

      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }

      return {
        datasetIndex,
        element: meta.data[index],
        index
      };
    });
    const changed = !(0, _helpersSegment.ac)(lastActive, active);

    const positionChanged = me._positionChanged(active, eventPosition);

    if (changed || positionChanged) {
      me._active = active;
      me._eventPosition = eventPosition;
      me.update(true);
    }
  }

  handleEvent(e, replay) {
    const me = this;
    const options = me.options;
    const lastActive = me._active || [];
    let changed = false;
    let active = [];

    if (e.type !== 'mouseout') {
      active = me._chart.getElementsAtEventForMode(e, options.mode, options, replay);

      if (options.reverse) {
        active.reverse();
      }
    }

    const positionChanged = me._positionChanged(active, e);

    changed = replay || !(0, _helpersSegment.ac)(active, lastActive) || positionChanged;

    if (changed) {
      me._active = active;

      if (options.enabled || options.external) {
        me._eventPosition = {
          x: e.x,
          y: e.y
        };
        me.update(true, replay);
      }
    }

    return changed;
  }

  _positionChanged(active, e) {
    const {
      caretX,
      caretY,
      options
    } = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }

}

Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,

  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({
        _chart: chart,
        options
      });
    }
  },

  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },

  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },

  afterDraw(chart) {
    const tooltip = chart.tooltip;
    const args = {
      tooltip
    };

    if (chart.notifyPlugins('beforeTooltipDraw', args) === false) {
      return;
    }

    if (tooltip) {
      tooltip.draw(chart.ctx);
    }

    chart.notifyPlugins('afterTooltipDraw', args);
  },

  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;

      if (chart.tooltip.handleEvent(args.event, useFinalPosition)) {
        args.changed = true;
      }
    }
  },

  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold'
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold'
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart'
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: _helpersSegment.ax,

      title(tooltipItems) {
        if (tooltipItems.length > 0) {
          const item = tooltipItems[0];
          const labels = item.chart.data.labels;
          const labelCount = labels ? labels.length : 0;

          if (this && this.options && this.options.mode === 'dataset') {
            return item.dataset.label || '';
          } else if (item.label) {
            return item.label;
          } else if (labelCount > 0 && item.dataIndex < labelCount) {
            return labels[item.dataIndex];
          }
        }

        return '';
      },

      afterTitle: _helpersSegment.ax,
      beforeBody: _helpersSegment.ax,
      beforeLabel: _helpersSegment.ax,

      label(tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
          return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }

        let label = tooltipItem.dataset.label || '';

        if (label) {
          label += ': ';
        }

        const value = tooltipItem.formattedValue;

        if (!(0, _helpersSegment.j)(value)) {
          label += value;
        }

        return label;
      },

      labelColor(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          borderColor: options.borderColor,
          backgroundColor: options.backgroundColor,
          borderWidth: options.borderWidth,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderRadius: 0
        };
      },

      labelTextColor() {
        return this.options.bodyColor;
      },

      labelPointStyle(tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
          pointStyle: options.pointStyle,
          rotation: options.rotation
        };
      },

      afterLabel: _helpersSegment.ax,
      afterBody: _helpersSegment.ax,
      beforeFooter: _helpersSegment.ax,
      footer: _helpersSegment.ax,
      afterFooter: _helpersSegment.ax
    }
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: name => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};
exports.Tooltip = plugin_tooltip;
var plugins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Decimation: plugin_decimation,
  Filler: plugin_filler,
  Legend: plugin_legend,
  Title: plugin_title,
  Tooltip: plugin_tooltip
});
exports.plugins = plugins;

const addIfString = (labels, raw, index) => typeof raw === 'string' ? labels.push(raw) - 1 : isNaN(raw) ? null : index;

function findOrAddLabel(labels, raw, index) {
  const first = labels.indexOf(raw);

  if (first === -1) {
    return addIfString(labels, raw, index);
  }

  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}

const validIndex = (index, max) => index === null ? null : (0, _helpersSegment.x)(Math.round(index), 0, max);

class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
  }

  parse(raw, index) {
    if ((0, _helpersSegment.j)(raw)) {
      return null;
    }

    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0, _helpersSegment.v)(index, raw));
    return validIndex(index, labels.length - 1);
  }

  determineDataLimits() {
    const me = this;
    const {
      minDefined,
      maxDefined
    } = me.getUserBounds();
    let {
      min,
      max
    } = me.getMinMax(true);

    if (me.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }

      if (!maxDefined) {
        max = me.getLabels().length - 1;
      }
    }

    me.min = min;
    me.max = max;
  }

  buildTicks() {
    const me = this;
    const min = me.min;
    const max = me.max;
    const offset = me.options.offset;
    const ticks = [];
    let labels = me.getLabels();
    labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
    me._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    me._startValue = me.min - (offset ? 0.5 : 0);

    for (let value = min; value <= max; value++) {
      ticks.push({
        value
      });
    }

    return ticks;
  }

  getLabelForValue(value) {
    const me = this;
    const labels = me.getLabels();

    if (value >= 0 && value < labels.length) {
      return labels[value];
    }

    return value;
  }

  configure() {
    const me = this;
    super.configure();

    if (!me.isHorizontal()) {
      me._reversePixels = !me._reversePixels;
    }
  }

  getPixelForValue(value) {
    const me = this;

    if (typeof value !== 'number') {
      value = me.parse(value);
    }

    return value === null ? NaN : me.getPixelForDecimal((value - me._startValue) / me._valueRange);
  }

  getPixelForTick(index) {
    const me = this;
    const ticks = me.ticks;

    if (index < 0 || index > ticks.length - 1) {
      return null;
    }

    return me.getPixelForValue(ticks[index].value);
  }

  getValueForPixel(pixel) {
    const me = this;
    return Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
  }

  getBasePixel() {
    return this.bottom;
  }

}

exports.CategoryScale = CategoryScale;
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: CategoryScale.prototype.getLabelForValue
  }
};

function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {
    bounds,
    step,
    min,
    max,
    precision,
    count,
    maxTicks,
    maxDigits,
    includeBounds
  } = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {
    min: rmin,
    max: rmax
  } = dataRange;
  const minDefined = !(0, _helpersSegment.j)(min);
  const maxDefined = !(0, _helpersSegment.j)(max);
  const countDefined = !(0, _helpersSegment.j)(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = (0, _helpersSegment.aA)((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;

  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }

  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);

  if (numSpaces > maxSpaces) {
    spacing = (0, _helpersSegment.aA)(numSpaces * spacing / maxSpaces / unit) * unit;
  }

  if (!(0, _helpersSegment.j)(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }

  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }

  if (minDefined && maxDefined && step && (0, _helpersSegment.aB)((max - min) / step, spacing / 1000)) {
    numSpaces = Math.min((max - min) / spacing, maxTicks);
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;

    if ((0, _helpersSegment.aC)(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }

  const decimalPlaces = Math.max((0, _helpersSegment.aD)(spacing), (0, _helpersSegment.aD)(niceMin));
  factor = Math.pow(10, (0, _helpersSegment.j)(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;

  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({
        value: min
      });

      if (niceMin < min) {
        j++;
      }

      if ((0, _helpersSegment.aC)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }

  for (; j < numSpaces; ++j) {
    ticks.push({
      value: Math.round((niceMin + j * spacing) * factor) / factor
    });
  }

  if (maxDefined && includeBounds && niceMax !== max) {
    if ((0, _helpersSegment.aC)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({
        value: max
      });
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({
      value: niceMax
    });
  }

  return ticks;
}

function relativeLabelSize(value, minSpacing, {
  horizontal,
  minRotation
}) {
  const rad = (0, _helpersSegment.t)(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}

class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }

  parse(raw, index) {
    if ((0, _helpersSegment.j)(raw)) {
      return null;
    }

    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }

    return +raw;
  }

  handleTickRangeOptions() {
    const me = this;
    const {
      beginAtZero
    } = me.options;
    const {
      minDefined,
      maxDefined
    } = me.getUserBounds();
    let {
      min,
      max
    } = me;

    const setMin = v => min = minDefined ? min : v;

    const setMax = v => max = maxDefined ? max : v;

    if (beginAtZero) {
      const minSign = (0, _helpersSegment.s)(min);
      const maxSign = (0, _helpersSegment.s)(max);

      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }

    if (min === max) {
      setMax(max + 1);

      if (!beginAtZero) {
        setMin(min - 1);
      }
    }

    me.min = min;
    me.max = max;
  }

  getTickLimit() {
    const me = this;
    const tickOpts = me.options.ticks;
    let {
      maxTicksLimit,
      stepSize
    } = tickOpts;
    let maxTicks;

    if (stepSize) {
      maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
    } else {
      maxTicks = me.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }

    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }

    return maxTicks;
  }

  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }

  buildTicks() {
    const me = this;
    const opts = me.options;
    const tickOpts = opts.ticks;
    let maxTicks = me.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: me._maxDigits(),
      horizontal: me.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = me._range || me;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);

    if (opts.bounds === 'ticks') {
      (0, _helpersSegment.az)(ticks, me, 'value');
    }

    if (opts.reverse) {
      ticks.reverse();
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }

    return ticks;
  }

  configure() {
    const me = this;
    const ticks = me.ticks;
    let start = me.min;
    let end = me.max;
    super.configure();

    if (me.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }

    me._startValue = start;
    me._endValue = end;
    me._valueRange = end - start;
  }

  getLabelForValue(value) {
    return (0, _helpersSegment.p)(value, this.chart.options.locale);
  }

}

class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    const me = this;
    const {
      min,
      max
    } = me.getMinMax(true);
    me.min = (0, _helpersSegment.g)(min) ? min : 0;
    me.max = (0, _helpersSegment.g)(max) ? max : 1;
    me.handleTickRangeOptions();
  }

  computeTickLimit() {
    const me = this;
    const horizontal = me.isHorizontal();
    const length = horizontal ? me.width : me.height;
    const minRotation = (0, _helpersSegment.t)(me.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;

    const tickFont = me._resolveTickFontOptions(0);

    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }

  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }

  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }

}

exports.LinearScale = LinearScale;
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};

function isMajor(tickVal) {
  const remain = tickVal / Math.pow(10, Math.floor((0, _helpersSegment.K)(tickVal)));
  return remain === 1;
}

function generateTicks(generationOptions, dataRange) {
  const endExp = Math.floor((0, _helpersSegment.K)(dataRange.max));
  const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  const ticks = [];
  let tickVal = (0, _helpersSegment.M)(generationOptions.min, Math.pow(10, Math.floor((0, _helpersSegment.K)(dataRange.min))));
  let exp = Math.floor((0, _helpersSegment.K)(tickVal));
  let significand = Math.floor(tickVal / Math.pow(10, exp));
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

  do {
    ticks.push({
      value: tickVal,
      major: isMajor(tickVal)
    });
    ++significand;

    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }

    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || exp === endExp && significand < endSignificand);

  const lastTick = (0, _helpersSegment.M)(generationOptions.max, tickVal);
  ticks.push({
    value: lastTick,
    major: isMajor(tickVal)
  });
  return ticks;
}

class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }

  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);

    if (value === 0) {
      this._zero = true;
      return undefined;
    }

    return (0, _helpersSegment.g)(value) && value > 0 ? value : null;
  }

  determineDataLimits() {
    const me = this;
    const {
      min,
      max
    } = me.getMinMax(true);
    me.min = (0, _helpersSegment.g)(min) ? Math.max(0, min) : null;
    me.max = (0, _helpersSegment.g)(max) ? Math.max(0, max) : null;

    if (me.options.beginAtZero) {
      me._zero = true;
    }

    me.handleTickRangeOptions();
  }

  handleTickRangeOptions() {
    const me = this;
    const {
      minDefined,
      maxDefined
    } = me.getUserBounds();
    let min = me.min;
    let max = me.max;

    const setMin = v => min = minDefined ? min : v;

    const setMax = v => max = maxDefined ? max : v;

    const exp = (v, m) => Math.pow(10, Math.floor((0, _helpersSegment.K)(v)) + m);

    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(exp(min, -1));
        setMax(exp(max, +1));
      }
    }

    if (min <= 0) {
      setMin(exp(max, -1));
    }

    if (max <= 0) {
      setMax(exp(min, +1));
    }

    if (me._zero && me.min !== me._suggestedMin && min === exp(me.min, 0)) {
      setMin(exp(min, -1));
    }

    me.min = min;
    me.max = max;
  }

  buildTicks() {
    const me = this;
    const opts = me.options;
    const generationOptions = {
      min: me._userMin,
      max: me._userMax
    };
    const ticks = generateTicks(generationOptions, me);

    if (opts.bounds === 'ticks') {
      (0, _helpersSegment.az)(ticks, me, 'value');
    }

    if (opts.reverse) {
      ticks.reverse();
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }

    return ticks;
  }

  getLabelForValue(value) {
    return value === undefined ? '0' : (0, _helpersSegment.p)(value, this.chart.options.locale);
  }

  configure() {
    const me = this;
    const start = me.min;
    super.configure();
    me._startValue = (0, _helpersSegment.K)(start);
    me._valueRange = (0, _helpersSegment.K)(me.max) - (0, _helpersSegment.K)(start);
  }

  getPixelForValue(value) {
    const me = this;

    if (value === undefined || value === 0) {
      value = me.min;
    }

    if (value === null || isNaN(value)) {
      return NaN;
    }

    return me.getPixelForDecimal(value === me.min ? 0 : ((0, _helpersSegment.K)(value) - me._startValue) / me._valueRange);
  }

  getValueForPixel(pixel) {
    const me = this;
    const decimal = me.getDecimalForPixel(pixel);
    return Math.pow(10, me._startValue + decimal * me._valueRange);
  }

}

exports.LogarithmicScale = LogarithmicScale;
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: Ticks.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};

function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;

  if (tickOpts.display && opts.display) {
    const padding = (0, _helpersSegment.C)(tickOpts.backdropPadding);
    return (0, _helpersSegment.v)(tickOpts.font && tickOpts.font.size, _helpersSegment.d.font.size) + padding.height;
  }

  return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
  if ((0, _helpersSegment.b)(label)) {
    return {
      w: (0, _helpersSegment.aE)(ctx, ctx.font, label),
      h: label.length * lineHeight
    };
  }

  return {
    w: ctx.measureText(label).width,
    h: lineHeight
  };
}

function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }

  return {
    start: pos,
    end: pos + size
  };
}

function fitWithPointLabels(scale) {
  const furthestLimits = {
    l: 0,
    r: scale.width,
    t: 0,
    b: scale.height - scale.paddingTop
  };
  const furthestAngles = {};
  let i, textSize, pointPosition;
  const labelSizes = [];
  const padding = [];
  const valueCount = scale.getLabels().length;

  for (i = 0; i < valueCount; i++) {
    const opts = scale.options.pointLabels.setContext(scale.getContext(i));
    padding[i] = opts.padding;
    pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i]);
    const plFont = (0, _helpersSegment.W)(opts.font);
    scale.ctx.font = plFont.string;
    textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = scale.getIndexAngle(i);
    const angle = (0, _helpersSegment.Q)(angleRadians);
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

    if (hLimits.start < furthestLimits.l) {
      furthestLimits.l = hLimits.start;
      furthestAngles.l = angleRadians;
    }

    if (hLimits.end > furthestLimits.r) {
      furthestLimits.r = hLimits.end;
      furthestAngles.r = angleRadians;
    }

    if (vLimits.start < furthestLimits.t) {
      furthestLimits.t = vLimits.start;
      furthestAngles.t = angleRadians;
    }

    if (vLimits.end > furthestLimits.b) {
      furthestLimits.b = vLimits.end;
      furthestAngles.b = angleRadians;
    }
  }

  scale._setReductions(scale.drawingArea, furthestLimits, furthestAngles);

  scale._pointLabelItems = [];
  const opts = scale.options;
  const tickBackdropHeight = getTickBackdropHeight(opts);
  const outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

  for (i = 0; i < valueCount; i++) {
    const extra = i === 0 ? tickBackdropHeight / 2 : 0;
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i]);
    const angle = (0, _helpersSegment.Q)(scale.getIndexAngle(i));
    const size = labelSizes[i];
    adjustPointPositionForLabelHeight(angle, size, pointLabelPosition);
    const textAlign = getTextAlignForAngle(angle);
    let left;

    if (textAlign === 'left') {
      left = pointLabelPosition.x;
    } else if (textAlign === 'center') {
      left = pointLabelPosition.x - size.w / 2;
    } else {
      left = pointLabelPosition.x - size.w;
    }

    const right = left + size.w;
    scale._pointLabelItems[i] = {
      x: pointLabelPosition.x,
      y: pointLabelPosition.y,
      textAlign,
      left,
      top: pointLabelPosition.y,
      right,
      bottom: pointLabelPosition.y + size.h
    };
  }
}

function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }

  return 'right';
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
  if (angle === 90 || angle === 270) {
    position.y -= textSize.h / 2;
  } else if (angle > 270 || angle < 90) {
    position.y -= textSize.h;
  }
}

function drawPointLabels(scale, labelCount) {
  const {
    ctx,
    options: {
      pointLabels
    }
  } = scale;

  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getContext(i));
    const plFont = (0, _helpersSegment.W)(optsAtIndex.font);
    const {
      x,
      y,
      textAlign,
      left,
      top,
      right,
      bottom
    } = scale._pointLabelItems[i];
    const {
      backdropColor
    } = optsAtIndex;

    if (!(0, _helpersSegment.j)(backdropColor)) {
      const padding = (0, _helpersSegment.C)(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      ctx.fillRect(left - padding.left, top - padding.top, right - left + padding.width, bottom - top + padding.height);
    }

    (0, _helpersSegment.V)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
      color: optsAtIndex.color,
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }
}

function pathRadiusLine(scale, radius, circular, labelCount) {
  const {
    ctx
  } = scale;

  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _helpersSegment.T);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);

    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}

function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {
    color,
    lineWidth
  } = gridLineOpts;

  if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
    return;
  }

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(gridLineOpts.borderDash);
  ctx.lineDashOffset = gridLineOpts.borderDashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function numberOrZero(param) {
  return (0, _helpersSegment.w)(param) ? param : 0;
}

class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }

  setDimensions() {
    const me = this;
    me.width = me.maxWidth;
    me.height = me.maxHeight;
    me.paddingTop = getTickBackdropHeight(me.options) / 2;
    me.xCenter = Math.floor(me.width / 2);
    me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
    me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
  }

  determineDataLimits() {
    const me = this;
    const {
      min,
      max
    } = me.getMinMax(false);
    me.min = (0, _helpersSegment.g)(min) && !isNaN(min) ? min : 0;
    me.max = (0, _helpersSegment.g)(max) && !isNaN(max) ? max : 0;
    me.handleTickRangeOptions();
  }

  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }

  generateTickLabels(ticks) {
    const me = this;
    LinearScaleBase.prototype.generateTickLabels.call(me, ticks);
    me._pointLabels = me.getLabels().map((value, index) => {
      const label = (0, _helpersSegment.N)(me.options.pointLabels.callback, [value, index], me);
      return label || label === 0 ? label : '';
    });
  }

  fit() {
    const me = this;
    const opts = me.options;

    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(me);
    } else {
      me.setCenterPoint(0, 0, 0, 0);
    }
  }

  _setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
    const me = this;
    let radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
    let radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
    let radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
    let radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
    radiusReductionLeft = numberOrZero(radiusReductionLeft);
    radiusReductionRight = numberOrZero(radiusReductionRight);
    radiusReductionTop = numberOrZero(radiusReductionTop);
    radiusReductionBottom = numberOrZero(radiusReductionBottom);
    me.drawingArea = Math.max(largestPossibleRadius / 2, Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2)));
    me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
  }

  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    const me = this;
    const maxRight = me.width - rightMovement - me.drawingArea;
    const maxLeft = leftMovement + me.drawingArea;
    const maxTop = topMovement + me.drawingArea;
    const maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
    me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
    me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
  }

  getIndexAngle(index) {
    const angleMultiplier = _helpersSegment.T / this.getLabels().length;
    const startAngle = this.options.startAngle || 0;
    return (0, _helpersSegment.as)(index * angleMultiplier + (0, _helpersSegment.t)(startAngle));
  }

  getDistanceFromCenterForValue(value) {
    const me = this;

    if ((0, _helpersSegment.j)(value)) {
      return NaN;
    }

    const scalingFactor = me.drawingArea / (me.max - me.min);

    if (me.options.reverse) {
      return (me.max - value) * scalingFactor;
    }

    return (value - me.min) * scalingFactor;
  }

  getValueForDistanceFromCenter(distance) {
    if ((0, _helpersSegment.j)(distance)) {
      return NaN;
    }

    const me = this;
    const scaledDistance = distance / (me.drawingArea / (me.max - me.min));
    return me.options.reverse ? me.max - scaledDistance : me.min + scaledDistance;
  }

  getPointPosition(index, distanceFromCenter) {
    const me = this;

    const angle = me.getIndexAngle(index) - _helpersSegment.H;

    return {
      x: Math.cos(angle) * distanceFromCenter + me.xCenter,
      y: Math.sin(angle) * distanceFromCenter + me.yCenter,
      angle
    };
  }

  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }

  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }

  getPointLabelPosition(index) {
    const {
      left,
      top,
      right,
      bottom
    } = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom
    };
  }

  drawBackground() {
    const me = this;
    const {
      backgroundColor,
      grid: {
        circular
      }
    } = me.options;

    if (backgroundColor) {
      const ctx = me.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(me, me.getDistanceFromCenterForValue(me._endValue), circular, me.getLabels().length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }

  drawGrid() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;
    const {
      angleLines,
      grid
    } = opts;
    const labelCount = me.getLabels().length;
    let i, offset, position;

    if (opts.pointLabels.display) {
      drawPointLabels(me, labelCount);
    }

    if (grid.display) {
      me.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = me.getDistanceFromCenterForValue(tick.value);
          const optsAtIndex = grid.setContext(me.getContext(index - 1));
          drawRadiusLine(me, optsAtIndex, offset, labelCount);
        }
      });
    }

    if (angleLines.display) {
      ctx.save();

      for (i = me.getLabels().length - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(me.getContext(i));
        const {
          color,
          lineWidth
        } = optsAtIndex;

        if (!lineWidth || !color) {
          continue;
        }

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
        position = me.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(me.xCenter, me.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  drawBorder() {}

  drawLabels() {
    const me = this;
    const ctx = me.ctx;
    const opts = me.options;
    const tickOpts = opts.ticks;

    if (!tickOpts.display) {
      return;
    }

    const startAngle = me.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(me.xCenter, me.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    me.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }

      const optsAtIndex = tickOpts.setContext(me.getContext(index));
      const tickFont = (0, _helpersSegment.W)(optsAtIndex.font);
      offset = me.getDistanceFromCenterForValue(me.ticks[index].value);

      if (optsAtIndex.showLabelBackdrop) {
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = (0, _helpersSegment.C)(optsAtIndex.backdropPadding);
        ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
      }

      (0, _helpersSegment.V)(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color
      });
    });
    ctx.restore();
  }

  drawTitle() {}

}

exports.RadialLinearScale = RadialLinearScale;
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },

    callback(label) {
      return label;
    },

    padding: 5
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};
const INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
const UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
  return a - b;
}

function parse(scale, input) {
  if ((0, _helpersSegment.j)(input)) {
    return null;
  }

  const adapter = scale._adapter;
  const {
    parser,
    round,
    isoWeekday
  } = scale._parseOpts;
  let value = input;

  if (typeof parser === 'function') {
    value = parser(value);
  }

  if (!(0, _helpersSegment.g)(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }

  if (value === null) {
    return null;
  }

  if (round) {
    value = round === 'week' && ((0, _helpersSegment.w)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
  }

  return +value;
}

function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;

  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;

    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }

  return UNITS[ilen - 1];
}

function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];

    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }

  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}

function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {
      lo,
      hi
    } = (0, _helpersSegment.aG)(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}

function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;

  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];

    if (index >= 0) {
      ticks[index].major = true;
    }
  }

  return ticks;
}

function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;

  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }

  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}

class TimeScale extends Scale {
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }

  init(scaleOpts, opts) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    (0, _helpersSegment.a6)(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }

  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }

    return parse(this, raw);
  }

  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }

  determineDataLimits() {
    const me = this;
    const options = me.options;
    const adapter = me._adapter;
    const unit = options.time.unit || 'day';
    let {
      min,
      max,
      minDefined,
      maxDefined
    } = me.getUserBounds();

    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }

      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }

    if (!minDefined || !maxDefined) {
      _applyBounds(me._getLabelBounds());

      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(me.getMinMax(false));
      }
    }

    min = (0, _helpersSegment.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = (0, _helpersSegment.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    me.min = Math.min(min, max - 1);
    me.max = Math.max(min + 1, max);
  }

  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }

    return {
      min,
      max
    };
  }

  buildTicks() {
    const me = this;
    const options = me.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? me.getLabelTimestamps() : me._generate();

    if (options.bounds === 'ticks' && timestamps.length) {
      me.min = me._userMin || timestamps[0];
      me.max = me._userMax || timestamps[timestamps.length - 1];
    }

    const min = me.min;
    const max = me.max;
    const ticks = (0, _helpersSegment.aF)(timestamps, min, max);
    me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, me._getLabelCapacity(min)) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
    me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
    me.initOffsets(timestamps);

    if (options.reverse) {
      ticks.reverse();
    }

    return ticksFromTimestamps(me, ticks, me._majorUnit);
  }

  initOffsets(timestamps) {
    const me = this;
    let start = 0;
    let end = 0;
    let first, last;

    if (me.options.offset && timestamps.length) {
      first = me.getDecimalForValue(timestamps[0]);

      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (me.getDecimalForValue(timestamps[1]) - first) / 2;
      }

      last = me.getDecimalForValue(timestamps[timestamps.length - 1]);

      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - me.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }

    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = (0, _helpersSegment.x)(start, 0, limit);
    end = (0, _helpersSegment.x)(end, 0, limit);
    me._offsets = {
      start,
      end,
      factor: 1 / (start + 1 + end)
    };
  }

  _generate() {
    const me = this;
    const adapter = me._adapter;
    const min = me.min;
    const max = me.max;
    const options = me.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, me._getLabelCapacity(min));
    const stepSize = (0, _helpersSegment.v)(timeOpts.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = (0, _helpersSegment.w)(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;

    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }

    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);

    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }

    const timestamps = options.ticks.source === 'data' && me.getDataTimestamps();

    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }

    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }

    return Object.keys(ticks).sort((a, b) => a - b).map(x => +x);
  }

  getLabelForValue(value) {
    const me = this;
    const adapter = me._adapter;
    const timeOpts = me.options.time;

    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }

    return adapter.format(value, timeOpts.displayFormats.datetime);
  }

  _tickFormatFunction(time, index, ticks, format) {
    const me = this;
    const options = me.options;
    const formats = options.time.displayFormats;
    const unit = me._unit;
    const majorUnit = me._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;

    const label = me._adapter.format(time, format || (major ? majorFormat : minorFormat));

    const formatter = options.ticks.callback;
    return formatter ? (0, _helpersSegment.N)(formatter, [label, index, ticks], me) : label;
  }

  generateTickLabels(ticks) {
    let i, ilen, tick;

    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }

  getDecimalForValue(value) {
    const me = this;
    return value === null ? NaN : (value - me.min) / (me.max - me.min);
  }

  getPixelForValue(value) {
    const me = this;
    const offsets = me._offsets;
    const pos = me.getDecimalForValue(value);
    return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }

  getValueForPixel(pixel) {
    const me = this;
    const offsets = me._offsets;
    const pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return me.min + pos * (me.max - me.min);
  }

  _getLabelSize(label) {
    const me = this;
    const ticksOpts = me.options.ticks;
    const tickLabelWidth = me.ctx.measureText(label).width;
    const angle = (0, _helpersSegment.t)(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);

    const tickFontSize = me._resolveTickFontOptions(0).size;

    return {
      w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
      h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
    };
  }

  _getLabelCapacity(exampleTime) {
    const me = this;
    const timeOpts = me.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;

    const exampleLabel = me._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);

    const size = me._getLabelSize(exampleLabel);

    const capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }

  getDataTimestamps() {
    const me = this;
    let timestamps = me._cache.data || [];
    let i, ilen;

    if (timestamps.length) {
      return timestamps;
    }

    const metas = me.getMatchingVisibleMetas();

    if (me._normalized && metas.length) {
      return me._cache.data = metas[0].controller.getAllParsedValues(me);
    }

    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(me));
    }

    return me._cache.data = me.normalize(timestamps);
  }

  getLabelTimestamps() {
    const me = this;
    const timestamps = me._cache.labels || [];
    let i, ilen;

    if (timestamps.length) {
      return timestamps;
    }

    const labels = me.getLabels();

    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(me, labels[i]));
    }

    return me._cache.labels = me._normalized ? timestamps : me.normalize(timestamps);
  }

  normalize(values) {
    return (0, _helpersSegment._)(values.sort(sorter));
  }

}

exports.TimeScale = TimeScale;
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    major: {
      enabled: false
    }
  }
};

function interpolate(table, val, reverse) {
  let prevSource, nextSource, prevTarget, nextTarget;

  if (reverse) {
    prevSource = Math.floor(val);
    nextSource = Math.ceil(val);
    prevTarget = table[prevSource];
    nextTarget = table[nextSource];
  } else {
    const result = (0, _helpersSegment.aG)(table, val);
    prevTarget = result.lo;
    nextTarget = result.hi;
    prevSource = table[prevTarget];
    nextSource = table[nextTarget];
  }

  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}

class TimeSeriesScale extends TimeScale {
  constructor(props) {
    super(props);
    this._table = [];
    this._maxIndex = undefined;
  }

  initOffsets() {
    const me = this;

    const timestamps = me._getTimestampsForTable();

    me._table = me.buildLookupTable(timestamps);
    me._maxIndex = me._table.length - 1;
    super.initOffsets(timestamps);
  }

  buildLookupTable(timestamps) {
    const me = this;
    const {
      min,
      max
    } = me;

    if (!timestamps.length) {
      return [{
        time: min,
        pos: 0
      }, {
        time: max,
        pos: 1
      }];
    }

    const items = [min];
    let i, ilen, curr;

    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];

      if (curr > min && curr < max) {
        items.push(curr);
      }
    }

    items.push(max);
    return items;
  }

  _getTimestampsForTable() {
    const me = this;
    let timestamps = me._cache.all || [];

    if (timestamps.length) {
      return timestamps;
    }

    const data = me.getDataTimestamps();
    const label = me.getLabelTimestamps();

    if (data.length && label.length) {
      timestamps = me.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }

    timestamps = me._cache.all = timestamps;
    return timestamps;
  }

  getPixelForValue(value, index) {
    const me = this;
    const offsets = me._offsets;
    const pos = me._normalized && me._maxIndex > 0 && !(0, _helpersSegment.j)(index) ? index / me._maxIndex : me.getDecimalForValue(value);
    return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }

  getDecimalForValue(value) {
    return interpolate(this._table, value) / this._maxIndex;
  }

  getValueForPixel(pixel) {
    const me = this;
    const offsets = me._offsets;
    const decimal = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(me._table, decimal * this._maxIndex, true);
  }

}

exports.TimeSeriesScale = TimeSeriesScale;
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;
var scales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CategoryScale: CategoryScale,
  LinearScale: LinearScale,
  LogarithmicScale: LogarithmicScale,
  RadialLinearScale: RadialLinearScale,
  TimeScale: TimeScale,
  TimeSeriesScale: TimeSeriesScale
});
exports.scales = scales;
const registerables = [controllers, elements, plugins, scales];
exports.registerables = registerables;
},{"./chunks/helpers.segment.js":"../node_modules/chart.js/dist/chunks/helpers.segment.js"}],"../node_modules/chart.js/auto/auto.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chart = require("../dist/chart.esm");

_chart.Chart.register(..._chart.registerables);

var _default = _chart.Chart;
exports.default = _default;
},{"../dist/chart.esm":"../node_modules/chart.js/dist/chart.esm.js"}],"../node_modules/lodash/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],"../node_modules/lodash/_root.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":"../node_modules/lodash/_freeGlobal.js"}],"../node_modules/lodash/_Symbol.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_getRawTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js"}],"../node_modules/lodash/_objectToString.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],"../node_modules/lodash/_baseGetTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_getRawTag":"../node_modules/lodash/_getRawTag.js","./_objectToString":"../node_modules/lodash/_objectToString.js"}],"../node_modules/lodash/isObject.js":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],"../node_modules/lodash/isFunction.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObject":"../node_modules/lodash/isObject.js"}],"../node_modules/lodash/_coreJsData.js":[function(require,module,exports) {
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_isMasked.js":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":"../node_modules/lodash/_coreJsData.js"}],"../node_modules/lodash/_toSource.js":[function(require,module,exports) {
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],"../node_modules/lodash/_baseIsNative.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./isFunction":"../node_modules/lodash/isFunction.js","./_isMasked":"../node_modules/lodash/_isMasked.js","./isObject":"../node_modules/lodash/isObject.js","./_toSource":"../node_modules/lodash/_toSource.js"}],"../node_modules/lodash/_getValue.js":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],"../node_modules/lodash/_getNative.js":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":"../node_modules/lodash/_baseIsNative.js","./_getValue":"../node_modules/lodash/_getValue.js"}],"../node_modules/lodash/_defineProperty.js":[function(require,module,exports) {
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":"../node_modules/lodash/_getNative.js"}],"../node_modules/lodash/_baseAssignValue.js":[function(require,module,exports) {
var defineProperty = require('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":"../node_modules/lodash/_defineProperty.js"}],"../node_modules/lodash/_arrayAggregator.js":[function(require,module,exports) {
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;

},{}],"../node_modules/lodash/_createBaseFor.js":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],"../node_modules/lodash/_baseFor.js":[function(require,module,exports) {
var createBaseFor = require('./_createBaseFor');

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":"../node_modules/lodash/_createBaseFor.js"}],"../node_modules/lodash/_baseTimes.js":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],"../node_modules/lodash/isObjectLike.js":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],"../node_modules/lodash/_baseIsArguments.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/isArguments.js":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":"../node_modules/lodash/_baseIsArguments.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/isArray.js":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],"../node_modules/lodash/stubFalse.js":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],"../node_modules/lodash/isBuffer.js":[function(require,module,exports) {

var root = require('./_root'),
    stubFalse = require('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":"../node_modules/lodash/_root.js","./stubFalse":"../node_modules/lodash/stubFalse.js"}],"../node_modules/lodash/_isIndex.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],"../node_modules/lodash/isLength.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],"../node_modules/lodash/_baseIsTypedArray.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isLength":"../node_modules/lodash/isLength.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/_baseUnary.js":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],"../node_modules/lodash/_nodeUtil.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":"../node_modules/lodash/_freeGlobal.js"}],"../node_modules/lodash/isTypedArray.js":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":"../node_modules/lodash/_baseIsTypedArray.js","./_baseUnary":"../node_modules/lodash/_baseUnary.js","./_nodeUtil":"../node_modules/lodash/_nodeUtil.js"}],"../node_modules/lodash/_arrayLikeKeys.js":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":"../node_modules/lodash/_baseTimes.js","./isArguments":"../node_modules/lodash/isArguments.js","./isArray":"../node_modules/lodash/isArray.js","./isBuffer":"../node_modules/lodash/isBuffer.js","./_isIndex":"../node_modules/lodash/_isIndex.js","./isTypedArray":"../node_modules/lodash/isTypedArray.js"}],"../node_modules/lodash/_isPrototype.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],"../node_modules/lodash/_overArg.js":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],"../node_modules/lodash/_nativeKeys.js":[function(require,module,exports) {
var overArg = require('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":"../node_modules/lodash/_overArg.js"}],"../node_modules/lodash/_baseKeys.js":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":"../node_modules/lodash/_isPrototype.js","./_nativeKeys":"../node_modules/lodash/_nativeKeys.js"}],"../node_modules/lodash/isArrayLike.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":"../node_modules/lodash/isFunction.js","./isLength":"../node_modules/lodash/isLength.js"}],"../node_modules/lodash/keys.js":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":"../node_modules/lodash/_arrayLikeKeys.js","./_baseKeys":"../node_modules/lodash/_baseKeys.js","./isArrayLike":"../node_modules/lodash/isArrayLike.js"}],"../node_modules/lodash/_baseForOwn.js":[function(require,module,exports) {
var baseFor = require('./_baseFor'),
    keys = require('./keys');

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"./_baseFor":"../node_modules/lodash/_baseFor.js","./keys":"../node_modules/lodash/keys.js"}],"../node_modules/lodash/_createBaseEach.js":[function(require,module,exports) {
var isArrayLike = require('./isArrayLike');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./isArrayLike":"../node_modules/lodash/isArrayLike.js"}],"../node_modules/lodash/_baseEach.js":[function(require,module,exports) {
var baseForOwn = require('./_baseForOwn'),
    createBaseEach = require('./_createBaseEach');

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./_baseForOwn":"../node_modules/lodash/_baseForOwn.js","./_createBaseEach":"../node_modules/lodash/_createBaseEach.js"}],"../node_modules/lodash/_baseAggregator.js":[function(require,module,exports) {
var baseEach = require('./_baseEach');

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;

},{"./_baseEach":"../node_modules/lodash/_baseEach.js"}],"../node_modules/lodash/_listCacheClear.js":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],"../node_modules/lodash/eq.js":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],"../node_modules/lodash/_assocIndexOf.js":[function(require,module,exports) {
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":"../node_modules/lodash/eq.js"}],"../node_modules/lodash/_listCacheDelete.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheGet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheHas.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_listCacheSet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":"../node_modules/lodash/_assocIndexOf.js"}],"../node_modules/lodash/_ListCache.js":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":"../node_modules/lodash/_listCacheClear.js","./_listCacheDelete":"../node_modules/lodash/_listCacheDelete.js","./_listCacheGet":"../node_modules/lodash/_listCacheGet.js","./_listCacheHas":"../node_modules/lodash/_listCacheHas.js","./_listCacheSet":"../node_modules/lodash/_listCacheSet.js"}],"../node_modules/lodash/_stackClear.js":[function(require,module,exports) {
var ListCache = require('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js"}],"../node_modules/lodash/_stackDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],"../node_modules/lodash/_stackGet.js":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],"../node_modules/lodash/_stackHas.js":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],"../node_modules/lodash/_Map.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_nativeCreate.js":[function(require,module,exports) {
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":"../node_modules/lodash/_getNative.js"}],"../node_modules/lodash/_hashClear.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],"../node_modules/lodash/_hashGet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashHas.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_hashSet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":"../node_modules/lodash/_nativeCreate.js"}],"../node_modules/lodash/_Hash.js":[function(require,module,exports) {
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":"../node_modules/lodash/_hashClear.js","./_hashDelete":"../node_modules/lodash/_hashDelete.js","./_hashGet":"../node_modules/lodash/_hashGet.js","./_hashHas":"../node_modules/lodash/_hashHas.js","./_hashSet":"../node_modules/lodash/_hashSet.js"}],"../node_modules/lodash/_mapCacheClear.js":[function(require,module,exports) {
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":"../node_modules/lodash/_Hash.js","./_ListCache":"../node_modules/lodash/_ListCache.js","./_Map":"../node_modules/lodash/_Map.js"}],"../node_modules/lodash/_isKeyable.js":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],"../node_modules/lodash/_getMapData.js":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":"../node_modules/lodash/_isKeyable.js"}],"../node_modules/lodash/_mapCacheDelete.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheGet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheHas.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_mapCacheSet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":"../node_modules/lodash/_getMapData.js"}],"../node_modules/lodash/_MapCache.js":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":"../node_modules/lodash/_mapCacheClear.js","./_mapCacheDelete":"../node_modules/lodash/_mapCacheDelete.js","./_mapCacheGet":"../node_modules/lodash/_mapCacheGet.js","./_mapCacheHas":"../node_modules/lodash/_mapCacheHas.js","./_mapCacheSet":"../node_modules/lodash/_mapCacheSet.js"}],"../node_modules/lodash/_stackSet.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js","./_Map":"../node_modules/lodash/_Map.js","./_MapCache":"../node_modules/lodash/_MapCache.js"}],"../node_modules/lodash/_Stack.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":"../node_modules/lodash/_ListCache.js","./_stackClear":"../node_modules/lodash/_stackClear.js","./_stackDelete":"../node_modules/lodash/_stackDelete.js","./_stackGet":"../node_modules/lodash/_stackGet.js","./_stackHas":"../node_modules/lodash/_stackHas.js","./_stackSet":"../node_modules/lodash/_stackSet.js"}],"../node_modules/lodash/_setCacheAdd.js":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],"../node_modules/lodash/_setCacheHas.js":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],"../node_modules/lodash/_SetCache.js":[function(require,module,exports) {
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":"../node_modules/lodash/_MapCache.js","./_setCacheAdd":"../node_modules/lodash/_setCacheAdd.js","./_setCacheHas":"../node_modules/lodash/_setCacheHas.js"}],"../node_modules/lodash/_arraySome.js":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],"../node_modules/lodash/_cacheHas.js":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],"../node_modules/lodash/_equalArrays.js":[function(require,module,exports) {
var SetCache = require('./_SetCache'),
    arraySome = require('./_arraySome'),
    cacheHas = require('./_cacheHas');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

},{"./_SetCache":"../node_modules/lodash/_SetCache.js","./_arraySome":"../node_modules/lodash/_arraySome.js","./_cacheHas":"../node_modules/lodash/_cacheHas.js"}],"../node_modules/lodash/_Uint8Array.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_mapToArray.js":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],"../node_modules/lodash/_setToArray.js":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],"../node_modules/lodash/_equalByTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    eq = require('./eq'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_Uint8Array":"../node_modules/lodash/_Uint8Array.js","./eq":"../node_modules/lodash/eq.js","./_equalArrays":"../node_modules/lodash/_equalArrays.js","./_mapToArray":"../node_modules/lodash/_mapToArray.js","./_setToArray":"../node_modules/lodash/_setToArray.js"}],"../node_modules/lodash/_arrayPush.js":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],"../node_modules/lodash/_baseGetAllKeys.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":"../node_modules/lodash/_arrayPush.js","./isArray":"../node_modules/lodash/isArray.js"}],"../node_modules/lodash/_arrayFilter.js":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],"../node_modules/lodash/stubArray.js":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],"../node_modules/lodash/_getSymbols.js":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

},{"./_arrayFilter":"../node_modules/lodash/_arrayFilter.js","./stubArray":"../node_modules/lodash/stubArray.js"}],"../node_modules/lodash/_getAllKeys.js":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":"../node_modules/lodash/_baseGetAllKeys.js","./_getSymbols":"../node_modules/lodash/_getSymbols.js","./keys":"../node_modules/lodash/keys.js"}],"../node_modules/lodash/_equalObjects.js":[function(require,module,exports) {
var getAllKeys = require('./_getAllKeys');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

},{"./_getAllKeys":"../node_modules/lodash/_getAllKeys.js"}],"../node_modules/lodash/_DataView.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Promise.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Set.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_WeakMap.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":"../node_modules/lodash/_getNative.js","./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_getTag.js":[function(require,module,exports) {
var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_DataView":"../node_modules/lodash/_DataView.js","./_Map":"../node_modules/lodash/_Map.js","./_Promise":"../node_modules/lodash/_Promise.js","./_Set":"../node_modules/lodash/_Set.js","./_WeakMap":"../node_modules/lodash/_WeakMap.js","./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./_toSource":"../node_modules/lodash/_toSource.js"}],"../node_modules/lodash/_baseIsEqualDeep.js":[function(require,module,exports) {
var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isTypedArray = require('./isTypedArray');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":"../node_modules/lodash/_Stack.js","./_equalArrays":"../node_modules/lodash/_equalArrays.js","./_equalByTag":"../node_modules/lodash/_equalByTag.js","./_equalObjects":"../node_modules/lodash/_equalObjects.js","./_getTag":"../node_modules/lodash/_getTag.js","./isArray":"../node_modules/lodash/isArray.js","./isBuffer":"../node_modules/lodash/isBuffer.js","./isTypedArray":"../node_modules/lodash/isTypedArray.js"}],"../node_modules/lodash/_baseIsEqual.js":[function(require,module,exports) {
var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"../node_modules/lodash/_baseIsEqualDeep.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/_baseIsMatch.js":[function(require,module,exports) {
var Stack = require('./_Stack'),
    baseIsEqual = require('./_baseIsEqual');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./_Stack":"../node_modules/lodash/_Stack.js","./_baseIsEqual":"../node_modules/lodash/_baseIsEqual.js"}],"../node_modules/lodash/_isStrictComparable.js":[function(require,module,exports) {
var isObject = require('./isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"./isObject":"../node_modules/lodash/isObject.js"}],"../node_modules/lodash/_getMatchData.js":[function(require,module,exports) {
var isStrictComparable = require('./_isStrictComparable'),
    keys = require('./keys');

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;

},{"./_isStrictComparable":"../node_modules/lodash/_isStrictComparable.js","./keys":"../node_modules/lodash/keys.js"}],"../node_modules/lodash/_matchesStrictComparable.js":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;

},{}],"../node_modules/lodash/_baseMatches.js":[function(require,module,exports) {
var baseIsMatch = require('./_baseIsMatch'),
    getMatchData = require('./_getMatchData'),
    matchesStrictComparable = require('./_matchesStrictComparable');

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

},{"./_baseIsMatch":"../node_modules/lodash/_baseIsMatch.js","./_getMatchData":"../node_modules/lodash/_getMatchData.js","./_matchesStrictComparable":"../node_modules/lodash/_matchesStrictComparable.js"}],"../node_modules/lodash/isSymbol.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/_isKey.js":[function(require,module,exports) {
var isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

},{"./isArray":"../node_modules/lodash/isArray.js","./isSymbol":"../node_modules/lodash/isSymbol.js"}],"../node_modules/lodash/memoize.js":[function(require,module,exports) {
var MapCache = require('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"./_MapCache":"../node_modules/lodash/_MapCache.js"}],"../node_modules/lodash/_memoizeCapped.js":[function(require,module,exports) {
var memoize = require('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

},{"./memoize":"../node_modules/lodash/memoize.js"}],"../node_modules/lodash/_stringToPath.js":[function(require,module,exports) {
var memoizeCapped = require('./_memoizeCapped');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

},{"./_memoizeCapped":"../node_modules/lodash/_memoizeCapped.js"}],"../node_modules/lodash/_arrayMap.js":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],"../node_modules/lodash/_baseToString.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_arrayMap":"../node_modules/lodash/_arrayMap.js","./isArray":"../node_modules/lodash/isArray.js","./isSymbol":"../node_modules/lodash/isSymbol.js"}],"../node_modules/lodash/toString.js":[function(require,module,exports) {
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":"../node_modules/lodash/_baseToString.js"}],"../node_modules/lodash/_castPath.js":[function(require,module,exports) {
var isArray = require('./isArray'),
    isKey = require('./_isKey'),
    stringToPath = require('./_stringToPath'),
    toString = require('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

},{"./isArray":"../node_modules/lodash/isArray.js","./_isKey":"../node_modules/lodash/_isKey.js","./_stringToPath":"../node_modules/lodash/_stringToPath.js","./toString":"../node_modules/lodash/toString.js"}],"../node_modules/lodash/_toKey.js":[function(require,module,exports) {
var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

},{"./isSymbol":"../node_modules/lodash/isSymbol.js"}],"../node_modules/lodash/_baseGet.js":[function(require,module,exports) {
var castPath = require('./_castPath'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./_castPath":"../node_modules/lodash/_castPath.js","./_toKey":"../node_modules/lodash/_toKey.js"}],"../node_modules/lodash/get.js":[function(require,module,exports) {
var baseGet = require('./_baseGet');

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

},{"./_baseGet":"../node_modules/lodash/_baseGet.js"}],"../node_modules/lodash/_baseHasIn.js":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

},{}],"../node_modules/lodash/_hasPath.js":[function(require,module,exports) {
var castPath = require('./_castPath'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isIndex = require('./_isIndex'),
    isLength = require('./isLength'),
    toKey = require('./_toKey');

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;

},{"./_castPath":"../node_modules/lodash/_castPath.js","./isArguments":"../node_modules/lodash/isArguments.js","./isArray":"../node_modules/lodash/isArray.js","./_isIndex":"../node_modules/lodash/_isIndex.js","./isLength":"../node_modules/lodash/isLength.js","./_toKey":"../node_modules/lodash/_toKey.js"}],"../node_modules/lodash/hasIn.js":[function(require,module,exports) {
var baseHasIn = require('./_baseHasIn'),
    hasPath = require('./_hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

},{"./_baseHasIn":"../node_modules/lodash/_baseHasIn.js","./_hasPath":"../node_modules/lodash/_hasPath.js"}],"../node_modules/lodash/_baseMatchesProperty.js":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual'),
    get = require('./get'),
    hasIn = require('./hasIn'),
    isKey = require('./_isKey'),
    isStrictComparable = require('./_isStrictComparable'),
    matchesStrictComparable = require('./_matchesStrictComparable'),
    toKey = require('./_toKey');

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"../node_modules/lodash/_baseIsEqual.js","./get":"../node_modules/lodash/get.js","./hasIn":"../node_modules/lodash/hasIn.js","./_isKey":"../node_modules/lodash/_isKey.js","./_isStrictComparable":"../node_modules/lodash/_isStrictComparable.js","./_matchesStrictComparable":"../node_modules/lodash/_matchesStrictComparable.js","./_toKey":"../node_modules/lodash/_toKey.js"}],"../node_modules/lodash/identity.js":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],"../node_modules/lodash/_baseProperty.js":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],"../node_modules/lodash/_basePropertyDeep.js":[function(require,module,exports) {
var baseGet = require('./_baseGet');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

},{"./_baseGet":"../node_modules/lodash/_baseGet.js"}],"../node_modules/lodash/property.js":[function(require,module,exports) {
var baseProperty = require('./_baseProperty'),
    basePropertyDeep = require('./_basePropertyDeep'),
    isKey = require('./_isKey'),
    toKey = require('./_toKey');

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

},{"./_baseProperty":"../node_modules/lodash/_baseProperty.js","./_basePropertyDeep":"../node_modules/lodash/_basePropertyDeep.js","./_isKey":"../node_modules/lodash/_isKey.js","./_toKey":"../node_modules/lodash/_toKey.js"}],"../node_modules/lodash/_baseIteratee.js":[function(require,module,exports) {
var baseMatches = require('./_baseMatches'),
    baseMatchesProperty = require('./_baseMatchesProperty'),
    identity = require('./identity'),
    isArray = require('./isArray'),
    property = require('./property');

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

},{"./_baseMatches":"../node_modules/lodash/_baseMatches.js","./_baseMatchesProperty":"../node_modules/lodash/_baseMatchesProperty.js","./identity":"../node_modules/lodash/identity.js","./isArray":"../node_modules/lodash/isArray.js","./property":"../node_modules/lodash/property.js"}],"../node_modules/lodash/_createAggregator.js":[function(require,module,exports) {
var arrayAggregator = require('./_arrayAggregator'),
    baseAggregator = require('./_baseAggregator'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;

},{"./_arrayAggregator":"../node_modules/lodash/_arrayAggregator.js","./_baseAggregator":"../node_modules/lodash/_baseAggregator.js","./_baseIteratee":"../node_modules/lodash/_baseIteratee.js","./isArray":"../node_modules/lodash/isArray.js"}],"../node_modules/lodash/groupBy.js":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'),
    createAggregator = require('./_createAggregator');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;

},{"./_baseAssignValue":"../node_modules/lodash/_baseAssignValue.js","./_createAggregator":"../node_modules/lodash/_createAggregator.js"}],"util.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorFor = exports.color = void 0;
exports.color = {
  hue: function hue(h) {
    return "hsl(" + h + ", 60%, 50%)";
  },
  gray: function gray(l) {
    return "hsl(0, 0%, " + l + "%)";
  },
  random: function random() {
    return this.hue(Math.random() * 360);
  }
};
exports.colorFor = {
  "OK": '#00a92a',
  "WRONG_ANSWER": '#ed4420',
  "TIME_LIMIT_EXCEEDED": '#a3bcbd',
  "MEMORY_LIMIT_EXCEEDED": '#0462c7',
  "IDLENESS_LIMIT_EXCEEDED": '#bf00a6',
  "RUNTIME_ERROR": '#ffa71c',
  "COMPILATION_ERROR": '#42586d'
};
},{}],"charts/verdicts.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var groupBy_1 = __importDefault(require("lodash/groupBy"));

var util_1 = require("../util");

function verdicts(status) {
  var groups = Object.entries(groupBy_1.default(status, function (sub) {
    return sub.verdict;
  }));
  var labels = groups.map(function (_a) {
    var label = _a[0],
        _ = _a[1];
    return label;
  });
  var data = groups.map(function (_a) {
    var _ = _a[0],
        subs = _a[1];
    return subs.length;
  });
  var backgroundColor = labels.map(function (l) {
    return util_1.colorFor[l] || util_1.color.random();
  });
  return {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: "Contest Verdicts",
        data: data,
        backgroundColor: backgroundColor,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  };
}

exports.default = verdicts;
},{"lodash/groupBy":"../node_modules/lodash/groupBy.js","../util":"util.ts"}],"charts/verdicts_per_problem.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var groupBy_1 = __importDefault(require("lodash/groupBy"));

var util_1 = require("../util"); // Pretty unreadable


function verdicts_per_problem(status) {
  var priority = {
    "OK": 1,
    "WRONG_ANSWER": 2,
    "TIME_LIMIT_EXCEEDED": 3,
    "RUNTIME_ERROR": 4,
    "MEMORY_LIMIT_EXCEEDED": 5
  };
  var verdict_groups = Object.entries(groupBy_1.default(status, function (sub) {
    return sub.verdict;
  }));
  verdict_groups.sort(function (_a, _b) {
    var a = _a[0],
        _ = _a[1];
    var b = _b[0],
        __ = _b[1];
    return (priority[a] || 100) - (priority[b] || 100);
  });
  var problem_index_to_name = new Map(status.map(function (sub) {
    return [sub.problem.index, sub.problem.name];
  }));
  var problem_entries = Array.from(problem_index_to_name.entries());
  problem_entries.sort();
  var problem_names = problem_entries.map(function (_a) {
    var index = _a[0],
        name = _a[1];
    return index + " - " + name;
  });
  var index_to_index = new Map(problem_entries.map(function (_a, j) {
    var i = _a[0],
        _ = _a[1];
    return [i, j];
  })); // this is so confusing

  var datasets = verdict_groups.map(function (_a) {
    var verdict = _a[0],
        subs = _a[1];
    var backgroundColor = util_1.colorFor[verdict] || util_1.color.random();
    var label = verdict;
    var data = new Array(index_to_index.size).fill(0);

    for (var _i = 0, subs_1 = subs; _i < subs_1.length; _i++) {
      var sub = subs_1[_i];
      data[index_to_index.get(sub.problem.index)]++;
    }

    return {
      label: label,
      data: data,
      backgroundColor: backgroundColor
    };
  });
  return {
    type: 'bar',
    data: {
      labels: problem_names,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      }
    }
  };
}

exports.default = verdicts_per_problem;
},{"lodash/groupBy":"../node_modules/lodash/groupBy.js","../util":"util.ts"}],"charts/submissions_time.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var groupBy_1 = __importDefault(require("lodash/groupBy"));

function submissions_time(status) {
  var maxTime = status.reduce(function (acc, sub) {
    return Math.max(acc, sub.relativeTimeSeconds);
  }, 0);
  var step = 15 * 60; // 10 minute intervals

  var times = new Array(Math.ceil(maxTime / step)).fill(0).map(function (_, i) {
    return i * step / 60;
  });
  var groups = Object.entries(groupBy_1.default(status, function (sub) {
    return sub.problem.index;
  }));
  groups.sort();
  var datasets = groups.map(function (_a, index) {
    var _ = _a[0],
        subs = _a[1];
    var label = subs[0].problem.index + " - " + subs[0].problem.name;
    var backgroundColor = "hsl(" + index * 23 + "deg 60% 55% / 90%)";
    var data = new Array(times.length).fill(0);

    for (var _i = 0, subs_1 = subs; _i < subs_1.length; _i++) {
      var sub = subs_1[_i];
      var bucket = Math.floor(sub.relativeTimeSeconds / step);
      data[bucket]++;
    }

    return {
      label: label,
      backgroundColor: backgroundColor,
      data: data,
      fill: true
    };
  });
  return {
    type: 'bar',
    data: {
      labels: times,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Time (minutes)'
          },
          stacked: true
        },
        y: {
          title: {
            display: true,
            text: "Submissions"
          },
          stacked: true
        }
      }
    }
  };
}

exports.default = submissions_time;
},{"lodash/groupBy":"../node_modules/lodash/groupBy.js"}],"index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var api = __importStar(require("./api"));

var auto_1 = __importDefault(require("chart.js/auto"));

var verdicts_1 = __importDefault(require("./charts/verdicts"));

var verdicts_per_problem_1 = __importDefault(require("./charts/verdicts_per_problem"));

var submissions_time_1 = __importDefault(require("./charts/submissions_time"));

var is_submission_from_contestant = function is_submission_from_contestant(s) {
  return s.author.participantType == "CONTESTANT";
};

function make_canvas(attrs, parent) {
  var canvas = document.createElement("canvas");

  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) canvas.setAttribute(key, attrs[key]);
  }

  if (parent !== undefined) parent.appendChild(canvas);
  return canvas;
}

var $ = {
  id: function id(_id) {
    return document.getElementById(_id);
  },
  q: function q(query) {
    return document.querySelector(query);
  },
  qa: function qa(query) {
    return document.querySelectorAll(query);
  }
};

function main(contestID) {
  return __awaiter(this, void 0, void 0, function () {
    var creds, status, verdicts_canvas, verdicts_per_problem_canvas, submissions_time_canvas, acs_time_canvas;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          creds = {
            key: localStorage.getItem('cf_key'),
            secret: localStorage.getItem('cf_secret')
          };
          return [4
          /*yield*/
          , api.contest_status(creds, contestID)];

        case 1:
          status = _a.sent();
          status = status.filter(is_submission_from_contestant);
          verdicts_canvas = make_canvas({
            'id': 'verdicts-canvas',
            'style': 'height: 360px;'
          }, $.q('#verdicts'));
          new auto_1.default(verdicts_canvas, verdicts_1.default(status));
          verdicts_per_problem_canvas = make_canvas({
            'id': 'verdicts-per-problem-canvas',
            'style': 'height: 600px;'
          }, $.q('#verdicts-per-problem'));
          new auto_1.default(verdicts_per_problem_canvas, verdicts_per_problem_1.default(status));
          submissions_time_canvas = make_canvas({
            'id': 'submissions-time-canvas',
            'style': 'height: 600px;'
          }, $.q('#submissions-time'));
          new auto_1.default(submissions_time_canvas, submissions_time_1.default(status));
          acs_time_canvas = make_canvas({
            'id': 'acs-time-canvas',
            'style': 'height: 600px;'
          }, $.q('#acs-time'));
          new auto_1.default(acs_time_canvas, submissions_time_1.default(status.filter(function (sub) {
            return sub.verdict == "OK";
          })));
          return [2
          /*return*/
          ];
      }
    });
  });
}

(function bind_events() {
  $.id('save-btn').addEventListener('click', function () {
    var key = $.id('key-input').value;
    var secret = $.id('secret-input').value;
    localStorage.setItem('cf_key', key);
    localStorage.setItem('cf_secret', secret);
    window.location.reload();
  });
  $.id('contest-id').value = localStorage.getItem('last_contest_id') || "";
  $.id('vis-btn').addEventListener('click', function () {
    var contestID = $.id('contest-id').value;
    main(contestID);
    Array.from($.qa('.form')).forEach(function (el) {
      return el.remove();
    });
    localStorage.setItem('last_contest_id', contestID);
    $.q('.dashboard').classList.remove('hidden');
  });
})();
},{"./api":"api.ts","chart.js/auto":"../node_modules/chart.js/auto/auto.esm.js","./charts/verdicts":"charts/verdicts.ts","./charts/verdicts_per_problem":"charts/verdicts_per_problem.ts","./charts/submissions_time":"charts/submissions_time.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52167" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map