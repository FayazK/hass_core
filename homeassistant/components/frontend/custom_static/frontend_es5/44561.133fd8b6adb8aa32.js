"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["44561"],
  {
    92636: function (e, t, n) {
      n.d(t, { z: () => i });
      n(19083), n(61006);
      const i = (e) => (t, n) => e.includes(t, n);
    },
    59847: function (e, t, n) {
      n.d(t, { N: () => o });
      var i = n(73850);
      const o = (e) => (0, i.M)(e.entity_id);
    },
    75278: function (e, t, n) {
      n.d(t, { e: () => i });
      const i = (e, t) => o(e.attributes, t),
        o = (e, t) => !!(e.supported_features & t);
    },
    29095: function (e, t, n) {
      n.a(e, async function (e, t) {
        try {
          var i = n(61701),
            o = (n(71695), n(47021), n(31622), n(57243)),
            a = n(50778),
            r = n(17170),
            s = (n(37583), e([r]));
          r = (s.then ? (await s)() : s)[0];
          let l,
            d,
            c,
            p,
            h,
            u,
            g = (e) => e;
          const f =
              "M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z",
            m =
              "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z";
          (0, i.Z)(
            [(0, a.Mo)("ha-progress-button")],
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
                    decorators: [(0, a.Cb)({ type: Boolean })],
                    key: "disabled",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, a.Cb)({ type: Boolean })],
                    key: "progress",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, a.Cb)({ type: Boolean })],
                    key: "raised",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, a.Cb)({ type: Boolean })],
                    key: "unelevated",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, a.SB)()],
                    key: "_result",
                    value: void 0,
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function () {
                      const e = this._result || this.progress;
                      return (0, o.dy)(
                        l ||
                          (l = g`
      <mwc-button ?raised=${0} .unelevated=${0} .disabled=${0} class=${0}>
        <slot></slot>
      </mwc-button>
      ${0}
    `),
                        this.raised,
                        this.unelevated,
                        this.disabled || this.progress,
                        this._result || "",
                        e
                          ? (0, o.dy)(
                              d ||
                                (d = g`
            <div class="progress">
              ${0}
            </div>
          `),
                              "success" === this._result
                                ? (0, o.dy)(
                                    c ||
                                      (c = g`<ha-svg-icon .path=${0}></ha-svg-icon>`),
                                    m,
                                  )
                                : "error" === this._result
                                ? (0, o.dy)(
                                    p ||
                                      (p = g`<ha-svg-icon .path=${0}></ha-svg-icon>`),
                                    f,
                                  )
                                : this.progress
                                ? (0, o.dy)(
                                    h ||
                                      (h = g`<ha-spinner size="small"></ha-spinner>`),
                                  )
                                : o.Ld,
                            )
                          : o.Ld,
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "actionSuccess",
                    value: function () {
                      this._setResult("success");
                    },
                  },
                  {
                    kind: "method",
                    key: "actionError",
                    value: function () {
                      this._setResult("error");
                    },
                  },
                  {
                    kind: "method",
                    key: "_setResult",
                    value: function (e) {
                      (this._result = e),
                        setTimeout(() => {
                          this._result = void 0;
                        }, 2e3);
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "styles",
                    value() {
                      return (0, o.iv)(
                        u ||
                          (u = g`mwc-button.error,mwc-button.success{--mdc-theme-primary:white;transition:none;border-radius:4px;pointer-events:none}:host{outline:0;display:inline-block;position:relative;pointer-events:none}mwc-button{transition:1s;pointer-events:initial}mwc-button.success{background-color:var(--success-color)}mwc-button[raised].success,mwc-button[unelevated].success{--mdc-theme-primary:var(--success-color);--mdc-theme-on-primary:white}mwc-button.error{background-color:var(--error-color)}mwc-button[raised].error,mwc-button[unelevated].error{--mdc-theme-primary:var(--error-color);--mdc-theme-on-primary:white}.progress{bottom:4px;position:absolute;text-align:center;top:4px;width:100%}ha-svg-icon{color:#fff}mwc-button.error slot,mwc-button.success slot{visibility:hidden}:host([destructive]){--mdc-theme-primary:var(--error-color)}`),
                      );
                    },
                  },
                ],
              };
            },
            o.oi,
          );
          t();
        } catch (l) {
          t(l);
        }
      });
    },
    99426: function (e, t, n) {
      n.r(t);
      var i = n(61701),
        o = (n(71695), n(47021), n(57243)),
        a = n(50778),
        r = n(35359),
        s = n(36522);
      n(23334), n(37583);
      let l,
        d,
        c,
        p,
        h = (e) => e;
      const u = {
        info: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
        warning:
          "M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",
        error:
          "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",
        success:
          "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
      };
      (0, i.Z)(
        [(0, a.Mo)("ha-alert")],
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
                decorators: [(0, a.Cb)()],
                key: "title",
                value() {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ attribute: "alert-type" })],
                key: "alertType",
                value() {
                  return "info";
                },
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ type: Boolean })],
                key: "dismissable",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ type: Boolean })],
                key: "narrow",
                value() {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, o.dy)(
                    l ||
                      (l = h`
      <div class="issue-type ${0}" role="alert">
        <div class="icon ${0}">
          <slot name="icon">
            <ha-svg-icon .path=${0}></ha-svg-icon>
          </slot>
        </div>
        <div class=${0}>
          <div class="main-content">
            ${0}
            <slot></slot>
          </div>
          <div class="action">
            <slot name="action">
              ${0}
            </slot>
          </div>
        </div>
      </div>
    `),
                    (0, r.$)({ [this.alertType]: !0 }),
                    this.title ? "" : "no-title",
                    u[this.alertType],
                    (0, r.$)({ content: !0, narrow: this.narrow }),
                    this.title
                      ? (0, o.dy)(
                          d || (d = h`<div class="title">${0}</div>`),
                          this.title,
                        )
                      : o.Ld,
                    this.dismissable
                      ? (0, o.dy)(
                          c ||
                            (c = h`<ha-icon-button @click=${0} label="Dismiss alert" .path=${0}></ha-icon-button>`),
                          this._dismissClicked,
                          "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                        )
                      : o.Ld,
                  );
                },
              },
              {
                kind: "method",
                key: "_dismissClicked",
                value: function () {
                  (0, s.B)(this, "alert-dismissed-clicked");
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return (0, o.iv)(
                    p ||
                      (p = h`.action,.icon{z-index:1}.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.content.narrow{flex-direction:column;align-items:flex-end}.action{width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`),
                  );
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    54977: function (e, t, n) {
      var i = n(61701),
        o = (n(71695), n(47021), n(57243)),
        a = n(50778);
      let r,
        s,
        l,
        d = (e) => e;
      (0, i.Z)(
        [(0, a.Mo)("ha-card")],
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
                decorators: [(0, a.Cb)()],
                key: "header",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ type: Boolean, reflect: !0 })],
                key: "raised",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return (0, o.iv)(
                    r ||
                      (r = d`:host{background:var(--custom-background-color,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,16px);color:var(--primary-text-color);display:block;transition:.3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`),
                  );
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, o.dy)(
                    s ||
                      (s = d`
      ${0}
      <slot></slot>
    `),
                    this.header
                      ? (0, o.dy)(
                          l || (l = d`<h1 class="card-header">${0}</h1>`),
                          this.header,
                        )
                      : o.Ld,
                  );
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    20130: function (e, t, n) {
      var i = n(61701),
        o = n(72621),
        a = (n(71695), n(47021), n(39785)),
        r = n(52876),
        s = n(50778),
        l = n(57243),
        d = n(5111);
      let c,
        p,
        h,
        u = (e) => e;
      (0, i.Z)(
        [(0, s.Mo)("ha-fab")],
        function (e, t) {
          class n extends t {
            constructor(...t) {
              super(...t), e(this);
            }
          }
          return {
            F: n,
            d: [
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  (0, o.Z)(n, "firstUpdated", this, 3)([e]),
                    this.style.setProperty(
                      "--mdc-theme-secondary",
                      "var(--primary-color)",
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
                    (0, l.iv)(
                      c ||
                        (c = u`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}:disabled{--mdc-theme-secondary:var(--disabled-text-color);pointer-events:none}`),
                    ),
                    "rtl" === d.E.document.dir
                      ? (0, l.iv)(
                          p ||
                            (p = u`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`),
                        )
                      : (0, l.iv)(h || (h = u``)),
                  ];
                },
              },
            ],
          };
        },
        a._,
      );
    },
    13928: function (e, t, n) {
      n.r(t), n.d(t, { HaIconNext: () => s });
      var i = n(61701),
        o = (n(71695), n(47021), n(50778)),
        a = n(5111),
        r = n(37583);
      let s = (0, i.Z)(
        [(0, o.Mo)("ha-icon-next")],
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
                decorators: [(0, o.Cb)()],
                key: "path",
                value() {
                  return "rtl" === a.E.document.dir
                    ? "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                    : "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
                },
              },
            ],
          };
        },
        r.HaSvgIcon,
      );
    },
    30509: function (e, t, n) {
      var i = n(61701),
        o = (n(71695), n(47021), n(57243)),
        a = n(50778);
      let r,
        s,
        l = (e) => e;
      (0, i.Z)(
        [(0, a.Mo)("ha-settings-row")],
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
                decorators: [(0, a.Cb)({ type: Boolean, reflect: !0 })],
                key: "narrow",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ type: Boolean, reflect: !0 })],
                key: "slim",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [
                  (0, a.Cb)({ type: Boolean, attribute: "three-line" }),
                ],
                key: "threeLine",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [
                  (0, a.Cb)({
                    type: Boolean,
                    attribute: "wrap-heading",
                    reflect: !0,
                  }),
                ],
                key: "wrapHeading",
                value() {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, o.dy)(
                    r ||
                      (r = l`
      <div class="prefix-wrap">
        <slot name="prefix"></slot>
        <div class="body" ?two-line=${0} ?three-line=${0}>
          <slot name="heading"></slot>
          <div class="secondary"><slot name="description"></slot></div>
        </div>
      </div>
      <div class="content"><slot></slot></div>
    `),
                    !this.threeLine,
                    this.threeLine,
                  );
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return (0, o.iv)(
                    s ||
                      (s = l`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-inline-start:0;padding:8px 16px 8px 0;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
        --mdc-typography-body2-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}`),
                  );
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    17170: function (e, t, n) {
      n.a(e, async function (e, i) {
        try {
          n.r(t), n.d(t, { HaSpinner: () => u });
          var o = n(61701),
            a = n(72621),
            r = (n(71695), n(47021), n(97677)),
            s = n(43580),
            l = n(57243),
            d = n(50778),
            c = e([r]);
          r = (c.then ? (await c)() : c)[0];
          let p,
            h = (e) => e,
            u = (0, o.Z)(
              [(0, d.Mo)("ha-spinner")],
              function (e, t) {
                class n extends t {
                  constructor(...t) {
                    super(...t), e(this);
                  }
                }
                return {
                  F: n,
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
                          ((0, a.Z)(n, "updated", this, 3)([e]), e.has("size"))
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
                          s.Z,
                          (0, l.iv)(
                            p ||
                              (p = h`:host{--indicator-color:var(
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
              r.Z,
            );
          i();
        } catch (p) {
          i(p);
        }
      });
    },
    75101: function (e, t, n) {
      n.d(t, {
        $H: () => i,
        DJ: () => s,
        LZ: () => a,
        Nn: () => h,
        Ny: () => u,
        Pk: () => f,
        Q4: () => r,
        RQ: () => d,
        SO: () => c,
        T0: () => g,
        aR: () => o,
        iJ: () => p,
        pB: () => l,
      });
      n(71695), n(9359), n(56475), n(1331), n(19423), n(47021);
      const i = (e, t) =>
          e.callWS({ type: "config_entries/subentries/list", entry_id: t }),
        o = (e, t, n) =>
          e.callWS({
            type: "config_entries/subentries/delete",
            entry_id: t,
            subentry_id: n,
          }),
        a = ["migration_error", "setup_error", "setup_retry"],
        r = ["not_loaded", "loaded", "setup_error", "setup_retry"],
        s = (e, t, n) => {
          const i = { type: "config_entries/subscribe" };
          return (
            n && n.type && (i.type_filter = n.type),
            e.connection.subscribeMessage((e) => t(e), i)
          );
        },
        l = (e, t) => {
          const n = {};
          return (
            t &&
              (t.type && (n.type_filter = t.type),
              t.domain && (n.domain = t.domain)),
            e.callWS(Object.assign({ type: "config_entries/get" }, n))
          );
        },
        d = (e, t) =>
          e.callWS({ type: "config_entries/get_single", entry_id: t }),
        c = (e, t, n) =>
          e.callWS(
            Object.assign({ type: "config_entries/update", entry_id: t }, n),
          ),
        p = (e, t) => e.callApi("DELETE", `config/config_entries/entry/${t}`),
        h = (e, t) =>
          e.callApi("POST", `config/config_entries/entry/${t}/reload`),
        u = (e, t) =>
          e.callWS({
            type: "config_entries/disable",
            entry_id: t,
            disabled_by: "user",
          }),
        g = (e, t) =>
          e.callWS({
            type: "config_entries/disable",
            entry_id: t,
            disabled_by: null,
          }),
        f = (e, t) => {
          if (!t) return e;
          const n = e.find((e) => e.entry_id === t);
          if (!n) return e;
          return [n, ...e.filter((e) => e.entry_id !== t)];
        };
    },
    45594: function (e, t, n) {
      n.d(t, { Fv: () => r, e1: () => a, eH: () => i, lJ: () => o });
      const i = (e, t) => {
          var n;
          return e.callApi("POST", "config/config_entries/options/flow", {
            handler: t,
            show_advanced_options: Boolean(
              null === (n = e.userData) || void 0 === n
                ? void 0
                : n.showAdvanced,
            ),
          });
        },
        o = (e, t) =>
          e.callApi("GET", `config/config_entries/options/flow/${t}`),
        a = (e, t, n) =>
          e.callApi("POST", `config/config_entries/options/flow/${t}`, n),
        r = (e, t) =>
          e.callApi("DELETE", `config/config_entries/options/flow/${t}`);
    },
    74794: function (e, t, n) {
      n.d(t, {
        $l: () => i,
        An: () => A,
        DN: () => x,
        Dj: () => L,
        Gz: () => S,
        H4: () => F,
        Js: () => z,
        LO: () => r,
        Rp: () => k,
        S_: () => u,
        VZ: () => a,
        WB: () => C,
        ah: () => H,
        bt: () => m,
        dy: () => _,
        ez: () => f,
        f3: () => o,
        fm: () => $,
        gg: () => y,
        go: () => c,
        iJ: () => h,
        lR: () => g,
        lu: () => W,
        m6: () => V,
        mO: () => p,
        mS: () => B,
        o5: () => s,
        pT: () => b,
        t3: () => P,
        tz: () => w,
        vn: () => d,
        yN: () => M,
        yi: () => v,
        z3: () => l,
      });
      n(19423);
      const i = (e, t, n) =>
          e.connection.subscribeMessage((e) => n(e), {
            type: "zha/devices/reconfigure",
            ieee: t,
          }),
        o = (e) => e.callWS({ type: "zha/topology/update" }),
        a = (e, t, n, i, o) =>
          e.callWS({
            type: "zha/devices/clusters/attributes",
            ieee: t,
            endpoint_id: n,
            cluster_id: i,
            cluster_type: o,
          }),
        r = (e) => e.callWS({ type: "zha/devices" }),
        s = (e, t) => e.callWS({ type: "zha/device", ieee: t }),
        l = (e, t) => e.callWS({ type: "zha/devices/bindable", ieee: t }),
        d = (e, t, n) =>
          e.callWS({
            type: "zha/devices/bind",
            source_ieee: t,
            target_ieee: n,
          }),
        c = (e, t, n) =>
          e.callWS({
            type: "zha/devices/unbind",
            source_ieee: t,
            target_ieee: n,
          }),
        p = (e, t, n, i) =>
          e.callWS({
            type: "zha/groups/bind",
            source_ieee: t,
            group_id: n,
            bindings: i,
          }),
        h = (e, t, n, i) =>
          e.callWS({
            type: "zha/groups/unbind",
            source_ieee: t,
            group_id: n,
            bindings: i,
          }),
        u = (e, t) =>
          e.callWS(
            Object.assign(
              Object.assign({}, t),
              {},
              { type: "zha/devices/clusters/attributes/value" },
            ),
          ),
        g = (e, t, n, i, o) =>
          e.callWS({
            type: "zha/devices/clusters/commands",
            ieee: t,
            endpoint_id: n,
            cluster_id: i,
            cluster_type: o,
          }),
        f = (e, t) => e.callWS({ type: "zha/devices/clusters", ieee: t }),
        m = (e) => e.callWS({ type: "zha/groups" }),
        y = (e, t) => e.callWS({ type: "zha/group/remove", group_ids: t }),
        v = (e, t) => e.callWS({ type: "zha/group", group_id: t }),
        b = (e) => e.callWS({ type: "zha/devices/groupable" }),
        _ = (e, t, n) =>
          e.callWS({ type: "zha/group/members/add", group_id: t, members: n }),
        w = (e, t, n) =>
          e.callWS({
            type: "zha/group/members/remove",
            group_id: t,
            members: n,
          }),
        k = (e, t, n, i) =>
          e.callWS({
            type: "zha/group/add",
            group_name: t,
            group_id: n,
            members: i,
          }),
        x = (e) => e.callWS({ type: "zha/configuration" }),
        $ = (e, t) => e.callWS({ type: "zha/configuration/update", data: t }),
        z = (e) => e.callWS({ type: "zha/network/settings" }),
        S = (e) => e.callWS({ type: "zha/network/backups/create" }),
        L = (e, t) =>
          e.callWS({ type: "zha/network/change_channel", new_channel: t }),
        H = "INITIALIZED",
        C = "INTERVIEW_COMPLETE",
        V = "CONFIGURED",
        M = ["PAIRED", V, C],
        A = [
          "device_joined",
          "raw_device_initialized",
          "device_fully_initialized",
        ],
        P = "log_output",
        B = "zha_channel_bind",
        W = "zha_channel_configure_reporting",
        F = "zha_channel_cfg_done";
    },
    7956: function (e, t, n) {
      n.d(t, { w: () => a });
      n(71695), n(19423), n(40251), n(47021);
      var i = n(36522);
      const o = () =>
          Promise.all([
            n.e("46379"),
            n.e("66031"),
            n.e("72206"),
            n.e("24199"),
            n.e("78943"),
            n.e("97983"),
            n.e("2142"),
            n.e("7764"),
            n.e("52430"),
            n.e("58640"),
            n.e("4697"),
            n.e("8871"),
            n.e("27090"),
            n.e("8949"),
          ]).then(n.bind(n, 12656)),
        a = (e, t, n) => {
          (0, i.B)(e, "show-dialog", {
            dialogTag: "dialog-data-entry-flow",
            dialogImport: o,
            dialogParams: Object.assign(
              Object.assign({}, t),
              {},
              { flowConfig: n, dialogParentElement: e },
            ),
          });
        };
    },
    91854: function (e, t, n) {
      n.d(t, { c: () => g });
      n(71695), n(19423), n(40251), n(47021);
      var i = n(57243),
        o = n(57816),
        a = n(45594),
        r = n(7956);
      let s,
        l,
        d,
        c,
        p,
        h,
        u = (e) => e;
      const g = (e, t, n) =>
        (0, r.w)(
          e,
          Object.assign({ startFlowHandler: t.entry_id, domain: t.domain }, n),
          {
            flowType: "options_flow",
            showDevices: !1,
            createFlow: async (e, n) => {
              const [i] = await Promise.all([
                (0, a.eH)(e, n),
                e.loadFragmentTranslation("config"),
                e.loadBackendTranslation("options", t.domain),
                e.loadBackendTranslation("selector", t.domain),
              ]);
              return i;
            },
            fetchFlow: async (e, n) => {
              const [i] = await Promise.all([
                (0, a.lJ)(e, n),
                e.loadFragmentTranslation("config"),
                e.loadBackendTranslation("options", t.domain),
                e.loadBackendTranslation("selector", t.domain),
              ]);
              return i;
            },
            handleFlowStep: a.e1,
            deleteFlow: a.Fv,
            renderAbortDescription(e, n) {
              const o = e.localize(
                `component.${n.translation_domain || t.domain}.options.abort.${
                  n.reason
                }`,
                n.description_placeholders,
              );
              return o
                ? (0, i.dy)(
                    s ||
                      (s = u`
              <ha-markdown breaks allow-svg .content=${0}></ha-markdown>
            `),
                    o,
                  )
                : n.reason;
            },
            renderShowFormStepHeader(e, n) {
              return (
                e.localize(
                  `component.${n.translation_domain || t.domain}.options.step.${
                    n.step_id
                  }.title`,
                  n.description_placeholders,
                ) || e.localize("ui.dialogs.options_flow.form.header")
              );
            },
            renderShowFormStepDescription(e, n) {
              const o = e.localize(
                `component.${n.translation_domain || t.domain}.options.step.${
                  n.step_id
                }.description`,
                n.description_placeholders,
              );
              return o
                ? (0, i.dy)(
                    l ||
                      (l = u`
              <ha-markdown allow-svg breaks .content=${0}></ha-markdown>
            `),
                    o,
                  )
                : "";
            },
            renderShowFormStepFieldLabel(e, n, i, o) {
              var a;
              if ("expandable" === i.type)
                return e.localize(
                  `component.${t.domain}.options.step.${n.step_id}.sections.${i.name}.name`,
                );
              const r =
                null != o && null !== (a = o.path) && void 0 !== a && a[0]
                  ? `sections.${o.path[0]}.`
                  : "";
              return (
                e.localize(
                  `component.${t.domain}.options.step.${n.step_id}.${r}data.${i.name}`,
                ) || i.name
              );
            },
            renderShowFormStepFieldHelper(e, n, o, a) {
              var r;
              if ("expandable" === o.type)
                return e.localize(
                  `component.${n.translation_domain || t.domain}.options.step.${
                    n.step_id
                  }.sections.${o.name}.description`,
                );
              const s =
                  null != a && null !== (r = a.path) && void 0 !== r && r[0]
                    ? `sections.${a.path[0]}.`
                    : "",
                l = e.localize(
                  `component.${n.translation_domain || t.domain}.options.step.${
                    n.step_id
                  }.${s}data_description.${o.name}`,
                  n.description_placeholders,
                );
              return l
                ? (0, i.dy)(
                    d ||
                      (d = u`<ha-markdown breaks .content=${0}></ha-markdown>`),
                    l,
                  )
                : "";
            },
            renderShowFormStepFieldError(e, n, i) {
              return (
                e.localize(
                  `component.${
                    n.translation_domain || t.domain
                  }.options.error.${i}`,
                  n.description_placeholders,
                ) || i
              );
            },
            renderShowFormStepFieldLocalizeValue(e, n, i) {
              return e.localize(`component.${t.domain}.selector.${i}`);
            },
            renderShowFormStepSubmitButton(e, n) {
              return (
                e.localize(
                  `component.${t.domain}.options.step.${n.step_id}.submit`,
                ) ||
                e.localize(
                  "ui.panel.config.integrations.config_flow." +
                    (!1 === n.last_step ? "next" : "submit"),
                )
              );
            },
            renderExternalStepHeader(e, t) {
              return "";
            },
            renderExternalStepDescription(e, t) {
              return "";
            },
            renderCreateEntryDescription(e, t) {
              return (0, i.dy)(
                c ||
                  (c = u`
          <p>${0}</p>
        `),
                e.localize("ui.dialogs.options_flow.success.description"),
              );
            },
            renderShowFormProgressHeader(e, n) {
              return (
                e.localize(
                  `component.${t.domain}.options.step.${n.step_id}.title`,
                ) || e.localize(`component.${t.domain}.title`)
              );
            },
            renderShowFormProgressDescription(e, n) {
              const o = e.localize(
                `component.${
                  n.translation_domain || t.domain
                }.options.progress.${n.progress_action}`,
                n.description_placeholders,
              );
              return o
                ? (0, i.dy)(
                    p ||
                      (p = u`
              <ha-markdown allow-svg breaks .content=${0}></ha-markdown>
            `),
                    o,
                  )
                : "";
            },
            renderMenuHeader(e, n) {
              return (
                e.localize(
                  `component.${t.domain}.options.step.${n.step_id}.title`,
                ) || e.localize(`component.${t.domain}.title`)
              );
            },
            renderMenuDescription(e, n) {
              const o = e.localize(
                `component.${n.translation_domain || t.domain}.options.step.${
                  n.step_id
                }.description`,
                n.description_placeholders,
              );
              return o
                ? (0, i.dy)(
                    h ||
                      (h = u`
              <ha-markdown allow-svg breaks .content=${0}></ha-markdown>
            `),
                    o,
                  )
                : "";
            },
            renderMenuOption(e, n, i) {
              return e.localize(
                `component.${n.translation_domain || t.domain}.options.step.${
                  n.step_id
                }.menu_options.${i}`,
                n.description_placeholders,
              );
            },
            renderLoadingDescription(e, n) {
              return (
                e.localize(`component.${t.domain}.options.loading`) ||
                ("loading_flow" === n || "loading_step" === n
                  ? e.localize(`ui.dialogs.options_flow.loading.${n}`, {
                      integration: (0, o.Lh)(e.localize, t.domain),
                    })
                  : "")
              );
            },
          },
        );
    },
    98241: function (e, t, n) {
      var i = n(61701),
        o = (n(71695), n(47021), n(57243)),
        a = n(50778),
        r = n(35359);
      let s,
        l,
        d = (e) => e;
      (0, i.Z)(
        [(0, a.Mo)("ha-config-section")],
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
                decorators: [
                  (0, a.Cb)({ attribute: "is-wide", type: Boolean }),
                ],
                key: "isWide",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, a.Cb)({ type: Boolean })],
                key: "vertical",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [
                  (0, a.Cb)({ type: Boolean, attribute: "full-width" }),
                ],
                key: "fullWidth",
                value() {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return (0, o.dy)(
                    s ||
                      (s = d`
      <div class="content ${0}">
        <div class="header"><slot name="header"></slot></div>
        <div class="together layout ${0}">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `),
                    (0, r.$)({
                      narrow: !this.isWide,
                      "full-width": this.fullWidth,
                    }),
                    (0, r.$)({
                      narrow: !this.isWide,
                      vertical: this.vertical || !this.isWide,
                      horizontal: !this.vertical && this.isWide,
                    }),
                  );
                },
              },
              {
                kind: "field",
                static: !0,
                key: "styles",
                value() {
                  return (0, o.iv)(
                    l ||
                      (l = d`.header,.intro{opacity:var(--dark-primary-opacity)}:host{display:block}.content{padding:28px 20px 0;max-width:1040px;margin:0 auto}.layout{display:flex}.horizontal{flex-direction:row}.full-width .layout,.vertical{flex-direction:column}.flex-auto{flex:1 1 auto}.header{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);letter-spacing:var(--paper-font-headline_-_letter-spacing);line-height:var(--paper-font-headline_-_line-height)}.together{margin-top:var(--config-section-content-together-margin-top,32px)}.intro{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height);width:100%;font-size:14px;padding-bottom:20px}.horizontal .intro{max-width:400px;margin-right:40px;margin-inline-end:40px;margin-inline-start:initial}.panel{margin-top:-24px}.panel ::slotted(*){margin-top:24px;display:block}.narrow.content{max-width:640px}.narrow .together{margin-top:var(--config-section-narrow-content-together-margin-top,var(--config-section-content-together-margin-top,20px))}.narrow .intro{padding-bottom:20px;margin-right:0;margin-inline-end:0;margin-inline-start:initial;max-width:500px}.full-width{padding:0}`),
                  );
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
    96530: function (e, t, n) {
      n.d(t, { X: () => a, y: () => o });
      var i = n(92636);
      const o = [
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
        a = (0, i.z)(o);
    },
    39960: function (e, t, n) {
      n.d(t, { f: () => a });
      n(71695), n(40251), n(47021);
      var i = n(36522);
      const o = () =>
          Promise.all([
            n.e("66031"),
            n.e("91552"),
            n.e("78456"),
            n.e("41258"),
            n.e("56898"),
            n.e("97983"),
            n.e("35671"),
            n.e("66141"),
            n.e("98675"),
          ]).then(n.bind(n, 3599)),
        a = (e, t) => {
          (0, i.B)(e, "show-dialog", {
            dialogTag: "dialog-zha-change-channel",
            dialogImport: o,
            dialogParams: t,
          });
        };
    },
    34976: function (e, t, n) {
      n.a(e, async function (e, i) {
        try {
          n.r(t), n.d(t, { zhaTabs: () => L });
          var o = n(61701),
            a = n(72621),
            r =
              (n(71695),
              n(9359),
              n(1331),
              n(70104),
              n(77439),
              n(40251),
              n(19134),
              n(97003),
              n(88044),
              n(47021),
              n(31622),
              n(57243)),
            s = n(50778),
            l = n(75101),
            d = (n(54977), n(20130), n(23334), n(58014)),
            c = (n(13928), n(97546), n(91854)),
            p = n(28008),
            h = (n(98241), n(29073), n(29095)),
            u = (n(30509), n(39960)),
            g = n(74794),
            f = n(76131),
            m = e([h]);
          h = (m.then ? (await m)() : m)[0];
          let y,
            v,
            b,
            _,
            w,
            k,
            x = (e) => e;
          const $ = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
            z =
              "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
            S = "socket://core-silabs-multiprotocol:9999",
            L = [
              {
                translationKey: "ui.panel.config.zha.network.caption",
                path: "/config/zha/dashboard",
                iconPath:
                  "M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z",
              },
              {
                translationKey: "ui.panel.config.zha.groups.caption",
                path: "/config/zha/groups",
                iconPath:
                  "M22,4A2,2 0 0,1 24,6V16A2,2 0 0,1 22,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H12L14,4H22M2,6V20H20V22H2A2,2 0 0,1 0,20V11H0V6H2M6,6V16H22V6H6Z",
              },
              {
                translationKey: "ui.panel.config.zha.visualization.caption",
                path: "/config/zha/visualization",
                iconPath:
                  "M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z",
              },
            ];
          (0, o.Z)(
            [(0, s.Mo)("zha-config-dashboard")],
            function (e, t) {
              class n extends t {
                constructor(...t) {
                  super(...t), e(this);
                }
              }
              return {
                F: n,
                d: [
                  {
                    kind: "field",
                    decorators: [(0, s.Cb)({ attribute: !1 })],
                    key: "hass",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.Cb)({ attribute: !1 })],
                    key: "route",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.Cb)({ type: Boolean })],
                    key: "narrow",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [
                      (0, s.Cb)({ attribute: "is-wide", type: Boolean }),
                    ],
                    key: "isWide",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.Cb)({ attribute: !1 })],
                    key: "configEntryId",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.SB)()],
                    key: "_configuration",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.SB)()],
                    key: "_networkSettings",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, s.SB)()],
                    key: "_generatingBackup",
                    value() {
                      return !1;
                    },
                  },
                  {
                    kind: "method",
                    key: "firstUpdated",
                    value: function (e) {
                      (0, a.Z)(n, "firstUpdated", this, 3)([e]),
                        this.hass &&
                          (this.hass.loadBackendTranslation(
                            "config_panel",
                            "zha",
                            !1,
                          ),
                          this._fetchConfiguration(),
                          this._fetchSettings());
                    },
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function () {
                      return (0, r.dy)(
                        y ||
                          (y = x`
      <hass-tabs-subpage .hass=${0} .narrow=${0} .route=${0} .tabs=${0} back-path="/config/integrations">
        <ha-card header=${0}>
          ${0}
        </ha-card>
        <ha-card class="network-settings" header=${0}>
          ${0}
          <div class="card-actions">
            <ha-progress-button @click=${0} .progress=${0} .disabled=${0}>
              ${0}
            </ha-progress-button>
            <mwc-button class="warning" @click=${0}>
              ${0}
            </mwc-button>
          </div>
        </ha-card>
        ${0}
        <ha-card>
          <div class="card-actions">
            <mwc-button @click=${0}>
              ${0}
            </mwc-button>
          </div>
        </ha-card>

        <a href="/config/zha/add" slot="fab">
          <ha-fab .label=${0} extended>
            <ha-svg-icon slot="icon" .path=${0}></ha-svg-icon>
          </ha-fab>
        </a>
      </hass-tabs-subpage>
    `),
                        this.hass,
                        this.narrow,
                        this.route,
                        L,
                        this.hass.localize(
                          "ui.panel.config.zha.configuration_page.shortcuts_title",
                        ),
                        this.configEntryId
                          ? (0, r.dy)(
                              v ||
                                (v = x`<div class="card-actions">
                <a href=${0}>
                  <mwc-button>${0}</mwc-button>
                </a>
                <a href=${0}>
                  <mwc-button>${0}</mwc-button>
                </a>
              </div>`),
                              `/config/devices/dashboard?historyBack=1&config_entry=${this.configEntryId}`,
                              this.hass.localize(
                                "ui.panel.config.devices.caption",
                              ),
                              `/config/entities/dashboard?historyBack=1&config_entry=${this.configEntryId}`,
                              this.hass.localize(
                                "ui.panel.config.entities.caption",
                              ),
                            )
                          : "",
                        this.hass.localize(
                          "ui.panel.config.zha.configuration_page.network_settings_title",
                        ),
                        this._networkSettings
                          ? (0, r.dy)(
                              b ||
                                (b = x`<div class="card-content">
                <ha-settings-row>
                  <span slot="description">PAN ID</span>
                  <span slot="heading">${0}</span>
                </ha-settings-row>

                <ha-settings-row>
                  <span slot="heading">${0}</span>
                  <span slot="description">Extended PAN ID</span>
                </ha-settings-row>

                <ha-settings-row>
                  <span slot="description">Channel</span>
                  <span slot="heading">${0}</span>

                  <ha-icon-button .label=${0} .path=${0} @click=${0}>
                  </ha-icon-button>
                </ha-settings-row>

                <ha-settings-row>
                  <span slot="description">Coordinator IEEE</span>
                  <span slot="heading">${0}</span>
                </ha-settings-row>

                <ha-settings-row>
                  <span slot="description">Radio type</span>
                  <span slot="heading">${0}</span>
                </ha-settings-row>

                <ha-settings-row>
                  <span slot="description">Serial port</span>
                  <span slot="heading">${0}</span>
                </ha-settings-row>

                ${0}
              </div>`),
                              this._networkSettings.settings.network_info
                                .pan_id,
                              this._networkSettings.settings.network_info
                                .extended_pan_id,
                              this._networkSettings.settings.network_info
                                .channel,
                              this.hass.localize(
                                "ui.panel.config.zha.configuration_page.change_channel",
                              ),
                              z,
                              this._showChannelMigrationDialog,
                              this._networkSettings.settings.node_info.ieee,
                              this._networkSettings.radio_type,
                              this._networkSettings.device.path,
                              this._networkSettings.device.baudrate &&
                                !this._networkSettings.device.path.startsWith(
                                  "socket://",
                                )
                                ? (0, r.dy)(
                                    _ ||
                                      (_ = x`
                      <ha-settings-row>
                        <span slot="description">Baudrate</span>
                        <span slot="heading">${0}</span>
                      </ha-settings-row>
                    `),
                                    this._networkSettings.device.baudrate,
                                  )
                                : "",
                            )
                          : "",
                        this._createAndDownloadBackup,
                        this._generatingBackup,
                        !this._networkSettings || this._generatingBackup,
                        this.hass.localize(
                          "ui.panel.config.zha.configuration_page.download_backup",
                        ),
                        this._openOptionFlow,
                        this.hass.localize(
                          "ui.panel.config.zha.configuration_page.migrate_radio",
                        ),
                        this._configuration
                          ? Object.entries(this._configuration.schemas).map(
                              ([e, t]) =>
                                (0, r.dy)(
                                  w ||
                                    (w = x`<ha-card header=${0}>
                  <div class="card-content">
                    <ha-form .hass=${0} .schema=${0} .data=${0} @value-changed=${0} .section=${0} .computeLabel=${0}></ha-form>
                  </div>
                </ha-card>`),
                                  this.hass.localize(
                                    `component.zha.config_panel.${e}.title`,
                                  ),
                                  this.hass,
                                  t,
                                  this._configuration.data[e],
                                  this._dataChanged,
                                  e,
                                  this._computeLabelCallback(
                                    this.hass.localize,
                                    e,
                                  ),
                                ),
                            )
                          : "",
                        this._updateConfiguration,
                        this.hass.localize(
                          "ui.panel.config.zha.configuration_page.update_button",
                        ),
                        this.hass.localize("ui.panel.config.zha.add_device"),
                        $,
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "_fetchConfiguration",
                    value: async function () {
                      this._configuration = await (0, g.DN)(this.hass);
                    },
                  },
                  {
                    kind: "method",
                    key: "_fetchSettings",
                    value: async function () {
                      this._networkSettings = await (0, g.Js)(this.hass);
                    },
                  },
                  {
                    kind: "method",
                    key: "_showChannelMigrationDialog",
                    value: async function () {
                      this._networkSettings.device.path !== S
                        ? (0, u.f)(this, {
                            currentChannel:
                              this._networkSettings.settings.network_info
                                .channel,
                          })
                        : (0, f.showAlertDialog)(this, {
                            title: this.hass.localize(
                              "ui.panel.config.zha.configuration_page.channel_dialog.title",
                            ),
                            text: this.hass.localize(
                              "ui.panel.config.zha.configuration_page.channel_dialog.text",
                            ),
                            warning: !0,
                          });
                    },
                  },
                  {
                    kind: "method",
                    key: "_createAndDownloadBackup",
                    value: async function () {
                      let e;
                      this._generatingBackup = !0;
                      try {
                        e = await (0, g.Gz)(this.hass);
                      } catch (i) {
                        return void (0, f.showAlertDialog)(this, {
                          title: "Failed to create backup",
                          text: i.message,
                          warning: !0,
                        });
                      } finally {
                        this._generatingBackup = !1;
                      }
                      e.is_complete ||
                        (await (0, f.showAlertDialog)(this, {
                          title: "Backup is incomplete",
                          text: "A backup has been created but it is incomplete and cannot be restored. This is a coordinator firmware limitation.",
                        }));
                      const t =
                        "data:text/plain;charset=utf-8," +
                        encodeURIComponent(JSON.stringify(e.backup, null, 4));
                      let n = `ZHA backup ${new Date(
                        Date.parse(e.backup.backup_time),
                      )
                        .toISOString()
                        .replace(/:/g, "-")}`;
                      e.is_complete || (n = `Incomplete ${n}`),
                        (0, d.N)(t, `${n}.json`);
                    },
                  },
                  {
                    kind: "method",
                    key: "_openOptionFlow",
                    value: async function () {
                      if (!this.configEntryId) return;
                      const e = (
                        await (0, l.pB)(this.hass, { domain: "zha" })
                      ).find((e) => e.entry_id === this.configEntryId);
                      (0, c.c)(this, e);
                    },
                  },
                  {
                    kind: "method",
                    key: "_dataChanged",
                    value: function (e) {
                      this._configuration.data[e.currentTarget.section] =
                        e.detail.value;
                    },
                  },
                  {
                    kind: "method",
                    key: "_updateConfiguration",
                    value: async function () {
                      await (0, g.fm)(this.hass, this._configuration.data);
                    },
                  },
                  {
                    kind: "method",
                    key: "_computeLabelCallback",
                    value: function (e, t) {
                      return (n) =>
                        e(`component.zha.config_panel.${t}.${n.name}`) ||
                        n.name;
                    },
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function () {
                      return [
                        p.Qx,
                        (0, r.iv)(
                          k ||
                            (k = x`ha-card{margin:16px auto auto;max-width:500px}.network-settings ha-settings-row{padding-left:0;padding-right:0;padding-inline-start:0;padding-inline-end:0;--paper-item-body-two-line-min-height:55px}.network-settings ha-settings-row span[slot=heading]{white-space:normal;word-break:break-all;text-indent:-1em;padding-left:1em;padding-inline-start:1em;padding-inline-end:initial}.network-settings ha-settings-row ha-icon-button{margin-top:-16px;margin-bottom:-16px}`),
                        ),
                      ];
                    },
                  },
                ],
              };
            },
            r.oi,
          );
          i();
        } catch (y) {
          i(y);
        }
      });
    },
    16485: function (e, t, n) {
      n.a(
        e,
        async function (e, t) {
          try {
            n(71695), n(92745), n(40251), n(47021);
            var i = n(61449),
              o = n(40574),
              a = n(30532),
              r = n(41674),
              s = n(49722),
              l = n(76632),
              d = n(7884),
              c = n(35185),
              p = n(65401),
              h = n(44180),
              u = n(49447);
            const e = async () => {
              const e = (0, h.sS)(),
                t = [];
              (0, a.shouldPolyfill)() &&
                (await Promise.all([n.e("80210"), n.e("74055")]).then(
                  n.bind(n, 98133),
                )),
                (0, s.shouldPolyfill)() &&
                  (await Promise.all([
                    n.e("2142"),
                    n.e("75297"),
                    n.e("80210"),
                    n.e("60251"),
                  ]).then(n.bind(n, 59095))),
                (0, i.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("68250")])
                      .then(n.bind(n, 80561))
                      .then(() => (0, u.H)()),
                  ),
                (0, p.shouldPolyfill)() &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("65578")]).then(
                      n.bind(n, 97995),
                    ),
                  ),
                (0, o.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("59826")]).then(
                      n.bind(n, 31514),
                    ),
                  ),
                (0, r.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("23649")]).then(
                      n.bind(n, 93840),
                    ),
                  ),
                (0, l.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("42831")]).then(
                      n.bind(n, 29559),
                    ),
                  ),
                (0, d.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("57377")])
                      .then(n.bind(n, 39030))
                      .then(() => n.e("61236").then(n.t.bind(n, 4121, 23))),
                  ),
                (0, c.shouldPolyfill)(e) &&
                  t.push(
                    Promise.all([n.e("2142"), n.e("75297"), n.e("13870")]).then(
                      n.bind(n, 74546),
                    ),
                  ),
                0 !== t.length &&
                  (await Promise.all(t).then(() => (0, u.n)(e)));
            };
            await e(), t();
          } catch (g) {
            t(g);
          }
        },
        1,
      );
    },
    58014: function (e, t, n) {
      n.d(t, { N: () => o, G: () => a });
      var i = n(18117);
      const o = (e, t = "") => {
          const n = document.createElement("a");
          (n.target = "_blank"),
            (n.href = e),
            (n.download = t),
            (n.style.display = "none"),
            document.body.appendChild(n),
            n.dispatchEvent(new MouseEvent("click")),
            document.body.removeChild(n);
        },
        a = (e) => {
          var t;
          return (
            !((e) => !!e.auth.external && i.G)(e) ||
            !(
              null === (t = e.auth.external) ||
              void 0 === t ||
              !t.config.downloadFileSupported
            )
          );
        };
    },
    18117: function (e, t, n) {
      n.d(t, { G: () => i });
      n(19134), n(5740);
      const i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    },
  },
]);
//# sourceMappingURL=44561.133fd8b6adb8aa32.js.map
