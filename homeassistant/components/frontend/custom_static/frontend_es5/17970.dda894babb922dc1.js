"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["17970"],
  {
    75011: function (e, t, n) {
      n.d(t, { I: () => r, k: () => i });
      n(71695),
        n(92519),
        n(42179),
        n(89256),
        n(24931),
        n(88463),
        n(57449),
        n(19814),
        n(47021);
      const i = new Set([
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
      function r(e) {
        return i.has(e) ? `var(--${e}-color)` : e;
      }
    },
    94947: function (e, t, n) {
      n.a(e, async function (e, i) {
        try {
          n.d(t, { G: () => l });
          var r = n(16485),
            o = n(27486),
            u = n(27046),
            a = e([r, u]);
          [r, u] = a.then ? (await a)() : a;
          const s = (0, o.Z)(
              (e) =>
                new Intl.RelativeTimeFormat(e.language, { numeric: "auto" }),
            ),
            l = (e, t, n, i = !0) => {
              const r = (0, u.W)(e, n, t);
              return i
                ? s(t).format(r.value, r.unit)
                : Intl.NumberFormat(t.language, {
                    style: "unit",
                    unit: r.unit,
                    unitDisplay: "long",
                  }).format(Math.abs(r.value));
            };
          i();
        } catch (s) {
          i(s);
        }
      });
    },
    5839: function (e, t, n) {
      n.d(t, { v: () => o });
      n(19083);
      var i = n(96194),
        r = n(73850);
      function o(e, t) {
        const n = (0, r.M)(e.entity_id),
          o = void 0 !== t ? t : null == e ? void 0 : e.state;
        if (["button", "event", "input_button", "scene"].includes(n))
          return o !== i.nZ;
        if ((0, i.rk)(o)) return !1;
        if (o === i.PX && "alert" !== n) return !1;
        switch (n) {
          case "alarm_control_panel":
            return "disarmed" !== o;
          case "alert":
            return "idle" !== o;
          case "cover":
          case "valve":
            return "closed" !== o;
          case "device_tracker":
          case "person":
            return "not_home" !== o;
          case "lawn_mower":
            return ["mowing", "error"].includes(o);
          case "lock":
            return "locked" !== o;
          case "media_player":
            return "standby" !== o;
          case "vacuum":
            return !["idle", "docked", "paused"].includes(o);
          case "plant":
            return "problem" === o;
          case "group":
            return ["on", "home", "open", "locked", "problem"].includes(o);
          case "timer":
            return "active" === o;
          case "camera":
            return "streaming" === o;
        }
        return !0;
      }
    },
    27046: function (e, t, n) {
      n.a(e, async function (e, i) {
        try {
          n.d(t, { W: () => h });
          n(19423);
          var r = n(13809),
            o = n(29558),
            u = n(94763),
            a = n(19631),
            s = e([a]);
          a = (s.then ? (await s)() : s)[0];
          const d = 1e3,
            c = 60,
            m = 60 * c;
          function h(e, t = Date.now(), n, i = {}) {
            const s = Object.assign(Object.assign({}, g), i || {}),
              l = (+e - +t) / d;
            if (Math.abs(l) < s.second)
              return { value: Math.round(l), unit: "second" };
            const h = l / c;
            if (Math.abs(h) < s.minute)
              return { value: Math.round(h), unit: "minute" };
            const y = l / m;
            if (Math.abs(y) < s.hour)
              return { value: Math.round(y), unit: "hour" };
            const b = new Date(e),
              f = new Date(t);
            b.setHours(0, 0, 0, 0), f.setHours(0, 0, 0, 0);
            const p = (0, r.j)(b, f);
            if (0 === p) return { value: Math.round(y), unit: "hour" };
            if (Math.abs(p) < s.day) return { value: p, unit: "day" };
            const v = (0, a.Bt)(n),
              k = (0, o.z)(b, { weekStartsOn: v }),
              w = (0, o.z)(f, { weekStartsOn: v }),
              _ = (0, u.p)(k, w);
            if (0 === _) return { value: p, unit: "day" };
            if (Math.abs(_) < s.week) return { value: _, unit: "week" };
            const E = b.getFullYear() - f.getFullYear(),
              C = 12 * E + b.getMonth() - f.getMonth();
            return 0 === C
              ? { value: _, unit: "week" }
              : Math.abs(C) < s.month || 0 === E
              ? { value: C, unit: "month" }
              : { value: Math.round(E), unit: "year" };
          }
          const g = {
            second: 45,
            minute: 45,
            hour: 22,
            day: 5,
            week: 4,
            month: 11,
          };
          i();
        } catch (l) {
          i(l);
        }
      });
    },
    34273: function (e, t, n) {
      var i = n(61701),
        r = n(72621),
        o = (n(71695), n(9359), n(31526), n(47021), n(22997), n(57243)),
        u = n(50778),
        a = n(5111),
        s = n(76525);
      let l,
        d,
        c = (e) => e;
      (0, i.Z)(
        [(0, u.Mo)("ha-button-menu")],
        function (e, t) {
          class n extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: n,
            d: [
              { kind: "field", key: s.gA, value: void 0 },
              {
                kind: "field",
                decorators: [(0, u.Cb)()],
                key: "corner",
                value() {
                  return "BOTTOM_START";
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ attribute: "menu-corner" })],
                key: "menuCorner",
                value() {
                  return "START";
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Number })],
                key: "x",
                value() {
                  return null;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Number })],
                key: "y",
                value() {
                  return null;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Boolean })],
                key: "multi",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Boolean })],
                key: "activatable",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Boolean })],
                key: "disabled",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.Cb)({ type: Boolean })],
                key: "fixed",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [
                  (0, u.Cb)({ type: Boolean, attribute: "no-anchor" }),
                ],
                key: "noAnchor",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, u.IO)("mwc-menu", !0)],
                key: "_menu",
                value: void 0,
              },
              {
                kind: "get",
                key: "items",
                value: function () {
                  var e;
                  return null === (e = this._menu) || void 0 === e
                    ? void 0
                    : e.items;
                },
              },
              {
                kind: "get",
                key: "selected",
                value: function () {
                  var e;
                  return null === (e = this._menu) || void 0 === e
                    ? void 0
                    : e.selected;
                },
              },
              {
                kind: "method",
                key: "focus",
                value: function () {
                  var e, t;
                  null !== (e = this._menu) && void 0 !== e && e.open
                    ? this._menu.focusItemAtIndex(0)
                    : null === (t = this._triggerButton) ||
                      void 0 === t ||
                      t.focus();
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, o.dy)(
                    l ||
                      (l = c`
      <div @click=${0}>
        <slot name="trigger" @slotchange=${0}></slot>
      </div>
      <mwc-menu .corner=${0} .menuCorner=${0} .fixed=${0} .multi=${0} .activatable=${0} .y=${0} .x=${0}>
        <slot></slot>
      </mwc-menu>
    `),
                    this._handleClick,
                    this._setTriggerAria,
                    this.corner,
                    this.menuCorner,
                    this.fixed,
                    this.multi,
                    this.activatable,
                    this.y,
                    this.x,
                  );
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  (0, r.Z)(n, "firstUpdated", this, 3)([e]),
                    "rtl" === a.E.document.dir &&
                      this.updateComplete.then(() => {
                        this.querySelectorAll("mwc-list-item").forEach((e) => {
                          const t = document.createElement("style");
                          (t.innerHTML =
                            "span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}"),
                            e.shadowRoot.appendChild(t);
                        });
                      });
                },
              },
              {
                kind: "method",
                key: "_handleClick",
                value: function () {
                  this.disabled ||
                    ((this._menu.anchor = this.noAnchor ? null : this),
                    this._menu.show());
                },
              },
              {
                kind: "get",
                key: "_triggerButton",
                value: function () {
                  return this.querySelector(
                    'ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]',
                  );
                },
              },
              {
                kind: "method",
                key: "_setTriggerAria",
                value: function () {
                  this._triggerButton &&
                    (this._triggerButton.ariaHasPopup = "menu");
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return (0, o.iv)(
                    d ||
                      (d = c`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`),
                  );
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    96194: function (e, t, n) {
      n.d(t, {
        ON: () => u,
        PX: () => a,
        V_: () => s,
        lz: () => o,
        nZ: () => r,
        rk: () => d,
      });
      var i = n(92636);
      const r = "unavailable",
        o = "unknown",
        u = "on",
        a = "off",
        s = [r, o],
        l = [r, o, a],
        d = (0, i.z)(s);
      (0, i.z)(l);
    },
    58968: function (e, t, n) {
      n.d(t, {
        MV: () => l,
        Wg: () => a,
        Xk: () => u,
        aT: () => i,
        b_: () => o,
        yP: () => s,
      });
      n(88044);
      const i = (e, t) => e.callApi("POST", "tts_get_url", t),
        r = "media-source://tts/",
        o = (e) => e.startsWith(r),
        u = (e) => e.substring(19),
        a = (e, t, n) =>
          e.callWS({ type: "tts/engine/list", language: t, country: n }),
        s = (e, t) => e.callWS({ type: "tts/engine/get", engine_id: t }),
        l = (e, t, n) =>
          e.callWS({ type: "tts/engine/voices", engine_id: t, language: n });
    },
    40249: function (e, t, n) {
      n.d(t, {
        ED: () => m,
        Fr: () => u,
        N2: () => o,
        Tw: () => d,
        Xm: () => c,
      });
      n(52247), n(19083), n(71695), n(40251), n(61006), n(47021);
      var i = n(36522),
        r = n(17951);
      const o = (e, t) => ({ type: "error", error: e, origConfig: t }),
        u = (e, t) => ({ type: "error", error: e, origConfig: t }),
        a = (e, t) => {
          const n = document.createElement(e);
          return n.setConfig(t), n;
        },
        s = (e, t, i) =>
          "badge" === e
            ? ((e) => {
                const t = document.createElement("hui-error-badge");
                return (
                  customElements.get("hui-error-badge")
                    ? t.setConfig(e)
                    : (Promise.all([
                        n.e("35671"),
                        n.e("2142"),
                        n.e("8795"),
                        n.e("32146"),
                        n.e("9296"),
                        n.e("31751"),
                        n.e("63055"),
                        n.e("70147"),
                        n.e("69577"),
                        n.e("44251"),
                        n.e("95752"),
                        n.e("79931"),
                        n.e("60487"),
                        n.e("3371"),
                        n.e("1466"),
                        n.e("38326"),
                        n.e("10745"),
                        n.e("70639"),
                        n.e("25804"),
                        n.e("31794"),
                        n.e("97986"),
                      ]).then(n.bind(n, 72814)),
                      customElements.whenDefined("hui-error-badge").then(() => {
                        customElements.upgrade(t), t.setConfig(e);
                      })),
                  t
                );
              })(u(t, i))
            : "heading-badge" === e
            ? ((e) => {
                const t = document.createElement("hui-error-heading-badge");
                return (
                  customElements.get("hui-error-heading-badge")
                    ? t.setConfig(e)
                    : (Promise.all([
                        n.e("35671"),
                        n.e("2142"),
                        n.e("8795"),
                        n.e("32146"),
                        n.e("9296"),
                        n.e("31751"),
                        n.e("63055"),
                        n.e("70147"),
                        n.e("69577"),
                        n.e("44251"),
                        n.e("95752"),
                        n.e("79931"),
                        n.e("60487"),
                        n.e("3371"),
                        n.e("1466"),
                        n.e("38326"),
                        n.e("10745"),
                        n.e("70639"),
                        n.e("25804"),
                        n.e("31794"),
                        n.e("62315"),
                      ]).then(n.bind(n, 5031)),
                      customElements
                        .whenDefined("hui-error-heading-badge")
                        .then(() => {
                          customElements.upgrade(t), t.setConfig(e);
                        })),
                  t
                );
              })(((e, t) => ({ type: "error", error: e, origConfig: t }))(t, i))
            : ((e) => {
                const t = document.createElement("hui-error-card");
                return (
                  customElements.get("hui-error-card")
                    ? t.setConfig(e)
                    : (Promise.all([
                        n.e("2142"),
                        n.e("8795"),
                        n.e("9962"),
                      ]).then(n.bind(n, 5252)),
                      customElements.whenDefined("hui-error-card").then(() => {
                        customElements.upgrade(t), t.setConfig(e);
                      })),
                  t
                );
              })(o(t, i)),
        l = (e) => ((0, r.IT)(e) ? (0, r.V0)(e) : void 0),
        d = (e, t, n, i, r, o) => {
          try {
            return c(e, t, n, i, r, o);
          } catch (u) {
            return console.error(e, t.type, u), s(e, u.message, t);
          }
        },
        c = (e, t, n, r, o, u) => {
          if (!t || "object" != typeof t)
            throw new Error("Config is not an object");
          if (!(t.type || u || (o && "entity" in t)))
            throw new Error("No card type configured");
          const d = t.type ? l(t.type) : void 0;
          if (d)
            return ((e, t, n) => {
              if (customElements.get(t)) return a(t, n);
              const r = s(e, `Custom element doesn't exist: ${t}.`, n);
              if (!t.includes("-")) return r;
              r.style.display = "None";
              const o = window.setTimeout(() => {
                r.style.display = "";
              }, 2e3);
              return (
                customElements.whenDefined(t).then(() => {
                  clearTimeout(o), (0, i.B)(r, "ll-rebuild");
                }),
                r
              );
            })(e, d, t);
          let c;
          if (o && !t.type && t.entity) {
            c = `${o[t.entity.split(".", 1)[0]] || o._domain_not_found}-entity`;
          } else c = t.type || u;
          if (void 0 === c) throw new Error("No type specified");
          const m = `hui-${c}-${e}`;
          if (r && c in r)
            return (
              r[c](),
              ((e, t) => {
                if (customElements.get(e)) return a(e, t);
                const n = document.createElement(e);
                return (
                  customElements.whenDefined(e).then(() => {
                    try {
                      customElements.upgrade(n),
                        (0, i.B)(n, "ll-upgrade"),
                        n.setConfig(t);
                    } catch (e) {
                      (0, i.B)(n, "ll-rebuild");
                    }
                  }),
                  n
                );
              })(m, t)
            );
          if (n && n.has(c)) return a(m, t);
          throw new Error(`Unknown type encountered: ${c}`);
        },
        m = async (e, t, n, i) => {
          const r = l(e);
          if (r) {
            const e = customElements.get(r);
            if (e) return e;
            if (!r.includes("-"))
              throw new Error(`Custom element not found: ${r}`);
            return new Promise((e, t) => {
              setTimeout(
                () => t(new Error(`Custom element not found: ${r}`)),
                2e3,
              ),
                customElements
                  .whenDefined(r)
                  .then(() => e(customElements.get(r)));
            });
          }
          const o = `hui-${e}-${t}`,
            u = customElements.get(o);
          if (n && n.has(e)) return u;
          if (i && e in i) return u || i[e]().then(() => customElements.get(o));
          throw new Error(`Unknown type: ${e}`);
        };
    },
    46542: function (e, t, n) {
      n.a(e, async function (e, i) {
        try {
          n.d(t, { T: () => k, m: () => v });
          n(71695),
            n(40251),
            n(92519),
            n(42179),
            n(89256),
            n(24931),
            n(88463),
            n(57449),
            n(19814),
            n(47021);
          var r = n(72053),
            o = n(35659),
            u = n(52809),
            a = n(40165),
            s = n(82114),
            l = n(21474),
            d = n(31087),
            c = n(90296),
            m = n(42135),
            h = n(40806),
            g = n(40249),
            y = e([r, o, u, a, s, l, d, c, m, h]);
          [r, o, u, a, s, l, d, c, m, h] = y.then ? (await y)() : y;
          const b = new Set([
              "media-player-entity",
              "scene-entity",
              "script-entity",
              "sensor-entity",
              "simple-entity",
              "toggle-entity",
              "button",
              "call-service",
            ]),
            f = {
              "button-entity": () => n.e("44821").then(n.bind(n, 35154)),
              "climate-entity": () => n.e("79702").then(n.bind(n, 54222)),
              "cover-entity": () => n.e("50764").then(n.bind(n, 4806)),
              "date-entity": () =>
                Promise.all([n.e("46379"), n.e("50013")]).then(
                  n.bind(n, 61351),
                ),
              "datetime-entity": () =>
                Promise.all([
                  n.e("46379"),
                  n.e("41258"),
                  n.e("35671"),
                  n.e("3134"),
                  n.e("38336"),
                  n.e("99113"),
                ]).then(n.bind(n, 67429)),
              "event-entity": () => Promise.resolve().then(n.bind(n, 72053)),
              "group-entity": () => n.e("83537").then(n.bind(n, 40445)),
              "input-button-entity": () => n.e("5380").then(n.bind(n, 57548)),
              "humidifier-entity": () => n.e("84999").then(n.bind(n, 88916)),
              "input-datetime-entity": () =>
                Promise.all([
                  n.e("46379"),
                  n.e("41258"),
                  n.e("35671"),
                  n.e("38336"),
                  n.e("55119"),
                ]).then(n.bind(n, 67223)),
              "input-number-entity": () =>
                Promise.all([n.e("46379"), n.e("84605")]).then(
                  n.bind(n, 90516),
                ),
              "input-select-entity": () =>
                Promise.all([n.e("41258"), n.e("35671"), n.e("66868")]).then(
                  n.bind(n, 43),
                ),
              "input-text-entity": () =>
                Promise.all([n.e("46379"), n.e("14673")]).then(
                  n.bind(n, 22623),
                ),
              "lock-entity": () => n.e("99689").then(n.bind(n, 65751)),
              "number-entity": () =>
                Promise.all([n.e("46379"), n.e("88187")]).then(
                  n.bind(n, 77288),
                ),
              "select-entity": () =>
                Promise.all([n.e("41258"), n.e("35671"), n.e("86857")]).then(
                  n.bind(n, 64827),
                ),
              "text-entity": () =>
                Promise.all([n.e("46379"), n.e("86449")]).then(
                  n.bind(n, 90689),
                ),
              "time-entity": () =>
                Promise.all([
                  n.e("46379"),
                  n.e("41258"),
                  n.e("35671"),
                  n.e("38336"),
                  n.e("63586"),
                ]).then(n.bind(n, 4671)),
              "timer-entity": () => n.e("7618").then(n.bind(n, 45363)),
              "update-entity": () => n.e("58400").then(n.bind(n, 97604)),
              "valve-entity": () => n.e("96347").then(n.bind(n, 97937)),
              conditional: () => n.e("79220").then(n.bind(n, 24272)),
              "weather-entity": () =>
                Promise.all([n.e("44251"), n.e("28565")]).then(
                  n.bind(n, 51973),
                ),
              divider: () => n.e("73576").then(n.bind(n, 70568)),
              section: () => n.e("26438").then(n.bind(n, 93665)),
              weblink: () => n.e("41871").then(n.bind(n, 69819)),
              cast: () => n.e("45006").then(n.bind(n, 15638)),
              buttons: () =>
                Promise.all([n.e("59821"), n.e("73644")]).then(
                  n.bind(n, 58574),
                ),
              attribute: () => Promise.resolve().then(n.bind(n, 90296)),
              text: () => n.e("52767").then(n.bind(n, 68291)),
            },
            p = {
              _domain_not_found: "simple",
              alert: "toggle",
              automation: "toggle",
              button: "button",
              climate: "climate",
              cover: "cover",
              date: "date",
              datetime: "datetime",
              event: "event",
              fan: "toggle",
              group: "group",
              humidifier: "humidifier",
              input_boolean: "toggle",
              input_button: "input-button",
              input_datetime: "input-datetime",
              input_number: "input-number",
              input_select: "input-select",
              input_text: "input-text",
              light: "toggle",
              lock: "lock",
              media_player: "media-player",
              number: "number",
              remote: "toggle",
              scene: "scene",
              script: "script",
              select: "select",
              sensor: "sensor",
              siren: "toggle",
              switch: "toggle",
              text: "text",
              time: "time",
              timer: "timer",
              update: "update",
              vacuum: "toggle",
              valve: "valve",
              water_heater: "climate",
              weather: "weather",
            },
            v = (e) => (0, g.Tw)("row", e, b, f, p, void 0),
            k = (e) => (0, g.ED)(e, "row", b, f);
          i();
        } catch (b) {
          i(b);
        }
      });
    },
  },
]);
//# sourceMappingURL=17970.dda894babb922dc1.js.map
