export const __webpack_ids__=["9281"];export const __webpack_modules__={23437:function(i,e,a){a.r(e),a.d(e,{HuiDialogEditSection:()=>m});var t=a(44249),o=a(57243),n=a(15093),s=a(35359),l=a(36522),d=a(49976),c=(a(59826),a(34273),a(73729),a(95198),a(23334),a(7285),a(64889),a(28008)),h=a(2593),r=a(27486);a(29073);(0,t.Z)([(0,n.Mo)("hui-section-settings-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"viewConfig",value:void 0},{kind:"field",key:"_schema",value:()=>(0,r.Z)((i=>[{name:"column_span",selector:{number:{min:1,max:i,slider_ticks:!0}}}]))},{kind:"method",key:"render",value:function(){const i={column_span:this.config.column_span||1},e=this._schema(this.viewConfig.max_columns||4);return o.dy`
      <ha-form .hass=${this.hass} .data=${i} .schema=${e} .computeLabel=${this._computeLabel} .computeHelper=${this._computeHelper} @value-changed=${this._valueChanged}></ha-form>
    `}},{kind:"field",key:"_computeLabel",value(){return i=>this.hass.localize(`ui.panel.lovelace.editor.edit_section.settings.${i.name}`)}},{kind:"field",key:"_computeHelper",value(){return i=>this.hass.localize(`ui.panel.lovelace.editor.edit_section.settings.${i.name}_helper`)||""}},{kind:"method",key:"_valueChanged",value:function(i){i.stopPropagation();const e=i.detail.value,a={...this.config,column_span:e.column_span};(0,l.B)(this,"value-changed",{value:a})}}]}}),o.oi);a(99426),a(32145);(0,t.Z)([(0,n.Mo)("hui-section-visibility-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"method",key:"render",value:function(){const i=this.config.visibility??[];return o.dy`
      <ha-alert alert-type="info">
        ${this.hass.localize("ui.panel.lovelace.editor.edit_section.visibility.explanation")}
      </ha-alert>
      <ha-card-conditions-editor .hass=${this.hass} .conditions=${i} @value-changed=${this._valueChanged}>
      </ha-card-conditions-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(i){i.stopPropagation();const e=i.detail.value,a={...this.config,visibility:e};0===a.visibility?.length&&delete a.visibility,(0,l.B)(this,"value-changed",{value:a})}}]}}),o.oi);a(56820),a(99619);const u=["tab-settings","tab-visibility"];let m=(0,t.Z)([(0,n.Mo)("hui-dialog-edit-section")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_viewConfig",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_yamlMode",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_currTab",value:()=>u[0]},{kind:"field",decorators:[(0,n.IO)("ha-yaml-editor")],key:"_editor",value:void 0},{kind:"method",key:"updated",value:function(i){if(this._yamlMode&&i.has("_yamlMode")){const i={...this._config};this._editor?.setValue(i)}}},{kind:"method",key:"showDialog",value:async function(i){this._params=i,this._config=(0,h.an)(this._params.lovelaceConfig,[this._params.viewIndex,this._params.sectionIndex]),this._viewConfig=(0,h.an)(this._params.lovelaceConfig,[this._params.viewIndex])}},{kind:"method",key:"closeDialog",value:function(){return this._params=void 0,this._yamlMode=!1,this._config=void 0,this._currTab=u[0],(0,l.B)(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){if(!this._params||!this._config)return o.Ld;const i=this.hass.localize("ui.panel.lovelace.editor.edit_section.header");let e=o.Ld;if(this._yamlMode)e=o.dy`
        <ha-yaml-editor .hass=${this.hass} dialogInitialFocus @value-changed=${this._viewYamlChanged}></ha-yaml-editor>
      `;else switch(this._currTab){case"tab-settings":e=o.dy`
            <hui-section-settings-editor .hass=${this.hass} .config=${this._config} .viewConfig=${this._viewConfig} @value-changed=${this._configChanged}>
            </hui-section-settings-editor>
          `;break;case"tab-visibility":e=o.dy`
            <hui-section-visibility-editor .hass=${this.hass} .config=${this._config} @value-changed=${this._configChanged}>
            </hui-section-visibility-editor>
          `}return o.dy`
      <ha-dialog open scrimClickAction @keydown=${this._ignoreKeydown} @closed=${this._cancel} .heading=${i} class=${(0,s.$)({"yaml-mode":this._yamlMode})}>
        <ha-dialog-header show-border slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${this.hass.localize("ui.common.close")} .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-icon-button>
          <span slot="title">${i}</span>
          <ha-button-menu slot="actionItems" fixed corner="BOTTOM_END" menu-corner="END" @closed=${d.U} @action=${this._handleAction}>
            <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></ha-icon-button>
            <ha-list-item graphic="icon">
              ${this.hass.localize("ui.panel.lovelace.editor.edit_view.edit_"+(this._yamlMode?"ui":"yaml"))}
              <ha-svg-icon slot="graphic" .path=${"M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z"}></ha-svg-icon>
            </ha-list-item>
          </ha-button-menu>
          ${this._yamlMode?o.Ld:o.dy`
                <mwc-tab-bar .activeIndex=${u.indexOf(this._currTab)} @MDCTabBar:activated=${this._handleTabChanged}>
                  ${u.map((i=>o.dy`
                      <mwc-tab .label=${this.hass.localize(`ui.panel.lovelace.editor.edit_section.${i.replace("-","_")}`)}>
                      </mwc-tab>
                    `))}
                </mwc-tab-bar>
              `}
        </ha-dialog-header>
        ${e}
        <ha-button slot="secondaryAction" @click=${this._cancel}>
          ${this.hass.localize("ui.common.cancel")}
        </ha-button>

        <ha-button slot="primaryAction" @click=${this._save}>
          ${this.hass.localize("ui.common.save")}
        </ha-button>
      </ha-dialog>
    `}},{kind:"method",key:"_configChanged",value:function(i){i.stopPropagation(),this._config=i.detail.value}},{kind:"method",key:"_handleTabChanged",value:function(i){const e=u[i.detail.index];e!==this._currTab&&(this._currTab=e)}},{kind:"method",key:"_handleAction",value:async function(i){if(i.stopPropagation(),i.preventDefault(),0===i.detail.index)this._yamlMode=!this._yamlMode}},{kind:"method",key:"_viewYamlChanged",value:function(i){i.stopPropagation(),i.detail.isValid&&(this._config=i.detail.value)}},{kind:"method",key:"_ignoreKeydown",value:function(i){i.stopPropagation()}},{kind:"method",key:"_cancel",value:function(i){i&&i.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_save",value:async function(){if(!this._params||!this._config)return;const i=(0,h.Qr)(this._params.lovelaceConfig,[this._params.viewIndex,this._params.sectionIndex],this._config);this._params.saveConfig(i),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[c.yu,o.iv`ha-dialog{--vertical-align-dialog:flex-start;--dialog-surface-margin-top:40px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--dialog-surface-margin-top:0px}}ha-dialog.yaml-mode{--dialog-content-padding:0}mwc-tab-bar{color:var(--primary-text-color);text-transform:uppercase;padding:0 20px}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:600px}}`]}}]}}),o.oi)}};
//# sourceMappingURL=9281.e725f2a2c00c760d.js.map