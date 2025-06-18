export const __webpack_ids__ = ["56801"];
export const __webpack_modules__ = {
  75103: function (i, a, t) {
    t.r(a);
    var o = t(44249),
      s = t(57243),
      e = t(15093),
      l = t(36522),
      d = (t(59826), t(73729));
    (0, o.Z)(
      [(0, e.Mo)("dialog-update-backup")],
      function (i, a) {
        return {
          F: class extends a {
            constructor(...a) {
              super(...a), i(this);
            }
          },
          d: [
            {
              kind: "field",
              decorators: [(0, e.Cb)({ attribute: !1 })],
              key: "hass",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, e.SB)()],
              key: "_params",
              value: void 0,
            },
            {
              kind: "method",
              key: "showDialog",
              value: async function (i) {
                this._params = i;
              },
            },
            {
              kind: "method",
              key: "render",
              value: function () {
                return this._params
                  ? s.dy`
      <ha-dialog open @closed=${
        this._cancel
      } defaultAction="ignore" .heading=${(0, d.i)(
        this.hass,
        this.hass.localize("ui.dialogs.update_backup.title"),
      )}>
        <p>${this.hass.localize("ui.dialogs.update_backup.text")}</p>
        <ha-button @click=${this._no} slot="secondaryAction">
          ${this.hass.localize("ui.common.no")}
        </ha-button>
        <ha-button @click=${this._yes} slot="primaryAction">
          ${this.hass.localize("ui.dialogs.update_backup.create")}
        </ha-button>
      </ha-dialog>
    `
                  : s.Ld;
              },
            },
            {
              kind: "method",
              key: "_no",
              value: function () {
                this._params.submit && this._params.submit(!1),
                  this.closeDialog();
              },
            },
            {
              kind: "method",
              key: "_yes",
              value: function () {
                this._params.submit && this._params.submit(!0),
                  this.closeDialog();
              },
            },
            {
              kind: "method",
              key: "_cancel",
              value: function () {
                this._params?.cancel?.(), this.closeDialog();
              },
            },
            {
              kind: "method",
              key: "closeDialog",
              value: function () {
                (this._params = void 0),
                  (0, l.B)(this, "dialog-closed", { dialog: this.localName });
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value: () =>
                s.iv`p{margin:0;color:var(--primary-text-color)}ha-dialog{--dialog-z-index:104}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:400px}}`,
            },
          ],
        };
      },
      s.oi,
    );
  },
};
//# sourceMappingURL=56801.ccacaf00ce17b5e6.js.map
