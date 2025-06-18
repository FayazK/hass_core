"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["31535"],
  {
    35749: function (e, i, a) {
      a.r(i);
      var t = a(61701),
        o = a(72621),
        s = (a(71695), a(40251), a(47021), a(31622), a(76848)),
        l = a(57243),
        r = a(50778),
        d = a(35359),
        n = a(62900),
        c = a(48045),
        h = a(36522),
        m = (a(68325), a(23334), a(76131)),
        u = a(28008),
        v = a(72473),
        g = (a(73729), a(95198), a(48977));
      let _,
        p,
        f = (e) => e;
      const w = (0, n.dt)({
          title: (0, n.jt)((0, n.Z_)()),
          views: (0, n.IX)((0, n.Ry)()),
        }),
        y = (0, n.dt)({ strategy: (0, n.dt)({ type: (0, n.Z_)() }) });
      (0, t.Z)(
        [(0, r.Mo)("hui-dialog-raw-config-editor")],
        function (e, i) {
          class a extends i {
            constructor(...i) {
              super(...i), e(this);
            }
          }
          return {
            F: a,
            d: [
              {
                kind: "field",
                decorators: [(0, r.Cb)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, r.SB)()],
                key: "_params",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, r.SB)()],
                key: "_saving",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, r.SB)()],
                key: "_changed",
                value: void 0,
              },
              {
                kind: "method",
                key: "showDialog",
                value: function (e) {
                  (this._params = e),
                    (this._changed = !1),
                    (this._saving = !1),
                    setTimeout(() => {
                      const i = this.yamlEditor;
                      i &&
                        ((i.value = (0, s.dump)(e.lovelace.rawConfig)),
                        i.codemirror && i.codemirror.focus());
                    }, 0);
                },
              },
              {
                kind: "method",
                key: "closeDialog",
                value: function () {
                  return (
                    (this._params = void 0),
                    (0, h.B)(this, "dialog-closed", { dialog: this.localName }),
                    !0
                  );
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return this._params
                    ? (0, l.dy)(
                        _ ||
                          (_ = f`
      <ha-dialog open @closed=${0} scrimClickAction escapeKeyAction="close" @keydown=${0} .heading=${0}>
        <ha-dialog-header slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${0} .path=${0}></ha-icon-button>
          <span slot="title">${0}</span>
          <div slot="actionItems" class="save-indicator ${0}">
            ${0}
          </div>
        </ha-dialog-header>

        <div class="content">
          <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass=${0} @value-changed=${0} @editor-save=${0} dir="ltr">
          </ha-code-editor>
        </div>

        <mwc-button slot="secondaryAction" dialogAction="cancel" .label=${0}></mwc-button>
        <mwc-button slot="primaryAction" @click=${0} .disabled=${0} class="primary-action">
          ${0}
        </mwc-button>
      </ha-dialog>
    `),
                        this._closeDialog,
                        this._handleKeyDown,
                        this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.header",
                        ),
                        this.hass.localize("ui.common.close"),
                        "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                        this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.header",
                        ),
                        (0, d.$)({
                          saved: !1 === this._saving || !0 === this._changed,
                        }),
                        this._changed
                          ? this.hass.localize(
                              "ui.panel.lovelace.editor.raw_editor.unsaved_changes",
                            )
                          : this.hass.localize(
                              "ui.panel.lovelace.editor.raw_editor.saved",
                            ),
                        this.hass,
                        this._yamlChanged,
                        this._handleSave,
                        this.hass.localize("ui.common.cancel"),
                        this._handleSave,
                        !this._changed,
                        this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.save",
                        ),
                      )
                    : l.Ld;
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  if (
                    ((0, o.Z)(a, "updated", this, 3)([e]),
                    e.has("_params") && this._params)
                  ) {
                    const i = this.yamlEditor;
                    if (i) {
                      const e = this._params.lovelace;
                      e && (i.value = (0, s.dump)(e.rawConfig));
                    }
                    this._saving ||
                      void 0 !== e.get("_params") ||
                      (this._changed = !1);
                  }
                  if (!this._params || !this._params.lovelace) return;
                  const i = e.get("_params"),
                    t = null == i ? void 0 : i.lovelace,
                    l = this._params.lovelace;
                  !this._saving &&
                    t &&
                    l &&
                    t.rawConfig !== l.rawConfig &&
                    !(0, c.v)(t.rawConfig, l.rawConfig) &&
                    (0, v.C)(this, {
                      message: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.lovelace_changed",
                      ),
                      action: {
                        action: () => {
                          this.yamlEditor.value = (0, s.dump)(l.rawConfig);
                        },
                        text: this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.reload",
                        ),
                      },
                      duration: -1,
                      dismissable: !1,
                    });
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [
                    u.yu,
                    (0, l.iv)(
                      p ||
                        (p = f`ha-dialog{--mdc-dialog-max-width:90vw;--mdc-dialog-min-width:80vw;--mdc-dialog-max-height:90vh;--dialog-content-padding:0}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-width:100vw;--mdc-dialog-min-width:100vw;--mdc-dialog-max-height:100vh}}.content{width:100%;height:calc(80vh - 129px);display:flex}ha-code-editor{width:100%;--code-mirror-height:100%}.save-indicator{opacity:0;font-size:14px;padding:0px 10px}.saved{opacity:1}.primary-action{--mdc-theme-primary:var(--primary-color)}`),
                    ),
                  ];
                },
              },
              {
                kind: "method",
                key: "_closeDialog",
                value: function () {
                  (this._changed &&
                    !confirm(
                      this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes",
                      ),
                    )) ||
                    this.closeDialog();
                },
              },
              {
                kind: "method",
                key: "_yamlChanged",
                value: function () {
                  if (!this._params || !this.yamlEditor) return;
                  const e = this.yamlEditor.value,
                    i = (0, s.dump)(this._params.lovelace.rawConfig);
                  this._changed = e !== i;
                },
              },
              {
                kind: "method",
                key: "_removeConfig",
                value: async function () {
                  try {
                    await this._params.lovelace.deleteConfig();
                  } catch (e) {
                    (0, m.showAlertDialog)(this, {
                      text: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.error_remove",
                        { error: e },
                      ),
                    });
                  }
                  this.closeDialog();
                },
              },
              {
                kind: "method",
                key: "_handleSave",
                value: async function () {
                  this._saving = !0;
                  const e = this.yamlEditor.value;
                  if (!e)
                    return void (0, m.showConfirmationDialog)(this, {
                      title: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.confirm_delete_config_title",
                      ),
                      text: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.confirm_delete_config_text",
                      ),
                      confirmText: this.hass.localize("ui.common.delete"),
                      dismissText: this.hass.localize("ui.common.cancel"),
                      confirm: () => this._removeConfig(),
                      destructive: !0,
                    });
                  if (
                    this.yamlEditor.hasComments &&
                    !confirm(
                      this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments",
                      ),
                    )
                  )
                    return;
                  let i;
                  try {
                    i = (0, s.load)(e);
                  } catch (a) {
                    return (
                      (0, m.showAlertDialog)(this, {
                        text: this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.error_parse_yaml",
                          { error: a },
                        ),
                      }),
                      void (this._saving = !1)
                    );
                  }
                  try {
                    (0, g.Tx)(i) ? (0, n.hu)(i, y) : (0, n.hu)(i, w);
                  } catch (a) {
                    return (
                      (0, m.showAlertDialog)(this, {
                        text: this.hass.localize(
                          "ui.panel.lovelace.editor.raw_editor.error_invalid_config",
                          { error: a },
                        ),
                      }),
                      void (this._saving = !1)
                    );
                  }
                  i.resources &&
                    (0, m.showAlertDialog)(this, {
                      text: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.resources_moved",
                      ),
                    });
                  try {
                    await this._params.lovelace.saveConfig(i);
                  } catch (a) {
                    (0, m.showAlertDialog)(this, {
                      text: this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.error_save_yaml",
                        { error: a },
                      ),
                    });
                  }
                  (this._changed = !1), (this._saving = !1), this.closeDialog();
                },
              },
              {
                kind: "method",
                key: "_handleKeyDown",
                value: function (e) {
                  "Escape" === e.key && this._closeDialog();
                },
              },
              {
                kind: "get",
                key: "yamlEditor",
                value: function () {
                  return this.shadowRoot.querySelector("ha-code-editor");
                },
              },
            ],
          };
        },
        l.oi,
      );
    },
  },
]);
//# sourceMappingURL=31535.ceb146cbdddaf8fa.js.map
