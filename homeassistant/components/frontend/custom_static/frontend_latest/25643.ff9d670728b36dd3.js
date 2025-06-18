export const __webpack_ids__ = ["25643"];
export const __webpack_modules__ = {
  92213: function (o, i, a) {
    a.r(i), a.d(i, { DialogManageCloudhook: () => u });
    var e = a(44249),
      l = (a(31622), a(57243)),
      t = a(15093),
      s = a(36522),
      n = a(73729),
      c = a(76131),
      d = a(28008),
      h = a(73192);
    a(75930);
    let u = (0, e.Z)(
      null,
      function (o, i) {
        return {
          F: class extends i {
            constructor(...i) {
              super(...i), o(this);
            }
          },
          d: [
            { kind: "field", key: "hass", value: void 0 },
            {
              kind: "field",
              decorators: [(0, t.SB)()],
              key: "_params",
              value: void 0,
            },
            {
              kind: "method",
              key: "showDialog",
              value: function (o) {
                this._params = o;
              },
            },
            {
              kind: "method",
              key: "closeDialog",
              value: function () {
                (this._params = void 0),
                  (0, s.B)(this, "dialog-closed", { dialog: this.localName });
              },
            },
            {
              kind: "method",
              key: "render",
              value: function () {
                if (!this._params) return l.Ld;
                const { webhook: o, cloudhook: i } = this._params,
                  a =
                    "automation" === o.domain
                      ? (0, h.R)(
                          this.hass,
                          "/docs/automation/trigger/#webhook-trigger",
                        )
                      : (0, h.R)(this.hass, `/integrations/${o.domain}/`);
                return l.dy`
      <ha-dialog open hideActions @closed=${this.closeDialog} .heading=${(0,
      n.i)(
        this.hass,
        this.hass.localize(
          "ui.panel.config.cloud.dialog_cloudhook.webhook_for",
          { name: o.name },
        ),
      )}>
        <div>
          <p>
            ${
              i.managed
                ? l.dy`
                  ${this.hass.localize(
                    "ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook",
                  )}
                  <button class="link" @click=${this._disableWebhook}>
                    ${this.hass.localize(
                      "ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook",
                    )}</button>.
                `
                : l.dy`
                  ${this.hass.localize(
                    "ui.panel.config.cloud.dialog_cloudhook.managed_by_integration",
                  )}
                `
            }
            <br/>
            <a href=${a} target="_blank" rel="noreferrer">
              ${this.hass.localize(
                "ui.panel.config.cloud.dialog_cloudhook.view_documentation",
              )}
              <ha-svg-icon .path=${"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}></ha-svg-icon>
            </a>
          </p>

          <ha-copy-textfield .hass=${this.hass} .value=${
            i.cloudhook_url
          } .label=${this.hass.localize(
            "ui.panel.config.common.copy_link",
          )}></ha-copy-textfield>
        </div>

        <a href=${a} target="_blank" rel="noreferrer" slot="secondaryAction">
          <mwc-button>
            ${this.hass.localize(
              "ui.panel.config.cloud.dialog_cloudhook.view_documentation",
            )}
          </mwc-button>
        </a>
        <mwc-button @click=${this.closeDialog} slot="primaryAction">
          ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close")}
        </mwc-button>
      </ha-dialog>
    `;
              },
            },
            {
              kind: "method",
              key: "_disableWebhook",
              value: async function () {
                (await (0, c.showConfirmationDialog)(this, {
                  title: this.hass.localize(
                    "ui.panel.config.cloud.dialog_cloudhook.confirm_disable_title",
                  ),
                  text: this.hass.localize(
                    "ui.panel.config.cloud.dialog_cloudhook.confirm_disable_text",
                    { name: this._params.webhook.name },
                  ),
                  dismissText: this.hass.localize("ui.common.cancel"),
                  confirmText: this.hass.localize("ui.common.disable"),
                  destructive: !0,
                })) && (this._params.disableHook(), this.closeDialog());
              },
            },
            {
              kind: "get",
              static: !0,
              key: "styles",
              value: function () {
                return [
                  d.Qx,
                  d.yu,
                  l.iv`a,button.link{text-decoration:none}ha-dialog{width:650px}button.link{color:var(--primary-color)}a ha-svg-icon{--mdc-icon-size:16px}p{margin-top:0;margin-bottom:16px}`,
                ];
              },
            },
          ],
        };
      },
      l.oi,
    );
    customElements.define("dialog-manage-cloudhook", u);
  },
  73192: function (o, i, a) {
    a.d(i, { R: () => e });
    const e = (o, i) =>
      `https://${
        o.config.version.includes("b")
          ? "rc"
          : o.config.version.includes("dev")
          ? "next"
          : "www"
      }.home-assistant.io${i}`;
  },
};
//# sourceMappingURL=25643.ff9d670728b36dd3.js.map
