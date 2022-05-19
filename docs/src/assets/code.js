var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r$1 = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w = Symbol.for;
  n$1 = w("react.element");
  p$1 = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q$1 = w("react.provider");
  r$1 = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = typeof Symbol === "function" && Symbol.iterator;
function y$1(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h2 = null;
  if (b != null)
    for (e in b.ref !== void 0 && (h2 = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d.children = c;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a && a.defaultProps)
    for (e in g2 = a.defaultProps, g2)
      d[e] === void 0 && (d[e] = g2[e]);
  return { $$typeof: n$1, type: a, key: k, ref: h2, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$1:
          case p$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d = d(h2), a = e === "" ? "." + N$1(h2, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h2 && h2.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h2 = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k = a[g2];
      var f2 = e + N$1(k, g2);
      h2 += O$1(k, b, c, f2, d);
    }
  else if (f2 = y$1(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k = a.next()).done; )
      k = k.value, f2 = e + N$1(k, g2++), h2 += O$1(k, b, c, f2, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h2;
}
function P$1(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h2 = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h2 = G$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b)
      H$1.call(b, f2) && !I$1.hasOwnProperty(f2) && (e[f2] = b[f2] === void 0 && g2 !== void 0 ? g2[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e.children = c;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: r$1, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f2 = function(a) {
      t2 !== null ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); b !== null; ) {
      if (b.callback === null)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b = J2(M2);
        b !== null && g2(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$1 = objectAssign, r = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f2, g2) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f2 = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f2 || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2])
                return "\n" + e[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m$1({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m$1({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m$1({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f2, g2, h2, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f2, g2, h2, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f2, g2, h2, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return ac(e), a;
        if (f2 === d)
          return ac(e), b;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c) {
          g2 = true;
          c = e;
          d = f2;
          break;
        }
        if (h2 === d) {
          g2 = true;
          d = e;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g2 = true;
            c = f2;
            d = e;
            break;
          }
          if (h2 === d) {
            g2 = true;
            d = f2;
            c = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b, c, d, e, f2), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (f2 !== 0)
    d = f2, e = F = 15;
  else if (f2 = c & 134217727, f2 !== 0) {
    var k = f2 & ~g2;
    k !== 0 ? (d = Rc(k), e = F) : (h2 &= f2, h2 !== 0 && (d = Rc(h2), e = F));
  } else
    f2 = c & ~g2, f2 !== 0 ? (d = Rc(f2), e = F) : h2 !== 0 && (d = Rc(h2), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g2) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f2 = yc(a, b, c, d);
      if (f2 === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f2 = Zb(e);
    if (f2 === null)
      e = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e = $b(f2);
        if (e !== null)
          return e;
        e = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g2 = c - a;
  for (d = 1; d <= g2 && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g2) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h2 = d[g2], k = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h2 = d[g2];
          k = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c;
  a === "selectionchange" && c.nodeType !== 9 && (f2 = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f2 = d;
  }
  var g2 = $e(f2), h2 = a + "__" + (b ? "capture" : "bubble");
  g2.has(h2) || (b && (e |= 4), af(f2, a, e, b), g2.add(h2));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f2 = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g2 = d.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d.return; g2 !== null; ) {
              var k = g2.tag;
              if (k === 3 || k === 4) {
                if (k = g2.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k = g2.tag;
            if (k === 5 || k === 6) {
              d = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f2, e2 = xb(c), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (h3 !== void 0) {
        var k2 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w2 = (b & 4) !== 0, z2 = !w2 && a === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d2, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k2(h3, x2, null, c, e2), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h3 && (b & 16) === 0 && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k2 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k2) {
            if (x2 = c.relatedTarget || c.toElement, k2 = d2, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k2 = null, x2 = d2;
          if (k2 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k2 == null ? h3 : ue(k2);
            q2 = x2 == null ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k2, c, e2);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w2 = new w2(u2, t2 + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k2 && x2)
              b: {
                w2 = k2;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k2 !== null && hf(g3, h3, k2, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k2 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k2 = h3.nodeName) && k2.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g3, J2, c, e2);
          break a;
        }
        K2 && K2(a, h3, d2);
        a === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g3, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Ob(a, c), f2 != null && d.unshift(ef(a, f2, e)), f2 = Ob(a, b), f2 != null && d.push(ef(a, f2, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f2 = b._reactName, g2 = []; c !== null && c !== d; ) {
    var h2 = c, k = h2.alternate, l2 = h2.stateNode;
    if (k !== null && k === d)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k = Ob(c, f2), k != null && g2.unshift(ef(c, k, h2))) : e || (k = Ob(c, f2), k != null && g2.push(ef(c, k, h2))));
    c = c.return;
  }
  g2.length !== 0 && a.push({ event: b, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = /* @__PURE__ */ new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m$1({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m$1({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c = c.next;
      } while (c !== null);
      f2 === null ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (h2 !== null) {
    e.shared.pending = null;
    var k = h2, l2 = k.next;
    k.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k);
    }
  }
  if (f2 !== null) {
    A2 = e.baseState;
    g2 = 0;
    n2 = l2 = k = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h2 = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h2 = e.effects, h2 === null ? e.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e.lastBaseUpdate = h2, e.shared.pending = null;
    } while (1);
    n2 === null && (k = A2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m$1({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f2) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f2 = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f2);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = vg(f2) : (f2 = Ff(b) ? Df : M.current, e.context = Ef(a, f2));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b, f2, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g2(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f3) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h2(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g3, h3, k2) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h3[z2], k2);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e2, h3[z2], k2), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e2, z2, h3[z2], k2), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w2(e2, g3, h3, k2) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k2);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w3.alternate === null && b(e2, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e2, n3.value, k2), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e2, z2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f3, h3) {
    var k2 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k2 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f3.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props);
                      d2.ref = Qg(a2, k2, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f3.type === ua ? (d2 = Xg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k2 = f3.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f3, a2.mode, h3), d2.return = a2, a2 = d2), g2(a2);
    if (Pg(f3))
      return x2(a2, d2, f3, h3);
    if (La(f3))
      return w2(a2, d2, f3, h3);
    l3 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f2) {
  xh = f2;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f2 = c.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h2 = g2 = f2 = null, k = e;
    do {
      var l2 = k.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l2,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h2 === null ? f2 = d : h2.next = g2;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f2;
    b.baseQueue = h2;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b.memoizedState) || (ug = true);
    b.memoizedState = f2;
    b.baseQueue === null && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f2 = b._getVersion, g2 = f2(b._source), h2 = vh.current, k = h2.useState(function() {
    return Mh(e, b, c);
  }), l2 = k[1], n2 = k[0];
  k = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h2.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f2(b._source);
    if (!He(g2, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h3 = a2; 0 < h3; ) {
        var k2 = 31 - Vc(h3), v2 = 1 << k2;
        d2[k2] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c, b, d]);
  h2.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w2);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d !== null && Bh(d, g2.deps)) {
      Rh(b, c, f2, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f2, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f2 = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g2 = b.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b.lastRenderedState, k = g2(h2, c);
        f2.eagerReducer = g2;
        f2.eagerState = k;
        if (He(k, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f2) {
  if (a === null) {
    var g2 = c.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g2, ki(a, b, g2, d, e, f2);
    a = Vg(c.type, null, d, b, b.mode, f2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g2 = a.child;
  if ((e & f2) === 0 && (e = g2.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f2);
  b.flags |= 1;
  a = Tg(g2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f2) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f2 & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f2);
  return li(a, b, c, d, f2);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f2 !== null ? f2.baseLanes : c);
    else
      return a = f2 !== null ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f2 !== null ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f2 = Ff(c) ? Df : M.current;
  f2 = Ef(b, f2);
  tg(b, e);
  c = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f2 = true;
    Jf(b);
  } else
    f2 = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g2 = b.stateNode, h2 = b.memoizedProps;
    g2.props = h2;
    var k = g2.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d || k !== l2) && Ng(b, g2, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    k = b.memoizedState;
    h2 !== d || p2 !== k || N.current || wg ? (typeof n2 === "function" && (Gg(b, c, n2, d), k = b.memoizedState), (h2 = wg || Lg(b, c, h2, d, p2, k, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g2.props = d, g2.state = k, g2.context = l2, d = h2) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g2 = b.stateNode;
    yg(a, b);
    h2 = b.memoizedProps;
    l2 = b.type === b.elementType ? h2 : lg(b.type, h2);
    g2.props = l2;
    A2 = b.pendingProps;
    p2 = g2.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C2 = c.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k) && Ng(b, g2, d, k);
    wg = false;
    p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    var x2 = b.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, x2, k), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, x2, k)), typeof g2.componentDidUpdate === "function" && (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g2.props = d, g2.state = x2, g2.context = k, d = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f2, e);
}
function qi(a, b, c, d, e, f2) {
  oi(a, b);
  var g2 = (b.flags & 64) !== 0;
  if (!d && !g2)
    return e && Kf(b, c, false), hi(a, b, f2);
  d = b.stateNode;
  ei.current = b;
  var h2 = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g2 ? (b.child = Yg(b, a.child, null, f2), b.child = Yg(b, null, h2, f2)) : fi(a, b, h2, f2);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f2 = false, g2;
  (g2 = (b.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g2 ? (f2 = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f2)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f2)
    return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f2 = b.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c };
  (f2 & 2) === 0 && b.child !== g2 ? (c = b.child, c.childLanes = 0, c.pendingProps = h2, g2 = c.lastEffect, g2 !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g2, g2.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g2, h2);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f2, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f2 } : (g2.isBackwards = b, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d, g2.tail = c, g2.tailMode = e, g2.lastEffect = f2);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f2, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f2, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f2 = [];
        break;
      case "select":
        e = m$1({}, e, { value: void 0 });
        d = m$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g2;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h2 = e[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h2 = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h2 && (k != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
            for (g2 in k)
              k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
          } else
            c || (f2 || (f2 = []), f2.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, k != null && h2 !== k && (f2 = f2 || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f2 = f2 || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && G("scroll", a), f2 || h2 === k || (f2 = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f2 = f2 || []).push(l2, k));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[wf] = b;
          d[xf] = f2;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f2);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f2), G("invalid", d);
          }
          vb(c, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e = f2[g2], g2 === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g2) && e != null && g2 === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), c === "select" && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g2 = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m$1({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h2 = e;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k = h2[f2];
              f2 === "style" ? tb(a, k) : f2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f2 === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k != null && f2 === "onScroll" && G("scroll", a) : k != null && qa(a, f2, k, g2));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f2 = d.value;
              f2 != null ? fb(a, !!d.multiple, f2, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f2 = (b.flags & 64) !== 0;
      g2 = d.rendering;
      if (g2 === null)
        if (f2)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b.flags |= 64;
                Fi(d, false);
                f2 = g2.updateQueue;
                f2 !== null && (b.updateQueue = f2, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f2 = c, a = d, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b.flags |= 64, f2 = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g2.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = d.last, c !== null ? c.sibling = g2 : b.child = g2, d.last = g2);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f2 ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f2) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f2) {
                Wi(d, f2);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b, f2);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f2; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g2 = a, h2 = c, k = h2; ; )
          if (bj(g2, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h2)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h2)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f2 ? (g2 = e, h2 = c.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f2 = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f2 = b.updateQueue;
        b.updateQueue = null;
        if (f2 !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f2.length; e += 2) {
            var g2 = f2[e], h2 = f2[e + 1];
            g2 === "style" ? tb(c, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c, h2) : g2 === "children" ? pb(c, h2) : qa(c, g2, h2, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f2 = d.value, f2 != null ? fb(c, !!d.multiple, f2, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l2 = b;
        Rc(k);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k);
    g2 &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g2 = 31 - Vc(c);
          f2 = 1 << g2;
          g2 = d[g2];
          g2 > e && (e = g2);
          c &= ~f2;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c.return, h2 = c, k = b;
        b = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k = void 0;
              h2 = b;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k = /* @__PURE__ */ new Set(), q2.set(l2, k)) : (k = q2.get(l2), k === void 0 && (k = /* @__PURE__ */ new Set(), q2.set(l2, k)));
              if (!k.has(h2)) {
                k.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f2, b);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f2, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f2 = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k = 31 - Vc(f2), l2 = 1 << k;
    e[k] = 0;
    g2[k] = -1;
    h2[k] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f2 = c[d + 1], g2 = e.destroy;
    e.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f2 = c[d + 1];
    try {
      var h2 = e.create;
      e.destroy = h2();
    } catch (k) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k);
    }
  }
  for (h2 = a.current.firstEffect; h2 !== null; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f2) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f2 = true;
          Jf(b);
        } else
          f2 = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g2 = d.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b, d, g2, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f2, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b.type = e;
        f2 = b.tag = hk(e);
        a = lg(e, a);
        switch (f2) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f2 = lh = true;
        if (f2) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f2 = a[e], f2._workInProgressVersionPrimary = a[e + 1], th.push(f2);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e.children, nf(d, e) ? g2 = null : f2 !== null && nf(d, f2) && (b.flags |= 16), oi(a, b), fi(a, b, g2, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g2 = b.memoizedProps;
        f2 = e.value;
        var h2 = b.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h2 = b.child, h2 !== null && (h2.return = b); h2 !== null; ) {
              var k = h2.dependencies;
              if (k !== null) {
                g2 = h2.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c);
                    sg(h2.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f2 = b.pendingProps, d = f2.children, tg(b, c), e = vg(e, f2.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f2 = lg(e, b.pendingProps), f2 = lg(e.type, f2), ii(a, b, e, f2, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f2) {
  var g2 = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f2, b);
        case Ha:
          g2 = 8;
          e |= 16;
          break;
        case wa:
          g2 = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c, e, f2, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g2, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f2 = Hg(), g2 = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h2 = c;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h2);
          break a;
        }
      }
      c = h2;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f2, g2);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e === "function") {
      var h2 = e;
      e = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b, g2, a, e);
  } else {
    f2 = c._reactRootContainer = sk(c, d);
    g2 = f2._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g2);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g2, a, e);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l2 = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l2, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
function Diff() {
}
Diff.prototype = {
  diff: function diff2(oldString, newString) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var callback = options.callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    this.options = options;
    var self2 = this;
    function done(value) {
      if (callback) {
        setTimeout(function() {
          callback(void 0, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    }
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length, oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{
      newPos: -1,
      components: []
    }];
    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    }
    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = void 0;
        var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
        if (addPath) {
          bestPath[diagonalPath - 1] = void 0;
        }
        var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = void 0;
          continue;
        }
        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self2.pushComponent(basePath.components, void 0, true);
        } else {
          basePath = addPath;
          basePath.newPos++;
          self2.pushComponent(basePath.components, true, void 0);
        }
        _oldPos = self2.extractCommon(basePath, newString, oldString, diagonalPath);
        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self2, basePath.components, newString, oldString, self2.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;
        }
      }
      editLength++;
    }
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength) {
            return callback();
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
      components[components.length - 1] = {
        count: last.count + 1,
        added,
        removed
      };
    } else {
      components.push({
        count: 1,
        added,
        removed
      });
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }
    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }
    basePath.newPos = newPos;
    return oldPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split("");
  },
  join: function join(chars) {
    return chars.join("");
  }
};
function buildValues(diff3, components, newString, oldString, useLongestToken) {
  var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];
    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function(value2, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value2.length ? oldValue : value2;
        });
        component.value = diff3.join(value);
      } else {
        component.value = diff3.join(newString.slice(newPos, newPos + component.count));
      }
      newPos += component.count;
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff3.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count;
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }
  var lastComponent = components[componentLen - 1];
  if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff3.equals("", lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }
  return components;
}
function clonePath(path) {
  return {
    newPos: path.newPos,
    components: path.components.slice(0)
  };
}
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();
wordDiff.equals = function(left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }
  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};
wordDiff.tokenize = function(value) {
  var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/);
  for (var i = 0; i < tokens.length - 1; i++) {
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }
  return tokens;
};
var lineDiff = new Diff();
lineDiff.tokenize = function(value) {
  var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];
    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }
      retLines.push(line);
    }
  }
  return retLines;
};
function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}
var sentenceDiff = new Diff();
sentenceDiff.tokenize = function(value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var cssDiff = new Diff();
cssDiff.tokenize = function(value) {
  return value.split(/([{}:;,]|\s+)/);
};
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff();
jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;
jsonDiff.castInput = function(value) {
  var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v2) {
    return typeof v2 === "undefined" ? undefinedReplacement : v2;
  } : _this$options$stringi;
  return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
};
jsonDiff.equals = function(left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
};
function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];
  if (replacer) {
    obj = replacer(key, obj);
  }
  var i;
  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }
  var canonicalizedObj;
  if (objectPrototypeToString.call(obj) === "[object Array]") {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }
  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }
  if (_typeof(obj) === "object" && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [], _key;
    for (_key in obj) {
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }
    sortedKeys.sort();
    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}
