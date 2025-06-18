(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["80770"],
  {
    95262: function (e, t, i) {
      "use strict";
      function a(e) {
        return null == e || Array.isArray(e) ? e : [e];
      }
      i.d(t, { r: () => a });
    },
    93826: function (e, t, i) {
      "use strict";
      i.d(t, { P: () => a });
      i(71695), i(47021);
      const a = (e, t, i = !0, a = !0) => {
        let o,
          s = 0;
        const n = (...n) => {
          const r = () => {
              (s = !1 === i ? 0 : Date.now()), (o = void 0), e(...n);
            },
            l = Date.now();
          s || !1 !== i || (s = l);
          const d = t - (l - s);
          d <= 0 || d > t
            ? (o && (clearTimeout(o), (o = void 0)), (s = l), e(...n))
            : o || !1 === a || (o = window.setTimeout(r, d));
        };
        return (
          (n.cancel = () => {
            clearTimeout(o), (o = void 0), (s = 0);
          }),
          n
        );
      };
    },
    34273: function (e, t, i) {
      "use strict";
      var a = i(61701),
        o = i(72621),
        s = (i(71695), i(9359), i(31526), i(47021), i(22997), i(57243)),
        n = i(50778),
        r = i(5111),
        l = i(76525);
      let d,
        c,
        h = (e) => e;
      (0, a.Z)(
        [(0, n.Mo)("ha-button-menu")],
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
                kind: "field",
                decorators: [(0, n.Cb)()],
                key: "corner",
                value() {
                  return "BOTTOM_START";
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: "menu-corner" })],
                key: "menuCorner",
                value() {
                  return "START";
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Number })],
                key: "x",
                value() {
                  return null;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Number })],
                key: "y",
                value() {
                  return null;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Boolean })],
                key: "multi",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Boolean })],
                key: "activatable",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Boolean })],
                key: "disabled",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ type: Boolean })],
                key: "fixed",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [
                  (0, n.Cb)({ type: Boolean, attribute: "no-anchor" }),
                ],
                key: "noAnchor",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.IO)("mwc-menu", !0)],
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
                  return (0, s.dy)(
                    d ||
                      (d = h`
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
                  (0, o.Z)(i, "firstUpdated", this, 3)([e]),
                    "rtl" === r.E.document.dir &&
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
                  return (0, s.iv)(
                    c ||
                      (c = h`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`),
                  );
                },
              },
            ],
          };
        },
        s.oi,
      );
    },
    95198: function (e, t, i) {
      "use strict";
      var a = i(61701),
        o = (i(71695), i(47021), i(57243)),
        s = i(50778);
      let n,
        r,
        l = (e) => e;
      (0, a.Z)(
        [(0, s.Mo)("ha-dialog-header")],
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
                  return (0, o.dy)(
                    n ||
                      (n = l`
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
                    (0, o.iv)(
                      r ||
                        (r = l`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-action-items,.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    73729: function (e, t, i) {
      "use strict";
      i.d(t, { i: () => v });
      var a = i(61701),
        o = i(72621),
        s = (i(22152), i(71695), i(47021), i(74966)),
        n = i(51408),
        r = i(57243),
        l = i(50778),
        d = i(76525);
      i(23334);
      let c,
        h,
        u,
        p = (e) => e;
      const m = ["button", "ha-list-item"],
        v = (e, t) => {
          var i;
          return (0, r.dy)(
            c ||
              (c = p`
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
      (0, a.Z)(
        [(0, l.Mo)("ha-dialog")],
        function (e, t) {
          class i extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: i,
            d: [
              { kind: "field", key: d.gA, value: void 0 },
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
                  return (0, r.dy)(
                    h || (h = p`<slot name="heading"> ${0} </slot>`),
                    (0, o.Z)(i, "renderHeading", this, 3)([]),
                  );
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  var e;
                  (0, o.Z)(i, "firstUpdated", this, 3)([]),
                    (this.suppressDefaultPressSelector = [
                      this.suppressDefaultPressSelector,
                      m,
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
                  (0, o.Z)(i, "disconnectedCallback", this, 3)([]),
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
                    n.W,
                    (0, r.iv)(
                      u ||
                        (u = p`.dialog-actions,.header_button,.header_title{direction:var(--direction)}:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
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
        s.M,
      );
    },
    7285: function (e, t, i) {
      "use strict";
      i.d(t, { M: () => p });
      var a = i(61701),
        o = i(72621),
        s = (i(71695), i(47021), i(65703)),
        n = i(46289),
        r = i(57243),
        l = i(50778);
      let d,
        c,
        h,
        u = (e) => e,
        p = (0, a.Z)(
          [(0, l.Mo)("ha-list-item")],
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
                      : (0, o.Z)(i, "renderRipple", this, 3)([]);
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      n.W,
                      (0, r.iv)(
                        d ||
                          (d = u`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`),
                      ),
                      "rtl" === document.dir
                        ? (0, r.iv)(
                            c ||
                              (c = u`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`),
                          )
                        : (0, r.iv)(h || (h = u``)),
                    ];
                  },
                },
              ],
            };
          },
          s.K,
        );
    },
    30043: function (e, t, i) {
      "use strict";
      var a = i(61701),
        o = i(72621),
        s = (i(71695), i(47021), i(19799)),
        n = i(23111),
        r = i(57243),
        l = i(50778);
      let d,
        c = (e) => e;
      (0, a.Z)(
        [(0, l.Mo)("ha-ripple")],
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
                  return new s.J(this, this._onTouchControlChange.bind(this));
                },
              },
              {
                kind: "method",
                key: "attach",
                value: function (e) {
                  (0, o.Z)(i, "attach", this, 3)([e]),
                    this.attachableTouchController.attach(e);
                },
              },
              {
                kind: "method",
                key: "detach",
                value: function () {
                  (0, o.Z)(i, "detach", this, 3)([]),
                    this.attachableTouchController.detach();
                },
              },
              {
                kind: "field",
                key: "_handleTouchEnd",
                value() {
                  return () => {
                    this.disabled ||
                      (0, o.Z)(i, "endPressAnimation", this, 3)([]);
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
                    ...(0, o.Z)(i, "styles", this),
                    (0, r.iv)(
                      d ||
                        (d = c`:host{--md-ripple-hover-opacity:var(--ha-ripple-hover-opacity, 0.08);--md-ripple-pressed-opacity:var(--ha-ripple-pressed-opacity, 0.12);--md-ripple-hover-color:var(
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
        n.M,
      );
    },
    17170: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, a) {
        try {
          i.r(t), i.d(t, { HaSpinner: () => p });
          var o = i(61701),
            s = i(72621),
            n = (i(71695), i(47021), i(97677)),
            r = i(43580),
            l = i(57243),
            d = i(50778),
            c = e([n]);
          n = (c.then ? (await c)() : c)[0];
          let h,
            u = (e) => e,
            p = (0, o.Z)(
              [(0, d.Mo)("ha-spinner")],
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
                      decorators: [(0, d.Cb)()],
                      key: "size",
                      value: void 0,
                    },
                    {
                      kind: "method",
                      key: "updated",
                      value: function (e) {
                        if (
                          ((0, s.Z)(i, "updated", this, 3)([e]), e.has("size"))
                        )
                          switch (this.size) {
                            case "tiny":
                              this.style.setProperty(
                                "--ha-spinner-size",
                                "16px",
                              );
                              break;
                            case "small":
                              this.style.setProperty(
                                "--ha-spinner-size",
                                "28px",
                              );
                              break;
                            case "medium":
                              this.style.setProperty(
                                "--ha-spinner-size",
                                "48px",
                              );
                              break;
                            case "large":
                              this.style.setProperty(
                                "--ha-spinner-size",
                                "68px",
                              );
                              break;
                            case void 0:
                              this.style.removeProperty(
                                "--ha-progress-ring-size",
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
                          r.Z,
                          (0, l.iv)(
                            h ||
                              (h = u`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`),
                          ),
                        ];
                      },
                    },
                  ],
                };
              },
              n.Z,
            );
          a();
        } catch (h) {
          a(h);
        }
      });
    },
    6311: function (e, t, i) {
      "use strict";
      i.a(e, async function (e, a) {
        try {
          i.r(t), i.d(t, { DialogStatisticsFix: () => x });
          var o = i(61701),
            s = (i(71695), i(40251), i(47021), i(31622), i(57243)),
            n = i(50778),
            r = i(17170),
            l = i(36522),
            d = (i(73729), i(17705)),
            c = i(28008),
            h = i(73192),
            u = i(12660),
            p = e([r, u]);
          [r, u] = p.then ? (await p)() : p;
          let m,
            v,
            f,
            g,
            _,
            y,
            k,
            b = (e) => e,
            x = (0, o.Z)(
              [(0, n.Mo)("dialog-statistics-fix")],
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
                      decorators: [(0, n.Cb)({ attribute: !1 })],
                      key: "hass",
                      value: void 0,
                    },
                    {
                      kind: "field",
                      decorators: [(0, n.SB)()],
                      key: "_params",
                      value: void 0,
                    },
                    {
                      kind: "field",
                      decorators: [(0, n.SB)()],
                      key: "_clearing",
                      value() {
                        return !1;
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
                        this._cancel();
                      },
                    },
                    {
                      kind: "method",
                      key: "_closeDialog",
                      value: function () {
                        (this._params = void 0),
                          (this._clearing = !1),
                          (0, l.B)(this, "dialog-closed", {
                            dialog: this.localName,
                          });
                      },
                    },
                    {
                      kind: "method",
                      key: "render",
                      value: function () {
                        if (!this._params) return s.Ld;
                        const e = this._params.issue;
                        return (0, s.dy)(
                          m ||
                            (m = b`
      <ha-dialog open scrimClickAction escapeKeyAction @closed=${0} .heading=${0}>
        <p>
          ${0}<br/><br/>
          ${0}
          ${0}
        </p>

        ${0}
      </ha-dialog>
    `),
                          this._closeDialog,
                          this.hass.localize(
                            `ui.panel.developer-tools.tabs.statistics.fix_issue.${e.type}.title`,
                          ),
                          this.hass.localize(
                            `ui.panel.developer-tools.tabs.statistics.fix_issue.${e.type}.info_text_1`,
                            {
                              name: (0, d.Kd)(
                                this.hass,
                                this._params.issue.data.statistic_id,
                                void 0,
                              ),
                              statistic_id:
                                this._params.issue.data.statistic_id,
                            },
                          ),
                          this.hass.localize(
                            `ui.panel.developer-tools.tabs.statistics.fix_issue.${e.type}.info_text_2`,
                            { statistic_id: e.data.statistic_id },
                          ),
                          "entity_not_recorded" === e.type
                            ? (0, s.dy)(
                                v ||
                                  (v = b`<br/><br/>
                <a href=${0} target="_blank" rel="noreferrer noopener">
                  ${0}</a>`),
                                (0, h.R)(
                                  this.hass,
                                  "/integrations/recorder/#configure-filter",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.entity_not_recorded.info_text_3_link",
                                ),
                              )
                            : "entity_no_longer_recorded" === e.type
                            ? (0, s.dy)(
                                f ||
                                  (f = b`<a href=${0} target="_blank" rel="noreferrer noopener">
                    ${0}</a><br/><br/>
                  ${0}`),
                                (0, h.R)(
                                  this.hass,
                                  "/integrations/recorder/#configure-filter",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.info_text_3_link",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.entity_no_longer_recorded.info_text_4",
                                ),
                              )
                            : "state_class_removed" === e.type
                            ? (0, s.dy)(
                                g ||
                                  (g = b`<ul>
                      <li>
                        ${0}
                      </li>
                      <li>
                        ${0}
                        <a href="https://developers.home-assistant.io/docs/core/entity/sensor/#long-term-statistics" target="_blank" rel="noreferrer noopener">
                          ${0}</a>
                      </li>
                      <li>
                        ${0}
                      </li>
                    </ul>
                    ${0}`),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.state_class_removed.info_text_3",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.state_class_removed.info_text_4",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.state_class_removed.info_text_4_link",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.state_class_removed.info_text_5",
                                ),
                                this.hass.localize(
                                  "ui.panel.developer-tools.tabs.statistics.fix_issue.state_class_removed.info_text_6",
                                  { statistic_id: e.data.statistic_id },
                                ),
                              )
                            : s.Ld,
                          "entity_not_recorded" !== e.type
                            ? (0, s.dy)(
                                _ ||
                                  (_ = b`<mwc-button slot="primaryAction" @click=${0} class="warning" .disabled=${0}>
                ${0}
                ${0}
              </mwc-button>
              <mwc-button slot="secondaryAction" @click=${0}>
                ${0}
              </mwc-button>`),
                                this._clearStatistics,
                                this._clearing,
                                this._clearing
                                  ? (0, s.dy)(
                                      y ||
                                        (y = b`<ha-spinner size="small" aria-label="Saving"></ha-spinner>`),
                                    )
                                  : s.Ld,
                                this.hass.localize("ui.common.delete"),
                                this._cancel,
                                this.hass.localize("ui.common.close"),
                              )
                            : (0, s.dy)(
                                k ||
                                  (k = b`<mwc-button slot="primaryAction" @click=${0}>
              ${0}
            </mwc-button>`),
                                this._cancel,
                                this.hass.localize("ui.common.ok"),
                              ),
                        );
                      },
                    },
                    {
                      kind: "method",
                      key: "_cancel",
                      value: function () {
                        var e;
                        null === (e = this._params) ||
                          void 0 === e ||
                          e.cancelCallback(),
                          this._closeDialog();
                      },
                    },
                    {
                      kind: "method",
                      key: "_clearStatistics",
                      value: async function () {
                        this._clearing = !0;
                        try {
                          await (0, d.hN)(this.hass, [
                            this._params.issue.data.statistic_id,
                          ]);
                        } catch (t) {
                          await (0, u.showAlertDialog)(this, {
                            title:
                              "timeout" === t.code
                                ? this.hass.localize(
                                    "ui.panel.developer-tools.tabs.statistics.fix_issue.clearing_timeout_title",
                                  )
                                : this.hass.localize(
                                    "ui.panel.developer-tools.tabs.statistics.fix_issue.clearing_failed",
                                  ),
                            text:
                              "timeout" === t.code
                                ? this.hass.localize(
                                    "ui.panel.developer-tools.tabs.statistics.fix_issue.clearing_timeout_text",
                                  )
                                : t.message,
                          });
                        } finally {
                          var e;
                          (this._clearing = !1),
                            null === (e = this._params) ||
                              void 0 === e ||
                              e.fixedCallback(),
                            this._closeDialog();
                        }
                      },
                    },
                    {
                      kind: "get",
                      static: !0,
                      key: "styles",
                      value: function () {
                        return [c.Qx, c.yu];
                      },
                    },
                  ],
                };
              },
              s.oi,
            );
          a();
        } catch (m) {
          a(m);
        }
      });
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
    31948: function (e, t, i) {
      "use strict";
      i.a(
        e,
        async function (e, t) {
          try {
            i(71695), i(40251), i(47021);
            "function" != typeof window.ResizeObserver &&
              (window.ResizeObserver = (
                await i.e("73378").then(i.bind(i, 88198))
              ).default),
              t();
          } catch (a) {
            t(a);
          }
        },
        1,
      );
    },
    73192: function (e, t, i) {
      "use strict";
      i.d(t, { R: () => a });
      i(19083), i(61006);
      const a = (e, t) =>
        `https://${
          e.config.version.includes("b")
            ? "rc"
            : e.config.version.includes("dev")
            ? "next"
            : "www"
        }.home-assistant.io${t}`;
    },
  },
]);
//# sourceMappingURL=80770.c05fab6a45f2fa6a.js.map
