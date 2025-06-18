(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["30381"],
  {
    95262: function (e, t, i) {
      "use strict";
      function n(e) {
        return null == e || Array.isArray(e) ? e : [e];
      }
      i.d(t, { r: () => n });
    },
    75011: function (e, t, i) {
      "use strict";
      i.d(t, { I: () => a, k: () => n });
      i(71695),
        i(92519),
        i(42179),
        i(89256),
        i(24931),
        i(88463),
        i(57449),
        i(19814),
        i(47021);
      const n = new Set([
        "primary",
        "accent",
        "disabled",
        "red",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "blue",
        "light-blue",
        "cyan",
        "teal",
        "green",
        "light-green",
        "lime",
        "yellow",
        "amber",
        "orange",
        "deep-orange",
        "brown",
        "light-grey",
        "grey",
        "dark-grey",
        "blue-grey",
        "black",
        "white",
      ]);
      function a(e) {
        return n.has(e) ? `var(--${e}-color)` : e;
      }
    },
    46467: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, {
            D_: () => x,
            NC: () => v,
            Nh: () => f,
            U8: () => I,
            WB: () => m,
            mn: () => h,
            p6: () => l,
            ud: () => g,
            yQ: () => w,
          });
          i(63434), i(9359), i(1331), i(96829);
          var a = i(16485),
            o = i(27486),
            r = i(20382),
            s = i(11104),
            d = e([a, s]);
          [a, s] = d.then ? (await d)() : d;
          (0, o.Z)(
            (e, t) =>
              new Intl.DateTimeFormat(e.language, {
                weekday: "long",
                month: "long",
                day: "numeric",
                timeZone: (0, s.f)(e.time_zone, t),
              }),
          );
          const l = (e, t, i) => c(t, i.time_zone).format(e),
            c = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            h = (e, t, i) => u(t, i.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            m = (e, t, i) => {
              var n, a, o, s;
              const d = p(t, i.time_zone);
              if (
                t.date_format === r.t6.language ||
                t.date_format === r.t6.system
              )
                return d.format(e);
              const l = d.formatToParts(e),
                c =
                  null === (n = l.find((e) => "literal" === e.type)) ||
                  void 0 === n
                    ? void 0
                    : n.value,
                h =
                  null === (a = l.find((e) => "day" === e.type)) || void 0 === a
                    ? void 0
                    : a.value,
                u =
                  null === (o = l.find((e) => "month" === e.type)) ||
                  void 0 === o
                    ? void 0
                    : o.value,
                m =
                  null === (s = l.find((e) => "year" === e.type)) ||
                  void 0 === s
                    ? void 0
                    : s.value,
                g = l.at(l.length - 1);
              let y =
                "literal" === (null == g ? void 0 : g.type)
                  ? null == g
                    ? void 0
                    : g.value
                  : "";
              "bg" === t.language && t.date_format === r.t6.YMD && (y = "");
              return {
                [r.t6.DMY]: `${h}${c}${u}${c}${m}${y}`,
                [r.t6.MDY]: `${u}${c}${h}${c}${m}${y}`,
                [r.t6.YMD]: `${m}${c}${u}${c}${h}${y}`,
              }[t.date_format];
            },
            p = (0, o.Z)((e, t) => {
              const i = e.date_format === r.t6.system ? void 0 : e.language;
              return (
                e.date_format === r.t6.language || (e.date_format, r.t6.system),
                new Intl.DateTimeFormat(i, {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  timeZone: (0, s.f)(e.time_zone, t),
                })
              );
            }),
            g = (e, t, i) => y(t, i.time_zone).format(e),
            y = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  day: "numeric",
                  month: "short",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            v = (e, t, i) => _(t, i.time_zone).format(e),
            _ = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "long",
                  year: "numeric",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            f = (e, t, i) => b(t, i.time_zone).format(e),
            b = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "long",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            w = (e, t, i) => k(t, i.time_zone).format(e),
            k = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            x = (e, t, i) => T(t, i.time_zone).format(e),
            T = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "long",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            ),
            I = (e, t, i) => E(t, i.time_zone).format(e),
            E = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "short",
                  timeZone: (0, s.f)(e.time_zone, t),
                }),
            );
          n();
        } catch (l) {
          n(l);
        }
      });
    },
    64214: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, {
            DG: () => m,
            E8: () => _,
            Fu: () => v,
            NR: () => b,
            o0: () => h,
            yD: () => g,
          });
          var a = i(16485),
            o = i(27486),
            r = i(46467),
            s = i(33570),
            d = i(11104),
            l = i(16922),
            c = e([a, d, r, s]);
          [a, d, r, s] = c.then ? (await c)() : c;
          const h = (e, t, i) => u(t, i.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: (0, l.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, l.y)(e) ? "h12" : "h23",
                  timeZone: (0, d.f)(e.time_zone, t),
                }),
            ),
            m =
              ((0, o.Z)(
                () =>
                  new Intl.DateTimeFormat(void 0, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
              ),
              (e, t, i) => p(t, i.time_zone).format(e)),
            p = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: (0, l.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, l.y)(e) ? "h12" : "h23",
                  timeZone: (0, d.f)(e.time_zone, t),
                }),
            ),
            g = (e, t, i) => y(t, i.time_zone).format(e),
            y = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "short",
                  day: "numeric",
                  hour: (0, l.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, l.y)(e) ? "h12" : "h23",
                  timeZone: (0, d.f)(e.time_zone, t),
                }),
            ),
            v = (e, t, i) =>
              new Date().getFullYear() === e.getFullYear()
                ? g(e, t, i)
                : m(e, t, i),
            _ = (e, t, i) => f(t, i.time_zone).format(e),
            f = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: (0, l.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hourCycle: (0, l.y)(e) ? "h12" : "h23",
                  timeZone: (0, d.f)(e.time_zone, t),
                }),
            ),
            b = (e, t, i) => `${(0, r.WB)(e, t, i)}, ${(0, s.mr)(e, t, i)}`;
          n();
        } catch (h) {
          n(h);
        }
      });
    },
    33570: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, { Vu: () => h, Zs: () => g, mr: () => l, xO: () => m });
          var a = i(16485),
            o = i(27486),
            r = i(11104),
            s = i(16922),
            d = e([a, r]);
          [a, r] = d.then ? (await d)() : d;
          const l = (e, t, i) => c(t, i.time_zone).format(e),
            c = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  hour: "numeric",
                  minute: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            h = (e, t, i) => u(t, i.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            m = (e, t, i) => p(t, i.time_zone).format(e),
            p = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "long",
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            g = (e, t, i) => y(t, i.time_zone).format(e),
            y = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat("en-GB", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: !1,
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            );
          n();
        } catch (l) {
          n(l);
        }
      });
    },
    94947: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, { G: () => l });
          var a = i(16485),
            o = i(27486),
            r = i(27046),
            s = e([a, r]);
          [a, r] = s.then ? (await s)() : s;
          const d = (0, o.Z)(
              (e) =>
                new Intl.RelativeTimeFormat(e.language, { numeric: "auto" }),
            ),
            l = (e, t, i, n = !0) => {
              const a = (0, r.W)(e, i, t);
              return n
                ? d(t).format(a.value, a.unit)
                : Intl.NumberFormat(t.language, {
                    style: "unit",
                    unit: a.unit,
                    unitDisplay: "long",
                  }).format(Math.abs(a.value));
            };
          n();
        } catch (d) {
          n(d);
        }
      });
    },
    11104: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, { f: () => u });
          var a,
            o,
            r,
            s = i(16485),
            d = i(20382),
            l = e([s]);
          s = (l.then ? (await l)() : l)[0];
          const c =
              null === (a = Intl.DateTimeFormat) ||
              void 0 === a ||
              null === (o = (r = a.call(Intl)).resolvedOptions) ||
              void 0 === o
                ? void 0
                : o.call(r).timeZone,
            h = null != c ? c : "UTC",
            u = (e, t) => (e === d.c_.local && c ? h : t);
          n();
        } catch (c) {
          n(c);
        }
      });
    },
    87733: function (e, t, i) {
      "use strict";
      i.d(t, { f: () => n });
      const n = (e) => e.charAt(0).toUpperCase() + e.slice(1);
    },
    35830: function (e, t, i) {
      "use strict";
      i.d(t, { q: () => n });
      const n = (e) => {
        const t = window.location.pathname;
        return e ? t + "?" + e : t;
      };
    },
    27046: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, { W: () => m });
          i(19423);
          var a = i(13809),
            o = i(29558),
            r = i(94763),
            s = i(19631),
            d = e([s]);
          s = (d.then ? (await d)() : d)[0];
          const c = 1e3,
            h = 60,
            u = 60 * h;
          function m(e, t = Date.now(), i, n = {}) {
            const d = Object.assign(Object.assign({}, p), n || {}),
              l = (+e - +t) / c;
            if (Math.abs(l) < d.second)
              return { value: Math.round(l), unit: "second" };
            const m = l / h;
            if (Math.abs(m) < d.minute)
              return { value: Math.round(m), unit: "minute" };
            const g = l / u;
            if (Math.abs(g) < d.hour)
              return { value: Math.round(g), unit: "hour" };
            const y = new Date(e),
              v = new Date(t);
            y.setHours(0, 0, 0, 0), v.setHours(0, 0, 0, 0);
            const _ = (0, a.j)(y, v);
            if (0 === _) return { value: Math.round(g), unit: "hour" };
            if (Math.abs(_) < d.day) return { value: _, unit: "day" };
            const f = (0, s.Bt)(i),
              b = (0, o.z)(y, { weekStartsOn: f }),
              w = (0, o.z)(v, { weekStartsOn: f }),
              k = (0, r.p)(b, w);
            if (0 === k) return { value: _, unit: "day" };
            if (Math.abs(k) < d.week) return { value: k, unit: "week" };
            const x = y.getFullYear() - v.getFullYear(),
              T = 12 * x + y.getMonth() - v.getMonth();
            return 0 === T
              ? { value: k, unit: "week" }
              : Math.abs(T) < d.month || 0 === x
              ? { value: T, unit: "month" }
              : { value: Math.round(x), unit: "year" };
          }
          const p = {
            second: 45,
            minute: 45,
            hour: 22,
            day: 5,
            week: 4,
            month: 11,
          };
          n();
        } catch (l) {
          n(l);
        }
      });
    },
    93826: function (e, t, i) {
      "use strict";
      i.d(t, { P: () => n });
      i(71695), i(47021);
      const n = (e, t, i = !0, n = !0) => {
        let a,
          o = 0;
        const r = (...r) => {
          const s = () => {
              (o = !1 === i ? 0 : Date.now()), (a = void 0), e(...r);
            },
            d = Date.now();
          o || !1 !== i || (o = d);
          const l = t - (d - o);
          l <= 0 || l > t
            ? (a && (clearTimeout(a), (a = void 0)), (o = d), e(...r))
            : a || !1 === n || (a = window.setTimeout(s, l));
        };
        return (
          (r.cancel = () => {
            clearTimeout(a), (a = void 0), (o = 0);
          }),
          r
        );
      };
    },
    95198: function (e, t, i) {
      "use strict";
      var n = i(61701),
        a = (i(71695), i(47021), i(57243)),
        o = i(50778);
      let r,
        s,
        d = (e) => e;
      (0, n.Z)(
        [(0, o.Mo)("ha-dialog-header")],
        function (e, t) {
          return {
            F: class extends t {
              constructor(...t) {
                super(...t), e(this);
              }
            },
            d: [
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, a.dy)(
                    r ||
                      (r = d`
      <header class="header">
        <div class="header-bar">
          <section class="header-navigation-icon">
            <slot name="navigationIcon"></slot>
          </section>
          <section class="header-content">
            <div class="header-title">
              <slot name="title"></slot>
            </div>
            <div class="header-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </section>
          <section class="header-action-items">
            <slot name="actionItems"></slot>
          </section>
        </div>
        <slot></slot>
      </header>
    `),
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [
                    (0, a.iv)(
                      s ||
                        (s = d`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-action-items,.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        a.oi,
      );
    },
    73729: function (e, t, i) {
      "use strict";
      i.d(t, { i: () => g });
      var n = i(61701),
        a = i(72621),
        o = (i(22152), i(71695), i(47021), i(74966)),
        r = i(51408),
        s = i(57243),
        d = i(50778),
        l = i(76525);
      i(23334);
      let c,
        h,
        u,
        m = (e) => e;
      const p = ["button", "ha-list-item"],
        g = (e, t) => {
          var i;
          return (0, s.dy)(
            c ||
              (c = m`
  <div class="header_title">
    <ha-icon-button .label=${0} .path=${0} dialogAction="close" class="header_button"></ha-icon-button>
    <span>${0}</span>
  </div>
`),
            null !== (i = null == e ? void 0 : e.localize("ui.common.close")) &&
              void 0 !== i
              ? i
              : "Close",
            "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
            t,
          );
        };
      (0, n.Z)(
        [(0, d.Mo)("ha-dialog")],
        function (e, t) {
          class i extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: i,
            d: [
              { kind: "field", key: l.gA, value: void 0 },
              {
                kind: "method",
                key: "scrollToPos",
                value: function (e, t) {
                  var i;
                  null === (i = this.contentElement) ||
                    void 0 === i ||
                    i.scrollTo(e, t);
                },
              },
              {
                kind: "method",
                key: "renderHeading",
                value: function () {
                  return (0, s.dy)(
                    h || (h = m`<slot name="heading"> ${0} </slot>`),
                    (0, a.Z)(i, "renderHeading", this, 3)([]),
                  );
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  var e;
                  (0, a.Z)(i, "firstUpdated", this, 3)([]),
                    (this.suppressDefaultPressSelector = [
                      this.suppressDefaultPressSelector,
                      p,
                    ].join(", ")),
                    this._updateScrolledAttribute(),
                    null === (e = this.contentElement) ||
                      void 0 === e ||
                      e.addEventListener("scroll", this._onScroll, {
                        passive: !0,
                      });
                },
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function () {
                  (0, a.Z)(i, "disconnectedCallback", this, 3)([]),
                    this.contentElement.removeEventListener(
                      "scroll",
                      this._onScroll,
                    );
                },
              },
              {
                kind: "field",
                key: "_onScroll",
                value() {
                  return () => {
                    this._updateScrolledAttribute();
                  };
                },
              },
              {
                kind: "method",
                key: "_updateScrolledAttribute",
                value: function () {
                  this.contentElement &&
                    this.toggleAttribute(
                      "scrolled",
                      0 !== this.contentElement.scrollTop,
                    );
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return [
                    r.W,
                    (0, s.iv)(
                      u ||
                        (u = m`.dialog-actions,.header_button,.header_title{direction:var(--direction)}:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        o.M,
      );
    },
    7285: function (e, t, i) {
      "use strict";
      i.d(t, { M: () => m });
      var n = i(61701),
        a = i(72621),
        o = (i(71695), i(47021), i(65703)),
        r = i(46289),
        s = i(57243),
        d = i(50778);
      let l,
        c,
        h,
        u = (e) => e,
        m = (0, n.Z)(
          [(0, d.Mo)("ha-list-item")],
          function (e, t) {
            class i extends t {
              constructor(...t) {
                super(...t), e(this);
              }
            }
            return {
              F: i,
              d: [
                {
                  kind: "method",
                  key: "renderRipple",
                  value: function () {
                    return this.noninteractive
                      ? ""
                      : (0, a.Z)(i, "renderRipple", this, 3)([]);
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      r.W,
                      (0, s.iv)(
                        l ||
                          (l = u`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`),
                      ),
                      "rtl" === document.dir
                        ? (0, s.iv)(
                            c ||
                              (c = u`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`),
                          )
                        : (0, s.iv)(h || (h = u``)),
                    ];
                  },
                },
              ],
            };
          },
          o.K,
        );
    },
    30043: function (e, t, i) {
      "use strict";
      var n = i(61701),
        a = i(72621),
        o = (i(71695), i(47021), i(19799)),
        r = i(23111),
        s = i(57243),
        d = i(50778);
      let l,
        c = (e) => e;
      (0, n.Z)(
        [(0, d.Mo)("ha-ripple")],
        function (e, t) {
          class i extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: i,
            d: [
              {
                kind: "field",
                key: "attachableTouchController",
                value() {
                  return new o.J(this, this._onTouchControlChange.bind(this));
                },
              },
              {
                kind: "method",
                key: "attach",
                value: function (e) {
                  (0, a.Z)(i, "attach", this, 3)([e]),
                    this.attachableTouchController.attach(e);
                },
              },
              {
                kind: "method",
                key: "detach",
                value: function () {
                  (0, a.Z)(i, "detach", this, 3)([]),
                    this.attachableTouchController.detach();
                },
              },
              {
                kind: "field",
                key: "_handleTouchEnd",
                value() {
                  return () => {
                    this.disabled ||
                      (0, a.Z)(i, "endPressAnimation", this, 3)([]);
                  };
                },
              },
              {
                kind: "method",
                key: "_onTouchControlChange",
                value: function (e, t) {
                  null == e ||
                    e.removeEventListener("touchend", this._handleTouchEnd),
                    null == t ||
                      t.addEventListener("touchend", this._handleTouchEnd);
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return [
                    ...(0, a.Z)(i, "styles", this),
                    (0, s.iv)(
                      l ||
                        (l = c`:host{--md-ripple-hover-opacity:var(--ha-ripple-hover-opacity, 0.08);--md-ripple-pressed-opacity:var(--ha-ripple-pressed-opacity, 0.12);--md-ripple-hover-color:var(
          --ha-ripple-hover-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );--md-ripple-pressed-color:var(
          --ha-ripple-pressed-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        )}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        r.M,
      );
    },
    43546: function (e, t, i) {
      "use strict";
      i.d(t, {
        Cp: () => r,
        TZ: () => s,
        W2: () => o,
        YY: () => l,
        iI: () => a,
        j2: () => d,
        oT: () => n,
      });
      i(19083),
        i(9359),
        i(70104),
        i(77439),
        i(19423),
        i(40251),
        i(97499),
        i(61006);
      const n = (e) =>
          e.map((e) => {
            if ("string" !== e.type) return e;
            switch (e.name) {
              case "username":
                return Object.assign(
                  Object.assign({}, e),
                  {},
                  { autocomplete: "username", autofocus: !0 },
                );
              case "password":
                return Object.assign(
                  Object.assign({}, e),
                  {},
                  { autocomplete: "current-password" },
                );
              case "code":
                return Object.assign(
                  Object.assign({}, e),
                  {},
                  { autocomplete: "one-time-code", autofocus: !0 },
                );
              default:
                return e;
            }
          }),
        a = (e, t) => e.callWS({ type: "auth/sign_path", path: t }),
        o = async (e, t, i, n) =>
          e.callWS({
            type: "config/auth_provider/homeassistant/create",
            user_id: t,
            username: i,
            password: n,
          }),
        r = (e, t, i) =>
          e.callWS({
            type: "config/auth_provider/homeassistant/change_password",
            current_password: t,
            new_password: i,
          }),
        s = (e, t, i) =>
          e.callWS({
            type: "config/auth_provider/homeassistant/admin_change_password",
            user_id: t,
            password: i,
          }),
        d = (e, t, i) =>
          e.callWS({
            type: "config/auth_provider/homeassistant/admin_change_username",
            user_id: t,
            username: i,
          }),
        l = (e, t, i) =>
          e.callWS({
            type: "auth/delete_all_refresh_tokens",
            token_type: t,
            delete_current_token: i,
          });
    },
    75101: function (e, t, i) {
      "use strict";
      i.d(t, {
        $H: () => n,
        DJ: () => s,
        LZ: () => o,
        Nn: () => u,
        Ny: () => m,
        Pk: () => g,
        Q4: () => r,
        RQ: () => l,
        SO: () => c,
        T0: () => p,
        aR: () => a,
        iJ: () => h,
        pB: () => d,
      });
      i(71695), i(9359), i(56475), i(1331), i(19423), i(47021);
      const n = (e, t) =>
          e.callWS({ type: "config_entries/subentries/list", entry_id: t }),
        a = (e, t, i) =>
          e.callWS({
            type: "config_entries/subentries/delete",
            entry_id: t,
            subentry_id: i,
          }),
        o = ["migration_error", "setup_error", "setup_retry"],
        r = ["not_loaded", "loaded", "setup_error", "setup_retry"],
        s = (e, t, i) => {
          const n = { type: "config_entries/subscribe" };
          return (
            i && i.type && (n.type_filter = i.type),
            e.connection.subscribeMessage((e) => t(e), n)
          );
        },
        d = (e, t) => {
          const i = {};
          return (
            t &&
              (t.type && (i.type_filter = t.type),
              t.domain && (i.domain = t.domain)),
            e.callWS(Object.assign({ type: "config_entries/get" }, i))
          );
        },
        l = (e, t) =>
          e.callWS({ type: "config_entries/get_single", entry_id: t }),
        c = (e, t, i) =>
          e.callWS(
            Object.assign({ type: "config_entries/update", entry_id: t }, i),
          ),
        h = (e, t) => e.callApi("DELETE", `config/config_entries/entry/${t}`),
        u = (e, t) =>
          e.callApi("POST", `config/config_entries/entry/${t}/reload`),
        m = (e, t) =>
          e.callWS({
            type: "config_entries/disable",
            entry_id: t,
            disabled_by: "user",
          }),
        p = (e, t) =>
          e.callWS({
            type: "config_entries/disable",
            entry_id: t,
            disabled_by: null,
          }),
        g = (e, t) => {
          if (!t) return e;
          const i = e.find((e) => e.entry_id === t);
          if (!i) return e;
          return [i, ...e.filter((e) => e.entry_id !== t)];
        };
    },
    95276: function (e, t, i) {
      "use strict";
      i.d(t, {
        $G: () => u,
        $g: () => l,
        CV: () => p,
        He: () => h,
        LO: () => d,
        cA: () => c,
        fC: () => m,
        uo: () => g,
        wL: () => s,
      });
      i(63721),
        i(19083),
        i(61893),
        i(9359),
        i(56475),
        i(70104),
        i(19423),
        i(40251),
        i(61006);
      var n = i(73850),
        a = i(47194),
        o = i(96194),
        r = i(1416);
      let s = (function (e) {
          return (
            (e.NeedsAction = "needs_action"), (e.Completed = "completed"), e
          );
        })({}),
        d = (function (e) {
          return (
            (e.NONE = "none"),
            (e.ALPHA_ASC = "alpha_asc"),
            (e.ALPHA_DESC = "alpha_desc"),
            (e.DUEDATE_ASC = "duedate_asc"),
            (e.DUEDATE_DESC = "duedate_desc"),
            e
          );
        })({}),
        l = (function (e) {
          return (
            (e[(e.CREATE_TODO_ITEM = 1)] = "CREATE_TODO_ITEM"),
            (e[(e.DELETE_TODO_ITEM = 2)] = "DELETE_TODO_ITEM"),
            (e[(e.UPDATE_TODO_ITEM = 4)] = "UPDATE_TODO_ITEM"),
            (e[(e.MOVE_TODO_ITEM = 8)] = "MOVE_TODO_ITEM"),
            (e[(e.SET_DUE_DATE_ON_ITEM = 16)] = "SET_DUE_DATE_ON_ITEM"),
            (e[(e.SET_DUE_DATETIME_ON_ITEM = 32)] = "SET_DUE_DATETIME_ON_ITEM"),
            (e[(e.SET_DESCRIPTION_ON_ITEM = 64)] = "SET_DESCRIPTION_ON_ITEM"),
            e
          );
        })({});
      const c = (e) =>
          Object.keys(e.states)
            .filter(
              (t) => "todo" === (0, n.M)(t) && !(0, o.rk)(e.states[t].state),
            )
            .map((t) =>
              Object.assign(
                Object.assign({}, e.states[t]),
                {},
                { entity_id: t, name: (0, a.C)(e.states[t]) },
              ),
            )
            .sort((t, i) => (0, r.$K)(t.name, i.name, e.locale.language)),
        h = (e, t, i) =>
          e.connection.subscribeMessage(i, {
            type: "todo/item/subscribe",
            entity_id: t,
          }),
        u = (e, t, i) => {
          var n, a;
          return e.callService(
            "todo",
            "update_item",
            {
              item: i.uid,
              rename: i.summary,
              status: i.status,
              description: i.description,
              due_datetime:
                null !== (n = i.due) && void 0 !== n && n.includes("T")
                  ? i.due
                  : void 0,
              due_date:
                void 0 === i.due ||
                (null !== (a = i.due) && void 0 !== a && a.includes("T"))
                  ? void 0
                  : i.due,
            },
            { entity_id: t },
          );
        },
        m = (e, t, i) => {
          var n, a;
          return e.callService(
            "todo",
            "add_item",
            {
              item: i.summary,
              description: i.description || void 0,
              due_datetime:
                null !== (n = i.due) && void 0 !== n && n.includes("T")
                  ? i.due
                  : void 0,
              due_date:
                void 0 === i.due ||
                (null !== (a = i.due) && void 0 !== a && a.includes("T"))
                  ? void 0
                  : i.due,
            },
            { entity_id: t },
          );
        },
        p = (e, t, i) =>
          e.callService("todo", "remove_item", { item: i }, { entity_id: t }),
        g = (e, t, i, n) =>
          e.callWS({
            type: "todo/item/move",
            entity_id: t,
            uid: i,
            previous_uid: n,
          });
    },
    17808: function (e, t, i) {
      "use strict";
      i.d(t, { t: () => a });
      i(71695), i(19423), i(40251), i(47021);
      var n = i(36522);
      const a = (e, t) =>
        new Promise((a) => {
          const o = t.cancel,
            r = t.submit;
          (0, n.B)(e, "show-dialog", {
            dialogTag: "dialog-enter-code",
            dialogImport: () =>
              Promise.all([i.e("46379"), i.e("4944")]).then(i.bind(i, 3301)),
            dialogParams: Object.assign(
              Object.assign({}, t),
              {},
              {
                cancel: () => {
                  a(null), o && o();
                },
                submit: (e) => {
                  a(e), r && r(e);
                },
              },
            ),
          });
        });
    },
    96530: function (e, t, i) {
      "use strict";
      i.d(t, { X: () => o, y: () => a });
      var n = i(92636);
      const a = [
          "input_boolean",
          "input_button",
          "input_text",
          "input_number",
          "input_datetime",
          "input_select",
          "counter",
          "timer",
          "schedule",
        ],
        o = (0, n.z)(a);
    },
    62037: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.d(t, { Do: () => b, Z6: () => f, l$: () => _ });
          i(71695),
            i(40251),
            i(92519),
            i(42179),
            i(89256),
            i(24931),
            i(88463),
            i(57449),
            i(19814),
            i(47021);
          var a = i(28113),
            o = i(49e3),
            r = (i(3613), i(49025), i(3709)),
            s = i(49461),
            d = i(27526),
            l = i(88374),
            c = i(59913),
            h = i(40598),
            u = i(53251),
            m = i(50625),
            p = i(40249),
            g = e([a, o, r, s, d, l, c, h, u, m]);
          [a, o, r, s, d, l, c, h, u, m] = g.then ? (await g)() : g;
          const y = new Set([
              "entity",
              "entities",
              "button",
              "entity-button",
              "glance",
              "grid",
              "section",
              "light",
              "sensor",
              "thermostat",
              "weather-forecast",
              "tile",
              "heading",
            ]),
            v = {
              "alarm-panel": () =>
                Promise.all([i.e("46379"), i.e("84269")]).then(
                  i.bind(i, 40036),
                ),
              area: () =>
                Promise.all([
                  i.e("3219"),
                  i.e("69577"),
                  i.e("79931"),
                  i.e("37910"),
                ]).then(i.bind(i, 82820)),
              calendar: () =>
                Promise.all([
                  i.e("49016"),
                  i.e("78018"),
                  i.e("52762"),
                  i.e("45898"),
                  i.e("1117"),
                ]).then(i.bind(i, 18377)),
              conditional: () => i.e("8715").then(i.bind(i, 22194)),
              "empty-state": () => i.e("18248").then(i.bind(i, 98962)),
              "energy-compare": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("15590"),
                ]).then(i.bind(i, 54586)),
              "energy-carbon-consumed-gauge": () =>
                Promise.all([
                  i.e("26202"),
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("32654"),
                ]).then(i.bind(i, 67790)),
              "energy-date-selection": () =>
                Promise.all([
                  i.e("46379"),
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("11012"),
                  i.e("72743"),
                  i.e("27232"),
                  i.e("38769"),
                ]).then(i.bind(i, 23893)),
              "energy-devices-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("87969"),
                ]).then(i.bind(i, 18709)),
              "energy-devices-detail-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("41163"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("63697"),
                ]).then(i.bind(i, 36681)),
              "energy-distribution": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("16160"),
                ]).then(i.bind(i, 93892)),
              "energy-gas-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("41163"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("61217"),
                ]).then(i.bind(i, 74257)),
              "energy-water-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("41163"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("19764"),
                ]).then(i.bind(i, 52081)),
              "energy-grid-neutrality-gauge": () =>
                Promise.all([
                  i.e("26202"),
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("90564"),
                ]).then(i.bind(i, 4117)),
              "energy-solar-consumed-gauge": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("84464"),
                ]).then(i.bind(i, 33637)),
              "energy-self-sufficiency-gauge": () =>
                Promise.all([
                  i.e("26202"),
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("43752"),
                ]).then(i.bind(i, 70477)),
              "energy-solar-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("41163"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("85745"),
                ]).then(i.bind(i, 63)),
              "energy-sources-table": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("66018"),
                  i.e("72743"),
                  i.e("21483"),
                ]).then(i.bind(i, 74549)),
              "energy-usage-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("41163"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("51171"),
                ]).then(i.bind(i, 32672)),
              "energy-sankey": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("50382"),
                  i.e("23390"),
                  i.e("72743"),
                  i.e("87593"),
                  i.e("64409"),
                ]).then(i.bind(i, 10782)),
              "entity-filter": () => i.e("94369").then(i.bind(i, 91308)),
              error: () => i.e("37269").then(i.bind(i, 5252)),
              gauge: () => i.e("40389").then(i.bind(i, 10188)),
              "history-graph": () =>
                Promise.all([
                  i.e("50382"),
                  i.e("77535"),
                  i.e("57367"),
                  i.e("87593"),
                  i.e("25804"),
                  i.e("6473"),
                  i.e("16224"),
                ]).then(i.bind(i, 26799)),
              "horizontal-stack": () => i.e("94618").then(i.bind(i, 41023)),
              humidifier: () => i.e("6892").then(i.bind(i, 18344)),
              iframe: () => i.e("47473").then(i.bind(i, 28528)),
              logbook: () =>
                Promise.all([i.e("65499"), i.e("3098")]).then(i.bind(i, 18573)),
              map: () =>
                Promise.all([
                  i.e("35637"),
                  i.e("25804"),
                  i.e("49554"),
                  i.e("95077"),
                ]).then(i.bind(i, 11823)),
              markdown: () =>
                Promise.all([i.e("52430"), i.e("30575")]).then(
                  i.bind(i, 91713),
                ),
              "media-control": () =>
                Promise.all([i.e("22041"), i.e("59105")]).then(
                  i.bind(i, 78793),
                ),
              "picture-elements": () =>
                Promise.all([
                  i.e("46379"),
                  i.e("24199"),
                  i.e("78943"),
                  i.e("41258"),
                  i.e("7010"),
                  i.e("42311"),
                  i.e("46529"),
                  i.e("27090"),
                  i.e("3049"),
                  i.e("69577"),
                  i.e("79931"),
                  i.e("3371"),
                  i.e("10745"),
                  i.e("72308"),
                  i.e("71683"),
                ]).then(i.bind(i, 31221)),
              "picture-entity": () =>
                Promise.all([
                  i.e("70065"),
                  i.e("69577"),
                  i.e("79931"),
                  i.e("14517"),
                ]).then(i.bind(i, 54529)),
              "picture-glance": () =>
                Promise.all([
                  i.e("71034"),
                  i.e("69577"),
                  i.e("79931"),
                  i.e("99457"),
                ]).then(i.bind(i, 57733)),
              picture: () => i.e("23339").then(i.bind(i, 69773)),
              "plant-status": () => i.e("63519").then(i.bind(i, 84255)),
              "recovery-mode": () =>
                Promise.all([
                  i.e("5080"),
                  i.e("44680"),
                  i.e("837"),
                  i.e("31664"),
                  i.e("39124"),
                ]).then(i.bind(i, 34713)),
              "todo-list": () =>
                Promise.all([
                  i.e("46379"),
                  i.e("41258"),
                  i.e("52430"),
                  i.e("83966"),
                ]).then(i.bind(i, 33841)),
              "shopping-list": () =>
                Promise.all([
                  i.e("46379"),
                  i.e("41258"),
                  i.e("52430"),
                  i.e("83966"),
                  i.e("91480"),
                ]).then(i.bind(i, 28081)),
              starting: () => i.e("32197").then(i.bind(i, 50957)),
              "statistics-graph": () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("51062"),
                ]).then(i.bind(i, 56615)),
              statistic: () =>
                Promise.all([
                  i.e("3134"),
                  i.e("28612"),
                  i.e("12767"),
                  i.e("72743"),
                  i.e("92692"),
                ]).then(i.bind(i, 98578)),
              "vertical-stack": () => i.e("13157").then(i.bind(i, 73753)),
            },
            _ = (e) => (0, p.Xm)("card", e, y, v, void 0, void 0),
            f = (e) => (0, p.Tw)("card", e, y, v, void 0, void 0),
            b = (e) => (0, p.ED)(e, "card", y, v);
          n();
        } catch (y) {
          n(y);
        }
      });
    },
    64830: function (e, t, i) {
      "use strict";
      i.d(t, { Q: () => r, t: () => o });
      i(71695), i(40251), i(47021);
      var n = i(40249);
      const a = {
          picture: () => i.e("64167").then(i.bind(i, 75142)),
          buttons: () =>
            Promise.all([i.e("59821"), i.e("65970")]).then(i.bind(i, 46667)),
          graph: () =>
            Promise.all([i.e("25804"), i.e("87828")]).then(i.bind(i, 43403)),
        },
        o = (e) => (0, n.Tw)("header-footer", e, void 0, a, void 0, void 0),
        r = (e) => (0, n.ED)(e, "header-footer", void 0, a);
    },
    39305: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, n) {
        try {
          i.r(t);
          var a = i(61701),
            o = i(72621),
            r =
              (i(71695),
              i(9359),
              i(70104),
              i(40251),
              i(19134),
              i(97003),
              i(47021),
              i(18672)),
            s = (i(2060), i(57243)),
            d = i(50778),
            l = i(27486),
            c = i(72344),
            h = i(68958),
            u = i(36522),
            m = i(47194),
            p = i(75278),
            g = i(83523),
            y = i(35830),
            v = i(58776),
            _ = (i(59826), i(20130), i(23334), i(7285), i(43344), i(51223)),
            f = (i(37583), i(47593), i(75101)),
            b = i(63318),
            w = i(57816),
            k = i(95276),
            x = i(38572),
            T = i(76131),
            I = i(91163),
            E = i(28008),
            $ = i(11734),
            D = i(4026),
            M = e([_, $, r]);
          [_, $, r] = M.then ? (await M)() : M;
          let Z,
            A,
            C,
            z,
            P,
            O,
            L,
            S,
            H,
            F,
            V = (e) => e;
          const j =
              "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
            W =
              "M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M17,11H15V9H17V11M13,11H11V9H13V11M9,11H7V9H9V11Z",
            N =
              "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",
            U =
              "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
            B =
              "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
            R = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
          (0, a.Z)(
            [(0, d.Mo)("ha-panel-todo")],
            function (e, t) {
              class i extends t {
                constructor(...t) {
                  super(...t), e(this);
                }
              }
              return {
                F: i,
                d: [
                  {
                    kind: "field",
                    decorators: [(0, d.Cb)({ attribute: !1 })],
                    key: "hass",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, d.Cb)({ type: Boolean, reflect: !0 })],
                    key: "narrow",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, d.Cb)({ type: Boolean, reflect: !0 })],
                    key: "mobile",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [
                      (0, h.t)({ key: "selectedTodoEntity", state: !0 }),
                    ],
                    key: "_entityId",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    key: "_headerHeight",
                    value() {
                      return 56;
                    },
                  },
                  {
                    kind: "field",
                    key: "_showPaneController",
                    value() {
                      return new r.Z(this, {
                        callback: (e) => {
                          var t;
                          return (
                            (null === (t = e[0]) || void 0 === t
                              ? void 0
                              : t.contentRect.width) > 750
                          );
                        },
                      });
                    },
                  },
                  { kind: "field", key: "_mql", value: void 0 },
                  {
                    kind: "field",
                    key: "_conversation",
                    value() {
                      return (0, l.Z)((e) =>
                        (0, c.p)(this.hass, "conversation"),
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "connectedCallback",
                    value: function () {
                      (0, o.Z)(i, "connectedCallback", this, 3)([]),
                        (this._mql = window.matchMedia(
                          "(max-width: 450px), all and (max-height: 500px)",
                        )),
                        this._mql.addListener(this._setIsMobile),
                        (this.mobile = this._mql.matches);
                      const e = getComputedStyle(this);
                      this._headerHeight = Number(
                        e.getPropertyValue("--header-height").replace("px", ""),
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "disconnectedCallback",
                    value: function () {
                      var e;
                      (0, o.Z)(i, "disconnectedCallback", this, 3)([]),
                        null === (e = this._mql) ||
                          void 0 === e ||
                          e.removeListener(this._setIsMobile),
                        (this._mql = void 0);
                    },
                  },
                  {
                    kind: "field",
                    key: "_setIsMobile",
                    value() {
                      return (e) => {
                        this.mobile = e.matches;
                      };
                    },
                  },
                  {
                    kind: "method",
                    key: "willUpdate",
                    value: function (e) {
                      if (
                        ((0, o.Z)(i, "willUpdate", this, 3)([e]),
                        !this.hasUpdated)
                      ) {
                        this.hass.loadFragmentTranslation("lovelace");
                        const e = (0, v.io)("entity_id");
                        var t;
                        if (e) this._entityId = e;
                        else if (
                          (this._entityId &&
                            !(this._entityId in this.hass.states) &&
                            (this._entityId = void 0),
                          !this._entityId)
                        )
                          this._entityId =
                            null === (t = (0, k.cA)(this.hass)[0]) ||
                            void 0 === t
                              ? void 0
                              : t.entity_id;
                      }
                      (!e.has("_entityId") && this.hasUpdated) ||
                        this._setupTodoElement();
                    },
                  },
                  {
                    kind: "method",
                    key: "_setupTodoElement",
                    value: function () {
                      this._entityId
                        ? (0, g.c)(
                            (0, y.q)((0, v.ou)({ entity_id: this._entityId })),
                            { replace: !0 },
                          )
                        : (0, g.c)((0, y.q)(""), { replace: !0 });
                    },
                  },
                  {
                    kind: "field",
                    key: "_cardConfig",
                    value() {
                      return (0, l.Z)((e) => ({
                        type: "todo-list",
                        entity: e,
                      }));
                    },
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function () {
                      var e, t, i;
                      const n = this._entityId
                          ? this.hass.entities[this._entityId]
                          : void 0,
                        a = this._entityId
                          ? this.hass.states[this._entityId]
                          : void 0,
                        o =
                          null !== (e = this._showPaneController.value) &&
                          void 0 !== e
                            ? e
                            : !this.narrow,
                        r = (0, k.cA)(this.hass).map((e) =>
                          (0, s.dy)(
                            Z ||
                              (Z = V`<ha-list-item graphic="icon" @click=${0} .entityId=${0} .activated=${0}>
          <ha-state-icon .stateObj=${0} .hass=${0} slot="graphic"></ha-state-icon>${0}
        </ha-list-item> `),
                            this._handleEntityPicked,
                            e.entity_id,
                            e.entity_id === this._entityId,
                            e,
                            this.hass,
                            e.name,
                          ),
                        );
                      return (0, s.dy)(
                        A ||
                          (A = V`
      <ha-two-pane-top-app-bar-fixed .pane=${0} footer>
        <ha-menu-button slot="navigationIcon" .hass=${0} .narrow=${0}></ha-menu-button>
        <div slot="title">
          ${0}
        </div>
        <mwc-list slot="pane" activatable>${0}</mwc-list>
        ${0}
        <ha-button-menu slot="actionItems">
          <ha-icon-button slot="trigger" .label=${0} .path=${0}></ha-icon-button>
          ${0}
          <li divider role="separator"></li>
          <ha-list-item graphic="icon" @click=${0}>
            <ha-svg-icon .path=${0} slot="graphic">
            </ha-svg-icon>
            ${0}
          </ha-list-item>
          ${0}
        </ha-button-menu>
        <div id="columns">
          <div class="column">
            ${0}
          </div>
        </div>
        ${0}
      </ha-two-pane-top-app-bar-fixed>
    `),
                        o,
                        this.hass,
                        this.narrow,
                        o
                          ? this.hass.localize("panel.todo")
                          : (0, s.dy)(
                              C ||
                                (C = V`<ha-button-menu class="lists" activatable fixed .noAnchor=${0} .y=${0} .x=${0}>
                <ha-button slot="trigger">
                  <div>
                    ${0}
                  </div>
                  <ha-svg-icon slot="trailingIcon" .path=${0}></ha-svg-icon>
                </ha-button>
                ${0}
                ${0}
              </ha-button-menu>`),
                              this.mobile,
                              this.mobile
                                ? this._headerHeight / 2
                                : this._headerHeight / 4,
                              this.mobile ? 0 : void 0,
                              this._entityId
                                ? a
                                  ? (0, m.C)(a)
                                  : this._entityId
                                : "",
                              j,
                              r,
                              null !== (t = this.hass.user) &&
                                void 0 !== t &&
                                t.is_admin
                                ? (0, s.dy)(
                                    z ||
                                      (z = V`<li divider role="separator"></li>
                      <ha-list-item graphic="icon" @click=${0}>
                        <ha-svg-icon .path=${0} slot="graphic"></ha-svg-icon>
                        ${0}
                      </ha-list-item>`),
                                    this._addList,
                                    R,
                                    this.hass.localize(
                                      "ui.panel.todo.create_list",
                                    ),
                                  )
                                : s.Ld,
                            ),
                        r,
                        o &&
                          null !== (i = this.hass.user) &&
                          void 0 !== i &&
                          i.is_admin
                          ? (0, s.dy)(
                              P ||
                                (P = V`<ha-list-item graphic="icon" slot="pane-footer" @click=${0}>
              <ha-svg-icon .path=${0} slot="graphic"></ha-svg-icon>
              ${0}
            </ha-list-item>`),
                              this._addList,
                              R,
                              this.hass.localize("ui.panel.todo.create_list"),
                            )
                          : s.Ld,
                        "",
                        U,
                        this._conversation(this.hass.config.components)
                          ? (0, s.dy)(
                              O ||
                                (O = V`<ha-list-item graphic="icon" @click=${0} .disabled=${0}>
                <ha-svg-icon .path=${0} slot="graphic">
                </ha-svg-icon>
                ${0}
              </ha-list-item>`),
                              this._showMoreInfoDialog,
                              !this._entityId,
                              B,
                              this.hass.localize("ui.panel.todo.information"),
                            )
                          : s.Ld,
                        this._showVoiceCommandDialog,
                        W,
                        this.hass.localize("ui.panel.todo.assist"),
                        "local_todo" === (null == n ? void 0 : n.platform)
                          ? (0, s.dy)(
                              L ||
                                (L = V` <li divider role="separator"></li>
                <ha-list-item graphic="icon" @click=${0} class="warning" .disabled=${0}>
                  <ha-svg-icon .path=${0} slot="graphic" class="warning">
                  </ha-svg-icon>
                  ${0}
                </ha-list-item>`),
                              this._deleteList,
                              !this._entityId,
                              N,
                              this.hass.localize("ui.panel.todo.delete_list"),
                            )
                          : s.Ld,
                        this._entityId
                          ? (0, s.dy)(
                              S ||
                                (S = V`
                  <hui-card .hass=${0} .config=${0}></hui-card>
                `),
                              this.hass,
                              this._cardConfig(this._entityId),
                            )
                          : s.Ld,
                        a && (0, p.e)(a, k.$g.CREATE_TODO_ITEM)
                          ? (0, s.dy)(
                              H ||
                                (H = V`<ha-fab .label=${0} extended @click=${0}>
              <ha-svg-icon slot="icon" .path=${0}></ha-svg-icon>
            </ha-fab>`),
                              this.hass.localize("ui.panel.todo.add_item"),
                              this._addItem,
                              R,
                            )
                          : s.Ld,
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "_handleEntityPicked",
                    value: function (e) {
                      this._entityId = e.currentTarget.entityId;
                    },
                  },
                  {
                    kind: "method",
                    key: "_addList",
                    value: async function () {
                      var e;
                      (0, x.t)(this, {
                        startFlowHandler: "local_todo",
                        showAdvanced:
                          null === (e = this.hass.userData) || void 0 === e
                            ? void 0
                            : e.showAdvanced,
                        manifest: await (0, w.t4)(this.hass, "local_todo"),
                      });
                    },
                  },
                  {
                    kind: "method",
                    key: "_showMoreInfoDialog",
                    value: function () {
                      this._entityId &&
                        (0, u.B)(this, "hass-more-info", {
                          entityId: this._entityId,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "_deleteList",
                    value: async function () {
                      var e;
                      if (!this._entityId) return;
                      const t = await (0, b.L3)(this.hass, this._entityId);
                      if ("local_todo" !== t.platform) return;
                      const i = t.config_entry_id;
                      if (!i) return;
                      if (
                        !(await (0, T.showConfirmationDialog)(this, {
                          title: this.hass.localize(
                            "ui.panel.todo.delete_confirm_title",
                            {
                              name:
                                this._entityId in this.hass.states
                                  ? (0, m.C)(this.hass.states[this._entityId])
                                  : this._entityId,
                            },
                          ),
                          text: this.hass.localize(
                            "ui.panel.todo.delete_confirm_text",
                          ),
                          confirmText: this.hass.localize("ui.common.delete"),
                          dismissText: this.hass.localize("ui.common.cancel"),
                          destructive: !0,
                        }))
                      )
                        return;
                      const n = await (0, f.iJ)(this.hass, i);
                      (this._entityId =
                        null === (e = (0, k.cA)(this.hass)[0]) || void 0 === e
                          ? void 0
                          : e.entity_id),
                        n.require_restart &&
                          (0, T.showAlertDialog)(this, {
                            text: this.hass.localize(
                              "ui.panel.todo.restart_confirm",
                            ),
                          });
                    },
                  },
                  {
                    kind: "method",
                    key: "_showVoiceCommandDialog",
                    value: function () {
                      (0, I._)(this, this.hass, { pipeline_id: "last_used" });
                    },
                  },
                  {
                    kind: "method",
                    key: "_addItem",
                    value: function () {
                      (0, D.B)(this, { entity: this._entityId });
                    },
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function () {
                      return [
                        E.Qx,
                        (0, s.iv)(
                          F ||
                            (F = V`:host{display:block}#columns{display:flex;flex-direction:row;justify-content:center;margin:8px;padding-bottom:70px}.column{flex:1 0 0;max-width:500px;min-width:0}:host([mobile]) .lists{--mdc-menu-min-width:100vw}:host(:not([mobile])) .lists ha-list-item{max-width:calc(100vw - 120px)}:host([mobile]) ha-button-menu{--mdc-shape-medium:0 0 var(--mdc-shape-medium) var(--mdc-shape-medium)}ha-button-menu{max-width:100%}ha-button-menu ha-button{--button-slot-container-overflow:hidden;max-width:100%;--mdc-theme-primary:currentColor;--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:var(
            --mdc-typography-headline6-font-size,
            1.25rem
          );--mdc-typography-button-font-weight:var(
            --mdc-typography-headline6-font-weight,
            500
          );--mdc-typography-button-letter-spacing:var(
            --mdc-typography-headline6-letter-spacing,
            0.0125em
          );--mdc-typography-button-line-height:var(
            --mdc-typography-headline6-line-height,
            2rem
          );--button-height:40px}ha-button-menu ha-button div{text-overflow:ellipsis;width:100%;overflow:hidden;white-space:nowrap;display:block}ha-fab{position:fixed;right:16px;bottom:16px;inset-inline-end:16px;inset-inline-start:initial}`),
                        ),
                      ];
                    },
                  },
                ],
              };
            },
            s.oi,
          );
          n();
        } catch (Z) {
          n(Z);
        }
      });
    },
    4026: function (e, t, i) {
      "use strict";
      i.d(t, { B: () => o });
      i(71695), i(40251), i(47021);
      var n = i(36522);
      const a = () =>
          Promise.all([
            i.e("46379"),
            i.e("41258"),
            i.e("3134"),
            i.e("28612"),
            i.e("38336"),
            i.e("63019"),
          ]).then(i.bind(i, 54712)),
        o = (e, t) => {
          (0, n.B)(e, "show-dialog", {
            dialogTag: "dialog-todo-item-editor",
            dialogImport: a,
            dialogParams: t,
          });
        };
    },
    22152: function () {
      Element.prototype.toggleAttribute ||
        (Element.prototype.toggleAttribute = function (e, t) {
          return (
            void 0 !== t && (t = !!t),
            this.hasAttribute(e)
              ? !!t || (this.removeAttribute(e), !1)
              : !1 !== t && (this.setAttribute(e, ""), !0)
          );
        });
    },
  },
]);
//# sourceMappingURL=30381.5d1352232d4a5b23.js.map
