"use strict";
(self.webpackChunkhome_assistant_frontend =
  self.webpackChunkhome_assistant_frontend || []).push([
  ["9979"],
  {
    86614: function (a, i, e) {
      e.a(a, async function (a, t) {
        try {
          e.r(i);
          var o = e(61701),
            s = (e(71695), e(19423), e(40251), e(47021), e(57243)),
            n = e(50778),
            l = e(36522),
            d = e(49976),
            h = (e(59826), e(34273), e(73729), e(95198), e(23334), e(28008)),
            c = e(58885),
            r = e(32930),
            g = e(16815),
            u = a([g]);
          g = (u.then ? (await u)() : u)[0];
          let m,
            p,
            v = (a) => a;
          const _ =
              "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z",
            f =
              "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
            y =
              "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
            k =
              "M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z";
          (0, o.Z)(
            [(0, n.Mo)("dialog-dashboard-strategy-editor")],
            function (a, i) {
              return {
                F: class extends i {
                  constructor(...i) {
                    super(...i), a(this);
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
                    key: "_strategyConfig",
                    value: void 0,
                  },
                  {
                    kind: "field",
                    decorators: [(0, n.SB)()],
                    key: "_GUImode",
                    value() {
                      return !0;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [(0, n.SB)()],
                    key: "_guiModeAvailable",
                    value() {
                      return !0;
                    },
                  },
                  {
                    kind: "field",
                    decorators: [
                      (0, n.IO)("hui-dashboard-strategy-element-editor"),
                    ],
                    key: "_strategyEditorEl",
                    value: void 0,
                  },
                  {
                    kind: "method",
                    key: "showDialog",
                    value: async function (a) {
                      (this._params = a),
                        (this._strategyConfig = a.config.strategy),
                        await this.updateComplete;
                    },
                  },
                  {
                    kind: "method",
                    key: "closeDialog",
                    value: function () {
                      (this._params = void 0),
                        (this._strategyConfig = void 0),
                        (this._guiModeAvailable = !0),
                        (this._GUImode = !0),
                        (0, l.B)(this, "dialog-closed", {
                          dialog: this.localName,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "_handleConfigChanged",
                    value: function (a) {
                      a.stopPropagation(),
                        (this._guiModeAvailable = a.detail.guiModeAvailable),
                        (this._strategyConfig = a.detail.config);
                    },
                  },
                  {
                    kind: "method",
                    key: "_handleGUIModeChanged",
                    value: function (a) {
                      a.stopPropagation(),
                        (this._GUImode = a.detail.guiMode),
                        (this._guiModeAvailable = a.detail.guiModeAvailable);
                    },
                  },
                  {
                    kind: "method",
                    key: "_opened",
                    value: function () {
                      var a;
                      null === (a = this._strategyEditorEl) ||
                        void 0 === a ||
                        a.focusYamlEditor();
                    },
                  },
                  {
                    kind: "method",
                    key: "_save",
                    value: async function () {
                      await this._params.saveConfig(
                        Object.assign(
                          Object.assign({}, this._params.config),
                          {},
                          { strategy: this._strategyConfig },
                        ),
                      ),
                        (0, c.f)(this, this.hass),
                        this.closeDialog();
                    },
                  },
                  {
                    kind: "method",
                    key: "_delete",
                    value: async function (a) {
                      a.stopPropagation(),
                        (await this._params.deleteDashboard()) &&
                          this.closeDialog();
                    },
                  },
                  {
                    kind: "method",
                    key: "_cancel",
                    value: function (a) {
                      a.stopPropagation(), this.closeDialog();
                    },
                  },
                  {
                    kind: "method",
                    key: "_handleAction",
                    value: function (a) {
                      switch ((a.stopPropagation(), a.detail.index)) {
                        case 0:
                          this._toggleMode();
                          break;
                        case 1:
                          this._takeControl();
                      }
                    },
                  },
                  {
                    kind: "method",
                    key: "_toggleMode",
                    value: function () {
                      var a;
                      null === (a = this._strategyEditorEl) ||
                        void 0 === a ||
                        a.toggleMode();
                    },
                  },
                  {
                    kind: "method",
                    key: "_takeControl",
                    value: function () {
                      this._params.takeControl(), this.closeDialog();
                    },
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function () {
                      if (!this._params || !this._strategyConfig) return s.Ld;
                      const a = (0, r.n2)(this._strategyConfig),
                        i = this.hass.localize(
                          "ui.panel.lovelace.editor.strategy-editor.header",
                        );
                      return (0, s.dy)(
                        m ||
                          (m = v`
      <ha-dialog open @closed=${0} scrimClickAction escapeKeyAction @opened=${0} .heading=${0}>
        <ha-dialog-header slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${0} .path=${0}></ha-icon-button>
          <span slot="title" .title=${0}>${0}</span>
          <ha-button-menu corner="BOTTOM_END" menu-corner="END" slot="actionItems" @closed=${0} fixed @action=${0}>
            <ha-icon-button slot="trigger" .label=${0} .path=${0}></ha-icon-button>
            <ha-list-item graphic="icon" .disabled=${0}>
              ${0}
              <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
            </ha-list-item>
            <ha-list-item graphic="icon">
              ${0}
              <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
            </ha-list-item>
          </ha-button-menu>
        </ha-dialog-header>
        <div class="content">
          <hui-dashboard-strategy-element-editor .hass=${0} .lovelace=${0} .value=${0} @config-changed=${0} @GUImode-changed=${0} dialogInitialFocus></hui-dashboard-strategy-element-editor>
        </div>

        <ha-button class="danger" @click=${0} slot="secondaryAction">
          ${0}
        </ha-button>
        <ha-button @click=${0} slot="primaryAction">
          ${0}
        </ha-button>
        <ha-button @click=${0} slot="primaryAction">
          ${0}
        </ha-button>
      </ha-dialog>
    `),
                        this.closeDialog,
                        this._opened,
                        i || "-",
                        this.hass.localize("ui.common.close"),
                        f,
                        i,
                        i,
                        d.U,
                        this._handleAction,
                        this.hass.localize("ui.common.menu"),
                        y,
                        !this._guiModeAvailable && !this._GUImode,
                        this.hass.localize(
                          "ui.panel.lovelace.editor.edit_view.edit_" +
                            (this._GUImode ? "yaml" : "ui"),
                        ),
                        k,
                        this.hass.localize(
                          "ui.panel.lovelace.editor.strategy-editor.take_control",
                        ),
                        _,
                        this.hass,
                        this._params.config,
                        a,
                        this._handleConfigChanged,
                        this._handleGUIModeChanged,
                        this._delete,
                        this.hass.localize("ui.common.delete"),
                        this._cancel,
                        this.hass.localize("ui.common.cancel"),
                        this._save,
                        this.hass.localize("ui.common.save"),
                      );
                    },
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function () {
                      return [
                        h.yu,
                        (0, s.iv)(
                          p ||
                            (p = v`ha-dialog{--dialog-content-padding:0 24px;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-min-width:min(600px, calc(100% - 32px));--mdc-dialog-max-width:calc(100% - 32px);--mdc-dialog-max-height:calc(100% - 80px)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{height:100%;--dialog-surface-top:0px;--mdc-dialog-min-width:100%;--mdc-dialog-max-width:100%;--mdc-dialog-max-height:100%;--dialog-content-padding:8px}}.danger{--mdc-theme-primary:var(--error-color)}`),
                        ),
                      ];
                    },
                  },
                ],
              };
            },
            s.oi,
          );
          t();
        } catch (m) {
          t(m);
        }
      });
    },
    58885: function (a, i, e) {
      e.d(i, { f: () => o });
      var t = e(72473);
      const o = (a, i) =>
        (0, t.C)(a, { message: i.localize("ui.common.successfully_saved") });
    },
  },
]);
//# sourceMappingURL=9979.e2882a8dcb8c537f.js.map
