export const __webpack_ids__ = ["30247"];
export const __webpack_modules__ = {
  44111: function (a, i, e) {
    e.a(a, async function (a, o) {
      try {
        e.r(i), e.d(i, { HuiSaveConfig: () => m });
        var t = e(44249),
          s = (e(31622), e(57243)),
          l = e(15093),
          n = e(36522),
          c = e(17170),
          h =
            (e(73729),
            e(95198),
            e(55486),
            e(23334),
            e(1888),
            e(64889),
            e(28008)),
          d = e(73192),
          r = e(28421),
          g = a([c]);
        c = (g.then ? (await g)() : g)[0];
        const p =
            "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
          u =
            "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",
          v = { views: [{ title: "Home" }] };
        let m = (0, t.Z)(
          [(0, l.Mo)("hui-dialog-save-config")],
          function (a, i) {
            return {
              F: class extends i {
                constructor() {
                  super(), a(this), (this._saving = !1);
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
                  key: "_params",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_emptyConfig",
                  value: () => !1,
                },
                {
                  kind: "field",
                  decorators: [(0, l.SB)()],
                  key: "_saving",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "showDialog",
                  value: function (a) {
                    (this._params = a), (this._emptyConfig = !1);
                  },
                },
                {
                  kind: "method",
                  key: "closeDialog",
                  value: function () {
                    return (
                      (this._params = void 0),
                      (0, n.B)(this, "dialog-closed", {
                        dialog: this.localName,
                      }),
                      !0
                    );
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    if (!this._params) return s.Ld;
                    const a = this.hass.localize(
                      "ui.panel.lovelace.editor.save_config.header",
                    );
                    return s.dy`
      <ha-dialog open scrimClickAction escapeKeyAction @closed=${
        this._close
      } .heading=${a}>
        <ha-dialog-header slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${this.hass.localize(
            "ui.common.close",
          )} .path=${p}></ha-icon-button>
          <span slot="title">${a}</span>
          <a href=${(0, d.R)(
            this.hass,
            "/lovelace/",
          )} title=${this.hass.localize(
            "ui.panel.lovelace.menu.help",
          )} target="_blank" rel="noreferrer" slot="actionItems">
            <ha-icon-button .path=${u} .label=${this.hass.localize(
              "ui.common.help",
            )}></ha-icon-button>
          </a>
        </ha-dialog-header>
        <div>
          <p>
            ${this.hass.localize("ui.panel.lovelace.editor.save_config.para")}
          </p>

          ${
            "storage" === this._params.mode
              ? s.dy`
                <p>
                  ${this.hass.localize(
                    "ui.panel.lovelace.editor.save_config.para_sure",
                  )}
                </p>
                <ha-formfield .label=${this.hass.localize(
                  "ui.panel.lovelace.editor.save_config.empty_config",
                )}>
                  <ha-switch .checked=${this._emptyConfig} @change=${
                    this._emptyConfigChanged
                  } dialogInitialFocus></ha-switch></ha-formfield>
              `
              : s.dy`
                <p>
                  ${this.hass.localize(
                    "ui.panel.lovelace.editor.save_config.yaml_mode",
                  )}
                </p>
                <p>
                  ${this.hass.localize(
                    "ui.panel.lovelace.editor.save_config.yaml_control",
                  )}
                </p>
                <p>
                  ${this.hass.localize(
                    "ui.panel.lovelace.editor.save_config.yaml_config",
                  )}
                </p>
                <ha-yaml-editor .hass=${this.hass} .defaultValue=${
                  this._params.lovelace.config
                } dialogInitialFocus></ha-yaml-editor>
              `
          }
        </div>
        ${
          "storage" === this._params.mode
            ? s.dy`
              <mwc-button slot="primaryAction" @click=${this.closeDialog}>
                ${this.hass.localize("ui.common.cancel")}
              </mwc-button>
              <mwc-button slot="primaryAction" ?disabled=${
                this._saving
              } @click=${this._saveConfig}>
                ${
                  this._saving
                    ? s.dy`<ha-spinner size="small" aria-label="Saving"></ha-spinner>`
                    : ""
                }
                ${this.hass.localize(
                  "ui.panel.lovelace.editor.save_config.save",
                )}
              </mwc-button>
            `
            : s.dy`
              <mwc-button slot="primaryAction" @click=${this.closeDialog}>
                ${this.hass.localize(
                  "ui.panel.lovelace.editor.save_config.close",
                )}</mwc-button>
            `
        }
      </ha-dialog>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_close",
                  value: function (a) {
                    a && a.stopPropagation(), this.closeDialog();
                  },
                },
                {
                  kind: "method",
                  key: "_emptyConfigChanged",
                  value: function (a) {
                    this._emptyConfig = a.target.checked;
                  },
                },
                {
                  kind: "method",
                  key: "_saveConfig",
                  value: async function () {
                    if (this.hass && this._params) {
                      this._saving = !0;
                      try {
                        const a = this._params.lovelace;
                        await a.saveConfig(
                          this._emptyConfig
                            ? v
                            : await (0, r.mQ)(a.config, this.hass),
                        ),
                          a.setEditMode(!0),
                          (this._saving = !1),
                          this.closeDialog();
                      } catch (a) {
                        alert(`Saving failed: ${a.message}`),
                          (this._saving = !1);
                      }
                    }
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      h.yu,
                      s.iv`ha-dialog{--dialog-content-padding:0 24px 24px 24px}ha-dialog-header a{color:inherit;text-decoration:none}`,
                    ];
                  },
                },
              ],
            };
          },
          s.oi,
        );
        o();
      } catch (a) {
        o(a);
      }
    });
  },
};
//# sourceMappingURL=30247.3e0516687e50b3e2.js.map
