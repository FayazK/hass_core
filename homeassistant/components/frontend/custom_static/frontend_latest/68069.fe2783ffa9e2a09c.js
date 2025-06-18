/*! For license information please see 68069.fe2783ffa9e2a09c.js.LICENSE.txt */
export const __webpack_ids__ = ["68069"];
export const __webpack_modules__ = {
  27323: function (e, t, i) {
    i.d(t, { O: () => h });
    var a = i(9065),
      d = i(1105),
      n = i(57243),
      o = i(15093),
      s = i(35359),
      l = i(20552),
      r = i(91928);
    const c = {
      fromAttribute: (e) => null !== e && ("" === e || e),
      toAttribute: (e) => ("boolean" == typeof e ? (e ? "" : null) : e),
    };
    class h extends d.P {
      constructor() {
        super(...arguments),
          (this.rows = 2),
          (this.cols = 20),
          (this.charCounter = !1);
      }
      render() {
        const e = this.charCounter && -1 !== this.maxLength,
          t = e && "internal" === this.charCounter,
          i = e && !t,
          a = !!this.helper || !!this.validationMessage || i,
          d = {
            "mdc-text-field--disabled": this.disabled,
            "mdc-text-field--no-label": !this.label,
            "mdc-text-field--filled": !this.outlined,
            "mdc-text-field--outlined": this.outlined,
            "mdc-text-field--end-aligned": this.endAligned,
            "mdc-text-field--with-internal-counter": t,
          };
        return n.dy`
      <label class="mdc-text-field mdc-text-field--textarea ${(0, s.$)(d)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(a, i)}
    `;
      }
      renderInput() {
        const e = this.label ? "label" : void 0,
          t = -1 === this.minLength ? void 0 : this.minLength,
          i = -1 === this.maxLength ? void 0 : this.maxLength,
          a = this.autocapitalize ? this.autocapitalize : void 0;
        return n.dy`
      <textarea aria-labelledby=${(0, l.o)(
        e,
      )} class="mdc-text-field__input" .value="${(0, r.a)(this.value)}" rows="${
        this.rows
      }" cols="${this.cols}" ?disabled="${this.disabled}" placeholder="${
        this.placeholder
      }" ?required="${this.required}" ?readonly="${
        this.readOnly
      }" minlength="${(0, l.o)(t)}" maxlength="${(0, l.o)(i)}" name="${(0, l.o)(
        "" === this.name ? void 0 : this.name,
      )}" inputmode="${(0, l.o)(this.inputMode)}" autocapitalize="${(0, l.o)(
        a,
      )}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">
      </textarea>`;
      }
    }
    (0, a.__decorate)(
      [(0, o.IO)("textarea")],
      h.prototype,
      "formElement",
      void 0,
    ),
      (0, a.__decorate)(
        [(0, o.Cb)({ type: Number })],
        h.prototype,
        "rows",
        void 0,
      ),
      (0, a.__decorate)(
        [(0, o.Cb)({ type: Number })],
        h.prototype,
        "cols",
        void 0,
      ),
      (0, a.__decorate)(
        [(0, o.Cb)({ converter: c })],
        h.prototype,
        "charCounter",
        void 0,
      );
  },
  88540: function (e, t, i) {
    i.d(t, { W: () => a });
    const a = i(57243)
      .iv`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
  },
  83456: function (e, t, i) {
    var a = i(44249),
      d = i(92444),
      n = i(76688),
      o = i(57243),
      s = i(15093);
    (0, a.Z)(
      [(0, s.Mo)("ha-checkbox")],
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
              static: !0,
              key: "styles",
              value: () => [
                n.W,
                o.iv`:host{--mdc-theme-secondary:var(--primary-color)}`,
              ],
            },
          ],
        };
      },
      d.A,
    );
  },
  36185: function (e, t, i) {
    i.a(e, async function (e, t) {
      try {
        var a = i(44249),
          d = i(57243),
          n = i(15093),
          o = i(19631),
          s = i(46467),
          l = i(36522),
          r = i(20382),
          c = (i(37583), i(83166), e([s]));
        s = (c.then ? (await c)() : c)[0];
        const h =
            "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
          u = () =>
            Promise.all([
              i.e("97983"),
              i.e("3134"),
              i.e("58640"),
              i.e("60351"),
              i.e("46360"),
            ]).then(i.bind(i, 88944)),
          m = (e, t) => {
            (0, l.B)(e, "show-dialog", {
              dialogTag: "ha-dialog-date-picker",
              dialogImport: u,
              dialogParams: t,
            });
          };
        (0, a.Z)(
          [(0, n.Mo)("ha-date-input")],
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
                  key: "locale",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)()],
                  key: "value",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)()],
                  key: "min",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)()],
                  key: "max",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)({ type: Boolean })],
                  key: "disabled",
                  value: () => !1,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)({ type: Boolean })],
                  key: "required",
                  value: () => !1,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)()],
                  key: "label",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, n.Cb)()],
                  key: "helper",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    (0, n.Cb)({ attribute: "can-clear", type: Boolean }),
                  ],
                  key: "canClear",
                  value: () => !1,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    return d.dy`<ha-textfield .label=${this.label} .helper=${
                      this.helper
                    } .disabled=${
                      this.disabled
                    } iconTrailing helperPersistent readonly=readonly @click=${
                      this._openDialog
                    } @keydown=${this._keyDown} .value=${
                      this.value
                        ? (0, s.WB)(
                            new Date(`${this.value.split("T")[0]}T00:00:00`),
                            { ...this.locale, time_zone: r.c_.local },
                            {},
                          )
                        : ""
                    } .required=${this.required}>
      <ha-svg-icon slot="trailingIcon" .path=${h}></ha-svg-icon>
    </ha-textfield>`;
                  },
                },
                {
                  kind: "method",
                  key: "_openDialog",
                  value: function () {
                    this.disabled ||
                      m(this, {
                        min: this.min || "1970-01-01",
                        max: this.max,
                        value: this.value,
                        canClear: this.canClear,
                        onChange: (e) => this._valueChanged(e),
                        locale: this.locale.language,
                        firstWeekday: (0, o.Bt)(this.locale),
                      });
                  },
                },
                {
                  kind: "method",
                  key: "_keyDown",
                  value: function (e) {
                    this.canClear &&
                      ["Backspace", "Delete"].includes(e.key) &&
                      this._valueChanged(void 0);
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function (e) {
                    this.value !== e &&
                      ((this.value = e),
                      (0, l.B)(this, "change"),
                      (0, l.B)(this, "value-changed", { value: e }));
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "styles",
                  value: () =>
                    d.iv`ha-svg-icon{color:var(--secondary-text-color)}ha-textfield{display:block}`,
                },
              ],
            };
          },
          d.oi,
        );
        t();
      } catch (e) {
        t(e);
      }
    });
  },
  40917: function (e, t, i) {
    var a = i(44249),
      d = i(72621),
      n = i(27323),
      o = i(33990),
      s = i(88540),
      l = i(57243),
      r = i(15093);
    (0, a.Z)(
      [(0, r.Mo)("ha-textarea")],
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
              decorators: [(0, r.Cb)({ type: Boolean, reflect: !0 })],
              key: "autogrow",
              value: () => !1,
            },
            {
              kind: "method",
              key: "updated",
              value: function (e) {
                (0, d.Z)(i, "updated", this, 3)([e]),
                  this.autogrow &&
                    e.has("value") &&
                    (this.mdcRoot.dataset.value = this.value + '=​"');
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value: () => [
                o.W,
                s.W,
                l.iv`:host([autogrow]) .mdc-text-field{position:relative;min-height:74px;min-width:178px;max-height:200px}:host([autogrow]) .mdc-text-field:after{content:attr(data-value);margin-top:23px;margin-bottom:9px;line-height:1.5rem;min-height:42px;padding:0px 32px 0 16px;letter-spacing:var(
          --mdc-typography-subtitle1-letter-spacing,
          .009375em
        );visibility:hidden;white-space:pre-wrap}:host([autogrow]) .mdc-text-field__input{position:absolute;height:calc(100% - 32px)}:host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after{margin-top:16px;margin-bottom:16px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start) top}@media only screen and (min-width:459px){:host([mobile-multiline]) .mdc-text-field__input{white-space:nowrap;max-height:16px}}`,
              ],
            },
          ],
        };
      },
      n.O,
    );
  },
  83166: function (e, t, i) {
    var a = i(44249),
      d = i(72621),
      n = i(1105),
      o = i(33990),
      s = i(57243),
      l = i(15093),
      r = i(5111);
    (0, a.Z)(
      [(0, l.Mo)("ha-textfield")],
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
              decorators: [(0, l.Cb)({ type: Boolean })],
              key: "invalid",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)({ attribute: "error-message" })],
              key: "errorMessage",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)({ type: Boolean })],
              key: "icon",
              value: () => !1,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)({ type: Boolean })],
              key: "iconTrailing",
              value: () => !1,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)()],
              key: "autocomplete",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)()],
              key: "autocorrect",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, l.Cb)({ attribute: "input-spellcheck" })],
              key: "inputSpellcheck",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [(0, l.IO)("input")],
              key: "formElement",
              value: void 0,
            },
            {
              kind: "method",
              key: "updated",
              value: function (e) {
                (0, d.Z)(i, "updated", this, 3)([e]),
                  (e.has("invalid") || e.has("errorMessage")) &&
                    (this.setCustomValidity(
                      this.invalid
                        ? this.errorMessage ||
                            this.validationMessage ||
                            "Invalid"
                        : "",
                    ),
                    (this.invalid ||
                      this.validateOnInitialRender ||
                      (e.has("invalid") && void 0 !== e.get("invalid"))) &&
                      this.reportValidity()),
                  e.has("autocomplete") &&
                    (this.autocomplete
                      ? this.formElement.setAttribute(
                          "autocomplete",
                          this.autocomplete,
                        )
                      : this.formElement.removeAttribute("autocomplete")),
                  e.has("autocorrect") &&
                    (this.autocorrect
                      ? this.formElement.setAttribute(
                          "autocorrect",
                          this.autocorrect,
                        )
                      : this.formElement.removeAttribute("autocorrect")),
                  e.has("inputSpellcheck") &&
                    (this.inputSpellcheck
                      ? this.formElement.setAttribute(
                          "spellcheck",
                          this.inputSpellcheck,
                        )
                      : this.formElement.removeAttribute("spellcheck"));
              },
            },
            {
              kind: "method",
              key: "renderIcon",
              value: function (e, t = !1) {
                const i = t ? "trailing" : "leading";
                return s.dy`
      <span class="mdc-text-field__icon mdc-text-field__icon--${i}" tabindex=${
        t ? 1 : -1
      }>
        <slot name="${i}Icon"></slot>
      </span>
    `;
              },
            },
            {
              kind: "field",
              static: !0,
              key: "styles",
              value: () => [
                o.W,
                s.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon,.mdc-text-field__affix--suffix{padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-inline-start:var(--text-field-suffix-padding-left,12px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}input[type=color]{height:20px}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}#helper-text ha-markdown{display:inline-block}`,
                "rtl" === r.E.document.dir
                  ? s.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`
                  : s.iv``,
              ],
            },
          ],
        };
      },
      n.P,
    );
  },
  54712: function (e, t, i) {
    i.a(e, async function (e, a) {
      try {
        i.r(t);
        var d = i(44249),
          n = (i(31622), i(35895)),
          o = i(57243),
          s = i(15093),
          l = i(27486),
          r = i(11104),
          c = i(36522),
          h = i(75278),
          u = (i(99426), i(83456), i(36185)),
          m = i(73729),
          p = (i(40917), i(83166), i(49653), i(95276)),
          f = i(76131),
          _ = i(28008),
          v = e([u, r, n]);
        [u, r, n] = v.then ? (await v)() : v;
        (0, d.Z)(
          [(0, s.Mo)("dialog-todo-item-editor")],
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
                  decorators: [(0, s.Cb)({ attribute: !1 })],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_error",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_params",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_summary",
                  value: () => "",
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_description",
                  value: () => "",
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_due",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_checked",
                  value: () => !1,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_hasTime",
                  value: () => !1,
                },
                {
                  kind: "field",
                  decorators: [(0, s.SB)()],
                  key: "_submitting",
                  value: () => !1,
                },
                { kind: "field", key: "_timeZone", value: void 0 },
                {
                  kind: "method",
                  key: "showDialog",
                  value: function (e) {
                    if (
                      ((this._error = void 0),
                      (this._params = e),
                      (this._timeZone = (0, r.f)(
                        this.hass.locale.time_zone,
                        this.hass.config.time_zone,
                      )),
                      e.item)
                    ) {
                      const t = e.item;
                      (this._checked = t.status === p.wL.Completed),
                        (this._summary = t.summary),
                        (this._description = t.description || ""),
                        (this._hasTime = t.due?.includes("T") || !1),
                        (this._due = t.due
                          ? new Date(
                              this._hasTime ? t.due : `${t.due}T00:00:00`,
                            )
                          : void 0);
                    } else
                      (this._hasTime = !1),
                        (this._checked = !1),
                        (this._due = void 0);
                  },
                },
                {
                  kind: "method",
                  key: "closeDialog",
                  value: function () {
                    this._params &&
                      ((this._error = void 0),
                      (this._params = void 0),
                      (this._due = void 0),
                      (this._summary = ""),
                      (this._description = ""),
                      (this._hasTime = !1),
                      (0, c.B)(this, "dialog-closed", {
                        dialog: this.localName,
                      }));
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    if (!this._params) return o.Ld;
                    const e = void 0 === this._params.item,
                      { dueDate: t, dueTime: i } = this._getLocaleStrings(
                        this._due,
                      ),
                      a = this._todoListSupportsFeature(p.$g.UPDATE_TODO_ITEM);
                    return o.dy`
      <ha-dialog open @closed=${
        this.closeDialog
      } scrimClickAction .heading=${(0, m.i)(
        this.hass,
        this.hass.localize("ui.components.todo.item." + (e ? "add" : "edit")),
      )}>
        <div class="content">
          ${
            this._error
              ? o.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`
              : ""
          }

          <div class="flex">
            <ha-checkbox .checked=${this._checked} @change=${
              this._checkedCanged
            } .disabled=${e || !a}></ha-checkbox>
            <ha-textfield class="summary" name="summary" .label=${this.hass.localize(
              "ui.components.todo.item.summary",
            )} .value=${this._summary} required @input=${
              this._handleSummaryChanged
            } .validationMessage=${this.hass.localize(
              "ui.common.error_required",
            )} dialogInitialFocus .disabled=${!a}></ha-textfield>
          </div>
          ${
            this._todoListSupportsFeature(p.$g.SET_DESCRIPTION_ON_ITEM)
              ? o.dy`<ha-textarea class="description" name="description" .label=${this.hass.localize(
                  "ui.components.todo.item.description",
                )} .value=${this._description} @input=${
                  this._handleDescriptionChanged
                } autogrow .disabled=${!a}></ha-textarea>`
              : o.Ld
          }
          ${
            this._todoListSupportsFeature(p.$g.SET_DUE_DATE_ON_ITEM) ||
            this._todoListSupportsFeature(p.$g.SET_DUE_DATETIME_ON_ITEM)
              ? o.dy`<div>
                <span class="label">${this.hass.localize(
                  "ui.components.todo.item.due",
                )}:</span>
                <div class="flex">
                  <ha-date-input .value=${t} .locale=${
                    this.hass.locale
                  } .disabled=${!a} @value-changed=${
                    this._dueDateChanged
                  } can-clear></ha-date-input>
                  ${
                    this._todoListSupportsFeature(p.$g.SET_DUE_DATETIME_ON_ITEM)
                      ? o.dy`<ha-time-input .value=${i} .locale=${
                          this.hass.locale
                        } .disabled=${!a} @value-changed=${
                          this._dueTimeChanged
                        }></ha-time-input>`
                      : o.Ld
                  }
                </div>
              </div>`
              : o.Ld
          }
        </div>
        ${
          e
            ? o.dy`
              <mwc-button slot="primaryAction" @click=${
                this._createItem
              } .disabled=${this._submitting}>
                ${this.hass.localize("ui.components.todo.item.add")}
              </mwc-button>
            `
            : o.dy`
              <mwc-button slot="primaryAction" @click=${
                this._saveItem
              } .disabled=${!a || this._submitting}>
                ${this.hass.localize("ui.components.todo.item.save")}
              </mwc-button>
              ${
                this._todoListSupportsFeature(p.$g.DELETE_TODO_ITEM)
                  ? o.dy`
                    <mwc-button slot="secondaryAction" class="warning" @click=${
                      this._deleteItem
                    } .disabled=${this._submitting}>
                      ${this.hass.localize("ui.components.todo.item.delete")}
                    </mwc-button>
                  `
                  : ""
              }
            `
        }
      </ha-dialog>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_todoListSupportsFeature",
                  value: function (e) {
                    if (!this._params?.entity) return !1;
                    const t = this.hass.states[this._params?.entity];
                    return t && (0, h.e)(t, e);
                  },
                },
                {
                  kind: "field",
                  key: "_getLocaleStrings",
                  value() {
                    return (0, l.Z)((e) => ({
                      dueDate: e ? this._formatDate(e) : void 0,
                      dueTime: e ? this._formatTime(e) : void 0,
                    }));
                  },
                },
                {
                  kind: "method",
                  key: "_formatDate",
                  value: function (e, t = this._timeZone) {
                    return (0, n.CV)(e, t, "yyyy-MM-dd");
                  },
                },
                {
                  kind: "method",
                  key: "_formatTime",
                  value: function (e, t = this._timeZone) {
                    return this._hasTime ? (0, n.CV)(e, t, "HH:mm:ss") : void 0;
                  },
                },
                {
                  kind: "method",
                  key: "_parseDate",
                  value: function (e) {
                    return (0, n.ZU)(e, { timeZone: this._timeZone });
                  },
                },
                {
                  kind: "method",
                  key: "_checkedCanged",
                  value: function (e) {
                    this._checked = e.target.checked;
                  },
                },
                {
                  kind: "method",
                  key: "_handleSummaryChanged",
                  value: function (e) {
                    this._summary = e.target.value;
                  },
                },
                {
                  kind: "method",
                  key: "_handleDescriptionChanged",
                  value: function (e) {
                    this._description = e.target.value;
                  },
                },
                {
                  kind: "method",
                  key: "_dueDateChanged",
                  value: function (e) {
                    if (!e.detail.value) return void (this._due = void 0);
                    const t = this._due ? this._formatTime(this._due) : void 0;
                    this._due = this._parseDate(
                      `${e.detail.value}${t ? `T${t}` : ""}`,
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_dueTimeChanged",
                  value: function (e) {
                    (this._hasTime = !0),
                      (this._due = this._parseDate(
                        `${this._formatDate(this._due || new Date())}T${
                          e.detail.value
                        }`,
                      ));
                  },
                },
                {
                  kind: "method",
                  key: "_createItem",
                  value: async function () {
                    if (this._summary) {
                      this._submitting = !0;
                      try {
                        await (0, p.fC)(this.hass, this._params.entity, {
                          summary: this._summary,
                          description: this._description,
                          due: this._due
                            ? this._hasTime
                              ? this._due.toISOString()
                              : this._formatDate(this._due)
                            : void 0,
                        });
                      } catch (e) {
                        return void (this._error = e
                          ? e.message
                          : "Unknown error");
                      } finally {
                        this._submitting = !1;
                      }
                      this.closeDialog();
                    } else
                      this._error = this.hass.localize(
                        "ui.components.todo.item.not_all_required_fields",
                      );
                  },
                },
                {
                  kind: "method",
                  key: "_saveItem",
                  value: async function () {
                    if (!this._summary)
                      return void (this._error = this.hass.localize(
                        "ui.components.todo.item.not_all_required_fields",
                      ));
                    this._submitting = !0;
                    const e = this._params.item;
                    try {
                      await (0, p.$G)(this.hass, this._params.entity, {
                        ...e,
                        summary: this._summary,
                        description:
                          this._description ||
                          (this._todoListSupportsFeature(
                            p.$g.SET_DESCRIPTION_ON_ITEM,
                          )
                            ? null
                            : void 0),
                        due: this._due
                          ? this._hasTime
                            ? this._due.toISOString()
                            : this._formatDate(this._due)
                          : this._todoListSupportsFeature(
                              p.$g.SET_DUE_DATETIME_ON_ITEM,
                            ) ||
                            this._todoListSupportsFeature(
                              p.$g.SET_DUE_DATE_ON_ITEM,
                            )
                          ? null
                          : void 0,
                        status: this._checked
                          ? p.wL.Completed
                          : p.wL.NeedsAction,
                      });
                    } catch (e) {
                      return void (this._error = e
                        ? e.message
                        : "Unknown error");
                    } finally {
                      this._submitting = !1;
                    }
                    this.closeDialog();
                  },
                },
                {
                  kind: "method",
                  key: "_deleteItem",
                  value: async function () {
                    this._submitting = !0;
                    const e = this._params.item;
                    if (
                      await (0, f.showConfirmationDialog)(this, {
                        title: this.hass.localize(
                          "ui.components.todo.item.confirm_delete.delete",
                        ),
                        text: this.hass.localize(
                          "ui.components.todo.item.confirm_delete.prompt",
                        ),
                        destructive: !0,
                        confirmText: this.hass.localize("ui.common.delete"),
                        dismissText: this.hass.localize("ui.common.cancel"),
                      })
                    ) {
                      try {
                        await (0, p.CV)(this.hass, this._params.entity, [
                          e.uid,
                        ]);
                      } catch (e) {
                        return void (this._error = e
                          ? e.message
                          : "Unknown error");
                      } finally {
                        this._submitting = !1;
                      }
                      this.closeDialog();
                    } else this._submitting = !1;
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return [
                      _.yu,
                      o.iv`ha-alert,ha-textarea{margin-bottom:16px}.key,.value,ha-svg-icon{vertical-align:top}@media all and (min-width:450px) and (min-height:500px){ha-dialog{--mdc-dialog-min-width:min(600px, 95vw);--mdc-dialog-max-width:min(600px, 95vw)}}ha-alert{display:block}ha-textarea,ha-textfield{display:block;width:100%}ha-checkbox{margin-top:4px}ha-date-input{flex-grow:1}ha-time-input{margin-left:16px;margin-inline-start:16px;margin-inline-end:initial}.flex{display:flex;justify-content:space-between}.date-range-details-content,.key,.value{display:inline-block}.label{font-size:12px;font-weight:500;color:var(--input-label-ink-color)}ha-svg-icon{width:40px;margin-right:8px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction)}`,
                    ];
                  },
                },
              ],
            };
          },
          o.oi,
        );
        a();
      } catch (e) {
        a(e);
      }
    });
  },
};
//# sourceMappingURL=68069.fe2783ffa9e2a09c.js.map