var arrayDiff = new Diff();
arrayDiff.tokenize = function(value) {
  return value.slice();
};
arrayDiff.join = arrayDiff.removeEmpty = function(value) {
  return value;
};
function currentTime() {
  if (typeof window !== "undefined") {
    return performance.now();
  } else {
    return 0;
  }
}
function useSpringInstance(target, config) {
  var ref = React.useRef(null);
  if (ref.current == null) {
    ref.current = {
      config: getConfigWithDefaults(target, config),
      state: getInitialState(target, config)
    };
  }
  return ref.current;
}
function getConfigWithDefaults(target, _ref) {
  var stiffness = _ref.stiffness, damping = _ref.damping, mass = _ref.mass, decimals = _ref.decimals, teleport = _ref.teleport;
  return {
    X: target,
    k: stiffness !== null && stiffness !== void 0 ? stiffness : 170,
    c: damping !== null && damping !== void 0 ? damping : 26,
    m: mass !== null && mass !== void 0 ? mass : 1,
    teleport: teleport !== null && teleport !== void 0 ? teleport : false,
    decimals: decimals !== null && decimals !== void 0 ? decimals : 2
  };
}
function getInitialState(target, _ref2) {
  var from = _ref2.from, initialSpeed = _ref2.initialSpeed;
  return {
    x0: from !== null && from !== void 0 ? from : target,
    v0: initialSpeed !== null && initialSpeed !== void 0 ? initialSpeed : 0,
    t0: currentTime(),
    raf: null
  };
}
var sqrt = Math.sqrt, exp = Math.exp, sin = Math.sin, cos = Math.cos;
function spring(_ref) {
  var x0 = _ref.x0, v0 = _ref.v0, t0 = _ref.t0, t2 = _ref.t, k = _ref.k, c = _ref.c, m2 = _ref.m, X2 = _ref.X;
  var dx = x0 - X2;
  var dt = (t2 - t0) / 1e3;
  var radicand = c * c - 4 * k * m2;
  if (radicand > 0) {
    var rp = (-c + sqrt(radicand)) / (2 * m2);
    var rn = (-c - sqrt(radicand)) / (2 * m2);
    var a = (dx * rp - v0) / (rp - rn);
    var b = (v0 - dx * rn) / (rp - rn);
    return {
      x: X2 + a * exp(rn * dt) + b * exp(rp * dt),
      v: a * rn * exp(rn * dt) + b * rp * exp(rp * dt)
    };
  } else if (radicand < 0) {
    var r2 = -c / (2 * m2);
    var s = sqrt(-radicand) / (2 * m2);
    var _a2 = dx;
    var _b = (v0 - r2 * dx) / s;
    return {
      x: X2 + exp(r2 * dt) * (_a2 * cos(s * dt) + _b * sin(s * dt)),
      v: exp(r2 * dt) * ((_b * s + _a2 * r2) * cos(s * dt) - (_a2 * s - _b * r2) * sin(s * dt))
    };
  } else {
    var _r = -c / (2 * m2);
    var _a22 = dx;
    var _b2 = v0 - _r * dx;
    return {
      x: X2 + (_a22 + _b2 * dt) * exp(_r * dt),
      v: (_b2 + _a22 * _r + _b2 * _r * dt) * exp(_r * dt)
    };
  }
}
var nextFrameQueue = [];
var nextFrameId = null;
function queueAnimationFrame(fn) {
  var length = nextFrameQueue.push(fn);
  if (length === 1) {
    nextFrameId = requestAnimationFrame(runQueue);
  }
  return [nextFrameId, length - 1];
}
function unqueueAnimationFrame(_ref) {
  var frameId = _ref[0], index = _ref[1];
  if (frameId === nextFrameId) {
    delete nextFrameQueue[index];
  }
}
function runQueue() {
  var now = currentTime();
  var queue = nextFrameQueue;
  nextFrameQueue = [];
  reactDom.exports.unstable_batchedUpdates(function() {
    return queue.forEach(function(task) {
      return task && task(now);
    });
  });
}
var useLayoutEffect$4 = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useSpring(target, config) {
  if (config === void 0) {
    config = {};
  }
  var _React$useState = React.useState(), forceUpdate = _React$useState[1];
  var newConfig = getConfigWithDefaults(target, config);
  var _useSpringInstance = useSpringInstance(target, config), state = _useSpringInstance.state, oldConfig = _useSpringInstance.config;
  var t2 = currentTime();
  var x0 = state.x0, v0 = state.v0, t0 = state.t0;
  var k = oldConfig.k, c = oldConfig.c, m2 = oldConfig.m, X2 = oldConfig.X;
  var _ref = newConfig.teleport ? {
    x: X2,
    v: 0
  } : spring({
    x0,
    v0,
    t0,
    t: t2,
    k,
    c,
    m: m2,
    X: X2
  }), x2 = _ref.x, v2 = _ref.v;
  var moving = isMoving(x2, v2, t2, newConfig);
  useLayoutEffect$4(function() {
    Object.assign(oldConfig, newConfig);
  }, [newConfig.X, newConfig.k, newConfig.c, newConfig.m, newConfig.teleport]);
  useLayoutEffect$4(function() {
    state.x0 = x2;
    state.v0 = v2;
    state.t0 = t2;
  }, [x2, v2, t2]);
  useLayoutEffect$4(function() {
    var loop = function loop2(now) {
      var x02 = state.x0, v02 = state.v0, t02 = state.t0;
      var k2 = oldConfig.k, c2 = oldConfig.c, m3 = oldConfig.m, X3 = oldConfig.X, decimals = oldConfig.decimals;
      var _spring = spring({
        x0: x02,
        v0: v02,
        t0: t02,
        t: now,
        k: k2,
        c: c2,
        m: m3,
        X: X3
      }), nextX = _spring.x;
      if (roundTo(nextX, decimals) !== roundTo(x02, decimals)) {
        state.raf = null;
        forceUpdate(now);
      } else {
        state.raf = queueAnimationFrame(loop2);
      }
    };
    if (moving && state.raf == null) {
      state.raf = queueAnimationFrame(loop);
    } else if (!moving && state.raf != null) {
      unqueueAnimationFrame(state.raf);
      state.raf = null;
    }
  });
  useLayoutEffect$4(function() {
    return function() {
      if (state.raf != null) {
        unqueueAnimationFrame(state.raf);
      }
    };
  }, []);
  return [roundTo(x2, newConfig.decimals), moving];
}
function isMoving(x2, v2, t2, _ref2) {
  var decimals = _ref2.decimals, X2 = _ref2.X, k = _ref2.k, c = _ref2.c, m2 = _ref2.m;
  if (roundTo(x2, decimals) !== roundTo(X2, decimals)) {
    return true;
  }
  var nextT = t2 + 0.016;
  var _spring2 = spring({
    x0: x2,
    v0: v2,
    t0: t2,
    t: nextT,
    k,
    c,
    m: m2,
    X: X2
  }), nextX = _spring2.x;
  return roundTo(nextX, decimals) !== roundTo(X2, decimals);
}
function roundTo(x2, decimals) {
  var p2 = Math.pow(10, decimals);
  return Math.round(x2 * p2) / p2;
}
var templates = {};
Object.defineProperty(templates, "__esModule", { value: true });
function getMainFile(template) {
  if (template === "vue-cli") {
    return "src/main.js";
  }
  if (template === "angular-cli") {
    return "src/main.ts";
  }
  if (template === "create-react-app-typescript") {
    return "src/index.tsx";
  }
  if (template === "parcel") {
    return "index.html";
  }
  if (template === "gatsby") {
    return "src/pages/index.js";
  }
  if (template === "nuxt") {
    return "package.json";
  }
  if (template === "next") {
    return "package.json";
  }
  if (template === "apollo") {
    return "package.json";
  }
  if (template === "reason") {
    return "package.json";
  }
  if (template === "sapper") {
    return "package.json";
  }
  if (template === "nest") {
    return "src/main.ts";
  }
  if (template === "static") {
    return "index.html";
  }
  return "src/index.js";
}
templates.getMainFile = getMainFile;
var SANDBOX_CONFIG = "sandbox.config.json";
function getTemplate(packageJSONPackage, modules) {
  var sandboxConfig = modules[SANDBOX_CONFIG] || modules["/" + SANDBOX_CONFIG];
  if (sandboxConfig) {
    try {
      var config = JSON.parse(sandboxConfig.content);
      if (config.template) {
        return config.template;
      }
    } catch (e) {
    }
  }
  var _a2 = packageJSONPackage.dependencies, dependencies = _a2 === void 0 ? {} : _a2, _b = packageJSONPackage.devDependencies, devDependencies = _b === void 0 ? {} : _b;
  var totalDependencies = Object.keys(dependencies).concat(Object.keys(devDependencies));
  var nuxt = ["nuxt", "nuxt-edge"];
  if (totalDependencies.some(function(dep) {
    return nuxt.indexOf(dep) > -1;
  })) {
    return "nuxt";
  }
  if (totalDependencies.indexOf("next") > -1) {
    return "next";
  }
  var apollo = [
    "apollo-server",
    "apollo-server-express",
    "apollo-server-hapi",
    "apollo-server-koa",
    "apollo-server-lambda",
    "apollo-server-micro"
  ];
  if (totalDependencies.some(function(dep) {
    return apollo.indexOf(dep) > -1;
  })) {
    return "apollo";
  }
  if (totalDependencies.indexOf("ember-cli") > -1) {
    return "ember";
  }
  if (totalDependencies.indexOf("sapper") > -1) {
    return "sapper";
  }
  var moduleNames = Object.keys(modules);
  if (moduleNames.some(function(m2) {
    return m2.endsWith(".vue");
  })) {
    return "vue-cli";
  }
  if (moduleNames.some(function(m2) {
    return m2.endsWith(".re");
  })) {
    return "reason";
  }
  if (totalDependencies.indexOf("gatsby") > -1) {
    return "gatsby";
  }
  if (totalDependencies.indexOf("parcel-bundler") > -1) {
    return "parcel";
  }
  if (totalDependencies.indexOf("react-scripts") > -1) {
    return "create-react-app";
  }
  if (totalDependencies.indexOf("react-scripts-ts") > -1) {
    return "create-react-app-typescript";
  }
  if (totalDependencies.indexOf("@angular/core") > -1) {
    return "angular-cli";
  }
  if (totalDependencies.indexOf("preact-cli") > -1) {
    return "preact-cli";
  }
  if (totalDependencies.indexOf("svelte") > -1) {
    return "svelte";
  }
  if (totalDependencies.indexOf("vue") > -1) {
    return "vue-cli";
  }
  var dojo = ["@dojo/core", "@dojo/framework"];
  if (totalDependencies.some(function(dep) {
    return dojo.indexOf(dep) > -1;
  })) {
    return "@dojo/cli-create-app";
  }
  if (totalDependencies.indexOf("cx") > -1) {
    return "cxjs";
  }
  if (totalDependencies.indexOf("@nestjs/core") > -1 || totalDependencies.indexOf("@nestjs/common") > -1) {
    return "nest";
  }
  return void 0;
}
var getTemplate_1 = templates.getTemplate = getTemplate;
var lodash_isequal = { exports: {} };
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map2) {
    var index = -1, result = Array(map2.size);
    map2.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
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
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty2.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getMapData(map2, key) {
    var data = map2.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
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
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual2(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = isEqual2;
})(lodash_isequal, lodash_isequal.exports);
var isEqual = lodash_isequal.exports;
var generateId = () => Math.floor(Math.random() * 1e6 + Math.random() * 1e6);
var getConstructorName = (x2) => {
  try {
    return x2.constructor.name;
  } catch (e) {
    return "";
  }
};
var Protocol = class {
  constructor(type, handleMessage, target) {
    this.type = type;
    this.handleMessage = handleMessage;
    this.target = target;
    this.outgoingMessages = /* @__PURE__ */ new Set();
    this._messageListener = async (e) => {
      const { data } = e;
      if (data.$type !== this.getTypeId()) {
        return;
      }
      if (this.outgoingMessages.has(data.$id)) {
        return;
      }
      const result = await this.handleMessage(data.$data);
      const returnMessage = {
        $originId: this.internalId,
        $type: this.getTypeId(),
        $data: result,
        $id: data.$id
      };
      if (e.source) {
        e.source.postMessage(returnMessage, "*");
      } else {
        this._postMessage(returnMessage);
      }
    };
    this.createConnection();
    this.internalId = generateId();
    this.isWorker = getConstructorName(target) === "Worker";
  }
  getTypeId() {
    return `p-${this.type}`;
  }
  createConnection() {
    self.addEventListener("message", this._messageListener);
  }
  dispose() {
    self.removeEventListener("message", this._messageListener);
  }
  sendMessage(data) {
    return new Promise((resolve) => {
      const messageId = generateId();
      const message = {
        $originId: this.internalId,
        $type: this.getTypeId(),
        $data: data,
        $id: messageId
      };
      this.outgoingMessages.add(messageId);
      const listenFunction = (e) => {
        const { data: data2 } = e;
        if (data2.$type === this.getTypeId() && data2.$id === messageId && data2.$originId !== this.internalId) {
          resolve(data2.$data);
          self.removeEventListener("message", listenFunction);
        }
      };
      self.addEventListener("message", listenFunction);
      this._postMessage(message);
    });
  }
  _postMessage(m2) {
    if (this.isWorker || typeof DedicatedWorkerGlobalScope !== "undefined" && this.target instanceof DedicatedWorkerGlobalScope) {
      this.target.postMessage(m2);
    } else {
      this.target.postMessage(m2, "*");
    }
  }
};
var IFrameProtocol = class {
  constructor(iframe, origin) {
    this.globalListeners = {};
    this.globalListenersCount = 0;
    this.channelListeners = {};
    this.channelListenersCount = 0;
    this.channelId = Math.floor(Math.random() * 1e6);
    this.frameWindow = iframe.contentWindow;
    this.origin = origin;
    this.globalListeners = [];
    this.channelListeners = [];
    this.eventListener = this.eventListener.bind(this);
    if (typeof window !== "undefined") {
      window.addEventListener("message", this.eventListener);
    }
  }
  cleanup() {
    window.removeEventListener("message", this.eventListener);
    this.globalListeners = {};
    this.channelListeners = {};
    this.globalListenersCount = 0;
    this.channelListenersCount = 0;
  }
  register() {
    if (!this.frameWindow) {
      return;
    }
    this.frameWindow.postMessage({
      type: "register-frame",
      origin: document.location.origin,
      id: this.channelId
    }, this.origin);
  }
  dispatch(message) {
    if (!this.frameWindow) {
      return;
    }
    this.frameWindow.postMessage(__spreadValues({
      $id: this.channelId,
      codesandbox: true
    }, message), this.origin);
  }
  globalListen(listener) {
    if (typeof listener !== "function") {
      return () => {
        return;
      };
    }
    const listenerId = this.globalListenersCount;
    this.globalListeners[listenerId] = listener;
    this.globalListenersCount++;
    return () => {
      delete this.globalListeners[listenerId];
    };
  }
  channelListen(listener) {
    if (typeof listener !== "function") {
      return () => {
        return;
      };
    }
    const listenerId = this.channelListenersCount;
    this.channelListeners[listenerId] = listener;
    this.channelListenersCount++;
    return () => {
      delete this.channelListeners[listenerId];
    };
  }
  eventListener(message) {
    if (!message.data.codesandbox) {
      return;
    }
    Object.values(this.globalListeners).forEach((listener) => listener(message.data));
    if (message.data.$id !== this.channelId) {
      return;
    }
    Object.values(this.channelListeners).forEach((listener) => listener(message.data));
  }
};
function createPackageJSON(dependencies = {}, entry = "/index.js") {
  return JSON.stringify({
    name: "sandpack-project",
    main: entry,
    dependencies
  }, null, 2);
}
function addPackageJSONIfNeeded(files, dependencies, entry) {
  const newFiles = __spreadValues({}, files);
  if (!newFiles["/package.json"]) {
    if (!dependencies) {
      throw new Error("No dependencies specified, please specify either a package.json or dependencies.");
    }
    if (!entry) {
      throw new Error("Missing 'entry' parameter. Either specify an entry point, or pass in a package.json with the 'main' field set.");
    }
    newFiles["/package.json"] = {
      code: createPackageJSON(dependencies, entry)
    };
  }
  return newFiles;
}
function extractErrorDetails(msg) {
  if (msg.title === "SyntaxError") {
    const { title, path, message, line, column } = msg;
    return { title, path, message, line, column };
  }
  const relevantStackFrame = getRelevantStackFrame(msg.payload.frames);
  if (!relevantStackFrame) {
    return { message: msg.message };
  }
  const errorInCode = getErrorInOriginalCode(relevantStackFrame);
  const errorLocation = getErrorLocation(relevantStackFrame);
  const errorMessage = formatErrorMessage(relevantStackFrame._originalFileName, msg.message, errorLocation, errorInCode);
  return {
    message: errorMessage,
    title: msg.title,
    path: relevantStackFrame._originalFileName,
    line: relevantStackFrame._originalLineNumber,
    column: relevantStackFrame._originalColumnNumber
  };
}
function getRelevantStackFrame(frames) {
  if (!frames) {
    return;
  }
  return frames.find((frame) => !!frame._originalFileName);
}
function getErrorLocation(errorFrame) {
  return errorFrame ? ` (${errorFrame._originalLineNumber}:${errorFrame._originalColumnNumber})` : ``;
}
function getErrorInOriginalCode(errorFrame) {
  const lastScriptLine = errorFrame._originalScriptCode[errorFrame._originalScriptCode.length - 1];
  const numberOfLineNumberCharacters = lastScriptLine.lineNumber.toString().length;
  const leadingCharacterOffset = 2;
  const barSeparatorCharacterOffset = 3;
  const extraLineLeadingSpaces = leadingCharacterOffset + numberOfLineNumberCharacters + barSeparatorCharacterOffset + errorFrame._originalColumnNumber;
  return errorFrame._originalScriptCode.reduce((result, scriptLine) => {
    const leadingChar = scriptLine.highlight ? ">" : " ";
    const lineNumber = scriptLine.lineNumber.toString().length === numberOfLineNumberCharacters ? `${scriptLine.lineNumber}` : ` ${scriptLine.lineNumber}`;
    const extraLine = scriptLine.highlight ? "\n" + " ".repeat(extraLineLeadingSpaces) + "^" : "";
    return result + "\n" + leadingChar + " " + lineNumber + " | " + scriptLine.content + extraLine;
  }, "");
}
function formatErrorMessage(filePath, message, location, errorInCode) {
  return `${filePath}: ${message}${location}
${errorInCode}`;
}
var BUNDLER_URL = `https://${"0.1.20".replace(/\./g, "-")}-sandpack.codesandbox.io/`;
var SandpackClient = class {
  constructor(selector, sandboxInfo, options = {}) {
    this.getTranspilerContext = () => new Promise((resolve) => {
      const unsubscribe = this.listen((message) => {
        if (message.type === "transpiler-context") {
          resolve(message.data);
          unsubscribe();
        }
      });
      this.dispatch({ type: "get-transpiler-context" });
    });
    this.options = options;
    this.sandboxInfo = sandboxInfo;
    this.bundlerURL = options.bundlerURL || BUNDLER_URL;
    this.bundlerState = void 0;
    this.errors = [];
    this.status = "initializing";
    if (typeof selector === "string") {
      this.selector = selector;
      const element = document.querySelector(selector);
      if (!element) {
        throw new Error(`No element found for selector '${selector}'`);
      }
      this.element = element;
      this.iframe = document.createElement("iframe");
      this.initializeElement();
    } else {
      this.element = selector;
      this.iframe = selector;
    }
    if (!this.iframe.getAttribute("sandbox")) {
      this.iframe.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
    }
    this.iframe.src = options.startRoute ? new URL(options.startRoute, this.bundlerURL).toString() : this.bundlerURL;
    this.iframeProtocol = new IFrameProtocol(this.iframe, this.bundlerURL);
    this.unsubscribeGlobalListener = this.iframeProtocol.globalListen((mes) => {
      if (mes.type !== "initialized" || !this.iframe.contentWindow) {
        return;
      }
      this.iframeProtocol.register();
      if (this.options.fileResolver) {
        this.fileResolverProtocol = new Protocol("file-resolver", async (data) => {
          if (data.m === "isFile") {
            return this.options.fileResolver.isFile(data.p);
          }
          return this.options.fileResolver.readFile(data.p);
        }, this.iframe.contentWindow);
      }
      this.updatePreview(this.sandboxInfo, true);
    });
    this.unsubscribeChannelListener = this.iframeProtocol.channelListen((mes) => {
      switch (mes.type) {
        case "start": {
          this.errors = [];
          break;
        }
        case "status": {
          this.status = mes.status;
          break;
        }
        case "action": {
          if (mes.action === "show-error") {
            this.errors = [...this.errors, extractErrorDetails(mes)];
          }
          break;
        }
        case "state": {
          this.bundlerState = mes.state;
          break;
        }
      }
    });
  }
  cleanup() {
    this.unsubscribeChannelListener();
    this.unsubscribeGlobalListener();
    this.iframeProtocol.cleanup();
  }
  updateOptions(options) {
    if (!isEqual(this.options, options)) {
      this.options = options;
      this.updatePreview();
    }
  }
  updatePreview(sandboxInfo = this.sandboxInfo, isInitializationCompile) {
    var _a2, _b, _c;
    this.sandboxInfo = sandboxInfo;
    const files = this.getFiles();
    const modules = Object.keys(files).reduce((prev, next) => __spreadProps(__spreadValues({}, prev), {
      [next]: {
        code: files[next].code,
        path: next
      }
    }), {});
    let packageJSON = JSON.parse(createPackageJSON(this.sandboxInfo.dependencies, this.sandboxInfo.entry));
    try {
      packageJSON = JSON.parse(files["/package.json"].code);
    } catch (e) {
      console.error("Could not parse package.json file: " + e.message);
    }
    const normalizedModules = Object.keys(files).reduce((prev, next) => __spreadProps(__spreadValues({}, prev), {
      [next]: {
        content: files[next].code,
        path: next
      }
    }), {});
    this.dispatch({
      type: "compile",
      codesandbox: true,
      version: 3,
      isInitializationCompile,
      modules,
      externalResources: [],
      hasFileResolver: Boolean(this.options.fileResolver),
      disableDependencyPreprocessing: this.sandboxInfo.disableDependencyPreprocessing,
      template: this.sandboxInfo.template || getTemplate_1(packageJSON, normalizedModules),
      showOpenInCodeSandbox: (_a2 = this.options.showOpenInCodeSandbox) != null ? _a2 : true,
      showErrorScreen: (_b = this.options.showErrorScreen) != null ? _b : true,
      showLoadingScreen: (_c = this.options.showLoadingScreen) != null ? _c : true,
      skipEval: this.options.skipEval || false,
      clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile
    });
  }
  dispatch(message) {
    this.iframeProtocol.dispatch(message);
  }
  listen(listener) {
    return this.iframeProtocol.channelListen(listener);
  }
  getCodeSandboxURL() {
    const files = this.getFiles();
    const paramFiles = Object.keys(files).reduce((prev, next) => __spreadProps(__spreadValues({}, prev), {
      [next.replace("/", "")]: {
        content: files[next].code,
        isBinary: false
      }
    }), {});
    return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
      method: "POST",
      body: JSON.stringify({ files: paramFiles }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then((x2) => x2.json()).then((res) => ({
      sandboxId: res.sandbox_id,
      editorUrl: `https://codesandbox.io/s/${res.sandbox_id}`,
      embedUrl: `https://codesandbox.io/embed/${res.sandbox_id}`
    }));
  }
  getFiles() {
    const { sandboxInfo } = this;
    if (sandboxInfo.files["/package.json"] === void 0) {
      return addPackageJSONIfNeeded(sandboxInfo.files, sandboxInfo.dependencies, sandboxInfo.entry);
    }
    return this.sandboxInfo.files;
  }
  initializeElement() {
    this.iframe.style.border = "0";
    this.iframe.style.width = this.options.width || "100%";
    this.iframe.style.height = this.options.height || "100%";
    this.iframe.style.overflow = "hidden";
    if (!this.element.parentNode) {
      throw new Error("Given element does not have a parent.");
    }
    this.element.parentNode.replaceChild(this.iframe, this.element);
  }
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"));
const convertHexUnitTo256 = (hex) => parseInt(hex.repeat(2 / hex.length), 16);
function getAlphaFloat(a, alpha) {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
}
function hexToObject(hex) {
  if (!hex) {
    return void 0;
  }
  if (!isValidHex(hex)) {
    throw new Error("Invalid color string, must be a valid hex color");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r2, g2, b, a] = hexArr.map(convertHexUnitTo256);
  return {
    r: r2,
    g: g2,
    b,
    a: getAlphaFloat(a, 1)
  };
}
function objectToHex(object) {
  if (!object) {
    return void 0;
  }
  const {
    r: r2,
    g: g2,
    b,
    a
  } = object;
  const alpha = Math.round(a * 255);
  return `#${r2.toString(16).padStart(2, "0")}${g2.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}${alpha.toString(16).padStart(2, "0")}`;
}
function transparent(color, opacity) {
  if (!color) {
    return color;
  }
  const {
    r: r2,
    g: g2,
    b,
    a
  } = hexToObject(color);
  return objectToHex({
    r: r2,
    g: g2,
    b,
    a: a * opacity
  });
}
function map(tween2, fn) {
  return {
    prev: fn(tween2.prev, "prev"),
    next: fn(tween2.next, "next")
  };
}
function withDefault(t2, deft) {
  return {
    prev: (t2 === null || t2 === void 0 ? void 0 : t2.prev) === void 0 ? deft : t2.prev,
    next: (t2 === null || t2 === void 0 ? void 0 : t2.next) === void 0 ? deft : t2.next
  };
}
function mapWithDefault(tween2, deft, fn) {
  return map(withDefault(tween2, deft), fn);
}
function mapFocusToLineNumbers(focus, lines) {
  if (!focus) {
    return mergeToObject([...lines.keys()].map((lineIndex) => ({
      [lineIndex + 1]: true
    })));
  } else {
    return mergeToObject(splitParts(focus).map(parsePartToObject));
  }
}
function splitParts(focus) {
  return focus.split(/,(?![^\[]*\])/g);
}
function mergeToObject(entries) {
  return entries.reduce((acc, obj) => Object.assign(acc, obj), {});
}
function hasColumns(part) {
  return !!part.match(/(\d+)\[(.+)\]/);
}
function parsePartToObject(part) {
  const columnsMatch = part.match(/(\d+)\[(.+)\]/);
  if (columnsMatch) {
    const [, line, columns] = columnsMatch;
    const columnsList = columns.split(",").map(parseExtremes);
    const lineNumber = Number(line);
    return {
      [lineNumber]: columnsList
    };
  } else {
    return mergeToObject(expandString(part).map((lineNumber) => ({
      [lineNumber]: true
    })));
  }
}
function parseExtremes(part) {
  const [start, end] = part.split(":");
  if (!isNaturalNumber(start)) {
    throw new FocusNumberError(start);
  }
  const startNumber = Number(start);
  if (startNumber < 1) {
    throw new LineOrColumnNumberError();
  }
  if (!end) {
    return {
      start: startNumber,
      end: startNumber
    };
  } else {
    if (!isNaturalNumber(end)) {
      throw new FocusNumberError(end);
    }
    return {
      start: startNumber,
      end: +end
    };
  }
}
function getFocusIndexes(focus, lines) {
  if (!focus) {
    return [...lines.keys()];
  } else {
    const parsed = parseFocus(focus);
    const focusedIndexes = Object.keys(parsed).map((i) => parseInt(i, 10));
    return focusedIndexes;
  }
}
function parseFocus(focus) {
  if (!focus) {
    throw new Error("Focus cannot be empty");
  }
  try {
    const parts = focus.split(/,(?![^\[]*\])/g).map(parsePart);
    return fromEntries(parts.flat());
  } catch (error) {
    throw error;
  }
}
function parsePart(part) {
  const columnsMatch = part.match(/(\d+)\[(.+)\]/);
  if (columnsMatch) {
    const [, line, columns] = columnsMatch;
    const columnsList = columns.split(",").map(expandString);
    const lineIndex = Number(line) - 1;
    const columnIndexes = columnsList.flat().map((c) => c - 1);
    return [[lineIndex, columnIndexes]];
  } else {
    return expandString(part).map((lineNumber) => [lineNumber - 1, true]);
  }
}
function expandString(part) {
  const [start, end] = part.split(":");
  if (!isNaturalNumber(start)) {
    throw new FocusNumberError(start);
  }
  const startNumber = Number(start);
  if (startNumber < 1) {
    throw new LineOrColumnNumberError();
  }
  if (!end) {
    return [startNumber];
  } else {
    if (!isNaturalNumber(end)) {
      throw new FocusNumberError(end);
    }
    const list = [];
    for (let i = startNumber; i <= +end; i++) {
      list.push(i);
    }
    return list;
  }
}
function isNaturalNumber(n2) {
  n2 = n2.toString();
  var n1 = Math.abs(n2), n22 = parseInt(n2, 10);
  return !isNaN(n1) && n22 === n1 && n1.toString() === n2;
}
class LineOrColumnNumberError extends Error {
  constructor() {
    super(`Invalid line or column number in focus string`);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
class FocusNumberError extends Error {
  constructor(number) {
    super(`Invalid number "${number}" in focus string`);
    this.number = number;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
function fromEntries(pairs) {
  const result = {};
  let index = -1, length = pairs == null ? 0 : pairs.length;
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
var ColorName;
(function(ColorName2) {
  ColorName2[ColorName2["CodeForeground"] = 0] = "CodeForeground";
  ColorName2[ColorName2["CodeBackground"] = 1] = "CodeBackground";
  ColorName2[ColorName2["EditorForeground"] = 2] = "EditorForeground";
  ColorName2[ColorName2["EditorBackground"] = 3] = "EditorBackground";
  ColorName2[ColorName2["ActiveTabBackground"] = 4] = "ActiveTabBackground";
  ColorName2[ColorName2["ActiveTabForeground"] = 5] = "ActiveTabForeground";
  ColorName2[ColorName2["InactiveTabBackground"] = 6] = "InactiveTabBackground";
  ColorName2[ColorName2["InactiveTabForeground"] = 7] = "InactiveTabForeground";
  ColorName2[ColorName2["EditorGroupBorder"] = 8] = "EditorGroupBorder";
  ColorName2[ColorName2["EditorGroupHeaderBackground"] = 9] = "EditorGroupHeaderBackground";
  ColorName2[ColorName2["TabBorder"] = 10] = "TabBorder";
  ColorName2[ColorName2["ActiveTabBottomBorder"] = 11] = "ActiveTabBottomBorder";
  ColorName2[ColorName2["LineNumberForeground"] = 12] = "LineNumberForeground";
  ColorName2[ColorName2["InputForeground"] = 13] = "InputForeground";
  ColorName2[ColorName2["InputBackground"] = 14] = "InputBackground";
  ColorName2[ColorName2["InputBorder"] = 15] = "InputBorder";
  ColorName2[ColorName2["SelectionBackground"] = 16] = "SelectionBackground";
})(ColorName || (ColorName = {}));
const contrastBorder = "#6FC3DF";
function getColor(theme, colorName) {
  var _a2, _b;
  const colors = theme.colors || {};
  switch (colorName) {
    case ColorName.CodeForeground:
      return ((_a2 = getGlobalSettings(theme)) === null || _a2 === void 0 ? void 0 : _a2.foreground) || getColor(theme, ColorName.EditorForeground);
    case ColorName.CodeBackground:
      return ((_b = getGlobalSettings(theme)) === null || _b === void 0 ? void 0 : _b.background) || getColor(theme, ColorName.EditorBackground);
    case ColorName.EditorBackground:
      return colors["editor.background"] || getDefault(theme, {
        light: "#fffffe",
        dark: "#1E1E1E",
        hc: "#000000"
      });
    case ColorName.EditorForeground:
      return colors["editor.foreground"] || getDefault(theme, {
        light: "#333333",
        dark: "#BBBBBB",
        hc: "#fffffe"
      });
    case ColorName.ActiveTabBackground:
      return colors["tab.activeBackground"] || getColor(theme, ColorName.EditorBackground);
    case ColorName.ActiveTabForeground:
      return colors["tab.activeForeground"] || getDefault(theme, {
        dark: "#ffffff",
        light: "#333333",
        hc: "#ffffff"
      });
    case ColorName.InactiveTabBackground:
      return colors["tab.inactiveBackground"] || getDefault(theme, {
        dark: "#2D2D2D",
        light: "#ECECEC",
        hc: void 0
      });
    case ColorName.InactiveTabForeground:
      return colors["tab.inactiveForeground"] || getDefault(theme, {
        dark: transparent(getColor(theme, ColorName.ActiveTabForeground), 0.5),
        light: transparent(getColor(theme, ColorName.ActiveTabForeground), 0.7),
        hc: "#ffffff"
      });
    case ColorName.TabBorder:
      return colors["tab.border"] || getDefault(theme, {
        dark: "#252526",
        light: "#F3F3F3",
        hc: contrastBorder
      });
    case ColorName.ActiveTabBottomBorder:
      return colors["tab.activeBorder"] || getColor(theme, ColorName.ActiveTabBackground);
    case ColorName.EditorGroupBorder:
      return colors["editorGroup.border"] || getDefault(theme, {
        dark: "#444444",
        light: "#E7E7E7",
        hc: contrastBorder
      });
    case ColorName.EditorGroupHeaderBackground:
      return colors["editorGroupHeader.tabsBackground"] || getDefault(theme, {
        dark: "#252526",
        light: "#F3F3F3",
        hc: void 0
      });
    case ColorName.LineNumberForeground:
      return colors["editorLineNumber.foreground"] || getDefault(theme, {
        dark: "#858585",
        light: "#237893",
        hc: "#fffffe"
      });
    case ColorName.InputBackground:
      return colors["input.background"] || getDefault(theme, {
        dark: "#3C3C3C",
        light: "#fffffe",
        hc: "#000000"
      });
    case ColorName.InputForeground:
      return colors["input.foreground"] || getColor(theme, ColorName.EditorForeground);
    case ColorName.InputBorder:
      return colors["input.border"] || getDefault(theme, {
        dark: void 0,
        light: void 0,
        hc: contrastBorder
      });
    case ColorName.SelectionBackground:
      return colors["editor.selectionBackground"] || getDefault(theme, {
        light: "#ADD6FF",
        dark: "#264F78",
        hc: "#f3f518"
      });
    default:
      return "#f00";
  }
}
function getColorScheme(theme) {
  const themeType = getThemeType(theme);
  if (themeType === "dark") {
    return "dark";
  } else if (themeType === "light") {
    return "light";
  }
  return void 0;
}
function getDefault(theme, defaults) {
  return defaults[getThemeType(theme)];
}
function getThemeType(theme) {
  var _a2;
  return theme.type ? theme.type : ((_a2 = theme.name) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase().includes("light")) ? "light" : "dark";
}
function getCodeColors(theme) {
  return {
    fg: getColor(theme, ColorName.CodeForeground),
    bg: getColor(theme, ColorName.CodeBackground)
  };
}
function getGlobalSettings(theme) {
  let settings = theme.settings ? theme.settings : theme.tokenColors;
  const globalSetting = settings ? settings.find((s) => {
    return !s.name && !s.scope;
  }) : void 0;
  return globalSetting === null || globalSetting === void 0 ? void 0 : globalSetting.settings;
}
const useLayoutEffect$3 = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
const DEFAULT_WIDTH = 200;
function useDimensions(code, focus, minColumns, lineNumbers, deps) {
  const [dimensions, setDimensions] = React.useState(null);
  const windowWidth = useWindowWidth();
  const prevLineRef = React.useRef(null);
  const {
    prevLongestLine,
    nextLongestLine,
    element
  } = React.useMemo(() => {
    const prevLongestLine2 = getLongestLine(code.prev, focus.prev);
    const nextLongestLine2 = getLongestLine(code.next, focus.next);
    const lines = (code.prev || code.next).trimEnd().split(newlineRe);
    const lineCount = lines.length;
    const element2 = /* @__PURE__ */ jsxRuntime.exports.jsxs("code", {
      className: "ch-code-scroll-parent",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx("br", {}), lines.map((line, i) => /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
        ref: line === prevLongestLine2 ? prevLineRef : void 0,
        children: [lineNumbers ? /* @__PURE__ */ jsxRuntime.exports.jsxs("span", {
          className: "ch-code-line-number",
          children: ["_", lineCount]
        }) : void 0, /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
          style: {
            display: "inline-block"
          },
          children: /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
            children: line
          })
        })]
      }, i)), /* @__PURE__ */ jsxRuntime.exports.jsx("br", {})]
    });
    return {
      prevLongestLine: prevLongestLine2,
      nextLongestLine: nextLongestLine2,
      element: element2
    };
  }, [code]);
  const allDeps = [...deps, windowWidth, prevLongestLine, nextLongestLine, minColumns];
  useLayoutEffect$3(() => {
    var _a2;
    if (prevLineRef.current) {
      const pll = prevLineRef.current;
      const codeElement = pll === null || pll === void 0 ? void 0 : pll.parentElement;
      const lineContentDiv = pll === null || pll === void 0 ? void 0 : pll.querySelector(":scope > div");
      const lineNumberSpan = pll === null || pll === void 0 ? void 0 : pll.querySelector(":scope > span");
      const lnw = lineNumberSpan ? getWidthWithPadding(lineNumberSpan) : 0;
      const plw = getWidthWithoutPadding(lineContentDiv);
      const colWidth = plw / prevLongestLine.length || 1;
      const nlw = nextLongestLine.length * colWidth;
      const lineHeight = (_a2 = getHeightWithoutPadding(lineContentDiv)) !== null && _a2 !== void 0 ? _a2 : 20;
      const d = {
        containerWidth: getWidthWithoutPadding(codeElement.parentElement),
        containerHeight: getHeightWithoutPadding(codeElement.parentElement),
        lineWidths: [plw || nlw || DEFAULT_WIDTH, nlw || plw || DEFAULT_WIDTH],
        lineWidth: [Math.max(plw || nlw || DEFAULT_WIDTH, colWidth * minColumns), Math.max(nlw || plw || DEFAULT_WIDTH, colWidth * minColumns)],
        lineHeight,
        colWidth,
        lineNumberWidth: lnw,
        deps: allDeps
      };
      setDimensions(d);
    }
  }, [allDeps]);
  if (!dimensions || depsChanged(dimensions.deps, allDeps)) {
    return {
      element,
      dimensions: null
    };
  } else {
    return {
      element,
      dimensions
    };
  }
}
const newlineRe = /\r\n|\r|\n/;
function getLongestLine(code, focus) {
  const lines = code ? code.split(newlineRe) : [""];
  const focusIndexes = getFocusIndexes(focus, lines);
  let longestLine = "";
  lines.forEach((line, index) => {
    if (focusIndexes.includes(index) && line.length > longestLine.length) {
      longestLine = line;
    }
  });
  return longestLine;
}
function getWidthWithoutPadding(element) {
  const computedStyle = getComputedStyle(element);
  return parseFloat(computedStyle.width) - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
}
function getWidthWithPadding(element) {
  const computedStyle = getComputedStyle(element);
  return parseFloat(computedStyle.width);
}
function getHeightWithoutPadding(element) {
  if (!element)
    return null;
  const computedStyle = getComputedStyle(element);
  return parseFloat(computedStyle.height) - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
}
function depsChanged(oldDeps, newDeps) {
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== newDeps[i])
      return true;
  }
  return false;
}
function useWindowWidth() {
  const [width, setWidth] = React.useState(void 0);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
function mergeLines(code, lines) {
  let enterIndex = 0;
  let exitIndex = 0;
  const indexes = diff(code);
  const newLines = indexes.map((index) => {
    if (index.next === void 0) {
      return Object.assign(Object.assign({}, lines.prev[index.prev]), {
        lineNumber: {
          prev: index.prev + 1
        },
        move: "exit",
        enterIndex: null,
        exitIndex: exitIndex++
      });
    }
    if (index.prev === void 0) {
      return Object.assign(Object.assign({}, lines.next[index.next]), {
        lineNumber: {
          next: index.next + 1
        },
        move: "enter",
        enterIndex: enterIndex++,
        exitIndex: null
      });
    }
    return Object.assign(Object.assign({}, lines.prev[index.prev]), {
      lineNumber: {
        prev: index.prev + 1,
        next: index.next + 1
      },
      move: "stay",
      enterIndex: null,
      exitIndex: null
    });
  });
  return {
    lines: newLines,
    enterCount: enterIndex,
    exitCount: exitIndex
  };
}
function diff(code) {
  const changes = diffLines(code.prev, code.next);
  let indexes = [];
  let prevIndex = 0;
  let nextIndex = 0;
  changes.forEach((change) => {
    if (change.added) {
      for (let i = 0; i < change.count; i++) {
        indexes.push({
          next: nextIndex++
        });
      }
    } else if (change.removed) {
      for (let i = 0; i < change.count; i++) {
        indexes.push({
          prev: prevIndex++
        });
      }
    } else {
      for (let i = 0; i < change.count; i++) {
        indexes.push({
          prev: prevIndex++,
          next: nextIndex++
        });
      }
    }
  });
  return indexes;
}
function splitByFocus(mergedCode, focus, annotations) {
  const {
    lines
  } = mergedCode, mergedCodeRest = __rest(mergedCode, ["lines"]);
  const focusByLineNumber = map(focus, (focus2) => mapFocusToLineNumbers(focus2, lines));
  const splittedLines = lines.map((line) => {
    const {
      tokens
    } = line, rest = __rest(line, ["tokens"]);
    const lineFocus = {
      prev: line.lineNumber.prev ? focusByLineNumber.prev[line.lineNumber.prev] : false,
      next: line.lineNumber.next ? focusByLineNumber.next[line.lineNumber.next] : false
    };
    const lineAnnotations = {
      prev: line.lineNumber.prev ? annotations.prev[line.lineNumber.prev] || [] : [],
      next: line.lineNumber.next ? annotations.next[line.lineNumber.next] || [] : []
    };
    return Object.assign({
      focused: map(lineFocus, (focus2) => !!focus2),
      groups: getTokenGroups(tokens, lineFocus, lineAnnotations)
    }, rest);
  });
  const focusedLineNumbers = map(focusByLineNumber, (focusByLineNumber2) => Object.keys(focusByLineNumber2).map((k) => Number(k)));
  const firstFocusedLineNumber = map(focusedLineNumbers, (focusedLineNumbers2) => Math.min(...focusedLineNumbers2));
  const lastFocusedLineNumber = map(focusedLineNumbers, (focusedLineNumbers2) => Math.max(...focusedLineNumbers2));
  return Object.assign({
    lines: splittedLines,
    firstFocusedLineNumber,
    lastFocusedLineNumber
  }, mergedCodeRest);
}
function getTokenGroups(tokens, focus, annotations) {
  const focusExtremes = map(focus, (focus2) => Array.isArray(focus2) ? focus2 : []);
  const annotationExtremes = map(annotations, (annotations2) => annotations2.map(({
    columnNumbers
  }) => columnNumbers));
  const allExtremes = [...focusExtremes.prev, ...focusExtremes.next, ...annotationExtremes.prev, ...annotationExtremes.next];
  const splittedTokens = splitTokens(tokens, allExtremes);
  let startIndex = 0;
  let currentGroup = null;
  const groups = [];
  splittedTokens.forEach((token) => {
    const newPrevFocus = isIn(startIndex, focus.prev);
    const newNextFocus = isIn(startIndex, focus.next);
    const newPrevAnnotation = getAnnotation(startIndex, annotations.prev);
    const newNextAnnotation = getAnnotation(startIndex, annotations.next);
    if (!currentGroup || currentGroup.focused.prev !== newPrevFocus || currentGroup.focused.next !== newNextFocus || currentGroup.annotation.prev !== newPrevAnnotation || currentGroup.annotation.next !== newNextAnnotation) {
      currentGroup = {
        focused: {
          prev: newPrevFocus,
          next: newNextFocus
        },
        tokens: [],
        annotation: {
          prev: newPrevAnnotation,
          next: newNextAnnotation
        }
      };
      groups.push(currentGroup);
    }
    currentGroup === null || currentGroup === void 0 ? void 0 : currentGroup.tokens.push(token);
    startIndex += token.content.length;
  });
  return groups.map((group) => ({
    focused: group.focused,
    tokens: group.tokens,
    element: getGroupElement(group)
  }));
}
function getGroupElement(group) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: group.tokens.map(({
      content,
      props
    }, i) => /* @__PURE__ */ jsxRuntime.exports.jsx("span", __spreadProps(__spreadValues({}, Object.assign({}, props, {
      key: i + 1
    })), {
      children: content
    })))
  });
}
function splitTokens(tokens, extremes) {
  const splitIndexes = [...extremes.map((e) => e.start - 1), ...extremes.map((e) => e.end)];
  let oldTokens = tokens;
  splitIndexes.forEach((splitIndex) => {
    const newTokens = [];
    let i = 0;
    oldTokens.forEach((token) => {
      const startIndex = i;
      const endIndex = i + token.content.length;
      const shouldSplit = startIndex < splitIndex && splitIndex < endIndex;
      if (shouldSplit) {
        const sliceIndex = splitIndex - startIndex;
        const content0 = token.content.slice(0, sliceIndex);
        const content1 = token.content.slice(sliceIndex);
        newTokens.push(Object.assign(Object.assign({}, token), {
          content: content0
        }));
        newTokens.push(Object.assign(Object.assign({}, token), {
          content: content1
        }));
      } else {
        newTokens.push(token);
      }
      i = endIndex;
    });
    oldTokens = newTokens;
  });
  return oldTokens;
}
function isIn(index, intervals) {
  if (!Array.isArray(intervals)) {
    return intervals;
  }
  return intervals.some(({
    start,
    end
  }) => start - 1 <= index && index < end);
}
function getAnnotation(index, annotations) {
  return annotations.find(({
    columnNumbers
  }) => columnNumbers.start - 1 <= index && index < columnNumbers.end);
}
function tween$1(params, t2) {
  if (params.fixed === true) {
    return params.value;
  } else {
    const [start, end] = params.interval;
    const [from, to] = params.extremes;
    if (t2 < start)
      return from;
    if (t2 > end)
      return to;
    const x2 = (t2 - start) / (end - start);
    const ease = params.ease || easing.linear;
    return from + ease(x2) * (to - from);
  }
}
function stagger([start, end], index, count) {
  if (count <= 1)
    return [start, end];
  const totalDuration = end - start;
  const stepDuration = totalDuration / Math.pow(count, 1 / 8);
  const tick = (totalDuration - stepDuration) / (count - 1);
  const stepStart = start + tick * index;
  const stepEnd = stepStart + stepDuration;
  return [stepStart, stepEnd];
}
const easing = {
  linear: function(t2) {
    return t2;
  },
  easeInQuad: function(t2) {
    return t2 * t2;
  },
  easeOutQuad: function(t2) {
    return t2 * (2 - t2);
  },
  easeInOutCubic: function(t2) {
    return t2 < 0.5 ? 4 * t2 * t2 * t2 : (t2 - 1) * (2 * t2 - 2) * (2 * t2 - 2) + 1;
  }
};
function getLinesWithElements(lines, verticalInterval2, enterCount, exitCount) {
  const [startY, endY] = verticalInterval2;
  return lines.map((line) => {
    const lineIndex = map(line.lineNumber, (ln) => ln && ln - 1);
    const {
      enterIndex,
      exitIndex
    } = line;
    const tweenY = line.move === "exit" ? {
      fixed: true,
      value: lineIndex.prev
    } : line.move === "enter" ? {
      fixed: true,
      value: lineIndex.next
    } : {
      fixed: false,
      extremes: [lineIndex.prev, lineIndex.next],
      interval: [startY, endY],
      ease: easing.easeInOutCubic
    };
    const tweenX = line.move === "exit" ? {
      fixed: false,
      extremes: [0, -1],
      ease: easing.easeInQuad,
      interval: stagger([0, startY], exitIndex, exitCount)
    } : line.move === "enter" ? {
      fixed: false,
      extremes: [1, 0],
      ease: easing.easeOutQuad,
      interval: stagger([endY, 1], enterIndex, enterCount)
    } : {
      fixed: true,
      value: 0
    };
    return Object.assign(Object.assign({}, line), {
      tweenX,
      tweenY
    });
  });
}
function parseAnnotations(annotations, theme) {
  const expandedAnnotations = mapWithDefault(annotations, [], (annotations2) => annotations2.flatMap((annotation) => splitParts(annotation.focus).map((part) => Object.assign(Object.assign({}, annotation), {
    focus: part
  }))));
  const inlineCodeAnnotations = mapWithDefault(expandedAnnotations, [], (annotations2) => annotations2.filter(isInline));
  const multilineCodeAnnotations = mapWithDefault(expandedAnnotations, [], (annotations2) => annotations2.filter((a) => !isInline(a)));
  return {
    inlineAnnotations: map(inlineCodeAnnotations, (annotations2) => parseInlineAnnotations(annotations2, theme)),
    multilineAnnotations: map(multilineCodeAnnotations, (annotations2) => parseMultilineAnnotations(annotations2, theme))
  };
}
function isInline(annotation) {
  return hasColumns(annotation.focus);
}
function parseInlineAnnotations(annotations, theme) {
  const annotationMap = {};
  annotations.forEach((annotation) => {
    const focusMap = parsePartToObject(annotation.focus);
    const lineNumber = +Object.keys(focusMap)[0];
    const columnNumbersList = focusMap[lineNumber];
    const lineAnnotations = annotationMap[lineNumber] || [];
    lineAnnotations.push({
      columnNumbers: columnNumbersList[0],
      data: annotation.data,
      theme,
      Component: annotation.Component || defaultInlineComponent()
    });
    annotationMap[lineNumber] = lineAnnotations;
  });
  return annotationMap;
}
function defaultInlineComponent(annotation, theme) {
  return ({
    children
  }) => /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
    style: {
      outline: "red 1px solid"
    },
    children
  });
}
function parseMultilineAnnotations(annotations, theme) {
  return annotations.map((annotation) => {
    return {
      lineNumbers: parseExtremes(annotation.focus),
      data: annotation.data,
      theme,
      Component: annotation.Component || defaultMultilineComponent(annotation, theme)
    };
  });
}
function defaultMultilineComponent(annotation, theme) {
  const bg2 = theme.colors["editor.lineHighlightBackground"] || theme.colors["editor.selectionHighlightBackground"];
  return ({
    children,
    style
  }) => /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    style: Object.assign(Object.assign({}, style), {
      background: bg2,
      cursor: "pointer"
    }),
    onClick: (_) => alert("clicked"),
    className: "ch-code-bg-annotation",
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("span", {
      className: "ch-code-bg-annotation-border",
      style: {
        background: "#00a2d3",
        width: "3px",
        height: "100%",
        position: "absolute",
        left: 0
      }
    }), children]
  });
}
function annotateMultiline(lines, annotations) {
  return {
    prev: annotateMultilineSide(lines, annotations.prev, (line) => line.lineNumber.prev),
    next: annotateMultilineSide(lines, annotations.next, (line) => line.lineNumber.next)
  };
}
function annotateMultilineSide(lines, ogAnnotations, getLineNumber) {
  const annotations = [...ogAnnotations];
  annotations.sort((a, b) => a.lineNumbers.start - b.lineNumbers.start);
  let lineIndex = 0;
  const groups = [];
  while (lineIndex < lines.length) {
    const annotation = annotations[0];
    let line = lines[lineIndex];
    if (annotation && getLineNumber(line) === annotation.lineNumbers.start) {
      const group = {
        lines: [],
        annotation
      };
      while (line && (!getLineNumber(line) || getLineNumber(line) <= annotation.lineNumbers.end)) {
        group.lines.push(line);
        line = lines[++lineIndex];
      }
      groups.push(group);
      annotations.shift();
    } else if (!annotation) {
      groups.push({
        lines: lines.slice(lineIndex)
      });
      lineIndex = lines.length;
    } else {
      const group = {
        lines: []
      };
      while (line && (!getLineNumber(line) || getLineNumber(line) < annotation.lineNumbers.start)) {
        group.lines.push(line);
        line = lines[++lineIndex];
      }
      groups.push(group);
    }
  }
  return groups;
}
function annotateInline(lines, inlineAnnotations) {
  return lines.map((_a2) => {
    var {
      groups
    } = _a2, line = __rest(_a2, ["groups"]);
    const {
      lineNumber
    } = line;
    const annotations = {
      prev: lineNumber.prev ? inlineAnnotations.prev[lineNumber.prev] || [] : [],
      next: lineNumber.next ? inlineAnnotations.next[lineNumber.next] || [] : []
    };
    return Object.assign(Object.assign({}, line), {
      annotatedGroups: annotateLineTokenGroups(groups, annotations)
    });
  });
}
function annotateLineTokenGroups(tokenGroups, annotations) {
  let prevTokenGroups = [...tokenGroups];
  let nextTokenGroups = [...tokenGroups];
  const prevAnnotations = [...annotations.prev];
  const nextAnnotations = [...annotations.next];
  const annotatedGroups = [];
  let prevColumn = 1;
  let nextColumn = 1;
  while (prevTokenGroups.length > 0 || nextTokenGroups.length > 0) {
    const prevAnnotation = prevAnnotations[0];
    const nextAnnotation = nextAnnotations[0];
    const isPrevAnnotationStarting = prevAnnotation && prevAnnotation.columnNumbers.start === prevColumn;
    const isNextAnnotationStarting = nextAnnotation && nextAnnotation.columnNumbers.start === nextColumn;
    if (prevColumn < nextColumn) {
      if (isPrevAnnotationStarting) {
        const end = prevAnnotation.columnNumbers.end + 1;
        annotatedGroups.push({
          prev: {
            annotation: prevAnnotation,
            groups: shiftGroups(prevTokenGroups, prevColumn, end)
          }
        });
        prevColumn = end;
        prevAnnotations.shift();
      } else {
        const end = Math.min(nextColumn, (prevAnnotation === null || prevAnnotation === void 0 ? void 0 : prevAnnotation.columnNumbers.start) || nextColumn);
        annotatedGroups.push({
          prev: {
            groups: shiftGroups(prevTokenGroups, prevColumn, end)
          }
        });
        prevColumn = end;
      }
    } else if (prevColumn > nextColumn) {
      if (isNextAnnotationStarting) {
        const end = nextAnnotation.columnNumbers.end + 1;
        annotatedGroups.push({
          next: {
            annotation: nextAnnotation,
            groups: shiftGroups(nextTokenGroups, nextColumn, end)
          }
        });
        nextColumn = end;
        nextAnnotations.shift();
      } else {
        const end = Math.min(prevColumn, (nextAnnotation === null || nextAnnotation === void 0 ? void 0 : nextAnnotation.columnNumbers.start) || prevColumn);
        annotatedGroups.push({
          next: {
            groups: shiftGroups(nextTokenGroups, nextColumn, end)
          }
        });
        nextColumn = end;
      }
    } else if (prevColumn == nextColumn) {
      if (isPrevAnnotationStarting && isNextAnnotationStarting && prevAnnotation.columnNumbers.end === nextAnnotation.columnNumbers.end) {
        const end = nextAnnotation.columnNumbers.end + 1;
        annotatedGroups.push({
          prev: {
            annotation: prevAnnotation,
            groups: shiftGroups(prevTokenGroups, prevColumn, end)
          },
          next: {
            annotation: nextAnnotation,
            groups: shiftGroups(nextTokenGroups, nextColumn, end)
          }
        });
        prevColumn = end;
        nextColumn = end;
        prevAnnotations.shift();
        nextAnnotations.shift();
      } else if (isPrevAnnotationStarting) {
        const end = prevAnnotation.columnNumbers.end + 1;
        annotatedGroups.push({
          prev: {
            annotation: prevAnnotation,
            groups: shiftGroups(prevTokenGroups, prevColumn, end)
          }
        });
        prevColumn = end;
        prevAnnotations.shift();
      } else if (isNextAnnotationStarting) {
        const end = nextAnnotation.columnNumbers.end + 1;
        annotatedGroups.push({
          next: {
            annotation: nextAnnotation,
            groups: shiftGroups(nextTokenGroups, nextColumn, end)
          }
        });
        nextColumn = end;
        nextAnnotations.shift();
      } else if (!prevAnnotation && !nextAnnotation) {
        annotatedGroups.push({
          prev: {
            groups: prevTokenGroups
          },
          next: {
            groups: nextTokenGroups
          }
        });
        prevTokenGroups = [];
        nextTokenGroups = [];
      } else {
        const end = Math.min((prevAnnotation === null || prevAnnotation === void 0 ? void 0 : prevAnnotation.columnNumbers.start) || Number.MAX_VALUE, (nextAnnotation === null || nextAnnotation === void 0 ? void 0 : nextAnnotation.columnNumbers.start) || Number.MAX_VALUE);
        annotatedGroups.push({
          prev: {
            groups: shiftGroups(prevTokenGroups, prevColumn, end)
          },
          next: {
            groups: shiftGroups(nextTokenGroups, nextColumn, end)
          }
        });
        prevColumn = end;
        nextColumn = end;
      }
    }
  }
  return annotatedGroups;
}
function shiftGroups(tokenGroups, startColumn, newStartColumn) {
  const removedGroups = [];
  let currentStartColumn = startColumn;
  while (currentStartColumn < newStartColumn) {
    const currentTokenGroup = tokenGroups.shift();
    removedGroups.push(currentTokenGroup);
    const length = currentTokenGroup.tokens.reduce((a, t2) => a + t2.content.length, 0);
    currentStartColumn += length;
  }
  return removedGroups;
}
function useStepParser(input) {
  const {
    highlightedLines,
    theme,
    focus
  } = input;
  return React.useMemo(() => parse$1(input), [highlightedLines.prev, highlightedLines.next, focus.prev, focus.next, theme]);
}
function parse$1({
  theme,
  focus,
  annotations,
  highlightedLines
}) {
  const normalCode = getCode(highlightedLines);
  const mergedCode = merge(normalCode, highlightedLines);
  const {
    inlineAnnotations,
    multilineAnnotations
  } = parseAllAnnotations(annotations, theme);
  const focusedCode = splitLinesByFocus(mergedCode, withDefault(focus, null), inlineAnnotations);
  const annotatedCode = addAnnotations(focusedCode, inlineAnnotations, multilineAnnotations);
  const codeStep = addExtraStuff(annotatedCode, normalCode);
  return codeStep;
}
function getCode(highlightedLines) {
  return map(highlightedLines, (lines) => lines.map((line) => line.tokens.map((t2) => t2.content).join("")).join("\n").trimEnd().concat("\n"));
}
function merge(code, highlightedLines) {
  return mergeLines(code, highlightedLines);
}
function parseAllAnnotations(annotations, theme) {
  return parseAnnotations(annotations, theme);
}
function splitLinesByFocus(mergedCode, focus, annotations) {
  return splitByFocus(mergedCode, focus, annotations);
}
function addAnnotations(_a2, inlineAnnotations, annotations) {
  var {
    lines
  } = _a2, focusedCode = __rest(_a2, ["lines"]);
  const annotatedLines = annotateInline(lines, inlineAnnotations);
  const lineGroups = annotateMultiline(annotatedLines, annotations);
  return Object.assign(Object.assign({}, focusedCode), {
    lineGroups,
    lineCount: {
      prev: lines.filter((l2) => l2.lineNumber.prev != null).length,
      next: lines.filter((l2) => l2.lineNumber.next != null).length
    }
  });
}
function addExtraStuff(codeStep, code) {
  const vInterval = verticalInterval(codeStep.enterCount, codeStep.exitCount);
  const newGroups = map(codeStep.lineGroups, (groups) => groups.map((group) => Object.assign(Object.assign({}, group), {
    lines: getLinesWithElements(group.lines, vInterval, codeStep.enterCount, codeStep.exitCount)
  })));
  return Object.assign(Object.assign({}, codeStep), {
    groups: newGroups,
    verticalInterval: vInterval,
    code
  });
}
function verticalInterval(enterCount, exitCount) {
  if (enterCount <= 0 && exitCount <= 0)
    return [0, 1];
  if (enterCount <= 0 && exitCount >= 1)
    return [0.33, 1];
  if (enterCount >= 1 && exitCount <= 0)
    return [0, 0.67];
  return [0.25, 0.75];
}
function SmoothContainer({
  dimensions,
  codeStep,
  children,
  minZoom = 0,
  maxZoom = 1.2,
  center = false,
  progress
}) {
  const {
    prev,
    next
  } = getTweenContentProps({
    codeStep,
    dimensions,
    minZoom,
    maxZoom,
    horizontalCenter: center
  });
  const zoom = tweenProp(prev.zoom, next.zoom, progress);
  const dx = tweenProp(prev.dx, next.dx, progress);
  const dy = tweenProp(prev.dy, next.dy, progress, codeStep.verticalInterval);
  const focusHeight = tweenProp(prev.focusHeight, next.focusHeight, progress);
  const focusWidth = tweenProp(prev.focusWidth, next.focusWidth, progress);
  const lineNumberPad = ((dimensions === null || dimensions === void 0 ? void 0 : dimensions.lineNumberWidth) || 0) * zoom;
  const leftPad = lineNumberPad || 16;
  const width = Math.max(focusWidth + leftPad, dimensions.containerWidth);
  const startX = leftPad / zoom;
  return /* @__PURE__ */ jsxRuntime.exports.jsx(Container, {
    width: dimensions.containerWidth,
    height: dimensions.containerHeight,
    children: /* @__PURE__ */ jsxRuntime.exports.jsx(Content, {
      dx,
      dy,
      scale: zoom,
      height: Math.max(focusHeight, dimensions.containerHeight),
      width,
      children: children(focusWidth, startX)
    })
  });
}
function Container({
  width,
  height,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx("code", {
    style: {
      width,
      height,
      position: "relative",
      overflow: "auto"
    },
    className: "ch-code-scroll-parent",
    children
  });
}
function Content({
  dx,
  dy,
  scale,
  height,
  width,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transformOrigin: "top left",
      width,
      height,
      overflow: "hidden"
    },
    className: "ch-code-scroll-content",
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translateX(${dx}px) translateY(${dy}px) scale(${scale})`,
        transformOrigin: "left top",
        width: width / scale,
        height: (height - 2 * dy) / scale
      },
      children
    })
  });
}
function getTweenContentProps(_a2) {
  var {
    codeStep
  } = _a2, rest = __rest(_a2, ["codeStep"]);
  const {
    lineHeight,
    lineWidth
  } = rest.dimensions;
  const paramTween = {
    prev: {
      extremes: [codeStep.firstFocusedLineNumber.prev - 1, codeStep.lastFocusedLineNumber.prev - 1],
      originalContentHeight: codeStep.lineCount.prev * lineHeight,
      lineWidth: lineWidth[0]
    },
    next: {
      extremes: [codeStep.firstFocusedLineNumber.next - 1, codeStep.lastFocusedLineNumber.next - 1],
      originalContentHeight: codeStep.lineCount.next * lineHeight,
      lineWidth: lineWidth[1]
    }
  };
  return map(paramTween, ({
    extremes,
    originalContentHeight,
    lineWidth: lineWidth2
  }) => getContentProps(Object.assign({
    extremes,
    originalContentHeight,
    lineWidth: lineWidth2
  }, rest)));
}
function getContentProps({
  dimensions,
  lineWidth,
  minZoom,
  maxZoom,
  extremes,
  originalContentHeight,
  horizontalCenter
}) {
  const {
    containerWidth,
    containerHeight,
    lineHeight
  } = dimensions;
  const originalFocusHeight = (extremes[1] - extremes[0] + 3) * lineHeight;
  const leftPadding = (dimensions === null || dimensions === void 0 ? void 0 : dimensions.lineNumberWidth) || 16;
  const rightPadding = 16;
  const zoom = Math.max(Math.min((containerWidth - leftPadding - rightPadding) / lineWidth, containerHeight / originalFocusHeight, maxZoom), minZoom);
  const contentHeight = originalContentHeight * zoom;
  const focusStart = (extremes[0] - 1) * lineHeight * zoom;
  const focusEnd = (extremes[1] + 2) * lineHeight * zoom;
  const focusCenter = (focusEnd + focusStart) / 2;
  const focusHeight = focusEnd - focusStart;
  const dy = containerHeight > contentHeight ? (containerHeight - contentHeight) / 2 : clamp$1(containerHeight / 2 - focusCenter, Math.max(containerHeight - contentHeight, -focusStart), 0);
  const dx = horizontalCenter ? Math.max(containerWidth / 2 - lineWidth * zoom / 2, 0) : 0;
  return {
    zoom,
    dx,
    dy,
    focusHeight,
    focusWidth: lineWidth * zoom
  };
}
function clamp$1(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function tweenProp(start, end, progress, interval = [0, 1]) {
  return tween$1({
    fixed: false,
    interval,
    extremes: [start, end],
    ease: easing.easeInOutCubic
  }, progress);
}
function SmoothLines(props) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx(SmoothContainer, __spreadProps(__spreadValues({}, Object.assign({}, props)), {
    children: (focusWidth, startX) => /* @__PURE__ */ jsxRuntime.exports.jsx(Lines, {
      codeStep: props.codeStep,
      focusWidth,
      lineHeight: props.dimensions.lineHeight,
      progress: props.progress,
      theme: props.theme,
      startX,
      lineNumberWidth: props.dimensions.lineNumberWidth
    })
  }));
}
function Lines({
  codeStep,
  progress,
  focusWidth,
  lineHeight,
  startX,
  theme,
  lineNumberWidth
}) {
  const groups = progress < 0.5 ? codeStep.groups.prev : codeStep.groups.next;
  return /* @__PURE__ */ jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: groups.map((group, i) => {
      if (!group.annotation) {
        return /* @__PURE__ */ jsxRuntime.exports.jsx(LineGroup, {
          lines: group.lines,
          t: progress,
          focusWidth,
          lineHeight,
          startX,
          theme,
          lineNumberWidth
        }, i);
      }
      const startY = tween$1(group.lines[0].tweenY, progress);
      const lineCount = group.annotation.lineNumbers.end - group.annotation.lineNumbers.start + 1;
      const Component = group.annotation.Component;
      return /* @__PURE__ */ jsxRuntime.exports.jsx(Component, {
        style: {
          position: "absolute",
          height: lineCount * lineHeight,
          width: "100%",
          transform: `translateY(${startY * lineHeight}px)`
        },
        data: group.annotation.data,
        theme: group.annotation.theme,
        children: /* @__PURE__ */ jsxRuntime.exports.jsx(LineGroup, {
          lines: group.lines,
          t: progress,
          focusWidth,
          lineHeight,
          startY,
          startX,
          theme,
          lineNumberWidth
        })
      }, i);
    })
  });
}
function LineGroup({
  lines,
  focusWidth,
  lineHeight,
  t: t2,
  startX,
  startY = 0,
  theme,
  lineNumberWidth
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children: lines.map((line, key) => {
      const {
        tweenX,
        tweenY,
        focused
      } = line;
      const dx = tween$1(tweenX, t2);
      const dy = tween$1(tweenY, t2);
      const opacity = getOpacity(focused, t2, dx);
      return /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [lineNumberWidth ? /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
          className: "ch-code-line-number",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translate(${dx * focusWidth}px, ${(dy - startY) * lineHeight}px)`,
            width: lineNumberWidth,
            opacity,
            color: getColor(theme, ColorName.LineNumberForeground)
          },
          children: t2 < 0.5 ? line.lineNumber.prev : line.lineNumber.next
        }) : void 0, /* @__PURE__ */ jsxRuntime.exports.jsx(LineContainer, {
          dx: startX + dx * focusWidth,
          dy: (dy - startY) * lineHeight,
          width: focusWidth,
          opacity,
          children: /* @__PURE__ */ jsxRuntime.exports.jsx(LineContent, {
            line,
            progress: t2,
            dx
          })
        })]
      });
    })
  });
}
function LineContent({
  line,
  progress,
  dx
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    style: {
      display: "inline-block",
      width: "100%"
    },
    children: [line.annotatedGroups.map((annotatedGroup, i) => /* @__PURE__ */ jsxRuntime.exports.jsx(AnnotatedTokens, {
      annotatedGroup,
      progress,
      dx
    }, i)), /* @__PURE__ */ jsxRuntime.exports.jsx("br", {})]
  });
}
function AnnotatedTokens({
  annotatedGroup,
  progress,
  dx
}) {
  var _a2, _b, _c;
  const annotated = progress < 0.5 ? annotatedGroup.prev : annotatedGroup.next;
  const tokenGroups = (annotated === null || annotated === void 0 ? void 0 : annotated.groups) || [];
  const Component = (_a2 = annotated === null || annotated === void 0 ? void 0 : annotated.annotation) === null || _a2 === void 0 ? void 0 : _a2.Component;
  const children = tokenGroups.map((group, i) => {
    const opacity = getOpacity(group.focused, progress, dx);
    return /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
      style: {
        opacity
      },
      children: group.element
    }, i + 1);
  });
  return Component ? /* @__PURE__ */ jsxRuntime.exports.jsx(Component, {
    children,
    data: (_b = annotated === null || annotated === void 0 ? void 0 : annotated.annotation) === null || _b === void 0 ? void 0 : _b.data,
    theme: (_c = annotated === null || annotated === void 0 ? void 0 : annotated.annotation) === null || _c === void 0 ? void 0 : _c.theme
  }) : /* @__PURE__ */ jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
    children
  });
}
function LineContainer({
  children,
  dx,
  dy,
  opacity,
  width
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transform: `translate(${dx}px, ${dy}px)`,
      width,
      display: opacity <= 0 ? "none" : void 0
    },
    children
  });
}
const OFF_OPACITY = 0.33;
function getOpacity(focused, progress, dx) {
  return tween$1({
    fixed: false,
    extremes: [focused.prev ? 0.99 : OFF_OPACITY, focused.next ? 0.99 : OFF_OPACITY],
    interval: [0, 1]
  }, progress) - Math.abs(dx) * 1;
}
function useCodeShift({
  tween: tween2,
  theme
}) {
  return useStepParser({
    highlightedLines: map(tween2, (tween3) => tween3.code.lines),
    theme,
    focus: map(tween2, (tween3) => tween3.focus),
    annotations: map(tween2, (tween3) => tween3.annotations)
  });
}
const DEFAULT_MIN_COLUMNS = 10;
function CodeTween(_a2) {
  var {
    tween: tween2,
    progress,
    config
  } = _a2, preProps = __rest(_a2, ["tween", "progress", "config"]);
  const stepInfo = useCodeShift({
    tween: tween2,
    theme: config.theme
  });
  const {
    element,
    dimensions
  } = useDimensions(stepInfo.code, map(tween2, (tween3) => tween3.focus), config.minColumns || DEFAULT_MIN_COLUMNS, config.lineNumbers || false, [config.parentHeight]);
  return !dimensions ? /* @__PURE__ */ jsxRuntime.exports.jsx(BeforeDimensions, {
    element,
    htmlProps: preProps
  }) : /* @__PURE__ */ jsxRuntime.exports.jsx(AfterDimensions, {
    dimensions,
    stepInfo,
    config,
    progress,
    htmlProps: preProps
  });
}
function BeforeDimensions({
  element,
  htmlProps
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx(Wrapper, {
    htmlProps,
    style: {
      overflow: "hidden",
      opacity: 0
    },
    children: element
  });
}
function AfterDimensions({
  config: {
    minZoom = 1,
    maxZoom = 1,
    horizontalCenter = false,
    theme
  },
  dimensions,
  stepInfo,
  progress,
  htmlProps
}) {
  const {
    bg: bg2,
    fg: fg2
  } = getCodeColors(theme);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(Wrapper, {
    htmlProps,
    style: {
      opacity: 1,
      backgroundColor: bg2,
      color: fg2,
      ["colorScheme"]: getColorScheme(theme),
      ["--ch-selection-background"]: getColor(theme, ColorName.SelectionBackground)
    },
    children: /* @__PURE__ */ jsxRuntime.exports.jsx(SmoothLines, {
      codeStep: stepInfo,
      progress,
      dimensions,
      minZoom,
      maxZoom,
      center: horizontalCenter,
      theme
    })
  });
}
function Wrapper({
  htmlProps,
  style,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx("div", __spreadValues({}, Object.assign({}, htmlProps, {
    style: Object.assign(Object.assign({
      margin: 0,
      padding: 0,
      whiteSpace: "pre"
    }, style), htmlProps === null || htmlProps === void 0 ? void 0 : htmlProps.style),
    children
  })));
}
const defaultSpring$1 = {
  stiffness: 120,
  damping: 24,
  mass: 0.2,
  decimals: 3
};
function CodeSpring(_a2) {
  var {
    step,
    config
  } = _a2, htmlProps = __rest(_a2, ["step", "config"]);
  const {
    tween: tween2,
    t: t2
  } = useStepSpring$1(step, config.spring);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTween, __spreadValues({}, Object.assign({
    tween: tween2,
    progress: t2,
    config
  }, htmlProps)));
}
function useStepSpring$1(step, springConfig = defaultSpring$1) {
  const [{
    target,
    steps,
    index
  }, setState] = React.useState({
    target: 2,
    steps: [step, step, step],
    index: 0
  });
  React.useEffect(() => {
    const lastStep = steps[steps.length - 1];
    if (lastStep != step) {
      setState((s) => updateStepSpring$1(s, step, progress));
    }
  }, [step]);
  const [progress] = useSpring(target, springConfig);
  const trioProgress = progress - index;
  const result = trioProgress <= 1 ? {
    tween: {
      prev: steps[0],
      next: steps[1]
    },
    t: trioProgress
  } : {
    tween: {
      prev: steps[1],
      next: steps[2]
    },
    t: trioProgress - 1
  };
  return result;
}
function updateStepSpring$1(state, newStep, progress) {
  const {
    steps,
    target,
    index
  } = state;
  const stepsClone = steps.slice();
  const trioProgress = progress - index;
  if (trioProgress < 1) {
    stepsClone[2] = newStep;
    return Object.assign(Object.assign({}, state), {
      steps: stepsClone
    });
  } else {
    stepsClone[0] = steps[1];
    stepsClone[1] = steps[2];
    stepsClone[2] = newStep;
    return Object.assign(Object.assign({}, state), {
      steps: stepsClone,
      target: target + 1,
      index: index + 1
    });
  }
}
const ClasserContext = react.exports.createContext({});
function ClasserProvider({
  classes,
  children
}) {
  const outer = react.exports.useContext(ClasserContext);
  const mixed = useMerge(outer, classes);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(ClasserContext.Provider, {
    value: mixed,
    children
  });
}
function useClasser(libClassPrefix, innerClasses) {
  const outerClasses = react.exports.useContext(ClasserContext);
  const classes = useMerge(outerClasses, innerClasses);
  return react.exports.useCallback(getClasser(libClassPrefix, classes), [libClassPrefix, classes]);
}
function getClasser(libClassPrefix, classes) {
  return function classer(...libClassSuffixList) {
    const libClassList = libClassSuffixList.map((libClassSuffix) => libClassPrefix + (libClassPrefix && libClassSuffix ? "-" : "") + libClassSuffix);
    const outputList = libClassList.slice();
    libClassList.forEach((libClass) => {
      if (libClass in classes) {
        outputList.push(classes[libClass]);
      }
    });
    return outputList.join(" ");
  };
}
function useMerge(outer, inner) {
  return react.exports.useMemo(() => Object.assign(Object.assign({}, outer), inner), [outer, inner]);
}
const MiniFrame = React.forwardRef(function(_a2, ref) {
  var {
    title,
    children,
    titleBar,
    classes,
    theme,
    zoom = 1,
    overflow
  } = _a2, props = __rest(_a2, ["title", "children", "titleBar", "classes", "theme", "zoom", "overflow"]);
  const c = useClasser("ch-frame", classes);
  const bar = titleBar || /* @__PURE__ */ jsxRuntime.exports.jsx(DefaultTitleBar, {
    title
  });
  const zoomStyle = {
    "--ch-frame-zoom": zoom,
    overflow
  };
  return /* @__PURE__ */ jsxRuntime.exports.jsx(ClasserProvider, {
    classes,
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("div", __spreadProps(__spreadValues({}, Object.assign({}, props, {
      ref
    })), {
      children: /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
        className: c(""),
        children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
          className: c("title-bar"),
          style: {
            background: getColor(theme, ColorName.EditorGroupHeaderBackground)
          },
          children: bar
        }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
          className: c("content"),
          children: /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
            className: c("zoom"),
            style: zoomStyle,
            children
          })
        })]
      })
    }))
  });
});
React.forwardRef(function(_a2, ref) {
  var {
    title,
    children,
    titleBar,
    classes,
    overflow
  } = _a2, props = __rest(_a2, ["title", "children", "titleBar", "classes", "overflow"]);
  const c = useClasser("ch", classes);
  const bar = titleBar || /* @__PURE__ */ jsxRuntime.exports.jsx(DefaultTitleBar, {
    title
  });
  return /* @__PURE__ */ jsxRuntime.exports.jsx(ClasserProvider, {
    classes,
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("div", __spreadProps(__spreadValues({}, Object.assign({}, props, {
      ref
    })), {
      children: /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
        className: c("simple-frame"),
        children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
          className: c("frame-title-bar"),
          children: bar
        }), children]
      })
    }))
  });
});
function DefaultTitleBar({
  title
}) {
  const c = useClasser("ch-frame");
  return /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("left-bar"),
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(FrameButtons, {})
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("middle-bar"),
      children: title
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("right-bar")
    })]
  });
}
function FrameButtons() {
  const c = useClasser("ch-frame");
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    className: c("buttons"),
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("button", "button-left")
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("button-space")
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("button", "button-middle")
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("button-space")
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: c("button", "button-right")
    })]
  });
}
const EditorFrame = React.forwardRef(function InnerEditorFrame(_a2, ref) {
  var _b;
  var {
    northPanel,
    southPanel,
    terminalPanel,
    style,
    height,
    button,
    theme,
    className,
    onTabClick
  } = _a2, rest = __rest(_a2, ["northPanel", "southPanel", "terminalPanel", "style", "height", "button", "theme", "className", "onTabClick"]);
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", __spreadProps(__spreadValues({}, Object.assign({
    ref
  }, rest, {
    className: "ch-editor-frame",
    style: Object.assign({
      background: getColor(theme, ColorName.EditorGroupHeaderBackground)
    }, style)
  })), {
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: "ch-frame-title-bar",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(TabsContainer, {
        tabs: northPanel.tabs,
        showFrameButtons: true,
        button,
        panel: "north",
        theme,
        onTabClick
      })
    }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      "data-ch-panel": "north",
      style: northPanel.style,
      children: northPanel.children
    }), southPanel && /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        className: "ch-frame-title-bar",
        style: {
          transform: (_b = southPanel.style) === null || _b === void 0 ? void 0 : _b.transform
        },
        children: /* @__PURE__ */ jsxRuntime.exports.jsx(TabsContainer, {
          tabs: southPanel.tabs,
          showFrameButtons: false,
          topBorder: true,
          panel: "south",
          theme,
          onTabClick
        })
      }), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        "data-ch-panel": "south",
        children: southPanel.children,
        style: southPanel.style
      })]
    })]
  }));
});
function TabsContainer({
  tabs,
  button,
  showFrameButtons,
  topBorder,
  panel,
  theme,
  onTabClick
}) {
  const c = useClasser("ch-editor-tab");
  return /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [topBorder && /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      style: {
        position: "absolute",
        height: "1px",
        background: getColor(theme, ColorName.EditorGroupBorder),
        width: "100%",
        top: 0,
        zIndex: 1
      }
    }), showFrameButtons ? /* @__PURE__ */ jsxRuntime.exports.jsx(FrameButtons, {}) : /* @__PURE__ */ jsxRuntime.exports.jsx("div", {}), tabs.map(({
      title,
      active,
      style
    }) => /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      title,
      "data-ch-tab": panel,
      className: c("", active ? "active" : "inactive"),
      style: Object.assign(Object.assign({}, style), {
        background: getColor(theme, active ? ColorName.ActiveTabBackground : ColorName.InactiveTabBackground),
        color: getColor(theme, active ? ColorName.ActiveTabForeground : ColorName.InactiveTabForeground),
        borderRightColor: getColor(theme, ColorName.TabBorder),
        borderBottomColor: getColor(theme, active ? ColorName.ActiveTabBottomBorder : ColorName.InactiveTabBackground)
      }),
      onClick: onTabClick && (() => onTabClick(title)),
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(TabTitle, {
        title
      })
    }, title)), /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      style: {
        flex: 1
      }
    }), button]
  });
}
function TabTitle({
  title
}) {
  if (!title) {
    return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {});
  }
  const separatorIndex = title.lastIndexOf("/") + 1;
  const filename = title.substring(separatorIndex);
  const folder = title.substring(0, separatorIndex);
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("span", {
      style: {
        opacity: 0.5
      },
      children: folder
    }), filename]
  });
}
function getCommands(text) {
  const [, ...lines] = text.split(/^\$\s*/gm);
  const commands = lines.map((c) => {
    const [run, ...outputLines] = c.split(/\r?\n/);
    return {
      run,
      output: outputLines.length > 0 ? outputLines.join("\n") : null
    };
  });
  const lastCommand = commands[commands.length - 1];
  const isRunning = commands.length > 0 && lastCommand.output != null;
  const title = isRunning ? lastCommand.run.split(/(\s+)/)[0] : "bash";
  return {
    title,
    isRunning,
    commands
  };
}
const prompt = /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
  className: "ch-terminal-prompt",
  children: "$"
});
function TerminalContent({
  text,
  progress = 1,
  style
}) {
  const commands = parse(text, progress);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("pre", {
    style,
    className: "ch-terminal-content",
    children: commands.map(({
      run,
      output
    }, i) => /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
        children: [prompt, " ", /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
          children: run
        })]
      }), output && /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        className: "ch-terminal-output",
        children: output
      })]
    }))
  });
}
function parse(text, progress) {
  if (!text)
    return [];
  const chars = Math.round(text.length * progress);
  const {
    commands
  } = getCommands(text.slice(0, chars));
  return commands;
}
function InnerTerminalTransition({
  prev = "",
  prevKey,
  next = "",
  nextKey,
  progress
}) {
  return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
    className: "ch-terminal",
    children: /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      style: {
        position: "relative",
        transform: `translateY(-${progress * 100}%)`
      },
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx(TerminalContent, {
        text: prev,
        progress: 1
      }, prevKey), /* @__PURE__ */ jsxRuntime.exports.jsx(TerminalContent, {
        style: {
          position: "absolute"
        },
        text: next,
        progress
      }, nextKey)]
    })
  });
}
function InnerTerminalTransitions({
  steps,
  progress
}) {
  const textSteps = steps.map((s) => s.text);
  const stepProgress = progress % 1;
  const prevIndex = clamp(Math.floor(progress), 0, steps.length - 1);
  const nextIndex = prevIndex + 1;
  return /* @__PURE__ */ jsxRuntime.exports.jsx(InnerTerminalTransition, {
    prev: textSteps[prevIndex],
    prevKey: prevIndex,
    next: textSteps[nextIndex] || "",
    nextKey: nextIndex,
    progress: stepProgress
  });
}
function clamp(x2, min, max) {
  return Math.min(Math.max(x2, min), max);
}
function TerminalPanel({
  prev,
  next,
  t: t2,
  backward
}) {
  const height = getHeight({
    prev,
    next,
    t: t2,
    backward
  });
  return !height ? null : /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    className: "ch-editor-terminal",
    style: {
      height
    },
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: "ch-editor-terminal-tab",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
        children: "Terminal"
      })
    }), /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-editor-terminal-content",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx(InnerTerminalTransitions, {
        steps: [{
          text: prev || ""
        }, {
          text: next || ""
        }],
        progress: t2
      }), ")"]
    })]
  });
}
function getHeight({
  prev,
  next,
  t: t2,
  backward
}) {
  if (!prev && !next)
    return 0;
  if (!prev && next)
    return MAX_HEIGHT * Math.min(t2 * 4, 1);
  if (prev && !next)
    return MAX_HEIGHT * Math.max(1 - t2 * 4, 0);
  return MAX_HEIGHT;
}
const MAX_HEIGHT = 150;
function useTransition(ref, prev, next, t2, backward, codeConfig) {
  const {
    prevSnapshot,
    nextSnapshot
  } = useSnapshots(ref, prev, next);
  if (!prevSnapshot) {
    return startingPosition(prev, next, codeConfig);
  }
  if (!nextSnapshot) {
    return endingPosition(prev, next, codeConfig);
  }
  if (t2 === 1) {
    return endingPosition(prev, next, codeConfig);
  }
  const inputSouthPanel = prev.southPanel || next.southPanel;
  const {
    prevNorthFile,
    prevSouthFile,
    nextNorthFile,
    nextSouthFile
  } = getStepFiles(prev, next, t2 == 0 || backward);
  const {
    northStyle,
    southStyle
  } = getPanelStyles(prevSnapshot, nextSnapshot, t2);
  const {
    northTabs,
    southTabs
  } = getTabs(prevSnapshot, nextSnapshot, prevNorthFile.name, prevSouthFile === null || prevSouthFile === void 0 ? void 0 : prevSouthFile.name, t2);
  return {
    northPanel: {
      tabs: northTabs,
      style: northStyle,
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: prevNorthFile,
        nextFile: nextNorthFile,
        t: t2,
        parentHeight: northStyle.height || northStyle.minHeight
      })
    },
    southPanel: inputSouthPanel && {
      tabs: southTabs,
      style: southStyle,
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: prevSouthFile,
        nextFile: nextSouthFile,
        t: t2,
        parentHeight: (southStyle === null || southStyle === void 0 ? void 0 : southStyle.height) || (southStyle === null || southStyle === void 0 ? void 0 : southStyle.minHeight)
      })
    }
  };
}
function startingPosition(prev, next, codeConfig) {
  const inputNorthPanel = prev.northPanel;
  const inputSouthPanel = prev.southPanel;
  const {
    prevNorthFile,
    prevSouthFile,
    nextNorthFile,
    nextSouthFile
  } = getStepFiles(prev, next, true);
  return {
    northPanel: {
      tabs: inputNorthPanel.tabs.map((title) => ({
        title,
        active: title === inputNorthPanel.active,
        style: {}
      })),
      style: {
        flexGrow: 1,
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: prevNorthFile,
        nextFile: prevNorthFile,
        t: 0,
        parentHeight: "0"
      })
    },
    southPanel: inputSouthPanel && {
      tabs: inputSouthPanel.tabs.map((title) => ({
        title,
        active: title === inputSouthPanel.active,
        style: {}
      })),
      style: {
        flexGrow: 1,
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: prevSouthFile,
        nextFile: prevSouthFile,
        t: 0,
        parentHeight: "0"
      })
    }
  };
}
function endingPosition(prev, next, codeConfig) {
  var _a2;
  const inputNorthPanel = next.northPanel;
  const inputSouthPanel = next.southPanel;
  let {
    prevNorthFile,
    prevSouthFile,
    nextNorthFile,
    nextSouthFile
  } = getStepFiles(prev, next, false);
  const isTwoToOneSouth = !inputSouthPanel && inputNorthPanel.active === ((_a2 = prev === null || prev === void 0 ? void 0 : prev.southPanel) === null || _a2 === void 0 ? void 0 : _a2.active);
  if (isTwoToOneSouth) {
    nextNorthFile = nextSouthFile;
  }
  return {
    northPanel: {
      tabs: inputNorthPanel.tabs.map((title) => ({
        title,
        active: title === inputNorthPanel.active,
        style: {}
      })),
      style: {
        flexGrow: 1,
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: nextNorthFile,
        nextFile: nextNorthFile,
        t: 1,
        parentHeight: "1"
      })
    },
    southPanel: inputSouthPanel && {
      tabs: inputSouthPanel.tabs.map((title) => ({
        title,
        active: title === inputSouthPanel.active,
        style: {}
      })),
      style: {
        flexGrow: 1,
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTransition, {
        codeConfig,
        prevFile: nextSouthFile,
        nextFile: nextSouthFile,
        t: 1,
        parentHeight: "1"
      })
    }
  };
}
function CodeTransition({
  prevFile,
  nextFile,
  t: t2,
  codeConfig,
  parentHeight
}) {
  var _a2;
  const htmlProps = Object.assign(Object.assign({}, codeConfig === null || codeConfig === void 0 ? void 0 : codeConfig.htmlProps), {
    style: Object.assign({
      height: "100%"
    }, (_a2 = codeConfig === null || codeConfig === void 0 ? void 0 : codeConfig.htmlProps) === null || _a2 === void 0 ? void 0 : _a2.style)
  });
  return /* @__PURE__ */ jsxRuntime.exports.jsx(CodeTween, __spreadValues({}, Object.assign({
    progress: t2,
    tween: {
      prev: prevFile,
      next: nextFile
    },
    config: Object.assign(Object.assign({}, codeConfig), {
      parentHeight
    })
  }, htmlProps)));
}
function getStepFiles(prev, next, backward) {
  var _a2, _b;
  const pn = prev.northPanel.active;
  const nn = next.northPanel.active;
  const ps = (_a2 = prev.southPanel) === null || _a2 === void 0 ? void 0 : _a2.active;
  const ns = (_b = next.southPanel) === null || _b === void 0 ? void 0 : _b.active;
  const pnFile = prev.files.find((f2) => f2.name === pn);
  const nnFile = next.files.find((f2) => f2.name === nn);
  const psFile = ps ? prev.files.find((f2) => f2.name === ps) : null;
  const nsFile = ns ? next.files.find((f2) => f2.name === ns) : null;
  const oneToTwoSouth = !ps && pn === ns;
  if (oneToTwoSouth) {
    return {
      prevNorthFile: nnFile,
      nextNorthFile: nnFile,
      prevSouthFile: pnFile,
      nextSouthFile: nsFile
    };
  }
  const twoToOneSouth = !ns && nn === ps;
  if (twoToOneSouth) {
    return {
      prevNorthFile: pnFile,
      nextNorthFile: pnFile,
      prevSouthFile: psFile,
      nextSouthFile: nnFile
    };
  }
  const prevNorthFile = pn === nn ? pnFile : backward ? pnFile : nnFile;
  const nextNorthFile = pn === nn ? nnFile : backward ? pnFile : nnFile;
  const prevSouthFile = ps === ns ? psFile : backward ? psFile || nsFile : nsFile || psFile;
  const nextSouthFile = ps === ns ? nsFile : backward ? psFile || nsFile : nsFile || psFile;
  return {
    prevNorthFile,
    nextNorthFile,
    prevSouthFile,
    nextSouthFile
  };
}
function getPanelStyles(prev, next, t2) {
  if (prev.southHeight === null && next.southHeight === null) {
    return {
      northStyle: {
        minHeight: prev.northHeight
      }
    };
  }
  if (prev.southHeight !== null && next.southHeight === null && next.northKey !== prev.southKey) {
    return {
      northStyle: {
        minHeight: tween(prev.northHeight, next.northHeight, t2)
      },
      southStyle: {
        minHeight: prev.southHeight
      }
    };
  }
  if (prev.southHeight !== null && next.southHeight === null && prev.southKey === next.northKey) {
    return {
      northStyle: {
        minHeight: prev.northHeight
      },
      southStyle: {
        position: "relative",
        minHeight: tween(prev.southHeight, next.northHeight, t2),
        transform: `translateY(${tween(0, -(prev.northHeight + prev.titleBarHeight), t2)}px)`
      }
    };
  }
  if (prev.southHeight === null && next.southHeight !== null && prev.northKey !== next.southKey) {
    return {
      northStyle: {
        minHeight: tween(prev.northHeight, next.northHeight, t2)
      },
      southStyle: {
        position: "relative",
        minHeight: next.southHeight
      }
    };
  }
  if (prev.southHeight === null && next.southHeight !== null && prev.northKey === next.southKey) {
    return {
      northStyle: {
        minHeight: next.northHeight
      },
      southStyle: {
        position: "relative",
        minHeight: tween(prev.northHeight, next.southHeight, t2),
        transform: `translateY(${tween(-(next.northHeight + next.titleBarHeight), 0, t2)}px)`
      }
    };
  }
  return {
    northStyle: {
      minHeight: tween(prev.northHeight, next.northHeight, t2)
    },
    southStyle: {
      minHeight: tween(prev.southHeight, next.southHeight, t2)
    }
  };
}
function tween(a, b, t2) {
  return a + (b - a) * t2;
}
function getTabs(prevSnapshot, nextSnapshot, northActive, southActive, t2) {
  if (!prevSnapshot.southTabs && isPresent(southActive, prevSnapshot.northTabs)) {
    return {
      northTabs: getPanelTabs(nextSnapshot.northTabs, nextSnapshot.southTabs, prevSnapshot.southTabs, prevSnapshot.northTabs, northActive, t2),
      southTabs: getPanelTabs(nextSnapshot.southTabs, nextSnapshot.northTabs, prevSnapshot.northTabs, prevSnapshot.southTabs, southActive, t2)
    };
  }
  if (!nextSnapshot.southTabs && isPresent(southActive, nextSnapshot.northTabs)) {
    return {
      northTabs: getPanelTabs(nextSnapshot.southTabs, nextSnapshot.northTabs, prevSnapshot.northTabs, prevSnapshot.southTabs, northActive, t2),
      southTabs: getPanelTabs(nextSnapshot.northTabs, nextSnapshot.southTabs, prevSnapshot.southTabs, prevSnapshot.northTabs, southActive, t2)
    };
  }
  return {
    northTabs: getPanelTabs(nextSnapshot.northTabs, nextSnapshot.southTabs, prevSnapshot.northTabs, prevSnapshot.southTabs, northActive, t2),
    southTabs: getPanelTabs(nextSnapshot.southTabs, nextSnapshot.northTabs, prevSnapshot.southTabs, prevSnapshot.northTabs, southActive, t2)
  };
}
function getPanelTabs(nextSnapshot, otherNextSnapshot, prevSnapshot, otherPrevSnapshot, active, t2) {
  const oldTabs = !nextSnapshot ? [] : Object.keys(nextSnapshot).filter((filename) => isPresent(filename, prevSnapshot) || !prevSnapshot).map((filename) => {
    const prev = prevSnapshot && prevSnapshot[filename];
    const next = nextSnapshot[filename];
    const dx = prev ? prev.left + (next.left - prev.left) * t2 : next.left;
    const width = prev ? prev.width + (next.width - prev.width) * t2 : next.width;
    return {
      active: filename === active,
      title: filename,
      style: {
        position: "absolute",
        transform: `translateX(${dx}px)`,
        width
      }
    };
  });
  const totallyNewTabs = !nextSnapshot ? [] : Object.keys(nextSnapshot).filter((filename) => prevSnapshot && !isPresent(filename, prevSnapshot)).map((filename) => {
    const next = nextSnapshot[filename];
    return {
      active: filename === active,
      title: filename,
      style: {
        position: "absolute",
        transform: `translateX(${next.left}px)`,
        opacity: t2,
        width: next.width
      }
    };
  });
  !nextSnapshot ? [] : Object.keys(nextSnapshot).filter((filename) => isPresent(filename, otherPrevSnapshot)).map((filename) => {
    const prev = otherPrevSnapshot[filename];
    const next = nextSnapshot[filename];
    const dx = next.left - prev.left;
    return {
      active: filename === active,
      title: filename,
      style: {
        position: "absolute",
        transform: `translateX(${dx}px)`
      }
    };
  });
  const disappearingTabs = !prevSnapshot ? [] : Object.keys(prevSnapshot).filter((filename) => !isPresent(filename, nextSnapshot)).map((filename) => {
    const prev = prevSnapshot[filename];
    return {
      active: filename === active,
      title: filename,
      style: {
        position: "absolute",
        opacity: 1 - t2,
        transform: `translateX(${prev.left}px)`,
        width: prev.width
      }
    };
  });
  return [
    ...totallyNewTabs,
    ...oldTabs,
    ...disappearingTabs
  ];
}
function isPresent(filename, snapshot) {
  return snapshot && filename && filename in snapshot;
}
const useLayoutEffect$2 = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useSnapshots(ref, prev, next) {
  const [{
    prevSnapshot,
    nextSnapshot
  }, setState] = React.useState({
    prevSnapshot: null,
    nextSnapshot: null
  });
  useLayoutEffect$2(() => {
    if (prevSnapshot || nextSnapshot) {
      setState({
        prevSnapshot: null,
        nextSnapshot: null
      });
    }
  }, [prev, next]);
  useLayoutEffect$2(() => {
    if (!prevSnapshot) {
      setState((s) => Object.assign(Object.assign({}, s), {
        prevSnapshot: Object.assign(Object.assign({}, getPanelSnapshot(ref.current, prev)), getTabsSnapshot(ref.current, prev))
      }));
    } else if (!nextSnapshot) {
      setState((s) => Object.assign(Object.assign({}, s), {
        nextSnapshot: Object.assign(Object.assign({}, getPanelSnapshot(ref.current, next)), getTabsSnapshot(ref.current, next))
      }));
    }
  });
  return {
    prevSnapshot,
    nextSnapshot
  };
}
function getPanelSnapshot(parent, step) {
  var _a2;
  const northElement = parent.querySelector("[data-ch-panel='north']");
  const southElement = parent.querySelector("[data-ch-panel='south']");
  const bar = parent.querySelector(".ch-frame-title-bar");
  return {
    titleBarHeight: bar.getBoundingClientRect().height,
    northHeight: northElement.getBoundingClientRect().height,
    northKey: step.northPanel.active,
    southHeight: (southElement === null || southElement === void 0 ? void 0 : southElement.getBoundingClientRect().height) || null,
    southKey: (_a2 = step.southPanel) === null || _a2 === void 0 ? void 0 : _a2.active
  };
}
function getTabsSnapshot(parent, step) {
  var _a2;
  const northTabs = Array.from(parent.querySelectorAll("[data-ch-tab='north']"));
  const southTabs = Array.from(parent.querySelectorAll("[data-ch-tab='south']"));
  return {
    northTabs: getTabsDimensions(northTabs, step.northPanel.active),
    southTabs: getTabsDimensions(southTabs, (_a2 = step.southPanel) === null || _a2 === void 0 ? void 0 : _a2.active)
  };
}
function getTabsDimensions(tabElements, active) {
  if (!tabElements[0]) {
    return null;
  }
  const parent = tabElements[0].parentElement;
  const parentLeft = parent.getBoundingClientRect().left;
  const dimensions = {};
  tabElements.forEach((child) => {
    const filename = child.getAttribute("title");
    const rect = child.getBoundingClientRect();
    dimensions[filename] = {
      left: rect.left - parentLeft,
      width: rect.width,
      active: filename === active
    };
  });
  return dimensions;
}
const DEFAULT_STEP = {
  files: [{
    code: {
      lines: [],
      lang: "js"
    },
    focus: "",
    name: ""
  }],
  northPanel: {
    active: "",
    tabs: [""],
    heightRatio: 1
  }
};
function EditorTween(_a2) {
  var {
    prev = DEFAULT_STEP,
    next,
    t: t2,
    backward,
    codeConfig,
    frameProps = {}
  } = _a2, divProps = __rest(_a2, ["prev", "next", "t", "backward", "codeConfig", "frameProps"]);
  const ref = React.createRef();
  const {
    northPanel,
    southPanel
  } = useTransition(ref, prev, next || prev, t2, backward, codeConfig);
  const [frozenHeight, freezeHeight] = React.useState(void 0);
  useLayoutEffect$3(() => {
    var _a3;
    const height = (_a3 = ref.current) === null || _a3 === void 0 ? void 0 : _a3.getBoundingClientRect().height;
    freezeHeight(height);
  }, []);
  const framePropsWithHeight = Object.assign(Object.assign(Object.assign({}, frameProps), divProps), {
    style: Object.assign(Object.assign({}, frameProps === null || frameProps === void 0 ? void 0 : frameProps.style), divProps === null || divProps === void 0 ? void 0 : divProps.style)
  });
  if (frozenHeight) {
    framePropsWithHeight.style.height = frozenHeight;
    framePropsWithHeight.style.maxHeight = frozenHeight;
  }
  const terminalPanel = /* @__PURE__ */ jsxRuntime.exports.jsx(TerminalPanel, {
    prev: prev.terminal,
    next: (next || prev).terminal,
    t: t2,
    backward
  });
  return /* @__PURE__ */ jsxRuntime.exports.jsx(EditorFrame, __spreadValues({}, Object.assign({
    ref
  }, framePropsWithHeight, {
    northPanel,
    southPanel,
    terminalPanel,
    theme: codeConfig.theme
  })));
}
const defaultSpring = {
  stiffness: 120,
  damping: 24,
  mass: 0.2,
  decimals: 3
};
function EditorSpring(_a2) {
  var {
    northPanel,
    southPanel,
    files,
    terminal,
    springConfig
  } = _a2, props = __rest(_a2, ["northPanel", "southPanel", "files", "terminal", "springConfig"]);
  const step = React.useMemo(() => {
    return {
      northPanel,
      southPanel,
      files,
      terminal
    };
  }, [northPanel, southPanel, files, terminal]);
  const {
    prev,
    next,
    t: t2
  } = useStepSpring(step, springConfig);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(EditorTween, __spreadValues({}, Object.assign({
    t: t2,
    backward: false,
    prev,
    next
  }, props)));
}
function useStepSpring(step, springConfig = defaultSpring) {
  const [{
    target,
    steps,
    index
  }, setState] = React.useState({
    target: 2,
    steps: [step, step, step],
    index: 0
  });
  React.useEffect(() => {
    const lastStep = steps[steps.length - 1];
    if (lastStep != step) {
      setState((s) => updateStepSpring(s, step, progress));
    }
  }, [step]);
  const [progress] = useSpring(target, springConfig);
  const trioProgress = progress - index;
  const result = trioProgress <= 1 ? {
    prev: steps[0],
    next: steps[1],
    t: trioProgress
  } : {
    prev: steps[1],
    next: steps[2],
    t: trioProgress - 1
  };
  return result;
}
function updateStepSpring(state, newStep, progress) {
  const {
    steps,
    target,
    index
  } = state;
  const stepsClone = steps.slice();
  const trioProgress = progress - index;
  if (trioProgress < 1) {
    stepsClone[2] = newStep;
    return Object.assign(Object.assign({}, state), {
      steps: stepsClone
    });
  } else {
    stepsClone[0] = steps[1];
    stepsClone[1] = steps[2];
    stepsClone[2] = newStep;
    return Object.assign(Object.assign({}, state), {
      steps: stepsClone,
      target: target + 1,
      index: index + 1
    });
  }
}
function Code(props) {
  const [step, setStep] = React.useState(props);
  function onTabClick(filename) {
    const newStep = updateEditorStep(step, filename, null);
    setStep(Object.assign(Object.assign({}, step), newStep));
  }
  return /* @__PURE__ */ jsxRuntime.exports.jsx(InnerCode, __spreadValues({}, Object.assign({}, step, {
    onTabClick
  })));
}
function InnerCode(_a2) {
  var {
    onTabClick
  } = _a2, props = __rest(_a2, ["onTabClick"]);
  if (!props.southPanel && props.files.length === 1 && !props.files[0].name) {
    return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: "ch-codeblock not-prose",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(CodeSpring, {
        className: "ch-code",
        config: props.codeConfig,
        step: props.files[0]
      })
    });
  } else {
    const frameProps = Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.frameProps), {
      onTabClick
    });
    return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: "ch-codegroup not-prose",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(EditorSpring, __spreadValues({}, Object.assign({}, props, {
        frameProps
      })))
    });
  }
}
function updateEditorStep(step, filename, focus) {
  const name = filename || step.northPanel.active;
  const newFiles = step.files.map((file) => file.name === name ? Object.assign(Object.assign({}, file), {
    focus: focus === null ? file.focus : focus
  }) : file);
  let northPanel = Object.assign({}, step.northPanel);
  let southPanel = step.southPanel && Object.assign({}, step.southPanel);
  if (step.northPanel.tabs.includes(name)) {
    northPanel.active = name;
  } else if (southPanel) {
    southPanel.active = name;
  }
  return {
    files: newFiles,
    northPanel,
    southPanel
  };
}
const SectionContext = React.createContext({
  props: null,
  setFocus: () => {
  }
});
function Section(_a2) {
  var {
    children
  } = _a2, props = __rest(_a2, ["children"]);
  const [state, setState] = React.useState(props);
  const resetFocus = () => setState(props);
  const setFocus = ({
    fileName,
    focus,
    id: id2
  }) => {
    const newStep = updateEditorStep(state, fileName, focus);
    setState(Object.assign(Object.assign(Object.assign({}, state), newStep), {
      selectedId: id2
    }));
  };
  const rest = __rest(state, ["selectedId"]);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("section", {
    children: /* @__PURE__ */ jsxRuntime.exports.jsx(SectionContext.Provider, {
      value: {
        props: rest,
        setFocus
      },
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(LinkableSection, {
        onActivation: setFocus,
        onReset: resetFocus,
        children
      })
    })
  });
}
function SectionCode() {
  const {
    props,
    setFocus
  } = React.useContext(SectionContext);
  const onTabClick = (filename) => {
    setFocus({
      fileName: filename,
      focus: null,
      id: ""
    });
  };
  return /* @__PURE__ */ jsxRuntime.exports.jsx(InnerCode, __spreadValues({}, Object.assign({}, props, {
    onTabClick
  })));
}
function SectionLink({
  focus,
  file,
  children,
  id: id2
}) {
  const {
    activate,
    reset,
    activatedId
  } = React.useContext(LinkableContext);
  const isSelected = activatedId === id2;
  return /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
    className: "ch-section-link",
    "data-active": isSelected,
    children,
    onMouseOver: () => activate({
      fileName: file,
      focus,
      id: id2
    }),
    onMouseOut: reset
  });
}
const LinkableContext = React.createContext({
  activatedId: void 0,
  activate: () => {
  },
  reset: () => {
  }
});
function LinkableSection({
  onActivation,
  onReset,
  children
}) {
  const [activatedId, setActivatedId] = React.useState(void 0);
  const activate = React.useCallback((x2) => {
    setActivatedId(x2.id);
    onActivation(x2);
  }, [onActivation]);
  const reset = React.useCallback(() => {
    setActivatedId(void 0);
    onReset();
  }, [onReset]);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(LinkableContext.Provider, {
    value: {
      activate,
      reset,
      activatedId
    },
    children
  });
}
function Back() {
  const c = useClasser("ch-browser");
  return /* @__PURE__ */ jsxRuntime.exports.jsx("svg", {
    fill: "currentColor",
    preserveAspectRatio: "xMidYMid meet",
    height: "1em",
    viewBox: "13 10 14 23",
    className: c("button", "back-button"),
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("g", {
      children: /* @__PURE__ */ jsxRuntime.exports.jsx("path", {
        d: "m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"
      })
    })
  });
}
function Forward() {
  const c = useClasser("ch-browser");
  return /* @__PURE__ */ jsxRuntime.exports.jsx("svg", {
    fill: "currentColor",
    preserveAspectRatio: "xMidYMid meet",
    height: "1em",
    viewBox: "13 10 14 23",
    className: c("button", "forward-button"),
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("g", {
      children: /* @__PURE__ */ jsxRuntime.exports.jsx("path", {
        d: "m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"
      })
    })
  });
}
function Open({
  href,
  style
}) {
  const c = useClasser("ch-browser");
  return /* @__PURE__ */ jsxRuntime.exports.jsx("a", {
    className: c("button", "open-button"),
    title: "Open in new tab",
    href,
    style,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "3 3 18 18",
      height: "1em",
      width: "1em",
      className: c("open-icon"),
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx("path", {
        d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      })
    })
  });
}
function TitleBar({
  url,
  linkUrl,
  theme
}) {
  const inputBorder = getColor(theme, ColorName.InputBorder);
  return /* @__PURE__ */ jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx(FrameButtons, {}), /* @__PURE__ */ jsxRuntime.exports.jsx(Back, {}), /* @__PURE__ */ jsxRuntime.exports.jsx(Forward, {}), /* @__PURE__ */ jsxRuntime.exports.jsx("input", {
      value: url || "",
      readOnly: true,
      style: {
        background: getColor(theme, ColorName.InputBackground),
        color: getColor(theme, ColorName.InputForeground),
        border: inputBorder ? `1px solid ${inputBorder}` : void 0
      }
    }), /* @__PURE__ */ jsxRuntime.exports.jsx(Open, {
      href: linkUrl,
      style: {
        color: getColor(theme, ColorName.EditorForeground)
      }
    })]
  });
}
function useSteps$1(steps) {
  return React.useMemo(() => {
    if (!steps) {
      return [{
        zoom: 1
      }];
    }
    return steps.map((step) => {
      const {
        displayUrl,
        loadUrl
      } = transformUrl(step.url, step.loadUrl, step.prependOrigin);
      return {
        zoom: step.zoom || 1,
        displayUrl,
        loadUrl,
        children: step.children
      };
    });
  }, [steps]);
}
function transformUrl(url, loadUrl, prependOrigin) {
  const currentOrigin = typeof window !== "undefined" ? window.origin : "";
  const displayUrl = url && prependOrigin === true ? currentOrigin + url : url;
  return {
    displayUrl,
    loadUrl: loadUrl || displayUrl
  };
}
const MiniBrowserHike = React.forwardRef(MiniBrowserWithRef);
function MiniBrowserWithRef(_a2, ref) {
  var {
    progress = 0,
    backward = false,
    steps: ogSteps,
    transition = "none",
    classes,
    theme
  } = _a2, props = __rest(_a2, ["progress", "backward", "steps", "transition", "classes", "theme"]);
  const c = useClasser("ch-mini-browser", classes);
  const steps = useSteps$1(ogSteps);
  const stepIndex = Math.round(progress);
  const {
    zoom,
    displayUrl,
    loadUrl,
    children
  } = steps[stepIndex];
  return /* @__PURE__ */ jsxRuntime.exports.jsx(MiniFrame, __spreadProps(__spreadValues({}, Object.assign({}, props, {
    zoom,
    className: `${c("")} ${props.className || ""}`,
    style: Object.assign(Object.assign({}, transitionStyle({
      progress,
      transition
    })), props.style),
    classes,
    titleBar: /* @__PURE__ */ jsxRuntime.exports.jsx(TitleBar, {
      url: displayUrl,
      linkUrl: loadUrl,
      theme
    }),
    theme
  })), {
    children: children || /* @__PURE__ */ jsxRuntime.exports.jsx("iframe", {
      ref,
      src: loadUrl
    })
  }));
}
function transitionStyle({
  progress,
  transition
}) {
  if (transition === "slide") {
    const X2 = 50;
    const t2 = progress - Math.floor(progress);
    const x2 = t2 <= 0.5 ? -X2 * t2 : X2 - X2 * t2;
    const o = Math.abs(t2 - 0.5) * 2;
    return {
      transform: `translateX(${x2}px)`,
      opacity: o * o
    };
  }
  return {};
}
function MiniBrowser(_a2) {
  var {
    url,
    loadUrl,
    prependOrigin,
    children,
    zoom
  } = _a2, rest = __rest(_a2, ["url", "loadUrl", "prependOrigin", "children", "zoom"]);
  const [steps, progress] = useSteps({
    url,
    loadUrl,
    prependOrigin,
    children,
    zoom
  });
  return /* @__PURE__ */ jsxRuntime.exports.jsx(MiniBrowserHike, __spreadValues({}, Object.assign({}, rest, {
    steps,
    progress
  })));
}
function useSteps({
  url,
  loadUrl,
  prependOrigin,
  children,
  zoom
}) {
  const [state, setState] = React.useState({
    target: 0,
    steps: [{
      url,
      loadUrl,
      prependOrigin,
      children,
      zoom
    }]
  });
  React.useEffect(() => {
    const last = state.steps[state.steps.length - 1];
    if (last.url !== url || last.loadUrl !== loadUrl || last.prependOrigin !== prependOrigin || last.children !== children) {
      setState((s) => ({
        target: s.target + 1,
        steps: [...s.steps, {
          url,
          loadUrl,
          prependOrigin,
          children,
          zoom
        }]
      }));
    }
  }, [url, loadUrl, prependOrigin, children, zoom]);
  const [progress] = useSpring(state.target, {
    stiffness: 100,
    decimals: 3
  });
  return [state.steps, progress];
}
function Preview(_a2) {
  var {
    className,
    files,
    presetConfig,
    show,
    children,
    codeConfig,
    style
  } = _a2, rest = __rest(_a2, ["className", "files", "presetConfig", "show", "children", "codeConfig", "style"]);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
    className: "ch-preview" + (className ? " " + className : ""),
    style,
    children: /* @__PURE__ */ jsxRuntime.exports.jsx(MiniBrowser, __spreadValues({}, Object.assign({
      loadUrl: show,
      theme: codeConfig.theme
    }, rest, {
      children: presetConfig ? /* @__PURE__ */ jsxRuntime.exports.jsx(SandpackPreview, {
        files,
        presetConfig
      }) : children
    })))
  });
}
function SandpackPreview({
  files,
  presetConfig
}) {
  const iframeRef = React.useRef(null);
  const clientRef = React.useRef(null);
  React.useEffect(() => {
    clientRef.current = new SandpackClient(iframeRef.current, Object.assign(Object.assign({}, presetConfig), {
      files: mergeFiles(presetConfig.files, files)
    }), {
      showOpenInCodeSandbox: false
    });
  }, []);
  React.useEffect(() => {
    if (clientRef.current) {
      clientRef.current.updatePreview(Object.assign(Object.assign({}, presetConfig), {
        files: mergeFiles(presetConfig.files, files)
      }));
    }
  }, [files]);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("iframe", {
    ref: iframeRef
  });
}
function mergeFiles(csbFiles, chFiles) {
  const result = Object.assign({}, csbFiles);
  chFiles.forEach((file) => {
    result["/" + file.name] = {
      code: file.code.lines.map((l2) => l2.tokens.map((t2) => t2.content).join("")).join("\n")
    };
  });
  return result;
}
function Spotlight({
  children,
  editorSteps,
  codeConfig,
  start = 0,
  presetConfig
}) {
  var _a2;
  const stepsChildren = React.Children.toArray(children);
  const [state, setState] = React.useState({
    stepIndex: start,
    step: editorSteps[start]
  });
  const tab = state.step;
  function onTabClick(filename) {
    const newStep = updateEditorStep(state.step, filename, null);
    setState(Object.assign(Object.assign({}, state), {
      step: newStep
    }));
  }
  const headerElement = stepsChildren[0];
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    className: `ch-spotlight ${presetConfig ? "ch-spotlight-with-preview" : ""}`,
    children: [/* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-spotlight-tabs",
      children: [((_a2 = headerElement === null || headerElement === void 0 ? void 0 : headerElement.props) === null || _a2 === void 0 ? void 0 : _a2.children) ? /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        children: stepsChildren[0]
      }) : null, stepsChildren.map((children2, i) => i === 0 ? null : /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        onClick: () => setState({
          stepIndex: i,
          step: editorSteps[i]
        }),
        className: "ch-spotlight-tab",
        "data-selected": i === state.stepIndex ? "true" : void 0,
        children: children2
      }, i))]
    }), /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-spotlight-sticker",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx(InnerCode, __spreadValues({}, Object.assign({}, tab, {
        codeConfig,
        onTabClick
      }))), presetConfig && /* @__PURE__ */ jsxRuntime.exports.jsx(Preview, {
        className: "ch-spotlight-preview",
        files: tab.files,
        presetConfig,
        codeConfig
      })]
    })]
  });
}
function debugEntries(entries) {
  entries.forEach(showEntry);
}
function showEntry(entry) {
  var _a2;
  const rootHeight = ((_a2 = entry.rootBounds) === null || _a2 === void 0 ? void 0 : _a2.height) || 0;
  addFlashingRect(entry.rootBounds, {
    border: `${Math.min(10, rootHeight / 2)}px solid ${iodOptions.rootColor}`,
    overflow: "hidden",
    boxSizing: "border-box"
  });
  addFlashingRect(entry.boundingClientRect, {
    border: `${Math.min(10, entry.boundingClientRect.height / 2)}px solid ${entry.isIntersecting ? iodOptions.enterColor : iodOptions.exitColor}`,
    overflow: "hidden",
    boxSizing: "border-box"
  });
  addFlashingRect(entry.intersectionRect, {
    backgroundColor: iodOptions.interColor,
    zIndex: 2
  });
}
function addFlashingRect(bounds, style = {}) {
  const {
    width,
    left,
    height,
    top
  } = bounds;
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.width = width + "px";
  div.style.left = left + "px";
  div.style.top = top + "px";
  div.style.height = height + "px";
  div.style.pointerEvents = "none";
  div.style.transition = "opacity 2s ease-in";
  Object.assign(div.style, style);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    div.style.opacity = "0";
  }));
  div.addEventListener("transitionend", () => {
    document.body.removeChild(div);
  });
  document.body.appendChild(div);
  return div;
}
const iodOptions = {
  rootColor: "#9428AB",
  enterColor: "#B35C00",
  exitColor: "#035570",
  interColor: "#9CAF00BB"
};
const useLayoutEffect$1 = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useWindowHeight() {
  const isClient = typeof window === "object";
  function getHeight2() {
    return isClient ? document.documentElement.clientHeight : void 0;
  }
  const [windowHeight, setWindowHeight] = React.useState(getHeight2);
  React.useEffect(() => {
    function handleResize() {
      setWindowHeight(getHeight2());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useLayoutEffect$1(() => {
    setWindowHeight(getHeight2());
  }, []);
  return windowHeight;
}
const ObserverContext = React.createContext(void 0);
const useLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function Scroller({
  onStepChange,
  children,
  getRootMargin = defaultRootMargin,
  debug = false
}) {
  const [observer, setObserver] = React.useState();
  const vh2 = useWindowHeight();
  useLayoutEffect(() => {
    const windowHeight = vh2 || 0;
    const handleIntersect = (entries) => {
      if (debug || window.chDebugScroller) {
        debugEntries(entries);
      }
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const stepElement = entry.target;
          onStepChange(+stepElement.stepIndex);
        }
      });
    };
    const observer2 = newIntersectionObserver(handleIntersect, getRootMargin(windowHeight));
    setObserver(observer2);
    return () => observer2.disconnect();
  }, [vh2]);
  return /* @__PURE__ */ jsxRuntime.exports.jsx(ObserverContext.Provider, {
    value: observer,
    children
  });
}
function Step(_a2) {
  var {
    as = "section",
    index
  } = _a2, props = __rest(_a2, ["as", "index"]);
  const ref = React.useRef(null);
  const observer = React.useContext(ObserverContext);
  useLayoutEffect(() => {
    if (observer) {
      observer.observe(ref.current);
    }
    return () => observer && observer.unobserve(ref.current);
  }, [observer]);
  useLayoutEffect(() => {
    const stepElement = ref.current;
    stepElement.stepIndex = index;
  }, [index]);
  return React.createElement(as, Object.assign(Object.assign({}, props), {
    ref
  }));
}
function newIntersectionObserver(handleIntersect, rootMargin) {
  return new IntersectionObserver(handleIntersect, {
    rootMargin,
    threshold: 1e-6,
    root: null
  });
}
function defaultRootMargin(vh2) {
  return `-${vh2 / 2 - 2}px 0px`;
}
function Scrollycoding({
  children,
  editorSteps,
  codeConfig,
  presetConfig,
  start = 0
}) {
  const stepsChildren = React.Children.toArray(children);
  const [state, setState] = React.useState({
    stepIndex: start,
    step: editorSteps[start]
  });
  const tab = state.step;
  function onStepChange(index) {
    setState({
      stepIndex: index,
      step: editorSteps[index]
    });
  }
  function onTabClick(filename) {
    const newStep = updateEditorStep(state.step, filename, null);
    setState(Object.assign(Object.assign({}, state), {
      step: newStep
    }));
  }
  function onLinkActivation(stepIndex, filename, focus) {
    const newStep = updateEditorStep(editorSteps[stepIndex], filename, focus);
    setState(Object.assign(Object.assign({}, state), {
      stepIndex,
      step: newStep
    }));
  }
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("section", {
    className: `ch-scrollycoding ${presetConfig ? "ch-scrollycoding-with-preview" : ""}`,
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      className: "ch-scrollycoding-content",
      children: /* @__PURE__ */ jsxRuntime.exports.jsx(Scroller, {
        onStepChange,
        children: stepsChildren.map((children2, i) => /* @__PURE__ */ jsxRuntime.exports.jsx(Step, {
          as: "div",
          index: i,
          onClick: () => onStepChange(i),
          className: "ch-scrollycoding-step-content",
          "data-selected": i === state.stepIndex ? "true" : void 0,
          children: /* @__PURE__ */ jsxRuntime.exports.jsx(LinkableSection, {
            onActivation: ({
              fileName,
              focus
            }) => {
              onLinkActivation(i, fileName, focus);
            },
            onReset: () => {
              onStepChange(i);
            },
            children: children2
          })
        }, i))
      })
    }), /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-scrollycoding-sticker",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx(InnerCode, __spreadValues({}, Object.assign({}, tab, {
        codeConfig,
        onTabClick
      }))), presetConfig && /* @__PURE__ */ jsxRuntime.exports.jsx(Preview, {
        className: "ch-scrollycoding-preview",
        files: tab.files,
        presetConfig,
        codeConfig
      })]
    })]
  });
}
function Slideshow({
  children,
  editorSteps,
  codeConfig,
  presetConfig,
  code
}) {
  const stepsChildren = React.Children.toArray(children);
  const hasNotes = stepsChildren.some((child) => {
    var _a2;
    return (_a2 = child.props) === null || _a2 === void 0 ? void 0 : _a2.children;
  });
  const [state, setState] = React.useState({
    stepIndex: 0,
    step: editorSteps[0]
  });
  const tab = state.step;
  function onTabClick(filename) {
    const newStep = updateEditorStep(state.step, filename, null);
    setState(Object.assign(Object.assign({}, state), {
      step: newStep
    }));
  }
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    className: `ch-slideshow ${presetConfig ? "ch-slideshow-with-preview" : ""}`,
    children: [/* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-slideshow-slide",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsx(InnerCode, __spreadValues({}, Object.assign({}, tab, {
        codeConfig: Object.assign(Object.assign({}, codeConfig), code),
        onTabClick
      }))), presetConfig && /* @__PURE__ */ jsxRuntime.exports.jsx(Preview, {
        className: "ch-slideshow-preview",
        files: tab.files,
        presetConfig,
        codeConfig
      })]
    }), /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
      className: "ch-slideshow-notes",
      children: [/* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
        className: "ch-slideshow-range",
        children: [/* @__PURE__ */ jsxRuntime.exports.jsx("button", {
          onClick: () => setState((s) => {
            const stepIndex = Math.max(0, s.stepIndex - 1);
            return {
              stepIndex,
              step: editorSteps[stepIndex]
            };
          }),
          children: "Prev"
        }), /* @__PURE__ */ jsxRuntime.exports.jsx("input", {
          type: "range",
          min: 0,
          max: editorSteps.length - 1,
          value: state.stepIndex,
          step: 1,
          onChange: (e) => setState({
            stepIndex: +e.target.value,
            step: editorSteps[+e.target.value]
          })
        }), /* @__PURE__ */ jsxRuntime.exports.jsx("button", {
          onClick: () => setState((s) => {
            const stepIndex = Math.min(editorSteps.length - 1, s.stepIndex + 1);
            return {
              stepIndex,
              step: editorSteps[stepIndex]
            };
          }),
          children: "Next"
        })]
      }), hasNotes && /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
        className: "ch-slideshow-note",
        children: stepsChildren[state.stepIndex]
      })]
    })]
  });
}
function Annotation() {
  return "error: code hike remark plugin not running or annotation isn't at the right place";
}
const annotationsMap = {
  box: Box,
  bg: Background,
  label: Label,
  link: CodeLink,
  mark: Mark
};
function Mark({
  children,
  data,
  theme
}) {
  const bg2 = data && typeof data === "string" ? data : tryGuessColor(children) || transparent(getColor(theme, ColorName.CodeForeground), 0.2);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
    className: "ch-code-mark-annotation",
    style: {
      background: bg2,
      borderRadius: "0.25rem",
      padding: "0.2rem 0.15rem 0.1rem",
      margin: "0 -0.15rem"
    },
    children
  });
}
function tryGuessColor(children) {
  var _a2, _b, _c;
  const child = React.Children.toArray(children)[0];
  const grandChild = React.Children.toArray(((_a2 = child === null || child === void 0 ? void 0 : child.props) === null || _a2 === void 0 ? void 0 : _a2.children) || [])[0];
  const grandGrandChild = React.Children.toArray(((_b = grandChild === null || grandChild === void 0 ? void 0 : grandChild.props) === null || _b === void 0 ? void 0 : _b.children) || [])[0];
  const {
    color
  } = (_c = grandGrandChild === null || grandGrandChild === void 0 ? void 0 : grandGrandChild.props) === null || _c === void 0 ? void 0 : _c.style;
  if (color) {
    return transparent(color, 0.2);
  }
  return void 0;
}
function Box({
  children,
  data,
  theme
}) {
  var _a2, _b;
  const border = typeof data === "string" ? data : ((_b = (_a2 = theme.tokenColors.find((tc2) => {
    var _a3;
    return (_a3 = tc2.scope) === null || _a3 === void 0 ? void 0 : _a3.includes("string");
  })) === null || _a2 === void 0 ? void 0 : _a2.settings) === null || _b === void 0 ? void 0 : _b.foreground) || "yellow";
  return /* @__PURE__ */ jsxRuntime.exports.jsx("span", {
    className: "ch-code-box-annotation",
    style: {
      outline: `2px solid ${border}`
    },
    children
  });
}
function Background({
  children,
  data,
  style,
  theme
}) {
  const bg2 = data || theme.colors["editor.lineHighlightBackground"] || theme.colors["editor.selectionHighlightBackground"];
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    style: Object.assign(Object.assign({}, style), {
      background: bg2
    }),
    className: "ch-code-bg-annotation",
    children: [/* @__PURE__ */ jsxRuntime.exports.jsx("span", {
      className: "ch-code-bg-annotation-border",
      style: {
        background: "#00a2d3",
        width: "3px",
        height: "100%",
        position: "absolute",
        left: 0
      }
    }), children]
  });
}
function Label({
  children,
  data,
  style,
  theme
}) {
  const bg2 = theme.colors["editor.lineHighlightBackground"] || theme.colors["editor.selectionHighlightBackground"];
  const [hover, setHover] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.exports.jsxs("div", {
    style: Object.assign(Object.assign({}, style), {
      background: hover ? bg2 : void 0
    }),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    children: [children, /* @__PURE__ */ jsxRuntime.exports.jsx("div", {
      style: {
        position: "absolute",
        right: 0,
        paddingRight: 16,
        display: hover ? "block" : "none",
        opacity: 0.7
      },
      children: (data === null || data === void 0 ? void 0 : data.children) || data
    })]
  });
}
function CodeLink({
  children,
  data
}) {
  const url = (data === null || data === void 0 ? void 0 : data.url) || data;
  const title = data === null || data === void 0 ? void 0 : data.title;
  return /* @__PURE__ */ jsxRuntime.exports.jsx("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    title,
    style: {
      textDecoration: "underline",
      textDecorationStyle: "dotted",
      color: "inherit"
    },
    children
  });
}
function InlineCode(_a2) {
  var {
    className,
    codeConfig,
    children,
    code
  } = _a2, rest = __rest(_a2, ["className", "codeConfig", "children", "code"]);
  const {
    theme
  } = codeConfig;
  const {
    lines
  } = code;
  const allTokens = lines.flatMap((line) => line.tokens);
  const foreground = getColor(theme, ColorName.CodeForeground);
  return /* @__PURE__ */ jsxRuntime.exports.jsx("span", __spreadProps(__spreadValues({}, Object.assign({
    className: "ch-inline-code not-prose" + (className ? " " + className : "")
  }, rest)), {
    children: /* @__PURE__ */ jsxRuntime.exports.jsx("code", {
      style: {
        ["--ch-code-foreground"]: foreground,
        background: transparent(getColor(theme, ColorName.CodeBackground), 0.9),
        color: foreground
      },
      children: allTokens.map((token, j) => /* @__PURE__ */ jsxRuntime.exports.jsx("span", __spreadProps(__spreadValues({}, Object.assign({
        key: j
      }, token.props)), {
        children: token.content
      })))
    })
  }));
}
const CH = {
  Code,
  Section,
  SectionLink,
  SectionCode,
  Spotlight,
  Scrollycoding,
  Preview,
  annotations: annotationsMap,
  Annotation,
  Slideshow,
  InlineCode
};
const chCodeConfig$4 = {
  "theme": {
    "name": "github-dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#c9d1d9",
      "descriptionForeground": "#8b949e",
      "errorForeground": "#f85149",
      "textLink.foreground": "#58a6ff",
      "textLink.activeForeground": "#58a6ff",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#8b949e",
      "textSeparator.foreground": "#21262d",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#c9d1d9",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#c9d1d9",
      "input.placeholderForeground": "#484f58",
      "badge.foreground": "#f0f6fc",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#8b949e",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#8b949e",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#c9d1d9",
      "activityBar.inactiveForeground": "#8b949e",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#f0f6fc",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#c9d1d9",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#c9d1d9",
      "sideBarSectionHeader.foreground": "#c9d1d9",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#c9d1d9",
      "list.inactiveSelectionForeground": "#c9d1d9",
      "list.activeSelectionForeground": "#c9d1d9",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#c9d1d9",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#58a6ff",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#8b949e",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#c9d1d9",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#58a6ff",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#8b949e",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#c9d1d9",
      "statusBar.foreground": "#8b949e",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingBackground": "#da3633",
      "statusBar.debuggingForeground": "#f0f6fc",
      "statusBarItem.prominentBackground": "#161b22",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#c9d1d9",
      "tab.inactiveForeground": "#8b949e",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#8b949e",
      "breadcrumb.focusForeground": "#c9d1d9",
      "breadcrumb.activeSelectionForeground": "#8b949e",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#c9d1d9",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#8b949e",
      "editorLineNumber.activeForeground": "#c9d1d9",
      "editorIndentGuide.background": "#21262d",
      "editorIndentGuide.activeBackground": "#30363d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#58a6ff",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#58a6ff12",
      "editor.inactiveSelectionBackground": "#58a6ff12",
      "editor.selectionBackground": "#58a6ff33",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedTextBackground": "#2ea04326",
      "diffEditor.removedTextBackground": "#f8514926",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "scrollbarSlider.activeBackground": "#6e768187",
      "editorOverviewRuler.border": "#010409",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#c9d1d9",
      "panelTitle.inactiveForeground": "#8b949e",
      "panelInput.border": "#30363d",
      "terminal.foreground": "#8b949e",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#f0f6fc",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#484f58",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#8b949e",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#8b949e",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "semanticHighlighting": true,
    "tokenColors": [{
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": ["constant", "entity.name.constant", "variable.other.constant", "variable.language", "entity"],
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["entity.name", "meta.export.default", "meta.definition.variable"],
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["variable.parameter.function", "meta.jsx.children", "meta.block", "meta.tag.attributes", "entity.name.constant", "meta.object.member", "meta.embedded.expression"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#d2a8ff"
      }
    }, {
      "scope": ["entity.name.tag", "support.class.component"],
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "keyword",
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage", "storage.type"],
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "support",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.property-name",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "variable",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": "variable.other",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#ff7b72",
        "foreground": "#f0f6fc",
        "content": "^M"
      }
    }, {
      "scope": "message.error",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": "string source",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "string variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": ["string.regexp.character-class", "string.regexp constant.character.escape", "string.regexp source.ruby.embedded", "string.regexp string.regexp.arbitrary-repitition"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#7ee787"
      }
    }, {
      "scope": "support.constant",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "support.variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#490202",
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#04260f",
        "foreground": "#7ee787"
      }
    }, {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#5a1e02",
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#161b22",
        "background": "#79c0ff"
      }
    }, {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#d2a8ff",
        "fontStyle": "bold"
      }
    }, {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.output",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["brackethighlighter.tag", "brackethighlighter.curly", "brackethighlighter.round", "brackethighlighter.square", "brackethighlighter.angle", "brackethighlighter.quote"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["constant.other.reference.link", "string.other.link"],
      "settings": {
        "foreground": "#a5d6ff",
        "fontStyle": "underline"
      }
    }]
  },
  "autoImport": true
};
function MDXContent$4(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    if (!CH)
      _missingMdxReference$4("CH", false);
    if (!CH.Code)
      _missingMdxReference$4("CH.Code", true);
    return jsxRuntime.exports.jsx(CH.Code, {
      northPanel: {
        "tabs": [""],
        "active": "",
        "heightRatio": 1
      },
      files: [{
        "name": "",
        "focus": "",
        "code": {
          "lines": [{
            "tokens": [{
              "content": "enum",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrorCode",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "NotDefined",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "FileNotFound",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "AccessViolation",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "DiskFull",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "IllegalOperation",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "UnknownTransferID",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "FileAlreadyExists",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "NoSuchUser",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "}",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }],
          "lang": "rust"
        },
        "annotations": []
      }],
      codeConfig: chCodeConfig$4
    });
  }
}
function _missingMdxReference$4(id2, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id2 + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const chCodeConfig$3 = {
  "theme": {
    "name": "github-dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#c9d1d9",
      "descriptionForeground": "#8b949e",
      "errorForeground": "#f85149",
      "textLink.foreground": "#58a6ff",
      "textLink.activeForeground": "#58a6ff",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#8b949e",
      "textSeparator.foreground": "#21262d",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#c9d1d9",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#c9d1d9",
      "input.placeholderForeground": "#484f58",
      "badge.foreground": "#f0f6fc",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#8b949e",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#8b949e",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#c9d1d9",
      "activityBar.inactiveForeground": "#8b949e",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#f0f6fc",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#c9d1d9",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#c9d1d9",
      "sideBarSectionHeader.foreground": "#c9d1d9",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#c9d1d9",
      "list.inactiveSelectionForeground": "#c9d1d9",
      "list.activeSelectionForeground": "#c9d1d9",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#c9d1d9",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#58a6ff",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#8b949e",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#c9d1d9",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#58a6ff",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#8b949e",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#c9d1d9",
      "statusBar.foreground": "#8b949e",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingBackground": "#da3633",
      "statusBar.debuggingForeground": "#f0f6fc",
      "statusBarItem.prominentBackground": "#161b22",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#c9d1d9",
      "tab.inactiveForeground": "#8b949e",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#8b949e",
      "breadcrumb.focusForeground": "#c9d1d9",
      "breadcrumb.activeSelectionForeground": "#8b949e",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#c9d1d9",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#8b949e",
      "editorLineNumber.activeForeground": "#c9d1d9",
      "editorIndentGuide.background": "#21262d",
      "editorIndentGuide.activeBackground": "#30363d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#58a6ff",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#58a6ff12",
      "editor.inactiveSelectionBackground": "#58a6ff12",
      "editor.selectionBackground": "#58a6ff33",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedTextBackground": "#2ea04326",
      "diffEditor.removedTextBackground": "#f8514926",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "scrollbarSlider.activeBackground": "#6e768187",
      "editorOverviewRuler.border": "#010409",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#c9d1d9",
      "panelTitle.inactiveForeground": "#8b949e",
      "panelInput.border": "#30363d",
      "terminal.foreground": "#8b949e",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#f0f6fc",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#484f58",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#8b949e",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#8b949e",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "semanticHighlighting": true,
    "tokenColors": [{
      "settings": {
        "foreground": "#c9d1d9",
        "background": "#0d1117"
      }
    }, {
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": ["constant", "entity.name.constant", "variable.other.constant", "variable.language", "entity"],
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["entity.name", "meta.export.default", "meta.definition.variable"],
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["variable.parameter.function", "meta.jsx.children", "meta.block", "meta.tag.attributes", "entity.name.constant", "meta.object.member", "meta.embedded.expression"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#d2a8ff"
      }
    }, {
      "scope": ["entity.name.tag", "support.class.component"],
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "keyword",
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage", "storage.type"],
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "support",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.property-name",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "variable",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": "variable.other",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#ff7b72",
        "foreground": "#f0f6fc",
        "content": "^M"
      }
    }, {
      "scope": "message.error",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": "string source",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "string variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": ["string.regexp.character-class", "string.regexp constant.character.escape", "string.regexp source.ruby.embedded", "string.regexp string.regexp.arbitrary-repitition"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#7ee787"
      }
    }, {
      "scope": "support.constant",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "support.variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#490202",
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#04260f",
        "foreground": "#7ee787"
      }
    }, {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#5a1e02",
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#161b22",
        "background": "#79c0ff"
      }
    }, {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#d2a8ff",
        "fontStyle": "bold"
      }
    }, {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.output",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["brackethighlighter.tag", "brackethighlighter.curly", "brackethighlighter.round", "brackethighlighter.square", "brackethighlighter.angle", "brackethighlighter.quote"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["constant.other.reference.link", "string.other.link"],
      "settings": {
        "foreground": "#a5d6ff",
        "fontStyle": "underline"
      }
    }]
  },
  "autoImport": true
};
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    if (!CH)
      _missingMdxReference$3("CH", false);
    if (!CH.Code)
      _missingMdxReference$3("CH.Code", true);
    return jsxRuntime.exports.jsx(CH.Code, {
      northPanel: {
        "tabs": [""],
        "active": "",
        "heightRatio": 1
      },
      files: [{
        "name": "",
        "focus": "",
        "code": {
          "lines": [{
            "tokens": [{
              "content": "struct",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Request",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    filename",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Text",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    mode",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Text",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "}",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": []
          }, {
            "tokens": [{
              "content": "enum",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Frame",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Read",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Request",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Write",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Request",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Data",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { block",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ", bytes",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "&",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " [",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u8",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "] },",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Acknowledge",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrMsg",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { code",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrorCode",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ", msg",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Text",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " },",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "}",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }],
          "lang": "rust"
        },
        "annotations": []
      }],
      codeConfig: chCodeConfig$3
    });
  }
}
function _missingMdxReference$3(id2, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id2 + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const chCodeConfig$2 = {
  "theme": {
    "name": "github-dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#c9d1d9",
      "descriptionForeground": "#8b949e",
      "errorForeground": "#f85149",
      "textLink.foreground": "#58a6ff",
      "textLink.activeForeground": "#58a6ff",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#8b949e",
      "textSeparator.foreground": "#21262d",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#c9d1d9",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#c9d1d9",
      "input.placeholderForeground": "#484f58",
      "badge.foreground": "#f0f6fc",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#8b949e",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#8b949e",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#c9d1d9",
      "activityBar.inactiveForeground": "#8b949e",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#f0f6fc",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#c9d1d9",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#c9d1d9",
      "sideBarSectionHeader.foreground": "#c9d1d9",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#c9d1d9",
      "list.inactiveSelectionForeground": "#c9d1d9",
      "list.activeSelectionForeground": "#c9d1d9",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#c9d1d9",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#58a6ff",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#8b949e",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#c9d1d9",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#58a6ff",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#8b949e",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#c9d1d9",
      "statusBar.foreground": "#8b949e",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingBackground": "#da3633",
      "statusBar.debuggingForeground": "#f0f6fc",
      "statusBarItem.prominentBackground": "#161b22",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#c9d1d9",
      "tab.inactiveForeground": "#8b949e",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#8b949e",
      "breadcrumb.focusForeground": "#c9d1d9",
      "breadcrumb.activeSelectionForeground": "#8b949e",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#c9d1d9",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#8b949e",
      "editorLineNumber.activeForeground": "#c9d1d9",
      "editorIndentGuide.background": "#21262d",
      "editorIndentGuide.activeBackground": "#30363d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#58a6ff",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#58a6ff12",
      "editor.inactiveSelectionBackground": "#58a6ff12",
      "editor.selectionBackground": "#58a6ff33",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedTextBackground": "#2ea04326",
      "diffEditor.removedTextBackground": "#f8514926",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "scrollbarSlider.activeBackground": "#6e768187",
      "editorOverviewRuler.border": "#010409",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#c9d1d9",
      "panelTitle.inactiveForeground": "#8b949e",
      "panelInput.border": "#30363d",
      "terminal.foreground": "#8b949e",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#f0f6fc",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#484f58",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#8b949e",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#8b949e",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "semanticHighlighting": true,
    "tokenColors": [{
      "settings": {
        "foreground": "#c9d1d9",
        "background": "#0d1117"
      }
    }, {
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": ["constant", "entity.name.constant", "variable.other.constant", "variable.language", "entity"],
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["entity.name", "meta.export.default", "meta.definition.variable"],
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["variable.parameter.function", "meta.jsx.children", "meta.block", "meta.tag.attributes", "entity.name.constant", "meta.object.member", "meta.embedded.expression"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#d2a8ff"
      }
    }, {
      "scope": ["entity.name.tag", "support.class.component"],
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "keyword",
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage", "storage.type"],
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "support",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.property-name",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "variable",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": "variable.other",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#ff7b72",
        "foreground": "#f0f6fc",
        "content": "^M"
      }
    }, {
      "scope": "message.error",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": "string source",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "string variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": ["string.regexp.character-class", "string.regexp constant.character.escape", "string.regexp source.ruby.embedded", "string.regexp string.regexp.arbitrary-repitition"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#7ee787"
      }
    }, {
      "scope": "support.constant",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "support.variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#490202",
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#04260f",
        "foreground": "#7ee787"
      }
    }, {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#5a1e02",
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#161b22",
        "background": "#79c0ff"
      }
    }, {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#d2a8ff",
        "fontStyle": "bold"
      }
    }, {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.output",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["brackethighlighter.tag", "brackethighlighter.curly", "brackethighlighter.round", "brackethighlighter.square", "brackethighlighter.angle", "brackethighlighter.quote"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["constant.other.reference.link", "string.other.link"],
      "settings": {
        "foreground": "#a5d6ff",
        "fontStyle": "underline"
      }
    }]
  },
  "autoImport": true
};
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    if (!CH)
      _missingMdxReference$2("CH", false);
    if (!CH.Code)
      _missingMdxReference$2("CH.Code", true);
    return jsxRuntime.exports.jsx(CH.Code, {
      northPanel: {
        "tabs": [""],
        "active": "",
        "heightRatio": 1
      },
      files: [{
        "name": "",
        "focus": "",
        "code": {
          "lines": [{
            "tokens": [{
              "content": "impl",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "<'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ", ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "E",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Error",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Decoder",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ", ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "E",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "for",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Frame",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "fn",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "&mut",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Cursor",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "&",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "a",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " [",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u8",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "]>) ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "->",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Result",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Self",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ", ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "E",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "let",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " opcode ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ";",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Ok",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "match",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " opcode {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "1",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Read",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Request",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "2",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Write",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Request",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "3",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Data",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                block",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                bytes",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " c",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "remaining_slice",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            },",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "4",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Acknowledge",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "5",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrMsg",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                code",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "match",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "1",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "FileNotFound",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "2",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "AccessViolation",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "3",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "DiskFull",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "4",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "IllegalOperation",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "5",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "UnknownTransferID",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "6",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "FileAlreadyExists",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "7",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "NoSuchUser",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                    _ ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "NotDefined",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                },",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                msg",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Text",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "decoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c)",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "?",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            },",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            _ ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "return",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Err",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "E",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "invalid_data",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "()),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        })",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    }",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "}",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }],
          "lang": "rust"
        },
        "annotations": []
      }],
      codeConfig: chCodeConfig$2
    });
  }
}
function _missingMdxReference$2(id2, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id2 + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const chCodeConfig$1 = {
  "theme": {
    "name": "github-dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#c9d1d9",
      "descriptionForeground": "#8b949e",
      "errorForeground": "#f85149",
      "textLink.foreground": "#58a6ff",
      "textLink.activeForeground": "#58a6ff",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#8b949e",
      "textSeparator.foreground": "#21262d",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#c9d1d9",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#c9d1d9",
      "input.placeholderForeground": "#484f58",
      "badge.foreground": "#f0f6fc",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#8b949e",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#8b949e",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#c9d1d9",
      "activityBar.inactiveForeground": "#8b949e",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#f0f6fc",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#c9d1d9",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#c9d1d9",
      "sideBarSectionHeader.foreground": "#c9d1d9",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#c9d1d9",
      "list.inactiveSelectionForeground": "#c9d1d9",
      "list.activeSelectionForeground": "#c9d1d9",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#c9d1d9",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#58a6ff",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#8b949e",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#c9d1d9",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#58a6ff",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#8b949e",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#c9d1d9",
      "statusBar.foreground": "#8b949e",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingBackground": "#da3633",
      "statusBar.debuggingForeground": "#f0f6fc",
      "statusBarItem.prominentBackground": "#161b22",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#c9d1d9",
      "tab.inactiveForeground": "#8b949e",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#8b949e",
      "breadcrumb.focusForeground": "#c9d1d9",
      "breadcrumb.activeSelectionForeground": "#8b949e",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#c9d1d9",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#8b949e",
      "editorLineNumber.activeForeground": "#c9d1d9",
      "editorIndentGuide.background": "#21262d",
      "editorIndentGuide.activeBackground": "#30363d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#58a6ff",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#58a6ff12",
      "editor.inactiveSelectionBackground": "#58a6ff12",
      "editor.selectionBackground": "#58a6ff33",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedTextBackground": "#2ea04326",
      "diffEditor.removedTextBackground": "#f8514926",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "scrollbarSlider.activeBackground": "#6e768187",
      "editorOverviewRuler.border": "#010409",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#c9d1d9",
      "panelTitle.inactiveForeground": "#8b949e",
      "panelInput.border": "#30363d",
      "terminal.foreground": "#8b949e",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#f0f6fc",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#484f58",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#8b949e",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#8b949e",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "semanticHighlighting": true,
    "tokenColors": [{
      "settings": {
        "foreground": "#c9d1d9",
        "background": "#0d1117"
      }
    }, {
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": ["constant", "entity.name.constant", "variable.other.constant", "variable.language", "entity"],
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["entity.name", "meta.export.default", "meta.definition.variable"],
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["variable.parameter.function", "meta.jsx.children", "meta.block", "meta.tag.attributes", "entity.name.constant", "meta.object.member", "meta.embedded.expression"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#d2a8ff"
      }
    }, {
      "scope": ["entity.name.tag", "support.class.component"],
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "keyword",
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage", "storage.type"],
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "support",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.property-name",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "variable",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": "variable.other",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#ff7b72",
        "foreground": "#f0f6fc",
        "content": "^M"
      }
    }, {
      "scope": "message.error",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": "string source",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "string variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": ["string.regexp.character-class", "string.regexp constant.character.escape", "string.regexp source.ruby.embedded", "string.regexp string.regexp.arbitrary-repitition"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#7ee787"
      }
    }, {
      "scope": "support.constant",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "support.variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#490202",
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#04260f",
        "foreground": "#7ee787"
      }
    }, {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#5a1e02",
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#161b22",
        "background": "#79c0ff"
      }
    }, {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#d2a8ff",
        "fontStyle": "bold"
      }
    }, {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.output",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["brackethighlighter.tag", "brackethighlighter.curly", "brackethighlighter.round", "brackethighlighter.square", "brackethighlighter.angle", "brackethighlighter.quote"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["constant.other.reference.link", "string.other.link"],
      "settings": {
        "foreground": "#a5d6ff",
        "fontStyle": "underline"
      }
    }]
  },
  "autoImport": true
};
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    if (!CH)
      _missingMdxReference$1("CH", false);
    if (!CH.Code)
      _missingMdxReference$1("CH.Code", true);
    return jsxRuntime.exports.jsx(CH.Code, {
      northPanel: {
        "tabs": [""],
        "active": "",
        "heightRatio": 1
      },
      files: [{
        "name": "",
        "focus": "",
        "code": {
          "lines": [{
            "tokens": [{
              "content": "use",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Frame",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "::*",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ";",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": []
          }, {
            "tokens": [{
              "content": "impl",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Encoder",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "for",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Frame",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<'",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "_",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "> {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "fn",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "self",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ", c",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "&mut",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "impl",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Array",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": "<",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u8",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ">) {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "let",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " opcode",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ":",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "match",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "self",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Read",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "..",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ") ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "1",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Write",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "..",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": ") ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "2",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Data",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "..",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " } ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "3",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Acknowledge",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "..",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " } ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "4",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrMsg",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "..",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " } ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "5",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": ",",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        };",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        opcode",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c);",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": []
          }, {
            "tokens": [{
              "content": "        ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "match",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "self",
              "props": {
                "style": {
                  "color": "#79C0FF"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Read",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(req) ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "|",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Write",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(req) ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " req",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Data",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { block, bytes } ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                block",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c);",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                c",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "extend_from_slice",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(bytes);",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            }",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "Acknowledge",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(num) ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " num",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c),",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "ErrMsg",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": " { code, msg } ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "=>",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " {",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                (code ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "as",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": " ",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": "u16",
              "props": {
                "style": {
                  "color": "#FFA657"
                }
              }
            }, {
              "content": ")",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c);",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "                msg",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }, {
              "content": ".",
              "props": {
                "style": {
                  "color": "#FF7B72"
                }
              }
            }, {
              "content": "encoder",
              "props": {
                "style": {
                  "color": "#D2A8FF"
                }
              }
            }, {
              "content": "(c);",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "            }",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "        }",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "    }",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }, {
            "tokens": [{
              "content": "}",
              "props": {
                "style": {
                  "color": "#C9D1D9"
                }
              }
            }]
          }],
          "lang": "rust"
        },
        "annotations": []
      }],
      codeConfig: chCodeConfig$1
    });
  }
}
function _missingMdxReference$1(id2, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id2 + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const chCodeConfig = {
  "theme": {
    "name": "github-dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#c9d1d9",
      "descriptionForeground": "#8b949e",
      "errorForeground": "#f85149",
      "textLink.foreground": "#58a6ff",
      "textLink.activeForeground": "#58a6ff",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#8b949e",
      "textSeparator.foreground": "#21262d",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#c9d1d9",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#c9d1d9",
      "input.placeholderForeground": "#484f58",
      "badge.foreground": "#f0f6fc",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#8b949e",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#8b949e",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#c9d1d9",
      "activityBar.inactiveForeground": "#8b949e",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#f0f6fc",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#c9d1d9",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#c9d1d9",
      "sideBarSectionHeader.foreground": "#c9d1d9",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#c9d1d9",
      "list.inactiveSelectionForeground": "#c9d1d9",
      "list.activeSelectionForeground": "#c9d1d9",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#c9d1d9",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#58a6ff",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#8b949e",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#c9d1d9",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#58a6ff",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#8b949e",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#c9d1d9",
      "statusBar.foreground": "#8b949e",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingBackground": "#da3633",
      "statusBar.debuggingForeground": "#f0f6fc",
      "statusBarItem.prominentBackground": "#161b22",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#c9d1d9",
      "tab.inactiveForeground": "#8b949e",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#8b949e",
      "breadcrumb.focusForeground": "#c9d1d9",
      "breadcrumb.activeSelectionForeground": "#8b949e",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#c9d1d9",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#8b949e",
      "editorLineNumber.activeForeground": "#c9d1d9",
      "editorIndentGuide.background": "#21262d",
      "editorIndentGuide.activeBackground": "#30363d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#58a6ff",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#58a6ff12",
      "editor.inactiveSelectionBackground": "#58a6ff12",
      "editor.selectionBackground": "#58a6ff33",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedTextBackground": "#2ea04326",
      "diffEditor.removedTextBackground": "#f8514926",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "scrollbarSlider.activeBackground": "#6e768187",
      "editorOverviewRuler.border": "#010409",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#c9d1d9",
      "panelTitle.inactiveForeground": "#8b949e",
      "panelInput.border": "#30363d",
      "terminal.foreground": "#8b949e",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#f0f6fc",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#484f58",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#8b949e",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#8b949e",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "semanticHighlighting": true,
    "tokenColors": [{
      "settings": {
        "foreground": "#c9d1d9",
        "background": "#0d1117"
      }
    }, {
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": ["constant", "entity.name.constant", "variable.other.constant", "variable.language", "entity"],
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["entity.name", "meta.export.default", "meta.definition.variable"],
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["variable.parameter.function", "meta.jsx.children", "meta.block", "meta.tag.attributes", "entity.name.constant", "meta.object.member", "meta.embedded.expression"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#d2a8ff"
      }
    }, {
      "scope": ["entity.name.tag", "support.class.component"],
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "keyword",
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage", "storage.type"],
      "settings": {
        "foreground": "#ff7b72"
      }
    }, {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "support",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.property-name",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "variable",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": "variable.other",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ffa198"
      }
    }, {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#ff7b72",
        "foreground": "#f0f6fc",
        "content": "^M"
      }
    }, {
      "scope": "message.error",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": "string source",
      "settings": {
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "string variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": ["string.regexp.character-class", "string.regexp constant.character.escape", "string.regexp source.ruby.embedded", "string.regexp string.regexp.arbitrary-repitition"],
      "settings": {
        "foreground": "#a5d6ff"
      }
    }, {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#7ee787"
      }
    }, {
      "scope": "support.constant",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "support.variable",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#7ee787"
      }
    }, {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#c9d1d9"
      }
    }, {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#490202",
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#04260f",
        "foreground": "#7ee787"
      }
    }, {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#5a1e02",
        "foreground": "#ffa657"
      }
    }, {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#161b22",
        "background": "#79c0ff"
      }
    }, {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#d2a8ff",
        "fontStyle": "bold"
      }
    }, {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#79c0ff"
      }
    }, {
      "scope": "meta.output",
      "settings": {
        "foreground": "#79c0ff"
      }
    }, {
      "scope": ["brackethighlighter.tag", "brackethighlighter.curly", "brackethighlighter.round", "brackethighlighter.square", "brackethighlighter.angle", "brackethighlighter.quote"],
      "settings": {
        "foreground": "#8b949e"
      }
    }, {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ffa198"
      }
    }, {
      "scope": ["constant.other.reference.link", "string.other.link"],
      "settings": {
        "foreground": "#a5d6ff",
        "fontStyle": "underline"
      }
    }]
  },
  "autoImport": true
};
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      a: "a"
    }, props.components);
    if (!CH)
      _missingMdxReference("CH", false);
    if (!CH.Code)
      _missingMdxReference("CH.Code", true);
    if (!CH.Slideshow)
      _missingMdxReference("CH.Slideshow", true);
    return jsxRuntime.exports.jsxs(CH.Slideshow, {
      codeConfig: chCodeConfig,
      editorSteps: [{
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "use",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "bin_layout",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }]
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "3,5,9",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "use",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "bin_layout",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "struct",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "String",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Encoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "encoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Array",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ">) {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "todo!",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "6,8",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "use",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "bin_layout",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "struct",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "String",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Encoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "encoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Array",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ">) {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "todo!",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "7,8",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "use",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "bin_layout",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "struct",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "String",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Encoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "encoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Array",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ">) {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "extend_from_slice",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "push",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "6:7,9:10",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "        arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "extend_from_slice",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        arr",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "push",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ");",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Error",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Decoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<'",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "_",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "decoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Cursor",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "[",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "]>) ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "->",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Result",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "todo!",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "3:8",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Error",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Decoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<'",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "_",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "decoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Cursor",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "[",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "]>) ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "->",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Result",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "let",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Vec",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "remaining_slice",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "iter",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "take_while",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "!=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ")",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "copied",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "collect",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "();",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "offset ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "len",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "() ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "1",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "9",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Error",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Decoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<'",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "_",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "decoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Cursor",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "[",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "]>) ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "->",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Result",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "let",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Vec",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "remaining_slice",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "iter",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "take_while",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "!=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ")",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "copied",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "collect",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "();",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "        c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "offset ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "len",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "() ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "1",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "let",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " string ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "String",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "from_utf8",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(bytes)",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "map_err",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "from_utf8_err)",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "?",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }, {
        "northPanel": {
          "tabs": [""],
          "active": "",
          "heightRatio": 1
        },
        "files": [{
          "name": "",
          "focus": "10",
          "code": {
            "lines": [{
              "tokens": [{
                "content": "impl",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Error",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Decoder",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<'",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "_",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "for",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": " {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "fn",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "decoder",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&mut",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Cursor",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "[",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "]>) ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "->",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Result",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Self",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ", ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> {",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "let",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ":",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Vec",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "<",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "u8",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "> ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "remaining_slice",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "iter",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "take_while",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|&",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "|",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "*",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "b ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "!=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "0",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ")",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "copied",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "()",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "            ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "collect",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "();",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": []
            }, {
              "tokens": [{
                "content": "        c",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "offset ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " bytes",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "len",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "() ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "+",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "1",
                "props": {
                  "style": {
                    "color": "#79C0FF"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "let",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " string ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "=",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": " ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "String",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "from_utf8",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(bytes)",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": ".",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "map_err",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "E",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "::",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": "from_utf8_err)",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "?",
                "props": {
                  "style": {
                    "color": "#FF7B72"
                  }
                }
              }, {
                "content": ";",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "        ",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Ok",
                "props": {
                  "style": {
                    "color": "#FFA657"
                  }
                }
              }, {
                "content": "(",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }, {
                "content": "Text",
                "props": {
                  "style": {
                    "color": "#D2A8FF"
                  }
                }
              }, {
                "content": "(string))",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "    }",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }, {
              "tokens": [{
                "content": "}",
                "props": {
                  "style": {
                    "color": "#C9D1D9"
                  }
                }
              }]
            }],
            "lang": "rust"
          },
          "annotations": []
        }],
        "southPanel": void 0
      }],
      children: [jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: jsxRuntime.exports.jsxs(_components.p, {
          children: ["Asterisk ", jsxRuntime.exports.jsx(_components.code, {
            children: "*"
          }), " imports everything from the ", jsxRuntime.exports.jsx(_components.code, {
            children: "bin_layout"
          }), " crate and the ", jsxRuntime.exports.jsx(_components.code, {
            children: "ErrorCode"
          }), " enum."]
        })
      }), jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: jsxRuntime.exports.jsxs(_components.p, {
          children: ["A trait is some functions signature of some abstract type, In other languages it is also known as ", jsxRuntime.exports.jsx(_components.a, {
            href: "https://en.wikipedia.org/wiki/Interface_(computing)#In_object-oriented_languages",
            children: "interface"
          })]
        })
      }), jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [jsxRuntime.exports.jsxs(_components.p, {
          children: ["Python \u{1F40D} programmer can tell, it's a method because it takes ", jsxRuntime.exports.jsx(_components.code, {
            children: "self"
          }), " parameter."]
        }), jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.code, {
            children: "&mut"
          }), " is a mutable reference, which mean Rust type system\r\nguarantees that No one can modify it while we are modifying it.\r\nWhich eliminate whole class of \u{1F41B} bugs!\u{1FAB2} and data race.\u{1F3C3}\u200D\u2642\uFE0F"]
        }), jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.code, {
            children: "impl Array<u8>"
          }), " is a generic type, Any abstract type that implement ", jsxRuntime.exports.jsx(_components.code, {
            children: "Array<u8>"
          }), " trait (like array of bytes: ", jsxRuntime.exports.jsx(_components.code, {
            children: "Vec<u8>"
          }), ") can call this function."]
        })]
      }), jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.code, {
            children: "extend_from_slice"
          }), " copy the content of ", jsxRuntime.exports.jsx(_components.code, {
            children: "self.0"
          }), " (", jsxRuntime.exports.jsx(_components.code, {
            children: "String"
          }), ") to ", jsxRuntime.exports.jsx(_components.code, {
            children: "arr"
          }), ".\r\nLet's push a trailing ", jsxRuntime.exports.jsx(_components.code, {
            children: "0"
          }), " to indicate end of string."]
        })
      }), jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.code, {
            children: "decoder"
          }), " function takes a ", jsxRuntime.exports.jsx(_components.code, {
            children: "Cursor<&[u8]>"
          }), " and return ", jsxRuntime.exports.jsx(_components.code, {
            children: "Result<Self, E>"
          }), "."]
        }), jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.a, {
            href: "https://doc.rust-lang.org/std/result/enum.Result.html",
            children: "Result"
          }), " is an build-in enum that can be either ", jsxRuntime.exports.jsx(_components.code, {
            children: "Ok(T)"
          }), " or ", jsxRuntime.exports.jsx(_components.code, {
            children: "Err(E)"
          }), "."]
        })]
      }), jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [jsxRuntime.exports.jsxs(_components.p, {
          children: ["Let's iterate over remaining bytes and copy all bytes until ", jsxRuntime.exports.jsx(_components.code, {
            children: "0"
          }), " is found, ", jsxRuntime.exports.jsx(_components.code, {
            children: "collect()"
          }), " bytes into new ", jsxRuntime.exports.jsx(_components.code, {
            children: "Vec<u8>"
          }), "."]
        }), jsxRuntime.exports.jsxs(_components.p, {
          children: ["Then increment the cursor offset by the length of the array + 1 (trailing ", jsxRuntime.exports.jsx(_components.code, {
            children: "0"
          }), " byte)."]
        })]
      }), jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
        children: [jsxRuntime.exports.jsxs(_components.p, {
          children: [jsxRuntime.exports.jsx(_components.code, {
            children: "String::from_utf8"
          }), " may return error, if the bytes are not valid UTF-8.\r\n", jsxRuntime.exports.jsx(_components.code, {
            children: "map_err(..)"
          }), " method converts error to custom error type ", jsxRuntime.exports.jsx(_components.code, {
            children: "E: Error"
          }), "."]
        }), jsxRuntime.exports.jsxs(_components.p, {
          children: ["In Rust, there is no ", jsxRuntime.exports.jsx(_components.code, {
            children: "try/catch"
          }), " block. Instead, pattern match is used to handle error.\r\nQuestion mark ", jsxRuntime.exports.jsx(_components.code, {
            children: "?"
          }), " operator is a shortcut for,"]
        }), jsxRuntime.exports.jsx(CH.Code, {
          northPanel: {
            "tabs": [""],
            "active": "",
            "heightRatio": 1
          },
          files: [{
            "name": "",
            "focus": "",
            "code": {
              "lines": [{
                "tokens": [{
                  "content": "let",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " val ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "=",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "match",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " err { ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }]
              }, {
                "tokens": [{
                  "content": "    ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "Ok",
                  "props": {
                    "style": {
                      "color": "#FFA657"
                    }
                  }
                }, {
                  "content": "(val) ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "=>",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " val,",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }]
              }, {
                "tokens": [{
                  "content": "    ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "Err",
                  "props": {
                    "style": {
                      "color": "#FFA657"
                    }
                  }
                }, {
                  "content": "(err) ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "=>",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "return",
                  "props": {
                    "style": {
                      "color": "#FF7B72"
                    }
                  }
                }, {
                  "content": " ",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }, {
                  "content": "Err",
                  "props": {
                    "style": {
                      "color": "#FFA657"
                    }
                  }
                }, {
                  "content": "(err),",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }]
              }, {
                "tokens": [{
                  "content": "}",
                  "props": {
                    "style": {
                      "color": "#C9D1D9"
                    }
                  }
                }]
              }],
              "lang": "rust"
            },
            "annotations": []
          }],
          codeConfig: chCodeConfig
        })]
      }), jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, {
        children: jsxRuntime.exports.jsxs(_components.p, {
          children: ["last expression without ", jsxRuntime.exports.jsx(_components.code, {
            children: ";"
          }), " is returned from function."]
        })
      })]
    });
  }
}
function _missingMdxReference(id2, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id2 + "` to be defined: you likely forgot to import, pass, or provide it.");
}
(_a = window.code) != null ? _a : window.code = {};
window.code.errcode = (ele) => ReactDOM.render(React.createElement(MDXContent$4), ele);
window.code.frame = (ele) => ReactDOM.render(React.createElement(MDXContent$3), ele);
window.code.frame_decoder = (ele) => ReactDOM.render(React.createElement(MDXContent$2), ele);
window.code.frame_encoder = (ele) => ReactDOM.render(React.createElement(MDXContent$1), ele);
window.code.text_parser = (ele) => ReactDOM.render(React.createElement(MDXContent), ele);
