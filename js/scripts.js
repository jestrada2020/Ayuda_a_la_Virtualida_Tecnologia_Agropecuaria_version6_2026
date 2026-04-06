(function () {
  const P = document.createElement("link").relList;
  if (P && P.supports && P.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) O(E);
  new MutationObserver((E) => {
    for (const V of E)
      if (V.type === "childList")
        for (const q of V.addedNodes)
          q.tagName === "LINK" && q.rel === "modulepreload" && O(q);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(E) {
    const V = {};
    return (
      E.integrity && (V.integrity = E.integrity),
      E.referrerPolicy && (V.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (V.credentials = "include")
        : E.crossOrigin === "anonymous"
          ? (V.credentials = "omit")
          : (V.credentials = "same-origin"),
      V
    );
  }
  function O(E) {
    if (E.ep) return;
    E.ep = !0;
    const V = d(E);
    fetch(E.href, V);
  }
})();
var _u = { exports: {} },
  gr = {},
  Pu = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Mf() {
  if (_a) return U;
  _a = 1;
  var C = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    V = Symbol.for("react.provider"),
    q = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    J = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function Q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var ge = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ce = Object.assign,
    b = {};
  function K(c, y, F) {
    ((this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = F || ge));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (K.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function be() {}
  be.prototype = K.prototype;
  function He(c, y, F) {
    ((this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = F || ge));
  }
  var We = (He.prototype = new be());
  ((We.constructor = He), Ce(We, K.prototype), (We.isPureReactComponent = !0));
  var fe = Array.isArray,
    Ie = Object.prototype.hasOwnProperty,
    xe = { current: null },
    Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(c, y, F) {
    var A,
      B = {},
      H = null,
      ee = null;
    if (y != null)
      for (A in (y.ref !== void 0 && (ee = y.ref),
      y.key !== void 0 && (H = "" + y.key),
      y))
        Ie.call(y, A) && !Pe.hasOwnProperty(A) && (B[A] = y[A]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = F;
    else if (1 < Y) {
      for (var ue = Array(Y), Xe = 0; Xe < Y; Xe++) ue[Xe] = arguments[Xe + 2];
      B.children = ue;
    }
    if (c && c.defaultProps)
      for (A in ((Y = c.defaultProps), Y)) B[A] === void 0 && (B[A] = Y[A]);
    return {
      $$typeof: C,
      type: c,
      key: H,
      ref: ee,
      props: B,
      _owner: xe.current,
    };
  }
  function et(c, y) {
    return {
      $$typeof: C,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function Qe(c) {
    return typeof c == "object" && c !== null && c.$$typeof === C;
  }
  function tt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (F) {
        return y[F];
      })
    );
  }
  var nt = /\/+/g;
  function Me(c, y) {
    return typeof c == "object" && c !== null && c.key != null
      ? tt("" + c.key)
      : y.toString(36);
  }
  function Ke(c, y, F, A, B) {
    var H = typeof c;
    (H === "undefined" || H === "boolean") && (c = null);
    var ee = !1;
    if (c === null) ee = !0;
    else
      switch (H) {
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case C:
            case P:
              ee = !0;
          }
      }
    if (ee)
      return (
        (ee = c),
        (B = B(ee)),
        (c = A === "" ? "." + Me(ee, 0) : A),
        fe(B)
          ? ((F = ""),
            c != null && (F = c.replace(nt, "$&/") + "/"),
            Ke(B, y, F, "", function (Xe) {
              return Xe;
            }))
          : B != null &&
            (Qe(B) &&
              (B = et(
                B,
                F +
                  (!B.key || (ee && ee.key === B.key)
                    ? ""
                    : ("" + B.key).replace(nt, "$&/") + "/") +
                  c,
              )),
            y.push(B)),
        1
      );
    if (((ee = 0), (A = A === "" ? "." : A + ":"), fe(c)))
      for (var Y = 0; Y < c.length; Y++) {
        H = c[Y];
        var ue = A + Me(H, Y);
        ee += Ke(H, y, F, ue, B);
      }
    else if (((ue = Q(c)), typeof ue == "function"))
      for (c = ue.call(c), Y = 0; !(H = c.next()).done; )
        ((H = H.value), (ue = A + Me(H, Y++)), (ee += Ke(H, y, F, ue, B)));
    else if (H === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ee;
  }
  function Ye(c, y, F) {
    if (c == null) return c;
    var A = [],
      B = 0;
    return (
      Ke(c, A, "", "", function (H) {
        return y.call(F, H, B++);
      }),
      A
    );
  }
  function Ee(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (F) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = F));
          },
          function (F) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = F));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var re = { current: null },
    f = { transition: null },
    S = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: f,
      ReactCurrentOwner: xe,
    };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: Ye,
      forEach: function (c, y, F) {
        Ye(
          c,
          function () {
            y.apply(this, arguments);
          },
          F,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          Ye(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          Ye(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!Qe(c))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return c;
      },
    }),
    (U.Component = K),
    (U.Fragment = d),
    (U.Profiler = E),
    (U.PureComponent = He),
    (U.StrictMode = O),
    (U.Suspense = I),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S),
    (U.act = N),
    (U.cloneElement = function (c, y, F) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = Ce({}, c.props),
        B = c.key,
        H = c.ref,
        ee = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((H = y.ref), (ee = xe.current)),
          y.key !== void 0 && (B = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Y = c.type.defaultProps;
        for (ue in y)
          Ie.call(y, ue) &&
            !Pe.hasOwnProperty(ue) &&
            (A[ue] = y[ue] === void 0 && Y !== void 0 ? Y[ue] : y[ue]);
      }
      var ue = arguments.length - 2;
      if (ue === 1) A.children = F;
      else if (1 < ue) {
        Y = Array(ue);
        for (var Xe = 0; Xe < ue; Xe++) Y[Xe] = arguments[Xe + 2];
        A.children = Y;
      }
      return {
        $$typeof: C,
        type: c.type,
        key: B,
        ref: H,
        props: A,
        _owner: ee,
      };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: q,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: V, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = je),
    (U.createFactory = function (c) {
      var y = je.bind(null, c);
      return ((y.type = c), y);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: Z, render: c };
    }),
    (U.isValidElement = Qe),
    (U.lazy = function (c) {
      return { $$typeof: G, _payload: { _status: -1, _result: c }, _init: Ee };
    }),
    (U.memo = function (c, y) {
      return { $$typeof: J, type: c, compare: y === void 0 ? null : y };
    }),
    (U.startTransition = function (c) {
      var y = f.transition;
      f.transition = {};
      try {
        c();
      } finally {
        f.transition = y;
      }
    }),
    (U.unstable_act = N),
    (U.useCallback = function (c, y) {
      return re.current.useCallback(c, y);
    }),
    (U.useContext = function (c) {
      return re.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return re.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, y) {
      return re.current.useEffect(c, y);
    }),
    (U.useId = function () {
      return re.current.useId();
    }),
    (U.useImperativeHandle = function (c, y, F) {
      return re.current.useImperativeHandle(c, y, F);
    }),
    (U.useInsertionEffect = function (c, y) {
      return re.current.useInsertionEffect(c, y);
    }),
    (U.useLayoutEffect = function (c, y) {
      return re.current.useLayoutEffect(c, y);
    }),
    (U.useMemo = function (c, y) {
      return re.current.useMemo(c, y);
    }),
    (U.useReducer = function (c, y, F) {
      return re.current.useReducer(c, y, F);
    }),
    (U.useRef = function (c) {
      return re.current.useRef(c);
    }),
    (U.useState = function (c) {
      return re.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, y, F) {
      return re.current.useSyncExternalStore(c, y, F);
    }),
    (U.useTransition = function () {
      return re.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var Pa;
function Tu() {
  return (Pa || ((Pa = 1), (Pu.exports = Mf())), Pu.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Of() {
  if (ja) return gr;
  ja = 1;
  var C = Tu(),
    P = Symbol.for("react.element"),
    d = Symbol.for("react.fragment"),
    O = Object.prototype.hasOwnProperty,
    E = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(Z, I, J) {
    var G,
      ne = {},
      Q = null,
      ge = null;
    (J !== void 0 && (Q = "" + J),
      I.key !== void 0 && (Q = "" + I.key),
      I.ref !== void 0 && (ge = I.ref));
    for (G in I) O.call(I, G) && !V.hasOwnProperty(G) && (ne[G] = I[G]);
    if (Z && Z.defaultProps)
      for (G in ((I = Z.defaultProps), I)) ne[G] === void 0 && (ne[G] = I[G]);
    return {
      $$typeof: P,
      type: Z,
      key: Q,
      ref: ge,
      props: ne,
      _owner: E.current,
    };
  }
  return ((gr.Fragment = d), (gr.jsx = q), (gr.jsxs = q), gr);
}
var za;
function Df() {
  return (za || ((za = 1), (_u.exports = Of())), _u.exports);
}
var v = Df(),
  ye = Tu(),
  Tl = {},
  ju = { exports: {} },
  Be = {},
  zu = { exports: {} },
  Lu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function If() {
  return (
    La ||
      ((La = 1),
      (function (C) {
        function P(f, S) {
          var N = f.length;
          f.push(S);
          e: for (; 0 < N; ) {
            var c = (N - 1) >>> 1,
              y = f[c];
            if (0 < E(y, S)) ((f[c] = S), (f[N] = y), (N = c));
            else break e;
          }
        }
        function d(f) {
          return f.length === 0 ? null : f[0];
        }
        function O(f) {
          if (f.length === 0) return null;
          var S = f[0],
            N = f.pop();
          if (N !== S) {
            f[0] = N;
            e: for (var c = 0, y = f.length, F = y >>> 1; c < F; ) {
              var A = 2 * (c + 1) - 1,
                B = f[A],
                H = A + 1,
                ee = f[H];
              if (0 > E(B, N))
                H < y && 0 > E(ee, B)
                  ? ((f[c] = ee), (f[H] = N), (c = H))
                  : ((f[c] = B), (f[A] = N), (c = A));
              else if (H < y && 0 > E(ee, N))
                ((f[c] = ee), (f[H] = N), (c = H));
              else break e;
            }
          }
          return S;
        }
        function E(f, S) {
          var N = f.sortIndex - S.sortIndex;
          return N !== 0 ? N : f.id - S.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var V = performance;
          C.unstable_now = function () {
            return V.now();
          };
        } else {
          var q = Date,
            Z = q.now();
          C.unstable_now = function () {
            return q.now() - Z;
          };
        }
        var I = [],
          J = [],
          G = 1,
          ne = null,
          Q = 3,
          ge = !1,
          Ce = !1,
          b = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          be = typeof clearTimeout == "function" ? clearTimeout : null,
          He = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function We(f) {
          for (var S = d(J); S !== null; ) {
            if (S.callback === null) O(J);
            else if (S.startTime <= f)
              (O(J), (S.sortIndex = S.expirationTime), P(I, S));
            else break;
            S = d(J);
          }
        }
        function fe(f) {
          if (((b = !1), We(f), !Ce))
            if (d(I) !== null) ((Ce = !0), Ee(Ie));
            else {
              var S = d(J);
              S !== null && re(fe, S.startTime - f);
            }
        }
        function Ie(f, S) {
          ((Ce = !1), b && ((b = !1), be(je), (je = -1)), (ge = !0));
          var N = Q;
          try {
            for (
              We(S), ne = d(I);
              ne !== null && (!(ne.expirationTime > S) || (f && !tt()));
            ) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (Q = ne.priorityLevel));
                var y = c(ne.expirationTime <= S);
                ((S = C.unstable_now()),
                  typeof y == "function"
                    ? (ne.callback = y)
                    : ne === d(I) && O(I),
                  We(S));
              } else O(I);
              ne = d(I);
            }
            if (ne !== null) var F = !0;
            else {
              var A = d(J);
              (A !== null && re(fe, A.startTime - S), (F = !1));
            }
            return F;
          } finally {
            ((ne = null), (Q = N), (ge = !1));
          }
        }
        var xe = !1,
          Pe = null,
          je = -1,
          et = 5,
          Qe = -1;
        function tt() {
          return !(C.unstable_now() - Qe < et);
        }
        function nt() {
          if (Pe !== null) {
            var f = C.unstable_now();
            Qe = f;
            var S = !0;
            try {
              S = Pe(!0, f);
            } finally {
              S ? Me() : ((xe = !1), (Pe = null));
            }
          } else xe = !1;
        }
        var Me;
        if (typeof He == "function")
          Me = function () {
            He(nt);
          };
        else if (typeof MessageChannel < "u") {
          var Ke = new MessageChannel(),
            Ye = Ke.port2;
          ((Ke.port1.onmessage = nt),
            (Me = function () {
              Ye.postMessage(null);
            }));
        } else
          Me = function () {
            K(nt, 0);
          };
        function Ee(f) {
          ((Pe = f), xe || ((xe = !0), Me()));
        }
        function re(f, S) {
          je = K(function () {
            f(C.unstable_now());
          }, S);
        }
        ((C.unstable_IdlePriority = 5),
          (C.unstable_ImmediatePriority = 1),
          (C.unstable_LowPriority = 4),
          (C.unstable_NormalPriority = 3),
          (C.unstable_Profiling = null),
          (C.unstable_UserBlockingPriority = 2),
          (C.unstable_cancelCallback = function (f) {
            f.callback = null;
          }),
          (C.unstable_continueExecution = function () {
            Ce || ge || ((Ce = !0), Ee(Ie));
          }),
          (C.unstable_forceFrameRate = function (f) {
            0 > f || 125 < f
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (et = 0 < f ? Math.floor(1e3 / f) : 5);
          }),
          (C.unstable_getCurrentPriorityLevel = function () {
            return Q;
          }),
          (C.unstable_getFirstCallbackNode = function () {
            return d(I);
          }),
          (C.unstable_next = function (f) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
                var S = 3;
                break;
              default:
                S = Q;
            }
            var N = Q;
            Q = S;
            try {
              return f();
            } finally {
              Q = N;
            }
          }),
          (C.unstable_pauseExecution = function () {}),
          (C.unstable_requestPaint = function () {}),
          (C.unstable_runWithPriority = function (f, S) {
            switch (f) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                f = 3;
            }
            var N = Q;
            Q = f;
            try {
              return S();
            } finally {
              Q = N;
            }
          }),
          (C.unstable_scheduleCallback = function (f, S, N) {
            var c = C.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay),
                  (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
              f)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = N + y),
              (f = {
                id: G++,
                callback: S,
                priorityLevel: f,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > c
                ? ((f.sortIndex = N),
                  P(J, f),
                  d(I) === null &&
                    f === d(J) &&
                    (b ? (be(je), (je = -1)) : (b = !0), re(fe, N - c)))
                : ((f.sortIndex = y), P(I, f), Ce || ge || ((Ce = !0), Ee(Ie))),
              f
            );
          }),
          (C.unstable_shouldYield = tt),
          (C.unstable_wrapCallback = function (f) {
            var S = Q;
            return function () {
              var N = Q;
              Q = S;
              try {
                return f.apply(this, arguments);
              } finally {
                Q = N;
              }
            };
          }));
      })(Lu)),
    Lu
  );
}
var Ta;
function Ff() {
  return (Ta || ((Ta = 1), (zu.exports = If())), zu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Uf() {
  if (Ra) return Be;
  Ra = 1;
  var C = Tu(),
    P = Ff();
  function d(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var O = new Set(),
    E = {};
  function V(e, t) {
    (q(e, t), q(e + "Capture", t));
  }
  function q(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) O.add(t[e]);
  }
  var Z = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    I = Object.prototype.hasOwnProperty,
    J =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    G = {},
    ne = {};
  function Q(e) {
    return I.call(ne, e)
      ? !0
      : I.call(G, e)
        ? !1
        : J.test(e)
          ? (ne[e] = !0)
          : ((G[e] = !0), !1);
  }
  function ge(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Ce(e, t, n, r) {
    if (t === null || typeof t > "u" || ge(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, r, l, o, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u));
  }
  var K = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      K[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        K[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      K[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var be = /[\-:]([a-z])/g;
  function He(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(be, He);
      K[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(be, He);
        K[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(be, He);
      K[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function We(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Ce(t, n, l, r) && (n = null),
      r || l === null
        ? Q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var fe = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ie = Symbol.for("react.element"),
    xe = Symbol.for("react.portal"),
    Pe = Symbol.for("react.fragment"),
    je = Symbol.for("react.strict_mode"),
    et = Symbol.for("react.profiler"),
    Qe = Symbol.for("react.provider"),
    tt = Symbol.for("react.context"),
    nt = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    Ke = Symbol.for("react.suspense_list"),
    Ye = Symbol.for("react.memo"),
    Ee = Symbol.for("react.lazy"),
    re = Symbol.for("react.offscreen"),
    f = Symbol.iterator;
  function S(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (f && e[f]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var N = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var F = !1;
  function A(e, t) {
    if (!e || F) return "";
    F = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            i = o.length - 1;
          1 <= u && 0 <= i && l[u] !== o[i];
        )
          i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (l[u] !== o[i]) {
            if (u !== 1 || i !== 1)
              do
                if ((u--, i--, 0 > i || l[u] !== o[i])) {
                  var s =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= i);
            break;
          }
      }
    } finally {
      ((F = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case xe:
        return "Portal";
      case et:
        return "Profiler";
      case je:
        return "StrictMode";
      case Me:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case tt:
          return (e.displayName || "Context") + ".Consumer";
        case Qe:
          return (e._context.displayName || "Context") + ".Provider";
        case nt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ye:
          return (
            (t = e.displayName || null),
            t !== null ? t : H(e.type) || "Memo"
          );
        case Ee:
          ((t = e._payload), (e = e._init));
          try {
            return H(e(t));
          } catch {}
      }
    return null;
  }
  function ee(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return H(t);
      case 8:
        return t === je ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Y(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ue(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = ue(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((r = "" + u), o.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Ru(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ue(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Mu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Y(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Ou(e, t) {
    ((t = t.checked), t != null && We(e, "checked", t, !1));
  }
  function Ml(e, t) {
    Ou(e, t);
    var n = Y(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Ol(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, Y(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Du(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Iu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(d(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Fu(e, t) {
    var n = Y(t.value),
      r = Y(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Au(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Au(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Cr,
    Vu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Cr = Cr || document.createElement("div"),
            Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Cr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ia = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Ia.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function $u(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Bu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = $u(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Fa = N(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Fl(e, t) {
    if (t) {
      if (Fa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
    }
  }
  function Ul(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Al = null;
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    an = null,
    cn = null;
  function Hu(e) {
    if ((e = rr(e))) {
      if (typeof $l != "function") throw Error(d(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Wu(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Qu() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e]);
    }
  }
  function Ku(e, t) {
    return e(t);
  }
  function Yu() {}
  var Bl = !1;
  function Xu(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Ku(e, t, n);
    } finally {
      ((Bl = !1), (an !== null || cn !== null) && (Yu(), Qu()));
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(d(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (Z)
    try {
      var Fn = {};
      (Object.defineProperty(Fn, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", Fn, Fn),
        window.removeEventListener("test", Fn, Fn));
    } catch {
      Hl = !1;
    }
  function Ua(e, t, n, r, l, o, u, i, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (x) {
      this.onError(x);
    }
  }
  var Un = !1,
    Er = null,
    Nr = !1,
    Wl = null,
    Aa = {
      onError: function (e) {
        ((Un = !0), (Er = e));
      },
    };
  function Va(e, t, n, r, l, o, u, i, s) {
    ((Un = !1), (Er = null), Ua.apply(Aa, arguments));
  }
  function $a(e, t, n, r, l, o, u, i, s) {
    if ((Va.apply(this, arguments), Un)) {
      if (Un) {
        var h = Er;
        ((Un = !1), (Er = null));
      } else throw Error(d(198));
      Nr || ((Nr = !0), (Wl = h));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Gu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Zu(e) {
    if (Xt(e) !== e) throw Error(d(188));
  }
  function Ba(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (Zu(l), e);
          if (o === r) return (Zu(l), t);
          o = o.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === n) {
            ((u = !0), (n = l), (r = o));
            break;
          }
          if (i === r) {
            ((u = !0), (r = l), (n = o));
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === n) {
              ((u = !0), (n = o), (r = l));
              break;
            }
            if (i === r) {
              ((u = !0), (r = o), (n = l));
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ju(e) {
    return ((e = Ba(e)), e !== null ? qu(e) : null);
  }
  function qu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bu = P.unstable_scheduleCallback,
    ei = P.unstable_cancelCallback,
    Ha = P.unstable_shouldYield,
    Wa = P.unstable_requestPaint,
    de = P.unstable_now,
    Qa = P.unstable_getCurrentPriorityLevel,
    Ql = P.unstable_ImmediatePriority,
    ti = P.unstable_UserBlockingPriority,
    _r = P.unstable_NormalPriority,
    Ka = P.unstable_LowPriority,
    ni = P.unstable_IdlePriority,
    Pr = null,
    vt = null;
  function Ya(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var at = Math.clz32 ? Math.clz32 : Za,
    Xa = Math.log,
    Ga = Math.LN2;
  function Za(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xa(e) / Ga) | 0)) | 0);
  }
  var jr = 64,
    zr = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? (r = An(i)) : ((o &= u), o !== 0 && (r = An(o)));
    } else ((u = n & ~l), u !== 0 ? (r = An(u)) : o !== 0 && (r = An(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - at(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Ja(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qa(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;
    ) {
      var u = 31 - at(o),
        i = 1 << u,
        s = l[u];
      (s === -1
        ? ((i & n) === 0 || (i & r) !== 0) && (l[u] = Ja(i, t))
        : s <= t && (e.expiredLanes |= i),
        (o &= ~i));
    }
  }
  function Kl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ri() {
    var e = jr;
    return ((jr <<= 1), (jr & 4194240) === 0 && (jr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - at(t)),
      (e[t] = n));
  }
  function ba(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var X = 0;
  function li(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var oi,
    Gl,
    ui,
    ii,
    si,
    Zl = !1,
    Tr = [],
    zt = null,
    Lt = null,
    Tt = null,
    $n = new Map(),
    Bn = new Map(),
    Rt = [],
    ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ai(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Hn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Hn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = Hn(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return ($n.set(o, Hn($n.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Bn.set(o, Hn(Bn.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function ci(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Gu(n)), t !== null)) {
            ((e.blockedOn = t),
              si(e.priority, function () {
                ui(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = rr(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fi(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function nc() {
    ((Zl = !1),
      zt !== null && Rr(zt) && (zt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Tt !== null && Rr(Tt) && (Tt = null),
      $n.forEach(fi),
      Bn.forEach(fi));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl ||
        ((Zl = !0),
        P.unstable_scheduleCallback(P.unstable_NormalPriority, nc)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Tr.length) {
      Wn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Wn(zt, e),
        Lt !== null && Wn(Lt, e),
        Tt !== null && Wn(Tt, e),
        $n.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
      (ci(n), n.blockedOn === null && Rt.shift());
  }
  var fn = fe.ReactCurrentBatchConfig,
    Mr = !0;
  function rc(e, t, n, r) {
    var l = X,
      o = fn.transition;
    fn.transition = null;
    try {
      ((X = 1), Jl(e, t, n, r));
    } finally {
      ((X = l), (fn.transition = o));
    }
  }
  function lc(e, t, n, r) {
    var l = X,
      o = fn.transition;
    fn.transition = null;
    try {
      ((X = 4), Jl(e, t, n, r));
    } finally {
      ((X = l), (fn.transition = o));
    }
  }
  function Jl(e, t, n, r) {
    if (Mr) {
      var l = ql(e, t, n, r);
      if (l === null) (vo(e, t, r, Or, n), ai(e, r));
      else if (tc(l, e, t, n, r)) r.stopPropagation();
      else if ((ai(e, r), t & 4 && -1 < ec.indexOf(e))) {
        for (; l !== null; ) {
          var o = rr(l);
          if (
            (o !== null && oi(o),
            (o = ql(e, t, n, r)),
            o === null && vo(e, t, r, Or, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else vo(e, t, r, null, n);
    }
  }
  var Or = null;
  function ql(e, t, n, r) {
    if (((Or = null), (e = Vl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Gu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Or = e), null);
  }
  function di(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qa()) {
          case Ql:
            return 1;
          case ti:
            return 4;
          case _r:
          case Ka:
            return 16;
          case ni:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    bl = null,
    Dr = null;
  function pi() {
    if (Dr) return Dr;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function mi() {
    return !1;
  }
  function Ge(e) {
    function t(n, r, l, o, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var i in e)
        e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Fr
          : mi),
        (this.isPropagationStopped = mi),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
      }),
      t
    );
  }
  var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eo = Ge(dn),
    Kn = N({}, dn, { view: 0, detail: 0 }),
    oc = Ge(Kn),
    to,
    no,
    Yn,
    Ur = N({}, Kn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((to = e.screenX - Yn.screenX), (no = e.screenY - Yn.screenY))
                : (no = to = 0),
              (Yn = e)),
            to);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : no;
      },
    }),
    hi = Ge(Ur),
    uc = N({}, Ur, { dataTransfer: 0 }),
    ic = Ge(uc),
    sc = N({}, Kn, { relatedTarget: 0 }),
    ro = Ge(sc),
    ac = N({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cc = Ge(ac),
    fc = N({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    dc = Ge(fc),
    pc = N({}, dn, { data: 0 }),
    vi = Ge(pc),
    mc = {
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
      MozPrintableKey: "Unidentified",
    },
    hc = {
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
      224: "Meta",
    },
    vc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vc[e])
        ? !!t[e]
        : !1;
  }
  function lo() {
    return yc;
  }
  var gc = N({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = mc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? hc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lo,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    xc = Ge(gc),
    wc = N({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yi = Ge(wc),
    kc = N({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lo,
    }),
    Sc = Ge(kc),
    Cc = N({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ec = Ge(Cc),
    Nc = N({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _c = Ge(Nc),
    Pc = [9, 13, 27, 32],
    oo = Z && "CompositionEvent" in window,
    Xn = null;
  Z && "documentMode" in document && (Xn = document.documentMode);
  var jc = Z && "TextEvent" in window && !Xn,
    gi = Z && (!oo || (Xn && 8 < Xn && 11 >= Xn)),
    xi = " ",
    wi = !1;
  function ki(e, t) {
    switch (e) {
      case "keyup":
        return Pc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Si(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var pn = !1;
  function zc(e, t) {
    switch (e) {
      case "compositionend":
        return Si(t);
      case "keypress":
        return t.which !== 32 ? null : ((wi = !0), xi);
      case "textInput":
        return ((e = t.data), e === xi && wi ? null : e);
      default:
        return null;
    }
  }
  function Lc(e, t) {
    if (pn)
      return e === "compositionend" || (!oo && ki(e, t))
        ? ((e = pi()), (Dr = bl = Mt = null), (pn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ci(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tc[e.type] : t === "textarea";
  }
  function Ei(e, t, n, r) {
    (Wu(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new eo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Zn = null;
  function Rc(e) {
    Bi(e, 0);
  }
  function Ar(e) {
    var t = gn(e);
    if (Ru(t)) return e;
  }
  function Mc(e, t) {
    if (e === "change") return t;
  }
  var Ni = !1;
  if (Z) {
    var uo;
    if (Z) {
      var io = "oninput" in document;
      if (!io) {
        var _i = document.createElement("div");
        (_i.setAttribute("oninput", "return;"),
          (io = typeof _i.oninput == "function"));
      }
      uo = io;
    } else uo = !1;
    Ni = uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    Gn && (Gn.detachEvent("onpropertychange", ji), (Zn = Gn = null));
  }
  function ji(e) {
    if (e.propertyName === "value" && Ar(Zn)) {
      var t = [];
      (Ei(t, Zn, e, Vl(e)), Xu(Rc, t));
    }
  }
  function Oc(e, t, n) {
    e === "focusin"
      ? (Pi(), (Gn = t), (Zn = n), Gn.attachEvent("onpropertychange", ji))
      : e === "focusout" && Pi();
  }
  function Dc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(Zn);
  }
  function Ic(e, t) {
    if (e === "click") return Ar(t);
  }
  function Fc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Uc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : Uc;
  function Jn(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!I.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function zi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Li(e, t) {
    var n = zi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zi(n);
    }
  }
  function Ti(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ti(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ri() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ac(e) {
    var t = Ri(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ti(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && so(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Li(n, o)));
          var u = Li(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Vc = Z && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ao = null,
    qn = null,
    co = !1;
  function Mi(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    co ||
      mn == null ||
      mn !== Sr(r) ||
      ((r = mn),
      "selectionStart" in r && so(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qn && Jn(qn, r)) ||
        ((qn = r),
        (r = Hr(ao, "onSelect")),
        0 < r.length &&
          ((t = new eo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    fo = {},
    Oi = {};
  Z &&
    ((Oi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function $r(e) {
    if (fo[e]) return fo[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Oi) return (fo[e] = t[n]);
    return e;
  }
  var Di = $r("animationend"),
    Ii = $r("animationiteration"),
    Fi = $r("animationstart"),
    Ui = $r("transitionend"),
    Ai = new Map(),
    Vi =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Ai.set(e, t), V(t, [e]));
  }
  for (var po = 0; po < Vi.length; po++) {
    var mo = Vi[po],
      $c = mo.toLowerCase(),
      Bc = mo[0].toUpperCase() + mo.slice(1);
    Ot($c, "on" + Bc);
  }
  (Ot(Di, "onAnimationEnd"),
    Ot(Ii, "onAnimationIteration"),
    Ot(Fi, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Ui, "onTransitionEnd"),
    q("onMouseEnter", ["mouseout", "mouseover"]),
    q("onMouseLeave", ["mouseout", "mouseover"]),
    q("onPointerEnter", ["pointerout", "pointerover"]),
    q("onPointerLeave", ["pointerout", "pointerover"]),
    V(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    V(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    V("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    V(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    V(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    V(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Hc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bn),
    );
  function $i(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), $a(r, t, void 0, e), (e.currentTarget = null));
  }
  function Bi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var i = r[u],
              s = i.instance,
              h = i.currentTarget;
            if (((i = i.listener), s !== o && l.isPropagationStopped()))
              break e;
            ($i(l, i, h), (o = s));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((i = r[u]),
              (s = i.instance),
              (h = i.currentTarget),
              (i = i.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            ($i(l, i, h), (o = s));
          }
      }
    }
    if (Nr) throw ((e = Wl), (Nr = !1), (Wl = null), e);
  }
  function le(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Hi(t, e, 2, !1), n.add(r));
  }
  function ho(e, t, n) {
    var r = 0;
    (t && (r |= 4), Hi(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        O.forEach(function (n) {
          n !== "selectionchange" && (Hc.has(n) || ho(n, !1, e), ho(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), ho("selectionchange", !1, t));
    }
  }
  function Hi(e, t, n, r) {
    switch (di(t)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = Jl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function vo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; i !== null; ) {
            if (((u = Gt(i)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    Xu(function () {
      var h = o,
        x = Vl(n),
        w = [];
      e: {
        var g = Ai.get(e);
        if (g !== void 0) {
          var _ = eo,
            z = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = xc;
              break;
            case "focusin":
              ((z = "focus"), (_ = ro));
              break;
            case "focusout":
              ((z = "blur"), (_ = ro));
              break;
            case "beforeblur":
            case "afterblur":
              _ = ro;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = ic;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Sc;
              break;
            case Di:
            case Ii:
            case Fi:
              _ = cc;
              break;
            case Ui:
              _ = Ec;
              break;
            case "scroll":
              _ = oc;
              break;
            case "wheel":
              _ = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = dc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = yi;
          }
          var L = (t & 4) !== 0,
            pe = !L && e === "scroll",
            p = L ? (g !== null ? g + "Capture" : null) : g;
          L = [];
          for (var a = h, m; a !== null; ) {
            m = a;
            var k = m.stateNode;
            if (
              (m.tag === 5 &&
                k !== null &&
                ((m = k),
                p !== null &&
                  ((k = In(a, p)), k != null && L.push(tr(a, k, m)))),
              pe)
            )
              break;
            a = a.return;
          }
          0 < L.length &&
            ((g = new _(g, z, null, n, x)), w.push({ event: g, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            g &&
              n !== Al &&
              (z = n.relatedTarget || n.fromElement) &&
              (Gt(z) || z[kt]))
          )
            break e;
          if (
            (_ || g) &&
            ((g =
              x.window === x
                ? x
                : (g = x.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            _
              ? ((z = n.relatedTarget || n.toElement),
                (_ = h),
                (z = z ? Gt(z) : null),
                z !== null &&
                  ((pe = Xt(z)), z !== pe || (z.tag !== 5 && z.tag !== 6)) &&
                  (z = null))
              : ((_ = null), (z = h)),
            _ !== z)
          ) {
            if (
              ((L = hi),
              (k = "onMouseLeave"),
              (p = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = yi),
                (k = "onPointerLeave"),
                (p = "onPointerEnter"),
                (a = "pointer")),
              (pe = _ == null ? g : gn(_)),
              (m = z == null ? g : gn(z)),
              (g = new L(k, a + "leave", _, n, x)),
              (g.target = pe),
              (g.relatedTarget = m),
              (k = null),
              Gt(x) === h &&
                ((L = new L(p, a + "enter", z, n, x)),
                (L.target = m),
                (L.relatedTarget = pe),
                (k = L)),
              (pe = k),
              _ && z)
            )
              t: {
                for (L = _, p = z, a = 0, m = L; m; m = vn(m)) a++;
                for (m = 0, k = p; k; k = vn(k)) m++;
                for (; 0 < a - m; ) ((L = vn(L)), a--);
                for (; 0 < m - a; ) ((p = vn(p)), m--);
                for (; a--; ) {
                  if (L === p || (p !== null && L === p.alternate)) break t;
                  ((L = vn(L)), (p = vn(p)));
                }
                L = null;
              }
            else L = null;
            (_ !== null && Wi(w, g, _, L, !1),
              z !== null && pe !== null && Wi(w, pe, z, L, !0));
          }
        }
        e: {
          if (
            ((g = h ? gn(h) : window),
            (_ = g.nodeName && g.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && g.type === "file"))
          )
            var T = Mc;
          else if (Ci(g))
            if (Ni) T = Fc;
            else {
              T = Dc;
              var R = Oc;
            }
          else
            (_ = g.nodeName) &&
              _.toLowerCase() === "input" &&
              (g.type === "checkbox" || g.type === "radio") &&
              (T = Ic);
          if (T && (T = T(e, h))) {
            Ei(w, T, n, x);
            break e;
          }
          (R && R(e, g, h),
            e === "focusout" &&
              (R = g._wrapperState) &&
              R.controlled &&
              g.type === "number" &&
              Ol(g, "number", g.value));
        }
        switch (((R = h ? gn(h) : window), e)) {
          case "focusin":
            (Ci(R) || R.contentEditable === "true") &&
              ((mn = R), (ao = h), (qn = null));
            break;
          case "focusout":
            qn = ao = mn = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((co = !1), Mi(w, n, x));
            break;
          case "selectionchange":
            if (Vc) break;
          case "keydown":
          case "keyup":
            Mi(w, n, x);
        }
        var M;
        if (oo)
          e: {
            switch (e) {
              case "compositionstart":
                var D = "onCompositionStart";
                break e;
              case "compositionend":
                D = "onCompositionEnd";
                break e;
              case "compositionupdate":
                D = "onCompositionUpdate";
                break e;
            }
            D = void 0;
          }
        else
          pn
            ? ki(e, n) && (D = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (D = "onCompositionStart");
        (D &&
          (gi &&
            n.locale !== "ko" &&
            (pn || D !== "onCompositionStart"
              ? D === "onCompositionEnd" && pn && (M = pi())
              : ((Mt = x),
                (bl = "value" in Mt ? Mt.value : Mt.textContent),
                (pn = !0))),
          (R = Hr(h, D)),
          0 < R.length &&
            ((D = new vi(D, e, null, n, x)),
            w.push({ event: D, listeners: R }),
            M ? (D.data = M) : ((M = Si(n)), M !== null && (D.data = M)))),
          (M = jc ? zc(e, n) : Lc(e, n)) &&
            ((h = Hr(h, "onBeforeInput")),
            0 < h.length &&
              ((x = new vi("onBeforeInput", "beforeinput", null, n, x)),
              w.push({ event: x, listeners: h }),
              (x.data = M))));
      }
      Bi(w, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = In(e, n)),
        o != null && r.unshift(tr(e, o, l)),
        (o = In(e, t)),
        o != null && r.push(tr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wi(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n,
        s = i.alternate,
        h = i.stateNode;
      if (s !== null && s === r) break;
      (i.tag === 5 &&
        h !== null &&
        ((i = h),
        l
          ? ((s = In(n, o)), s != null && u.unshift(tr(n, s, i)))
          : l || ((s = In(n, o)), s != null && u.push(tr(n, s, i)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Wc = /\r\n?/g,
    Qc = /\u0000|\uFFFD/g;
  function Qi(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wc,
        `
`,
      )
      .replace(Qc, "");
  }
  function Wr(e, t, n) {
    if (((t = Qi(t)), Qi(e) !== t && n)) throw Error(d(425));
  }
  function Qr() {}
  var yo = null,
    go = null;
  function xo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wo = typeof setTimeout == "function" ? setTimeout : void 0,
    Kc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ki = typeof Promise == "function" ? Promise : void 0,
    Yc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ki < "u"
          ? function (e) {
              return Ki.resolve(null).then(e).catch(Xc);
            }
          : wo;
  function Xc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ko(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Yi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + yn,
    nr = "__reactProps$" + yn,
    kt = "__reactContainer$" + yn,
    So = "__reactEvents$" + yn,
    Gc = "__reactListeners$" + yn,
    Zc = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[kt] || n[yt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Yi(e); e !== null; ) {
            if ((n = e[yt])) return n;
            e = Yi(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[yt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Kr(e) {
    return e[nr] || null;
  }
  var Co = [],
    xn = -1;
  function It(e) {
    return { current: e };
  }
  function oe(e) {
    0 > xn || ((e.current = Co[xn]), (Co[xn] = null), xn--);
  }
  function te(e, t) {
    (xn++, (Co[xn] = e.current), (e.current = t));
  }
  var Ft = {},
    ze = It(Ft),
    Fe = It(!1),
    Zt = Ft;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ue(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (oe(Fe), oe(ze));
  }
  function Xi(e, t, n) {
    if (ze.current !== Ft) throw Error(d(168));
    (te(ze, t), te(Fe, n));
  }
  function Gi(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, ee(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Xr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (Zt = ze.current),
      te(ze, e),
      te(Fe, Fe.current),
      !0
    );
  }
  function Zi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    (n
      ? ((e = Gi(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        oe(Fe),
        oe(ze),
        te(ze, e))
      : oe(Fe),
      te(Fe, n));
  }
  var St = null,
    Gr = !1,
    Eo = !1;
  function Ji(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  function Jc(e) {
    ((Gr = !0), Ji(e));
  }
  function Ut() {
    if (!Eo && St !== null) {
      Eo = !0;
      var e = 0,
        t = X;
      try {
        var n = St;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((St = null), (Gr = !1));
      } catch (l) {
        throw (St !== null && (St = St.slice(e + 1)), bu(Ql, Ut), l);
      } finally {
        ((X = t), (Eo = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Zr = null,
    Jr = 0,
    rt = [],
    lt = 0,
    Jt = null,
    Ct = 1,
    Et = "";
  function qt(e, t) {
    ((kn[Sn++] = Jr), (kn[Sn++] = Zr), (Zr = e), (Jr = t));
  }
  function qi(e, t, n) {
    ((rt[lt++] = Ct), (rt[lt++] = Et), (rt[lt++] = Jt), (Jt = e));
    var r = Ct;
    e = Et;
    var l = 32 - at(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - at(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      ((o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Ct = (1 << (32 - at(t) + l)) | (n << l) | r),
        (Et = o + e));
    } else ((Ct = (1 << o) | (n << l) | r), (Et = e));
  }
  function No(e) {
    e.return !== null && (qt(e, 1), qi(e, 1, 0));
  }
  function _o(e) {
    for (; e === Zr; )
      ((Zr = kn[--Sn]), (kn[Sn] = null), (Jr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Jt; )
      ((Jt = rt[--lt]),
        (rt[lt] = null),
        (Et = rt[--lt]),
        (rt[lt] = null),
        (Ct = rt[--lt]),
        (rt[lt] = null));
  }
  var Ze = null,
    Je = null,
    ie = !1,
    ft = null;
  function bi(e, t) {
    var n = st(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function es(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ze = e), (Je = Dt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: Ct, overflow: Et } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = st(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ze = e),
              (Je = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Po(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jo(e) {
    if (ie) {
      var t = Je;
      if (t) {
        var n = t;
        if (!es(e, t)) {
          if (Po(e)) throw Error(d(418));
          t = Dt(n.nextSibling);
          var r = Ze;
          t && es(e, t)
            ? bi(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e));
        }
      } else {
        if (Po(e)) throw Error(d(418));
        ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e));
      }
    }
  }
  function ts(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Ze = e;
  }
  function qr(e) {
    if (e !== Ze) return !1;
    if (!ie) return (ts(e), (ie = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps))),
      t && (t = Je))
    ) {
      if (Po(e)) throw (ns(), Error(d(418)));
      for (; t; ) (bi(e, t), (t = Dt(t.nextSibling)));
    }
    if ((ts(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Je = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Je = null;
      }
    } else Je = Ze ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = Je; e; ) e = Dt(e.nextSibling);
  }
  function Cn() {
    ((Je = Ze = null), (ie = !1));
  }
  function zo(e) {
    ft === null ? (ft = [e]) : ft.push(e);
  }
  var qc = fe.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var i = l.refs;
              u === null ? delete i[o] : (i[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function br(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        d(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function rs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ls(e) {
    function t(p, a) {
      if (e) {
        var m = p.deletions;
        m === null ? ((p.deletions = [a]), (p.flags |= 16)) : m.push(a);
      }
    }
    function n(p, a) {
      if (!e) return null;
      for (; a !== null; ) (t(p, a), (a = a.sibling));
      return null;
    }
    function r(p, a) {
      for (p = new Map(); a !== null; )
        (a.key !== null ? p.set(a.key, a) : p.set(a.index, a), (a = a.sibling));
      return p;
    }
    function l(p, a) {
      return ((p = Kt(p, a)), (p.index = 0), (p.sibling = null), p);
    }
    function o(p, a, m) {
      return (
        (p.index = m),
        e
          ? ((m = p.alternate),
            m !== null
              ? ((m = m.index), m < a ? ((p.flags |= 2), a) : m)
              : ((p.flags |= 2), a))
          : ((p.flags |= 1048576), a)
      );
    }
    function u(p) {
      return (e && p.alternate === null && (p.flags |= 2), p);
    }
    function i(p, a, m, k) {
      return a === null || a.tag !== 6
        ? ((a = wu(m, p.mode, k)), (a.return = p), a)
        : ((a = l(a, m)), (a.return = p), a);
    }
    function s(p, a, m, k) {
      var T = m.type;
      return T === Pe
        ? x(p, a, m.props.children, k, m.key)
        : a !== null &&
            (a.elementType === T ||
              (typeof T == "object" &&
                T !== null &&
                T.$$typeof === Ee &&
                rs(T) === a.type))
          ? ((k = l(a, m.props)), (k.ref = lr(p, a, m)), (k.return = p), k)
          : ((k = Cl(m.type, m.key, m.props, null, p.mode, k)),
            (k.ref = lr(p, a, m)),
            (k.return = p),
            k);
    }
    function h(p, a, m, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== m.containerInfo ||
        a.stateNode.implementation !== m.implementation
        ? ((a = ku(m, p.mode, k)), (a.return = p), a)
        : ((a = l(a, m.children || [])), (a.return = p), a);
    }
    function x(p, a, m, k, T) {
      return a === null || a.tag !== 7
        ? ((a = un(m, p.mode, k, T)), (a.return = p), a)
        : ((a = l(a, m)), (a.return = p), a);
    }
    function w(p, a, m) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wu("" + a, p.mode, m)), (a.return = p), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ie:
            return (
              (m = Cl(a.type, a.key, a.props, null, p.mode, m)),
              (m.ref = lr(p, null, a)),
              (m.return = p),
              m
            );
          case xe:
            return ((a = ku(a, p.mode, m)), (a.return = p), a);
          case Ee:
            var k = a._init;
            return w(p, k(a._payload), m);
        }
        if (Mn(a) || S(a))
          return ((a = un(a, p.mode, m, null)), (a.return = p), a);
        br(p, a);
      }
      return null;
    }
    function g(p, a, m, k) {
      var T = a !== null ? a.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return T !== null ? null : i(p, a, "" + m, k);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ie:
            return m.key === T ? s(p, a, m, k) : null;
          case xe:
            return m.key === T ? h(p, a, m, k) : null;
          case Ee:
            return ((T = m._init), g(p, a, T(m._payload), k));
        }
        if (Mn(m) || S(m)) return T !== null ? null : x(p, a, m, k, null);
        br(p, m);
      }
      return null;
    }
    function _(p, a, m, k, T) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((p = p.get(m) || null), i(a, p, "" + k, T));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ie:
            return (
              (p = p.get(k.key === null ? m : k.key) || null),
              s(a, p, k, T)
            );
          case xe:
            return (
              (p = p.get(k.key === null ? m : k.key) || null),
              h(a, p, k, T)
            );
          case Ee:
            var R = k._init;
            return _(p, a, m, R(k._payload), T);
        }
        if (Mn(k) || S(k)) return ((p = p.get(m) || null), x(a, p, k, T, null));
        br(a, k);
      }
      return null;
    }
    function z(p, a, m, k) {
      for (
        var T = null, R = null, M = a, D = (a = 0), Se = null;
        M !== null && D < m.length;
        D++
      ) {
        M.index > D ? ((Se = M), (M = null)) : (Se = M.sibling);
        var W = g(p, M, m[D], k);
        if (W === null) {
          M === null && (M = Se);
          break;
        }
        (e && M && W.alternate === null && t(p, M),
          (a = o(W, a, D)),
          R === null ? (T = W) : (R.sibling = W),
          (R = W),
          (M = Se));
      }
      if (D === m.length) return (n(p, M), ie && qt(p, D), T);
      if (M === null) {
        for (; D < m.length; D++)
          ((M = w(p, m[D], k)),
            M !== null &&
              ((a = o(M, a, D)),
              R === null ? (T = M) : (R.sibling = M),
              (R = M)));
        return (ie && qt(p, D), T);
      }
      for (M = r(p, M); D < m.length; D++)
        ((Se = _(M, p, D, m[D], k)),
          Se !== null &&
            (e &&
              Se.alternate !== null &&
              M.delete(Se.key === null ? D : Se.key),
            (a = o(Se, a, D)),
            R === null ? (T = Se) : (R.sibling = Se),
            (R = Se)));
      return (
        e &&
          M.forEach(function (Yt) {
            return t(p, Yt);
          }),
        ie && qt(p, D),
        T
      );
    }
    function L(p, a, m, k) {
      var T = S(m);
      if (typeof T != "function") throw Error(d(150));
      if (((m = T.call(m)), m == null)) throw Error(d(151));
      for (
        var R = (T = null), M = a, D = (a = 0), Se = null, W = m.next();
        M !== null && !W.done;
        D++, W = m.next()
      ) {
        M.index > D ? ((Se = M), (M = null)) : (Se = M.sibling);
        var Yt = g(p, M, W.value, k);
        if (Yt === null) {
          M === null && (M = Se);
          break;
        }
        (e && M && Yt.alternate === null && t(p, M),
          (a = o(Yt, a, D)),
          R === null ? (T = Yt) : (R.sibling = Yt),
          (R = Yt),
          (M = Se));
      }
      if (W.done) return (n(p, M), ie && qt(p, D), T);
      if (M === null) {
        for (; !W.done; D++, W = m.next())
          ((W = w(p, W.value, k)),
            W !== null &&
              ((a = o(W, a, D)),
              R === null ? (T = W) : (R.sibling = W),
              (R = W)));
        return (ie && qt(p, D), T);
      }
      for (M = r(p, M); !W.done; D++, W = m.next())
        ((W = _(M, p, D, W.value, k)),
          W !== null &&
            (e && W.alternate !== null && M.delete(W.key === null ? D : W.key),
            (a = o(W, a, D)),
            R === null ? (T = W) : (R.sibling = W),
            (R = W)));
      return (
        e &&
          M.forEach(function (Rf) {
            return t(p, Rf);
          }),
        ie && qt(p, D),
        T
      );
    }
    function pe(p, a, m, k) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Pe &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Ie:
            e: {
              for (var T = m.key, R = a; R !== null; ) {
                if (R.key === T) {
                  if (((T = m.type), T === Pe)) {
                    if (R.tag === 7) {
                      (n(p, R.sibling),
                        (a = l(R, m.props.children)),
                        (a.return = p),
                        (p = a));
                      break e;
                    }
                  } else if (
                    R.elementType === T ||
                    (typeof T == "object" &&
                      T !== null &&
                      T.$$typeof === Ee &&
                      rs(T) === R.type)
                  ) {
                    (n(p, R.sibling),
                      (a = l(R, m.props)),
                      (a.ref = lr(p, R, m)),
                      (a.return = p),
                      (p = a));
                    break e;
                  }
                  n(p, R);
                  break;
                } else t(p, R);
                R = R.sibling;
              }
              m.type === Pe
                ? ((a = un(m.props.children, p.mode, k, m.key)),
                  (a.return = p),
                  (p = a))
                : ((k = Cl(m.type, m.key, m.props, null, p.mode, k)),
                  (k.ref = lr(p, a, m)),
                  (k.return = p),
                  (p = k));
            }
            return u(p);
          case xe:
            e: {
              for (R = m.key; a !== null; ) {
                if (a.key === R)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === m.containerInfo &&
                    a.stateNode.implementation === m.implementation
                  ) {
                    (n(p, a.sibling),
                      (a = l(a, m.children || [])),
                      (a.return = p),
                      (p = a));
                    break e;
                  } else {
                    n(p, a);
                    break;
                  }
                else t(p, a);
                a = a.sibling;
              }
              ((a = ku(m, p.mode, k)), (a.return = p), (p = a));
            }
            return u(p);
          case Ee:
            return ((R = m._init), pe(p, a, R(m._payload), k));
        }
        if (Mn(m)) return z(p, a, m, k);
        if (S(m)) return L(p, a, m, k);
        br(p, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          a !== null && a.tag === 6
            ? (n(p, a.sibling), (a = l(a, m)), (a.return = p), (p = a))
            : (n(p, a), (a = wu(m, p.mode, k)), (a.return = p), (p = a)),
          u(p))
        : n(p, a);
    }
    return pe;
  }
  var En = ls(!0),
    os = ls(!1),
    el = It(null),
    tl = null,
    Nn = null,
    Lo = null;
  function To() {
    Lo = Nn = tl = null;
  }
  function Ro(e) {
    var t = el.current;
    (oe(el), (e._currentValue = t));
  }
  function Mo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function _n(e, t) {
    ((tl = e),
      (Lo = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ae = !0), (e.firstContext = null)));
  }
  function ot(e) {
    var t = e._currentValue;
    if (Lo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (tl === null) throw Error(d(308));
        ((Nn = e), (tl.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
    return t;
  }
  var bt = null;
  function Oo(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Oo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Do(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function is(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function _t(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ($ & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function nl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = u) : (o = o.next = u), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function rl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        h = s.next;
      ((s.next = null), u === null ? (o = h) : (u.next = h), (u = s));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (i = x.lastBaseUpdate),
        i !== u &&
          (i === null ? (x.firstBaseUpdate = h) : (i.next = h),
          (x.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var w = l.baseState;
      ((u = 0), (x = h = s = null), (i = o));
      do {
        var g = i.lane,
          _ = i.eventTime;
        if ((r & g) === g) {
          x !== null &&
            (x = x.next =
              {
                eventTime: _,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var z = e,
              L = i;
            switch (((g = t), (_ = n), L.tag)) {
              case 1:
                if (((z = L.payload), typeof z == "function")) {
                  w = z.call(_, w, g);
                  break e;
                }
                w = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = L.payload),
                  (g = typeof z == "function" ? z.call(_, w, g) : z),
                  g == null)
                )
                  break e;
                w = N({}, w, g);
                break e;
              case 2:
                At = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64),
            (g = l.effects),
            g === null ? (l.effects = [i]) : g.push(i));
        } else
          ((_ = {
            eventTime: _,
            lane: g,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            x === null ? ((h = x = _), (s = w)) : (x = x.next = _),
            (u |= g));
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          ((g = i),
            (i = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (x === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((nn |= u), (e.lanes = u), (e.memoizedState = w));
    }
  }
  function as(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(d(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    gt = It(or),
    ur = It(or),
    ir = It(or);
  function en(e) {
    if (e === or) throw Error(d(174));
    return e;
  }
  function Io(e, t) {
    switch ((te(ir, t), te(ur, e), te(gt, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e)));
    }
    (oe(gt), te(gt, t));
  }
  function Pn() {
    (oe(gt), oe(ur), oe(ir));
  }
  function cs(e) {
    en(ir.current);
    var t = en(gt.current),
      n = Il(t, e.type);
    t !== n && (te(ur, e), te(gt, n));
  }
  function Fo(e) {
    ur.current === e && (oe(gt), oe(ur));
  }
  var se = It(0);
  function ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Uo = [];
  function Ao() {
    for (var e = 0; e < Uo.length; e++)
      Uo[e]._workInProgressVersionPrimary = null;
    Uo.length = 0;
  }
  var ol = fe.ReactCurrentDispatcher,
    Vo = fe.ReactCurrentBatchConfig,
    tn = 0,
    ae = null,
    he = null,
    we = null,
    ul = !1,
    sr = !1,
    ar = 0,
    bc = 0;
  function Le() {
    throw Error(d(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function Bo(e, t, n, r, l, o) {
    if (
      ((tn = o),
      (ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? rf : lf),
      (e = n(r, l)),
      sr)
    ) {
      o = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= o)) throw Error(d(301));
        ((o += 1),
          (we = he = null),
          (t.updateQueue = null),
          (ol.current = of),
          (e = n(r, l)));
      } while (sr);
    }
    if (
      ((ol.current = al),
      (t = he !== null && he.next !== null),
      (tn = 0),
      (we = he = ae = null),
      (ul = !1),
      t)
    )
      throw Error(d(300));
    return e;
  }
  function Ho() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (we === null ? (ae.memoizedState = we = e) : (we = we.next = e), we);
  }
  function ut() {
    if (he === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var t = we === null ? ae.memoizedState : we.next;
    if (t !== null) ((we = t), (he = e));
    else {
      if (e === null) throw Error(d(310));
      ((he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        we === null ? (ae.memoizedState = we = e) : (we = we.next = e));
    }
    return we;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wo(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = he,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = o.next), (o.next = u));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var i = (u = null),
        s = null,
        h = o;
      do {
        var x = h.lane;
        if ((tn & x) === x)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var w = {
            lane: x,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (s === null ? ((i = s = w), (u = r)) : (s = s.next = w),
            (ae.lanes |= x),
            (nn |= x));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (s === null ? (u = r) : (s.next = i),
        ct(r, t.memoizedState) || (Ae = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (ae.lanes |= o), (nn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qo(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((o = e(o, u.action)), (u = u.next));
      while (u !== l);
      (ct(o, t.memoizedState) || (Ae = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function fs() {}
  function ds(e, t) {
    var n = ae,
      r = ut(),
      l = t(),
      o = !ct(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ae = !0)),
      (r = r.queue),
      Ko(hs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (we !== null && we.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        fr(9, ms.bind(null, n, r, l, t), void 0, null),
        ke === null)
      )
        throw Error(d(349));
      (tn & 30) !== 0 || ps(n, t, l);
    }
    return l;
  }
  function ps(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ae.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ms(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), vs(t) && ys(e));
  }
  function hs(e, t, n) {
    return n(function () {
      vs(t) && ys(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function gs(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nf.bind(null, ae, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function xs() {
    return ut().memoizedState;
  }
  function il(e, t, n, r) {
    var l = xt();
    ((ae.flags |= e),
      (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function sl(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (he !== null) {
      var u = he.memoizedState;
      if (((o = u.destroy), r !== null && $o(r, u.deps))) {
        l.memoizedState = fr(t, n, o, r);
        return;
      }
    }
    ((ae.flags |= e), (l.memoizedState = fr(1 | t, n, o, r)));
  }
  function ws(e, t) {
    return il(8390656, 8, e, t);
  }
  function Ko(e, t) {
    return sl(2048, 8, e, t);
  }
  function ks(e, t) {
    return sl(4, 2, e, t);
  }
  function Ss(e, t) {
    return sl(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Es(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      sl(4, 4, Cs.bind(null, t, e), n)
    );
  }
  function Yo() {}
  function Ns(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function _s(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ps(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n))
      : (ct(n, t) ||
          ((n = ri()), (ae.lanes |= n), (nn |= n), (e.baseState = !0)),
        t);
  }
  function ef(e, t) {
    var n = X;
    ((X = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vo.transition;
    Vo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((X = n), (Vo.transition = r));
    }
  }
  function js() {
    return ut().memoizedState;
  }
  function tf(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zs(e))
    )
      Ls(t, n);
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = De();
      (ht(n, e, r, l), Ts(n, t, r));
    }
  }
  function nf(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zs(e)) Ls(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            i = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = i), ct(i, u))) {
            var s = t.interleaved;
            (s === null
              ? ((l.next = l), Oo(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = us(e, t, l, r)),
        n !== null && ((l = De()), ht(n, e, r, l), Ts(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === ae || (t !== null && t === ae);
  }
  function Ls(e, t) {
    sr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ts(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var al = {
      readContext: ot,
      useCallback: Le,
      useContext: Le,
      useEffect: Le,
      useImperativeHandle: Le,
      useInsertionEffect: Le,
      useLayoutEffect: Le,
      useMemo: Le,
      useReducer: Le,
      useRef: Le,
      useState: Le,
      useDebugValue: Le,
      useDeferredValue: Le,
      useTransition: Le,
      useMutableSource: Le,
      useSyncExternalStore: Le,
      useId: Le,
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: ot,
      useCallback: function (e, t) {
        return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ot,
      useEffect: ws,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          il(4194308, 4, Cs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = tf.bind(null, ae, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: gs,
      useDebugValue: Yo,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = gs(!1),
          t = e[0];
        return ((e = ef.bind(null, e[1])), (xt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ae,
          l = xt();
        if (ie) {
          if (n === void 0) throw Error(d(407));
          n = n();
        } else {
          if (((n = t()), ke === null)) throw Error(d(349));
          (tn & 30) !== 0 || ps(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          ws(hs.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          fr(9, ms.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = ke.identifierPrefix;
        if (ie) {
          var n = Et,
            r = Ct;
          ((n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = bc++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: ot,
      useCallback: Ns,
      useContext: ot,
      useEffect: Ko,
      useImperativeHandle: Es,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Wo,
      useRef: xs,
      useState: function () {
        return Wo(cr);
      },
      useDebugValue: Yo,
      useDeferredValue: function (e) {
        var t = ut();
        return Ps(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Wo(cr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: js,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: ot,
      useCallback: Ns,
      useContext: ot,
      useEffect: Ko,
      useImperativeHandle: Es,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Qo,
      useRef: xs,
      useState: function () {
        return Qo(cr);
      },
      useDebugValue: Yo,
      useDeferredValue: function (e) {
        var t = ut();
        return he === null ? (t.memoizedState = e) : Ps(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Qo(cr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: js,
      unstable_isNewReconciler: !1,
    };
  function dt(e, t) {
    if (e && e.defaultProps) {
      ((t = N({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = De(),
        l = Wt(e),
        o = _t(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Vt(e, o, l)),
        t !== null && (ht(t, e, l, r), nl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = De(),
        l = Wt(e),
        o = _t(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Vt(e, o, l)),
        t !== null && (ht(t, e, l, r), nl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = De(),
        r = Wt(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (ht(t, e, r, n), nl(t, e, r)));
    },
  };
  function Rs(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, o)
          : !0
    );
  }
  function Ms(e, t, n) {
    var r = !1,
      l = Ft,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ot(o))
        : ((l = Ue(t) ? Zt : ze.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? wn(e, l) : Ft)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Os(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null));
  }
  function Go(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Do(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = ot(o))
      : ((o = Ue(t) ? Zt : ze.current), (l.context = wn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Xo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && cl.enqueueReplaceState(l, l.state, null),
        rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function jn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += B(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Jo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var uf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (yl || ((yl = !0), (du = r)), Jo(e, t));
      }),
      n
    );
  }
  function Is(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Jo(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (Jo(e, t),
            typeof r != "function" &&
              (Bt === null ? (Bt = new Set([this])) : Bt.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new uf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = kf.bind(null, e, t, n)), t.then(e, e));
  }
  function Us(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = _t(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var sf = fe.ReactCurrentOwner,
    Ae = !1;
  function Oe(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : En(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      _n(t, l),
      (r = Bo(e, t, n, r, o, l)),
      (n = Ho()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (ie && n && No(t), (t.flags |= 1), Oe(e, t, r, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !xu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Bs(e, t, o, r, l))
        : ((e = Cl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Jn), n(u, r) && e.ref === t.ref)
      )
        return Pt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jn(o, r) && e.ref === t.ref)
        if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ae = !0);
        else return ((t.lanes = e.lanes), Pt(e, t, l));
    }
    return qo(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          te(Ln, qe),
          (qe |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            te(Ln, qe),
            (qe |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          te(Ln, qe),
          (qe |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        te(Ln, qe),
        (qe |= r));
    return (Oe(e, t, l, n), t.child);
  }
  function Ws(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qo(e, t, n, r, l) {
    var o = Ue(n) ? Zt : ze.current;
    return (
      (o = wn(t, o)),
      _n(t, l),
      (n = Bo(e, t, n, r, o, l)),
      (r = Ho()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (ie && r && No(t), (t.flags |= 1), Oe(e, t, n, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (Ue(n)) {
      var o = !0;
      Xr(t);
    } else o = !1;
    if ((_n(t, l), t.stateNode === null))
      (dl(e, t), Ms(t, n, r), Go(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        i = t.memoizedProps;
      u.props = i;
      var s = u.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = ot(h))
        : ((h = Ue(n) ? Zt : ze.current), (h = wn(t, h)));
      var x = n.getDerivedStateFromProps,
        w =
          typeof x == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((i !== r || s !== h) && Os(t, u, r, h)),
        (At = !1));
      var g = t.memoizedState;
      ((u.state = g),
        rl(t, r, u, l),
        (s = t.memoizedState),
        i !== r || g !== s || Fe.current || At
          ? (typeof x == "function" && (Xo(t, n, x, r), (s = t.memoizedState)),
            (i = At || Rs(t, n, i, r, g, s, h))
              ? (w ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = h),
            (r = i))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((u = t.stateNode),
        is(e, t),
        (i = t.memoizedProps),
        (h = t.type === t.elementType ? i : dt(t.type, i)),
        (u.props = h),
        (w = t.pendingProps),
        (g = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = ot(s))
          : ((s = Ue(n) ? Zt : ze.current), (s = wn(t, s))));
      var _ = n.getDerivedStateFromProps;
      ((x =
        typeof _ == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((i !== w || g !== s) && Os(t, u, r, s)),
        (At = !1),
        (g = t.memoizedState),
        (u.state = g),
        rl(t, r, u, l));
      var z = t.memoizedState;
      i !== w || g !== z || Fe.current || At
        ? (typeof _ == "function" && (Xo(t, n, _, r), (z = t.memoizedState)),
          (h = At || Rs(t, n, h, r, g, z, s) || !1)
            ? (x ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, z, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, z, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = z)),
          (u.props = r),
          (u.state = z),
          (u.context = s),
          (r = h))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bo(e, t, n, r, o, l);
  }
  function bo(e, t, n, r, l, o) {
    Ws(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && Zi(t, n, !1), Pt(e, t, o));
    ((r = t.stateNode), (sf.current = t));
    var i =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = En(t, e.child, null, o)), (t.child = En(t, null, i, o)))
        : Oe(e, t, i, o),
      (t.memoizedState = r.state),
      l && Zi(t, n, !0),
      t.child
    );
  }
  function Ks(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Xi(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xi(e, t.context, !1),
      Io(e, t.containerInfo));
  }
  function Ys(e, t, n, r, l) {
    return (Cn(), zo(l), (t.flags |= 256), Oe(e, t, n, r), t.child);
  }
  var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = se.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      te(se, l & 1),
      e === null)
    )
      return (
        jo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = El(u, r, 0, null)),
                (e = un(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = tu(n)),
                (t.memoizedState = eu),
                e)
              : nu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return af(e, t, u, r, i, l, n);
    if (o) {
      ((o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (o = Kt(i, o)) : ((o = un(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? tu(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = eu),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Kt(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function nu(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && zo(r),
      En(t, e.child, null, n),
      (e = nu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function af(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zo(Error(d(422)))), fl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (o = un(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, u),
            (t.child.memoizedState = tu(u)),
            (t.memoizedState = eu),
            o);
    if ((t.mode & 1) === 0) return fl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return (
        (r = i),
        (o = Error(d(419))),
        (r = Zo(o, r, void 0)),
        fl(e, t, u, r)
      );
    }
    if (((i = (u & e.childLanes) !== 0), Ae || i)) {
      if (((r = ke), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Nt(e, l), ht(r, e, l, -1)));
      }
      return (gu(), (r = Zo(Error(d(421)))), fl(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Sf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Je = Dt(l.nextSibling)),
        (Ze = t),
        (ie = !0),
        (ft = null),
        e !== null &&
          ((rt[lt++] = Ct),
          (rt[lt++] = Et),
          (rt[lt++] = Jt),
          (Ct = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = nu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Gs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Mo(e.return, t, n));
  }
  function ru(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Oe(e, t, r.children, n), (r = se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gs(e, n, t);
          else if (e.tag === 19) Gs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((te(se, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && ll(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ru(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ll(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ru(t, !0, n, null, o);
          break;
        case "together":
          ru(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function dl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function cf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ks(t), Cn());
        break;
      case 5:
        cs(t);
        break;
      case 1:
        Ue(t.type) && Xr(t);
        break;
      case 4:
        Io(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (te(el, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (te(se, se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xs(e, t, n)
              : (te(se, se.current & 1),
                (e = Pt(e, t, n)),
                e !== null ? e.sibling : null);
        te(se, se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Zs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          te(se, se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Hs(e, t, n));
    }
    return Pt(e, t, n);
  }
  var Js, lu, qs, bs;
  ((Js = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (lu = function () {}),
    (qs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(gt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (o = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })),
              (r = N({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Dl(e, l)), (r = Dl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        Fl(n, r);
        var u;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var i = l[h];
              for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (E.hasOwnProperty(h)
                  ? o || (o = [])
                  : (o = o || []).push(h, null));
        for (h in r) {
          var s = r[h];
          if (
            ((i = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && s !== i && (s != null || i != null))
          )
            if (h === "style")
              if (i) {
                for (u in i)
                  !i.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s)
                  s.hasOwnProperty(u) &&
                    i[u] !== s[u] &&
                    (n || (n = {}), (n[u] = s[u]));
              } else (n || (o || (o = []), o.push(h, n)), (n = s));
            else
              h === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (o = o || []).push(h, s))
                : h === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (o = o || []).push(h, "" + s)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (E.hasOwnProperty(h)
                      ? (s != null && h === "onScroll" && le("scroll", e),
                        o || i === s || (o = []))
                      : (o = o || []).push(h, s));
        }
        n && (o = o || []).push("style", n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (bs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function dr(e, t) {
    if (!ie)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function ff(e, t, n) {
    var r = t.pendingProps;
    switch ((_o(t), t.tag)) {
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
        return (Te(t), null);
      case 1:
        return (Ue(t.type) && Yr(), Te(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          oe(Fe),
          oe(ze),
          Ao(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ft !== null && (hu(ft), (ft = null)))),
          lu(e, t),
          Te(t),
          null
        );
      case 5:
        Fo(t);
        var l = en(ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (qs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return (Te(t), null);
          }
          if (((e = en(gt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[yt] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (le("cancel", r), le("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) le(bn[l], r);
                break;
              case "source":
                le("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (le("error", r), le("load", r));
                break;
              case "details":
                le("toggle", r);
                break;
              case "input":
                (Mu(r, o), le("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  le("invalid", r));
                break;
              case "textarea":
                (Iu(r, o), le("invalid", r));
            }
            (Fl(n, o), (l = null));
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var i = o[u];
                u === "children"
                  ? typeof i == "string"
                    ? r.textContent !== i &&
                      (o.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, i, e),
                      (l = ["children", i]))
                    : typeof i == "number" &&
                      r.textContent !== "" + i &&
                      (o.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, i, e),
                      (l = ["children", "" + i]))
                  : E.hasOwnProperty(u) &&
                    i != null &&
                    u === "onScroll" &&
                    le("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Du(r, o, !0));
                break;
              case "textarea":
                (kr(r), Uu(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Qr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Au(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[yt] = t),
              (e[nr] = r),
              Js(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Ul(n, r)), n)) {
                case "dialog":
                  (le("cancel", e), le("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (le("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) le(bn[l], e);
                  l = r;
                  break;
                case "source":
                  (le("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (le("error", e), le("load", e), (l = r));
                  break;
                case "details":
                  (le("toggle", e), (l = r));
                  break;
                case "input":
                  (Mu(e, r), (l = Rl(e, r)), le("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    le("invalid", e));
                  break;
                case "textarea":
                  (Iu(e, r), (l = Dl(e, r)), le("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (i = l));
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var s = i[o];
                  o === "style"
                    ? Bu(e, s)
                    : o === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vu(e, s))
                      : o === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && On(e, s)
                          : typeof s == "number" && On(e, "" + s)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (E.hasOwnProperty(o)
                            ? s != null && o === "onScroll" && le("scroll", e)
                            : s != null && We(e, o, s, u));
                }
              switch (n) {
                case "input":
                  (kr(e), Du(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Uu(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? sn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Te(t), null);
      case 6:
        if (e && t.stateNode != null) bs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (((n = en(ir.current)), en(gt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[yt] = t),
              (o = r.nodeValue !== n) && ((e = Ze), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[yt] = t),
              (t.stateNode = r));
        }
        return (Te(t), null);
      case 13:
        if (
          (oe(se),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && Je !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ns(), Cn(), (t.flags |= 98560), (o = !1));
          else if (((o = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(d(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(d(317));
              o[yt] = t;
            } else
              (Cn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Te(t), (o = !1));
          } else (ft !== null && (hu(ft), (ft = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (se.current & 1) !== 0
                  ? ve === 0 && (ve = 3)
                  : gu())),
            t.updateQueue !== null && (t.flags |= 4),
            Te(t),
            null);
      case 4:
        return (
          Pn(),
          lu(e, t),
          e === null && er(t.stateNode.containerInfo),
          Te(t),
          null
        );
      case 10:
        return (Ro(t.type._context), Te(t), null);
      case 17:
        return (Ue(t.type) && Yr(), Te(t), null);
      case 19:
        if ((oe(se), (o = t.memoizedState), o === null)) return (Te(t), null);
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) dr(o, !1);
          else {
            if (ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ll(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      dr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (te(se, (se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              de() > Tn &&
              ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ll(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !ie)
              )
                return (Te(t), null);
            } else
              2 * de() - o.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = de()),
            (t.sibling = null),
            (n = se.current),
            te(se, r ? (n & 1) | 2 : n & 1),
            t)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          yu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (qe & 1073741824) !== 0 &&
              (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function df(e, t) {
    switch ((_o(t), t.tag)) {
      case 1:
        return (
          Ue(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          oe(Fe),
          oe(ze),
          Ao(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Fo(t), null);
      case 13:
        if (
          (oe(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          Cn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (oe(se), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Ro(t.type._context), null);
      case 22:
      case 23:
        return (yu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1,
    Re = !1,
    pf = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;
  function zn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ce(e, t, r);
        }
      else n.current = null;
  }
  function ou(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var ea = !1;
  function mf(e, t) {
    if (((yo = Mr), (e = Ri()), so(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              i = -1,
              s = -1,
              h = 0,
              x = 0,
              w = e,
              g = null;
            t: for (;;) {
              for (
                var _;
                w !== n || (l !== 0 && w.nodeType !== 3) || (i = u + l),
                  w !== o || (r !== 0 && w.nodeType !== 3) || (s = u + r),
                  w.nodeType === 3 && (u += w.nodeValue.length),
                  (_ = w.firstChild) !== null;
              )
                ((g = w), (w = _));
              for (;;) {
                if (w === e) break t;
                if (
                  (g === n && ++h === l && (i = u),
                  g === o && ++x === r && (s = u),
                  (_ = w.nextSibling) !== null)
                )
                  break;
                ((w = g), (g = w.parentNode));
              }
              w = _;
            }
            n = i === -1 || s === -1 ? null : { start: i, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      go = { focusedElem: e, selectionRange: n }, Mr = !1, j = t;
      j !== null;
    )
      if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (j = e));
      else
        for (; j !== null; ) {
          t = j;
          try {
            var z = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (z !== null) {
                    var L = z.memoizedProps,
                      pe = z.memoizedState,
                      p = t.stateNode,
                      a = p.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : dt(t.type, L),
                        pe,
                      );
                    p.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (k) {
            ce(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (j = e));
            break;
          }
          j = t.return;
        }
    return ((z = ea), (ea = !1), z);
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ou(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function uu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ta(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ta(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[yt],
          delete t[nr],
          delete t[So],
          delete t[Gc],
          delete t[Zc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (iu(e, t, n), e = e.sibling; e !== null; )
        (iu(e, t, n), (e = e.sibling));
  }
  function su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (su(e, t, n), e = e.sibling; e !== null; )
        (su(e, t, n), (e = e.sibling));
  }
  var Ne = null,
    pt = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) (la(e, t, n), (n = n.sibling));
  }
  function la(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Re || zn(n, t);
      case 6:
        var r = Ne,
          l = pt;
        ((Ne = null),
          $t(e, t, n),
          (Ne = r),
          (pt = l),
          Ne !== null &&
            (pt
              ? ((e = Ne),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ne.removeChild(n.stateNode)));
        break;
      case 18:
        Ne !== null &&
          (pt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8
                ? ko(e.parentNode, n)
                : e.nodeType === 1 && ko(e, n),
              Qn(e))
            : ko(Ne, n.stateNode));
        break;
      case 4:
        ((r = Ne),
          (l = pt),
          (Ne = n.stateNode.containerInfo),
          (pt = !0),
          $t(e, t, n),
          (Ne = r),
          (pt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Re &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            ((o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ou(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (
          !Re &&
          (zn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (i) {
            ce(n, t, i);
          }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Re = (r = Re) || n.memoizedState !== null), $t(e, t, n), (Re = r))
          : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new pf()),
        t.forEach(function (r) {
          var l = Cf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            i = u;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                ((Ne = i.stateNode), (pt = !1));
                break e;
              case 3:
                ((Ne = i.stateNode.containerInfo), (pt = !0));
                break e;
              case 4:
                ((Ne = i.stateNode.containerInfo), (pt = !0));
                break e;
            }
            i = i.return;
          }
          if (Ne === null) throw Error(d(160));
          (la(o, u, l), (Ne = null), (pt = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          ce(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ua(t, e), (t = t.sibling));
  }
  function ua(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((mt(t, e), wt(e), r & 4)) {
          try {
            (pr(3, e, e.return), ml(3, e));
          } catch (L) {
            ce(e, e.return, L);
          }
          try {
            pr(5, e, e.return);
          } catch (L) {
            ce(e, e.return, L);
          }
        }
        break;
      case 1:
        (mt(t, e), wt(e), r & 512 && n !== null && zn(n, n.return));
        break;
      case 5:
        if (
          (mt(t, e),
          wt(e),
          r & 512 && n !== null && zn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (L) {
            ce(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (i === "input" &&
                o.type === "radio" &&
                o.name != null &&
                Ou(l, o),
                Ul(i, u));
              var h = Ul(i, o);
              for (u = 0; u < s.length; u += 2) {
                var x = s[u],
                  w = s[u + 1];
                x === "style"
                  ? Bu(l, w)
                  : x === "dangerouslySetInnerHTML"
                    ? Vu(l, w)
                    : x === "children"
                      ? On(l, w)
                      : We(l, x, w, h);
              }
              switch (i) {
                case "input":
                  Ml(l, o);
                  break;
                case "textarea":
                  Fu(l, o);
                  break;
                case "select":
                  var g = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var _ = o.value;
                  _ != null
                    ? sn(l, !!o.multiple, _, !1)
                    : g !== !!o.multiple &&
                      (o.defaultValue != null
                        ? sn(l, !!o.multiple, o.defaultValue, !0)
                        : sn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[nr] = o;
            } catch (L) {
              ce(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((mt(t, e), wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (L) {
            ce(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          (mt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Qn(t.containerInfo);
          } catch (L) {
            ce(e, e.return, L);
          }
        break;
      case 4:
        (mt(t, e), wt(e));
        break;
      case 13:
        (mt(t, e),
          wt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (fu = de())),
          r & 4 && oa(e));
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Re = (h = Re) || x), mt(t, e), (Re = h)) : mt(t, e),
          wt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !x && (e.mode & 1) !== 0)
          )
            for (j = e, x = e.child; x !== null; ) {
              for (w = j = x; j !== null; ) {
                switch (((g = j), (_ = g.child), g.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, g, g.return);
                    break;
                  case 1:
                    zn(g, g.return);
                    var z = g.stateNode;
                    if (typeof z.componentWillUnmount == "function") {
                      ((r = g), (n = g.return));
                      try {
                        ((t = r),
                          (z.props = t.memoizedProps),
                          (z.state = t.memoizedState),
                          z.componentWillUnmount());
                      } catch (L) {
                        ce(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    zn(g, g.return);
                    break;
                  case 22:
                    if (g.memoizedState !== null) {
                      aa(w);
                      continue;
                    }
                }
                _ !== null ? ((_.return = g), (j = _)) : aa(w);
              }
              x = x.sibling;
            }
          e: for (x = null, w = e; ; ) {
            if (w.tag === 5) {
              if (x === null) {
                x = w;
                try {
                  ((l = w.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((i = w.stateNode),
                        (s = w.memoizedProps.style),
                        (u =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (i.style.display = $u("display", u))));
                } catch (L) {
                  ce(e, e.return, L);
                }
              }
            } else if (w.tag === 6) {
              if (x === null)
                try {
                  w.stateNode.nodeValue = h ? "" : w.memoizedProps;
                } catch (L) {
                  ce(e, e.return, L);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              (x === w && (x = null), (w = w.return));
            }
            (x === w && (x = null),
              (w.sibling.return = w.return),
              (w = w.sibling));
          }
        }
        break;
      case 19:
        (mt(t, e), wt(e), r & 4 && oa(e));
        break;
      case 21:
        break;
      default:
        (mt(t, e), wt(e));
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var o = ra(e);
            su(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              i = ra(e);
            iu(e, i, u);
            break;
          default:
            throw Error(d(161));
        }
      } catch (s) {
        ce(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hf(e, t, n) {
    ((j = e), ia(e));
  }
  function ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
      var l = j,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || pl;
        if (!u) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || Re;
          i = pl;
          var h = Re;
          if (((pl = u), (Re = s) && !h))
            for (j = l; j !== null; )
              ((u = j),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ca(l)
                  : s !== null
                    ? ((s.return = u), (j = s))
                    : ca(l));
          for (; o !== null; ) ((j = o), ia(o), (o = o.sibling));
          ((j = l), (pl = i), (Re = h));
        }
        sa(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (j = o))
          : sa(e);
    }
  }
  function sa(e) {
    for (; j !== null; ) {
      var t = j;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Re || ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Re)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : dt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && as(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  as(t, u, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var x = h.memoizedState;
                    if (x !== null) {
                      var w = x.dehydrated;
                      w !== null && Qn(w);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          Re || (t.flags & 512 && uu(t));
        } catch (g) {
          ce(t, t.return, g);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function aa(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (j = n));
        break;
      }
      j = t.return;
    }
  }
  function ca(e) {
    for (; j !== null; ) {
      var t = j;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (s) {
              ce(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ce(t, l, s);
              }
            }
            var o = t.return;
            try {
              uu(t);
            } catch (s) {
              ce(t, o, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              uu(t);
            } catch (s) {
              ce(t, u, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
      }
      if (t === e) {
        j = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (j = i));
        break;
      }
      j = t.return;
    }
  }
  var vf = Math.ceil,
    hl = fe.ReactCurrentDispatcher,
    au = fe.ReactCurrentOwner,
    it = fe.ReactCurrentBatchConfig,
    $ = 0,
    ke = null,
    me = null,
    _e = 0,
    qe = 0,
    Ln = It(0),
    ve = 0,
    mr = null,
    nn = 0,
    vl = 0,
    cu = 0,
    hr = null,
    Ve = null,
    fu = 0,
    Tn = 1 / 0,
    jt = null,
    yl = !1,
    du = null,
    Bt = null,
    gl = !1,
    Ht = null,
    xl = 0,
    vr = 0,
    pu = null,
    wl = -1,
    kl = 0;
  function De() {
    return ($ & 6) !== 0 ? de() : wl !== -1 ? wl : (wl = de());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : ($ & 2) !== 0 && _e !== 0
        ? _e & -_e
        : qc.transition !== null
          ? (kl === 0 && (kl = ri()), kl)
          : ((e = X),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : di(e.type))),
            e);
  }
  function ht(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (pu = null), Error(d(185)));
    (Vn(e, n, r),
      (($ & 2) === 0 || e !== ke) &&
        (e === ke && (($ & 2) === 0 && (vl |= n), ve === 4 && Qt(e, _e)),
        $e(e, r),
        n === 1 &&
          $ === 0 &&
          (t.mode & 1) === 0 &&
          ((Tn = de() + 500), Gr && Ut())));
  }
  function $e(e, t) {
    var n = e.callbackNode;
    qa(e, t);
    var r = Lr(e, e === ke ? _e : 0);
    if (r === 0)
      (n !== null && ei(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ei(n), t === 1))
        (e.tag === 0 ? Jc(da.bind(null, e)) : Ji(da.bind(null, e)),
          Yc(function () {
            ($ & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (li(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = ti;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = ni;
            break;
          default:
            n = _r;
        }
        n = wa(n, fa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function fa(e, t) {
    if (((wl = -1), (kl = 0), ($ & 6) !== 0)) throw Error(d(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ke ? _e : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = $;
      $ |= 2;
      var o = ma();
      (ke !== e || _e !== t) && ((jt = null), (Tn = de() + 500), ln(e, t));
      do
        try {
          xf();
          break;
        } catch (i) {
          pa(e, i);
        }
      while (!0);
      (To(),
        (hl.current = o),
        ($ = l),
        me !== null ? (t = 0) : ((ke = null), (_e = 0), (t = ve)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = mu(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), Qt(e, r), $e(e, de()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !yf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((o = Kl(e)), o !== 0 && ((r = o), (t = mu(e, o)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), Qt(e, r), $e(e, de()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            on(e, Ve, jt);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = fu + 500 - de()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (De(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wo(on.bind(null, e, Ve, jt), t);
              break;
            }
            on(e, Ve, jt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - at(r);
              ((o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o));
            }
            if (
              ((r = l),
              (r = de() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * vf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wo(on.bind(null, e, Ve, jt), r);
              break;
            }
            on(e, Ve, jt);
            break;
          case 5:
            on(e, Ve, jt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return ($e(e, de()), e.callbackNode === n ? fa.bind(null, e) : null);
  }
  function mu(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Ve), (Ve = n), t !== null && hu(t)),
      e
    );
  }
  function hu(e) {
    Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
  }
  function yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!ct(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~cu,
        t &= ~vl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - at(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function da(e) {
    if (($ & 6) !== 0) throw Error(d(327));
    Rn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return ($e(e, de()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = mu(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), Qt(e, t), $e(e, de()), n);
    if (n === 6) throw Error(d(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Ve, jt),
      $e(e, de()),
      null
    );
  }
  function vu(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      (($ = n), $ === 0 && ((Tn = de() + 500), Gr && Ut()));
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && ($ & 6) === 0 && Rn();
    var t = $;
    $ |= 1;
    var n = it.transition,
      r = X;
    try {
      if (((it.transition = null), (X = 1), e)) return e();
    } finally {
      ((X = r), (it.transition = n), ($ = t), ($ & 6) === 0 && Ut());
    }
  }
  function yu() {
    ((qe = Ln.current), oe(Ln));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Kc(n)), me !== null))
      for (n = me.return; n !== null; ) {
        var r = n;
        switch ((_o(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (Pn(), oe(Fe), oe(ze), Ao());
            break;
          case 5:
            Fo(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            oe(se);
            break;
          case 19:
            oe(se);
            break;
          case 10:
            Ro(r.type._context);
            break;
          case 22:
          case 23:
            yu();
        }
        n = n.return;
      }
    if (
      ((ke = e),
      (me = e = Kt(e.current, null)),
      (_e = qe = t),
      (ve = 0),
      (mr = null),
      (cu = vl = nn = 0),
      (Ve = hr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            ((o.next = l), (r.next = u));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function pa(e, t) {
    do {
      var n = me;
      try {
        if ((To(), (ol.current = al), ul)) {
          for (var r = ae.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (we = he = ae = null),
          (sr = !1),
          (ar = 0),
          (au.current = null),
          n === null || n.return === null)
        ) {
          ((ve = 1), (mr = t), (me = null));
          break;
        }
        e: {
          var o = e,
            u = n.return,
            i = n,
            s = t;
          if (
            ((t = _e),
            (i.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var h = s,
              x = i,
              w = x.tag;
            if ((x.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var g = x.alternate;
              g
                ? ((x.updateQueue = g.updateQueue),
                  (x.memoizedState = g.memoizedState),
                  (x.lanes = g.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var _ = Us(u);
            if (_ !== null) {
              ((_.flags &= -257),
                As(_, u, i, o, t),
                _.mode & 1 && Fs(o, h, t),
                (t = _),
                (s = h));
              var z = t.updateQueue;
              if (z === null) {
                var L = new Set();
                (L.add(s), (t.updateQueue = L));
              } else z.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Fs(o, h, t), gu());
                break e;
              }
              s = Error(d(426));
            }
          } else if (ie && i.mode & 1) {
            var pe = Us(u);
            if (pe !== null) {
              ((pe.flags & 65536) === 0 && (pe.flags |= 256),
                As(pe, u, i, o, t),
                zo(jn(s, i)));
              break e;
            }
          }
          ((o = s = jn(s, i)),
            ve !== 4 && (ve = 2),
            hr === null ? (hr = [o]) : hr.push(o),
            (o = u));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var p = Ds(o, s, t);
                ss(o, p);
                break e;
              case 1:
                i = s;
                var a = o.type,
                  m = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      (Bt === null || !Bt.has(m))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var k = Is(o, i, t);
                  ss(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        va(n);
      } catch (T) {
        ((t = T), me === n && n !== null && (me = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = hl.current;
    return ((hl.current = al), e === null ? al : e);
  }
  function gu() {
    ((ve === 0 || ve === 3 || ve === 2) && (ve = 4),
      ke === null ||
        ((nn & 268435455) === 0 && (vl & 268435455) === 0) ||
        Qt(ke, _e));
  }
  function Sl(e, t) {
    var n = $;
    $ |= 2;
    var r = ma();
    (ke !== e || _e !== t) && ((jt = null), ln(e, t));
    do
      try {
        gf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if ((To(), ($ = n), (hl.current = r), me !== null)) throw Error(d(261));
    return ((ke = null), (_e = 0), ve);
  }
  function gf() {
    for (; me !== null; ) ha(me);
  }
  function xf() {
    for (; me !== null && !Ha(); ) ha(me);
  }
  function ha(e) {
    var t = xa(e.alternate, e, qe);
    ((e.memoizedProps = e.pendingProps),
      t === null ? va(e) : (me = t),
      (au.current = null));
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = ff(n, t, qe)), n !== null)) {
          me = n;
          return;
        }
      } else {
        if (((n = df(n, t)), n !== null)) {
          ((n.flags &= 32767), (me = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ve = 6), (me = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function on(e, t, n) {
    var r = X,
      l = it.transition;
    try {
      ((it.transition = null), (X = 1), wf(e, t, n, r));
    } finally {
      ((it.transition = l), (X = r));
    }
    return null;
  }
  function wf(e, t, n, r) {
    do Rn();
    while (Ht !== null);
    if (($ & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(d(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (ba(e, o),
      e === ke && ((me = ke = null), (_e = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        gl ||
        ((gl = !0),
        wa(_r, function () {
          return (Rn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = it.transition), (it.transition = null));
      var u = X;
      X = 1;
      var i = $;
      (($ |= 4),
        (au.current = null),
        mf(e, n),
        ua(n, e),
        Ac(go),
        (Mr = !!yo),
        (go = yo = null),
        (e.current = n),
        hf(n),
        Wa(),
        ($ = i),
        (X = u),
        (it.transition = o));
    } else e.current = n;
    if (
      (gl && ((gl = !1), (Ht = e), (xl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      Ya(n.stateNode),
      $e(e, de()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (yl) throw ((yl = !1), (e = du), (du = null), e);
    return (
      (xl & 1) !== 0 && e.tag !== 0 && Rn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === pu ? vr++ : ((vr = 0), (pu = e))) : (vr = 0),
      Ut(),
      null
    );
  }
  function Rn() {
    if (Ht !== null) {
      var e = li(xl),
        t = it.transition,
        n = X;
      try {
        if (((it.transition = null), (X = 16 > e ? 16 : e), Ht === null))
          var r = !1;
        else {
          if (((e = Ht), (Ht = null), (xl = 0), ($ & 6) !== 0))
            throw Error(d(331));
          var l = $;
          for ($ |= 4, j = e.current; j !== null; ) {
            var o = j,
              u = o.child;
            if ((j.flags & 16) !== 0) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var h = i[s];
                  for (j = h; j !== null; ) {
                    var x = j;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, x, o);
                    }
                    var w = x.child;
                    if (w !== null) ((w.return = x), (j = w));
                    else
                      for (; j !== null; ) {
                        x = j;
                        var g = x.sibling,
                          _ = x.return;
                        if ((ta(x), x === h)) {
                          j = null;
                          break;
                        }
                        if (g !== null) {
                          ((g.return = _), (j = g));
                          break;
                        }
                        j = _;
                      }
                  }
                }
                var z = o.alternate;
                if (z !== null) {
                  var L = z.child;
                  if (L !== null) {
                    z.child = null;
                    do {
                      var pe = L.sibling;
                      ((L.sibling = null), (L = pe));
                    } while (L !== null);
                  }
                }
                j = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null)
              ((u.return = o), (j = u));
            else
              e: for (; j !== null; ) {
                if (((o = j), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, o, o.return);
                  }
                var p = o.sibling;
                if (p !== null) {
                  ((p.return = o.return), (j = p));
                  break e;
                }
                j = o.return;
              }
          }
          var a = e.current;
          for (j = a; j !== null; ) {
            u = j;
            var m = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && m !== null)
              ((m.return = u), (j = m));
            else
              e: for (u = a; j !== null; ) {
                if (((i = j), (i.flags & 2048) !== 0))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, i);
                    }
                  } catch (T) {
                    ce(i, i.return, T);
                  }
                if (i === u) {
                  j = null;
                  break e;
                }
                var k = i.sibling;
                if (k !== null) {
                  ((k.return = i.return), (j = k));
                  break e;
                }
                j = i.return;
              }
          }
          if (
            (($ = l), Ut(), vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((X = n), (it.transition = t));
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    ((t = jn(n, t)),
      (t = Ds(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = De()),
      e !== null && (Vn(e, 1, t), $e(e, t)));
  }
  function ce(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ya(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bt === null || !Bt.has(r)))
          ) {
            ((e = jn(n, e)),
              (e = Is(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = De()),
              t !== null && (Vn(t, 1, e), $e(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function kf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = De()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ke === e &&
        (_e & n) === n &&
        (ve === 4 || (ve === 3 && (_e & 130023424) === _e && 500 > de() - fu)
          ? ln(e, 0)
          : (cu |= n)),
      $e(e, t));
  }
  function ga(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = De();
    ((e = Nt(e, t)), e !== null && (Vn(e, t, n), $e(e, n)));
  }
  function Sf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ga(e, n));
  }
  function Cf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    (r !== null && r.delete(t), ga(e, n));
  }
  var xa;
  xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ae = !1), cf(e, t, n));
        Ae = (e.flags & 131072) !== 0;
      }
    else ((Ae = !1), ie && (t.flags & 1048576) !== 0 && qi(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (dl(e, t), (e = t.pendingProps));
        var l = wn(t, ze.current);
        (_n(t, n), (l = Bo(null, t, r, e, l, n)));
        var o = Ho();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ue(r) ? ((o = !0), Xr(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Do(t),
              (l.updater = cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Go(t, r, e, n),
              (t = bo(null, t, r, !0, o, n)))
            : ((t.tag = 0), ie && o && No(t), Oe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (dl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nf(r)),
            (e = dt(r, e)),
            l)
          ) {
            case 0:
              t = qo(null, t, r, e, n);
              break e;
            case 1:
              t = Qs(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = $s(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(d(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          qo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ks(t), e === null)) throw Error(d(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            is(e, t),
            rl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = jn(Error(d(423)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = jn(Error(d(424)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else
              for (
                Je = Dt(t.stateNode.containerInfo.firstChild),
                  Ze = t,
                  ie = !0,
                  ft = null,
                  n = os(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            Oe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          cs(t),
          e === null && jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          xo(r, l) ? (u = null) : o !== null && xo(r, o) && (t.flags |= 32),
          Ws(e, t),
          Oe(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && jo(t), null);
      case 13:
        return Xs(e, t, n);
      case 4:
        return (
          Io(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Oe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          Vs(e, t, r, l, n)
        );
      case 7:
        return (Oe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Oe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Oe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            te(el, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (ct(o.value, u)) {
              if (o.children === l.children && !Fe.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        ((s = _t(-1, n & -n)), (s.tag = 2));
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var x = h.pending;
                          (x === null
                            ? (s.next = s)
                            : ((s.next = x.next), (x.next = s)),
                            (h.pending = s));
                        }
                      }
                      ((o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        Mo(o.return, n, t),
                        (i.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(d(341));
                  ((u.lanes |= n),
                    (i = u.alternate),
                    i !== null && (i.lanes |= n),
                    Mo(u, n, t),
                    (u = o.sibling));
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      ((o.return = u.return), (u = o));
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          (Oe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (l = ot(l)),
          (r = r(l)),
          (t.flags |= 1),
          Oe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = dt(r, t.pendingProps)),
          (l = dt(r.type, l)),
          $s(e, t, r, l, n)
        );
      case 15:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : dt(r, l)),
          dl(e, t),
          (t.tag = 1),
          Ue(r) ? ((e = !0), Xr(t)) : (e = !1),
          _n(t, n),
          Ms(t, r, l),
          Go(t, r, l, n),
          bo(null, t, r, !0, e, n)
        );
      case 19:
        return Zs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function wa(e, t) {
    return bu(e, t);
  }
  function Ef(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function st(e, t, n, r) {
    return new Ef(e, t, n, r);
  }
  function xu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Nf(e) {
    if (typeof e == "function") return xu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === nt)) return 11;
      if (e === Ye) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = st(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Cl(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) xu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Pe:
          return un(n.children, l, o, t);
        case je:
          ((u = 8), (l |= 8));
          break;
        case et:
          return (
            (e = st(12, n, t, l | 2)),
            (e.elementType = et),
            (e.lanes = o),
            e
          );
        case Me:
          return (
            (e = st(13, n, t, l)),
            (e.elementType = Me),
            (e.lanes = o),
            e
          );
        case Ke:
          return (
            (e = st(19, n, t, l)),
            (e.elementType = Ke),
            (e.lanes = o),
            e
          );
        case re:
          return El(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Qe:
                u = 10;
                break e;
              case tt:
                u = 9;
                break e;
              case nt:
                u = 11;
                break e;
              case Ye:
                u = 14;
                break e;
              case Ee:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(d(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = st(u, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function un(e, t, n, r) {
    return ((e = st(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = st(22, e, r, t)),
      (e.elementType = re),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wu(e, t, n) {
    return ((e = st(6, e, null, t)), (e.lanes = n), e);
  }
  function ku(e, t, n) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function _f(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Su(e, t, n, r, l, o, u, i, s) {
    return (
      (e = new _f(e, t, n, i, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = st(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Do(o),
      e
    );
  }
  function Pf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: xe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ka(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ue(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ue(n)) return Gi(e, n, t);
    }
    return t;
  }
  function Sa(e, t, n, r, l, o, u, i, s) {
    return (
      (e = Su(n, r, !0, e, l, o, u, i, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = De()),
      (l = Wt(n)),
      (o = _t(r, l)),
      (o.callback = t ?? null),
      Vt(n, o, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      $e(e, r),
      e
    );
  }
  function Nl(e, t, n, r) {
    var l = t.current,
      o = De(),
      u = Wt(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, u)),
      e !== null && (ht(e, l, u, o), nl(e, l, u)),
      u
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Cu(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function jf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eu(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = Eu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      Nl(e, t, null, null);
    }),
    (Pl.prototype.unmount = Eu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            Nl(null, e, null, null);
          }),
            (t[kt] = null));
        }
      }));
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ii();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && ci(e));
    }
  };
  function Nu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function jl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Na() {}
  function zf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var h = _l(u);
          o.call(h);
        };
      }
      var u = Sa(t, r, e, 0, null, !1, !1, "", Na);
      return (
        (e._reactRootContainer = u),
        (e[kt] = u.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var h = _l(s);
        i.call(h);
      };
    }
    var s = Su(e, 0, !1, null, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        Nl(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function () {
          var s = _l(u);
          i.call(s);
        };
      }
      Nl(t, u, e, l);
    } else u = zf(n, t, e, l, r);
    return _l(u);
  }
  ((oi = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 &&
            (Xl(t, n | 1),
            $e(t, de()),
            ($ & 6) === 0 && ((Tn = de() + 500), Ut()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = De();
            ht(r, e, 1, l);
          }
        }),
          Cu(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = De();
          ht(t, e, 134217728, n);
        }
        Cu(e, 134217728);
      }
    }),
    (ui = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = De();
          ht(n, e, t, r);
        }
        Cu(e, t);
      }
    }),
    (ii = function () {
      return X;
    }),
    (si = function (e, t) {
      var n = X;
      try {
        return ((X = e), t());
      } finally {
        X = n;
      }
    }),
    ($l = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(d(90));
                (Ru(r), Ml(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fu(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Ku = vu),
    (Yu = rn));
  var Lf = { usingClientEntryPoint: !1, Events: [rr, gn, Kr, Wu, Qu, vu] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Tf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: fe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ju(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || jf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((Pr = Ll.inject(Tf)), (vt = Ll));
      } catch {}
  }
  return (
    (Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf),
    (Be.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Nu(t)) throw Error(d(200));
      return Pf(e, t, null, n);
    }),
    (Be.createRoot = function (e, t) {
      if (!Nu(e)) throw Error(d(299));
      var n = !1,
        r = "",
        l = Ea;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Su(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new Eu(t)
      );
    }),
    (Be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(d(188))
          : ((e = Object.keys(e).join(",")), Error(d(268, e)));
      return ((e = Ju(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Be.flushSync = function (e) {
      return rn(e);
    }),
    (Be.hydrate = function (e, t, n) {
      if (!jl(t)) throw Error(d(200));
      return zl(null, e, t, !0, n);
    }),
    (Be.hydrateRoot = function (e, t, n) {
      if (!Nu(e)) throw Error(d(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = Ea;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Sa(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[kt] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Pl(t);
    }),
    (Be.render = function (e, t, n) {
      if (!jl(t)) throw Error(d(200));
      return zl(null, e, t, !1, n);
    }),
    (Be.unmountComponentAtNode = function (e) {
      if (!jl(e)) throw Error(d(40));
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[kt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Be.unstable_batchedUpdates = vu),
    (Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!jl(n)) throw Error(d(200));
      if (e == null || e._reactInternals === void 0) throw Error(d(38));
      return zl(e, t, n, !1, r);
    }),
    (Be.version = "18.3.1-next-f1338f8080-20240426"),
    Be
  );
}
var Ma;
function Af() {
  if (Ma) return ju.exports;
  Ma = 1;
  function C() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C);
      } catch (P) {
        console.error(P);
      }
  }
  return (C(), (ju.exports = Uf()), ju.exports);
}
var Oa;
function Vf() {
  if (Oa) return Tl;
  Oa = 1;
  var C = Af();
  return ((Tl.createRoot = C.createRoot), (Tl.hydrateRoot = C.hydrateRoot), Tl);
}
var $f = Vf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = (C) => C.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Da = (...C) =>
    C.filter((P, d, O) => !!P && P.trim() !== "" && O.indexOf(P) === d)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = ye.forwardRef(
  (
    {
      color: C = "currentColor",
      size: P = 24,
      strokeWidth: d = 2,
      absoluteStrokeWidth: O,
      className: E = "",
      children: V,
      iconNode: q,
      ...Z
    },
    I,
  ) =>
    ye.createElement(
      "svg",
      {
        ref: I,
        ...Hf,
        width: P,
        height: P,
        stroke: C,
        strokeWidth: O ? (Number(d) * 24) / Number(P) : d,
        className: Da("lucide", E),
        ...Z,
      },
      [
        ...q.map(([J, G]) => ye.createElement(J, G)),
        ...(Array.isArray(V) ? V : [V]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = (C, P) => {
  const d = ye.forwardRef(({ className: O, ...E }, V) =>
    ye.createElement(Wf, {
      ref: V,
      iconNode: P,
      className: Da(`lucide-${Bf(C)}`, O),
      ...E,
    }),
  );
  return ((d.displayName = `${C}`), d);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = wr("Calculator", [
  [
    "rect",
    { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
  ],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = wr("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = wr("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = wr("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = wr("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  xr = [
    {
      id: "sumas2",
      title: "Suma 2 Cifras",
      icon: "+",
      type: "suma",
      digits: 2,
    },
    {
      id: "sumas3",
      title: "Suma 3 Cifras",
      icon: "+",
      type: "suma",
      digits: 3,
    },
    {
      id: "sumas4",
      title: "Suma 4 Cifras",
      icon: "+",
      type: "suma",
      digits: 4,
    },
    {
      id: "sumas5",
      title: "Suma 5 Cifras",
      icon: "+",
      type: "suma",
      digits: 5,
    },
    {
      id: "restas2",
      title: "Resta 2 Cifras",
      icon: "-",
      type: "resta",
      digits: 2,
    },
    {
      id: "restas3",
      title: "Resta 3 Cifras",
      icon: "-",
      type: "resta",
      digits: 3,
    },
    { id: "mult2", title: "Mult 2 Cifras", icon: "×", type: "mult", digits: 2 },
    { id: "mult3", title: "Mult 3 Cifras", icon: "×", type: "mult", digits: 3 },
    { id: "mult4", title: "Mult 4 Cifras", icon: "×", type: "mult", digits: 4 },
    {
      id: "mult2x2",
      title: "2×2 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 2,
      digitsB: 2,
    },
    {
      id: "mult3x2",
      title: "3×2 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 3,
      digitsB: 2,
    },
    {
      id: "mult2x3",
      title: "2×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 2,
      digitsB: 3,
    },
    {
      id: "mult3x3",
      title: "3×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 3,
      digitsB: 3,
    },
    {
      id: "mult4x3",
      title: "4×3 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 4,
      digitsB: 3,
    },
    {
      id: "mult5x4",
      title: "5×4 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 5,
      digitsB: 4,
    },
    {
      id: "mult6x5",
      title: "6×5 Cifras",
      icon: "×",
      type: "multm",
      digitsA: 6,
      digitsB: 5,
    },
    { id: "parentesis", title: "Con Parentesis", icon: "()", type: "expr" },
    { id: "div2x1", title: "Div 2÷1", icon: "÷", type: "div", digitsA: 2, digitsB: 1 },
    { id: "div3x1", title: "Div 3÷1", icon: "÷", type: "div", digitsA: 3, digitsB: 1 },
    { id: "div4x1", title: "Div 4÷1", icon: "÷", type: "div", digitsA: 4, digitsB: 1 },
    { id: "div3x2", title: "Div 3÷2", icon: "÷", type: "div", digitsA: 3, digitsB: 2 },
    { id: "div4x2", title: "Div 4÷2", icon: "÷", type: "div", digitsA: 4, digitsB: 2 },
    { id: "div5x2", title: "Div 5÷2", icon: "÷", type: "div", digitsA: 5, digitsB: 2 },
    { id: "div4x3", title: "Div 4÷3", icon: "÷", type: "div", digitsA: 4, digitsB: 3 },
    { id: "div5x3", title: "Div 5÷3", icon: "÷", type: "div", digitsA: 5, digitsB: 3 },
    { id: "div6x3", title: "Div 6÷3", icon: "÷", type: "div", digitsA: 6, digitsB: 3 },
    { id: "div6x4", title: "Div 6÷4", icon: "÷", type: "div", digitsA: 6, digitsB: 4 },
    { id: "divd2x1", title: "DivD 2÷1", icon: "÷.", type: "divd", digitsA: 2, digitsB: 1 },
    { id: "divd3x1", title: "DivD 3÷1", icon: "÷.", type: "divd", digitsA: 3, digitsB: 1 },
    { id: "divd4x1", title: "DivD 4÷1", icon: "÷.", type: "divd", digitsA: 4, digitsB: 1 },
    { id: "divd3x2", title: "DivD 3÷2", icon: "÷.", type: "divd", digitsA: 3, digitsB: 2 },
    { id: "divd4x2", title: "DivD 4÷2", icon: "÷.", type: "divd", digitsA: 4, digitsB: 2 },
    { id: "divd5x2", title: "DivD 5÷2", icon: "÷.", type: "divd", digitsA: 5, digitsB: 2 },
    { id: "divd4x3", title: "DivD 4÷3", icon: "÷.", type: "divd", digitsA: 4, digitsB: 3 },
    { id: "divd5x3", title: "DivD 5÷3", icon: "÷.", type: "divd", digitsA: 5, digitsB: 3 },
    { id: "divd6x3", title: "DivD 6÷3", icon: "÷.", type: "divd", digitsA: 6, digitsB: 3 },
    { id: "divd6x4", title: "DivD 6÷4", icon: "÷.", type: "divd", digitsA: 6, digitsB: 4 },
    { id: "divr2x1", title: "DivR 2÷1", icon: "÷R", type: "divr", digitsA: 2, digitsB: 1 },
    { id: "divr3x1", title: "DivR 3÷1", icon: "÷R", type: "divr", digitsA: 3, digitsB: 1 },
    { id: "divr4x1", title: "DivR 4÷1", icon: "÷R", type: "divr", digitsA: 4, digitsB: 1 },
    { id: "divr3x2", title: "DivR 3÷2", icon: "÷R", type: "divr", digitsA: 3, digitsB: 2 },
    { id: "divr4x2", title: "DivR 4÷2", icon: "÷R", type: "divr", digitsA: 4, digitsB: 2 },
    { id: "divr5x2", title: "DivR 5÷2", icon: "÷R", type: "divr", digitsA: 5, digitsB: 2 },
    { id: "divr4x3", title: "DivR 4÷3", icon: "÷R", type: "divr", digitsA: 4, digitsB: 3 },
    { id: "divr5x3", title: "DivR 5÷3", icon: "÷R", type: "divr", digitsA: 5, digitsB: 3 },
    { id: "divr6x3", title: "DivR 6÷3", icon: "÷R", type: "divr", digitsA: 6, digitsB: 3 },
    { id: "divr6x4", title: "DivR 6÷4", icon: "÷R", type: "divr", digitsA: 6, digitsB: 4 },
    { id: "corchetes", title: "Con Corchetes", icon: "[]", type: "expr" },
    { id: "llaves", title: "Con Llaves", icon: "{}", type: "expr" },
    { id: "signos", title: "Signos", icon: "+-", type: "expr" },
    {
      id: "tienda",
      title: "Tienda",
      icon: "🛒",
      type: "problema",
      category: "tienda",
      problemas: [
        {
          texto:
            "Maria compro 3 kilos de arroz a $2 c/u, 2 kilos de azucar a $3 c/u, y 1 litro de aceite a $5. Cuanto gasto?",
          respuesta: 17,
        },
        {
          texto:
            "Juan compro 5 libras de pollo a $4 c/u y 3 libras de carne a $7 c/u. Pago con $50. Cuanto le devolvieron?",
          respuesta: 9,
        },
        {
          texto:
            "La senora gasto $45 en frutas, $30 en verduras y $25 en carnes. Pago con $100. Cuanto le sobró?",
          respuesta: 0,
        },
      ],
    },
    {
      id: "finca",
      title: "Finca",
      icon: "🌾",
      type: "problema",
      category: "finca",
      problemas: [
        {
          texto:
            "En una finca hay 25 gallinas, 12 gallos y 8 pollos. Se venden 15 animales. Cuantos quedan?",
          respuesta: 30,
        },
        {
          texto:
            "Un granjero tiene 3 cerdos de 80kg, 95kg y 105kg. Vende el mas pesado a $2/kg. Cuanto obtiene?",
          respuesta: 210,
        },
        {
          texto:
            "La finca produjo 120kg de maiz, 85kg de frijol y 65kg de arroz. Se vendieron 200kg. Cuantos quedan?",
          respuesta: 70,
        },
      ],
    },
    {
      id: "ganado",
      title: "Ganado",
      icon: "🐄",
      type: "problema",
      category: "ganado",
      problemas: [
        {
          texto:
            "Don Pedro tiene 45 vacas. Cada una produce 8 litros de leche al dia. Cuantos litros en una semana?",
          respuesta: 2520,
        },
        {
          texto:
            "Un ganadero tiene 120 ovejas. Cada oveja produce 2kg de lana. Vende 80kg. Cuantos kg le quedan?",
          respuesta: 160,
        },
        {
          texto:
            "El corral tiene 25 pollos, 15 gallinas y 10 patos. Cada uno come 200g de alimento. Cuantos gramos al dia?",
          respuesta: 1e4,
        },
      ],
    },
    {
      id: "engorde",
      title: "Engorde",
      icon: "🐖",
      type: "problema",
      category: "engorde",
      problemas: [
        {
          texto:
            "Un criador tiene 50 cerdos para engorde. Cada uno aumenta 1.5kg por mes. Cuanto aumentan en 3 meses?",
          respuesta: 225,
        },
        {
          texto:
            "Se engordan 30 reses. Cada una gana 25kg en 6 meses. Cuantos kg en total?",
          respuesta: 750,
        },
        {
          texto:
            "El criador alimenta 3 veces al dia a 80 cerdos. Cada comida es de 2kg. Cuantos kg usa al dia?",
          respuesta: 480,
        },
      ],
    },
    {
      id: "probi_suma", title: "Prob. Sumas", icon: "➕", type: "probi",
      problemas: [
        { texto: "María compró 245 manzanas y 178 naranjas. ¿Cuántas frutas tiene en total?", a: 245, b: 178, op: "suma" },
        { texto: "En la mañana se vendieron 356 boletos y en la tarde 289. ¿Cuántos boletos se vendieron en total?", a: 356, b: 289, op: "suma" },
        { texto: "Un almacén tiene 1234 cajas en bodega y recibe 567 más. ¿Cuántas cajas tiene ahora?", a: 1234, b: 567, op: "suma" },
        { texto: "Una escuela tiene 428 estudiantes de primaria y 395 de secundaria. ¿Cuántos estudiantes hay?", a: 428, b: 395, op: "suma" },
        { texto: "Pedro recorrió 1567 metros caminando y 2345 metros en bicicleta. ¿Cuántos metros recorrió?", a: 1567, b: 2345, op: "suma" },
      ],
    },
    {
      id: "probi_mult", title: "Prob. Multiplicación", icon: "✖️", type: "probi",
      problemas: [
        { texto: "Una caja tiene 24 huevos. Si hay 13 cajas, ¿cuántos huevos hay en total?", a: 24, b: 13, op: "mult" },
        { texto: "Cada fila del teatro tiene 35 sillas y hay 12 filas. ¿Cuántas sillas hay en total?", a: 35, b: 12, op: "mult" },
        { texto: "Un camión lleva 48 sacos de arroz. Si hacen 15 viajes, ¿cuántos sacos transportan?", a: 48, b: 15, op: "mult" },
        { texto: "Una granja produce 125 litros de leche diarios. ¿Cuántos litros produce en 8 días?", a: 125, b: 8, op: "mult" },
        { texto: "En una panadería hacen 56 panes por hora. ¿Cuántos panes hacen en 23 horas?", a: 56, b: 23, op: "mult" },
      ],
    },
    {
      id: "probi_div", title: "Prob. División", icon: "➗", type: "probi",
      problemas: [
        { texto: "Se reparten 156 dulces entre 12 niños por igual. ¿Cuántos dulces recibe cada niño?", a: 156, b: 12, op: "div" },
        { texto: "Un agricultor tiene 750 naranjas y las empaca en cajas de 25. ¿Cuántas cajas necesita?", a: 750, b: 25, op: "div" },
        { texto: "Una fábrica produce 1296 botellas y las empaca en paquetes de 6. ¿Cuántos paquetes hace?", a: 1296, b: 6, op: "div" },
        { texto: "Un bus recorre 2184 km en 7 días. ¿Cuántos kilómetros recorre por día?", a: 2184, b: 7, op: "div" },
        { texto: "Se tienen 4560 hojas y se reparten en 15 cuadernos iguales. ¿Cuántas hojas tiene cada cuaderno?", a: 4560, b: 15, op: "div" },
      ],
    },
    {
      id: "probi_sumam", title: "Prob. Sumas Múltiples", icon: "➕➕", type: "probi",
      problemas: [
        { texto: "En una tienda se vendieron: lunes $345, martes $278, miércoles $412, jueves $189. ¿Cuánto se vendió en total?", nums: [345, 278, 412, 189], op: "suma" },
        { texto: "Un granjero cosechó 156 kg de maíz, 234 kg de frijol, 89 kg de arroz, 312 kg de trigo y 178 kg de cebada. ¿Cuántos kg cosechó?", nums: [156, 234, 89, 312, 178], op: "suma" },
        { texto: "En 5 meses una fábrica produjo: 1234, 987, 1456, 876, 1123 unidades. ¿Cuántas produjo en total?", nums: [1234, 987, 1456, 876, 1123], op: "suma" },
        { texto: "Una escuela tiene 5 salones con 38, 42, 35, 41 y 39 estudiantes. ¿Cuántos estudiantes hay?", nums: [38, 42, 35, 41, 39], op: "suma" },
        { texto: "Pedro compró útiles: cuadernos $450, lápices $125, borrador $35, regla $80, colores $310. ¿Cuánto gastó?", nums: [450, 125, 35, 80, 310], op: "suma" },
      ],
    },
    {
      id: "probi_conv", title: "Prob. Conversiones", icon: "🔄", type: "probi",
      problemas: [
        { texto: "Convierte 15 kilómetros a metros (1 km = 1000 m). ¿Cuántos metros son?", a: 15, b: 1000, op: "mult" },
        { texto: "¿Cuántos minutos hay en 24 horas? (1 hora = 60 minutos)", a: 24, b: 60, op: "mult" },
        { texto: "Convierte 35 kilogramos a gramos (1 kg = 1000 g). ¿Cuántos gramos son?", a: 35, b: 1000, op: "mult" },
        { texto: "¿Cuántos centímetros hay en 48 metros? (1 m = 100 cm)", a: 48, b: 100, op: "mult" },
        { texto: "¿Cuántos segundos hay en 5 horas? (1 hora = 3600 segundos)", a: 5, b: 3600, op: "mult" },
      ],
    },
  ],
  Zf = (C) => {
    const P = [1, 3, 7, 14, 30];
    if (C.length === 0) return new Date();
    const d = C.filter((E) => E.correct).length,
      O = new Date();
    return (O.setDate(O.getDate() + P[Math.min(d, P.length - 1)]), O);
  },
  Jf = (C) => {
    const P = Math.pow(10, C - 1),
      d = Math.pow(10, C) - 1,
      O = Math.floor(Math.random() * (d - P) + P),
      E = Math.floor(Math.random() * (d - P) + P),
      V = String(O).padStart(C, "0").split("").map(Number),
      q = String(E).padStart(C, "0").split("").map(Number),
      Z = new Array(C).fill(0);
    let I = 0;
    for (let J = C - 1; J >= 0; J--) {
      const G = V[J] + q[J] + I;
      ((Z[J] = G >= 10 ? Math.floor(G / 10) : 0), (I = Z[J]));
    }
    return { a: O, b: E, answer: O + E, dA: V, dB: q, carry: Z };
  },
  qf = (C) => {
    if (C === "parentesis") {
      const d = Math.floor(Math.random() * 10) + 1,
        O = Math.floor(Math.random() * 10) + 1,
        E = Math.floor(Math.random() * 10) + 1;
      return {
        expr: `(${d} + ${O}) x ${E}`,
        answer: (d + O) * E,
        steps: [`${d} + ${O} = ${d + O}`, `${d + O} x ${E} = ${(d + O) * E}`],
      };
    }
    if (C === "corchetes") {
      const d = Math.floor(Math.random() * 15) + 5,
        O = Math.floor(Math.random() * 5) + 1,
        E = Math.floor(Math.random() * 5) + 1;
      return {
        expr: `[${d} - (${O} + ${E})] x 2`,
        answer: (d - (O + E)) * 2,
        steps: [
          `${O} + ${E} = ${O + E}`,
          `${d} - ${O + E} = ${d - (O + E)}`,
          `${d - (O + E)} x 2 = ${(d - (O + E)) * 2}`,
        ],
      };
    }
    if (C === "llaves") {
      const d = Math.floor(Math.random() * 6) + 2;
      return {
        expr: `{[(${d} + 3) - 2]} + 1`,
        answer: d + 2,
        steps: [
          `${d} + 3 = ${d + 3}`,
          `${d + 3} - 2 = ${d + 1}`,
          `${d + 1} + 1 = ${d + 2}`,
        ],
      };
    }
    const P = Math.floor(Math.random() * 10) + 1;
    return {
      expr: `5 - (-${P})`,
      answer: 5 + P,
      steps: ["Menos con menos = mas", `5 + ${P} = ${5 + P}`],
    };
  };
const Nf = (C) => {
  const _P = Math.pow(10, C - 1),
    _d = Math.pow(10, C) - 1,
    _O = Math.floor(Math.random() * (_d - _P) + _P),
    _b = Math.floor(Math.random() * 8) + 2,
    _V = String(_O).padStart(C, "0").split("").map(Number),
    _q = String(_O * _b)
      .split("")
      .map(Number),
    _R = _q.length,
    _off = _R - C,
    _carry = new Array(_R).fill(0);
  let _cin = 0;
  for (let _j = _R - 1; _j >= 0; _j--) {
    const _ad = _j >= _off ? _V[_j - _off] : 0,
      _prod = _ad * _b + _cin;
    ((_carry[_j] = Math.floor(_prod / 10)), (_cin = _carry[_j]));
  }
  return {
    a: _O,
    b: _b,
    answer: _O * _b,
    dA: _V,
    dR: _q,
    carry: _carry,
    R: _R,
    C,
  };
};
const Gm = (CA, CB) => {
  const _mA = Math.pow(10, CA - 1),
    _MA = Math.pow(10, CA) - 1,
    _A = Math.floor(Math.random() * (_MA - _mA) + _mA),
    _mB = Math.pow(10, CB - 1),
    _MB = Math.pow(10, CB) - 1,
    _B = Math.floor(Math.random() * (_MB - _mB) + _mB),
    _dA = String(_A).padStart(CA, "0").split("").map(Number),
    _dB = String(_B).padStart(CB, "0").split("").map(Number),
    _pLen = CA + 1,
    _parts = [];
  for (let _i = CB - 1; _i >= 0; _i--) {
    const _bd = _dB[_i],
      _sh = CB - 1 - _i,
      _carry = new Array(_pLen).fill(0);
    let _cin = 0;
    for (let _j = _pLen - 1; _j >= 0; _j--) {
      const _ad = _j >= 1 ? _dA[_j - 1] : 0,
        _pr = _ad * _bd + _cin;
      ((_carry[_j] = Math.floor(_pr / 10)), (_cin = _carry[_j]));
    }
    _parts.push({
      bDigit: _bd,
      shift: _sh,
      digits: String(_A * _bd)
        .padStart(_pLen, "0")
        .split("")
        .map(Number),
      carry: _carry,
      len: _pLen,
    });
  }
  const _ans = _A * _B,
    _dR = String(_ans).split("").map(Number),
    _RF = _dR.length,
    _W = Math.max(_RF, CA + CB + 1);
  return {
    a: _A,
    b: _B,
    answer: _ans,
    dA: _dA,
    dB: _dB,
    parts: _parts,
    dR: _dR,
    RF: _RF,
    W: _W,
    CA,
    CB,
    phase: 0,
    done: [],
  };
};
const genDiv = (dividendDigits, divisorDigits) => {
  for (let _t = 0; _t < 200; _t++) {
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const minQ = Math.ceil(minD / _div);
    const maxQ = Math.floor(maxD / _div);
    if (minQ < 1 || minQ > maxQ) continue;
    const _q = Math.floor(Math.random() * (maxQ - minQ + 1)) + minQ;
    const _dd = _q * _div;
    if (String(_dd).length !== dividendDigits) continue;
    const dDividend = String(_dd).split("").map(Number);
    const dDivisor = String(_div).split("").map(Number);
    const dQuotient = String(_q).split("").map(Number);
    return {
      dividend: _dd, divisor: _div, quotient: _q,
      dDividend, dDivisor, dQuotient,
      QLen: dQuotient.length, DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: false, decimalPos: -1,
    };
  }
  return genDiv(dividendDigits, divisorDigits);
};
const genDivD = (dividendDigits, divisorDigits) => {
  const decOpts = [
    { val: 0.5, str: "5" }, { val: 0.25, str: "25" }, { val: 0.75, str: "75" },
    { val: 0.2, str: "2" }, { val: 0.4, str: "4" }, { val: 0.6, str: "6" }, { val: 0.8, str: "8" },
  ];
  for (let _t = 0; _t < 500; _t++) {
    const dec = decOpts[Math.floor(Math.random() * decOpts.length)];
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const fracC = dec.val * _div;
    if (Math.abs(fracC - Math.round(fracC)) > 0.001) continue;
    const fracInt = Math.round(fracC);
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const minIQ = Math.max(1, Math.ceil((minD - fracInt) / _div));
    const maxIQ = Math.floor((maxD - fracInt) / _div);
    if (minIQ > maxIQ) continue;
    const intQ = Math.floor(Math.random() * (maxIQ - minIQ + 1)) + minIQ;
    const _dd = intQ * _div + fracInt;
    if (_dd < minD || _dd > maxD || String(_dd).length !== dividendDigits) continue;
    const qStr = String(intQ);
    const dQuotient = (qStr + dec.str).split("").map(Number);
    const decPos = qStr.length;
    return {
      dividend: _dd, divisor: _div, quotient: _dd / _div,
      quotientStr: intQ + "." + dec.str,
      dDividend: String(_dd).split("").map(Number),
      dDivisor: String(_div).split("").map(Number),
      dQuotient, decimalPos: decPos,
      QLen: dQuotient.length, DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: true, decStr: dec.str,
    };
  }
  return genDivD(dividendDigits, divisorDigits);
};
const genDivR = (dividendDigits, divisorDigits) => {
  for (let _t = 0; _t < 200; _t++) {
    const minS = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
    const maxS = Math.pow(10, divisorDigits) - 1;
    const _div = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    const minD = Math.pow(10, dividendDigits - 1);
    const maxD = Math.pow(10, dividendDigits) - 1;
    const _dd = Math.floor(Math.random() * (maxD - minD + 1)) + minD;
    if (_dd % _div === 0) continue;
    const _q = Math.floor(_dd / _div);
    if (_q < 1) continue;
    const _r = _dd % _div;
    const dDividend = String(_dd).split("").map(Number);
    const dDivisor = String(_div).split("").map(Number);
    const dQuotient = String(_q).split("").map(Number);
    const dRemainder = String(_r).split("").map(Number);
    return {
      dividend: _dd, divisor: _div, quotient: _q, remainder: _r,
      dDividend, dDivisor, dQuotient, dRemainder,
      QLen: dQuotient.length, RLen: dRemainder.length,
      DLen: dividendDigits, SLen: divisorDigits,
      isDecimal: false, isRemainder: true, decimalPos: -1, phase: 0,
    };
  }
  return genDivR(dividendDigits, divisorDigits);
};
const genSumaAB = (a, b) => genSumaMulti([a, b]);
const genSumaMulti = (nums) => {
  const answer = nums.reduce((s, n) => s + n, 0);
  const W = Math.max(...nums.map(n => String(n).length), String(answer).length);
  const dNums = nums.map(n => String(n).padStart(W, "0").split("").map(Number));
  const dAnswer = String(answer).padStart(W, "0").split("").map(Number);
  const carry = new Array(W).fill(0);
  let c = 0;
  for (let j = W - 1; j >= 0; j--) {
    let cs = c;
    for (let i = 0; i < nums.length; i++) cs += dNums[i][j];
    carry[j] = Math.floor(cs / 10); c = carry[j];
  }
  return { nums, dNums, answer, dAnswer, W, N: nums.length, carry, dA: dNums[0], dB: dNums.length > 1 ? dNums[1] : dNums[0] };
};
const genMultAB = (_a, _b) => {
  const a = Math.max(_a, _b), b = Math.min(_a, _b);
  const dA = String(a).split("").map(Number);
  const dB = String(b).split("").map(Number);
  const CA = dA.length, CB = dB.length;
  if (CB === 1) {
    const _b = b;
    const _q = String(a * _b).split("").map(Number);
    const _R = _q.length, _off = _R - CA;
    const _carry = new Array(_R).fill(0);
    let _cin = 0;
    for (let _j = _R - 1; _j >= 0; _j--) {
      const _ad = _j >= _off ? dA[_j - _off] : 0;
      const _prod = _ad * _b + _cin;
      _carry[_j] = Math.floor(_prod / 10); _cin = _carry[_j];
    }
    return { a, b: _b, answer: a * _b, dA, dR: _q, carry: _carry, R: _R, C: CA, _isMult1: true };
  }
  const _pLen = CA + 1, _parts = [];
  for (let _i = CB - 1; _i >= 0; _i--) {
    const _bd = dB[_i], _sh = CB - 1 - _i;
    const _carry = new Array(_pLen).fill(0);
    let _cin = 0;
    for (let _j = _pLen - 1; _j >= 0; _j--) {
      const _ad = _j >= 1 ? dA[_j - 1] : 0;
      const _pr = _ad * _bd + _cin;
      _carry[_j] = Math.floor(_pr / 10); _cin = _carry[_j];
    }
    _parts.push({ bDigit: _bd, shift: _sh, digits: String(a * _bd).padStart(_pLen, "0").split("").map(Number), carry: _carry, len: _pLen });
  }
  const _ans = a * b, _dR = String(_ans).split("").map(Number), _RF = _dR.length;
  const _W = Math.max(_RF, CA + CB + 1);
  return { a, b, answer: _ans, dA, dB, parts: _parts, dR: _dR, RF: _RF, W: _W, CA, CB, phase: 0, done: [], _isMultM: true };
};
const genDivAB = (a, b) => {
  const _q = Math.floor(a / b);
  const dDividend = String(a).split("").map(Number);
  const dDivisor = String(b).split("").map(Number);
  const dQuotient = String(_q).split("").map(Number);
  return {
    dividend: a, divisor: b, quotient: _q,
    dDividend, dDivisor, dQuotient,
    QLen: dQuotient.length, DLen: String(a).length, SLen: String(b).length,
    isDecimal: false, isRemainder: false, decimalPos: -1,
  };
};
function bf() {
  var re;
  const [C, P] = ye.useState("home"),
    [d, O] = ye.useState(null),
    [E, V] = ye.useState(null),
    [q, Z] = ye.useState([]),
    [I, J] = ye.useState(0),
    [G, ne] = ye.useState(null),
    [Q, ge] = ye.useState(""),
    [Ce, b] = ye.useState(null),
    [K, be] = ye.useState(!1),
    [He, We] = ye.useState([]),
    [fe, Ie] = ye.useState(""),
    [xe, Pe] = ye.useState(() => {
      const f = localStorage.getItem("niv-v3");
      return f ? JSON.parse(f) : { history: [], reviews: {} };
    });
  ye.useEffect(() => {
    localStorage.setItem("niv-v3", JSON.stringify(xe));
  }, [xe]);
  const je = (f, S) => {
      Pe((N) => ({
        ...N,
        history: [
          ...N.history,
          { id: f, ok: S, date: new Date().toISOString() },
        ],
        reviews: { ...N.reviews, [f]: Zf(N.history) },
      }));
    },
    et = (f) => {
      O(f);
      const S = Jf(f.digits);
      (V(S), Z(new Array(f.digits).fill("")), J(S.dA.length - 1), P("suma"));
    },
    Qe = (f) => {
      (O(f), ne(qf(f.id)), ge(""), P("expr"));
    },
    tt = (f) => {
      O(f);
      const S = f.problemas || [];
      (b(S[Math.floor(Math.random() * S.length)]), P("prob"));
    },
    nt = (f) => {
      if (!E) return;
      const S = I,
        N = S < E.dA.length - 1 ? E.carry[S + 1] : 0,
        c = (E.dA[S] + E.dB[S] + N) % 10,
        y = [...q];
      ((y[S] = f),
        Z(y),
        je(d.id, parseInt(f) === c),
        parseInt(f) === c && (I > 0 ? J(I - 1) : J(-1)));
    },
    wt = (f) => {
      O(f);
      const S = Nf(f.digits);
      (V(S), Z(new Array(S.R).fill("")), J(S.R - 1), P("mult"));
    },
    ht = (f) => {
      if (!E) return;
      const S = I,
        se = E.R - E.C,
        ae = S >= se ? E.dA[S - se] : 0,
        N = S < E.R - 1 ? E.carry[S + 1] : 0,
        c = (ae * E.b + N) % 10,
        y = [...q];
      ((y[S] = f),
        Z(y),
        je(d.id, parseInt(f) === c),
        parseInt(f) === c && (I > 0 ? J(I - 1) : J(-1)));
    },
    wm = (f) => {
      O(f);
      const S = Gm(f.digitsA, f.digitsB);
      (V(S),
        Z(new Array(S.parts[0].len).fill("")),
        J(S.parts[0].len - 1),
        P("multm"));
    },
    hm = (f) => {
      if (!E) return;
      const S = I,
        ph = E.phase;
      if (ph >= E.CB) {
        const c = E.dR[S], y = [...q];
        y[S] = f;
        Z(y);
        je(d.id, parseInt(f) === c);
        if (parseInt(f) === c) {
          if (I > 0) J(I - 1);
          else J(-1);
        }
        return;
      }
      const part = E.parts[ph],
        _ad = S >= 1 ? E.dA[S - 1] : 0,
        _cin = S < part.len - 1 ? part.carry[S + 1] : 0,
        c = (_ad * part.bDigit + _cin) % 10,
        y = [...q];
      ((y[S] = f), Z(y), je(d.id, parseInt(f) === c));
      if (parseInt(f) === c) {
        if (I > 0) J(I - 1);
        else {
          const _dn = [...E.done, [...y]],
            _nx = ph + 1;
          if (_nx < E.CB) {
            (V({ ...E, phase: _nx, done: _dn }),
              Z(new Array(E.parts[_nx].len).fill("")),
              J(E.parts[_nx].len - 1));
          } else {
            (V({ ...E, phase: _nx, done: _dn }),
              Z(new Array(E.RF).fill("")),
              J(E.RF - 1));
          }
        }
      }
    },
    wd = (f) => {
      O(f);
      const S = genDiv(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wdd = (f) => {
      O(f);
      const S = genDivD(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wdr = (f) => {
      O(f);
      const S = genDivR(f.digitsA, f.digitsB);
      V(S); Z(new Array(S.QLen).fill("")); J(0); P("divg");
    },
    wpi = (f) => {
      O(f);
      const probs = f.problemas;
      const prob = probs[Math.floor(Math.random() * probs.length)];
      let S;
      if (prob.op === "suma") {
        S = prob.nums ? genSumaMulti(prob.nums) : genSumaAB(prob.a, prob.b);
        S._probi = "suma"; S._pTexto = prob.texto;
        Z(new Array(S.W).fill("")); J(S.W - 1);
      } else if (prob.op === "mult") {
        S = genMultAB(prob.a, prob.b);
        S._probi = "mult"; S._pTexto = prob.texto;
        if (S._isMult1) {
          Z(new Array(S.R).fill("")); J(S.R - 1);
        } else {
          Z(new Array(S.parts[0].len).fill("")); J(S.parts[0].len - 1);
        }
      } else if (prob.op === "div") {
        S = genDivAB(prob.a, prob.b);
        S._probi = "div"; S._pTexto = prob.texto;
        Z(new Array(S.QLen).fill("")); J(0);
      }
      V(S); P("probi");
    },
    hspi = (f) => {
      if (!E) return;
      const S = I, c = E.dAnswer[S], y = [...q];
      y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) { if (I > 0) J(I - 1); else J(-1); }
    },
    hpi = (f) => {
      if (!E) return;
      if (E._probi === "suma") hspi(f);
      else if (E._probi === "mult") {
        if (E._isMult1) ht(f);
        else hm(f);
      } else if (E._probi === "div") hd(f);
    },
    hd = (f) => {
      if (!E) return;
      const S = I;
      if (E.isRemainder && E.phase === 1) {
        const c = E.dRemainder[S], y = [...q];
        y[S] = f; Z(y);
        je(d.id, parseInt(f) === c);
        if (parseInt(f) === c) {
          if (I < E.RLen - 1) J(I + 1);
          else J(-1);
        }
        return;
      }
      const c = E.dQuotient[S], y = [...q];
      y[S] = f; Z(y);
      je(d.id, parseInt(f) === c);
      if (parseInt(f) === c) {
        if (I < E.QLen - 1) J(I + 1);
        else if (E.isRemainder) {
          V({ ...E, phase: 1 });
          Z(new Array(E.RLen).fill(""));
          J(0);
        } else J(-1);
      }
    },
    Me = () => {
      const f = parseInt(Q) === G.answer;
      je(d.id, f);
    },
    Ke = () => {
      const f = parseInt(Q) === Ce.respuesta;
      je(d.id, f);
    },
    Ye = () => {
      if (!fe.trim()) return;
      const f = fe.toLowerCase();
      let S = "Puedo ayudarte con matematicas!";
      (f.includes("suma")
        ? (S = "Para sumar:竖方向从右到左相加，超过9进位")
        : f.includes("tienda") || f.includes("compra")
          ? (S = "Problema de tienda: multiplica cantidad x precio, luego suma")
          : (f.includes("finca") || f.includes("animal")) &&
            (S = "Problema de finca: suma los animales, resta los vendidos"),
        We([...He, { role: "user", text: fe }, { role: "bot", text: S }]),
        Ie(""));
    },
    Ee = ((re = E == null ? void 0 : E.dA) == null ? void 0 : re.length) || 2;
  return v.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white",
    children: [
      v.jsx("header", {
        className: "bg-white/10 p-4",
        children: v.jsxs("div", {
          className: "max-w-4xl mx-auto flex items-center justify-between",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                v.jsx(Qf, { className: "w-10 h-10 text-yellow-400" }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "text-xl font-bold",
                      children: "Nivelatorio Matematicas",
                    }),
                    v.jsx("p", {
                      className: "text-xs text-green-200",
                      children: "Aprende con practica",
                    }),
                  ],
                }),
              ],
            }),
            v.jsx("button", {
              onClick: () => be(!0),
              className: "p-2 bg-white/10 rounded-lg",
              children: v.jsx(Yf, { className: "w-5 h-5" }),
            }),
          ],
        }),
      }),
      C === "home" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
              children: [
                v.jsxs("button", {
                  onClick: () => P("sumas"),
                  className: "bg-green-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "+" }),
                    v.jsx("div", { className: "font-bold", children: "Sumas" }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("restas"),
                  className: "bg-red-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "-" }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Restas",
                    }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("expr"),
                  className: "bg-purple-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", {
                      className: "text-3xl mb-2",
                      children: "()",
                    }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Expresiones",
                    }),
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => P("probs"),
                  className: "bg-orange-600 p-6 rounded-2xl",
                  children: [
                    v.jsx("div", { className: "text-3xl mb-2", children: "?" }),
                    v.jsx("div", {
                      className: "font-bold",
                      children: "Problemas",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("mults"),
              className: "bg-yellow-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "×" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Multiplicaciones",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divs"),
              className: "bg-cyan-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Divisiones",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divds"),
              className: "bg-pink-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷." }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Div. Decimales",
                }),
              ],
            }),
            v.jsxs("button", {
              onClick: () => P("divrs"),
              className: "bg-amber-600 p-6 rounded-2xl",
              children: [
                v.jsx("div", { className: "text-3xl mb-2", children: "÷R" }),
                v.jsx("div", {
                  className: "font-bold",
                  children: "Div. con Residuo",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "bg-white/10 rounded-2xl p-6",
              children: [
                v.jsx("h2", {
                  className: "font-bold mb-4",
                  children: "Lecciones",
                }),
                v.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                  children: xr
                    .slice(0, 8)
                    .map((f) =>
                      v.jsxs(
                        "button",
                        {
                          onClick: () =>
                            f.type === "suma"
                              ? et(f)
                              : f.type === "mult"
                                ? wt(f)
                                : f.type === "multm"
                                  ? wm(f)
                                  : f.type === "expr"
                                    ? Qe(f)
                                    : tt(f),
                          className:
                            "bg-white/5 p-3 rounded-xl text-center hover:bg-white/10",
                          children: [
                            v.jsx("div", {
                              className: "text-2xl",
                              children: f.icon,
                            }),
                            v.jsx("div", {
                              className: "text-sm font-bold",
                              children: f.title,
                            }),
                          ],
                        },
                        f.id,
                      ),
                    ),
                }),
              ],
            }),
          ],
        }),
      C === "sumas" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Sumas Verticales",
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: xr
                .filter((f) => f.type === "suma")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => et(f),
                      className:
                        "bg-green-600 p-6 rounded-2xl hover:bg-green-500",
                      children: [
                        v.jsx("div", {
                          className: "font-bold text-lg",
                          children: f.title,
                        }),
                        v.jsx("div", {
                          className: "text-green-200 text-sm",
                          children: "Practicar",
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "restas" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Restas Verticales",
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "resta")
                .map((f) =>
                  v.jsx(
                    "button",
                    {
                      onClick: () => {
                        (O(f), P("home"));
                      },
                      className: "bg-red-600 p-6 rounded-2xl",
                      children: v.jsx("div", {
                        className: "font-bold",
                        children: f.title,
                      }),
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "expr" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Expresiones",
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: xr
                .filter((f) => f.type === "expr")
                .map((f) =>
                  v.jsx(
                    "button",
                    {
                      onClick: () => Qe(f),
                      className: "bg-purple-600 p-6 rounded-2xl",
                      children: v.jsx("div", {
                        className: "font-bold",
                        children: f.title,
                      }),
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "probs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Problemas",
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "problema")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => tt(f),
                      className: "bg-orange-600 p-6 rounded-2xl text-left",
                      children: [
                        v.jsx("div", {
                          className: "text-3xl mb-2",
                          children: f.icon,
                        }),
                        v.jsx("div", {
                          className: "font-bold",
                          children: f.title,
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Problemas Interactivos" }),
            v.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: xr
                .filter((f) => f.type === "probi")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wpi(f),
                    className: "bg-teal-600 p-6 rounded-2xl text-left",
                    children: [
                      v.jsx("div", { className: "text-3xl mb-2", children: f.icon }),
                      v.jsx("div", { className: "font-bold", children: f.title }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "mults" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Multiplicaciones",
            }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "mult" || f.type === "multm")
                .map((f) =>
                  v.jsxs(
                    "button",
                    {
                      onClick: () => (f.type === "mult" ? wt(f) : wm(f)),
                      className:
                        "bg-yellow-600 p-6 rounded-2xl hover:bg-yellow-500",
                      children: [
                        v.jsx("div", {
                          className: "font-bold text-lg",
                          children: f.title,
                        }),
                        v.jsx("div", {
                          className: "text-yellow-200 text-sm",
                          children: "Practicar",
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
            }),
            v.jsx("button", {
              onClick: () => P("home"),
              className: "mt-6 text-blue-300",
              children: "Volver",
            }),
          ],
        }),
      C === "divs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones" }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "div")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wd(f),
                    className: "bg-cyan-600 p-6 rounded-2xl hover:bg-cyan-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-cyan-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "divds" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones Decimales" }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "divd")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wdd(f),
                    className: "bg-pink-600 p-6 rounded-2xl hover:bg-pink-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-pink-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "divrs" &&
        v.jsxs("main", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            v.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Divisiones con Residuo" }),
            v.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: xr
                .filter((f) => f.type === "divr")
                .map((f) =>
                  v.jsxs("button", {
                    onClick: () => wdr(f),
                    className: "bg-amber-600 p-6 rounded-2xl hover:bg-amber-500",
                    children: [
                      v.jsx("div", { className: "font-bold text-lg", children: f.title }),
                      v.jsx("div", { className: "text-amber-200 text-sm", children: "Practicar" }),
                    ],
                  }, f.id),
                ),
            }),
            v.jsx("button", { onClick: () => P("home"), className: "mt-6 text-blue-300", children: "Volver" }),
          ],
        }),
      C === "divg" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P(E.isRemainder ? "divrs" : E.isDecimal ? "divds" : "divs"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["División - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8 overflow-x-auto",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: (() => {
                          const cells = [];
                          for (let _i = 0; _i < E.SLen + 1; _i++)
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: " " }, "qs" + _i));
                          for (let _i = 0; _i < E.QLen; _i++) {
                            if (E.isDecimal && _i === E.decimalPos)
                              cells.push(v.jsx("div", { className: "w-4 text-center text-white", children: "." }, "qdot"));
                            const inRemPhase = E.isRemainder && E.phase === 1;
                            const col = inRemPhase
                              ? "bg-green-500/50 rounded"
                              : q[_i]
                                ? parseInt(q[_i]) === E.dQuotient[_i]
                                  ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                                : _i === I ? "bg-yellow-500/50 rounded" : "";
                            const ch = inRemPhase
                              ? E.dQuotient[_i]
                              : q[_i] || (_i === I ? "?" : "_");
                            cells.push(v.jsx("div", {
                              className: "w-12 text-center " + col,
                              children: ch,
                            }, "qq" + _i));
                          }
                          return cells;
                        })(),
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex items-center",
                        children: (() => {
                          const cells = [];
                          E.dDivisor.forEach((dg, _i) =>
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: dg }, "ds" + _i))
                          );
                          cells.push(v.jsx("div", { className: "w-12 text-center text-2xl", children: "│" }, "bar"));
                          E.dDividend.forEach((dg, _i) =>
                            cells.push(v.jsx("div", { className: "w-12 text-center", children: dg }, "dd" + _i))
                          );
                          if (E.isDecimal) {
                            cells.push(v.jsx("div", { className: "w-4 text-center", children: "." }, "ddot"));
                            const decLen = E.decStr ? E.decStr.length : 1;
                            for (let _i = 0; _i < decLen; _i++)
                              cells.push(v.jsx("div", { className: "w-12 text-center text-blue-300", children: "0" }, "dz" + _i));
                          }
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                E.isRemainder && v.jsxs("div", {
                  className: "flex justify-center mb-6",
                  children: v.jsxs("div", {
                    className: "font-mono text-2xl inline-flex items-center gap-2",
                    children: [
                      v.jsx("span", { className: "text-blue-200 font-bold", children: "Residuo:" }),
                      ...(() => {
                        if (!E.isRemainder) return [];
                        if (E.phase === 0) {
                          return E.dRemainder.map((_d, _i) =>
                            v.jsx("span", { className: "inline-block w-10 text-center text-gray-400", children: "_" }, "r" + _i)
                          );
                        }
                        if (I === -1) {
                          return E.dRemainder.map((_d, _i) =>
                            v.jsx("span", { className: "inline-block w-10 text-center bg-green-500/50 rounded", children: _d }, "r" + _i)
                          );
                        }
                        return E.dRemainder.map((_d, _i) => {
                          const col = q[_i]
                            ? parseInt(q[_i]) === E.dRemainder[_i]
                              ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                            : _i === I ? "bg-yellow-500/50 rounded" : "";
                          return v.jsx("span", {
                            className: "inline-block w-10 text-center " + col,
                            children: q[_i] || (_i === I ? "?" : "_"),
                          }, "r" + _i);
                        });
                      })(),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => (E.isRemainder ? wdr(d) : E.isDecimal ? wdd(d) : wd(d)),
                          className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => { const ph0 = E.isRemainder ? { ...E, phase: 0 } : E; V(ph0); Z(new Array(E.QLen).fill("")); J(0); },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: E.isRemainder && E.phase === 1
                            ? ["Dígito ", I + 1, " de ", E.RLen, " del residuo"]
                            : ["Dígito ", I + 1, " de ", E.QLen, " del cociente"],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hd(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => (E.isRemainder ? wdr(d) : E.isDecimal ? wdd(d) : wd(d)),
                              className: "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => { const ph0 = E.isRemainder ? { ...E, phase: 0 } : E; V(ph0); Z(new Array(E.QLen).fill("")); J(0); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "suma" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("sumas"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Suma Vertical - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.carry.map((f, S) =>
                          v.jsx(
                            "div",
                            {
                              className: "w-14 text-center",
                              children:
                                E.carry[S + 1] > 0 &&
                                v.jsx("span", {
                                  className: "text-green-400 font-bold",
                                  children: E.carry[S + 1],
                                }),
                            },
                            S,
                          ),
                        ),
                      }),
                      v.jsx("div", {
                        className: "mb-2",
                        children: E.dA.map((f, S) =>
                          v.jsx(
                            "span",
                            {
                              className: `inline-block w-14 text-center ${S === I ? "bg-yellow-500/50 rounded" : ""}`,
                              children: f,
                            },
                            S,
                          ),
                        ),
                      }),
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", {
                            className: "mr-4 text-4xl",
                            children: "+",
                          }),
                          E.dB.map((f, S) =>
                            v.jsx(
                              "span",
                              {
                                className: `inline-block w-14 text-center ${S === I ? "bg-yellow-500/50 rounded" : ""}`,
                                children: f,
                              },
                              S,
                            ),
                          ),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-2",
                      }),
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx(
                            "span",
                            {
                              className: `inline-block w-14 text-center ${q[S] ? (parseInt(q[S]) === (E.dA[S] + E.dB[S] + (S < E.dA.length - 1 ? E.carry[S + 1] : 0)) % 10 ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : S === I ? "bg-yellow-500/50 rounded" : ""}`,
                              children: f || (S === I ? "?" : "_"),
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => et(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            Z(new Array(E.dA.length).fill(""));
                            J(E.dA.length - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: [
                            "Columna ",
                            Ee - I,
                            " de ",
                            Ee,
                            ": ",
                            E.dA[I],
                            " + ",
                            E.dB[I],
                            " = ?",
                            I < Ee - 1 &&
                              E.carry[I + 1] > 0 &&
                              v.jsxs("span", {
                                className: "ml-2 text-green-400",
                                children: ["(Llevas: ", E.carry[I + 1], ")"],
                              }),
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => nt(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => et(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                Z(new Array(E.dA.length).fill(""));
                                J(E.dA.length - 1);
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "mult" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("mults"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Multiplicación - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "text-right font-mono text-5xl",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: E.carry.map((f, S) =>
                          v.jsx(
                            "div",
                            {
                              className: "w-14 text-center",
                              children:
                                E.carry[S + 1] > 0 &&
                                v.jsx("span", {
                                  className:
                                    "text-green-400 font-bold text-2xl",
                                  children: E.carry[S + 1],
                                }),
                            },
                            S,
                          ),
                        ),
                      }),
                      v.jsx("div", {
                        className: "mb-2",
                        children: Array.from({ length: E.R }, (_, S) => {
                          const oe = E.R - E.C;
                          return v.jsx(
                            "span",
                            {
                              className:
                                "inline-block w-14 text-center " +
                                (S === I ? "bg-yellow-500/50 rounded" : ""),
                              children: S >= oe ? E.dA[S - oe] : "",
                            },
                            S,
                          );
                        }),
                      }),
                      v.jsxs("div", {
                        className: "flex items-center justify-end mb-2",
                        children: [
                          v.jsx("span", {
                            className: "mr-4 text-4xl",
                            children: "×",
                          }),
                          Array.from({ length: E.R }, (_, S) =>
                            v.jsx(
                              "span",
                              {
                                className:
                                  "inline-block w-14 text-center " +
                                  (S === I ? "bg-yellow-500/50 rounded" : ""),
                                children: S === E.R - 1 ? E.b : "",
                              },
                              S,
                            ),
                          ),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-2",
                      }),
                      v.jsx("div", {
                        children: q.map((f, S) =>
                          v.jsx(
                            "span",
                            {
                              className:
                                "inline-block w-14 text-center " +
                                (q[S]
                                  ? parseInt(q[S]) === E.dR[S]
                                    ? "bg-green-500/50 rounded"
                                    : "bg-red-500/50 rounded"
                                  : S === I
                                    ? "bg-yellow-500/50 rounded"
                                    : ""),
                              children: f || (S === I ? "?" : "_"),
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => wt(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            Z(new Array(E.R).fill(""));
                            J(E.R - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-6 text-blue-200",
                          children: [
                            "Columna ",
                            E.R - I,
                            " de ",
                            E.R,
                            ": ",
                            (() => {
                              const oe = E.R - E.C;
                              return I >= oe ? E.dA[I - oe] : 0;
                            })(),
                            " × ",
                            E.b,
                            " = ?",
                            I < E.R - 1 &&
                              E.carry[I + 1] > 0 &&
                              v.jsxs("span", {
                                className: "ml-2 text-green-400",
                                children: ["(Llevas: ", E.carry[I + 1], ")"],
                              }),
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => ht(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => wt(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                Z(new Array(E.R).fill(""));
                                J(E.R - 1);
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "multm" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("mults"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsxs("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: ["Multiplicación - ", d == null ? void 0 : d.title],
                }),
                v.jsx("div", {
                  className: "flex justify-center mb-6 overflow-x-auto",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: Array.from({ length: E.W }, (_, gc) => {
                          const ridx = gc - (E.W - E.CA);
                          return v.jsx(
                            "div",
                            {
                              className: "w-10 text-center",
                              children: ridx >= 0 ? E.dA[ridx] : " ",
                            },
                            gc,
                          );
                        }),
                      }),
                      v.jsxs("div", {
                        className: "flex justify-end items-center mb-1",
                        children: [
                          v.jsx("span", {
                            className: "text-2xl mr-1",
                            children: "×",
                          }),
                          Array.from({ length: E.W }, (_, gc) => {
                            const ridx = gc - (E.W - E.CB);
                            return v.jsx(
                              "div",
                              {
                                className: "w-10 text-center",
                                children: ridx >= 0 ? E.dB[ridx] : " ",
                              },
                              gc,
                            );
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className: "border-b-4 border-white mb-1",
                      }),
                      ...E.done.map((dn, pi) => {
                        const pt = E.parts[pi];
                        return v.jsx(
                          "div",
                          {
                            className: "flex justify-end mb-1",
                            children: Array.from({ length: E.W }, (_, gc) => {
                              const qidx = gc - (E.W - pt.shift - pt.len);
                              const isTrail = gc >= E.W - pt.shift;
                              return v.jsx(
                                "div",
                                {
                                  className: "w-10 text-center text-green-400",
                                  children: isTrail
                                    ? "0"
                                    : qidx >= 0 && qidx < pt.len
                                      ? dn[qidx]
                                      : " ",
                                },
                                gc,
                              );
                            }),
                          },
                          pi,
                        );
                      }),
                      E.phase < E.CB &&
                        (() => {
                          const pt = E.parts[E.phase];
                          return v.jsx("div", {
                            className: "flex justify-end mb-1",
                            children: Array.from({ length: E.W }, (_, gc) => {
                              const qidx = gc - (E.W - pt.shift - pt.len);
                              const isTrail = gc >= E.W - pt.shift;
                              if (isTrail)
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center text-blue-300",
                                    children: "0",
                                  },
                                  gc,
                                );
                              if (qidx >= 0 && qidx < pt.len) {
                                const S = qidx;
                                const _ad = S >= 1 ? E.dA[S - 1] : 0,
                                  _cin = S < pt.len - 1 ? pt.carry[S + 1] : 0,
                                  c = (_ad * pt.bDigit + _cin) % 10;
                                const col = q[S]
                                  ? parseInt(q[S]) === c
                                    ? "bg-green-500/50 rounded"
                                    : "bg-red-500/50 rounded"
                                  : S === I
                                    ? "bg-yellow-500/50 rounded"
                                    : "";
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center " + col,
                                    children: q[S] || (S === I ? "?" : "_"),
                                  },
                                  gc,
                                );
                              }
                              return v.jsx(
                                "div",
                                {
                                  className: "w-10 text-center",
                                  children: " ",
                                },
                                gc,
                              );
                            }),
                          });
                        })(),
                      E.phase >= E.CB &&
                        v.jsxs("div", {
                          children: [
                            v.jsx("div", {
                              className: "border-b-4 border-white mb-1",
                            }),
                            v.jsx("div", {
                              className: "flex justify-end",
                              children: Array.from({ length: E.W }, (_, gc) => {
                                const ridx = gc - (E.W - E.RF);
                                if (ridx >= 0 && ridx < E.RF) {
                                  const S = ridx;
                                  const col = q[S] ? (parseInt(q[S]) === E.dR[S] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded") : (S === I ? "bg-yellow-500/50 rounded" : "");
                                  return v.jsx(
                                    "div",
                                    {
                                      className: "w-10 text-center text-yellow-400 font-bold " + col,
                                      children: I === -1 ? E.dR[ridx] : (q[S] || (S === I ? "?" : "_"))
                                    },
                                    gc,
                                  );
                                }
                                return v.jsx(
                                  "div",
                                  {
                                    className: "w-10 text-center",
                                    children: " ",
                                  },
                                  gc,
                                );
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                E.phase >= E.CB && I === -1
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", {
                          className: "text-4xl text-green-400 font-bold mb-6",
                          children: "¡Muy bien! ✓",
                        }),
                        v.jsx("button", {
                          onClick: () => wm(d),
                          className:
                            "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => {
                            V({ ...E, phase: 0, done: [] });
                            Z(new Array(E.parts[0].len).fill(""));
                            J(E.parts[0].len - 1);
                          },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Volver a Intentar",
                        }),
                      ],
                    })
                  : v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-4 text-blue-200",
                          children: E.phase >= E.CB ? [
                            "Suma final: columna ",
                            E.RF - I,
                            " de ",
                            E.RF
                          ] : [
                            "Parcial ",
                            E.phase + 1,
                            " de ",
                            E.CB,
                            " (dígito: ",
                            E.parts[E.phase].bDigit,
                            "): columna ",
                            E.parts[E.phase].len - I,
                            " de ",
                            E.parts[E.phase].len,
                          ],
                        }),
                        v.jsx("div", {
                          className:
                            "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx(
                              "button",
                              {
                                onClick: () => hm(String(f)),
                                className:
                                  "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                                children: f,
                              },
                              f,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", {
                              onClick: () => wm(d),
                              className:
                                "flex-1 bg-green-600 py-3 rounded-xl font-bold",
                              children: "Nuevo",
                            }),
                            v.jsx("button", {
                              onClick: () => {
                                if (E.phase >= E.CB) {
                                  Z(new Array(E.RF).fill(""));
                                  J(E.RF - 1);
                                } else {
                                  Z(new Array(E.parts[E.phase].len).fill(""));
                                  J(E.parts[E.phase].len - 1);
                                }
                              },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "expr" &&
        G &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("expr"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-8 rounded-2xl",
              children: [
                v.jsx("h3", {
                  className: "text-center text-xl font-bold mb-6",
                  children: d == null ? void 0 : d.title,
                }),
                v.jsx("div", {
                  className: "bg-black/30 p-6 rounded-xl mb-6 text-center",
                  children: v.jsx("div", {
                    className: "text-3xl font-mono",
                    children: G.expr,
                  }),
                }),
                G.steps &&
                  v.jsx("div", {
                    className: "mb-4 text-sm text-blue-200",
                    children: G.steps.join(" | "),
                  }),
                v.jsx("input", {
                  type: "number",
                  value: Q,
                  onChange: (f) => ge(f.target.value),
                  placeholder: "Respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (parseInt(Q) === G.answer
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      parseInt(Q) === G.answer
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                v.jsx("button", {
                  onClick: Me,
                  className:
                    "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                  children: "Verificar",
                }),
                v.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    v.jsx("button", {
                      onClick: () => Qe(d),
                      className: "flex-1 bg-blue-600 py-3 rounded-xl font-bold",
                      children: "Nuevo",
                    }),
                    v.jsx("button", {
                      onClick: () => ge(""),
                      className: "flex-1 bg-yellow-600 py-3 rounded-xl",
                      children: "Reintentar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      C === "probi" &&
        E &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", { onClick: () => P("probs"), className: "mb-4 text-blue-300", children: "Salir" }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsxs("div", {
                  className: "bg-yellow-600/20 border border-yellow-500 p-4 rounded-xl mb-6",
                  children: [
                    v.jsx("div", { className: "text-sm text-yellow-200 mb-2", children: "PROBLEMA:" }),
                    v.jsx("div", { className: "text-lg", children: E._pTexto }),
                  ],
                }),
                E._probi === "suma" && v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      ...E.dNums.map((row, ri) =>
                        v.jsx("div", {
                          className: "flex justify-end",
                          children: (() => {
                            const cells = [];
                            cells.push(v.jsx("div", { className: "w-10 text-center", children: ri === E.N - 1 ? "+" : " " }, "s" + ri));
                            row.forEach((x, ci) => cells.push(v.jsx("div", { className: "w-10 text-center", children: x === 0 && ci < row.length - 1 && row.slice(0, ci + 1).every(d => d === 0) ? " " : x }, ri + "c" + ci)));
                            return cells;
                          })(),
                        }, "row" + ri),
                      ),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex justify-end",
                        children: (() => {
                          const cells = [v.jsx("div", { className: "w-10", children: " " }, "rs")];
                          for (let i = 0; i < E.W; i++) {
                            const col = q[i] ? parseInt(q[i]) === E.dAnswer[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded"
                              : i === I ? "bg-yellow-500/50 rounded" : "";
                            cells.push(v.jsx("div", { className: "w-10 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "r" + i));
                          }
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                E._probi === "mult" && E._isMultM && v.jsxs("div", {
                  children: [
                    v.jsx("div", {
                      className: "flex justify-center mb-8",
                      children: v.jsxs("div", {
                        className: "font-mono text-3xl inline-block",
                        children: [
                          v.jsx("div", { className: "flex justify-end", children: E.dA.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, i)) }),
                          v.jsxs("div", { className: "flex justify-end", children: [v.jsx("div", { className: "w-10 text-center", children: "×" }), ...E.dB.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, "b" + i))] }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                          ...E.parts.map((p, pi) => {
                            const isDone = pi < E.done.length, isCur = E.phase === pi;
                            const digitCells = p.digits.map((x, di) => {
                              const col = isDone ? "text-green-300" : isCur ? (q[di] ? parseInt(q[di]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : di === I ? "bg-yellow-500/50 rounded" : "") : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: isDone ? x : isCur ? (q[di] || (di === I ? "?" : "_")) : "_" }, pi + "d" + di);
                            });
                            const trailCells = Array.from({ length: p.shift }, (_, ti) =>
                              v.jsx("div", { className: "w-10 text-center text-blue-300/50", children: "0" }, pi + "t" + ti)
                            );
                            return v.jsx("div", {
                              className: "flex justify-end",
                              children: [...digitCells, ...trailCells],
                            }, "p" + pi);
                          }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1 mt-1" }),
                          E.phase >= E.CB && v.jsx("div", {
                            className: "flex justify-end",
                            children: E.dR.map((x, i) => {
                              const col = (E.phase >= E.CB && I !== -1) ? (q[i] ? parseInt(q[i]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "") : I === -1 ? "text-green-300" : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: I === -1 ? x : (q[i] || (i === I ? "?" : "_")) }, "f" + i);
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                E._probi === "mult" && E._isMult1 && v.jsxs("div", {
                  children: [
                    v.jsx("div", {
                      className: "flex justify-center mb-8",
                      children: v.jsxs("div", {
                        className: "font-mono text-3xl inline-block",
                        children: [
                          v.jsx("div", { className: "flex justify-end", children: E.dA.map((x, i) => v.jsx("div", { className: "w-10 text-center", children: x }, i)) }),
                          v.jsxs("div", { className: "flex justify-end", children: [v.jsx("div", { className: "w-10 text-center", children: "×" }), v.jsx("div", { className: "w-10 text-center", children: E.b })] }),
                          v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                          v.jsx("div", {
                            className: "flex justify-end",
                            children: E.dR.map((x, i) => {
                              const col = q[i] ? parseInt(q[i]) === x ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "";
                              return v.jsx("div", { className: "w-10 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "r" + i);
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                E._probi === "div" && v.jsx("div", {
                  className: "flex justify-center mb-8",
                  children: v.jsxs("div", {
                    className: "font-mono text-3xl inline-block",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end mb-1",
                        children: (() => {
                          const cells = [];
                          for (let i = 0; i < E.SLen + 1; i++) cells.push(v.jsx("div", { className: "w-12 text-center", children: " " }, "qs" + i));
                          for (let i = 0; i < E.QLen; i++) {
                            const col = q[i] ? parseInt(q[i]) === E.dQuotient[i] ? "bg-green-500/50 rounded" : "bg-red-500/50 rounded" : i === I ? "bg-yellow-500/50 rounded" : "";
                            cells.push(v.jsx("div", { className: "w-12 text-center " + col, children: q[i] || (i === I ? "?" : "_") }, "qq" + i));
                          }
                          return cells;
                        })(),
                      }),
                      v.jsx("div", { className: "border-b-4 border-white mb-1" }),
                      v.jsx("div", {
                        className: "flex items-center",
                        children: (() => {
                          const cells = [];
                          E.dDivisor.forEach((x, i) => cells.push(v.jsx("div", { className: "w-12 text-center", children: x }, "ds" + i)));
                          cells.push(v.jsx("div", { className: "w-12 text-center text-2xl", children: "│" }, "bar"));
                          E.dDividend.forEach((x, i) => cells.push(v.jsx("div", { className: "w-12 text-center", children: x }, "dd" + i)));
                          return cells;
                        })(),
                      }),
                    ],
                  }),
                }),
                I === -1 && (E._probi === "suma" || E._probi === "div" || (E._probi === "mult" && E._isMult1) || (E._probi === "mult" && E._isMultM && E.phase >= E.CB))
                  ? v.jsxs("div", {
                      className: "text-center",
                      children: [
                        v.jsx("div", { className: "text-4xl text-green-400 font-bold mb-6", children: "¡Muy bien! ✓" }),
                        v.jsx("button", {
                          onClick: () => wpi(d),
                          className: "w-full bg-green-600 py-4 rounded-xl font-bold mb-3",
                          children: "Nuevo Problema",
                        }),
                        v.jsx("button", {
                          onClick: () => { const nE = E._probi === "mult" && E._isMultM ? { ...E, phase: 0, done: [] } : E; V(nE); const len = E._probi === "suma" ? E.W : E._probi === "div" ? E.QLen : E._isMult1 ? E.R : E.parts[0].len; Z(new Array(len).fill("")); J(E._probi === "div" ? 0 : len - 1); },
                          className: "w-full bg-blue-600 py-3 rounded-xl",
                          children: "Reintentar",
                        }),
                      ],
                    })
                  : I !== -1 && v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "text-center mb-4 text-blue-200",
                          children: E._probi === "div"
                            ? ["Dígito ", I + 1, " de ", E.QLen, " del cociente"]
                            : E._probi === "mult" && E._isMultM
                              ? E.phase < E.CB
                                ? ["Producto parcial ", E.phase + 1, " — Columna ", E.parts[E.phase].len - I, " de ", E.parts[E.phase].len]
                                : ["Suma final — Dígito ", E.RF - I, " de ", E.RF]
                              : ["Dígito (derecha a izquierda)"],
                        }),
                        v.jsx("div", {
                          className: "grid grid-cols-5 gap-2 max-w-xs mx-auto mb-4",
                          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((f) =>
                            v.jsx("button", {
                              onClick: () => hpi(String(f)),
                              className: "bg-white/20 p-4 rounded-xl text-2xl font-bold",
                              children: f,
                            }, f),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 max-w-xs mx-auto",
                          children: [
                            v.jsx("button", { onClick: () => wpi(d), className: "flex-1 bg-green-600 py-3 rounded-xl font-bold", children: "Nuevo" }),
                            v.jsx("button", {
                              onClick: () => { const nE = E._probi === "mult" && E._isMultM ? { ...E, phase: 0, done: [] } : E; V(nE); const len = E._probi === "suma" ? E.W : E._probi === "div" ? E.QLen : E._isMult1 ? E.R : E.parts[0].len; Z(new Array(len).fill("")); J(E._probi === "div" ? 0 : len - 1); },
                              className: "flex-1 bg-blue-600 py-3 rounded-xl",
                              children: "Reintentar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      C === "prob" &&
        Ce &&
        v.jsxs("main", {
          className: "max-w-2xl mx-auto p-6",
          children: [
            v.jsx("button", {
              onClick: () => P("probs"),
              className: "mb-4 text-blue-300",
              children: "Salir",
            }),
            v.jsxs("div", {
              className: "bg-white/10 p-6 rounded-2xl",
              children: [
                v.jsx("div", {
                  className: "text-3xl mb-4",
                  children: d == null ? void 0 : d.icon,
                }),
                v.jsxs("div", {
                  className:
                    "bg-yellow-600/20 border border-yellow-500 p-4 rounded-xl mb-6",
                  children: [
                    v.jsx("div", {
                      className: "text-sm text-yellow-200 mb-2",
                      children: "PROBLEMA:",
                    }),
                    v.jsx("div", { className: "text-lg", children: Ce.texto }),
                  ],
                }),
                v.jsx("input", {
                  type: "number",
                  value: Q,
                  onChange: (f) => ge(f.target.value),
                  placeholder: "Tu respuesta",
                  className:
                    "w-full p-4 text-center text-xl bg-white/20 rounded-xl mb-4",
                }),
                Q !== "" &&
                  v.jsx("div", {
                    className:
                      "text-center text-xl font-bold mb-3 " +
                      (parseInt(Q) === Ce.respuesta
                        ? "text-green-400"
                        : "text-red-400"),
                    children:
                      parseInt(Q) === Ce.respuesta
                        ? "¡Correcto! ✓"
                        : "Incorrecto ✗",
                  }),
                v.jsx("button", {
                  onClick: Ke,
                  className: "w-full bg-green-600 py-4 rounded-xl font-bold",
                  children: "Verificar",
                }),
                v.jsxs("div", {
                  className: "flex gap-3 mt-2",
                  children: [
                    v.jsx("button", {
                      onClick: () => tt(d),
                      className: "flex-1 bg-blue-600 py-3 rounded-xl font-bold",
                      children: "Nuevo Problema",
                    }),
                    v.jsx("button", {
                      onClick: () => ge(""),
                      className: "flex-1 bg-yellow-600 py-3 rounded-xl",
                      children: "Reintentar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      K &&
        v.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
          children: v.jsxs("div", {
            className:
              "bg-gray-900 rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col",
            children: [
              v.jsxs("div", {
                className: "p-4 border-b border-white/20 flex justify-between",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx(Kf, { className: "w-6 h-6 text-yellow-400" }),
                      v.jsx("span", {
                        className: "font-bold",
                        children: "AI Tutor",
                      }),
                    ],
                  }),
                  v.jsx("button", {
                    onClick: () => be(!1),
                    children: v.jsx(Gf, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              v.jsx("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3",
                children: He.map((f, S) =>
                  v.jsx(
                    "div",
                    {
                      className:
                        "p-3 rounded-lg " +
                        (f.role === "user"
                          ? "bg-blue-600 ml-8"
                          : "bg-white/10 mr-8"),
                      children: f.text,
                    },
                    S,
                  ),
                ),
              }),
              v.jsxs("div", {
                className: "p-4 border-t border-white/20 flex gap-2",
                children: [
                  v.jsx("input", {
                    value: fe,
                    onChange: (f) => Ie(f.target.value),
                    onKeyDown: (f) => f.key === "Enter" && Ye(),
                    placeholder: "Pregunta...",
                    className:
                      "flex-1 bg-white/10 rounded-lg px-4 py-2 outline-none",
                  }),
                  v.jsx("button", {
                    onClick: Ye,
                    className: "bg-blue-600 p-2 rounded-lg",
                    children: v.jsx(Xf, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
$f.createRoot(document.getElementById("root")).render(
  v.jsx(ye.StrictMode, { children: v.jsx(bf, {}) }),
);
