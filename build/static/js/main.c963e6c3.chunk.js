(this.webpackJsonpalpha = this.webpackJsonpalpha || []).push([
  [0],
  {
    11: function(e, t, n) {
      e.exports = n(17);
    },
    16: function(e, t, n) {},
    17: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(3),
        o = n.n(l),
        s = (n(16), n(4)),
        i = n(8),
        c = n(1),
        u = n.n(c),
        m = function() {
          return r.a.createElement(
            "header",
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement("h2", null, "\u0391"),
              r.a.createElement(
                "a",
                {
                  href:
                    "https://www.linkedin.com/in/alexandre-gadaix-a7792947/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "logo__wrapper"
                },
                r.a.createElement("span", {
                  className: "logo__symbol logo__symbol--a"
                }),
                r.a.createElement("span", {
                  className: "logo__symbol logo__symbol--g"
                })
              )
            )
          );
        },
        p = function() {
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
        d = n(5),
        h = n(6),
        v = n(9),
        f = n(7),
        g = n(10),
        y = (function(e) {
          function t() {
            var e, n;
            Object(d.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = { text: "", currentItemIndex: 0, displayCursor: !1 }),
              n
            );
          }
          return (
            Object(g.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.typeText(this.state.currentItemIndex);
                }
              },
              {
                key: "typeText",
                value: function(e) {
                  var t = this,
                    n = this.props.options;
                  this.setState({ currentItemIndex: e }, function() {
                    t.showText(n[e]);
                  });
                }
              },
              {
                key: "showText",
                value: function(e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 200,
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 2500,
                    r = this.props,
                    l = r.loop,
                    o = r.options,
                    s = r.triggerEnd,
                    i = this.state.currentItemIndex,
                    c = 0;
                  this.timer = setInterval(function() {
                    t.setState({ text: e.substr(0, c) }, function() {
                      if (c === e.length) {
                        if (!l && i + 1 === o.length)
                          return (
                            t.setState({ displayCursor: !0 }),
                            s(),
                            clearInterval(t.timer),
                            !1
                          );
                        clearInterval(t.timer),
                          setTimeout(function() {
                            return t.hideText(e);
                          }, a);
                      }
                      c++;
                    });
                  }, n);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  clearInterval(this.timer);
                }
              },
              {
                key: "hideText",
                value: function(e) {
                  var t = this,
                    n = this.props,
                    a = n.options,
                    r = n.loop,
                    l = e.length;
                  this.timer = setInterval(function() {
                    t.setState({ text: e.substr(0, l) }, function() {
                      if (0 === l) {
                        clearInterval(t.timer);
                        var e = t.state.currentItemIndex + 1;
                        e === a.length && r && (e = 0),
                          setTimeout(function() {
                            return t.typeText(e);
                          }, 1e3);
                      }
                      l--;
                    });
                  }, 100);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.displayCursor,
                    t = u()({ typewriter__cursor: !0, hidden: e });
                  return r.a.createElement(
                    "div",
                    { className: "typewriter" },
                    r.a.createElement(
                      "div",
                      { className: "typewriter__type" },
                      this.state.text
                    ),
                    r.a.createElement("div", { className: t })
                  );
                }
              }
            ]),
            t
          );
        })(a.Component);
      y.defaultProps = { loop: !1, triggerEnd: function() {} };
      var E = y,
        x = r.a.createContext(null),
        _ = [
          "Hello my name's Alexandre, I'm front-end developer",
          "and I love croissants...",
          "how can I help you?"
        ];
      var b = function() {
        var e = Object(a.useState)(!1),
          t = Object(i.a)(e, 2),
          n = t[0],
          l = t[1],
          o = r.a.useContext(x),
          c = u()(Object(s.a)({ App: !0 }, "".concat(o), !0));
        return r.a.createElement(
          "div",
          { className: c },
          r.a.createElement(m, null),
          r.a.createElement(
            "main",
            null,
            r.a.createElement(
              "div",
              { className: "typewriper__wrapper" },
              r.a.createElement(E, {
                options: _,
                triggerEnd: function() {
                  console.log("call displayResume"), l(!0);
                }
              })
            ),
            n &&
              r.a.createElement(
                "div",
                { className: "resume__wrapper--link" },
                r.a.createElement(
                  "a",
                  {
                    href:
                      "/assets/pdf/resume-alexandre-gadaix-october-2019.pdf",
                    target: "_blank"
                  },
                  "resume"
                )
              )
          ),
          r.a.createElement(p, null)
        );
      };
      o.a.render(
        r.a.createElement(
          x.Provider,
          { value: "theme-light" },
          r.a.createElement(b, null)
        ),
        document.getElementById("root")
      );
    }
  },
  [[11, 1, 2]]
]);
//# sourceMappingURL=main.c963e6c3.chunk.js.map
