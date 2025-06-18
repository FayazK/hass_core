export const __webpack_ids__ = ["42937"];
export const __webpack_modules__ = {
  92636: function (t, a, e) {
    e.d(a, { z: () => i });
    const i = (t) => (a, e) => t.includes(a, e);
  },
  59847: function (t, a, e) {
    e.d(a, { N: () => s });
    var i = e(73850);
    const s = (t) => (0, i.M)(t.entity_id);
  },
  75278: function (t, a, e) {
    e.d(a, { e: () => i });
    const i = (t, a) => s(t.attributes, a),
      s = (t, a) => !!(t.supported_features & a);
  },
  34798: function (t, a, e) {
    e.d(a, { l: () => i });
    const i = (t, a = "_") => {
      const e =
          "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·",
        i = `aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${a}`,
        s = new RegExp(e.split("").join("|"), "g");
      let o;
      return (
        "" === t
          ? (o = "")
          : ((o = t
              .toString()
              .toLowerCase()
              .replace(s, (t) => i.charAt(e.indexOf(t)))
              .replace(/(\d),(?=\d)/g, "$1")
              .replace(/[^a-z0-9]+/g, a)
              .replace(new RegExp(`(${a})\\1+`, "g"), "$1")
              .replace(new RegExp(`^${a}+`), "")
              .replace(new RegExp(`${a}+$`), "")),
            "" === o && (o = "unknown")),
        o
      );
    };
  },
  99426: function (t, a, e) {
    e.r(a);
    var i = e(44249),
      s = e(57243),
      o = e(15093),
      r = e(35359),
      n = e(36522);
    e(23334), e(37583);
    const l = {
      info: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
      warning: "M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",
      error:
        "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",
      success:
        "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    };
    (0, i.Z)(
      [(0, o.Mo)("ha-alert")],
      function (t, a) {
        return {
          F: class extends a {
            constructor(...a) {
              super(...a), t(this);
            }
          },
          d: [
            {
              kind: "field",
              decorators: [(0, o.Cb)()],
              key: "title",
              value: () => "",
            },
            {
              kind: "field",
              decorators: [(0, o.Cb)({ attribute: "alert-type" })],
              key: "alertType",
              value: () => "info",
            },
            {
              kind: "field",
              decorators: [(0, o.Cb)({ type: Boolean })],
              key: "dismissable",
              value: () => !1,
            },
            {
              kind: "field",
              decorators: [(0, o.Cb)({ type: Boolean })],
              key: "narrow",
              value: () => !1,
            },
            {
              kind: "method",
              key: "render",
              value: function () {
                return s.dy`
      <div class="issue-type ${(0, r.$)({
        [this.alertType]: !0,
      })}" role="alert">
        <div class="icon ${this.title ? "" : "no-title"}">
          <slot name="icon">
            <ha-svg-icon .path=${l[this.alertType]}></ha-svg-icon>
          </slot>
        </div>
        <div class=${(0, r.$)({ content: !0, narrow: this.narrow })}>
          <div class="main-content">
            ${this.title ? s.dy`<div class="title">${this.title}</div>` : s.Ld}
            <slot></slot>
          </div>
          <div class="action">
            <slot name="action">
              ${
                this.dismissable
                  ? s.dy`<ha-icon-button @click=${
                      this._dismissClicked
                    } label="Dismiss alert" .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-icon-button>`
                  : s.Ld
              }
            </slot>
          </div>
        </div>
      </div>
    `;
              },
            },
            {
              kind: "method",
              key: "_dismissClicked",
              value: function () {
                (0, n.B)(this, "alert-dismissed-clicked");
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value: () =>
                s.iv`.action,.icon{z-index:1}.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.content.narrow{flex-direction:column;align-items:flex-end}.action{width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`,
            },
          ],
        };
      },
      s.oi,
    );
  },
  96530: function (t, a, e) {
    e.d(a, { X: () => o, y: () => s });
    var i = e(92636);
    const s = [
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
      o = (0, i.z)(s);
  },
  6827: function (t, a, e) {
    e.r(a), e.d(a, { DialogLovelaceDashboardDetail: () => u });
    var i = e(44249),
      s = (e(31622), e(57243)),
      o = e(15093),
      r = e(27486),
      n = e(36522),
      l = e(34798),
      d = e(73729),
      c = (e(29073), e(62162)),
      h = e(28008);
    let u = (0, i.Z)(
      [(0, o.Mo)("dialog-lovelace-dashboard-detail")],
      function (t, a) {
        return {
          F: class extends a {
            constructor(...a) {
              super(...a), t(this);
            }
          },
          d: [
            {
              kind: "field",
              decorators: [(0, o.Cb)({ attribute: !1 })],
              key: "hass",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_params",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_urlPathChanged",
              value: () => !1,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_data",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_error",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_submitting",
              value: () => !1,
            },
            {
              kind: "method",
              key: "showDialog",
              value: function (t) {
                (this._params = t),
                  (this._error = void 0),
                  (this._urlPathChanged = !1),
                  this._params.dashboard
                    ? (this._data = this._params.dashboard)
                    : (this._data = {
                        show_in_sidebar: !0,
                        icon: void 0,
                        title: "",
                        require_admin: !1,
                        mode: "storage",
                      });
              },
            },
            {
              kind: "method",
              key: "closeDialog",
              value: function () {
                (this._params = void 0),
                  (this._data = void 0),
                  (0, n.B)(this, "dialog-closed", { dialog: this.localName });
              },
            },
            {
              kind: "method",
              key: "render",
              value: function () {
                if (!this._params || !this._data) return s.Ld;
                const t = this.hass.defaultPanel,
                  a = !this._data.title || !this._data.title.trim();
                return s.dy`
      <ha-dialog open @closed=${
        this.closeDialog
      } scrimClickAction escapeKeyAction .heading=${(0, d.i)(
        this.hass,
        this._params.urlPath
          ? this._data.title ||
              this.hass.localize(
                "ui.panel.config.lovelace.dashboards.detail.edit_dashboard",
              )
          : this.hass.localize(
              "ui.panel.config.lovelace.dashboards.detail.new_dashboard",
            ),
      )}>
        <div>
          ${
            this._params.dashboard && !this._params.dashboard.id
              ? this.hass.localize(
                  "ui.panel.config.lovelace.dashboards.cant_edit_yaml",
                )
              : "lovelace" === this._params.urlPath
              ? this.hass.localize(
                  "ui.panel.config.lovelace.dashboards.cant_edit_default",
                )
              : s.dy`
                  <ha-form .schema=${this._schema(
                    this._params,
                    this.hass.userData,
                  )} .data=${this._data} .hass=${this.hass} .error=${
                    this._error
                  } .computeLabel=${this._computeLabel} @value-changed=${
                    this._valueChanged
                  }></ha-form>
                `
          }
        </div>
        ${
          this._params.urlPath
            ? s.dy`
              ${
                this._params.dashboard?.id
                  ? s.dy`
                    <mwc-button slot="secondaryAction" class="warning" @click=${
                      this._deleteDashboard
                    } .disabled=${this._submitting}>
                      ${this.hass.localize(
                        "ui.panel.config.lovelace.dashboards.detail.delete",
                      )}
                    </mwc-button>
                  `
                  : ""
              }
              <mwc-button slot="secondaryAction" @click=${
                this._toggleDefault
              } .disabled=${
                "lovelace" === this._params.urlPath && "lovelace" === t
              }>
                ${
                  this._params.urlPath === t
                    ? this.hass.localize(
                        "ui.panel.config.lovelace.dashboards.detail.remove_default",
                      )
                    : this.hass.localize(
                        "ui.panel.config.lovelace.dashboards.detail.set_default",
                      )
                }
              </mwc-button>
            `
            : ""
        }
        <mwc-button slot="primaryAction" @click=${
          this._updateDashboard
        } .disabled=${
          (this._error && "url_path" in this._error) || a || this._submitting
        } dialogInitialFocus>
          ${
            this._params.urlPath
              ? this._params.dashboard?.id
                ? this.hass.localize(
                    "ui.panel.config.lovelace.dashboards.detail.update",
                  )
                : this.hass.localize("ui.common.close")
              : this.hass.localize(
                  "ui.panel.config.lovelace.dashboards.detail.create",
                )
          }
        </mwc-button>
      </ha-dialog>
    `;
              },
            },
            {
              kind: "field",
              key: "_schema",
              value: () =>
                (0, r.Z)((t, a) => [
                  { name: "title", required: !0, selector: { text: {} } },
                  { name: "icon", required: !1, selector: { icon: {} } },
                  ...(!t.dashboard && a?.showAdvanced
                    ? [
                        {
                          name: "url_path",
                          required: !0,
                          selector: { text: {} },
                        },
                      ]
                    : []),
                  {
                    name: "require_admin",
                    required: !0,
                    selector: { boolean: {} },
                  },
                  {
                    name: "show_in_sidebar",
                    required: !0,
                    selector: { boolean: {} },
                  },
                ]),
            },
            {
              kind: "field",
              key: "_computeLabel",
              value() {
                return (t) =>
                  this.hass.localize(
                    `ui.panel.config.lovelace.dashboards.detail.${
                      "show_in_sidebar" === t.name
                        ? "show_sidebar"
                        : "url_path" === t.name
                        ? "url"
                        : t.name
                    }`,
                  );
              },
            },
            {
              kind: "method",
              key: "_valueChanged",
              value: function (t) {
                this._error = void 0;
                const a = t.detail.value;
                a.url_path !== this._data?.url_path &&
                  ((this._urlPathChanged = !0),
                  (a.url_path &&
                    "lovelace" !== a.url_path &&
                    /^[a-zA-Z0-9_-]+-[a-zA-Z0-9_-]+$/.test(a.url_path)) ||
                    (this._error = {
                      url_path: this.hass.localize(
                        "ui.panel.config.lovelace.dashboards.detail.url_error_msg",
                      ),
                    })),
                  a.title !== this._data?.title
                    ? ((this._data = a), this._fillUrlPath(a.title))
                    : (this._data = a);
              },
            },
            {
              kind: "method",
              key: "_fillUrlPath",
              value: function (t) {
                if (
                  (this.hass.userData?.showAdvanced && this._urlPathChanged) ||
                  !t
                )
                  return;
                const a = (0, l.l)(t, "-");
                this._data = {
                  ...this._data,
                  url_path: a.includes("-") ? a : `dashboard-${a}`,
                };
              },
            },
            {
              kind: "method",
              key: "_toggleDefault",
              value: function () {
                const t = this._params?.urlPath;
                t && (0, c.CM)(this, t === this.hass.defaultPanel ? c.te : t);
              },
            },
            {
              kind: "method",
              key: "_updateDashboard",
              value: async function () {
                this._params?.urlPath &&
                  !this._params.dashboard?.id &&
                  this.closeDialog(),
                  (this._submitting = !0);
                try {
                  if (this._params.dashboard) {
                    const t = {
                      require_admin: this._data.require_admin,
                      show_in_sidebar: this._data.show_in_sidebar,
                      icon: this._data.icon || void 0,
                      title: this._data.title,
                    };
                    await this._params.updateDashboard(t);
                  } else
                    this._params.createDashboard &&
                      (await this._params.createDashboard(this._data));
                  this.closeDialog();
                } catch (t) {
                  this._error = { base: t?.message || "Unknown error" };
                } finally {
                  this._submitting = !1;
                }
              },
            },
            {
              kind: "method",
              key: "_deleteDashboard",
              value: async function () {
                this._submitting = !0;
                try {
                  (await this._params.removeDashboard()) && this.closeDialog();
                } finally {
                  this._submitting = !1;
                }
              },
            },
            {
              kind: "get",
              static: !0,
              key: "styles",
              value: function () {
                return [h.yu, s.iv``];
              },
            },
          ],
        };
      },
      s.oi,
    );
  },
  30338: function (t, a, e) {
    var i = e(97934),
      s = e(71998),
      o = e(4576),
      r = e(36760);
    t.exports = function (t, a) {
      (a && "string" == typeof t) || s(t);
      var e = r(t);
      return o(s(void 0 !== e ? i(e, t) : t));
    };
  },
  25677: function (t, a, e) {
    var i = e(40810),
      s = e(97934),
      o = e(63983),
      r = e(71998),
      n = e(4576),
      l = e(30338),
      d = e(79995),
      c = e(14181),
      h = e(92288),
      u = d(function () {
        for (var t, a, e = this.iterator, i = this.mapper; ; ) {
          if ((a = this.inner))
            try {
              if (!(t = r(s(a.next, a.iterator))).done) return t.value;
              this.inner = null;
            } catch (t) {
              c(e, "throw", t);
            }
          if (((t = r(s(this.next, e))), (this.done = !!t.done))) return;
          try {
            this.inner = l(i(t.value, this.counter++), !1);
          } catch (t) {
            c(e, "throw", t);
          }
        }
      });
    i(
      { target: "Iterator", proto: !0, real: !0, forced: h },
      {
        flatMap: function (t) {
          return r(this), o(t), new u(n(this), { mapper: t, inner: null });
        },
      },
    );
  },
};
//# sourceMappingURL=42937.2b683e109f94fa8e.js.map
