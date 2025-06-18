/*! For license information please see 67704.847317f665905f5b.js.LICENSE.txt */
export const __webpack_ids__ = ["67704"];
export const __webpack_modules__ = {
  51784: function (e, t, o) {
    o.d(t, { dJ: () => m, zB: () => g });
    var i = o(44249),
      a = o(72621),
      n = o(67840),
      l = o(88854),
      s = o(57243),
      d = o(15093);
    let r;
    n.A.addInitializer(async (e) => {
      await e.updateComplete;
      const t = e;
      t.dialog.prepend(t.scrim),
        (t.scrim.style.inset = 0),
        (t.scrim.style.zIndex = 0);
      const { getOpenAnimation: o, getCloseAnimation: i } = t;
      (t.getOpenAnimation = () => {
        const e = o.call(void 0);
        return (
          (e.container = [...(e.container ?? []), ...(e.dialog ?? [])]),
          (e.dialog = []),
          e
        );
      }),
        (t.getCloseAnimation = () => {
          const e = i.call(void 0);
          return (
            (e.container = [...(e.container ?? []), ...(e.dialog ?? [])]),
            (e.dialog = []),
            e
          );
        });
    });
    (0, i.Z)(
      [(0, d.Mo)("ha-md-dialog")],
      function (e, t) {
        class i extends t {
          constructor() {
            super(),
              e(this),
              this.addEventListener("cancel", this._handleCancel),
              "function" != typeof HTMLDialogElement &&
                (this.addEventListener("open", this._handleOpen),
                r || (r = o.e("73854").then(o.bind(o, 85893)))),
              void 0 === this.animate && (this.quick = !0),
              void 0 === this.animate && (this.quick = !0);
          }
        }
        return {
          F: i,
          d: [
            {
              kind: "field",
              decorators: [
                (0, d.Cb)({
                  attribute: "disable-cancel-action",
                  type: Boolean,
                }),
              ],
              key: "disableCancelAction",
              value: () => !1,
            },
            {
              kind: "field",
              key: "_polyfillDialogRegistered",
              value: () => !1,
            },
            {
              kind: "method",
              key: "_handleOpen",
              value: async function (e) {
                if ((e.preventDefault(), this._polyfillDialogRegistered))
                  return;
                (this._polyfillDialogRegistered = !0),
                  this._loadPolyfillStylesheet(
                    "/static/polyfills/dialog-polyfill.css",
                  );
                const t = this.shadowRoot?.querySelector("dialog");
                (await r).default.registerDialog(t),
                  this.removeEventListener("open", this._handleOpen),
                  this.show();
              },
            },
            {
              kind: "method",
              key: "_loadPolyfillStylesheet",
              value: async function (e) {
                const t = document.createElement("link");
                return (
                  (t.rel = "stylesheet"),
                  (t.href = e),
                  new Promise((o, i) => {
                    (t.onload = () => o()),
                      (t.onerror = () =>
                        i(new Error(`Stylesheet failed to load: ${e}`))),
                      this.shadowRoot?.appendChild(t);
                  })
                );
              },
            },
            {
              kind: "method",
              key: "_handleCancel",
              value: function (e) {
                if (this.disableCancelAction) {
                  e.preventDefault();
                  const t = this.shadowRoot?.querySelector("dialog .container");
                  void 0 !== this.animate &&
                    t?.animate(
                      [
                        {
                          transform: "rotate(-1deg)",
                          "animation-timing-function": "ease-in",
                        },
                        {
                          transform: "rotate(1.5deg)",
                          "animation-timing-function": "ease-out",
                        },
                        {
                          transform: "rotate(0deg)",
                          "animation-timing-function": "ease-in",
                        },
                      ],
                      { duration: 200, iterations: 2 },
                    );
                }
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value() {
                return [
                  ...(0, a.Z)(i, "styles", this),
                  s.iv`:host{--md-dialog-container-color:var(--card-background-color);--md-dialog-headline-color:var(--primary-text-color);--md-dialog-supporting-text-color:var(--primary-text-color);--md-sys-color-scrim:#000000;--md-dialog-headline-weight:400;--md-dialog-headline-size:1.574rem;--md-dialog-supporting-text-size:1rem;--md-dialog-supporting-text-line-height:1.5rem}:host([type=alert]){min-width:320px}@media all and (max-width:450px),all and (max-height:500px){:host(:not([type=alert])){min-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));max-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));min-height:100%;max-height:100%;--md-dialog-container-shape:0}}::slotted(ha-dialog-header[slot=headline]){display:contents}.scroller{overflow:var(--dialog-content-overflow,auto)}slot[name=content]::slotted(*){padding:var(--dialog-content-padding,24px)}.scrim{z-index:10}`,
                ];
              },
            },
          ],
        };
      },
      n.A,
    );
    const c = {
        ...l.I,
        dialog: [
          [
            [{ transform: "translateY(50px)" }, { transform: "translateY(0)" }],
            { duration: 500, easing: "cubic-bezier(.3,0,0,1)" },
          ],
        ],
        container: [
          [
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 50, easing: "linear", pseudoElement: "::before" },
          ],
        ],
      },
      h = {
        ...l.G,
        dialog: [
          [
            [{ transform: "translateY(0)" }, { transform: "translateY(50px)" }],
            { duration: 150, easing: "cubic-bezier(.3,0,0,1)" },
          ],
        ],
        container: [
          [
            [{ opacity: "1" }, { opacity: "0" }],
            {
              delay: 100,
              duration: 50,
              easing: "linear",
              pseudoElement: "::before",
            },
          ],
        ],
      },
      m = () =>
        window.matchMedia(
          "all and (max-width: 450px), all and (max-height: 500px)",
        ).matches
          ? c
          : l.I,
      g = () =>
        window.matchMedia(
          "all and (max-width: 450px), all and (max-height: 500px)",
        ).matches
          ? h
          : l.G;
  },
  52623: function (e, t, o) {
    o.a(e, async function (e, i) {
      try {
        o.r(t);
        var a = o(44249),
          n = (o(92745), o(9359), o(70104), o(57243)),
          l = o(15093),
          s = o(35359),
          d = o(36522),
          r = (o(59826), o(51784)),
          c = (o(95198), o(79505), o(90243)),
          h = o(28008),
          m = (o(41025), o(89187)),
          g = e([m]);
        m = (g.then ? (await g)() : g)[0];
        const u =
          "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
        (0, a.Z)(
          [(0, l.Mo)("dialog-light-color-favorite")],
          function (e, t) {
            return {
              F: class extends t {
                constructor(...t) {
                  super(...t), e(this);
                }
              },
              d: [
                {
                  kind: "field",
                  decorators: [(0, l.Cb)({ attribute: !1 })],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_dialogParams",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_entry",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_color",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_mode",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_modes",
                  value: () => [],
                },
                {
                  kind: "field",
                  decorators: [(0, l.IO)("ha-md-dialog")],
                  key: "_dialog",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "showDialog",
                  value: async function (e) {
                    (this._entry = e.entry),
                      (this._dialogParams = e),
                      (this._color =
                        e.initialColor ?? this._computeCurrentColor()),
                      this._updateModes();
                  },
                },
                {
                  kind: "method",
                  key: "closeDialog",
                  value: function () {
                    this._dialog?.close();
                  },
                },
                {
                  kind: "method",
                  key: "_updateModes",
                  value: function () {
                    const e = (0, c.Fe)(this.stateObj, c.ZE.COLOR_TEMP),
                      t = [];
                    (0, c.Yk)(this.stateObj) && t.push("color"),
                      e && t.push("color_temp"),
                      (this._modes = t),
                      this._color
                        ? (this._mode =
                            "color_temp_kelvin" in this._color
                              ? "color_temp"
                              : "color")
                        : (this._mode = this._modes[0]);
                  },
                },
                {
                  kind: "method",
                  key: "_computeCurrentColor",
                  value: function () {
                    const e = this.stateObj.attributes,
                      t = e.color_mode;
                    let o;
                    return (
                      t === c.ZE.XY
                        ? e.hs_color
                          ? (o = { hs_color: e.hs_color })
                          : e.rgb_color && (o = { rgb_color: e.rgb_color })
                        : t === c.ZE.COLOR_TEMP && e.color_temp_kelvin
                        ? (o = { color_temp_kelvin: e.color_temp_kelvin })
                        : e[t + "_color"] &&
                          (o = { [t + "_color"]: e[t + "_color"] }),
                      o
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_colorChanged",
                  value: function (e) {
                    this._color = e.detail;
                  },
                },
                {
                  kind: "get",
                  key: "stateObj",
                  value: function () {
                    return (
                      this._entry && this.hass.states[this._entry.entity_id]
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_cancel",
                  value: async function () {
                    this._dialogParams?.cancel?.();
                  },
                },
                {
                  kind: "method",
                  key: "_cancelDialog",
                  value: function () {
                    this._cancel(), this.closeDialog();
                  },
                },
                {
                  kind: "method",
                  key: "_dialogClosed",
                  value: function () {
                    (this._dialogParams = void 0),
                      (this._entry = void 0),
                      (this._color = void 0),
                      (0, d.B)(this, "dialog-closed", {
                        dialog: this.localName,
                      });
                  },
                },
                {
                  kind: "method",
                  key: "_save",
                  value: async function () {
                    this._color
                      ? (this._dialogParams?.submit?.(this._color),
                        this.closeDialog())
                      : this._cancel();
                  },
                },
                {
                  kind: "method",
                  key: "_modeChanged",
                  value: function (e) {
                    const t = e.currentTarget.mode;
                    t !== this._mode && (this._mode = t);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    return this._entry && this.stateObj
                      ? n.dy`
      <ha-md-dialog open @cancel=${this._cancel} @closed=${
        this._dialogClosed
      } aria-labelledby="dialog-light-color-favorite-title" .getOpenAnimation=${
        r.dJ
      } .getCloseAnimation=${r.zB}>
        <ha-dialog-header slot="headline">
          <ha-icon-button slot="navigationIcon" @click=${
            this.closeDialog
          } .label=${this.hass.localize(
            "ui.common.close",
          )} .path=${u}></ha-icon-button>
          <span slot="title" id="dialog-light-color-favorite-title">${
            this._dialogParams?.title
          }</span>
        </ha-dialog-header>
        <div slot="content">
          <div class="header">
            ${
              this._modes.length > 1
                ? n.dy`
                  <div class="modes">
                    ${this._modes.map(
                      (e) => n.dy`
                        <ha-icon-button-toggle border-only .selected=${
                          e === this._mode
                        } .label=${this.hass.localize(
                          `ui.dialogs.more_info_control.light.color_picker.mode.${e}`,
                        )} .mode=${e} @click=${this._modeChanged}>
                          <span class="wheel ${(0, s.$)({ [e]: !0 })}"></span>
                        </ha-icon-button-toggle>
                      `,
                    )}
                  </div>
                `
                : n.Ld
            }
          </div>
          <div class="content">
            ${
              "color_temp" === this._mode
                ? n.dy`
                  <light-color-temp-picker .hass=${this.hass} .stateObj=${this.stateObj} @color-changed=${this._colorChanged}>
                  </light-color-temp-picker>
                `
                : n.Ld
            }
            ${
              "color" === this._mode
                ? n.dy`
                  <light-color-rgb-picker .hass=${this.hass} .stateObj=${this.stateObj} @color-changed=${this._colorChanged}>
                  </light-color-rgb-picker>
                `
                : n.Ld
            }
          </div>
        </div>
        <div slot="actions">
          <ha-button @click=${this._cancelDialog}>
            ${this.hass.localize("ui.common.cancel")}
          </ha-button>
          <ha-button @click=${this._save} .disabled=${!this
            ._color}>${this.hass.localize("ui.common.save")}</ha-button>
        </div>
      </ha-md-dialog>
    `
                      : n.Ld;
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      h.yu,
                      n.iv`ha-md-dialog{min-width:420px;max-height:min(600px,100% - 48px)}@media all and (max-width:450px),all and (max-height:500px){ha-md-dialog{min-width:100%;min-height:auto;max-height:calc(100% - 100px);margin-bottom:0;--md-dialog-container-shape-start-start:28px;--md-dialog-container-shape-start-end:28px}}.content{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;flex:1}.modes{display:flex;flex-direction:row;justify-content:flex-end;padding:0 24px}.wheel{width:30px;height:30px;flex:none;border-radius:15px}.wheel.color{background-image:url("/static/images/color_wheel.png");background-size:cover}.wheel.color_temp{background:linear-gradient(0,#a6d1ff 0%,#fff 50%,#ffa000 100%)}`,
                    ];
                  },
                },
              ],
            };
          },
          n.oi,
        );
        i();
      } catch (e) {
        i(e);
      }
    });
  },
  1231: function (e, t, o) {
    o.d(t, { B: () => d });
    var i = o(9065),
      a = o(15093),
      n = o(57243);
    class l extends n.oi {
      constructor() {
        super(...arguments),
          (this.inset = !1),
          (this.insetStart = !1),
          (this.insetEnd = !1);
      }
    }
    (0, i.__decorate)(
      [(0, a.Cb)({ type: Boolean, reflect: !0 })],
      l.prototype,
      "inset",
      void 0,
    ),
      (0, i.__decorate)(
        [(0, a.Cb)({ type: Boolean, reflect: !0, attribute: "inset-start" })],
        l.prototype,
        "insetStart",
        void 0,
      ),
      (0, i.__decorate)(
        [(0, a.Cb)({ type: Boolean, reflect: !0, attribute: "inset-end" })],
        l.prototype,
        "insetEnd",
        void 0,
      );
    const s = n.iv`:host{box-sizing:border-box;color:var(--md-divider-color,var(--md-sys-color-outline-variant,#cac4d0));display:flex;height:var(--md-divider-thickness,1px);width:100%}:host([inset-start]),:host([inset]){padding-inline-start:16px}:host([inset-end]),:host([inset]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors:active){:host::before{background:CanvasText}}`;
    let d = class extends l {};
    (d.styles = [s]), (d = (0, i.__decorate)([(0, a.Mo)("md-divider")], d));
  },
};
//# sourceMappingURL=67704.847317f665905f5b.js.map
