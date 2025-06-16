"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["30247"],{44111:function(a,i,e){e.a(a,(async function(a,o){try{e.r(i),e.d(i,{HuiSaveConfig:()=>w});var t=e(61701),s=(e(40251),e(31622),e(57243)),l=e(50778),n=e(36522),c=e(17170),h=(e(73729),e(95198),e(55486),e(23334),e(1888),e(64889),e(28008)),d=e(73192),r=e(28421),g=a([c]);c=(g.then?(await g)():g)[0];let u,p,m,v,f,_,y,k=a=>a;const $="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",C="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",b={views:[{title:"Home"}]};let w=(0,t.Z)([(0,l.Mo)("hui-dialog-save-config")],(function(a,i){return{F:class extends i{constructor(){super(),a(this),this._saving=!1}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_emptyConfig",value(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_saving",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._params=a,this._emptyConfig=!1}},{kind:"method",key:"closeDialog",value:function(){return this._params=void 0,(0,n.B)(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){if(!this._params)return s.Ld;const a=this.hass.localize("ui.panel.lovelace.editor.save_config.header");return(0,s.dy)(u||(u=k`
      <ha-dialog open scrimClickAction escapeKeyAction @closed=${0} .heading=${0}>
        <ha-dialog-header slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${0} .path=${0}></ha-icon-button>
          <span slot="title">${0}</span>
          <a href=${0} title=${0} target="_blank" rel="noreferrer" slot="actionItems">
            <ha-icon-button .path=${0} .label=${0}></ha-icon-button>
          </a>
        </ha-dialog-header>
        <div>
          <p>
            ${0}
          </p>

          ${0}
        </div>
        ${0}
      </ha-dialog>
    `),this._close,a,this.hass.localize("ui.common.close"),$,a,(0,d.R)(this.hass,"/lovelace/"),this.hass.localize("ui.panel.lovelace.menu.help"),C,this.hass.localize("ui.common.help"),this.hass.localize("ui.panel.lovelace.editor.save_config.para"),"storage"===this._params.mode?(0,s.dy)(p||(p=k`
                <p>
                  ${0}
                </p>
                <ha-formfield .label=${0}>
                  <ha-switch .checked=${0} @change=${0} dialogInitialFocus></ha-switch></ha-formfield>
              `),this.hass.localize("ui.panel.lovelace.editor.save_config.para_sure"),this.hass.localize("ui.panel.lovelace.editor.save_config.empty_config"),this._emptyConfig,this._emptyConfigChanged):(0,s.dy)(m||(m=k`
                <p>
                  ${0}
                </p>
                <p>
                  ${0}
                </p>
                <p>
                  ${0}
                </p>
                <ha-yaml-editor .hass=${0} .defaultValue=${0} dialogInitialFocus></ha-yaml-editor>
              `),this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_mode"),this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_control"),this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_config"),this.hass,this._params.lovelace.config),"storage"===this._params.mode?(0,s.dy)(v||(v=k`
              <mwc-button slot="primaryAction" @click=${0}>
                ${0}
              </mwc-button>
              <mwc-button slot="primaryAction" ?disabled=${0} @click=${0}>
                ${0}
                ${0}
              </mwc-button>
            `),this.closeDialog,this.hass.localize("ui.common.cancel"),this._saving,this._saveConfig,this._saving?(0,s.dy)(f||(f=k`<ha-spinner size="small" aria-label="Saving"></ha-spinner>`)):"",this.hass.localize("ui.panel.lovelace.editor.save_config.save")):(0,s.dy)(_||(_=k`
              <mwc-button slot="primaryAction" @click=${0}>
                ${0}</mwc-button>
            `),this.closeDialog,this.hass.localize("ui.panel.lovelace.editor.save_config.close")))}},{kind:"method",key:"_close",value:function(a){a&&a.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_emptyConfigChanged",value:function(a){this._emptyConfig=a.target.checked}},{kind:"method",key:"_saveConfig",value:async function(){if(this.hass&&this._params){this._saving=!0;try{const a=this._params.lovelace;await a.saveConfig(this._emptyConfig?b:await(0,r.mQ)(a.config,this.hass)),a.setEditMode(!0),this._saving=!1,this.closeDialog()}catch(a){alert(`Saving failed: ${a.message}`),this._saving=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.yu,(0,s.iv)(y||(y=k`ha-dialog{--dialog-content-padding:0 24px 24px 24px}ha-dialog-header a{color:inherit;text-decoration:none}`))]}}]}}),s.oi);o()}catch(u){o(u)}}))}}]);
//# sourceMappingURL=30247.b2f4411ae6d830bc.js.map