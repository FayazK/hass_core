export const __webpack_ids__ = ["87050"];
export const __webpack_modules__ = {
  51119: function (i, a, e) {
    e.a(i, async function (i, o) {
      try {
        e.r(a);
        var t = e(44249),
          c = (e(9359), e(70104), e(31622), e(57243)),
          l = e(15093),
          s = e(64214),
          n = e(36522),
          d = e(73729),
          r = e(28008),
          h = i([s]);
        s = (h.then ? (await h)() : h)[0];
        (0, t.Z)(
          [(0, l.Mo)("dialog-cloud-certificate")],
          function (i, a) {
            return {
              F: class extends a {
                constructor(...a) {
                  super(...a), i(this);
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
                  kind: "method",
                  key: "showDialog",
                  value: function (i) {
                    this._params = i;
                  },
                },
                {
                  kind: "method",
                  key: "closeDialog",
                  value: function () {
                    (this._params = void 0),
                      (0, n.B)(this, "dialog-closed", {
                        dialog: this.localName,
                      });
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    if (!this._params) return c.Ld;
                    const { certificateInfo: i } = this._params;
                    return c.dy`
      <ha-dialog open hideActions @closed=${this.closeDialog} .heading=${(0,
      d.i)(
        this.hass,
        this.hass.localize(
          "ui.panel.config.cloud.dialog_certificate.certificate_information",
        ),
      )}>
        <div>
          <p>
            ${this.hass.localize(
              "ui.panel.config.cloud.dialog_certificate.certificate_expiration_date",
            )}
            ${(0, s.o0)(
              new Date(i.expire_date),
              this.hass.locale,
              this.hass.config,
            )}<br/>
            (${this.hass.localize(
              "ui.panel.config.cloud.dialog_certificate.will_be_auto_renewed",
            )})
          </p>
          <p class="break-word">
            ${this.hass.localize(
              "ui.panel.config.cloud.dialog_certificate.fingerprint",
            )}
            ${i.fingerprint}
          </p>
          <p class="break-word">
            ${this.hass.localize(
              "ui.panel.config.cloud.dialog_certificate.alternative_names",
            )}
          </p>
          <ul>
            ${i.alternative_names.map((i) => c.dy`<li><code>${i}</code></li>`)}
          </ul>
        </div>

        <mwc-button @click=${this.closeDialog} slot="primaryAction">
          ${this.hass.localize(
            "ui.panel.config.cloud.dialog_certificate.close",
          )}
        </mwc-button>
      </ha-dialog>
    `;
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      r.yu,
                      c.iv`ha-dialog{--mdc-dialog-max-width:535px}.break-word{overflow-wrap:break-word}p{margin-top:0;margin-bottom:12px}p:last-child{margin-bottom:0}`,
                    ];
                  },
                },
              ],
            };
          },
          c.oi,
        );
        o();
      } catch (i) {
        o(i);
      }
    });
  },
};
//# sourceMappingURL=87050.0d0170d21f7f6239.js.map
