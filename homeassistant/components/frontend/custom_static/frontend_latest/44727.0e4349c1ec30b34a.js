/*! For license information please see 44727.0e4349c1ec30b34a.js.LICENSE.txt */
export const __webpack_ids__ = ["44727"];
export const __webpack_modules__ = {
  27323: function (t, e, i) {
    i.d(e, { O: () => h });
    var a = i(9065),
      s = i(1105),
      o = i(57243),
      l = i(15093),
      n = i(35359),
      d = i(20552),
      r = i(91928);
    const c = {
      fromAttribute: (t) => null !== t && ("" === t || t),
      toAttribute: (t) => ("boolean" == typeof t ? (t ? "" : null) : t),
    };
    class h extends s.P {
      constructor() {
        super(...arguments),
          (this.rows = 2),
          (this.cols = 20),
          (this.charCounter = !1);
      }
      render() {
        const t = this.charCounter && -1 !== this.maxLength,
          e = t && "internal" === this.charCounter,
          i = t && !e,
          a = !!this.helper || !!this.validationMessage || i,
          s = {
            "mdc-text-field--disabled": this.disabled,
            "mdc-text-field--no-label": !this.label,
            "mdc-text-field--filled": !this.outlined,
            "mdc-text-field--outlined": this.outlined,
            "mdc-text-field--end-aligned": this.endAligned,
            "mdc-text-field--with-internal-counter": e,
          };
        return o.dy`
      <label class="mdc-text-field mdc-text-field--textarea ${(0, n.$)(s)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(a, i)}
    `;
      }
      renderInput() {
        const t = this.label ? "label" : void 0,
          e = -1 === this.minLength ? void 0 : this.minLength,
          i = -1 === this.maxLength ? void 0 : this.maxLength,
          a = this.autocapitalize ? this.autocapitalize : void 0;
        return o.dy`
      <textarea aria-labelledby=${(0, d.o)(
        t,
      )} class="mdc-text-field__input" .value="${(0, r.a)(this.value)}" rows="${
        this.rows
      }" cols="${this.cols}" ?disabled="${this.disabled}" placeholder="${
        this.placeholder
      }" ?required="${this.required}" ?readonly="${
        this.readOnly
      }" minlength="${(0, d.o)(e)}" maxlength="${(0, d.o)(i)}" name="${(0, d.o)(
        "" === this.name ? void 0 : this.name,
      )}" inputmode="${(0, d.o)(this.inputMode)}" autocapitalize="${(0, d.o)(
        a,
      )}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">
      </textarea>`;
      }
    }
    (0, a.__decorate)(
      [(0, l.IO)("textarea")],
      h.prototype,
      "formElement",
      void 0,
    ),
      (0, a.__decorate)(
        [(0, l.Cb)({ type: Number })],
        h.prototype,
        "rows",
        void 0,
      ),
      (0, a.__decorate)(
        [(0, l.Cb)({ type: Number })],
        h.prototype,
        "cols",
        void 0,
      ),
      (0, a.__decorate)(
        [(0, l.Cb)({ converter: c })],
        h.prototype,
        "charCounter",
        void 0,
      );
  },
  88540: function (t, e, i) {
    i.d(e, { W: () => a });
    const a = i(57243)
      .iv`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
  },
  40917: function (t, e, i) {
    var a = i(44249),
      s = i(72621),
      o = i(27323),
      l = i(33990),
      n = i(88540),
      d = i(57243),
      r = i(15093);
    (0, a.Z)(
      [(0, r.Mo)("ha-textarea")],
      function (t, e) {
        class i extends e {
          constructor(...e) {
            super(...e), t(this);
          }
        }
        return {
          F: i,
          d: [
            {
              kind: "field",
              decorators: [(0, r.Cb)({ type: Boolean, reflect: !0 })],
              key: "autogrow",
              value: () => !1,
            },
            {
              kind: "method",
              key: "updated",
              value: function (t) {
                (0, s.Z)(i, "updated", this, 3)([t]),
                  this.autogrow &&
                    t.has("value") &&
                    (this.mdcRoot.dataset.value = this.value + '=​"');
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value: () => [
                l.W,
                n.W,
                d.iv`:host([autogrow]) .mdc-text-field{position:relative;min-height:74px;min-width:178px;max-height:200px}:host([autogrow]) .mdc-text-field:after{content:attr(data-value);margin-top:23px;margin-bottom:9px;line-height:1.5rem;min-height:42px;padding:0px 32px 0 16px;letter-spacing:var(
          --mdc-typography-subtitle1-letter-spacing,
          .009375em
        );visibility:hidden;white-space:pre-wrap}:host([autogrow]) .mdc-text-field__input{position:absolute;height:calc(100% - 32px)}:host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after{margin-top:16px;margin-bottom:16px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start) top}@media only screen and (min-width:459px){:host([mobile-multiline]) .mdc-text-field__input{white-space:nowrap;max-height:16px}}`,
              ],
            },
          ],
        };
      },
      o.O,
    );
  },
  88529: function (t, e, i) {
    i.r(e), i.d(e, { DialogTryTts: () => y });
    var a = i(44249),
      s = (i(9359), i(56475), i(70104), i(31622), i(87319), i(57243)),
      o = i(15093),
      l = i(68958),
      n = i(36522),
      d = i(49976),
      r = i(59847),
      c = i(47194),
      h = i(75278),
      u = i(73729),
      p = (i(92824), i(40917), i(14473)),
      m = i(89890),
      g = i(58968),
      v = i(76131),
      _ = i(28008);
    let y = (0, a.Z)(
      [(0, o.Mo)("dialog-cloud-try-tts")],
      function (t, e) {
        return {
          F: class extends e {
            constructor(...e) {
              super(...e), t(this);
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
              key: "_loadingExample",
              value: () => !1,
            },
            {
              kind: "field",
              decorators: [(0, o.SB)()],
              key: "_params",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, o.IO)("#message")],
              key: "_messageInput",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [
                (0, l.t)({
                  key: "cloudTtsTryMessage",
                  state: !1,
                  subscribe: !1,
                }),
              ],
              key: "_message",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [
                (0, l.t)({
                  key: "cloudTtsTryTarget",
                  state: !1,
                  subscribe: !1,
                }),
              ],
              key: "_target",
              value: void 0,
            },
            {
              kind: "method",
              key: "showDialog",
              value: function (t) {
                this._params = t;
              },
            },
            {
              kind: "method",
              key: "closeDialog",
              value: function () {
                (this._params = void 0),
                  (0, n.B)(this, "dialog-closed", { dialog: this.localName });
              },
            },
            {
              kind: "method",
              key: "render",
              value: function () {
                if (!this._params) return s.Ld;
                const t = this._target || "browser";
                return s.dy`
      <ha-dialog open @closed=${
        this.closeDialog
      } scrimClickAction escapeKeyAction .heading=${(0, u.i)(
        this.hass,
        this.hass.localize("ui.panel.config.cloud.account.tts.dialog.header"),
      )}>
        <div>
          <ha-textarea autogrow id="message" .label=${this.hass.localize(
            "ui.panel.config.cloud.account.tts.dialog.message",
          )} .value=${
            this._message ||
            this.hass.localize(
              "ui.panel.config.cloud.account.tts.dialog.example_message",
              { name: this.hass.user.name },
            )
          }>
          </ha-textarea>

          <ha-select .label=${this.hass.localize(
            "ui.panel.config.cloud.account.tts.dialog.target",
          )} id="target" .value=${t} @selected=${
            this._handleTargetChanged
          } fixedMenuPosition naturalMenuWidth @closed=${d.U}>
            <mwc-list-item value="browser">
              ${this.hass.localize(
                "ui.panel.config.cloud.account.tts.dialog.target_browser",
              )}
            </mwc-list-item>
            ${Object.values(this.hass.states)
              .filter(
                (t) =>
                  "media_player" === (0, r.N)(t) &&
                  (0, h.e)(t, m.yZ.PLAY_MEDIA),
              )
              .map(
                (t) => s.dy`
                  <mwc-list-item .value=${t.entity_id}>
                    ${(0, c.C)(t)}
                  </mwc-list-item>
                `,
              )}
          </ha-select>
        </div>
        <mwc-button slot="primaryAction" .label=${this.hass.localize(
          "ui.panel.config.cloud.account.tts.dialog.play",
        )} @click=${this._playExample} .disabled=${this._loadingExample}>
          <ha-svg-icon slot="icon" .path=${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}></ha-svg-icon>
        </mwc-button>
        <mwc-button slot="secondaryAction" .disabled=${
          "browser" === t
        } .label=${this.hass.localize(
          "ui.panel.config.cloud.account.tts.dialog.create_automation",
        )} @click=${this._createAutomation}>
          <ha-svg-icon slot="icon" .path=${"M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"}></ha-svg-icon>
        </mwc-button>
      </ha-dialog>
    `;
              },
            },
            {
              kind: "method",
              key: "_handleTargetChanged",
              value: function (t) {
                (this._target = t.target.value), this.requestUpdate("_target");
              },
            },
            {
              kind: "method",
              key: "_playExample",
              value: async function () {
                const t = this._messageInput?.value;
                if (t)
                  if (((this._message = t), "browser" === this._target)) {
                    const e = new Audio();
                    e.play(), this._playBrowser(t, e);
                  } else
                    this.hass.callService("tts", "cloud_say", {
                      entity_id: this._target,
                      message: t,
                    });
              },
            },
            {
              kind: "method",
              key: "_createAutomation",
              value: function () {
                const t = this._messageInput.value;
                (this._message = t),
                  (0, p.Ip)({
                    action: [
                      {
                        service: "tts.cloud_say",
                        data: { entity_id: this._target, message: t },
                      },
                    ],
                  }),
                  this.closeDialog();
              },
            },
            {
              kind: "method",
              key: "_playBrowser",
              value: async function (t, e) {
                this._loadingExample = !0;
                const i = this._params.defaultVoice[0],
                  a = this._params.defaultVoice[1];
                let s;
                try {
                  s = (
                    await (0, g.aT)(this.hass, {
                      platform: "cloud",
                      message: t,
                      language: i,
                      options: { voice: a },
                    })
                  ).path;
                } catch (t) {
                  return (
                    (this._loadingExample = !1),
                    void (0, v.showAlertDialog)(this, {
                      text: `Unable to load example. ${t.error || t.body || t}`,
                      warning: !0,
                    })
                  );
                }
                (e.src = s),
                  e.addEventListener("canplaythrough", () => {
                    e.play();
                  }),
                  e.addEventListener("playing", () => {
                    this._loadingExample = !1;
                  }),
                  e.addEventListener("error", () => {
                    (0, v.showAlertDialog)(this, {
                      title: "Error playing audio.",
                    }),
                      (this._loadingExample = !1);
                  });
              },
            },
            {
              kind: "get",
              static: !0,
              key: "styles",
              value: function () {
                return [
                  _.yu,
                  s.iv`ha-dialog{--mdc-dialog-max-width:500px}ha-select,ha-textarea{width:100%}ha-select{margin-top:8px}`,
                ];
              },
            },
          ],
        };
      },
      s.oi,
    );
  },
};
//# sourceMappingURL=44727.0e4349c1ec30b34a.js.map
