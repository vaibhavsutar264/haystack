import ScrollMagic from "scrollmagic";

if (process.browser) {
   const stickyVideoModule = document.querySelector(".sticky-video-module");
   const boxed = stickyVideoModule.querySelector(".boxed");
   const videoWrapper = stickyVideoModule.querySelector(".video");
   const video = stickyVideoModule.querySelector("video");

   const controller = new ScrollMagic.Controller();

   const scene = new ScrollMagic.Scene({
      duration: 1500,
      triggerElement: videoWrapper,
      triggerHook: 0,
   })
      .addIndicators({ name: "init" })
      .setPin(videoWrapper)
      .addTo(controller);

   scene.on("update", (e) => {
      scrollPos = e.scrollPos / 1000;
   });

   scene.on("enter", () => {
      boxed.style.width = `${window.innerWidth}px`;
      boxed.style.paddingTop = "100px";
   });

   scene.on("end", (e) => {
      if ("FORWARD" === e.scrollDirection) {
         boxed.style.width = "100vw";
      }
   });

   // Scale Scene
   const scale_tween = gsap.timeline();
   scale_tween.from(video, {
      transform: " scale(1)",
      opacity: 1,
      duration: 0,
   });
   scale_tween.to(video, {
      transform: " scale(1.5)",
      opacity: 1,
      duration: 1,
   });
   const scene1 = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: videoWrapper,
      triggerHook: 0,
   })
      .addIndicators({ name: "scene1" })
      .setTween(scale_tween)
      .addTo(controller);

   // scroll magic js

   /*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
   !(function (e, t) {
      "function" == typeof define && define.amd
         ? define(t)
         : "object" == typeof exports
         ? (module.exports = t())
         : (e.ScrollMagic = t());
   })(this, function () {
      "use strict";
      function _() {}
      (_.version = "2.0.8"),
         "undefined" != typeof window &&
            window.addEventListener("mousewheel", void 0);
      var P = "data-scrollmagic-pin-spacer";
      _.Controller = function (e) {
         function t() {
            var e, t, n;
            v &&
               u &&
               ((e = R.type.Array(u) ? u : f.slice(0)),
               (u = !1),
               (t = d),
               0 != (n = (d = l.scrollPos()) - t) &&
                  (h = 0 < n ? "FORWARD" : i),
               h === i && e.reverse(),
               e.forEach(function (e, t) {
                  e.update(!0);
               }));
         }
         function r() {
            n = R.rAF(t);
         }
         var n,
            o,
            i = "REVERSE",
            s = "PAUSED",
            a = z.defaults,
            l = this,
            c = R.extend({}, a, e),
            f = [],
            u = !1,
            d = 0,
            h = s,
            p = !0,
            g = 0,
            v = !0,
            m = function () {
               0 < c.refreshInterval &&
                  (o = window.setTimeout(E, c.refreshInterval));
            },
            w = function () {
               return c.vertical
                  ? R.get.scrollTop(c.container)
                  : R.get.scrollLeft(c.container);
            },
            y = function () {
               return c.vertical
                  ? R.get.height(c.container)
                  : R.get.width(c.container);
            },
            S = (this._setScrollPos = function (e) {
               c.vertical
                  ? p
                     ? window.scrollTo(R.get.scrollLeft(), e)
                     : (c.container.scrollTop = e)
                  : p
                  ? window.scrollTo(e, R.get.scrollTop())
                  : (c.container.scrollLeft = e);
            }),
            b = function (e) {
               "resize" == e.type && ((g = y()), (h = s)),
                  !0 !== u && ((u = !0), r());
            },
            E = function () {
               if (!p && g != y()) {
                  var t;
                  try {
                     t = new Event("resize", { bubbles: !1, cancelable: !1 });
                  } catch (e) {
                     (t = document.createEvent("Event")).initEvent(
                        "resize",
                        !1,
                        !1
                     );
                  }
                  c.container.dispatchEvent(t);
               }
               f.forEach(function (e, t) {
                  e.refresh();
               }),
                  m();
            };
         this._options = c;
         function x(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return (
               t.sort(function (e, t) {
                  return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
               }),
               t
            );
         }
         return (
            (this.addScene = function (e) {
               if (R.type.Array(e))
                  e.forEach(function (e, t) {
                     l.addScene(e);
                  });
               else if (e instanceof _.Scene)
                  if (e.controller() !== l) e.addTo(l);
                  else if (!~f.indexOf(e))
                     for (var t in (f.push(e),
                     (f = x(f)),
                     e.on("shift.controller_sort", function () {
                        f = x(f);
                     }),
                     c.globalSceneOptions))
                        e[t] && e[t].call(e, c.globalSceneOptions[t]);
               return l;
            }),
            (this.removeScene = function (e) {
               var t;
               return (
                  R.type.Array(e)
                     ? e.forEach(function (e, t) {
                          l.removeScene(e);
                       })
                     : -1 < (t = f.indexOf(e)) &&
                       (e.off("shift.controller_sort"),
                       f.splice(t, 1),
                       e.remove()),
                  l
               );
            }),
            (this.updateScene = function (e, n) {
               return (
                  R.type.Array(e)
                     ? e.forEach(function (e, t) {
                          l.updateScene(e, n);
                       })
                     : n
                     ? e.update(!0)
                     : !0 !== u &&
                       e instanceof _.Scene &&
                       (~(u = u || []).indexOf(e) || u.push(e),
                       (u = x(u)),
                       r()),
                  l
               );
            }),
            (this.update = function (e) {
               return b({ type: "resize" }), e && t(), l;
            }),
            (this.scrollTo = function (e, t) {
               if (R.type.Number(e)) S.call(c.container, e, t);
               else if (e instanceof _.Scene)
                  e.controller() === l && l.scrollTo(e.scrollOffset(), t);
               else if (R.type.Function(e)) S = e;
               else {
                  var n = R.get.elements(e)[0];
                  if (n) {
                     for (; n.parentNode.hasAttribute(P); ) n = n.parentNode;
                     var r = c.vertical ? "top" : "left",
                        o = R.get.offset(c.container),
                        i = R.get.offset(n);
                     p || (o[r] -= l.scrollPos()), l.scrollTo(i[r] - o[r], t);
                  }
               }
               return l;
            }),
            (this.scrollPos = function (e) {
               return arguments.length
                  ? (R.type.Function(e) && (w = e), l)
                  : w.call(l);
            }),
            (this.info = function (e) {
               var t = {
                  size: g,
                  vertical: c.vertical,
                  scrollPos: d,
                  scrollDirection: h,
                  container: c.container,
                  isDocument: p,
               };
               return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
            }),
            (this.loglevel = function (e) {
               return l;
            }),
            (this.enabled = function (e) {
               return arguments.length
                  ? (v != e && ((v = !!e), l.updateScene(f, !0)), l)
                  : v;
            }),
            (this.destroy = function (e) {
               window.clearTimeout(o);
               for (var t = f.length; t--; ) f[t].destroy(e);
               return (
                  c.container.removeEventListener("resize", b),
                  c.container.removeEventListener("scroll", b),
                  R.cAF(n),
                  null
               );
            }),
            (function () {
               for (var e in c) a.hasOwnProperty(e) || delete c[e];
               if (
                  ((c.container = R.get.elements(c.container)[0]), !c.container)
               )
                  throw "ScrollMagic.Controller init failed.";
               (p =
                  c.container === window ||
                  c.container === document.body ||
                  !document.body.contains(c.container)) &&
                  (c.container = window),
                  (g = y()),
                  c.container.addEventListener("resize", b),
                  c.container.addEventListener("scroll", b);
               var t = parseInt(c.refreshInterval, 10);
               (c.refreshInterval = R.type.Number(t) ? t : a.refreshInterval),
                  m();
            })(),
            l
         );
      };
      var z = {
         defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100,
         },
      };
      (_.Controller.addOption = function (e, t) {
         z.defaults[e] = t;
      }),
         (_.Controller.extend = function (e) {
            var t = this;
            (_.Controller = function () {
               return (
                  t.apply(this, arguments),
                  (this.$super = R.extend({}, this)),
                  e.apply(this, arguments) || this
               );
            }),
               R.extend(_.Controller, t),
               (_.Controller.prototype = t.prototype),
               (_.Controller.prototype.constructor = _.Controller);
         }),
         (_.Scene = function (e) {
            var n,
               l,
               c = "BEFORE",
               f = "DURING",
               u = "AFTER",
               r = D.defaults,
               d = this,
               h = R.extend({}, r, e),
               p = c,
               g = 0,
               a = { start: 0, end: 0 },
               v = 0,
               o = !0,
               s = {};
            (this.on = function (e, o) {
               return (
                  R.type.Function(o) &&
                     (e = e.trim().split(" ")).forEach(function (e) {
                        var t = e.split("."),
                           n = t[0],
                           r = t[1];
                        "*" != n &&
                           (s[n] || (s[n] = []),
                           s[n].push({ namespace: r || "", callback: o }));
                     }),
                  d
               );
            }),
               (this.off = function (e, i) {
                  return (
                     e &&
                        (e = e.trim().split(" ")).forEach(function (e, t) {
                           var n = e.split("."),
                              r = n[0],
                              o = n[1] || "";
                           ("*" === r ? Object.keys(s) : [r]).forEach(function (
                              e
                           ) {
                              for (var t = s[e] || [], n = t.length; n--; ) {
                                 var r = t[n];
                                 !r ||
                                    (o !== r.namespace && "*" !== o) ||
                                    (i && i != r.callback) ||
                                    t.splice(n, 1);
                              }
                              t.length || delete s[e];
                           });
                        }),
                     d
                  );
               }),
               (this.trigger = function (e, n) {
                  var t, r, o, i;
                  return (
                     e &&
                        ((t = e.trim().split(".")),
                        (r = t[0]),
                        (o = t[1]),
                        (i = s[r]) &&
                           i.forEach(function (e, t) {
                              (o && o !== e.namespace) ||
                                 e.callback.call(
                                    d,
                                    new _.Event(r, e.namespace, d, n)
                                 );
                           })),
                     d
                  );
               }),
               d
                  .on("change.internal", function (e) {
                     "loglevel" !== e.what &&
                        "tweenChanges" !== e.what &&
                        ("triggerElement" === e.what
                           ? y()
                           : "reverse" === e.what && d.update());
                  })
                  .on("shift.internal", function (e) {
                     t(), d.update();
                  }),
               (this.addTo = function (e) {
                  return (
                     e instanceof _.Controller &&
                        l != e &&
                        (l && l.removeScene(d),
                        (l = e),
                        E(),
                        i(!0),
                        y(!0),
                        t(),
                        l.info("container").addEventListener("resize", S),
                        e.addScene(d),
                        d.trigger("add", { controller: l }),
                        d.update()),
                     d
                  );
               }),
               (this.enabled = function (e) {
                  return arguments.length
                     ? (o != e && ((o = !!e), d.update(!0)), d)
                     : o;
               }),
               (this.remove = function () {
                  var e;
                  return (
                     l &&
                        (l.info("container").removeEventListener("resize", S),
                        (e = l),
                        (l = void 0),
                        e.removeScene(d),
                        d.trigger("remove")),
                     d
                  );
               }),
               (this.destroy = function (e) {
                  return (
                     d.trigger("destroy", { reset: e }),
                     d.remove(),
                     d.off("*.*"),
                     null
                  );
               }),
               (this.update = function (e) {
                  var t, n;
                  return (
                     l &&
                        (e
                           ? l.enabled() && o
                              ? ((t = l.info("scrollPos")),
                                (n =
                                   0 < h.duration
                                      ? (t - a.start) / (a.end - a.start)
                                      : t >= a.start
                                      ? 1
                                      : 0),
                                d.trigger("update", {
                                   startPos: a.start,
                                   endPos: a.end,
                                   scrollPos: t,
                                }),
                                d.progress(n))
                              : m && p === f && T(!0)
                           : l.updateScene(d, !1)),
                     d
                  );
               }),
               (this.refresh = function () {
                  return i(), y(), d;
               }),
               (this.progress = function (e) {
                  if (arguments.length) {
                     var t,
                        n,
                        r,
                        o = !1,
                        i = p,
                        s = l ? l.info("scrollDirection") : "PAUSED",
                        a = h.reverse || g <= e;
                     return (
                        0 === h.duration
                           ? ((o = g != e),
                             (p = 0 === (g = e < 1 && a ? 0 : 1) ? c : f))
                           : e < 0 && p !== c && a
                           ? ((p = c), (o = !(g = 0)))
                           : 0 <= e && e < 1 && a
                           ? ((g = e), (p = f), (o = !0))
                           : 1 <= e && p !== u
                           ? ((g = 1), (p = u), (o = !0))
                           : p !== f || a || T(),
                        o &&
                           ((t = { progress: g, state: p, scrollDirection: s }),
                           (r = function (e) {
                              d.trigger(e, t);
                           }),
                           (n = p != i) &&
                              i !== f &&
                              (r("enter"), r(i === c ? "start" : "end")),
                           r("progress"),
                           n &&
                              p !== f &&
                              (r(p === c ? "start" : "end"), r("leave"))),
                        d
                     );
                  }
                  return g;
               });
            var m,
               w,
               t = function () {
                  (a = { start: v + h.offset }),
                     l &&
                        h.triggerElement &&
                        (a.start -= l.info("size") * h.triggerHook),
                     (a.end = a.start + h.duration);
               },
               i = function (e) {
                  var t;
                  !n ||
                     (x((t = "duration"), n.call(d)) &&
                        !e &&
                        (d.trigger("change", { what: t, newval: h[t] }),
                        d.trigger("shift", { reason: t })));
               },
               y = function (e) {
                  var t = 0,
                     n = h.triggerElement;
                  if (l && (n || 0 < v)) {
                     if (n)
                        if (n.parentNode) {
                           for (
                              var r = l.info(),
                                 o = R.get.offset(r.container),
                                 i = r.vertical ? "top" : "left";
                              n.parentNode.hasAttribute(P);

                           )
                              n = n.parentNode;
                           var s = R.get.offset(n);
                           r.isDocument || (o[i] -= l.scrollPos()),
                              (t = s[i] - o[i]);
                        } else d.triggerElement(void 0);
                     var a = t != v;
                     (v = t),
                        a &&
                           !e &&
                           d.trigger("shift", {
                              reason: "triggerElementPosition",
                           });
                  }
               },
               S = function (e) {
                  0 < h.triggerHook &&
                     d.trigger("shift", { reason: "containerResize" });
               },
               b = R.extend(D.validate, {
                  duration: function (t) {
                     var e;
                     if (
                        (R.type.String(t) &&
                           t.match(/^(\.|\d)*\d+%$/) &&
                           ((e = parseFloat(t) / 100),
                           (t = function () {
                              return l ? l.info("size") * e : 0;
                           })),
                        R.type.Function(t))
                     ) {
                        n = t;
                        try {
                           t = parseFloat(n.call(d));
                        } catch (e) {
                           t = -1;
                        }
                     }
                     if (((t = parseFloat(t)), !R.type.Number(t) || t < 0))
                        throw ((n = n && void 0), 0);
                     return t;
                  },
               }),
               E = function (e) {
                  (e = arguments.length ? [e] : Object.keys(b)).forEach(
                     function (t, e) {
                        var n;
                        if (b[t])
                           try {
                              n = b[t](h[t]);
                           } catch (e) {
                              n = r[t];
                           } finally {
                              h[t] = n;
                           }
                     }
                  );
               },
               x = function (e, t) {
                  var n = !1,
                     r = h[e];
                  return h[e] != t && ((h[e] = t), E(e), (n = r != h[e])), n;
               },
               z = function (t) {
                  d[t] ||
                     (d[t] = function (e) {
                        return arguments.length
                           ? ("duration" === t && (n = void 0),
                             x(t, e) &&
                                (d.trigger("change", { what: t, newval: h[t] }),
                                ~D.shifts.indexOf(t) &&
                                   d.trigger("shift", { reason: t })),
                             d)
                           : h[t];
                     });
               };
            (this.controller = function () {
               return l;
            }),
               (this.state = function () {
                  return p;
               }),
               (this.scrollOffset = function () {
                  return a.start;
               }),
               (this.triggerPosition = function () {
                  var e = h.offset;
                  return (
                     l &&
                        (h.triggerElement
                           ? (e += v)
                           : (e += l.info("size") * d.triggerHook())),
                     e
                  );
               }),
               d
                  .on("shift.internal", function (e) {
                     var t = "duration" === e.reason;
                     ((p === u && t) || (p === f && 0 === h.duration)) && T(),
                        t && A();
                  })
                  .on("progress.internal", function (e) {
                     T();
                  })
                  .on("add.internal", function (e) {
                     A();
                  })
                  .on("destroy.internal", function (e) {
                     d.removePin(e.reset);
                  });
            function C() {
               l && m && p === f && !l.info("isDocument") && T();
            }
            function F() {
               l &&
                  m &&
                  p === f &&
                  (((w.relSize.width || w.relSize.autoFullWidth) &&
                     R.get.width(window) != R.get.width(w.spacer.parentNode)) ||
                     (w.relSize.height &&
                        R.get.height(window) !=
                           R.get.height(w.spacer.parentNode))) &&
                  A();
            }
            function L(e) {
               l &&
                  m &&
                  p === f &&
                  !l.info("isDocument") &&
                  (e.preventDefault(),
                  l._setScrollPos(
                     l.info("scrollPos") -
                        ((e.wheelDelta ||
                           e[
                              l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"
                           ]) / 3 || 30 * -e.detail)
                  ));
            }
            var T = function (e) {
                  var t, n, r, o, i, s;
                  m &&
                     l &&
                     ((t = l.info()),
                     (n = w.spacer.firstChild),
                     e || p !== f
                        ? ((r = {
                             position: w.inFlow ? "relative" : "absolute",
                             top: 0,
                             left: 0,
                          }),
                          (o = R.css(n, "position") != r.position),
                          w.pushFollowers
                             ? 0 < h.duration &&
                               ((p === u &&
                                  0 ===
                                     parseFloat(
                                        R.css(w.spacer, "padding-top")
                                     )) ||
                                  (p === c &&
                                     0 ===
                                        parseFloat(
                                           R.css(w.spacer, "padding-bottom")
                                        ))) &&
                               (o = !0)
                             : (r[t.vertical ? "top" : "left"] =
                                  h.duration * g),
                          R.css(n, r),
                          o && A())
                        : ("fixed" != R.css(n, "position") &&
                             (R.css(n, { position: "fixed" }), A()),
                          (i = R.get.offset(w.spacer, !0)),
                          (s =
                             h.reverse || 0 === h.duration
                                ? t.scrollPos - a.start
                                : Math.round(g * h.duration * 10) / 10),
                          (i[t.vertical ? "top" : "left"] += s),
                          R.css(w.spacer.firstChild, {
                             top: i.top,
                             left: i.left,
                          })));
               },
               A = function () {
                  var e, t, n, r, o;
                  m &&
                     l &&
                     w.inFlow &&
                     ((e = p === f),
                     (t = l.info("vertical")),
                     (n = w.spacer.firstChild),
                     (r = R.isMarginCollapseType(R.css(w.spacer, "display"))),
                     (o = {}),
                     w.relSize.width || w.relSize.autoFullWidth
                        ? e
                           ? R.css(m, { width: R.get.width(w.spacer) })
                           : R.css(m, { width: "100%" })
                        : ((o["min-width"] = R.get.width(t ? m : n, !0, !0)),
                          (o.width = e ? o["min-width"] : "auto")),
                     w.relSize.height
                        ? e
                           ? R.css(m, {
                                height:
                                   R.get.height(w.spacer) -
                                   (w.pushFollowers ? h.duration : 0),
                             })
                           : R.css(m, { height: "100%" })
                        : ((o["min-height"] = R.get.height(t ? n : m, !0, !r)),
                          (o.height = e ? o["min-height"] : "auto")),
                     w.pushFollowers &&
                        ((o["padding" + (t ? "Top" : "Left")] = h.duration * g),
                        (o["padding" + (t ? "Bottom" : "Right")] =
                           h.duration * (1 - g))),
                     R.css(w.spacer, o));
               };
            (this.setPin = function (e, t) {
               if (
                  ((t = R.extend(
                     {},
                     {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer",
                     },
                     t
                  )),
                  !(e = R.get.elements(e)[0]))
               )
                  return d;
               if ("fixed" === R.css(e, "position")) return d;
               if (m) {
                  if (m === e) return d;
                  d.removePin();
               }
               var n = (m = e).parentNode.style.display,
                  r = [
                     "top",
                     "left",
                     "bottom",
                     "right",
                     "margin",
                     "marginLeft",
                     "marginRight",
                     "marginTop",
                     "marginBottom",
                  ];
               m.parentNode.style.display = "none";
               var o = "absolute" != R.css(m, "position"),
                  i = R.css(m, r.concat(["display"])),
                  s = R.css(m, ["width", "height"]);
               (m.parentNode.style.display = n),
                  !o && t.pushFollowers && (t.pushFollowers = !1);
               var a,
                  l = m.parentNode.insertBefore(
                     document.createElement("div"),
                     m
                  ),
                  c = R.extend(i, {
                     position: o ? "relative" : "absolute",
                     boxSizing: "content-box",
                     mozBoxSizing: "content-box",
                     webkitBoxSizing: "content-box",
                  });
               return (
                  o || R.extend(c, R.css(m, ["width", "height"])),
                  R.css(l, c),
                  l.setAttribute(P, ""),
                  R.addClass(l, t.spacerClass),
                  (w = {
                     spacer: l,
                     relSize: {
                        width: "%" === s.width.slice(-1),
                        height: "%" === s.height.slice(-1),
                        autoFullWidth:
                           "auto" === s.width &&
                           o &&
                           R.isMarginCollapseType(i.display),
                     },
                     pushFollowers: t.pushFollowers,
                     inFlow: o,
                  }),
                  m.___origStyle ||
                     ((m.___origStyle = {}),
                     (a = m.style),
                     r
                        .concat([
                           "width",
                           "height",
                           "position",
                           "boxSizing",
                           "mozBoxSizing",
                           "webkitBoxSizing",
                        ])
                        .forEach(function (e) {
                           m.___origStyle[e] = a[e] || "";
                        })),
                  w.relSize.width && R.css(l, { width: s.width }),
                  w.relSize.height && R.css(l, { height: s.height }),
                  l.appendChild(m),
                  R.css(m, {
                     position: o ? "relative" : "absolute",
                     margin: "auto",
                     top: "auto",
                     left: "auto",
                     bottom: "auto",
                     right: "auto",
                  }),
                  (w.relSize.width || w.relSize.autoFullWidth) &&
                     R.css(m, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box",
                     }),
                  window.addEventListener("scroll", C),
                  window.addEventListener("resize", C),
                  window.addEventListener("resize", F),
                  m.addEventListener("mousewheel", L),
                  m.addEventListener("DOMMouseScroll", L),
                  T(),
                  d
               );
            }),
               (this.removePin = function (e) {
                  var t, n, r;
                  return (
                     m &&
                        (p === f && T(!0),
                        (!e && l) ||
                           ((t = w.spacer.firstChild).hasAttribute(P) &&
                              ((n = w.spacer.style),
                              (r = {}),
                              [
                                 "margin",
                                 "marginLeft",
                                 "marginRight",
                                 "marginTop",
                                 "marginBottom",
                              ].forEach(function (e) {
                                 r[e] = n[e] || "";
                              }),
                              R.css(t, r)),
                           w.spacer.parentNode.insertBefore(t, w.spacer),
                           w.spacer.parentNode.removeChild(w.spacer),
                           m.parentNode.hasAttribute(P) ||
                              (R.css(m, m.___origStyle),
                              delete m.___origStyle)),
                        window.removeEventListener("scroll", C),
                        window.removeEventListener("resize", C),
                        window.removeEventListener("resize", F),
                        m.removeEventListener("mousewheel", L),
                        m.removeEventListener("DOMMouseScroll", L),
                        (m = void 0)),
                     d
                  );
               });
            var N,
               O = [];
            return (
               d.on("destroy.internal", function (e) {
                  d.removeClassToggle(e.reset);
               }),
               (this.setClassToggle = function (e, t) {
                  var n = R.get.elements(e);
                  return (
                     0 !== n.length &&
                        R.type.String(t) &&
                        (0 < O.length && d.removeClassToggle(),
                        (N = t),
                        (O = n),
                        d.on(
                           "enter.internal_class leave.internal_class",
                           function (e) {
                              var n =
                                 "enter" === e.type
                                    ? R.addClass
                                    : R.removeClass;
                              O.forEach(function (e, t) {
                                 n(e, N);
                              });
                           }
                        )),
                     d
                  );
               }),
               (this.removeClassToggle = function (e) {
                  return (
                     e &&
                        O.forEach(function (e, t) {
                           R.removeClass(e, N);
                        }),
                     d.off("start.internal_class end.internal_class"),
                     (N = void 0),
                     (O = []),
                     d
                  );
               }),
               (function () {
                  for (var e in h) r.hasOwnProperty(e) || delete h[e];
                  for (var t in r) z(t);
                  E();
               })(),
               d
            );
         });
      var D = {
         defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: 0.5,
            reverse: !0,
            loglevel: 2,
         },
         validate: {
            offset: function (e) {
               if (((e = parseFloat(e)), !R.type.Number(e))) throw 0;
               return e;
            },
            triggerElement: function (e) {
               if ((e = e || void 0)) {
                  var t = R.get.elements(e)[0];
                  if (!t || !t.parentNode) throw 0;
                  e = t;
               }
               return e;
            },
            triggerHook: function (e) {
               var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
               if (R.type.Number(e))
                  e = Math.max(0, Math.min(parseFloat(e), 1));
               else {
                  if (!(e in t)) throw 0;
                  e = t[e];
               }
               return e;
            },
            reverse: function (e) {
               return !!e;
            },
         },
         shifts: ["duration", "offset", "triggerHook"],
      };
      (_.Scene.addOption = function (e, t, n, r) {
         e in D.defaults ||
            ((D.defaults[e] = t), (D.validate[e] = n), r && D.shifts.push(e));
      }),
         (_.Scene.extend = function (e) {
            var t = this;
            (_.Scene = function () {
               return (
                  t.apply(this, arguments),
                  (this.$super = R.extend({}, this)),
                  e.apply(this, arguments) || this
               );
            }),
               R.extend(_.Scene, t),
               (_.Scene.prototype = t.prototype),
               (_.Scene.prototype.constructor = _.Scene);
         }),
         (_.Event = function (e, t, n, r) {
            for (var o in (r = r || {})) this[o] = r[o];
            return (
               (this.type = e),
               (this.target = this.currentTarget = n),
               (this.namespace = t || ""),
               (this.timeStamp = this.timestamp = Date.now()),
               this
            );
         });
      var R = (_._util = (function (s) {
         function a(e) {
            return parseFloat(e) || 0;
         }
         function l(e) {
            return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
         }
         function r(e, t, n, r) {
            if ((t = t === document ? s : t) === s) r = !1;
            else if (!u.DomElement(t)) return 0;
            e = e[0].toUpperCase() + e.substr(1).toLowerCase();
            var o,
               i =
                  (n
                     ? t["offset" + e] || t["outer" + e]
                     : t["client" + e] || t["inner" + e]) || 0;
            return (
               n &&
                  r &&
                  ((o = l(t)),
                  (i +=
                     "Height" === e
                        ? a(o.marginTop) + a(o.marginBottom)
                        : a(o.marginLeft) + a(o.marginRight))),
               i
            );
         }
         function c(e) {
            return e
               .replace(/^[^a-z]+([a-z])/g, "$1")
               .replace(/-([a-z])/g, function (e) {
                  return e[1].toUpperCase();
               });
         }
         var e = {};
         (e.extend = function (e) {
            for (e = e || {}, f = 1; f < arguments.length; f++)
               if (arguments[f])
                  for (var t in arguments[f])
                     arguments[f].hasOwnProperty(t) && (e[t] = arguments[f][t]);
            return e;
         }),
            (e.isMarginCollapseType = function (e) {
               return !!~[
                  "block",
                  "flex",
                  "list-item",
                  "table",
                  "-webkit-box",
               ].indexOf(e);
            });
         for (
            var o = 0,
               t = ["ms", "moz", "webkit", "o"],
               n = s.requestAnimationFrame,
               i = s.cancelAnimationFrame,
               f = 0;
            !n && f < 4;
            ++f
         )
            (n = s[t[f] + "RequestAnimationFrame"]),
               (i =
                  s[t[f] + "CancelAnimationFrame"] ||
                  s[t[f] + "CancelRequestAnimationFrame"]);
         (n =
            n ||
            function (e) {
               var t = new Date().getTime(),
                  n = Math.max(0, 16 - (t - o)),
                  r = s.setTimeout(function () {
                     e(t + n);
                  }, n);
               return (o = t + n), r;
            }),
            (i =
               i ||
               function (e) {
                  s.clearTimeout(e);
               }),
            (e.rAF = n.bind(s)),
            (e.cAF = i.bind(s));
         var u = (e.type = function (e) {
            return Object.prototype.toString
               .call(e)
               .replace(/^\[object (.+)\]$/, "$1")
               .toLowerCase();
         });
         (u.String = function (e) {
            return "string" === u(e);
         }),
            (u.Function = function (e) {
               return "function" === u(e);
            }),
            (u.Array = function (e) {
               return Array.isArray(e);
            }),
            (u.Number = function (e) {
               return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
            }),
            (u.DomElement = function (e) {
               return "object" == typeof HTMLElement ||
                  "function" == typeof HTMLElement
                  ? e instanceof HTMLElement || e instanceof SVGElement
                  : e &&
                       "object" == typeof e &&
                       null !== e &&
                       1 === e.nodeType &&
                       "string" == typeof e.nodeName;
            });
         var d = (e.get = {});
         return (
            (d.elements = function (e) {
               var t = [];
               if (u.String(e))
                  try {
                     e = document.querySelectorAll(e);
                  } catch (e) {
                     return t;
                  }
               if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
                  for (var n = 0, r = (t.length = e.length); n < r; n++) {
                     var o = e[n];
                     t[n] = u.DomElement(o) ? o : d.elements(o);
                  }
               else
                  (!u.DomElement(e) && e !== document && e !== s) || (t = [e]);
               return t;
            }),
            (d.scrollTop = function (e) {
               return e && "number" == typeof e.scrollTop
                  ? e.scrollTop
                  : s.pageYOffset || 0;
            }),
            (d.scrollLeft = function (e) {
               return e && "number" == typeof e.scrollLeft
                  ? e.scrollLeft
                  : s.pageXOffset || 0;
            }),
            (d.width = function (e, t, n) {
               return r("width", e, t, n);
            }),
            (d.height = function (e, t, n) {
               return r("height", e, t, n);
            }),
            (d.offset = function (e, t) {
               var n,
                  r = { top: 0, left: 0 };
               return (
                  e &&
                     e.getBoundingClientRect &&
                     ((n = e.getBoundingClientRect()),
                     (r.top = n.top),
                     (r.left = n.left),
                     t ||
                        ((r.top += d.scrollTop()), (r.left += d.scrollLeft()))),
                  r
               );
            }),
            (e.addClass = function (e, t) {
               t &&
                  (e.classList ? e.classList.add(t) : (e.className += " " + t));
            }),
            (e.removeClass = function (e, t) {
               t &&
                  (e.classList
                     ? e.classList.remove(t)
                     : (e.className = e.className.replace(
                          RegExp(
                             "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                             "gi"
                          ),
                          " "
                       )));
            }),
            (e.css = function (e, t) {
               if (u.String(t)) return l(e)[c(t)];
               if (u.Array(t)) {
                  var n = {},
                     r = l(e);
                  return (
                     t.forEach(function (e, t) {
                        n[e] = r[c(e)];
                     }),
                     n
                  );
               }
               for (var o in t) {
                  var i = t[o];
                  i == parseFloat(i) && (i += "px"), (e.style[c(o)] = i);
               }
            }),
            e
         );
      })(window || {}));
      return _;
   });

   // scroll magic indicators

   /*!
    * ScrollMagic v2.0.8 (2020-08-14)
    * The javascript library for magical scroll interactions.
    * (c) 2020 Jan Paepke (@janpaepke)
    * Project Website: http://scrollmagic.io
    *
    * @version 2.0.8
    * @license Dual licensed under MIT license and GPL.
    * @author Jan Paepke - e-mail@janpaepke.de
    *
    * @file Debug Extension for ScrollMagic.
    */
   /**
    * This plugin was formerly known as the ScrollMagic debug extension.
    *
    * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
    *
    * To have access to this extension, please include `plugins/debug.addIndicators.js`.
    * @mixin debug.addIndicators
    */
   (function (root, factory) {
      if (typeof define === "function" && define.amd) {
         // AMD. Register as an anonymous module.
         define(["ScrollMagic"], factory);
      } else if (typeof exports === "object") {
         // CommonJS
         factory(require("scrollmagic"));
      } else {
         // no browser global export needed, just execute
         factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
      }
   })(this, function (ScrollMagic) {
      "use strict";
      var NAMESPACE = "debug.addIndicators";

      var console = window.console || {},
         err = Function.prototype.bind.call(
            console.error || console.log || function () {},
            console
         );
      if (!ScrollMagic) {
         err(
            "(" +
               NAMESPACE +
               ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
         );
      }

      // plugin settings
      var FONT_SIZE = "0.85em",
         ZINDEX = "9999",
         EDGE_OFFSET = 15; // minimum edge distance, added to indentation

      // overall vars
      var _util = ScrollMagic._util,
         _autoindex = 0;

      ScrollMagic.Scene.extend(function () {
         var Scene = this,
            _indicator;

         var log = function () {
            if (Scene._log) {
               // not available, when main source minified
               Array.prototype.splice.call(
                  arguments,
                  1,
                  0,
                  "(" + NAMESPACE + ")",
                  "->"
               );
               Scene._log.apply(this, arguments);
            }
         };

         /**
		 * Add visual indicators for a ScrollMagic.Scene.  
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // add basic indicators
		 * scene.addIndicators()
		 *
		 * // passing options
		 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
		 *
		 * @param {object} [options] - An object containing one or more options for the indicators.
		 * @param {(string|object)} [options.parent] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
		 														 														 If undefined, the controller's container will be used.
		 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
		 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
		 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
		 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
		 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
		 */
         Scene.addIndicators = function (options) {
            if (!_indicator) {
               var DEFAULT_OPTIONS = {
                  name: "",
                  indent: 0,
                  parent: undefined,
                  colorStart: "green",
                  colorEnd: "red",
                  colorTrigger: "blue",
               };

               options = _util.extend({}, DEFAULT_OPTIONS, options);

               _autoindex++;
               _indicator = new Indicator(Scene, options);

               Scene.on("add.plugin_addIndicators", _indicator.add);
               Scene.on("remove.plugin_addIndicators", _indicator.remove);
               Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

               // it the scene already has a controller we can start right away.
               if (Scene.controller()) {
                  _indicator.add();
               }
            }
            return Scene;
         };

         /**
          * Removes visual indicators from a ScrollMagic.Scene.
          * @memberof! debug.addIndicators#
          *
          * @example
          * // remove previously added indicators
          * scene.removeIndicators()
          *
          */
         Scene.removeIndicators = function () {
            if (_indicator) {
               _indicator.remove();
               this.off("*.plugin_addIndicators");
               _indicator = undefined;
            }
            return Scene;
         };
      });

      /*
       * ----------------------------------------------------------------
       * Extension for controller to store and update related indicators
       * ----------------------------------------------------------------
       */
      // add option to globally auto-add indicators to scenes
      /**
       * Every ScrollMagic.Controller instance now accepts an additional option.
       * See {@link ScrollMagic.Controller} for a complete list of the standard options.
       * @memberof! debug.addIndicators#
       * @method new ScrollMagic.Controller(options)
       * @example
       * // make a controller and add indicators to all scenes attached
       * var controller = new ScrollMagic.Controller({addIndicators: true});
       * // this scene will automatically have indicators added to it
       * new ScrollMagic.Scene()
       *                .addTo(controller);
       *
       * @param {object} [options] - Options for the Controller.
       * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
       */
      ScrollMagic.Controller.addOption("addIndicators", false);
      // extend Controller
      ScrollMagic.Controller.extend(function () {
         var Controller = this,
            _info = Controller.info(),
            _container = _info.container,
            _isDocument = _info.isDocument,
            _vertical = _info.vertical,
            _indicators = {
               // container for all indicators and methods
               groups: [],
            };

         var log = function () {
            if (Controller._log) {
               // not available, when main source minified
               Array.prototype.splice.call(
                  arguments,
                  1,
                  0,
                  "(" + NAMESPACE + ")",
                  "->"
               );
               Controller._log.apply(this, arguments);
            }
         };
         if (Controller._indicators) {
            log(
               2,
               "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."
            );
         }

         // add indicators container
         this._indicators = _indicators;
         /*
			needed updates:
			+++++++++++++++
			start/end position on scene shift (handled in Indicator class)
			trigger parameters on triggerHook value change (handled in Indicator class)
			bounds position on container scroll or resize (to keep alignment to bottom/right)
			trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
		*/

         // event handler for when associated bounds markers need to be repositioned
         var handleBoundsPositionChange = function () {
            _indicators.updateBoundsPositions();
         };

         // event handler for when associated trigger groups need to be repositioned
         var handleTriggerPositionChange = function () {
            _indicators.updateTriggerGroupPositions();
         };

         _container.addEventListener("resize", handleTriggerPositionChange);
         if (!_isDocument) {
            window.addEventListener("resize", handleTriggerPositionChange);
            window.addEventListener("scroll", handleTriggerPositionChange);
         }
         // update all related bounds containers
         _container.addEventListener("resize", handleBoundsPositionChange);
         _container.addEventListener("scroll", handleBoundsPositionChange);

         // updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
         this._indicators.updateBoundsPositions = function (specificIndicator) {
            var // constant for all bounds
               groups = specificIndicator
                  ? [
                       _util.extend({}, specificIndicator.triggerGroup, {
                          members: [specificIndicator],
                       }),
                    ] // create a group with only one element
                  : _indicators.groups, // use all
               g = groups.length,
               css = {},
               paramPos = _vertical ? "left" : "top",
               paramDimension = _vertical ? "width" : "height",
               edge = _vertical
                  ? _util.get.scrollLeft(_container) +
                    _util.get.width(_container) -
                    EDGE_OFFSET
                  : _util.get.scrollTop(_container) +
                    _util.get.height(_container) -
                    EDGE_OFFSET,
               b,
               triggerSize,
               group;
            while (g--) {
               // group loop
               group = groups[g];
               b = group.members.length;
               triggerSize = _util.get[paramDimension](
                  group.element.firstChild
               );
               while (b--) {
                  // indicators loop
                  css[paramPos] = edge - triggerSize;
                  _util.css(group.members[b].bounds, css);
               }
            }
         };

         // updates the positions of all trigger groups attached to a controller or a specific one, if provided
         this._indicators.updateTriggerGroupPositions = function (
            specificGroup
         ) {
            var // constant vars
               groups = specificGroup ? [specificGroup] : _indicators.groups,
               i = groups.length,
               container = _isDocument ? document.body : _container,
               containerOffset = _isDocument
                  ? {
                       top: 0,
                       left: 0,
                    }
                  : _util.get.offset(container, true),
               edge = _vertical
                  ? _util.get.width(_container) - EDGE_OFFSET
                  : _util.get.height(_container) - EDGE_OFFSET,
               paramDimension = _vertical ? "width" : "height",
               paramTransform = _vertical ? "Y" : "X";
            var // changing vars
               group,
               elem,
               pos,
               elemSize,
               transform;
            while (i--) {
               group = groups[i];
               elem = group.element;
               pos = group.triggerHook * Controller.info("size");
               elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
               transform =
                  pos > elemSize
                     ? "translate" + paramTransform + "(-100%)"
                     : "";

               _util.css(elem, {
                  top:
                     containerOffset.top +
                     (_vertical ? pos : edge - group.members[0].options.indent),
                  left:
                     containerOffset.left +
                     (_vertical ? edge - group.members[0].options.indent : pos),
               });
               _util.css(elem.firstChild.firstChild, {
                  "-ms-transform": transform,
                  "-webkit-transform": transform,
                  transform: transform,
               });
            }
         };

         // updates the label for the group to contain the name, if it only has one member
         this._indicators.updateTriggerGroupLabel = function (group) {
            var text =
                  "trigger" +
                  (group.members.length > 1
                     ? ""
                     : " " + group.members[0].options.name),
               elem = group.element.firstChild.firstChild,
               doUpdate = elem.textContent !== text;
            if (doUpdate) {
               elem.textContent = text;
               if (_vertical) {
                  // bounds position is dependent on text length, so update
                  _indicators.updateBoundsPositions();
               }
            }
         };

         // add indicators if global option is set
         this.addScene = function (newScene) {
            if (
               this._options.addIndicators &&
               newScene instanceof ScrollMagic.Scene &&
               newScene.controller() === Controller
            ) {
               newScene.addIndicators();
            }
            // call original destroy method
            this.$super.addScene.apply(this, arguments);
         };

         // remove all previously set listeners on destroy
         this.destroy = function () {
            _container.removeEventListener(
               "resize",
               handleTriggerPositionChange
            );
            if (!_isDocument) {
               window.removeEventListener(
                  "resize",
                  handleTriggerPositionChange
               );
               window.removeEventListener(
                  "scroll",
                  handleTriggerPositionChange
               );
            }
            _container.removeEventListener(
               "resize",
               handleBoundsPositionChange
            );
            _container.removeEventListener(
               "scroll",
               handleBoundsPositionChange
            );
            // call original destroy method
            this.$super.destroy.apply(this, arguments);
         };
         return Controller;
      });

      /*
       * ----------------------------------------------------------------
       * Internal class for the construction of Indicators
       * ----------------------------------------------------------------
       */
      var Indicator = function (Scene, options) {
         var Indicator = this,
            _elemBounds = TPL.bounds(),
            _elemStart = TPL.start(options.colorStart),
            _elemEnd = TPL.end(options.colorEnd),
            _boundsContainer =
               options.parent && _util.get.elements(options.parent)[0],
            _vertical,
            _ctrl;

         var log = function () {
            if (Scene._log) {
               // not available, when main source minified
               Array.prototype.splice.call(
                  arguments,
                  1,
                  0,
                  "(" + NAMESPACE + ")",
                  "->"
               );
               Scene._log.apply(this, arguments);
            }
         };

         options.name = options.name || _autoindex;

         // prepare bounds elements
         _elemStart.firstChild.textContent += " " + options.name;
         _elemEnd.textContent += " " + options.name;
         _elemBounds.appendChild(_elemStart);
         _elemBounds.appendChild(_elemEnd);

         // set public variables
         Indicator.options = options;
         Indicator.bounds = _elemBounds;
         // will be set later
         Indicator.triggerGroup = undefined;

         // add indicators to DOM
         this.add = function () {
            _ctrl = Scene.controller();
            _vertical = _ctrl.info("vertical");

            var isDocument = _ctrl.info("isDocument");

            if (!_boundsContainer) {
               // no parent supplied or doesnt exist
               _boundsContainer = isDocument
                  ? document.body
                  : _ctrl.info("container"); // check if window/document (then use body)
            }
            if (
               !isDocument &&
               _util.css(_boundsContainer, "position") === "static"
            ) {
               // position mode needed for correct positioning of indicators
               _util.css(_boundsContainer, {
                  position: "relative",
               });
            }

            // add listeners for updates
            Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
            Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

            // updates trigger & bounds (will add elements if needed)
            updateTriggerGroup();
            updateBounds();

            setTimeout(function () {
               // do after all execution is finished otherwise sometimes size calculations are off
               _ctrl._indicators.updateBoundsPositions(Indicator);
            }, 0);

            log(3, "added indicators");
         };

         // remove indicators from DOM
         this.remove = function () {
            if (Indicator.triggerGroup) {
               // if not set there's nothing to remove
               Scene.off(
                  "change.plugin_addIndicators",
                  handleTriggerParamsChange
               );
               Scene.off(
                  "shift.plugin_addIndicators",
                  handleBoundsParamsChange
               );

               if (Indicator.triggerGroup.members.length > 1) {
                  // just remove from memberlist of old group
                  var group = Indicator.triggerGroup;
                  group.members.splice(group.members.indexOf(Indicator), 1);
                  _ctrl._indicators.updateTriggerGroupLabel(group);
                  _ctrl._indicators.updateTriggerGroupPositions(group);
                  Indicator.triggerGroup = undefined;
               } else {
                  // remove complete group
                  removeTriggerGroup();
               }
               removeBounds();

               log(3, "removed indicators");
            }
         };

         /*
          * ----------------------------------------------------------------
          * internal Event Handlers
          * ----------------------------------------------------------------
          */

         // event handler for when bounds params change
         var handleBoundsParamsChange = function () {
            updateBounds();
         };

         // event handler for when trigger params change
         var handleTriggerParamsChange = function (e) {
            if (e.what === "triggerHook") {
               updateTriggerGroup();
            }
         };

         /*
          * ----------------------------------------------------------------
          * Bounds (start / stop) management
          * ----------------------------------------------------------------
          */

         // adds an new bounds elements to the array and to the DOM
         var addBounds = function () {
            var v = _ctrl.info("vertical");
            // apply stuff we didn't know before...
            _util.css(_elemStart.firstChild, {
               "border-bottom-width": v ? 1 : 0,
               "border-right-width": v ? 0 : 1,
               bottom: v ? -1 : options.indent,
               right: v ? options.indent : -1,
               padding: v ? "0 8px" : "2px 4px",
            });
            _util.css(_elemEnd, {
               "border-top-width": v ? 1 : 0,
               "border-left-width": v ? 0 : 1,
               top: v ? "100%" : "",
               right: v ? options.indent : "",
               bottom: v ? "" : options.indent,
               left: v ? "" : "100%",
               padding: v ? "0 8px" : "2px 4px",
            });
            // append
            _boundsContainer.appendChild(_elemBounds);
         };

         // remove bounds from list and DOM
         var removeBounds = function () {
            _elemBounds.parentNode.removeChild(_elemBounds);
         };

         // update the start and end positions of the scene
         var updateBounds = function () {
            if (_elemBounds.parentNode !== _boundsContainer) {
               addBounds(); // Add Bounds elements (start/end)
            }
            var css = {};
            css[_vertical ? "top" : "left"] = Scene.triggerPosition();
            css[_vertical ? "height" : "width"] = Scene.duration();
            _util.css(_elemBounds, css);
            _util.css(_elemEnd, {
               display: Scene.duration() > 0 ? "" : "none",
            });
         };

         /*
          * ----------------------------------------------------------------
          * trigger and trigger group management
          * ----------------------------------------------------------------
          */

         // adds an new trigger group to the array and to the DOM
         var addTriggerGroup = function () {
            var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
            var css = {};
            css[_vertical ? "right" : "bottom"] = 0;
            css[_vertical ? "border-top-width" : "border-left-width"] = 1;
            _util.css(triggerElem.firstChild, css);
            _util.css(triggerElem.firstChild.firstChild, {
               padding: _vertical ? "0 8px 3px 8px" : "3px 4px",
            });
            document.body.appendChild(triggerElem); // directly add to body
            var newGroup = {
               triggerHook: Scene.triggerHook(),
               element: triggerElem,
               members: [Indicator],
            };
            _ctrl._indicators.groups.push(newGroup);
            Indicator.triggerGroup = newGroup;
            // update right away
            _ctrl._indicators.updateTriggerGroupLabel(newGroup);
            _ctrl._indicators.updateTriggerGroupPositions(newGroup);
         };

         var removeTriggerGroup = function () {
            _ctrl._indicators.groups.splice(
               _ctrl._indicators.groups.indexOf(Indicator.triggerGroup),
               1
            );
            Indicator.triggerGroup.element.parentNode.removeChild(
               Indicator.triggerGroup.element
            );
            Indicator.triggerGroup = undefined;
         };

         // updates the trigger group -> either join existing or add new one
         /*
          * Logic:
          * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
          * 2 try to find an existing one that matches Scene parameters
          * 	 2.1 If a match is found check if already assigned to an existing group
          *			 If so:
          *       A: it was the last member of existing group -> kill whole group
          *       B: the existing group has other members -> just remove from member list
          *	 2.2 Assign to matching group
          * 3 if no new match could be found, check if assigned to existing group
          *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
          *   B: yes but there are other members -> remove from member list and create a new one
          *   C: no, so create a new one
          */
         var updateTriggerGroup = function () {
            var triggerHook = Scene.triggerHook(),
               closeEnough = 0.0001;

            // Have a group, check if it still matches
            if (Indicator.triggerGroup) {
               if (
                  Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) <
                  closeEnough
               ) {
                  // _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
                  return; // all good
               }
            }
            // Don't have a group, check if a matching one exists
            // _util.log(0, "trigger", options.name, "->", "out of sync!");
            var groups = _ctrl._indicators.groups,
               group,
               i = groups.length;
            while (i--) {
               group = groups[i];
               if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
                  // found a match!
                  // _util.log(0, "trigger", options.name, "->", "found match");
                  if (Indicator.triggerGroup) {
                     // do I have an old group that is out of sync?
                     if (Indicator.triggerGroup.members.length === 1) {
                        // is it the only remaining group?
                        // _util.log(0, "trigger", options.name, "->", "kill");
                        // was the last member, remove the whole group
                        removeTriggerGroup();
                     } else {
                        Indicator.triggerGroup.members.splice(
                           Indicator.triggerGroup.members.indexOf(Indicator),
                           1
                        ); // just remove from memberlist of old group
                        _ctrl._indicators.updateTriggerGroupLabel(
                           Indicator.triggerGroup
                        );
                        _ctrl._indicators.updateTriggerGroupPositions(
                           Indicator.triggerGroup
                        );
                        // _util.log(0, "trigger", options.name, "->", "removing from previous member list");
                     }
                  }
                  // join new group
                  group.members.push(Indicator);
                  Indicator.triggerGroup = group;
                  _ctrl._indicators.updateTriggerGroupLabel(group);
                  return;
               }
            }

            // at this point I am obviously out of sync and don't match any other group
            if (Indicator.triggerGroup) {
               if (Indicator.triggerGroup.members.length === 1) {
                  // _util.log(0, "trigger", options.name, "->", "updating existing");
                  // out of sync but i'm the only member => just change and update
                  Indicator.triggerGroup.triggerHook = triggerHook;
                  _ctrl._indicators.updateTriggerGroupPositions(
                     Indicator.triggerGroup
                  );
                  return;
               } else {
                  // _util.log(0, "trigger", options.name, "->", "removing from previous member list");
                  Indicator.triggerGroup.members.splice(
                     Indicator.triggerGroup.members.indexOf(Indicator),
                     1
                  ); // just remove from memberlist of old group
                  _ctrl._indicators.updateTriggerGroupLabel(
                     Indicator.triggerGroup
                  );
                  _ctrl._indicators.updateTriggerGroupPositions(
                     Indicator.triggerGroup
                  );
                  Indicator.triggerGroup = undefined; // need a brand new group...
               }
            }
            // _util.log(0, "trigger", options.name, "->", "add a new one");
            // did not find any match, make new trigger group
            addTriggerGroup();
         };
      };

      /*
       * ----------------------------------------------------------------
       * Templates for the indicators
       * ----------------------------------------------------------------
       */
      var TPL = {
         start: function (color) {
            // inner element (for bottom offset -1, while keeping top position 0)
            var inner = document.createElement("div");
            inner.textContent = "start";
            _util.css(inner, {
               position: "absolute",
               overflow: "visible",
               "border-width": 0,
               "border-style": "solid",
               color: color,
               "border-color": color,
            });
            var e = document.createElement("div");
            // wrapper
            _util.css(e, {
               position: "absolute",
               overflow: "visible",
               width: 0,
               height: 0,
            });
            e.appendChild(inner);
            return e;
         },
         end: function (color) {
            var e = document.createElement("div");
            e.textContent = "end";
            _util.css(e, {
               position: "absolute",
               overflow: "visible",
               "border-width": 0,
               "border-style": "solid",
               color: color,
               "border-color": color,
            });
            return e;
         },
         bounds: function () {
            var e = document.createElement("div");
            _util.css(e, {
               position: "absolute",
               overflow: "visible",
               "white-space": "nowrap",
               "pointer-events": "none",
               "font-size": FONT_SIZE,
            });
            e.style.zIndex = ZINDEX;
            return e;
         },
         trigger: function (color) {
            // inner to be above or below line but keep position
            var inner = document.createElement("div");
            inner.textContent = "trigger";
            _util.css(inner, {
               position: "relative",
            });
            // inner wrapper for right: 0 and main element has no size
            var w = document.createElement("div");
            _util.css(w, {
               position: "absolute",
               overflow: "visible",
               "border-width": 0,
               "border-style": "solid",
               color: color,
               "border-color": color,
            });
            w.appendChild(inner);
            // wrapper
            var e = document.createElement("div");
            _util.css(e, {
               position: "fixed",
               overflow: "visible",
               "white-space": "nowrap",
               "pointer-events": "none",
               "font-size": FONT_SIZE,
            });
            e.style.zIndex = ZINDEX;
            e.appendChild(w);
            return e;
         },
      };
   });

   // scroll magic gsap

   /*!
    * GSAP 3.10.3
    * https://greensock.com
    *
    * @license Copyright 2022, GreenSock. All rights reserved.
    * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
    * @author: Jack Doyle, jack@greensock.com
    */

   !(function (t, e) {
      "object" == typeof exports && "undefined" != typeof module
         ? e(exports)
         : "function" == typeof define && define.amd
         ? define(["exports"], e)
         : e(((t = t || self).window = t.window || {}));
   })(this, function (e) {
      "use strict";
      function _inheritsLoose(t, e) {
         (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
      }
      function _assertThisInitialized(t) {
         if (void 0 === t)
            throw new ReferenceError(
               "this hasn't been initialised - super() hasn't been called"
            );
         return t;
      }
      function o(t) {
         return "string" == typeof t;
      }
      function p(t) {
         return "function" == typeof t;
      }
      function q(t) {
         return "number" == typeof t;
      }
      function r(t) {
         return void 0 === t;
      }
      function s(t) {
         return "object" == typeof t;
      }
      function t(t) {
         return !1 !== t;
      }
      function u() {
         return "undefined" != typeof window;
      }
      function v(t) {
         return p(t) || o(t);
      }
      function M(t) {
         return (h = mt(t, ot)) && he;
      }
      function N(t, e) {
         return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
         );
      }
      function O(t, e) {
         return !e && console.warn(t);
      }
      function P(t, e) {
         return (t && (ot[t] = e) && h && (h[t] = e)) || ot;
      }
      function Q() {
         return 0;
      }
      function $(t) {
         var e,
            r,
            i = t[0];
         if ((s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = pt.length; r-- && !pt[r].targetTest(i); );
            e = pt[r];
         }
         for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e)))) ||
               t.splice(r, 1);
         return t;
      }
      function _(t) {
         return t._gsap || $(xt(t))[0]._gsap;
      }
      function aa(t, e, i) {
         return (i = t[e]) && p(i)
            ? t[e]()
            : (r(i) && t.getAttribute && t.getAttribute(e)) || i;
      }
      function ba(t, e) {
         return (t = t.split(",")).forEach(e) || t;
      }
      function ca(t) {
         return Math.round(1e5 * t) / 1e5 || 0;
      }
      function da(t) {
         return Math.round(1e7 * t) / 1e7 || 0;
      }
      function ea(t, e) {
         var r = e.charAt(0),
            i = parseFloat(e.substr(2));
         return (
            (t = parseFloat(t)),
            "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
         );
      }
      function fa(t, e) {
         for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
         return i < r;
      }
      function ga() {
         var t,
            e,
            r = ht.length,
            i = ht.slice(0);
         for (lt = {}, t = ht.length = 0; t < r; t++)
            (e = i[t]) &&
               e._lazy &&
               (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      }
      function ha(t, e, r, i) {
         ht.length && ga(), t.render(e, r, i), ht.length && ga();
      }
      function ia(t) {
         var e = parseFloat(t);
         return (e || 0 === e) && (t + "").match(at).length < 2
            ? e
            : o(t)
            ? t.trim()
            : t;
      }
      function ja(t) {
         return t;
      }
      function ka(t, e) {
         for (var r in e) r in t || (t[r] = e[r]);
         return t;
      }
      function na(t, e) {
         for (var r in e)
            "__proto__" !== r &&
               "constructor" !== r &&
               "prototype" !== r &&
               (t[r] = s(e[r]) ? na(t[r] || (t[r] = {}), e[r]) : e[r]);
         return t;
      }
      function oa(t, e) {
         var r,
            i = {};
         for (r in t) r in e || (i[r] = t[r]);
         return i;
      }
      function pa(e) {
         var r = e.parent || I,
            i = e.keyframes
               ? (function _setKeyframeDefaults(i) {
                    return function (t, e) {
                       for (var r in e)
                          r in t ||
                             ("duration" === r && i) ||
                             "ease" === r ||
                             (t[r] = e[r]);
                    };
                 })(J(e.keyframes))
               : ka;
         if (t(e.inherit))
            for (; r; ) i(e, r.vars.defaults), (r = r.parent || r._dp);
         return e;
      }
      function ra(t, e, r, i, n) {
         void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
         var a,
            s = t[i];
         if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
         return (
            s
               ? ((e._next = s._next), (s._next = e))
               : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[i] = e),
            (e._prev = s),
            (e.parent = e._dp = t),
            e
         );
      }
      function sa(t, e, r, i) {
         void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
         var n = e._prev,
            a = e._next;
         n ? (n._next = a) : t[r] === e && (t[r] = a),
            a ? (a._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
      }
      function ta(t, e) {
         !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
            (t._act = 0);
      }
      function ua(t, e) {
         if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
         return t;
      }
      function xa(t) {
         return t._repeat
            ? gt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
      }
      function za(t, e) {
         return (
            (t - e._start) * e._ts +
            (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
         );
      }
      function Aa(t) {
         return (t._end = da(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0)
         ));
      }
      function Ba(t, e) {
         var r = t._dp;
         return (
            r &&
               r.smoothChildTiming &&
               t._ts &&
               ((t._start = da(
                  r._time -
                     (0 < t._ts
                        ? e / t._ts
                        : ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                          -t._ts)
               )),
               Aa(t),
               r._dirty || ua(r, t)),
            t
         );
      }
      function Ca(t, e) {
         var r;
         if (
            ((e._time || (e._initted && !e._dur)) &&
               ((r = za(t.rawTime(), e)),
               (!e._dur || bt(0, e.totalDuration(), r) - e._tTime > V) &&
                  e.render(r, !0)),
            ua(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
         ) {
            if (t._dur < t.duration())
               for (r = t; r._dp; )
                  0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -V;
         }
      }
      function Da(t, e, r, i) {
         return (
            e.parent && ta(e),
            (e._start = da(
               (q(r) ? r : r || t !== I ? Tt(t, r, e) : t._time) + e._delay
            )),
            (e._end = da(
               e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            ra(t, e, "_first", "_last", t._sort ? "_start" : 0),
            vt(e) || (t._recent = e),
            i || Ca(t, e),
            t
         );
      }
      function Ea(t, e) {
         return (
            (ot.ScrollTrigger || N("scrollTrigger", e)) &&
            ot.ScrollTrigger.create(e, t)
         );
      }
      function Fa(t, e, r, i) {
         return (
            Xt(t, e),
            t._initted
               ? !r &&
                 t._pt &&
                 ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                 f !== Dt.frame
                  ? (ht.push(t), (t._lazy = [e, i]), 1)
                  : void 0
               : 1
         );
      }
      function Ka(t, e, r, i) {
         var n = t._repeat,
            a = da(e) || 0,
            s = t._tTime / t._tDur;
         return (
            s && !i && (t._time *= a / t._dur),
            (t._dur = a),
            (t._tDur = n
               ? n < 0
                  ? 1e10
                  : da(a * (n + 1) + t._rDelay * n)
               : a),
            0 < s && !i ? Ba(t, (t._tTime = t._tDur * s)) : t.parent && Aa(t),
            r || ua(t.parent, t),
            t
         );
      }
      function La(t) {
         return t instanceof Ut ? ua(t) : Ka(t, t._dur);
      }
      function Oa(e, r, i) {
         var n,
            a,
            s = q(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
         if ((s && (u.duration = r[1]), (u.parent = i), e)) {
            for (n = u, a = i; a && !("immediateRender" in n); )
               (n = a.vars.defaults || {}), (a = t(a.vars.inherit) && a.parent);
            (u.immediateRender = t(n.immediateRender)),
               e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
         }
         return new $t(r[0], u, r[1 + o]);
      }
      function Pa(t, e) {
         return t || 0 === t ? e(t) : e;
      }
      function Ra(t, e) {
         return o(t) && (e = st.exec(t)) ? e[1] : "";
      }
      function Ua(t, e) {
         return (
            t &&
            s(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && s(t[0]))) &&
            !t.nodeType &&
            t !== i
         );
      }
      function Ya(t) {
         return t.sort(function () {
            return 0.5 - Math.random();
         });
      }
      function Za(t) {
         if (p(t)) return t;
         var c = s(t) ? t : { each: t },
            m = Bt(c.ease),
            g = c.from || 0,
            v = parseFloat(c.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            T = isNaN(g) || e,
            b = c.axis,
            w = g,
            x = g;
         return (
            o(g)
               ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
               : !e && T && ((w = g[0]), (x = g[1])),
            function (t, e, r) {
               var i,
                  n,
                  a,
                  s,
                  o,
                  u,
                  h,
                  l,
                  f,
                  d = (r || c).length,
                  _ = y[d];
               if (!_) {
                  if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, Y])[1])) {
                     for (
                        h = -Y;
                        h < (h = r[f++].getBoundingClientRect().left) && f < d;

                     );
                     f--;
                  }
                  for (
                     _ = y[d] = [],
                        i = T ? Math.min(f, d) * w - 0.5 : g % f,
                        n = f === Y ? 0 : T ? (d * x) / f - 0.5 : (g / f) | 0,
                        l = Y,
                        u = h = 0;
                     u < d;
                     u++
                  )
                     (a = (u % f) - i),
                        (s = n - ((u / f) | 0)),
                        (_[u] = o =
                           b ? Math.abs("y" === b ? s : a) : G(a * a + s * s)),
                        h < o && (h = o),
                        o < l && (l = o);
                  "random" === g && Ya(_),
                     (_.max = h - l),
                     (_.min = l),
                     (_.v = d =
                        (parseFloat(c.amount) ||
                           parseFloat(c.each) *
                              (d < f
                                 ? d - 1
                                 : b
                                 ? "y" === b
                                    ? d / f
                                    : f
                                 : Math.max(f, d / f)) ||
                           0) * ("edges" === g ? -1 : 1)),
                     (_.b = d < 0 ? v - d : v),
                     (_.u = Ra(c.amount || c.each) || 0),
                     (m = m && d < 0 ? Ft(m) : m);
               }
               return (
                  (d = (_[t] - _.min) / _.max || 0),
                  da(_.b + (m ? m(d) : d) * _.v) + _.u
               );
            }
         );
      }
      function $a(r) {
         var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
         return function (t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - (e % 1)) / i + (q(t) ? 0 : Ra(t));
         };
      }
      function _a(u, t) {
         var h,
            l,
            e = J(u);
         return (
            !e &&
               s(u) &&
               ((h = e = u.radius || Y),
               u.values
                  ? ((u = xt(u.values)), (l = !q(u[0])) && (h *= h))
                  : (u = $a(u.increment))),
            Pa(
               t,
               e
                  ? p(u)
                     ? function (t) {
                          return (l = u(t)), Math.abs(l - t) <= h ? l : t;
                       }
                     : function (t) {
                          for (
                             var e,
                                r,
                                i = parseFloat(l ? t.x : t),
                                n = parseFloat(l ? t.y : 0),
                                a = Y,
                                s = 0,
                                o = u.length;
                             o--;

                          )
                             (e = l
                                ? (e = u[o].x - i) * e + (r = u[o].y - n) * r
                                : Math.abs(u[o] - i)) < a && ((a = e), (s = o));
                          return (
                             (s = !h || a <= h ? u[s] : t),
                             l || s === t || q(t) ? s : s + Ra(t)
                          );
                       }
                  : $a(u)
            )
         );
      }
      function ab(t, e, r, i) {
         return Pa(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return J(t)
               ? t[~~(Math.random() * t.length)]
               : (r = r || 1e-5) &&
                    (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                    Math.floor(
                       Math.round(
                          (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                       ) *
                          r *
                          i
                    ) / i;
         });
      }
      function eb(e, r, t) {
         return Pa(t, function (t) {
            return e[~~r(t)];
         });
      }
      function hb(t) {
         for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            (i = t.indexOf(")", e)),
               (n = "[" === t.charAt(e + 7)),
               (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
               (s +=
                  t.substr(a, e - a) +
                  ab(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
               (a = i + 1);
         return s + t.substr(a, t.length - a);
      }
      function kb(t, e, r) {
         var i,
            n,
            a,
            s = t.labels,
            o = Y;
         for (i in s)
            (n = s[i] - e) < 0 == !!r &&
               n &&
               o > (n = Math.abs(n)) &&
               ((a = i), (o = n));
         return a;
      }
      function mb(t) {
         return (
            ta(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && Ot(t, "onInterrupt"),
            t
         );
      }
      function rb(t, e, r) {
         return (
            ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
               ? e + (r - e) * t * 6
               : t < 0.5
               ? r
               : 3 * t < 2
               ? e + (r - e) * (2 / 3 - t) * 6
               : e) *
               Pt +
               0.5) |
            0
         );
      }
      function sb(t, e, r) {
         var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d,
            _ = t ? (q(t) ? [t >> 16, (t >> 8) & Pt, t & Pt] : 0) : Mt.black;
         if (!_) {
            if (
               ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t])
            )
               _ = Mt[t];
            else if ("#" === t.charAt(0)) {
               if (
                  (t.length < 6 &&
                     (t =
                        "#" +
                        (i = t.charAt(1)) +
                        i +
                        (n = t.charAt(2)) +
                        n +
                        (a = t.charAt(3)) +
                        a +
                        (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                  9 === t.length)
               )
                  return [
                     (_ = parseInt(t.substr(1, 6), 16)) >> 16,
                     (_ >> 8) & Pt,
                     _ & Pt,
                     parseInt(t.substr(7), 16) / 255,
                  ];
               _ = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & Pt,
                  t & Pt,
               ];
            } else if ("hsl" === t.substr(0, 3))
               if (((_ = d = t.match(tt)), e)) {
                  if (~t.indexOf("="))
                     return (
                        (_ = t.match(et)), r && _.length < 4 && (_[3] = 1), _
                     );
               } else
                  (s = (+_[0] % 360) / 360),
                     (o = _[1] / 100),
                     (i =
                        2 * (u = _[2] / 100) -
                        (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                     3 < _.length && (_[3] *= 1),
                     (_[0] = rb(s + 1 / 3, i, n)),
                     (_[1] = rb(s, i, n)),
                     (_[2] = rb(s - 1 / 3, i, n));
            else _ = t.match(tt) || Mt.transparent;
            _ = _.map(Number);
         }
         return (
            e &&
               !d &&
               ((i = _[0] / Pt),
               (n = _[1] / Pt),
               (a = _[2] / Pt),
               (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
               h === l
                  ? (s = o = 0)
                  : ((f = h - l),
                    (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)),
                    (s =
                       h === i
                          ? (n - a) / f + (n < a ? 6 : 0)
                          : h === n
                          ? (a - i) / f + 2
                          : (i - n) / f + 4),
                    (s *= 60)),
               (_[0] = ~~(s + 0.5)),
               (_[1] = ~~(100 * o + 0.5)),
               (_[2] = ~~(100 * u + 0.5))),
            r && _.length < 4 && (_[3] = 1),
            _
         );
      }
      function tb(t) {
         var r = [],
            i = [],
            n = -1;
         return (
            t.split(Ct).forEach(function (t) {
               var e = t.match(rt) || [];
               r.push.apply(r, e), i.push((n += e.length + 1));
            }),
            (r.c = i),
            r
         );
      }
      function ub(t, e, r) {
         var i,
            n,
            a,
            s,
            o = "",
            u = (t + o).match(Ct),
            h = e ? "hsla(" : "rgba(",
            l = 0;
         if (!u) return t;
         if (
            ((u = u.map(function (t) {
               return (
                  (t = sb(t, e, 1)) &&
                  h +
                     (e
                        ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                        : t.join(",")) +
                     ")"
               );
            })),
            r && ((a = tb(t)), (i = r.c).join(o) !== a.c.join(o)))
         )
            for (s = (n = t.replace(Ct, "1").split(rt)).length - 1; l < s; l++)
               o +=
                  n[l] +
                  (~i.indexOf(l)
                     ? u.shift() || h + "0,0,0,0)"
                     : (a.length ? a : u.length ? u : r).shift());
         if (!n)
            for (s = (n = t.split(Ct)).length - 1; l < s; l++) o += n[l] + u[l];
         return o + n[s];
      }
      function xb(t) {
         var e,
            r = t.join(" ");
         if (((Ct.lastIndex = 0), Ct.test(r)))
            return (
               (e = At.test(r)),
               (t[1] = ub(t[1], e)),
               (t[0] = ub(t[0], e, tb(t[1]))),
               !0
            );
      }
      function Gb(t) {
         var e = (t + "").split("("),
            r = zt[e[0]];
         return r && 1 < e.length && r.config
            ? r.config.apply(
                 null,
                 ~t.indexOf("{")
                    ? [
                         (function _parseObjectInString(t) {
                            for (
                               var e,
                                  r,
                                  i,
                                  n = {},
                                  a = t.substr(1, t.length - 3).split(":"),
                                  s = a[0],
                                  o = 1,
                                  u = a.length;
                               o < u;
                               o++
                            )
                               (r = a[o]),
                                  (e =
                                     o !== u - 1
                                        ? r.lastIndexOf(",")
                                        : r.length),
                                  (i = r.substr(0, e)),
                                  (n[s] = isNaN(i)
                                     ? i.replace(Et, "").trim()
                                     : +i),
                                  (s = r.substr(e + 1).trim());
                            return n;
                         })(e[1]),
                      ]
                    : (function _valueInParentheses(t) {
                         var e = t.indexOf("(") + 1,
                            r = t.indexOf(")"),
                            i = t.indexOf("(", e);
                         return t.substring(
                            e,
                            ~i && i < r ? t.indexOf(")", r + 1) : r
                         );
                      })(t)
                         .split(",")
                         .map(ia)
              )
            : zt._CE && Rt.test(t)
            ? zt._CE("", t)
            : r;
      }
      function Ib(t, e) {
         for (var r, i = t._first; i; )
            i instanceof Ut
               ? Ib(i, e)
               : !i.vars.yoyoEase ||
                 (i._yoyo && i._repeat) ||
                 i._yoyo === e ||
                 (i.timeline
                    ? Ib(i.timeline, e)
                    : ((r = i._ease),
                      (i._ease = i._yEase),
                      (i._yEase = r),
                      (i._yoyo = e))),
               (i = i._next);
      }
      function Kb(t, e, r, i) {
         void 0 === r &&
            (r = function easeOut(t) {
               return 1 - e(1 - t);
            }),
            void 0 === i &&
               (i = function easeInOut(t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
               });
         var n,
            a = { easeIn: e, easeOut: r, easeInOut: i };
         return (
            ba(t, function (t) {
               for (var e in ((zt[t] = ot[t] = a),
               (zt[(n = t.toLowerCase())] = r),
               a))
                  zt[
                     n +
                        ("easeIn" === e
                           ? ".in"
                           : "easeOut" === e
                           ? ".out"
                           : ".inOut")
                  ] = zt[t + "." + e] = a[e];
            }),
            a
         );
      }
      function Lb(e) {
         return function (t) {
            return t < 0.5
               ? (1 - e(1 - 2 * t)) / 2
               : 0.5 + e(2 * (t - 0.5)) / 2;
         };
      }
      function Mb(r, t, e) {
         function em(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Z((t - a) * n) + 1;
         }
         var i = 1 <= t ? t : 1,
            n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
            a = (n / X) * (Math.asin(1 / i) || 0),
            s =
               "out" === r
                  ? em
                  : "in" === r
                  ? function (t) {
                       return 1 - em(1 - t);
                    }
                  : Lb(em);
         return (
            (n = X / n),
            (s.config = function (t, e) {
               return Mb(r, t, e);
            }),
            s
         );
      }
      function Nb(e, r) {
         function mm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
         }
         void 0 === r && (r = 1.70158);
         var t =
            "out" === e
               ? mm
               : "in" === e
               ? function (t) {
                    return 1 - mm(1 - t);
                 }
               : Lb(mm);
         return (
            (t.config = function (t) {
               return Nb(e, t);
            }),
            t
         );
      }
      var B,
         I,
         i,
         n,
         a,
         h,
         l,
         f,
         d,
         c,
         m,
         g,
         y,
         T,
         b,
         w,
         x,
         k,
         C,
         A,
         D,
         S,
         z,
         R,
         E,
         F,
         U = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
         },
         L = { duration: 0.5, overwrite: !1, delay: 0 },
         Y = 1e8,
         V = 1 / Y,
         X = 2 * Math.PI,
         j = X / 4,
         K = 0,
         G = Math.sqrt,
         W = Math.cos,
         Z = Math.sin,
         H =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
         J = Array.isArray,
         tt = /(?:-?\.?\d|\.)+/gi,
         et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
         rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
         it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
         nt = /[+-]=-?[.\d]+/,
         at = /[^,'"\[\]\s]+/gi,
         st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
         ot = {},
         ut = {},
         ht = [],
         lt = {},
         ft = {},
         dt = {},
         _t = 30,
         pt = [],
         ct = "",
         mt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t;
         },
         gt = function _animationCycle(t, e) {
            var r = Math.floor((t /= e));
            return t && r === t ? r - 1 : r;
         },
         vt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
         },
         yt = { _start: 0, endTime: Q, totalDuration: Q },
         Tt = function _parsePosition(t, e, r) {
            var i,
               n,
               a,
               s = t.labels,
               u = t._recent || yt,
               h = t.duration() >= Y ? u.endTime(!1) : t._dur;
            return o(e) && (isNaN(e) || e in s)
               ? ((n = e.charAt(0)),
                 (a = "%" === e.substr(-1)),
                 (i = e.indexOf("=")),
                 "<" === n || ">" === n
                    ? (0 <= i && (e = e.replace(/=/, "")),
                      ("<" === n ? u._start : u.endTime(0 <= u._repeat)) +
                         (parseFloat(e.substr(1)) || 0) *
                            (a ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                    : i < 0
                    ? (e in s || (s[e] = h), s[e])
                    : ((n = parseFloat(e.charAt(i - 1) + e.substr(i + 1))),
                      a &&
                         r &&
                         (n = (n / 100) * (J(r) ? r[0] : r).totalDuration()),
                      1 < i
                         ? _parsePosition(t, e.substr(0, i - 1), r) + n
                         : h + n))
               : null == e
               ? h
               : +e;
         },
         bt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r;
         },
         wt = [].slice,
         xt = function toArray(t, e, r) {
            return !o(t) || r || (!n && St())
               ? J(t)
                  ? (function _flatten(t, e, r) {
                       return (
                          void 0 === r && (r = []),
                          t.forEach(function (t) {
                             return (o(t) && !e) || Ua(t, 1)
                                ? r.push.apply(r, xt(t))
                                : r.push(t);
                          }) || r
                       );
                    })(t, r)
                  : Ua(t)
                  ? wt.call(t, 0)
                  : t
                  ? [t]
                  : []
               : wt.call((e || a).querySelectorAll(t), 0);
         },
         kt = function mapRange(e, t, r, i, n) {
            var a = t - e,
               s = i - r;
            return Pa(n, function (t) {
               return r + (((t - e) / a) * s || 0);
            });
         },
         Ot = function _callback(t, e, r) {
            var i,
               n,
               a = t.vars,
               s = a[e];
            if (s)
               return (
                  (i = a[e + "Params"]),
                  (n = a.callbackScope || t),
                  r && ht.length && ga(),
                  i ? s.apply(n, i) : s.call(n)
               );
         },
         Pt = 255,
         Mt = {
            aqua: [0, Pt, Pt],
            lime: [0, Pt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Pt],
            navy: [0, 0, 128],
            white: [Pt, Pt, Pt],
            olive: [128, 128, 0],
            yellow: [Pt, Pt, 0],
            orange: [Pt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Pt, 0, 0],
            pink: [Pt, 192, 203],
            cyan: [0, Pt, Pt],
            transparent: [Pt, Pt, Pt, 0],
         },
         Ct = (function () {
            var t,
               e =
                  "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Mt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
         })(),
         At = /hsl[a]?\(/,
         Dt =
            ((x = Date.now),
            (k = 500),
            (C = 33),
            (A = x()),
            (D = A),
            (z = S = 1e3 / 240),
            (T = {
               time: 0,
               frame: 0,
               tick: function tick() {
                  Vk(!0);
               },
               deltaRatio: function deltaRatio(t) {
                  return b / (1e3 / (t || 60));
               },
               wake: function wake() {
                  l &&
                     (!n &&
                        u() &&
                        ((i = n = window),
                        (a = i.document || {}),
                        (ot.gsap = he),
                        (i.gsapVersions || (i.gsapVersions = [])).push(
                           he.version
                        ),
                        M(h || i.GreenSockGlobals || (!i.gsap && i) || {}),
                        (y = i.requestAnimationFrame)),
                     m && T.sleep(),
                     (g =
                        y ||
                        function (t) {
                           return setTimeout(t, (z - 1e3 * T.time + 1) | 0);
                        }),
                     (c = 1),
                     Vk(2));
               },
               sleep: function sleep() {
                  (y ? i.cancelAnimationFrame : clearTimeout)(m),
                     (c = 0),
                     (g = Q);
               },
               lagSmoothing: function lagSmoothing(t, e) {
                  (k = t || 1e8), (C = Math.min(e, k, 0));
               },
               fps: function fps(t) {
                  (S = 1e3 / (t || 240)), (z = 1e3 * T.time + S);
               },
               add: function add(n, t, e) {
                  var a = t
                     ? function (t, e, r, i) {
                          n(t, e, r, i), T.remove(a);
                       }
                     : n;
                  return T.remove(n), R[e ? "unshift" : "push"](a), St(), a;
               },
               remove: function remove(t, e) {
                  ~(e = R.indexOf(t)) && R.splice(e, 1) && e <= w && w--;
               },
               _listeners: (R = []),
            })),
         St = function _wake() {
            return !c && Dt.wake();
         },
         zt = {},
         Rt = /^[\d.\-M][\d.\-,\s]/,
         Et = /["']/g,
         Ft = function _invertEase(e) {
            return function (t) {
               return 1 - e(1 - t);
            };
         },
         Bt = function _parseEase(t, e) {
            return (t && (p(t) ? t : zt[t] || Gb(t))) || e;
         };
      function Vk(t) {
         var e,
            r,
            i,
            n,
            a = x() - D,
            s = !0 === t;
         if (
            (k < a && (A += a - C),
            (0 < (e = (i = (D += a) - A) - z) || s) &&
               ((n = ++T.frame),
               (b = i - 1e3 * T.time),
               (T.time = i /= 1e3),
               (z += e + (S <= e ? 4 : S - e)),
               (r = 1)),
            s || (m = g(Vk)),
            r)
         )
            for (w = 0; w < R.length; w++) R[w](i, b, n, t);
      }
      function Dm(t) {
         return t < F
            ? E * t * t
            : t < 0.7272727272727273
            ? E * Math.pow(t - 1.5 / 2.75, 2) + 0.75
            : t < 0.9090909090909092
            ? E * (t -= 2.25 / 2.75) * t + 0.9375
            : E * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
      }
      ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
         var r = e < 5 ? e + 1 : e;
         Kb(
            t + ",Power" + (r - 1),
            e
               ? function (t) {
                    return Math.pow(t, r);
                 }
               : function (t) {
                    return t;
                 },
            function (t) {
               return 1 - Math.pow(1 - t, r);
            },
            function (t) {
               return t < 0.5
                  ? Math.pow(2 * t, r) / 2
                  : 1 - Math.pow(2 * (1 - t), r) / 2;
            }
         );
      }),
         (zt.Linear.easeNone = zt.none = zt.Linear.easeIn),
         Kb("Elastic", Mb("in"), Mb("out"), Mb()),
         (E = 7.5625),
         (F = 1 / 2.75),
         Kb(
            "Bounce",
            function (t) {
               return 1 - Dm(1 - t);
            },
            Dm
         ),
         Kb("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
         }),
         Kb("Circ", function (t) {
            return -(G(1 - t * t) - 1);
         }),
         Kb("Sine", function (t) {
            return 1 === t ? 1 : 1 - W(t * j);
         }),
         Kb("Back", Nb("in"), Nb("out"), Nb()),
         (zt.SteppedEase =
            zt.steps =
            ot.SteppedEase =
               {
                  config: function config(t, e) {
                     void 0 === t && (t = 1);
                     var r = 1 / t,
                        i = t + (e ? 0 : 1),
                        n = e ? 1 : 0;
                     return function (t) {
                        return (((i * bt(0, 0.99999999, t)) | 0) + n) * r;
                     };
                  },
               }),
         (L.ease = zt["quad.out"]),
         ba(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
               return (ct += t + "," + t + "Params,");
            }
         );
      var It,
         Lt = function GSCache(t, e) {
            (this.id = K++),
               ((t._gsap = this).target = t),
               (this.harness = e),
               (this.get = e ? e.get : aa),
               (this.set = e ? e.getSetter : Ht);
         },
         Nt =
            (((It = Animation.prototype).delay = function delay(t) {
               return t || 0 === t
                  ? (this.parent &&
                       this.parent.smoothChildTiming &&
                       this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
            }),
            (It.duration = function duration(t) {
               return arguments.length
                  ? this.totalDuration(
                       0 < this._repeat
                          ? t + (t + this._rDelay) * this._repeat
                          : t
                    )
                  : this.totalDuration() && this._dur;
            }),
            (It.totalDuration = function totalDuration(t) {
               return arguments.length
                  ? ((this._dirty = 0),
                    Ka(
                       this,
                       this._repeat < 0
                          ? t
                          : (t - this._repeat * this._rDelay) /
                               (this._repeat + 1)
                    ))
                  : this._tDur;
            }),
            (It.totalTime = function totalTime(t, e) {
               if ((St(), !arguments.length)) return this._tTime;
               var r = this._dp;
               if (r && r.smoothChildTiming && this._ts) {
                  for (
                     Ba(this, t), !r._dp || r.parent || Ca(r, this);
                     r && r.parent;

                  )
                     r.parent._time !==
                        r._start +
                           (0 <= r._ts
                              ? r._tTime / r._ts
                              : (r.totalDuration() - r._tTime) / -r._ts) &&
                        r.totalTime(r._tTime, !0),
                        (r = r.parent);
                  !this.parent &&
                     this._dp.autoRemoveChildren &&
                     ((0 < this._ts && t < this._tDur) ||
                        (this._ts < 0 && 0 < t) ||
                        (!this._tDur && !t)) &&
                     Da(this._dp, this, this._start - this._delay);
               }
               return (
                  (this._tTime !== t ||
                     (!this._dur && !e) ||
                     (this._initted && Math.abs(this._zTime) === V) ||
                     (!t && !this._initted && (this.add || this._ptLookup))) &&
                     (this._ts || (this._pTime = t), ha(this, t, e)),
                  this
               );
            }),
            (It.time = function time(t, e) {
               return arguments.length
                  ? this.totalTime(
                       Math.min(this.totalDuration(), t + xa(this)) %
                          (this._dur + this._rDelay) || (t ? this._dur : 0),
                       e
                    )
                  : this._time;
            }),
            (It.totalProgress = function totalProgress(t, e) {
               return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
            }),
            (It.progress = function progress(t, e) {
               return arguments.length
                  ? this.totalTime(
                       this.duration() *
                          (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                          xa(this),
                       e
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
            }),
            (It.iteration = function iteration(t, e) {
               var r = this.duration() + this._rDelay;
               return arguments.length
                  ? this.totalTime(this._time + (t - 1) * r, e)
                  : this._repeat
                  ? gt(this._tTime, r) + 1
                  : 1;
            }),
            (It.timeScale = function timeScale(t) {
               if (!arguments.length) return this._rts === -V ? 0 : this._rts;
               if (this._rts === t) return this;
               var e =
                  this.parent && this._ts
                     ? za(this.parent._time, this)
                     : this._tTime;
               return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || t === -V ? 0 : this._rts),
                  this.totalTime(bt(-this._delay, this._tDur, e), !0),
                  Aa(this),
                  (function _recacheAncestors(t) {
                     for (var e = t.parent; e && e.parent; )
                        (e._dirty = 1), e.totalDuration(), (e = e.parent);
                     return t;
                  })(this)
               );
            }),
            (It.paused = function paused(t) {
               return arguments.length
                  ? (this._ps !== t &&
                       ((this._ps = t)
                          ? ((this._pTime =
                               this._tTime ||
                               Math.max(-this._delay, this.rawTime())),
                            (this._ts = this._act = 0))
                          : (St(),
                            (this._ts = this._rts),
                            this.totalTime(
                               this.parent && !this.parent.smoothChildTiming
                                  ? this.rawTime()
                                  : this._tTime || this._pTime,
                               1 === this.progress() &&
                                  Math.abs(this._zTime) !== V &&
                                  (this._tTime -= V)
                            ))),
                    this)
                  : this._ps;
            }),
            (It.startTime = function startTime(t) {
               if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                     !e ||
                        (!e._sort && this.parent) ||
                        Da(e, this, t - this._delay),
                     this
                  );
               }
               return this._start;
            }),
            (It.endTime = function endTime(e) {
               return (
                  this._start +
                  (t(e) ? this.totalDuration() : this.duration()) /
                     Math.abs(this._ts || 1)
               );
            }),
            (It.rawTime = function rawTime(t) {
               var e = this.parent || this._dp;
               return e
                  ? t &&
                    (!this._ts ||
                       (this._repeat && this._time && this.totalProgress() < 1))
                     ? this._tTime % (this._dur + this._rDelay)
                     : this._ts
                     ? za(e.rawTime(t), this)
                     : this._tTime
                  : this._tTime;
            }),
            (It.globalTime = function globalTime(t) {
               for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                  (r = e._start + r / (e._ts || 1)), (e = e._dp);
               return r;
            }),
            (It.repeat = function repeat(t) {
               return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), La(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
            }),
            (It.repeatDelay = function repeatDelay(t) {
               if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), La(this), e ? this.time(e) : this;
               }
               return this._rDelay;
            }),
            (It.yoyo = function yoyo(t) {
               return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (It.seek = function seek(e, r) {
               return this.totalTime(Tt(this, e), t(r));
            }),
            (It.restart = function restart(e, r) {
               return this.play().totalTime(e ? -this._delay : 0, t(r));
            }),
            (It.play = function play(t, e) {
               return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
               );
            }),
            (It.reverse = function reverse(t, e) {
               return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
               );
            }),
            (It.pause = function pause(t, e) {
               return null != t && this.seek(t, e), this.paused(!0);
            }),
            (It.resume = function resume() {
               return this.paused(!1);
            }),
            (It.reversed = function reversed(t) {
               return arguments.length
                  ? (!!t !== this.reversed() &&
                       this.timeScale(-this._rts || (t ? -V : 0)),
                    this)
                  : this._rts < 0;
            }),
            (It.invalidate = function invalidate() {
               return (this._initted = this._act = 0), (this._zTime = -V), this;
            }),
            (It.isActive = function isActive() {
               var t,
                  e = this.parent || this._dp,
                  r = this._start;
               return !(
                  e &&
                  !(
                     this._ts &&
                     this._initted &&
                     e.isActive() &&
                     (t = e.rawTime(!0)) >= r &&
                     t < this.endTime(!0) - V
                  )
               );
            }),
            (It.eventCallback = function eventCallback(t, e, r) {
               var i = this.vars;
               return 1 < arguments.length
                  ? (e
                       ? ((i[t] = e),
                         r && (i[t + "Params"] = r),
                         "onUpdate" === t && (this._onUpdate = e))
                       : delete i[t],
                    this)
                  : i[t];
            }),
            (It.then = function then(t) {
               var i = this;
               return new Promise(function (e) {
                  function Un() {
                     var t = i.then;
                     (i.then = null),
                        p(r) &&
                           (r = r(i)) &&
                           (r.then || r === i) &&
                           (i.then = t),
                        e(r),
                        (i.then = t);
                  }
                  var r = p(t) ? t : ja;
                  (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
                  (!i._tTime && i._ts < 0)
                     ? Un()
                     : (i._prom = Un);
               });
            }),
            (It.kill = function kill() {
               mb(this);
            }),
            Animation);
      function Animation(t) {
         (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
               ((this._rDelay = t.repeatDelay || 0),
               (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Ka(this, +t.duration, 1, 1),
            (this.data = t.data),
            c || Dt.wake();
      }
      ka(Nt.prototype, {
         _time: 0,
         _start: 0,
         _end: 0,
         _tTime: 0,
         _tDur: 0,
         _dirty: 0,
         _repeat: 0,
         _yoyo: !1,
         parent: null,
         _initted: !1,
         _rDelay: 0,
         _ts: 1,
         _dp: 0,
         ratio: 0,
         _zTime: -V,
         _prom: 0,
         _ps: !1,
         _rts: 1,
      });
      var Ut = (function (n) {
         function Timeline(e, r) {
            var i;
            return (
               void 0 === e && (e = {}),
               ((i = n.call(this, e) || this).labels = {}),
               (i.smoothChildTiming = !!e.smoothChildTiming),
               (i.autoRemoveChildren = !!e.autoRemoveChildren),
               (i._sort = t(e.sortChildren)),
               I && Da(e.parent || I, _assertThisInitialized(i), r),
               e.reversed && i.reverse(),
               e.paused && i.paused(!0),
               e.scrollTrigger &&
                  Ea(_assertThisInitialized(i), e.scrollTrigger),
               i
            );
         }
         _inheritsLoose(Timeline, n);
         var e = Timeline.prototype;
         return (
            (e.to = function to(t, e, r) {
               return Oa(0, arguments, this), this;
            }),
            (e.from = function from(t, e, r) {
               return Oa(1, arguments, this), this;
            }),
            (e.fromTo = function fromTo(t, e, r, i) {
               return Oa(2, arguments, this), this;
            }),
            (e.set = function set(t, e, r) {
               return (
                  (e.duration = 0),
                  (e.parent = this),
                  pa(e).repeatDelay || (e.repeat = 0),
                  (e.immediateRender = !!e.immediateRender),
                  new $t(t, e, Tt(this, r), 1),
                  this
               );
            }),
            (e.call = function call(t, e, r) {
               return Da(this, $t.delayedCall(0, t, e), r);
            }),
            (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
               return (
                  (r.duration = e),
                  (r.stagger = r.stagger || i),
                  (r.onComplete = a),
                  (r.onCompleteParams = s),
                  (r.parent = this),
                  new $t(t, r, Tt(this, n)),
                  this
               );
            }),
            (e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
               return (
                  (i.runBackwards = 1),
                  (pa(i).immediateRender = t(i.immediateRender)),
                  this.staggerTo(e, r, i, n, a, s, o)
               );
            }),
            (e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
               return (
                  (n.startAt = i),
                  (pa(n).immediateRender = t(n.immediateRender)),
                  this.staggerTo(e, r, n, a, s, o, u)
               );
            }),
            (e.render = function render(t, e, r) {
               var i,
                  n,
                  a,
                  s,
                  o,
                  u,
                  h,
                  l,
                  f,
                  d,
                  _,
                  p,
                  c = this._time,
                  m = this._dirty ? this.totalDuration() : this._tDur,
                  g = this._dur,
                  v = t <= 0 ? 0 : da(t),
                  y = this._zTime < 0 != t < 0 && (this._initted || !g);
               if (
                  (this !== I && m < v && 0 <= t && (v = m),
                  v !== this._tTime || r || y)
               ) {
                  if (
                     (c !== this._time &&
                        g &&
                        ((v += this._time - c), (t += this._time - c)),
                     (i = v),
                     (f = this._start),
                     (u = !(l = this._ts)),
                     y &&
                        (g || (c = this._zTime),
                        (!t && e) || (this._zTime = t)),
                     this._repeat)
                  ) {
                     if (
                        ((_ = this._yoyo),
                        (o = g + this._rDelay),
                        this._repeat < -1 && t < 0)
                     )
                        return this.totalTime(100 * o + t, e, r);
                     if (
                        ((i = da(v % o)),
                        v === m
                           ? ((s = this._repeat), (i = g))
                           : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                             g < i && (i = g)),
                        (d = gt(this._tTime, o)),
                        !c && this._tTime && d !== s && (d = s),
                        _ && 1 & s && ((i = g - i), (p = 1)),
                        s !== d && !this._lock)
                     ) {
                        var T = _ && 1 & d,
                           b = T === (_ && 1 & s);
                        if (
                           (s < d && (T = !T),
                           (c = T ? 0 : g),
                           (this._lock = 1),
                           (this.render(
                              c || (p ? 0 : da(s * o)),
                              e,
                              !g
                           )._lock = 0),
                           (this._tTime = v),
                           !e && this.parent && Ot(this, "onRepeat"),
                           this.vars.repeatRefresh &&
                              !p &&
                              (this.invalidate()._lock = 1),
                           (c && c !== this._time) ||
                              u != !this._ts ||
                              (this.vars.onRepeat &&
                                 !this.parent &&
                                 !this._act))
                        )
                           return this;
                        if (
                           ((g = this._dur),
                           (m = this._tDur),
                           b &&
                              ((this._lock = 2),
                              (c = T ? g : -1e-4),
                              this.render(c, !0),
                              this.vars.repeatRefresh &&
                                 !p &&
                                 this.invalidate()),
                           (this._lock = 0),
                           !this._ts && !u)
                        )
                           return this;
                        Ib(this, p);
                     }
                  }
                  if (
                     (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        (h = (function _findNextPauseTween(t, e, r) {
                           var i;
                           if (e < r)
                              for (i = t._first; i && i._start <= r; ) {
                                 if ("isPause" === i.data && i._start > e)
                                    return i;
                                 i = i._next;
                              }
                           else
                              for (i = t._last; i && i._start >= r; ) {
                                 if ("isPause" === i.data && i._start < e)
                                    return i;
                                 i = i._prev;
                              }
                        })(this, da(c), da(i))) &&
                        (v -= i - (i = h._start)),
                     (this._tTime = v),
                     (this._time = i),
                     (this._act = !l),
                     this._initted ||
                        ((this._onUpdate = this.vars.onUpdate),
                        (this._initted = 1),
                        (this._zTime = t),
                        (c = 0)),
                     !c && i && !e && (Ot(this, "onStart"), this._tTime !== v))
                  )
                     return this;
                  if (c <= i && 0 <= t)
                     for (n = this._first; n; ) {
                        if (
                           ((a = n._next),
                           (n._act || i >= n._start) && n._ts && h !== n)
                        ) {
                           if (n.parent !== this) return this.render(t, e, r);
                           if (
                              (n.render(
                                 0 < n._ts
                                    ? (i - n._start) * n._ts
                                    : (n._dirty ? n.totalDuration() : n._tDur) +
                                         (i - n._start) * n._ts,
                                 e,
                                 r
                              ),
                              i !== this._time || (!this._ts && !u))
                           ) {
                              (h = 0), a && (v += this._zTime = -V);
                              break;
                           }
                        }
                        n = a;
                     }
                  else {
                     n = this._last;
                     for (var w = t < 0 ? t : i; n; ) {
                        if (
                           ((a = n._prev),
                           (n._act || w <= n._end) && n._ts && h !== n)
                        ) {
                           if (n.parent !== this) return this.render(t, e, r);
                           if (
                              (n.render(
                                 0 < n._ts
                                    ? (w - n._start) * n._ts
                                    : (n._dirty ? n.totalDuration() : n._tDur) +
                                         (w - n._start) * n._ts,
                                 e,
                                 r
                              ),
                              i !== this._time || (!this._ts && !u))
                           ) {
                              (h = 0), a && (v += this._zTime = w ? -V : V);
                              break;
                           }
                        }
                        n = a;
                     }
                  }
                  if (
                     h &&
                     !e &&
                     (this.pause(),
                     (h.render(c <= i ? 0 : -V)._zTime = c <= i ? 1 : -1),
                     this._ts)
                  )
                     return (this._start = f), Aa(this), this.render(t, e, r);
                  this._onUpdate && !e && Ot(this, "onUpdate", !0),
                     ((v === m && this._tTime >= this.totalDuration()) ||
                        (!v && c)) &&
                        ((f !== this._start &&
                           Math.abs(l) === Math.abs(this._ts)) ||
                           this._lock ||
                           ((!t && g) ||
                              !(
                                 (v === m && 0 < this._ts) ||
                                 (!v && this._ts < 0)
                              ) ||
                              ta(this, 1),
                           e ||
                              (t < 0 && !c) ||
                              (!v && !c && m) ||
                              (Ot(
                                 this,
                                 v === m && 0 <= t
                                    ? "onComplete"
                                    : "onReverseComplete",
                                 !0
                              ),
                              !this._prom ||
                                 (v < m && 0 < this.timeScale()) ||
                                 this._prom())));
               }
               return this;
            }),
            (e.add = function add(t, e) {
               var r = this;
               if ((q(e) || (e = Tt(this, e, t)), !(t instanceof Nt))) {
                  if (J(t))
                     return (
                        t.forEach(function (t) {
                           return r.add(t, e);
                        }),
                        this
                     );
                  if (o(t)) return this.addLabel(t, e);
                  if (!p(t)) return this;
                  t = $t.delayedCall(0, t);
               }
               return this !== t ? Da(this, t, e) : this;
            }),
            (e.getChildren = function getChildren(t, e, r, i) {
               void 0 === t && (t = !0),
                  void 0 === e && (e = !0),
                  void 0 === r && (r = !0),
                  void 0 === i && (i = -Y);
               for (var n = [], a = this._first; a; )
                  a._start >= i &&
                     (a instanceof $t
                        ? e && n.push(a)
                        : (r && n.push(a),
                          t && n.push.apply(n, a.getChildren(!0, e, r)))),
                     (a = a._next);
               return n;
            }),
            (e.getById = function getById(t) {
               for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                  if (e[r].vars.id === t) return e[r];
            }),
            (e.remove = function remove(t) {
               return o(t)
                  ? this.removeLabel(t)
                  : p(t)
                  ? this.killTweensOf(t)
                  : (sa(this, t),
                    t === this._recent && (this._recent = this._last),
                    ua(this));
            }),
            (e.totalTime = function totalTime(t, e) {
               return arguments.length
                  ? ((this._forcing = 1),
                    !this._dp &&
                       this._ts &&
                       (this._start = da(
                          Dt.time -
                             (0 < this._ts
                                ? t / this._ts
                                : (this.totalDuration() - t) / -this._ts)
                       )),
                    n.prototype.totalTime.call(this, t, e),
                    (this._forcing = 0),
                    this)
                  : this._tTime;
            }),
            (e.addLabel = function addLabel(t, e) {
               return (this.labels[t] = Tt(this, e)), this;
            }),
            (e.removeLabel = function removeLabel(t) {
               return delete this.labels[t], this;
            }),
            (e.addPause = function addPause(t, e, r) {
               var i = $t.delayedCall(0, e || Q, r);
               return (
                  (i.data = "isPause"),
                  (this._hasPause = 1),
                  Da(this, i, Tt(this, t))
               );
            }),
            (e.removePause = function removePause(t) {
               var e = this._first;
               for (t = Tt(this, t); e; )
                  e._start === t && "isPause" === e.data && ta(e),
                     (e = e._next);
            }),
            (e.killTweensOf = function killTweensOf(t, e, r) {
               for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                  Yt !== i[n] && i[n].kill(t, e);
               return this;
            }),
            (e.getTweensOf = function getTweensOf(t, e) {
               for (var r, i = [], n = xt(t), a = this._first, s = q(e); a; )
                  a instanceof $t
                     ? fa(a._targets, n) &&
                       (s
                          ? (!Yt || (a._initted && a._ts)) &&
                            a.globalTime(0) <= e &&
                            a.globalTime(a.totalDuration()) > e
                          : !e || a.isActive()) &&
                       i.push(a)
                     : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
                     (a = a._next);
               return i;
            }),
            (e.tweenTo = function tweenTo(t, e) {
               e = e || {};
               var r,
                  i = this,
                  n = Tt(i, t),
                  a = e.startAt,
                  s = e.onStart,
                  o = e.onStartParams,
                  u = e.immediateRender,
                  h = $t.to(
                     i,
                     ka(
                        {
                           ease: e.ease || "none",
                           lazy: !1,
                           immediateRender: !1,
                           time: n,
                           overwrite: "auto",
                           duration:
                              e.duration ||
                              Math.abs(
                                 (n - (a && "time" in a ? a.time : i._time)) /
                                    i.timeScale()
                              ) ||
                              V,
                           onStart: function onStart() {
                              if ((i.pause(), !r)) {
                                 var t =
                                    e.duration ||
                                    Math.abs(
                                       (n -
                                          (a && "time" in a
                                             ? a.time
                                             : i._time)) /
                                          i.timeScale()
                                    );
                                 h._dur !== t &&
                                    Ka(h, t, 0, 1).render(h._time, !0, !0),
                                    (r = 1);
                              }
                              s && s.apply(h, o || []);
                           },
                        },
                        e
                     )
                  );
               return u ? h.render(0) : h;
            }),
            (e.tweenFromTo = function tweenFromTo(t, e, r) {
               return this.tweenTo(
                  e,
                  ka({ startAt: { time: Tt(this, t) } }, r)
               );
            }),
            (e.recent = function recent() {
               return this._recent;
            }),
            (e.nextLabel = function nextLabel(t) {
               return void 0 === t && (t = this._time), kb(this, Tt(this, t));
            }),
            (e.previousLabel = function previousLabel(t) {
               return (
                  void 0 === t && (t = this._time), kb(this, Tt(this, t), 1)
               );
            }),
            (e.currentLabel = function currentLabel(t) {
               return arguments.length
                  ? this.seek(t, !0)
                  : this.previousLabel(this._time + V);
            }),
            (e.shiftChildren = function shiftChildren(t, e, r) {
               void 0 === r && (r = 0);
               for (var i, n = this._first, a = this.labels; n; )
                  n._start >= r && ((n._start += t), (n._end += t)),
                     (n = n._next);
               if (e) for (i in a) a[i] >= r && (a[i] += t);
               return ua(this);
            }),
            (e.invalidate = function invalidate() {
               var t = this._first;
               for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
               return n.prototype.invalidate.call(this);
            }),
            (e.clear = function clear(t) {
               void 0 === t && (t = !0);
               for (var e, r = this._first; r; )
                  (e = r._next), this.remove(r), (r = e);
               return (
                  this._dp && (this._time = this._tTime = this._pTime = 0),
                  t && (this.labels = {}),
                  ua(this)
               );
            }),
            (e.totalDuration = function totalDuration(t) {
               var e,
                  r,
                  i,
                  n = 0,
                  a = this,
                  s = a._last,
                  o = Y;
               if (arguments.length)
                  return a.timeScale(
                     (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                        (a.reversed() ? -t : t)
                  );
               if (a._dirty) {
                  for (i = a.parent; s; )
                     (e = s._prev),
                        s._dirty && s.totalDuration(),
                        o < (r = s._start) && a._sort && s._ts && !a._lock
                           ? ((a._lock = 1),
                             (Da(a, s, r - s._delay, 1)._lock = 0))
                           : (o = r),
                        r < 0 &&
                           s._ts &&
                           ((n -= r),
                           ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                              ((a._start += r / a._ts),
                              (a._time -= r),
                              (a._tTime -= r)),
                           a.shiftChildren(-r, !1, -Infinity),
                           (o = 0)),
                        s._end > n && s._ts && (n = s._end),
                        (s = e);
                  Ka(a, a === I && a._time > n ? a._time : n, 1, 1),
                     (a._dirty = 0);
               }
               return a._tDur;
            }),
            (Timeline.updateRoot = function updateRoot(t) {
               if (
                  (I._ts && (ha(I, za(t, I)), (f = Dt.frame)), Dt.frame >= _t)
               ) {
                  _t += U.autoSleep || 120;
                  var e = I._first;
                  if (
                     (!e || !e._ts) &&
                     U.autoSleep &&
                     Dt._listeners.length < 2
                  ) {
                     for (; e && !e._ts; ) e = e._next;
                     e || Dt.sleep();
                  }
               }
            }),
            Timeline
         );
      })(Nt);
      ka(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      function Ub(t, e, r, i, n, a) {
         var u, h, l, f;
         if (
            ft[t] &&
            !1 !==
               (u = new ft[t]()).init(
                  n,
                  u.rawVars
                     ? e[t]
                     : (function _processVars(t, e, r, i, n) {
                          if (
                             (p(t) && (t = Qt(t, n, e, r, i)),
                             !s(t) || (t.style && t.nodeType) || J(t) || H(t))
                          )
                             return o(t) ? Qt(t, n, e, r, i) : t;
                          var a,
                             u = {};
                          for (a in t) u[a] = Qt(t[a], n, e, r, i);
                          return u;
                       })(e[t], i, n, a, r),
                  r,
                  i,
                  a
               ) &&
            ((r._pt = h =
               new oe(r._pt, n, t, 0, 1, u.render, u, 0, u.priority)),
            r !== d)
         )
            for (
               l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length;
               f--;

            )
               l[u._props[f]] = h;
         return u;
      }
      function $b(t, r, e, i) {
         var n,
            a,
            s = r.ease || i || "power1.inOut";
         if (J(r))
            (a = e[t] || (e[t] = [])),
               r.forEach(function (t, e) {
                  return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
               });
         else
            for (n in r)
               (a = e[n] || (e[n] = [])),
                  "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
      }
      var Yt,
         qt,
         Vt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
            p(i) && (i = i(n || 0, t, a));
            var l,
               f = t[e],
               d =
                  "get" !== r
                     ? r
                     : p(f)
                     ? h
                        ? t[
                             e.indexOf("set") || !p(t["get" + e.substr(3)])
                                ? e
                                : "get" + e.substr(3)
                          ](h)
                        : t[e]()
                     : f,
               _ = p(f) ? (h ? Zt : Wt) : Gt;
            if (
               (o(i) &&
                  (~i.indexOf("random(") && (i = hb(i)),
                  "=" === i.charAt(1) &&
                     ((!(l = ea(d, i) + (Ra(d) || 0)) && 0 !== l) || (i = l))),
               d !== i || qt)
            )
               return isNaN(d * i) || "" === i
                  ? (f || e in t || N(e, i),
                    function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                       var o,
                          u,
                          h,
                          l,
                          f,
                          d,
                          _,
                          p,
                          c = new oe(this._pt, t, e, 0, 1, ee, null, n),
                          m = 0,
                          g = 0;
                       for (
                          c.b = r,
                             c.e = i,
                             r += "",
                             (_ = ~(i += "").indexOf("random(")) && (i = hb(i)),
                             a &&
                                (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                             u = r.match(it) || [];
                          (o = it.exec(i));

                       )
                          (l = o[0]),
                             (f = i.substring(m, o.index)),
                             h
                                ? (h = (h + 1) % 5)
                                : "rgba(" === f.substr(-5) && (h = 1),
                             l !== u[g++] &&
                                ((d = parseFloat(u[g - 1]) || 0),
                                (c._pt = {
                                   _next: c._pt,
                                   p: f || 1 === g ? f : ",",
                                   s: d,
                                   c:
                                      "=" === l.charAt(1)
                                         ? ea(d, l) - d
                                         : parseFloat(l) - d,
                                   m: h && h < 4 ? Math.round : 0,
                                }),
                                (m = it.lastIndex));
                       return (
                          (c.c = m < i.length ? i.substring(m, i.length) : ""),
                          (c.fp = s),
                          (nt.test(i) || _) && (c.e = 0),
                          (this._pt = c)
                       );
                    }.call(this, t, e, d, i, _, u || U.stringFilter, h))
                  : ((l = new oe(
                       this._pt,
                       t,
                       e,
                       +d || 0,
                       i - (d || 0),
                       "boolean" == typeof f ? te : Jt,
                       0,
                       _
                    )),
                    h && (l.fp = h),
                    s && l.modifier(s, this, t),
                    (this._pt = l));
         },
         Xt = function _initTween(e, r) {
            var i,
               n,
               a,
               s,
               o,
               u,
               h,
               l,
               f,
               d,
               p,
               c,
               m,
               g = e.vars,
               v = g.ease,
               y = g.startAt,
               T = g.immediateRender,
               b = g.lazy,
               w = g.onUpdate,
               x = g.onUpdateParams,
               k = g.callbackScope,
               O = g.runBackwards,
               P = g.yoyoEase,
               M = g.keyframes,
               C = g.autoRevert,
               A = e._dur,
               D = e._startAt,
               S = e._targets,
               z = e.parent,
               R = z && "nested" === z.data ? z.parent._targets : S,
               E = "auto" === e._overwrite && !B,
               F = e.timeline;
            if (
               (!F || (M && v) || (v = "none"),
               (e._ease = Bt(v, L.ease)),
               (e._yEase = P ? Ft(Bt(!0 === P ? v : P, L.ease)) : 0),
               P &&
                  e._yoyo &&
                  !e._repeat &&
                  ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
               (e._from = !F && !!g.runBackwards),
               !F || (M && !g.stagger))
            ) {
               if (
                  ((c = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop]),
                  (i = oa(g, ut)),
                  D && (ta(D.render(-1, !0)), (D._lazy = 0)),
                  y)
               )
                  if (
                     (ta(
                        (e._startAt = $t.set(
                           S,
                           ka(
                              {
                                 data: "isStart",
                                 overwrite: !1,
                                 parent: z,
                                 immediateRender: !0,
                                 lazy: t(b),
                                 startAt: null,
                                 delay: 0,
                                 onUpdate: w,
                                 onUpdateParams: x,
                                 callbackScope: k,
                                 stagger: 0,
                              },
                              y
                           )
                        ))
                     ),
                     r < 0 && !T && !C && e._startAt.render(-1, !0),
                     T)
                  ) {
                     if ((0 < r && !C && (e._startAt = 0), A && r <= 0))
                        return void (r && (e._zTime = r));
                  } else !1 === C && (e._startAt = 0);
               else if (O && A)
                  if (D) C || (e._startAt = 0);
                  else if (
                     (r && (T = !1),
                     (a = ka(
                        {
                           overwrite: !1,
                           data: "isFromStart",
                           lazy: T && t(b),
                           immediateRender: T,
                           stagger: 0,
                           parent: z,
                        },
                        i
                     )),
                     c && (a[l.prop] = c),
                     ta((e._startAt = $t.set(S, a))),
                     r < 0 && e._startAt.render(-1, !0),
                     (e._zTime = r),
                     T)
                  ) {
                     if (!r) return;
                  } else _initTween(e._startAt, V);
               for (
                  e._pt = e._ptCache = 0, b = (A && t(b)) || (b && !A), n = 0;
                  n < S.length;
                  n++
               ) {
                  if (
                     ((h = (o = S[n])._gsap || $(S)[n]._gsap),
                     (e._ptLookup[n] = d = {}),
                     lt[h.id] && ht.length && ga(),
                     (p = R === S ? n : R.indexOf(o)),
                     l &&
                        !1 !== (f = new l()).init(o, c || i, e, p, R) &&
                        ((e._pt = s =
                           new oe(
                              e._pt,
                              o,
                              f.name,
                              0,
                              1,
                              f.render,
                              f,
                              0,
                              f.priority
                           )),
                        f._props.forEach(function (t) {
                           d[t] = s;
                        }),
                        f.priority && (u = 1)),
                     !l || c)
                  )
                     for (a in i)
                        ft[a] && (f = Ub(a, i, e, p, o, R))
                           ? f.priority && (u = 1)
                           : (d[a] = s =
                                Vt.call(
                                   e,
                                   o,
                                   a,
                                   "get",
                                   i[a],
                                   p,
                                   R,
                                   0,
                                   g.stringFilter
                                ));
                  e._op && e._op[n] && e.kill(o, e._op[n]),
                     E &&
                        e._pt &&
                        ((Yt = e),
                        I.killTweensOf(o, d, e.globalTime(r)),
                        (m = !e.parent),
                        (Yt = 0)),
                     e._pt && b && (lt[h.id] = 1);
               }
               u && se(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = w),
               (e._initted = (!e._op || e._pt) && !m),
               M && r <= 0 && F.render(Y, !0, !0);
         },
         Qt = function _parseFuncOrString(t, e, r, i, n) {
            return p(t)
               ? t.call(e, r, i, n)
               : o(t) && ~t.indexOf("random(")
               ? hb(t)
               : t;
         },
         jt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
         Kt = {};
      ba(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
         return (Kt[t] = 1);
      });
      var $t = (function (R) {
         function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && ((i.duration = r), (r = i), (i = null));
            var o,
               u,
               h,
               l,
               f,
               d,
               _,
               p,
               c = (a = R.call(this, n ? r : pa(r)) || this).vars,
               m = c.duration,
               g = c.delay,
               y = c.immediateRender,
               T = c.stagger,
               b = c.overwrite,
               w = c.keyframes,
               x = c.defaults,
               k = c.scrollTrigger,
               P = c.yoyoEase,
               M = r.parent || I,
               C = (J(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);
            if (
               ((a._targets = C.length
                  ? $(C)
                  : O(
                       "GSAP target " + e + " not found. https://greensock.com",
                       !U.nullTargetWarn
                    ) || []),
               (a._ptLookup = []),
               (a._overwrite = b),
               w || T || v(m) || v(g))
            ) {
               if (
                  ((r = a.vars),
                  (o = a.timeline =
                     new Ut({ data: "nested", defaults: x || {} })).kill(),
                  (o.parent = o._dp = _assertThisInitialized(a)),
                  (o._start = 0),
                  T || v(m) || v(g))
               ) {
                  if (((l = C.length), (_ = T && Za(T)), s(T)))
                     for (f in T) ~jt.indexOf(f) && ((p = p || {})[f] = T[f]);
                  for (u = 0; u < l; u++)
                     ((h = oa(r, Kt)).stagger = 0),
                        P && (h.yoyoEase = P),
                        p && mt(h, p),
                        (d = C[u]),
                        (h.duration = +Qt(
                           m,
                           _assertThisInitialized(a),
                           u,
                           d,
                           C
                        )),
                        (h.delay =
                           (+Qt(g, _assertThisInitialized(a), u, d, C) || 0) -
                           a._delay),
                        !T &&
                           1 === l &&
                           h.delay &&
                           ((a._delay = g = h.delay),
                           (a._start += g),
                           (h.delay = 0)),
                        o.to(d, h, _ ? _(u, d, C) : 0),
                        (o._ease = zt.none);
                  o.duration() ? (m = g = 0) : (a.timeline = 0);
               } else if (w) {
                  pa(ka(o.vars.defaults, { ease: "none" })),
                     (o._ease = Bt(w.ease || r.ease || "none"));
                  var A,
                     D,
                     S,
                     z = 0;
                  if (J(w))
                     w.forEach(function (t) {
                        return o.to(C, t, ">");
                     });
                  else {
                     for (f in ((h = {}), w))
                        "ease" === f ||
                           "easeEach" === f ||
                           $b(f, w[f], h, w.easeEach);
                     for (f in h)
                        for (
                           A = h[f].sort(function (t, e) {
                              return t.t - e.t;
                           }),
                              u = z = 0;
                           u < A.length;
                           u++
                        )
                           ((S = {
                              ease: (D = A[u]).e,
                              duration:
                                 ((D.t - (u ? A[u - 1].t : 0)) / 100) * m,
                           })[f] = D.v),
                              o.to(C, S, z),
                              (z += S.duration);
                     o.duration() < m &&
                        o.to({}, { duration: m - o.duration() });
                  }
               }
               m || a.duration((m = o.duration()));
            } else a.timeline = 0;
            return (
               !0 !== b ||
                  B ||
                  ((Yt = _assertThisInitialized(a)),
                  I.killTweensOf(C),
                  (Yt = 0)),
               Da(M, _assertThisInitialized(a), i),
               r.reversed && a.reverse(),
               r.paused && a.paused(!0),
               (y ||
                  (!m &&
                     !w &&
                     a._start === da(M._time) &&
                     t(y) &&
                     (function _hasNoPausedAncestors(t) {
                        return !t || (t._ts && _hasNoPausedAncestors(t.parent));
                     })(_assertThisInitialized(a)) &&
                     "nested" !== M.data)) &&
                  ((a._tTime = -V), a.render(Math.max(0, -g))),
               k && Ea(_assertThisInitialized(a), k),
               a
            );
         }
         _inheritsLoose(Tween, R);
         var e = Tween.prototype;
         return (
            (e.render = function render(t, e, r) {
               var i,
                  n,
                  a,
                  s,
                  o,
                  u,
                  h,
                  l,
                  f,
                  d = this._time,
                  _ = this._tDur,
                  p = this._dur,
                  c = _ - V < t && 0 <= t ? _ : t < V ? 0 : t;
               if (p) {
                  if (
                     c !== this._tTime ||
                     !t ||
                     r ||
                     (!this._initted && this._tTime) ||
                     (this._startAt && this._zTime < 0 != t < 0)
                  ) {
                     if (((i = c), (l = this.timeline), this._repeat)) {
                        if (
                           ((s = p + this._rDelay), this._repeat < -1 && t < 0)
                        )
                           return this.totalTime(100 * s + t, e, r);
                        if (
                           ((i = da(c % s)),
                           c === _
                              ? ((a = this._repeat), (i = p))
                              : ((a = ~~(c / s)) &&
                                   a === c / s &&
                                   ((i = p), a--),
                                p < i && (i = p)),
                           (u = this._yoyo && 1 & a) &&
                              ((f = this._yEase), (i = p - i)),
                           (o = gt(this._tTime, s)),
                           i === d && !r && this._initted)
                        )
                           return (this._tTime = c), this;
                        a !== o &&
                           (l && this._yEase && Ib(l, u),
                           !this.vars.repeatRefresh ||
                              u ||
                              this._lock ||
                              ((this._lock = r = 1),
                              (this.render(
                                 da(s * a),
                                 !0
                              ).invalidate()._lock = 0)));
                     }
                     if (!this._initted) {
                        if (Fa(this, t < 0 ? t : i, r, e))
                           return (this._tTime = 0), this;
                        if (d !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r);
                     }
                     if (
                        ((this._tTime = c),
                        (this._time = i),
                        !this._act &&
                           this._ts &&
                           ((this._act = 1), (this._lazy = 0)),
                        (this.ratio = h = (f || this._ease)(i / p)),
                        this._from && (this.ratio = h = 1 - h),
                        i &&
                           !d &&
                           !e &&
                           (Ot(this, "onStart"), this._tTime !== c))
                     )
                        return this;
                     for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                     (l &&
                        l.render(
                           t < 0
                              ? t
                              : !i && u
                              ? -V
                              : l._dur * l._ease(i / this._dur),
                           e,
                           r
                        )) ||
                        (this._startAt && (this._zTime = t)),
                        this._onUpdate &&
                           !e &&
                           (t < 0 &&
                              this._startAt &&
                              this._startAt.render(t, !0, r),
                           Ot(this, "onUpdate")),
                        this._repeat &&
                           a !== o &&
                           this.vars.onRepeat &&
                           !e &&
                           this.parent &&
                           Ot(this, "onRepeat"),
                        (c !== this._tDur && c) ||
                           this._tTime !== c ||
                           (t < 0 &&
                              this._startAt &&
                              !this._onUpdate &&
                              this._startAt.render(t, !0, !0),
                           (!t && p) ||
                              !(
                                 (c === this._tDur && 0 < this._ts) ||
                                 (!c && this._ts < 0)
                              ) ||
                              ta(this, 1),
                           e ||
                              (t < 0 && !d) ||
                              (!c && !d) ||
                              (Ot(
                                 this,
                                 c === _ ? "onComplete" : "onReverseComplete",
                                 !0
                              ),
                              !this._prom ||
                                 (c < _ && 0 < this.timeScale()) ||
                                 this._prom()));
                  }
               } else
                  !(function _renderZeroDurationTween(t, e, r, i) {
                     var n,
                        a,
                        s,
                        o = t.ratio,
                        u =
                           e < 0 ||
                           (!e &&
                              ((!t._start &&
                                 (function _parentPlayheadIsBeforeStart(t) {
                                    var e = t.parent;
                                    return (
                                       e &&
                                       e._ts &&
                                       e._initted &&
                                       !e._lock &&
                                       (e.rawTime() < 0 ||
                                          _parentPlayheadIsBeforeStart(e))
                                    );
                                 })(t) &&
                                 (t._initted || !vt(t))) ||
                                 ((t._ts < 0 || t._dp._ts < 0) && !vt(t))))
                              ? 0
                              : 1,
                        h = t._rDelay,
                        l = 0;
                     if (
                        (h &&
                           t._repeat &&
                           ((l = bt(0, t._tDur, e)),
                           (a = gt(l, h)),
                           t._yoyo && 1 & a && (u = 1 - u),
                           a !== gt(t._tTime, h) &&
                              ((o = 1 - u),
                              t.vars.repeatRefresh &&
                                 t._initted &&
                                 t.invalidate())),
                        u !== o || i || t._zTime === V || (!e && t._zTime))
                     ) {
                        if (!t._initted && Fa(t, e, i, r)) return;
                        for (
                           s = t._zTime,
                              t._zTime = e || (r ? V : 0),
                              r = r || (e && !s),
                              t.ratio = u,
                              t._from && (u = 1 - u),
                              t._time = 0,
                              t._tTime = l,
                              n = t._pt;
                           n;

                        )
                           n.r(u, n.d), (n = n._next);
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                           t._onUpdate && !r && Ot(t, "onUpdate"),
                           l &&
                              t._repeat &&
                              !r &&
                              t.parent &&
                              Ot(t, "onRepeat"),
                           (e >= t._tDur || e < 0) &&
                              t.ratio === u &&
                              (u && ta(t, 1),
                              r ||
                                 (Ot(
                                    t,
                                    u ? "onComplete" : "onReverseComplete",
                                    !0
                                 ),
                                 t._prom && t._prom()));
                     } else t._zTime || (t._zTime = e);
                  })(this, t, e, r);
               return this;
            }),
            (e.targets = function targets() {
               return this._targets;
            }),
            (e.invalidate = function invalidate() {
               return (
                  (this._pt =
                     this._op =
                     this._startAt =
                     this._onUpdate =
                     this._lazy =
                     this.ratio =
                        0),
                  (this._ptLookup = []),
                  this.timeline && this.timeline.invalidate(),
                  R.prototype.invalidate.call(this)
               );
            }),
            (e.resetTo = function resetTo(t, e, r, i) {
               c || Dt.wake(), this._ts || this.play();
               var n,
                  a = Math.min(
                     this._dur,
                     (this._dp._time - this._start) * this._ts
                  );
               return (
                  this._initted || Xt(this, a),
                  (n = this._ease(a / this._dur)),
                  (function _updatePropTweens(t, e, r, i, n, a, s) {
                     var o,
                        u,
                        h,
                        l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                     if (!l)
                        for (
                           l = t._ptCache[e] = [],
                              u = t._ptLookup,
                              h = t._targets.length;
                           h--;

                        ) {
                           if ((o = u[h][e]) && o.d && o.d._pt)
                              for (o = o.d._pt; o && o.p !== e; ) o = o._next;
                           if (!o)
                              return (
                                 (qt = 1),
                                 (t.vars[e] = "+=0"),
                                 Xt(t, s),
                                 (qt = 0),
                                 1
                              );
                           l.push(o);
                        }
                     for (h = l.length; h--; )
                        ((o = l[h]).s =
                           (!i && 0 !== i) || n ? o.s + (i || 0) + a * o.c : i),
                           (o.c = r - o.s),
                           o.e && (o.e = ca(r) + Ra(o.e)),
                           o.b && (o.b = o.s + Ra(o.b));
                  })(this, t, e, r, i, n, a)
                     ? this.resetTo(t, e, r, i)
                     : (Ba(this, 0),
                       this.parent ||
                          ra(
                             this._dp,
                             this,
                             "_first",
                             "_last",
                             this._dp._sort ? "_start" : 0
                          ),
                       this.render(0))
               );
            }),
            (e.kill = function kill(t, e) {
               if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                  return (
                     (this._lazy = this._pt = 0), this.parent ? mb(this) : this
                  );
               if (this.timeline) {
                  var r = this.timeline.totalDuration();
                  return (
                     this.timeline.killTweensOf(
                        t,
                        e,
                        Yt && !0 !== Yt.vars.overwrite
                     )._first || mb(this),
                     this.parent &&
                        r !== this.timeline.totalDuration() &&
                        Ka(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                     this
                  );
               }
               var i,
                  n,
                  a,
                  s,
                  u,
                  h,
                  l,
                  f = this._targets,
                  d = t ? xt(t) : f,
                  p = this._ptLookup,
                  c = this._pt;
               if (
                  (!e || "all" === e) &&
                  (function _arraysMatch(t, e) {
                     for (
                        var r = t.length, i = r === e.length;
                        i && r-- && t[r] === e[r];

                     );
                     return r < 0;
                  })(f, d)
               )
                  return "all" === e && (this._pt = 0), mb(this);
               for (
                  i = this._op = this._op || [],
                     "all" !== e &&
                        (o(e) &&
                           ((u = {}),
                           ba(e, function (t) {
                              return (u[t] = 1);
                           }),
                           (e = u)),
                        (e = (function _addAliasesToVars(t, e) {
                           var r,
                              i,
                              n,
                              a,
                              s = t[0] ? _(t[0]).harness : 0,
                              o = s && s.aliases;
                           if (!o) return e;
                           for (i in ((r = mt({}, e)), o))
                              if ((i in r))
                                 for (n = (a = o[i].split(",")).length; n--; )
                                    r[a[n]] = r[i];
                           return r;
                        })(f, e))),
                     l = f.length;
                  l--;

               )
                  if (~d.indexOf(f[l]))
                     for (u in ((n = p[l]),
                     "all" === e
                        ? ((i[l] = e), (s = n), (a = {}))
                        : ((a = i[l] = i[l] || {}), (s = e)),
                     s))
                        (h = n && n[u]) &&
                           (("kill" in h.d && !0 !== h.d.kill(u)) ||
                              sa(this, h, "_pt"),
                           delete n[u]),
                           "all" !== a && (a[u] = 1);
               return this._initted && !this._pt && c && mb(this), this;
            }),
            (Tween.to = function to(t, e, r) {
               return new Tween(t, e, r);
            }),
            (Tween.from = function from(t, e) {
               return Oa(1, arguments);
            }),
            (Tween.delayedCall = function delayedCall(t, e, r, i) {
               return new Tween(e, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: t,
                  onComplete: e,
                  onReverseComplete: e,
                  onCompleteParams: r,
                  onReverseCompleteParams: r,
                  callbackScope: i,
               });
            }),
            (Tween.fromTo = function fromTo(t, e, r) {
               return Oa(2, arguments);
            }),
            (Tween.set = function set(t, e) {
               return (
                  (e.duration = 0),
                  e.repeatDelay || (e.repeat = 0),
                  new Tween(t, e)
               );
            }),
            (Tween.killTweensOf = function killTweensOf(t, e, r) {
               return I.killTweensOf(t, e, r);
            }),
            Tween
         );
      })(Nt);
      ka($t.prototype, {
         _targets: [],
         _lazy: 0,
         _startAt: 0,
         _op: 0,
         _onInit: 0,
      }),
         ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
            $t[r] = function () {
               var t = new Ut(),
                  e = wt.call(arguments, 0);
               return (
                  e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
                  t[r].apply(t, e)
               );
            };
         });
      function gc(t, e, r) {
         return t.setAttribute(e, r);
      }
      function oc(t, e, r, i) {
         i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
      }
      var Gt = function _setterPlain(t, e, r) {
            return (t[e] = r);
         },
         Wt = function _setterFunc(t, e, r) {
            return t[e](r);
         },
         Zt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r);
         },
         Ht = function _getSetter(t, e) {
            return p(t[e]) ? Wt : r(t[e]) && t.setAttribute ? gc : Gt;
         },
         Jt = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
         },
         te = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
         },
         ee = function _renderComplexString(t, e) {
            var r = e._pt,
               i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
               for (; r; )
                  (i =
                     r.p +
                     (r.m
                        ? r.m(r.s + r.c * t)
                        : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                     i),
                     (r = r._next);
               i += e.c;
            }
            e.set(e.t, e.p, i, e);
         },
         re = function _renderPropTweens(t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
         },
         ie = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a; )
               (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
         },
         ne = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i; )
               (r = i._next),
                  (i.p === t && !i.op) || i.op === t
                     ? sa(this, i, "_pt")
                     : i.dep || (e = 1),
                  (i = r);
            return !e;
         },
         se = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a; ) {
               for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
               (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
                  (a._next = r) ? (r._prev = a) : (n = a),
                  (a = e);
            }
            t._pt = i;
         },
         oe =
            ((PropTween.prototype.modifier = function modifier(t, e, r) {
               (this.mSet = this.mSet || this.set),
                  (this.set = oc),
                  (this.m = t),
                  (this.mt = r),
                  (this.tween = e);
            }),
            PropTween);
      function PropTween(t, e, r, i, n, a, s, o, u) {
         (this.t = e),
            (this.s = i),
            (this.c = n),
            (this.p = r),
            (this.r = a || Jt),
            (this.d = s || this),
            (this.set = o || Gt),
            (this.pr = u || 0),
            (this._next = t) && (t._prev = this);
      }
      ba(
         ct +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
         function (t) {
            return (ut[t] = 1);
         }
      ),
         (ot.TweenMax = ot.TweenLite = $t),
         (ot.TimelineLite = ot.TimelineMax = Ut),
         (I = new Ut({
            sortChildren: !1,
            defaults: L,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
         })),
         (U.stringFilter = xb);
      var ue = {
         registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
               e[r] = arguments[r];
            e.forEach(function (t) {
               return (function _createPlugin(t) {
                  var e = (t = (!t.name && t.default) || t).name,
                     r = p(t),
                     i =
                        e && !r && t.init
                           ? function () {
                                this._props = [];
                             }
                           : t,
                     n = {
                        init: Q,
                        render: re,
                        add: Vt,
                        kill: ne,
                        modifier: ie,
                        rawVars: 0,
                     },
                     a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ht,
                        aliases: {},
                        register: 0,
                     };
                  if ((St(), t !== i)) {
                     if (ft[e]) return;
                     ka(i, ka(oa(t, n), a)),
                        mt(i.prototype, mt(n, oa(t, a))),
                        (ft[(i.prop = e)] = i),
                        t.targetTest && (pt.push(i), (ut[e] = 1)),
                        (e =
                           ("css" === e
                              ? "CSS"
                              : e.charAt(0).toUpperCase() + e.substr(1)) +
                           "Plugin");
                  }
                  P(e, i), t.register && t.register(he, i, oe);
               })(t);
            });
         },
         timeline: function timeline(t) {
            return new Ut(t);
         },
         getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e);
         },
         getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get,
               a = e ? ja : ia;
            return (
               "native" === e && (e = ""),
               i
                  ? t
                     ? a(((ft[t] && ft[t].get) || n)(i, t, e, r))
                     : function (t, e, r) {
                          return a(((ft[t] && ft[t].get) || n)(i, t, e, r));
                       }
                  : i
            );
         },
         quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
               var n = r.map(function (t) {
                     return he.quickSetter(t, e, i);
                  }),
                  a = n.length;
               return function (t) {
                  for (var e = a; e--; ) n[e](t);
               };
            }
            r = r[0] || {};
            var s = ft[e],
               o = _(r),
               u = (o.harness && (o.harness.aliases || {})[e]) || e,
               h = s
                  ? function (t) {
                       var e = new s();
                       (d._pt = 0),
                          e.init(r, i ? t + i : t, d, 0, [r]),
                          e.render(1, e),
                          d._pt && re(1, d);
                    }
                  : o.set(r, u);
            return s
               ? h
               : function (t) {
                    return h(r, u, i ? t + i : t, o, 1);
                 };
         },
         quickTo: function quickTo(t, i, e) {
            function iw(t, e, r) {
               return n.resetTo(i, t, e, r);
            }
            var r,
               n = he.to(
                  t,
                  mt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {})
               );
            return (iw.tween = n), iw;
         },
         isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length;
         },
         defaults: function defaults(t) {
            return t && t.ease && (t.ease = Bt(t.ease, L.ease)), na(L, t || {});
         },
         config: function config(t) {
            return na(U, t || {});
         },
         registerEffect: function registerEffect(t) {
            var i = t.name,
               n = t.effect,
               e = t.plugins,
               a = t.defaults,
               r = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
               return (
                  t &&
                  !ft[t] &&
                  !ot[t] &&
                  O(i + " effect requires " + t + " plugin.")
               );
            }),
               (dt[i] = function (t, e, r) {
                  return n(xt(t), ka(e || {}, a), r);
               }),
               r &&
                  (Ut.prototype[i] = function (t, e, r) {
                     return this.add(
                        dt[i](t, s(e) ? e : (r = e) && {}, this),
                        r
                     );
                  });
         },
         registerEase: function registerEase(t, e) {
            zt[t] = Bt(e);
         },
         parseEase: function parseEase(t, e) {
            return arguments.length ? Bt(t, e) : zt;
         },
         getById: function getById(t) {
            return I.getById(t);
         },
         exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i,
               n,
               a = new Ut(e);
            for (
               a.smoothChildTiming = t(e.smoothChildTiming),
                  I.remove(a),
                  a._dp = 0,
                  a._time = a._tTime = I._time,
                  i = I._first;
               i;

            )
               (n = i._next),
                  (!r &&
                     !i._dur &&
                     i instanceof $t &&
                     i.vars.onComplete === i._targets[0]) ||
                     Da(a, i, i._start - i._delay),
                  (i = n);
            return Da(I, a, 0), a;
         },
         utils: {
            wrap: function wrap(e, t, r) {
               var i = t - e;
               return J(e)
                  ? eb(e, wrap(0, e.length), t)
                  : Pa(r, function (t) {
                       return ((i + ((t - e) % i)) % i) + e;
                    });
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
               var i = t - e,
                  n = 2 * i;
               return J(e)
                  ? eb(e, wrapYoyo(0, e.length - 1), t)
                  : Pa(r, function (t) {
                       return (
                          e +
                          (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t)
                       );
                    });
            },
            distribute: Za,
            random: ab,
            snap: _a,
            normalize: function normalize(t, e, r) {
               return kt(t, e, 0, 1, r);
            },
            getUnit: Ra,
            clamp: function clamp(e, r, t) {
               return Pa(t, function (t) {
                  return bt(e, r, t);
               });
            },
            splitColor: sb,
            toArray: xt,
            selector: function selector(r) {
               return (
                  (r = xt(r)[0] || O("Invalid scope") || {}),
                  function (t) {
                     var e = r.current || r.nativeElement || r;
                     return xt(
                        t,
                        e.querySelectorAll
                           ? e
                           : e === r
                           ? O("Invalid scope") || a.createElement("div")
                           : r
                     );
                  }
               );
            },
            mapRange: kt,
            pipe: function pipe() {
               for (
                  var t = arguments.length, e = new Array(t), r = 0;
                  r < t;
                  r++
               )
                  e[r] = arguments[r];
               return function (t) {
                  return e.reduce(function (t, e) {
                     return e(t);
                  }, t);
               };
            },
            unitize: function unitize(e, r) {
               return function (t) {
                  return e(parseFloat(t)) + (r || Ra(t));
               };
            },
            interpolate: function interpolate(e, r, t, i) {
               var n = isNaN(e + r)
                  ? 0
                  : function (t) {
                       return (1 - t) * e + t * r;
                    };
               if (!n) {
                  var a,
                     s,
                     u,
                     h,
                     l,
                     f = o(e),
                     d = {};
                  if ((!0 === t && (i = 1) && (t = null), f))
                     (e = { p: e }), (r = { p: r });
                  else if (J(e) && !J(r)) {
                     for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++)
                        u.push(interpolate(e[s - 1], e[s]));
                     h--,
                        (n = function func(t) {
                           t *= h;
                           var e = Math.min(l, ~~t);
                           return u[e](t - e);
                        }),
                        (t = r);
                  } else i || (e = mt(J(e) ? [] : {}, e));
                  if (!u) {
                     for (a in r) Vt.call(d, e, a, "get", r[a]);
                     n = function func(t) {
                        return re(t, d) || (f ? e.p : e);
                     };
                  }
               }
               return Pa(t, n);
            },
            shuffle: Ya,
         },
         install: M,
         effects: dt,
         ticker: Dt,
         updateRoot: Ut.updateRoot,
         plugins: ft,
         globalTimeline: I,
         core: {
            PropTween: oe,
            globals: P,
            Tween: $t,
            Timeline: Ut,
            Animation: Nt,
            getCache: _,
            _removeLinkedListItem: sa,
            suppressOverwrites: function suppressOverwrites(t) {
               return (B = t);
            },
         },
      };
      ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
         return (ue[t] = $t[t]);
      }),
         Dt.add(Ut.updateRoot),
         (d = ue.to({}, { duration: 0 }));
      function sc(t, e) {
         for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
         return r;
      }
      function uc(t, n) {
         return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
               e._onInit = function (t) {
                  var e, r;
                  if (
                     (o(i) &&
                        ((e = {}),
                        ba(i, function (t) {
                           return (e[t] = 1);
                        }),
                        (i = e)),
                     n)
                  ) {
                     for (r in ((e = {}), i)) e[r] = n(i[r]);
                     i = e;
                  }
                  !(function _addModifiers(t, e) {
                     var r,
                        i,
                        n,
                        a = t._targets;
                     for (r in e)
                        for (i = a.length; i--; )
                           (n = (n = t._ptLookup[i][r]) && n.d) &&
                              (n._pt && (n = sc(n, r)),
                              n && n.modifier && n.modifier(e[r], t, a[i], r));
                  })(t, i);
               };
            },
         };
      }
      var he =
         ue.registerPlugin(
            {
               name: "attr",
               init: function init(t, e, r, i, n) {
                  var a, s;
                  for (a in e)
                     (s = this.add(
                        t,
                        "setAttribute",
                        (t.getAttribute(a) || 0) + "",
                        e[a],
                        i,
                        n,
                        0,
                        0,
                        a
                     )) && (s.op = a),
                        this._props.push(a);
               },
            },
            {
               name: "endArray",
               init: function init(t, e) {
                  for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
               },
            },
            uc("roundProps", $a),
            uc("modifiers"),
            uc("snap", _a)
         ) || ue;
      ($t.version = Ut.version = he.version = "3.10.3"), (l = 1), u() && St();
      function dd(t, e) {
         return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
         );
      }
      function ed(t, e) {
         return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
         );
      }
      function fd(t, e) {
         return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
         );
      }
      function gd(t, e) {
         var r = e.s + e.c * t;
         e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      }
      function hd(t, e) {
         return e.set(e.t, e.p, t ? e.e : e.b, e);
      }
      function id(t, e) {
         return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      }
      function jd(t, e, r) {
         return (t.style[e] = r);
      }
      function kd(t, e, r) {
         return t.style.setProperty(e, r);
      }
      function ld(t, e, r) {
         return (t._gsap[e] = r);
      }
      function md(t, e, r) {
         return (t._gsap.scaleX = t._gsap.scaleY = r);
      }
      function nd(t, e, r, i, n) {
         var a = t._gsap;
         (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
      }
      function od(t, e, r, i, n) {
         var a = t._gsap;
         (a[e] = r), a.renderTransform(n, a);
      }
      function sd(t, e) {
         var r = fe.createElementNS
            ? fe.createElementNS(
                 (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                 ),
                 t
              )
            : fe.createElement(t);
         return r.style ? r : fe.createElement(t);
      }
      function td(t, e, r) {
         var i = getComputedStyle(t);
         return (
            i[e] ||
            i.getPropertyValue(e.replace(Ne, "-$1").toLowerCase()) ||
            i.getPropertyValue(e) ||
            (!r && td(t, je(e) || e, 1)) ||
            ""
         );
      }
      function wd() {
         (function _windowExists() {
            return "undefined" != typeof window;
         })() &&
            window.document &&
            ((le = window),
            (fe = le.document),
            (de = fe.documentElement),
            (pe = sd("div") || { style: {} }),
            sd("div"),
            (Ve = je(Ve)),
            (Xe = Ve + "Origin"),
            (pe.style.cssText =
               "border-width:0;line-height:0;position:absolute;padding:0"),
            (me = !!je("perspective")),
            (_e = 1));
      }
      function xd(t) {
         var e,
            r = sd(
               "svg",
               (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
         if (
            (de.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            t)
         )
            try {
               (e = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = xd);
            } catch (t) {}
         else this._gsapBBox && (e = this._gsapBBox());
         return (
            i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
            de.removeChild(r),
            (this.style.cssText = a),
            e
         );
      }
      function yd(t, e) {
         for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      }
      function zd(e) {
         var r;
         try {
            r = e.getBBox();
         } catch (t) {
            r = xd.call(e, !0);
         }
         return (
            (r && (r.width || r.height)) ||
               e.getBBox === xd ||
               (r = xd.call(e, !0)),
            !r || r.width || r.x || r.y
               ? r
               : {
                    x: +yd(e, ["x", "cx", "x1"]) || 0,
                    y: +yd(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                 }
         );
      }
      function Ad(t) {
         return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !zd(t));
      }
      function Bd(t, e) {
         if (e) {
            var r = t.style;
            e in Fe && e !== Xe && (e = Ve),
               r.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                       (e = "-" + e),
                    r.removeProperty(e.replace(Ne, "-$1").toLowerCase()))
                  : r.removeAttribute(e);
         }
      }
      function Cd(t, e, r, i, n, a) {
         var s = new oe(t._pt, e, r, 0, 1, a ? id : hd);
         return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
      }
      function Ed(t, e, r, i) {
         var n,
            a,
            s,
            o,
            u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = pe.style,
            f = Ue.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            c = "px" === i,
            m = "%" === i;
         return i === h || !u || Ke[i] || Ke[h]
            ? u
            : ("px" === h || c || (u = Ed(t, e, r, "px")),
              (o = t.getCTM && Ad(t)),
              (!m && "%" !== h) || (!Fe[e] && !~e.indexOf("adius"))
                 ? ((l[f ? "width" : "height"] = 100 + (c ? h : i)),
                   (a =
                      ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
                         ? t
                         : t.parentNode),
                   o && (a = (t.ownerSVGElement || {}).parentNode),
                   (a && a !== fe && a.appendChild) || (a = fe.body),
                   (s = a._gsap) && m && s.width && f && s.time === Dt.time
                      ? ca((u / s.width) * 100)
                      : ((!m && "%" !== h) || (l.position = td(t, "position")),
                        a === t && (l.position = "static"),
                        a.appendChild(pe),
                        (n = pe[p]),
                        a.removeChild(pe),
                        (l.position = "absolute"),
                        f &&
                           m &&
                           (((s = _(a)).time = Dt.time), (s.width = a[p])),
                        ca(c ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
                 : ((n = o ? t.getBBox()[f ? "width" : "height"] : t[p]),
                   ca(m ? (u / n) * 100 : (u / 100) * n)));
      }
      function Fd(t, e, r, i) {
         var n;
         return (
            _e || wd(),
            e in qe &&
               "transform" !== e &&
               ~(e = qe[e]).indexOf(",") &&
               (e = e.split(",")[0]),
            Fe[e] && "transform" !== e
               ? ((n = He(t, i)),
                 (n =
                    "transformOrigin" !== e
                       ? n[e]
                       : n.svg
                       ? n.origin
                       : Je(td(t, Xe)) + " " + n.zOrigin + "px"))
               : ((n = t.style[e]) &&
                    "auto" !== n &&
                    !i &&
                    !~(n + "").indexOf("calc(")) ||
                 (n =
                    (Ge[e] && Ge[e](t, e, r)) ||
                    td(t, e) ||
                    aa(t, e) ||
                    ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? Ed(t, e, n, r) + r : n
         );
      }
      function Gd(t, e, r, i) {
         if (!r || "none" === r) {
            var n = je(e, t, 1),
               a = n && td(t, n, 1);
            a && a !== r
               ? ((e = n), (r = a))
               : "borderColor" === e && (r = td(t, "borderTopColor"));
         }
         var s,
            o,
            u,
            h,
            l,
            f,
            d,
            _,
            p,
            c,
            m,
            g = new oe(this._pt, t.style, e, 0, 1, ee),
            v = 0,
            y = 0;
         if (
            ((g.b = r),
            (g.e = i),
            (r += ""),
            "auto" === (i += "") &&
               ((t.style[e] = i), (i = td(t, e) || i), (t.style[e] = r)),
            xb((s = [r, i])),
            (i = s[1]),
            (u = (r = s[0]).match(rt) || []),
            (i.match(rt) || []).length)
         ) {
            for (; (o = rt.exec(i)); )
               (d = o[0]),
                  (p = i.substring(v, o.index)),
                  l
                     ? (l = (l + 1) % 5)
                     : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                       (l = 1),
                  d !== (f = u[y++] || "") &&
                     ((h = parseFloat(f) || 0),
                     (m = f.substr((h + "").length)),
                     "=" === d.charAt(1) && (d = ea(h, d) + m),
                     (_ = parseFloat(d)),
                     (c = d.substr((_ + "").length)),
                     (v = rt.lastIndex - c.length),
                     c ||
                        ((c = c || U.units[e] || m),
                        v === i.length && ((i += c), (g.e += c))),
                     m !== c && (h = Ed(t, e, f, c) || 0),
                     (g._pt = {
                        _next: g._pt,
                        p: p || 1 === y ? p : ",",
                        s: h,
                        c: _ - h,
                        m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                     }));
            g.c = v < i.length ? i.substring(v, i.length) : "";
         } else g.r = "display" === e && "none" === i ? id : hd;
         return nt.test(i) && (g.e = 0), (this._pt = g);
      }
      function Id(t) {
         var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
         return (
            ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
               ((t = r), (r = i), (i = t)),
            (e[0] = $e[r] || r),
            (e[1] = $e[i] || i),
            e.join(" ")
         );
      }
      function Jd(t, e) {
         if (e.tween && e.tween._time === e.tween._dur) {
            var r,
               i,
               n,
               a = e.t,
               s = a.style,
               o = e.u,
               u = a._gsap;
            if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
            else
               for (n = (o = o.split(",")).length; -1 < --n; )
                  (r = o[n]),
                     Fe[r] &&
                        ((i = 1), (r = "transformOrigin" === r ? Xe : Ve)),
                     Bd(a, r);
            i &&
               (Bd(a, Ve),
               u &&
                  (u.svg && a.removeAttribute("transform"),
                  He(a, 1),
                  (u.uncache = 1)));
         }
      }
      function Nd(t) {
         return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      }
      function Od(t) {
         var e = td(t, Ve);
         return Nd(e) ? We : e.substr(7).match(et).map(ca);
      }
      function Pd(t, e) {
         var r,
            i,
            n,
            a,
            s = t._gsap || _(t),
            o = t.style,
            u = Od(t);
         return s.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                 (n = t.transform.baseVal.consolidate().matrix).a,
                 n.b,
                 n.c,
                 n.d,
                 n.e,
                 n.f,
              ]).join(",")
               ? We
               : u
            : (u !== We ||
                 t.offsetParent ||
                 t === de ||
                 s.svg ||
                 ((n = o.display),
                 (o.display = "block"),
                 ((r = t.parentNode) && t.offsetParent) ||
                    ((a = 1), (i = t.nextSibling), de.appendChild(t)),
                 (u = Od(t)),
                 n ? (o.display = n) : Bd(t, "display"),
                 a &&
                    (i
                       ? r.insertBefore(t, i)
                       : r
                       ? r.appendChild(t)
                       : de.removeChild(t))),
              e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      }
      function Qd(t, e, r, i, n, a) {
         var s,
            o,
            u,
            h = t._gsap,
            l = n || Pd(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            _ = h.xOffset || 0,
            p = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
         r
            ? l !== We &&
              (o = c * v - m * g) &&
              ((u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o),
              (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
              (x = u))
            : ((w =
                 (s = zd(t)).x +
                 (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
              (x =
                 s.y +
                 (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
            i || (!1 !== i && h.smooth)
               ? ((y = w - f),
                 (T = x - d),
                 (h.xOffset = _ + (y * c + T * g) - y),
                 (h.yOffset = p + (y * m + T * v) - T))
               : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = w),
            (h.yOrigin = x),
            (h.smooth = !!i),
            (h.origin = e),
            (h.originIsAbsolute = !!r),
            (t.style[Xe] = "0px 0px"),
            a &&
               (Cd(a, h, "xOrigin", f, w),
               Cd(a, h, "yOrigin", d, x),
               Cd(a, h, "xOffset", _, h.xOffset),
               Cd(a, h, "yOffset", p, h.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + x);
      }
      function Td(t, e, r) {
         var i = Ra(e);
         return ca(parseFloat(e) + parseFloat(Ed(t, "x", r + "px", i))) + i;
      }
      function $d(t, e, r, i, n) {
         var a,
            s,
            u = 360,
            h = o(n),
            l = parseFloat(n) * (h && ~n.indexOf("rad") ? Be : 1) - i,
            f = i + l + "deg";
         return (
            h &&
               ("short" === (a = n.split("_")[1]) &&
                  (l %= u) !== l % 180 &&
                  (l += l < 0 ? u : -u),
               "cw" === a && l < 0
                  ? (l = ((l + 36e9) % u) - ~~(l / u) * u)
                  : "ccw" === a &&
                    0 < l &&
                    (l = ((l - 36e9) % u) - ~~(l / u) * u)),
            (t._pt = s = new oe(t._pt, e, r, i, l, ed)),
            (s.e = f),
            (s.u = "deg"),
            t._props.push(r),
            s
         );
      }
      function _d(t, e) {
         for (var r in e) t[r] = e[r];
         return t;
      }
      function ae(t, e, r) {
         var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l = _d({}, r._gsap),
            f = r.style;
         for (n in (l.svg
            ? ((a = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[Ve] = e),
              (i = He(r, 1)),
              Bd(r, Ve),
              r.setAttribute("transform", a))
            : ((a = getComputedStyle(r)[Ve]),
              (f[Ve] = e),
              (i = He(r, 1)),
              (f[Ve] = a)),
         Fe))
            (a = l[n]) !== (s = i[n]) &&
               "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
               ((o = Ra(a) !== (h = Ra(s)) ? Ed(r, n, a, h) : parseFloat(a)),
               (u = parseFloat(s)),
               (t._pt = new oe(t._pt, i, n, o, u - o, dd)),
               (t._pt.u = h || 0),
               t._props.push(n));
         _d(i, l);
      }
      var le,
         fe,
         de,
         _e,
         pe,
         ce,
         me,
         ge = zt.Power0,
         ve = zt.Power1,
         ye = zt.Power2,
         Te = zt.Power3,
         be = zt.Power4,
         we = zt.Linear,
         xe = zt.Quad,
         ke = zt.Cubic,
         Oe = zt.Quart,
         Pe = zt.Quint,
         Me = zt.Strong,
         Ce = zt.Elastic,
         Ae = zt.Back,
         De = zt.SteppedEase,
         Se = zt.Bounce,
         ze = zt.Sine,
         Re = zt.Expo,
         Ee = zt.Circ,
         Fe = {},
         Be = 180 / Math.PI,
         Ie = Math.PI / 180,
         Le = Math.atan2,
         Ne = /([A-Z])/g,
         Ue = /(left|right|width|margin|padding|x)/i,
         Ye = /[\s,\(]\S/,
         qe = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
         },
         Ve = "transform",
         Xe = Ve + "Origin",
         Qe = "O,Moz,ms,Ms,Webkit".split(","),
         je = function _checkPropPrefix(t, e, r) {
            var i = (e || pe).style,
               n = 5;
            if (t in i && !r) return t;
            for (
               t = t.charAt(0).toUpperCase() + t.substr(1);
               n-- && !(Qe[n] + t in i);

            );
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Qe[n] : "") + t;
         },
         Ke = { deg: 1, rad: 1, turn: 1 },
         $e = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
         },
         Ge = {
            clearProps: function clearProps(t, e, r, i, n) {
               if ("isFromStart" !== n.data) {
                  var a = (t._pt = new oe(t._pt, e, r, 0, 0, Jd));
                  return (
                     (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1
                  );
               }
            },
         },
         We = [1, 0, 0, 1, 0, 0],
         Ze = {},
         He = function _parseTransform(t, e) {
            var r = t._gsap || new Lt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i,
               n,
               a,
               s,
               o,
               u,
               h,
               l,
               f,
               d,
               _,
               p,
               c,
               m,
               g,
               v,
               y,
               T,
               b,
               w,
               x,
               k,
               O,
               P,
               M,
               C,
               A,
               D,
               S,
               z,
               R,
               E,
               F = t.style,
               B = r.scaleX < 0,
               I = "deg",
               L = td(t, Xe) || "0";
            return (
               (i = n = a = u = h = l = f = d = _ = 0),
               (s = o = 1),
               (r.svg = !(!t.getCTM || !Ad(t))),
               (m = Pd(t, r.svg)),
               r.svg &&
                  ((P =
                     (!r.uncache || "0px 0px" === L) &&
                     !e &&
                     t.getAttribute("data-svg-origin")),
                  Qd(t, P || L, !!P || r.originIsAbsolute, !1 !== r.smooth, m)),
               (p = r.xOrigin || 0),
               (c = r.yOrigin || 0),
               m !== We &&
                  ((T = m[0]),
                  (b = m[1]),
                  (w = m[2]),
                  (x = m[3]),
                  (i = k = m[4]),
                  (n = O = m[5]),
                  6 === m.length
                     ? ((s = Math.sqrt(T * T + b * b)),
                       (o = Math.sqrt(x * x + w * w)),
                       (u = T || b ? Le(b, T) * Be : 0),
                       (f = w || x ? Le(w, x) * Be + u : 0) &&
                          (o *= Math.abs(Math.cos(f * Ie))),
                       r.svg &&
                          ((i -= p - (p * T + c * w)),
                          (n -= c - (p * b + c * x))))
                     : ((E = m[6]),
                       (z = m[7]),
                       (A = m[8]),
                       (D = m[9]),
                       (S = m[10]),
                       (R = m[11]),
                       (i = m[12]),
                       (n = m[13]),
                       (a = m[14]),
                       (h = (g = Le(E, S)) * Be),
                       g &&
                          ((P =
                             k * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                          (M = O * v + D * y),
                          (C = E * v + S * y),
                          (A = k * -y + A * v),
                          (D = O * -y + D * v),
                          (S = E * -y + S * v),
                          (R = z * -y + R * v),
                          (k = P),
                          (O = M),
                          (E = C)),
                       (l = (g = Le(-w, S)) * Be),
                       g &&
                          ((v = Math.cos(-g)),
                          (R = x * (y = Math.sin(-g)) + R * v),
                          (T = P = T * v - A * y),
                          (b = M = b * v - D * y),
                          (w = C = w * v - S * y)),
                       (u = (g = Le(b, T)) * Be),
                       g &&
                          ((P = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                          (M = k * v + O * y),
                          (b = b * v - T * y),
                          (O = O * v - k * y),
                          (T = P),
                          (k = M)),
                       h &&
                          359.9 < Math.abs(h) + Math.abs(u) &&
                          ((h = u = 0), (l = 180 - l)),
                       (s = ca(Math.sqrt(T * T + b * b + w * w))),
                       (o = ca(Math.sqrt(O * O + E * E))),
                       (g = Le(k, O)),
                       (f = 2e-4 < Math.abs(g) ? g * Be : 0),
                       (_ = R ? 1 / (R < 0 ? -R : R) : 0)),
                  r.svg &&
                     ((P = t.getAttribute("transform")),
                     (r.forceCSS =
                        t.setAttribute("transform", "") || !Nd(td(t, Ve))),
                     P && t.setAttribute("transform", P))),
               90 < Math.abs(f) &&
                  Math.abs(f) < 270 &&
                  (B
                     ? ((s *= -1),
                       (f += u <= 0 ? 180 : -180),
                       (u += u <= 0 ? 180 : -180))
                     : ((o *= -1), (f += f <= 0 ? 180 : -180))),
               (e = e || r.uncache),
               (r.x =
                  i -
                  ((r.xPercent =
                     i &&
                     ((!e && r.xPercent) ||
                        (Math.round(t.offsetWidth / 2) === Math.round(-i)
                           ? -50
                           : 0)))
                     ? (t.offsetWidth * r.xPercent) / 100
                     : 0) +
                  "px"),
               (r.y =
                  n -
                  ((r.yPercent =
                     n &&
                     ((!e && r.yPercent) ||
                        (Math.round(t.offsetHeight / 2) === Math.round(-n)
                           ? -50
                           : 0)))
                     ? (t.offsetHeight * r.yPercent) / 100
                     : 0) +
                  "px"),
               (r.z = a + "px"),
               (r.scaleX = ca(s)),
               (r.scaleY = ca(o)),
               (r.rotation = ca(u) + I),
               (r.rotationX = ca(h) + I),
               (r.rotationY = ca(l) + I),
               (r.skewX = f + I),
               (r.skewY = d + I),
               (r.transformPerspective = _ + "px"),
               (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) &&
                  (F[Xe] = Je(L)),
               (r.xOffset = r.yOffset = 0),
               (r.force3D = U.force3D),
               (r.renderTransform = r.svg ? ar : me ? nr : tr),
               (r.uncache = 0),
               r
            );
         },
         Je = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1];
         },
         tr = function _renderNon3DTransforms(t, e) {
            (e.z = "0px"),
               (e.rotationY = e.rotationX = "0deg"),
               (e.force3D = 0),
               nr(t, e);
         },
         er = "0deg",
         rr = "0px",
         ir = ") ",
         nr = function _renderCSSTransforms(t, e) {
            var r = e || this,
               i = r.xPercent,
               n = r.yPercent,
               a = r.x,
               s = r.y,
               o = r.z,
               u = r.rotation,
               h = r.rotationY,
               l = r.rotationX,
               f = r.skewX,
               d = r.skewY,
               _ = r.scaleX,
               p = r.scaleY,
               c = r.transformPerspective,
               m = r.force3D,
               g = r.target,
               v = r.zOrigin,
               y = "",
               T = ("auto" === m && t && 1 !== t) || !0 === m;
            if (v && (l !== er || h !== er)) {
               var b,
                  w = parseFloat(h) * Ie,
                  x = Math.sin(w),
                  k = Math.cos(w);
               (w = parseFloat(l) * Ie),
                  (b = Math.cos(w)),
                  (a = Td(g, a, x * b * -v)),
                  (s = Td(g, s, -Math.sin(w) * -v)),
                  (o = Td(g, o, k * b * -v + v));
            }
            c !== rr && (y += "perspective(" + c + ir),
               (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
               (!T && a === rr && s === rr && o === rr) ||
                  (y +=
                     o !== rr || T
                        ? "translate3d(" + a + ", " + s + ", " + o + ") "
                        : "translate(" + a + ", " + s + ir),
               u !== er && (y += "rotate(" + u + ir),
               h !== er && (y += "rotateY(" + h + ir),
               l !== er && (y += "rotateX(" + l + ir),
               (f === er && d === er) || (y += "skew(" + f + ", " + d + ir),
               (1 === _ && 1 === p) || (y += "scale(" + _ + ", " + p + ir),
               (g.style[Ve] = y || "translate(0, 0)");
         },
         ar = function _renderSVGTransforms(t, e) {
            var r,
               i,
               n,
               a,
               s,
               o = e || this,
               u = o.xPercent,
               h = o.yPercent,
               l = o.x,
               f = o.y,
               d = o.rotation,
               _ = o.skewX,
               p = o.skewY,
               c = o.scaleX,
               m = o.scaleY,
               g = o.target,
               v = o.xOrigin,
               y = o.yOrigin,
               T = o.xOffset,
               b = o.yOffset,
               w = o.forceCSS,
               x = parseFloat(l),
               k = parseFloat(f);
            (d = parseFloat(d)),
               (_ = parseFloat(_)),
               (p = parseFloat(p)) && ((_ += p = parseFloat(p)), (d += p)),
               d || _
                  ? ((d *= Ie),
                    (_ *= Ie),
                    (r = Math.cos(d) * c),
                    (i = Math.sin(d) * c),
                    (n = Math.sin(d - _) * -m),
                    (a = Math.cos(d - _) * m),
                    _ &&
                       ((p *= Ie),
                       (s = Math.tan(_ - p)),
                       (n *= s = Math.sqrt(1 + s * s)),
                       (a *= s),
                       p &&
                          ((s = Math.tan(p)),
                          (r *= s = Math.sqrt(1 + s * s)),
                          (i *= s))),
                    (r = ca(r)),
                    (i = ca(i)),
                    (n = ca(n)),
                    (a = ca(a)))
                  : ((r = c), (a = m), (i = n = 0)),
               ((x && !~(l + "").indexOf("px")) ||
                  (k && !~(f + "").indexOf("px"))) &&
                  ((x = Ed(g, "x", l, "px")), (k = Ed(g, "y", f, "px"))),
               (v || y || T || b) &&
                  ((x = ca(x + v - (v * r + y * n) + T)),
                  (k = ca(k + y - (v * i + y * a) + b))),
               (u || h) &&
                  ((s = g.getBBox()),
                  (x = ca(x + (u / 100) * s.width)),
                  (k = ca(k + (h / 100) * s.height))),
               (s =
                  "matrix(" +
                  r +
                  "," +
                  i +
                  "," +
                  n +
                  "," +
                  a +
                  "," +
                  x +
                  "," +
                  k +
                  ")"),
               g.setAttribute("transform", s),
               w && (g.style[Ve] = s);
         };
      ba("padding,margin,Width,Radius", function (e, r) {
         var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (
               r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]
            ).map(function (t) {
               return r < 2 ? e + t : "border" + t + e;
            });
         Ge[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
               return (
                  (a = o.map(function (t) {
                     return Fd(e, t, r);
                  })),
                  5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
               );
            (a = (i + "").split(" ")),
               (s = {}),
               o.forEach(function (t, e) {
                  return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
               }),
               e.init(t, s, n);
         };
      });
      var sr,
         or,
         ur,
         hr = {
            name: "css",
            register: wd,
            targetTest: function targetTest(t) {
               return t.style && t.nodeType;
            },
            init: function init(t, e, r, i, n) {
               var a,
                  s,
                  u,
                  h,
                  l,
                  f,
                  d,
                  _,
                  p,
                  c,
                  m,
                  g,
                  v,
                  y,
                  T,
                  b = this._props,
                  w = t.style,
                  x = r.vars.startAt;
               for (d in (_e || wd(), e))
                  if (
                     "autoRound" !== d &&
                     ((s = e[d]), !ft[d] || !Ub(d, e, r, i, t, n))
                  )
                     if (
                        ((l = typeof s),
                        (f = Ge[d]),
                        "function" === l &&
                           (l = typeof (s = s.call(r, i, t, n))),
                        "string" === l && ~s.indexOf("random(") && (s = hb(s)),
                        f)
                     )
                        f(this, t, d, s, r) && (T = 1);
                     else if ("--" === d.substr(0, 2))
                        (a = (
                           getComputedStyle(t).getPropertyValue(d) + ""
                        ).trim()),
                           (s += ""),
                           (Ct.lastIndex = 0),
                           Ct.test(a) || ((_ = Ra(a)), (p = Ra(s))),
                           p
                              ? _ !== p && (a = Ed(t, d, a, p) + p)
                              : _ && (s += _),
                           this.add(w, "setProperty", a, s, i, n, 0, 0, d),
                           b.push(d);
                     else if ("undefined" !== l) {
                        if (
                           (x && d in x
                              ? ((a =
                                   "function" == typeof x[d]
                                      ? x[d].call(r, i, t, n)
                                      : x[d]),
                                o(a) && ~a.indexOf("random(") && (a = hb(a)),
                                Ra(a + "") ||
                                   (a += U.units[d] || Ra(Fd(t, d)) || ""),
                                "=" === (a + "").charAt(1) && (a = Fd(t, d)))
                              : (a = Fd(t, d)),
                           (h = parseFloat(a)),
                           (c =
                              "string" === l &&
                              "=" === s.charAt(1) &&
                              s.substr(0, 2)) && (s = s.substr(2)),
                           (u = parseFloat(s)),
                           d in qe &&
                              ("autoAlpha" === d &&
                                 (1 === h &&
                                    "hidden" === Fd(t, "visibility") &&
                                    u &&
                                    (h = 0),
                                 Cd(
                                    this,
                                    w,
                                    "visibility",
                                    h ? "inherit" : "hidden",
                                    u ? "inherit" : "hidden",
                                    !u
                                 )),
                              "scale" !== d &&
                                 "transform" !== d &&
                                 ~(d = qe[d]).indexOf(",") &&
                                 (d = d.split(",")[0])),
                           (m = d in Fe))
                        )
                           if (
                              (g ||
                                 (((v = t._gsap).renderTransform &&
                                    !e.parseTransform) ||
                                    He(t, e.parseTransform),
                                 (y = !1 !== e.smoothOrigin && v.smooth),
                                 ((g = this._pt =
                                    new oe(
                                       this._pt,
                                       w,
                                       Ve,
                                       0,
                                       1,
                                       v.renderTransform,
                                       v,
                                       0,
                                       -1
                                    )).dep = 1)),
                              "scale" === d)
                           )
                              (this._pt = new oe(
                                 this._pt,
                                 v,
                                 "scaleY",
                                 v.scaleY,
                                 (c ? ea(v.scaleY, c + u) : u) - v.scaleY || 0
                              )),
                                 b.push("scaleY", d),
                                 (d += "X");
                           else {
                              if ("transformOrigin" === d) {
                                 (s = Id(s)),
                                    v.svg
                                       ? Qd(t, s, 0, y, 0, this)
                                       : ((p =
                                            parseFloat(s.split(" ")[2]) ||
                                            0) !== v.zOrigin &&
                                            Cd(
                                               this,
                                               v,
                                               "zOrigin",
                                               v.zOrigin,
                                               p
                                            ),
                                         Cd(this, w, d, Je(a), Je(s)));
                                 continue;
                              }
                              if ("svgOrigin" === d) {
                                 Qd(t, s, 1, y, 0, this);
                                 continue;
                              }
                              if (d in Ze) {
                                 $d(this, v, d, h, c ? ea(h, c + s) : s);
                                 continue;
                              }
                              if ("smoothOrigin" === d) {
                                 Cd(this, v, "smooth", v.smooth, s);
                                 continue;
                              }
                              if ("force3D" === d) {
                                 v[d] = s;
                                 continue;
                              }
                              if ("transform" === d) {
                                 ae(this, s, t);
                                 continue;
                              }
                           }
                        else d in w || (d = je(d) || d);
                        if (
                           m ||
                           ((u || 0 === u) &&
                              (h || 0 === h) &&
                              !Ye.test(s) &&
                              d in w)
                        )
                           (u = u || 0),
                              (_ = (a + "").substr((h + "").length)) !==
                                 (p =
                                    Ra(s) || (d in U.units ? U.units[d] : _)) &&
                                 (h = Ed(t, d, a, p)),
                              (this._pt = new oe(
                                 this._pt,
                                 m ? v : w,
                                 d,
                                 h,
                                 (c ? ea(h, c + u) : u) - h,
                                 m ||
                                 ("px" !== p && "zIndex" !== d) ||
                                 !1 === e.autoRound
                                    ? dd
                                    : gd
                              )),
                              (this._pt.u = p || 0),
                              _ !== p &&
                                 "%" !== p &&
                                 ((this._pt.b = a), (this._pt.r = fd));
                        else if (d in w) Gd.call(this, t, d, a, c ? c + s : s);
                        else {
                           if (!(d in t)) {
                              N(d, s);
                              continue;
                           }
                           this.add(t, d, a || t[d], c ? c + s : s, i, n);
                        }
                        b.push(d);
                     }
               T && se(this);
            },
            get: Fd,
            aliases: qe,
            getSetter: function getSetter(t, e, i) {
               var n = qe[e];
               return (
                  n && n.indexOf(",") < 0 && (e = n),
                  e in Fe && e !== Xe && (t._gsap.x || Fd(t, "x"))
                     ? i && ce === i
                        ? "scale" === e
                           ? md
                           : ld
                        : (ce = i || {}) && ("scale" === e ? nd : od)
                     : t.style && !r(t.style[e])
                     ? jd
                     : ~e.indexOf("-")
                     ? kd
                     : Ht(t, e)
               );
            },
            core: { _removeProperty: Bd, _getMatrix: Pd },
         };
      (he.utils.checkPrefix = je),
         (ur = ba(
            (sr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
               "," +
               (or = "rotation,rotationX,rotationY,skewX,skewY") +
               ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
               Fe[t] = 1;
            }
         )),
         ba(or, function (t) {
            (U.units[t] = "deg"), (Ze[t] = 1);
         }),
         (qe[ur[13]] = sr + "," + or),
         ba(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
               var e = t.split(":");
               qe[e[1]] = ur[e[0]];
            }
         ),
         ba(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
               U.units[t] = "px";
            }
         ),
         he.registerPlugin(hr);
      var lr = he.registerPlugin(hr) || he,
         fr = lr.core.Tween;
      (e.Back = Ae),
         (e.Bounce = Se),
         (e.CSSPlugin = hr),
         (e.Circ = Ee),
         (e.Cubic = ke),
         (e.Elastic = Ce),
         (e.Expo = Re),
         (e.Linear = we),
         (e.Power0 = ge),
         (e.Power1 = ve),
         (e.Power2 = ye),
         (e.Power3 = Te),
         (e.Power4 = be),
         (e.Quad = xe),
         (e.Quart = Oe),
         (e.Quint = Pe),
         (e.Sine = ze),
         (e.SteppedEase = De),
         (e.Strong = Me),
         (e.TimelineLite = Ut),
         (e.TimelineMax = Ut),
         (e.TweenLite = $t),
         (e.TweenMax = fr),
         (e.default = lr),
         (e.gsap = lr);
      if (typeof window === "undefined" || window !== e) {
         Object.defineProperty(e, "__esModule", { value: !0 });
      } else {
         delete e.default;
      }
   });

   // scroll magic animation gsap

   /*!
    * ScrollMagic v2.0.8 (2020-08-14)
    * The javascript library for magical scroll interactions.
    * (c) 2020 Jan Paepke (@janpaepke)
    * Project Website: http://scrollmagic.io
    *
    * @version 2.0.8
    * @license Dual licensed under MIT license and GPL.
    * @author Jan Paepke - e-mail@janpaepke.de
    *
    * @file ScrollMagic GSAP Animation Plugin.
    *
    * requires: GSAP ~1.14
    * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
    * Greensock License info at http://www.greensock.com/licensing/
    */
   /**
    * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.
    * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
    *
    * Both the `lite` and the `max` versions of the GSAP library are supported.
    * The most basic requirement is `TweenLite`.
    *
    * To have access to this extension, please include `plugins/animation.gsap.js`.
    * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
    * @mixin animation.GSAP
    */
   (function (root, factory) {
      if (typeof define === "function" && define.amd) {
         // AMD. Register as an anonymous module.
         define(["ScrollMagic", "gsap", "TweenMax", "TimelineMax"], factory);
      } else if (typeof exports === "object") {
         // CommonJS
         // Loads whole gsap package onto global scope.
         var gsap = require("gsap/dist/gsap") || require("gsap");

         // TweenMax/TimelineMax will be global in v2. In v3, they will be on the gsap object
         factory(
            require("scrollmagic"),
            gsap,
            TweenMax || gsap,
            TimelineMax || gsap
         );
      } else {
         // Browser globals
         factory(
            root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic),
            root.gsap,
            root.gsap || root.TweenMax || root.TweenLite,
            root.gsap || root.TimelineMax || root.TimelineLite
         );
      }
   })(this, function (ScrollMagic, Gsap, Tween, Timeline) {
      "use strict";
      var NAMESPACE = "animation.gsap";
      var GSAP3_OR_GREATER = Gsap && parseFloat(Gsap.version) >= 3;

      var console = window.console || {},
         err = Function.prototype.bind.call(
            console.error || console.log || function () {},
            console
         );
      if (!ScrollMagic) {
         err(
            "(" +
               NAMESPACE +
               ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
         );
      }
      if (!Tween) {
         err(
            "(" +
               NAMESPACE +
               ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."
         );
      }

      /*
       * ----------------------------------------------------------------
       * Extensions for Scene
       * ----------------------------------------------------------------
       */
      /**
	 * Every instance of ScrollMagic.Scene now accepts an additional option.  
	 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
	 * @memberof! animation.GSAP#
	 * @method new ScrollMagic.Scene(options)
	 * @example
	 * var scene = new ScrollMagic.Scene({tweenChanges: true});
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
	 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
	 												  Does not affect animations where duration is `0`.
	 */
      /**
       * **Get** or **Set** the tweenChanges option value.
       * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.
       * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
       * @memberof! animation.GSAP#
       * @method Scene.tweenChanges
       *
       * @example
       * // get the current tweenChanges option
       * var tweenChanges = scene.tweenChanges();
       *
       * // set new tweenChanges option
       * scene.tweenChanges(true);
       *
       * @fires {@link Scene.change}, when used as setter
       * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
       * @returns {boolean} `get` -  Current tweenChanges option value.
       * @returns {Scene} `set` -  Parent object for chaining.
       */
      // add option (TODO: DOC (private for dev))
      ScrollMagic.Scene.addOption(
         "tweenChanges", // name
         false, // default
         function (val) {
            // validation callback
            return !!val;
         }
      );
      // extend scene
      ScrollMagic.Scene.extend(function () {
         var Scene = this,
            _tween;

         var log = function () {
            if (Scene._log) {
               // not available, when main source minified
               Array.prototype.splice.call(
                  arguments,
                  1,
                  0,
                  "(" + NAMESPACE + ")",
                  "->"
               );
               Scene._log.apply(this, arguments);
            }
         };

         // set listeners
         Scene.on("progress.plugin_gsap", function () {
            updateTweenProgress();
         });
         Scene.on("destroy.plugin_gsap", function (e) {
            Scene.removeTween(e.reset);
         });

         /**
          * Update the tween progress to current position.
          * @private
          */
         var updateTweenProgress = function () {
            if (_tween) {
               var progress = Scene.progress(),
                  state = Scene.state();
               if (_tween.repeat && _tween.repeat() === -1) {
                  // infinite loop, so not in relation to progress
                  if (state === "DURING" && _tween.paused()) {
                     _tween.play();
                  } else if (state !== "DURING" && !_tween.paused()) {
                     _tween.pause();
                  }
               } else if (progress != _tween.progress()) {
                  // do we even need to update the progress?
                  // no infinite loop - so should we just play or go to a specific point in time?
                  if (Scene.duration() === 0) {
                     // play the animation
                     if (progress > 0) {
                        // play from 0 to 1
                        _tween.play();
                     } else {
                        // play from 1 to 0
                        _tween.reverse();
                     }
                  } else {
                     // go to a specific point in time
                     if (Scene.tweenChanges() && _tween.tweenTo) {
                        // go smooth
                        _tween.tweenTo(progress * _tween.duration());
                     } else {
                        // just hard set it
                        _tween.progress(progress).pause();
                     }
                  }
               }
            }
         };

         /**
          * Add a tween to the scene.
          * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).
          *
          * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.
          * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.
          * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
          *
          * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
          * @memberof! animation.GSAP#
          *
          * @example
          * // add a single tween directly
          * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
          *
          * // add a single tween via variable
          * var tween = TweenMax.to("obj"), 1, {x: 100};
          * scene.setTween(tween);
          *
          * // add multiple tweens, wrapped in a timeline.
          * var timeline = new TimelineMax();
          * var tween1 = TweenMax.from("obj1", 1, {x: 100});
          * var tween2 = TweenMax.to("obj2", 1, {y: 100});
          * timeline
          *		.add(tween1)
          *		.add(tween2);
          * scene.addTween(timeline);
          *
          * // short hand to add a TweenMax.to() tween
          * scene.setTween("obj3", 0.5, {y: 100});
          *
          * // short hand to add a TweenMax.to() tween for 1 second
          * // this is useful, when the scene has a duration and the tween duration isn't important anyway
          * scene.setTween("obj3", {y: 100});
          *
          * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
          * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
          * @param {object} params - The parameters for the tween
          * @returns {Scene} Parent object for chaining.
          */
         Scene.setTween = function (TweenObject, duration, params) {
            var newTween;

            if (arguments.length > 1) {
               var durationIsSet = typeof arguments["1"] === "number";

               if (GSAP3_OR_GREATER) {
                  // If we're using gsap 3 with proper gsap 3 syntax of 2 arguments
                  if (!durationIsSet) {
                     params = duration;
                  }
                  // Add a duration is there isn't one
                  if (!params.hasOwnProperty("duration")) {
                     params.duration = durationIsSet ? duration : 1;
                  }
               } else {
                  // If we're using gsap 2 or earlier syntax
                  if (arguments.length < 3) {
                     params = duration;
                     duration = 1;
                  }
               }

               // 2 arguments should be gsap 3 syntax, and 3 arguments for
               TweenObject = GSAP3_OR_GREATER
                  ? Tween.to(TweenObject, params)
                  : Tween.to(TweenObject, duration, params);
            }
            try {
               // wrap Tween into a Timeline Object if not gsap 3 or greater and available to include delay and repeats in the duration and standardize methods.
               if (Timeline && !GSAP3_OR_GREATER) {
                  newTween = new Timeline({
                     smoothChildTiming: true,
                  }).add(TweenObject);
               } else {
                  newTween = TweenObject;
               }
               newTween.pause();
            } catch (e) {
               log(
                  1,
                  "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
               );
               return Scene;
            }
            if (_tween) {
               // kill old tween?
               Scene.removeTween();
            }
            _tween = newTween;

            // some properties need to be transferred it to the wrapper, otherwise they would get lost.
            if (TweenObject.repeat && TweenObject.repeat() === -1) {
               // TweenMax or TimelineMax Object?
               _tween.repeat(-1);
               _tween.yoyo(TweenObject.yoyo());
            }
            // Some tween validations and debugging helpers

            if (Scene.tweenChanges() && !_tween.tweenTo) {
               log(
                  2,
                  "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
               );
            }

            // check if there are position tweens defined for the trigger and warn about it :)
            if (
               _tween &&
               Scene.controller() &&
               Scene.triggerElement() &&
               Scene.loglevel() >= 2
            ) {
               // controller is needed to know scroll direction.
               var triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
                  vertical = Scene.controller().info("vertical");
               triggerTweens.forEach(function (value, index) {
                  var tweenvars = value.vars.css || value.vars,
                     condition = vertical
                        ? tweenvars.top !== undefined ||
                          tweenvars.bottom !== undefined
                        : tweenvars.left !== undefined ||
                          tweenvars.right !== undefined;
                  if (condition) {
                     log(
                        2,
                        "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
                     );
                     return false;
                  }
               });
            }

            // warn about tween overwrites, when an element is tweened multiple times
            if (parseFloat(TweenLite.version) >= 1.14) {
               // onOverwrite only present since GSAP v1.14.0
               var // However, onInterrupt deprecated onOverwrite in GSAP v3
                  methodUsed = GSAP3_OR_GREATER ? "onInterrupt" : "onOverwrite",
                  list = _tween.getChildren
                     ? _tween.getChildren(true, true, false)
                     : [_tween], // get all nested tween objects
                  newCallback = function () {
                     log(
                        2,
                        "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
                     );
                  };
               for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
                  /*jshint loopfunc: true */
                  thisTween = list[i];
                  if (oldCallback !== newCallback) {
                     // if tweens is added more than once
                     oldCallback = thisTween.vars[methodUsed];
                     thisTween.vars[methodUsed] = function () {
                        if (oldCallback) {
                           oldCallback.apply(this, arguments);
                        }
                        newCallback.apply(this, arguments);
                     };
                  }
               }
            }
            log(3, "added tween");

            updateTweenProgress();
            return Scene;
         };

         /**
          * Remove the tween from the scene.
          * This will terminate the control of the Scene over the tween.
          *
          * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
          * @memberof! animation.GSAP#
          *
          * @example
          * // remove the tween from the scene without resetting it
          * scene.removeTween();
          *
          * // remove the tween from the scene and reset it to initial position
          * scene.removeTween(true);
          *
          * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
          * @returns {Scene} Parent object for chaining.
          */
         Scene.removeTween = function (reset) {
            if (_tween) {
               if (reset) {
                  _tween.progress(0).pause();
               }
               _tween.kill();
               _tween = undefined;
               log(
                  3,
                  "removed tween (reset: " + (reset ? "true" : "false") + ")"
               );
            }
            return Scene;
         };
      });
   });
}
