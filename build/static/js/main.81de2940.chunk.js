(this.webpackJsonpkairos = this.webpackJsonpkairos || []).push([
  [0],
  {
    19: function(e) {
      e.exports = JSON.parse(
        '{"cities":[{"name":"London","lat":51.509865,"lng":-0.118092},{"name":"Paris","lat":48.85341,"lng":2.3488},{"name":"New-York","lat":40.73061,"lng":-73.935242},{"name":"Singapore","lat":1.29027,"lng":103.851959},{"name":"Sydney","lat":-33.865143,"lng":151.2099}]}'
      );
    },
    22: function(e, t, a) {
      e.exports = a(32);
    },
    27: function(e, t, a) {},
    32: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(6),
        o = a.n(c),
        l = (a(27), a(2)),
        s = a(7),
        i = a(8),
        u = a(11),
        p = a(9),
        m = a(12),
        f = a(1),
        b = a(10),
        O = a(5),
        h = a.n(O),
        d = function(e) {
          return { type: "FORECAST_IS_LOADING", payload: e };
        },
        y = {
          loadForecast: function(e, t) {
            return function(a) {
              var n = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"
                .concat("c4692383bc048da19f7aefdf355f6bbf", "/")
                .concat(e, ",")
                .concat(t);
              return (
                a(d(!0)),
                fetch(n)
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return (
                      a(d(!1)),
                      a(
                        (function(e) {
                          return { type: "FORECAST_IS_SUCCEEDED", payload: e };
                        })(e)
                      )
                    );
                  })
                  .catch(function(e) {
                    return a({ type: "ERROR_HAS_OCCURRED", payload: !0 });
                  })
              );
            };
          }
        },
        E = function() {
          return r.a.createElement(
            "footer",
            null,
            r.a.createElement(
              "div",
              { className: "footer__inner-block" },
              r.a.createElement("h4", null, "Alexandre gadaix"),
              r.a.createElement("small", null, "2019")
            )
          );
        },
        v = function() {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "header",
              null,
              r.a.createElement("div", { className: "logo-wrapper" })
            )
          );
        },
        g = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).change = function(e) {
                var t = e.target.value,
                  n = a.props,
                  r = n.cities,
                  c = n.handleChange,
                  o = n.reboot;
                r.forEach(function(e) {
                  "default" === t && o(),
                    e.name === t && c(e.lat, e.lng, e.name);
                }),
                  a.setState({ value: t });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.cities;
                  return r.a.createElement(
                    "select",
                    { className: "select-component", onChange: this.change },
                    r.a.createElement(
                      "option",
                      { value: "default", defaultValue: !0 },
                      "choose a city"
                    ),
                    e.map(function(e) {
                      return r.a.createElement(
                        "option",
                        {
                          value: e.name,
                          key: e.name,
                          className: "option-item"
                        },
                        e.name
                      );
                    })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      g.defaultProps = { handleChange: function() {}, reboot: function() {} };
      var j = g,
        w = function(e) {
          var t = e.weather,
            a = e.location,
            n = function(e) {
              return "".concat(100 * e, "%");
            },
            c = h()(
              Object(l.a)({ "weather-widget__wrapper": !0 }, "".concat(a), !0)
            ),
            o = h()(Object(l.a)({ icon__wrapper: !0 }, "".concat(t.icon), !0)),
            s = (function(e) {
              var t = (5 * (e - 32)) / 9;
              return parseInt(t);
            })(t.temperature),
            i = n(t.humidity),
            u = n(t.cloudCover),
            p = new Date(1e3 * t.time).toDateString().split(" ");
          return r.a.createElement(
            "article",
            { className: c },
            r.a.createElement(
              "article",
              { className: "block-content" },
              r.a.createElement("h3", null, a),
              r.a.createElement("h4", null, p[0], " ", p[1], " ", p[2]),
              r.a.createElement("div", { className: o }),
              r.a.createElement("p", null, t.summary)
            ),
            r.a.createElement(
              "article",
              { className: "block-content" },
              r.a.createElement(
                "p",
                { className: "temperature" },
                parseInt(s),
                " ",
                r.a.createElement("sup", null, "\u2103")
              ),
              r.a.createElement(
                "p",
                { className: "humidity" },
                r.a.createElement("span", null, "humidity: "),
                parseInt(i),
                "%"
              ),
              r.a.createElement(
                "p",
                { className: "cloudCover" },
                r.a.createElement("span", null, "cloud cover: "),
                parseInt(u),
                "%"
              )
            )
          );
        };
      w.defaultProps = { weather: {}, location: "" };
      var _ = w,
        S = function() {
          return r.a.createElement(
            "div",
            { className: "spinner" },
            r.a.createElement(
              "div",
              { className: "pulse-container" },
              r.a.createElement("div", {
                className: "pulse-bubble pulse-bubble-1"
              }),
              r.a.createElement("div", {
                className: "pulse-bubble pulse-bubble-2"
              }),
              r.a.createElement("div", {
                className: "pulse-bubble pulse-bubble-3"
              })
            )
          );
        },
        P = a(19);
      function N(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var C = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { displayForecast: !1 }),
              (a.handleChange = function(e, t, n) {
                var r = a.props.actions;
                a.setState({ isLoading: !0 }),
                  r.loadForecast(e, t).then(function() {
                    a.setState({
                      displayForecast: !0,
                      isLoading: !1,
                      locationWeather: n.toLowerCase()
                    });
                  });
              }),
              (a.reset = function() {
                a.setState({ displayForecast: !1 });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.displayForecast,
                    a = e.isLoading,
                    n = e.locationWeather,
                    c = this.props.forecast.currently,
                    o = P.cities,
                    l = h()({ AppWeather: !0 });
                  return r.a.createElement(
                    "div",
                    { className: l },
                    r.a.createElement(v, null),
                    r.a.createElement(
                      "main",
                      null,
                      r.a.createElement(
                        "section",
                        { className: "select-city__wrapper" },
                        r.a.createElement("h2", null, "Get current weather"),
                        r.a.createElement(j, {
                          cities: o,
                          handleChange: this.handleChange,
                          reboot: this.reset
                        })
                      ),
                      r.a.createElement(
                        "section",
                        { className: "weather-response__wrapper" },
                        r.a.createElement(
                          "div",
                          { className: "weather-infos__wrapper" },
                          a
                            ? r.a.createElement(S, null)
                            : t &&
                                r.a.createElement(_, {
                                  weather: c,
                                  location: n
                                })
                        )
                      )
                    ),
                    r.a.createElement(E, null)
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        D = Object(b.b)(
          function(e) {
            return (function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? N(a, !0).forEach(function(t) {
                      Object(l.a)(e, t, a[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(a)
                    )
                  : N(a).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(a, t)
                      );
                    });
              }
              return e;
            })({}, e);
          },
          function(e) {
            return { actions: Object(f.b)(y, e) };
          }
        )(C),
        k = a(20),
        R = a(21),
        I = a.n(R);
      function A(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(a, !0).forEach(function(t) {
                Object(l.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : A(a).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var L = {};
      function T(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(a, !0).forEach(function(t) {
                Object(l.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : T(a).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var x = Object(f.c)({
          error: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ERROR_HAS_OCCURRED":
                return U({}, e, { error: t.payload });
              default:
                return e;
            }
          },
          forecast: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : L,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "FORECAST_IS_LOADING":
                return F({}, e, { forecastIsLoading: t.payload });
              case "FORECAST_IS_SUCCEEDED":
                return F({}, e, {}, t.payload);
              default:
                return e;
            }
          }
        }),
        G = [k.a],
        J = f.d;
      (J = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || f.d), G.push(I.a);
      var W = Object(f.e)(x, J(f.a.apply(void 0, G)));
      o.a.render(
        r.a.createElement(b.a, { store: W }, r.a.createElement(D, null)),
        document.getElementById("root")
      );
    }
  },
  [[22, 1, 2]]
]);
//# sourceMappingURL=main.81de2940.chunk.js.map
