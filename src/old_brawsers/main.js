"use strict";

!function () {
  var t = {
      562: function () {
        const t = [{
          name: "мечник",
          health: 10
        }, {
          name: "маг",
          health: 100
        }, {
          name: "лучник",
          health: 80
        }];
        try {
          t && t.length > 0 && (t.sort((t, e) => t.health > e.health ? 1 : t.health < e.health ? -1 : 0), console.log(t));
        } catch (t) {
          console.log(t.message);
        }
      }
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = e[o] = {
      exports: {}
    };
    return t[o](a, a.exports, n), a.exports;
  }
  n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, {
      a: e
    }), e;
  }, n.d = function (t, e) {
    for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
      enumerable: !0,
      get: e[o]
    });
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, function () {
    "use strict";

    n(562);
  }();
}();