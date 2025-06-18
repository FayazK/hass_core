"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["39027"],
  {
    46467: function (e, t, n) {
      n.a(e, async function (e, a) {
        try {
          n.d(t, {
            D_: () => w,
            NC: () => y,
            Nh: () => v,
            U8: () => k,
            WB: () => h,
            mn: () => d,
            p6: () => s,
            ud: () => f,
            yQ: () => Z,
          });
          n(63434), n(9359), n(1331), n(96829);
          var i = n(16485),
            o = n(27486),
            l = n(20382),
            r = n(11104),
            c = e([i, r]);
          [i, r] = c.then ? (await c)() : c;
          (0, o.Z)(
            (e, t) =>
              new Intl.DateTimeFormat(e.language, {
                weekday: "long",
                month: "long",
                day: "numeric",
                timeZone: (0, r.f)(e.time_zone, t),
              }),
          );
          const s = (e, t, n) => m(t, n.time_zone).format(e),
            m = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            d = (e, t, n) => u(t, n.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            h = (e, t, n) => {
              var a, i, o, r;
              const c = g(t, n.time_zone);
              if (
                t.date_format === l.t6.language ||
                t.date_format === l.t6.system
              )
                return c.format(e);
              const s = c.formatToParts(e),
                m =
                  null === (a = s.find((e) => "literal" === e.type)) ||
                  void 0 === a
                    ? void 0
                    : a.value,
                d =
                  null === (i = s.find((e) => "day" === e.type)) || void 0 === i
                    ? void 0
                    : i.value,
                u =
                  null === (o = s.find((e) => "month" === e.type)) ||
                  void 0 === o
                    ? void 0
                    : o.value,
                h =
                  null === (r = s.find((e) => "year" === e.type)) ||
                  void 0 === r
                    ? void 0
                    : r.value,
                f = s.at(s.length - 1);
              let _ =
                "literal" === (null == f ? void 0 : f.type)
                  ? null == f
                    ? void 0
                    : f.value
                  : "";
              "bg" === t.language && t.date_format === l.t6.YMD && (_ = "");
              return {
                [l.t6.DMY]: `${d}${m}${u}${m}${h}${_}`,
                [l.t6.MDY]: `${u}${m}${d}${m}${h}${_}`,
                [l.t6.YMD]: `${h}${m}${u}${m}${d}${_}`,
              }[t.date_format];
            },
            g = (0, o.Z)((e, t) => {
              const n = e.date_format === l.t6.system ? void 0 : e.language;
              return (
                e.date_format === l.t6.language || (e.date_format, l.t6.system),
                new Intl.DateTimeFormat(n, {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  timeZone: (0, r.f)(e.time_zone, t),
                })
              );
            }),
            f = (e, t, n) => _(t, n.time_zone).format(e),
            _ = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  day: "numeric",
                  month: "short",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            y = (e, t, n) => p(t, n.time_zone).format(e),
            p = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "long",
                  year: "numeric",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            v = (e, t, n) => z(t, n.time_zone).format(e),
            z = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "long",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            Z = (e, t, n) => $(t, n.time_zone).format(e),
            $ = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            w = (e, t, n) => D(t, n.time_zone).format(e),
            D = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "long",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            ),
            k = (e, t, n) => I(t, n.time_zone).format(e),
            I = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "short",
                  timeZone: (0, r.f)(e.time_zone, t),
                }),
            );
          a();
        } catch (s) {
          a(s);
        }
      });
    },
    64214: function (e, t, n) {
      n.a(e, async function (e, a) {
        try {
          n.d(t, {
            DG: () => f,
            E8: () => z,
            Fu: () => v,
            NR: () => $,
            W0: () => h,
            o0: () => d,
            yD: () => y,
          });
          var i = n(16485),
            o = n(27486),
            l = n(46467),
            r = n(33570),
            c = n(11104),
            s = n(16922),
            m = e([i, c, l, r]);
          [i, c, l, r] = m.then ? (await m)() : m;
          const d = (e, t, n) => u(t, n.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, c.f)(e.time_zone, t),
                }),
            ),
            h = (e) => g().format(e),
            g = (0, o.Z)(
              () =>
                new Intl.DateTimeFormat(void 0, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
            ),
            f = (e, t, n) => _(t, n.time_zone).format(e),
            _ = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, c.f)(e.time_zone, t),
                }),
            ),
            y = (e, t, n) => p(t, n.time_zone).format(e),
            p = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  month: "short",
                  day: "numeric",
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, c.f)(e.time_zone, t),
                }),
            ),
            v = (e, t, n) =>
              new Date().getFullYear() === e.getFullYear()
                ? y(e, t, n)
                : f(e, t, n),
            z = (e, t, n) => Z(t, n.time_zone).format(e),
            Z = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: (0, s.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hourCycle: (0, s.y)(e) ? "h12" : "h23",
                  timeZone: (0, c.f)(e.time_zone, t),
                }),
            ),
            $ = (e, t, n) => `${(0, l.WB)(e, t, n)}, ${(0, r.mr)(e, t, n)}`;
          a();
        } catch (d) {
          a(d);
        }
      });
    },
    33570: function (e, t, n) {
      n.a(e, async function (e, a) {
        try {
          n.d(t, { Vu: () => d, Zs: () => f, mr: () => s, xO: () => h });
          var i = n(16485),
            o = n(27486),
            l = n(11104),
            r = n(16922),
            c = e([i, l]);
          [i, l] = c.then ? (await c)() : c;
          const s = (e, t, n) => m(t, n.time_zone).format(e),
            m = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  hour: "numeric",
                  minute: "2-digit",
                  hourCycle: (0, r.y)(e) ? "h12" : "h23",
                  timeZone: (0, l.f)(e.time_zone, t),
                }),
            ),
            d = (e, t, n) => u(t, n.time_zone).format(e),
            u = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  hour: (0, r.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hourCycle: (0, r.y)(e) ? "h12" : "h23",
                  timeZone: (0, l.f)(e.time_zone, t),
                }),
            ),
            h = (e, t, n) => g(t, n.time_zone).format(e),
            g = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat(e.language, {
                  weekday: "long",
                  hour: (0, r.y)(e) ? "numeric" : "2-digit",
                  minute: "2-digit",
                  hourCycle: (0, r.y)(e) ? "h12" : "h23",
                  timeZone: (0, l.f)(e.time_zone, t),
                }),
            ),
            f = (e, t, n) => _(t, n.time_zone).format(e),
            _ = (0, o.Z)(
              (e, t) =>
                new Intl.DateTimeFormat("en-GB", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: !1,
                  timeZone: (0, l.f)(e.time_zone, t),
                }),
            );
          a();
        } catch (s) {
          a(s);
        }
      });
    },
    11104: function (e, t, n) {
      n.a(e, async function (e, a) {
        try {
          n.d(t, { Q: () => d, f: () => u });
          var i,
            o,
            l,
            r = n(16485),
            c = n(20382),
            s = e([r]);
          r = (s.then ? (await s)() : s)[0];
          const m =
              null === (i = Intl.DateTimeFormat) ||
              void 0 === i ||
              null === (o = (l = i.call(Intl)).resolvedOptions) ||
              void 0 === o
                ? void 0
                : o.call(l).timeZone,
            d = null != m ? m : "UTC",
            u = (e, t) => (e === c.c_.local && m ? d : t);
          a();
        } catch (m) {
          a(m);
        }
      });
    },
    16922: function (e, t, n) {
      n.d(t, { y: () => o });
      n(19083), n(61006);
      var a = n(27486),
        i = n(20382);
      const o = (0, a.Z)((e) => {
        if (e.time_format === i.zt.language || e.time_format === i.zt.system) {
          const t = e.time_format === i.zt.language ? e.language : void 0;
          return new Date("January 1, 2023 22:00:00")
            .toLocaleString(t)
            .includes("10");
        }
        return e.time_format === i.zt.am_pm;
      });
    },
    94223: function (e, t, n) {
      n.a(e, async function (e, a) {
        try {
          n.r(t);
          var i = n(61701),
            o = (n(71695), n(47021), n(57243)),
            l = n(50778),
            r = n(64214),
            c = n(36522),
            s = (n(99426), n(59826), n(23334), n(73729)),
            m = n(28008),
            d = n(11225),
            u = e([r]);
          r = (u.then ? (await u)() : u)[0];
          let h,
            g,
            f,
            _,
            y = (e) => e;
          const p =
              "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
            v =
              "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";
          (0, i.Z)(
            [(0, l.Mo)("dialog-cloud-already-connected")],
            function (e, t) {
              return {
                F: class extends t {
                  constructor(...t) {
                    super(...t), e(this);
                  }
                },
                d: [
                  { kind: "field", key: "hass", value: void 0 },
                  {
                    kind: "field",
                    decorators: [(0, l.SB)()],
                    key: "_params",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, l.SB)()],
                    key: "_obfuscateIp",
                    value() {
                      return !0;
                    },
                  },
                  {
                    kind: "method",
                    key: "showDialog",
                    value: function (e) {
                      this._params = e;
                    },
                  },
                  {
                    kind: "method",
                    key: "closeDialog",
                    value: function () {
                      var e, t;
                      null === (e = this._params) ||
                        void 0 === e ||
                        null === (t = e.closeDialog) ||
                        void 0 === t ||
                        t.call(e),
                        (this._params = void 0),
                        (this._obfuscateIp = !0),
                        (0, c.B)(this, "dialog-closed", {
                          dialog: this.localName,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function () {
                      if (!this._params) return o.Ld;
                      const { details: e } = this._params;
                      return (0, o.dy)(
                        h ||
                          (h = y`
      <ha-dialog open @closed=${0} .heading=${0}>
        <div class="intro">
          <span>
            ${0}
          </span>
          <b>
            ${0}
          </b>
        </div>
        <div class="instance-details">
          ${0}
          ${0}
          <div class="instance-detail">
            <span>
              ${0}:
            </span>
            <div class="obfuscated">
              <span>
                ${0}
              </span>

              <ha-icon-button class="toggle-unmasked-url" .label=${0} @click=${0} .path=${0}></ha-icon-button>
            </div>
          </div>
          <div class="instance-detail">
            <span>
              ${0}:
            </span>
            <span>
              ${0}
            </span>
          </div>
        </div>
        <ha-alert alert-type="info" .title=${0}>
          ${0}
        </ha-alert>

        <ha-button @click=${0} slot="secondaryAction">
          ${0}
        </ha-button>
        <ha-button @click=${0} slot="primaryAction">
          ${0}
        </ha-button>
      </ha-dialog>
    `),
                        this.closeDialog,
                        (0, s.i)(
                          this.hass,
                          this.hass.localize(
                            "ui.panel.config.cloud.dialog_already_connected.heading",
                          ),
                        ),
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.description",
                        ),
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.other_home_assistant",
                        ),
                        e.name
                          ? (0, o.dy)(
                              g ||
                                (g = y`<div class="instance-detail">
                <span>
                  ${0}:
                </span>
                <span>${0}</span>
              </div>`),
                              this.hass.localize(
                                "ui.panel.config.cloud.dialog_already_connected.instance_name",
                              ),
                              e.name,
                            )
                          : o.Ld,
                        e.version
                          ? (0, o.dy)(
                              f ||
                                (f = y`<div class="instance-detail">
                <span>
                  ${0}:
                </span>
                <span>${0}</span>
              </div>`),
                              this.hass.localize(
                                "ui.panel.config.cloud.dialog_already_connected.instance_version",
                              ),
                              e.version,
                            )
                          : o.Ld,
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.ip_address",
                        ),
                        this._obfuscateIp
                          ? (0, d.t)(e.remote_ip_address)
                          : e.remote_ip_address,
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.obfuscated_ip." +
                            (this._obfuscateIp ? "hide" : "show"),
                        ),
                        this._toggleObfuscateIp,
                        this._obfuscateIp ? p : v,
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.connected_at",
                        ),
                        (0, r.o0)(
                          new Date(e.connected_at),
                          this.hass.locale,
                          this.hass.config,
                        ),
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.info_backups.title",
                        ),
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.info_backups.description",
                        ),
                        this.closeDialog,
                        this.hass.localize("ui.common.cancel"),
                        this._logInHere,
                        this.hass.localize(
                          "ui.panel.config.cloud.dialog_already_connected.login_here",
                        ),
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "_toggleObfuscateIp",
                    value: function () {
                      this._obfuscateIp = !this._obfuscateIp;
                    },
                  },
                  {
                    kind: "method",
                    key: "_logInHere",
                    value: function () {
                      var e, t;
                      null === (e = this._params) ||
                        void 0 === e ||
                        null === (t = e.logInHereAction) ||
                        void 0 === t ||
                        t.call(e),
                        this.closeDialog();
                    },
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function () {
                      return [
                        m.yu,
                        (0, o.iv)(
                          _ ||
                            (_ = y`ha-dialog{--mdc-dialog-max-width:535px}.intro b{display:block;margin-top:16px}.instance-details{display:flex;flex-direction:column;margin-bottom:16px}.instance-detail{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.obfuscated{align-items:center;display:flex;flex-direction:row}`),
                        ),
                      ];
                    },
                  },
                ],
              };
            },
            o.oi,
          );
          a();
        } catch (h) {
          a(h);
        }
      });
    },
    11225: function (e, t, n) {
      n.d(t, { t: () => a });
      n(19134), n(97499), n(97003);
      function a(e) {
        return e.endsWith(".ui.nabu.casa")
          ? "https://•••••••••••••••••.ui.nabu.casa"
          : e.replace(/(?<=:\/\/)[\w-]+|(?<=\.)[\w-]+/g, (e) =>
              "•".repeat(e.length),
            );
      }
    },
    63434: function (e, t, n) {
      var a = n(40810),
        i = n(12360),
        o = n(13053),
        l = n(88045),
        r = n(35709);
      a(
        { target: "Array", proto: !0 },
        {
          at: function (e) {
            var t = i(this),
              n = o(t),
              a = l(e),
              r = a >= 0 ? a : n + a;
            return r < 0 || r >= n ? void 0 : t[r];
          },
        },
      ),
        r("at");
    },
    96829: function (e, t, n) {
      var a = n(40810),
        i = n(72878),
        o = n(95011),
        l = n(88045),
        r = n(72616),
        c = n(29660),
        s = i("".charAt);
      a(
        {
          target: "String",
          proto: !0,
          forced: c(function () {
            return "\ud842" !== "𠮷".at(-2);
          }),
        },
        {
          at: function (e) {
            var t = r(o(this)),
              n = t.length,
              a = l(e),
              i = a >= 0 ? a : n + a;
            return i < 0 || i >= n ? void 0 : s(t, i);
          },
        },
      );
    },
  },
]);
//# sourceMappingURL=39027.7ee5d3629a404939.js.map
