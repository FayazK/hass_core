"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["9281"],
  {
    23437: function (i, e, a) {
      a.r(e), a.d(e, { HuiDialogEditSection: () => x });
      var t = a(61701),
        o =
          (a(71695),
          a(19423),
          a(40251),
          a(19134),
          a(97003),
          a(47021),
          a(57243)),
        n = a(50778),
        s = a(35359),
        l = a(36522),
        d = a(49976),
        c =
          (a(59826),
          a(34273),
          a(73729),
          a(95198),
          a(23334),
          a(7285),
          a(64889),
          a(28008)),
        h = a(2593),
        r = a(27486);
      a(29073);
      let u,
        v = (i) => i;
      (0, t.Z)(
        [(0, n.Mo)("hui-section-settings-editor")],
        function (i, e) {
          return {
            F: class extends e {
              constructor(...e) {
                super(...e), i(this);
              }
            },
            d: [
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "config",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "viewConfig",
                value: void 0,
              },
              {
                kind: "field",
                key: "_schema",
                value() {
                  return (0, r.Z)((i) => [
                    {
                      name: "column_span",
                      selector: {
                        number: { min: 1, max: i, slider_ticks: !0 },
                      },
                    },
                  ]);
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  const i = { column_span: this.config.column_span || 1 },
                    e = this._schema(this.viewConfig.max_columns || 4);
                  return (0, o.dy)(
                    u ||
                      (u = v`
      <ha-form .hass=${0} .data=${0} .schema=${0} .computeLabel=${0} .computeHelper=${0} @value-changed=${0}></ha-form>
    `),
                    this.hass,
                    i,
                    e,
                    this._computeLabel,
                    this._computeHelper,
                    this._valueChanged,
                  );
                },
              },
              {
                kind: "field",
                key: "_computeLabel",
                value() {
                  return (i) =>
                    this.hass.localize(
                      `ui.panel.lovelace.editor.edit_section.settings.${i.name}`,
                    );
                },
              },
              {
                kind: "field",
                key: "_computeHelper",
                value() {
                  return (i) =>
                    this.hass.localize(
                      `ui.panel.lovelace.editor.edit_section.settings.${i.name}_helper`,
                    ) || "";
                },
              },
              {
                kind: "method",
                key: "_valueChanged",
                value: function (i) {
                  i.stopPropagation();
                  const e = i.detail.value,
                    a = Object.assign(
                      Object.assign({}, this.config),
                      {},
                      { column_span: e.column_span },
                    );
                  (0, l.B)(this, "value-changed", { value: a });
                },
              },
            ],
          };
        },
        o.oi,
      );
      a(99426), a(32145);
      let g,
        m = (i) => i;
      (0, t.Z)(
        [(0, n.Mo)("hui-section-visibility-editor")],
        function (i, e) {
          return {
            F: class extends e {
              constructor(...e) {
                super(...e), i(this);
              }
            },
            d: [
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "config",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var i;
                  const e =
                    null !== (i = this.config.visibility) && void 0 !== i
                      ? i
                      : [];
                  return (0, o.dy)(
                    g ||
                      (g = m`
      <ha-alert alert-type="info">
        ${0}
      </ha-alert>
      <ha-card-conditions-editor .hass=${0} .conditions=${0} @value-changed=${0}>
      </ha-card-conditions-editor>
    `),
                    this.hass.localize(
                      "ui.panel.lovelace.editor.edit_section.visibility.explanation",
                    ),
                    this.hass,
                    e,
                    this._valueChanged,
                  );
                },
              },
              {
                kind: "method",
                key: "_valueChanged",
                value: function (i) {
                  var e;
                  i.stopPropagation();
                  const a = i.detail.value,
                    t = Object.assign(
                      Object.assign({}, this.config),
                      {},
                      { visibility: a },
                    );
                  0 ===
                    (null === (e = t.visibility) || void 0 === e
                      ? void 0
                      : e.length) && delete t.visibility,
                    (0, l.B)(this, "value-changed", { value: t });
                },
              },
            ],
          };
        },
        o.oi,
      );
      a(56820), a(99619);
      let _,
        f,
        p,
        y,
        k,
        b,
        $,
        C = (i) => i;
      const w = ["tab-settings", "tab-visibility"];
      let x = (0, t.Z)(
        [(0, n.Mo)("hui-dialog-edit-section")],
        function (i, e) {
          return {
            F: class extends e {
              constructor(...e) {
                super(...e), i(this);
              }
            },
            d: [
              {
                kind: "field",
                decorators: [(0, n.Cb)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.SB)()],
                key: "_params",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.SB)()],
                key: "_config",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.SB)()],
                key: "_viewConfig",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [(0, n.SB)()],
                key: "_yamlMode",
                value() {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [(0, n.SB)()],
                key: "_currTab",
                value() {
                  return w[0];
                },
              },
              {
                kind: "field",
                decorators: [(0, n.IO)("ha-yaml-editor")],
                key: "_editor",
                value: void 0,
              },
              {
                kind: "method",
                key: "updated",
                value: function (i) {
                  if (this._yamlMode && i.has("_yamlMode")) {
                    var e;
                    const i = Object.assign({}, this._config);
                    null === (e = this._editor) ||
                      void 0 === e ||
                      e.setValue(i);
                  }
                },
              },
              {
                kind: "method",
                key: "showDialog",
                value: async function (i) {
                  (this._params = i),
                    (this._config = (0, h.an)(this._params.lovelaceConfig, [
                      this._params.viewIndex,
                      this._params.sectionIndex,
                    ])),
                    (this._viewConfig = (0, h.an)(this._params.lovelaceConfig, [
                      this._params.viewIndex,
                    ]));
                },
              },
              {
                kind: "method",
                key: "closeDialog",
                value: function () {
                  return (
                    (this._params = void 0),
                    (this._yamlMode = !1),
                    (this._config = void 0),
                    (this._currTab = w[0]),
                    (0, l.B)(this, "dialog-closed", { dialog: this.localName }),
                    !0
                  );
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  if (!this._params || !this._config) return o.Ld;
                  const i = this.hass.localize(
                    "ui.panel.lovelace.editor.edit_section.header",
                  );
                  let e = o.Ld;
                  if (this._yamlMode)
                    e = (0, o.dy)(
                      _ ||
                        (_ = C`
        <ha-yaml-editor .hass=${0} dialogInitialFocus @value-changed=${0}></ha-yaml-editor>
      `),
                      this.hass,
                      this._viewYamlChanged,
                    );
                  else
                    switch (this._currTab) {
                      case "tab-settings":
                        e = (0, o.dy)(
                          f ||
                            (f = C`
            <hui-section-settings-editor .hass=${0} .config=${0} .viewConfig=${0} @value-changed=${0}>
            </hui-section-settings-editor>
          `),
                          this.hass,
                          this._config,
                          this._viewConfig,
                          this._configChanged,
                        );
                        break;
                      case "tab-visibility":
                        e = (0, o.dy)(
                          p ||
                            (p = C`
            <hui-section-visibility-editor .hass=${0} .config=${0} @value-changed=${0}>
            </hui-section-visibility-editor>
          `),
                          this.hass,
                          this._config,
                          this._configChanged,
                        );
                    }
                  return (0, o.dy)(
                    y ||
                      (y = C`
      <ha-dialog open scrimClickAction @keydown=${0} @closed=${0} .heading=${0} class=${0}>
        <ha-dialog-header show-border slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${0} .path=${0}></ha-icon-button>
          <span slot="title">${0}</span>
          <ha-button-menu slot="actionItems" fixed corner="BOTTOM_END" menu-corner="END" @closed=${0} @action=${0}>
            <ha-icon-button slot="trigger" .label=${0} .path=${0}></ha-icon-button>
            <ha-list-item graphic="icon">
              ${0}
              <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
            </ha-list-item>
          </ha-button-menu>
          ${0}
        </ha-dialog-header>
        ${0}
        <ha-button slot="secondaryAction" @click=${0}>
          ${0}
        </ha-button>

        <ha-button slot="primaryAction" @click=${0}>
          ${0}
        </ha-button>
      </ha-dialog>
    `),
                    this._ignoreKeydown,
                    this._cancel,
                    i,
                    (0, s.$)({ "yaml-mode": this._yamlMode }),
                    this.hass.localize("ui.common.close"),
                    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                    i,
                    d.U,
                    this._handleAction,
                    this.hass.localize("ui.common.menu"),
                    "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
                    this.hass.localize(
                      "ui.panel.lovelace.editor.edit_view.edit_" +
                        (this._yamlMode ? "ui" : "yaml"),
                    ),
                    "M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z",
                    this._yamlMode
                      ? o.Ld
                      : (0, o.dy)(
                          k ||
                            (k = C`
                <mwc-tab-bar .activeIndex=${0} @MDCTabBar:activated=${0}>
                  ${0}
                </mwc-tab-bar>
              `),
                          w.indexOf(this._currTab),
                          this._handleTabChanged,
                          w.map((i) =>
                            (0, o.dy)(
                              b ||
                                (b = C`
                      <mwc-tab .label=${0}>
                      </mwc-tab>
                    `),
                              this.hass.localize(
                                `ui.panel.lovelace.editor.edit_section.${i.replace(
                                  "-",
                                  "_",
                                )}`,
                              ),
                            ),
                          ),
                        ),
                    e,
                    this._cancel,
                    this.hass.localize("ui.common.cancel"),
                    this._save,
                    this.hass.localize("ui.common.save"),
                  );
                },
              },
              {
                kind: "method",
                key: "_configChanged",
                value: function (i) {
                  i.stopPropagation(), (this._config = i.detail.value);
                },
              },
              {
                kind: "method",
                key: "_handleTabChanged",
                value: function (i) {
                  const e = w[i.detail.index];
                  e !== this._currTab && (this._currTab = e);
                },
              },
              {
                kind: "method",
                key: "_handleAction",
                value: async function (i) {
                  if (
                    (i.stopPropagation(),
                    i.preventDefault(),
                    0 === i.detail.index)
                  )
                    this._yamlMode = !this._yamlMode;
                },
              },
              {
                kind: "method",
                key: "_viewYamlChanged",
                value: function (i) {
                  i.stopPropagation(),
                    i.detail.isValid && (this._config = i.detail.value);
                },
              },
              {
                kind: "method",
                key: "_ignoreKeydown",
                value: function (i) {
                  i.stopPropagation();
                },
              },
              {
                kind: "method",
                key: "_cancel",
                value: function (i) {
                  i && i.stopPropagation(), this.closeDialog();
                },
              },
              {
                kind: "method",
                key: "_save",
                value: async function () {
                  if (!this._params || !this._config) return;
                  const i = (0, h.Qr)(
                    this._params.lovelaceConfig,
                    [this._params.viewIndex, this._params.sectionIndex],
                    this._config,
                  );
                  this._params.saveConfig(i), this.closeDialog();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [
                    c.yu,
                    (0, o.iv)(
                      $ ||
                        ($ = C`ha-dialog{--vertical-align-dialog:flex-start;--dialog-surface-margin-top:40px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--dialog-surface-margin-top:0px}}ha-dialog.yaml-mode{--dialog-content-padding:0}mwc-tab-bar{color:var(--primary-text-color);text-transform:uppercase;padding:0 20px}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:600px}}`),
                    ),
                  ];
                },
              },
            ],
          };
        },
        o.oi,
      );
    },
  },
]);
//# sourceMappingURL=9281.5102ec86a03bb611.js.map
