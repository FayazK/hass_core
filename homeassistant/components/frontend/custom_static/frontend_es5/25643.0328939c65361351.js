"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["25643"],
  {
    92213: function (o, i, a) {
      a.r(i), a.d(i, { DialogManageCloudhook: () => f });
      var e = a(61701),
        l = (a(71695), a(40251), a(47021), a(31622), a(57243)),
        s = a(50778),
        t = a(36522),
        n = a(73729),
        c = a(76131),
        d = a(28008),
        h = a(73192);
      a(75930);
      let u,
        r,
        g,
        m,
        k = (o) => o;
      let f = (0, e.Z)(
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
                decorators: [(0, s.SB)()],
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
                    (0, t.B)(this, "dialog-closed", { dialog: this.localName });
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
                  return (0, l.dy)(
                    u ||
                      (u = k`
      <ha-dialog open hideActions @closed=${0} .heading=${0}>
        <div>
          <p>
            ${0}
            <br/>
            <a href=${0} target="_blank" rel="noreferrer">
              ${0}
              <ha-svg-icon .path=${0}></ha-svg-icon>
            </a>
          </p>

          <ha-copy-textfield .hass=${0} .value=${0} .label=${0}></ha-copy-textfield>
        </div>

        <a href=${0} target="_blank" rel="noreferrer" slot="secondaryAction">
          <mwc-button>
            ${0}
          </mwc-button>
        </a>
        <mwc-button @click=${0} slot="primaryAction">
          ${0}
        </mwc-button>
      </ha-dialog>
    `),
                    this.closeDialog,
                    (0, n.i)(
                      this.hass,
                      this.hass.localize(
                        "ui.panel.config.cloud.dialog_cloudhook.webhook_for",
                        { name: o.name },
                      ),
                    ),
                    i.managed
                      ? (0, l.dy)(
                          g ||
                            (g = k`
                  ${0}
                  <button class="link" @click=${0}>
                    ${0}</button>.
                `),
                          this.hass.localize(
                            "ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook",
                          ),
                          this._disableWebhook,
                          this.hass.localize(
                            "ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook",
                          ),
                        )
                      : (0, l.dy)(
                          r ||
                            (r = k`
                  ${0}
                `),
                          this.hass.localize(
                            "ui.panel.config.cloud.dialog_cloudhook.managed_by_integration",
                          ),
                        ),
                    a,
                    this.hass.localize(
                      "ui.panel.config.cloud.dialog_cloudhook.view_documentation",
                    ),
                    "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",
                    this.hass,
                    i.cloudhook_url,
                    this.hass.localize("ui.panel.config.common.copy_link"),
                    a,
                    this.hass.localize(
                      "ui.panel.config.cloud.dialog_cloudhook.view_documentation",
                    ),
                    this.closeDialog,
                    this.hass.localize(
                      "ui.panel.config.cloud.dialog_cloudhook.close",
                    ),
                  );
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
                    (0, l.iv)(
                      m ||
                        (m = k`a,button.link{text-decoration:none}ha-dialog{width:650px}button.link{color:var(--primary-color)}a ha-svg-icon{--mdc-icon-size:16px}p{margin-top:0;margin-bottom:16px}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        l.oi,
      );
      customElements.define("dialog-manage-cloudhook", f);
    },
    73192: function (o, i, a) {
      a.d(i, { R: () => e });
      a(19083), a(61006);
      const e = (o, i) =>
        `https://${
          o.config.version.includes("b")
            ? "rc"
            : o.config.version.includes("dev")
            ? "next"
            : "www"
        }.home-assistant.io${i}`;
    },
  },
]);
//# sourceMappingURL=25643.0328939c65361351.js.map
