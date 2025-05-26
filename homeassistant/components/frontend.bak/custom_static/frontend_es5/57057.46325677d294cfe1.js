"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["57057"],{95262:function(t,e,i){function o(t){return null==t||Array.isArray(t)?t:[t]}i.d(e,{r:()=>o})},92636:function(t,e,i){i.d(e,{z:()=>o});i(19083),i(61006);const o=t=>(e,i)=>t.includes(e,i)},59847:function(t,e,i){i.d(e,{N:()=>s});var o=i(73850);const s=t=>(0,o.M)(t.entity_id)},75278:function(t,e,i){i.d(e,{e:()=>o});const o=(t,e)=>s(t.attributes,e),s=(t,e)=>!!(t.supported_features&e)},29095:function(t,e,i){i.a(t,(async function(t,e){try{var o=i(61701),s=(i(71695),i(47021),i(31622),i(57243)),r=i(50778),n=i(17170),a=(i(37583),t([n]));n=(a.then?(await a)():a)[0];let l,c,d,u,h,v,p=t=>t;const m="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z",_="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z";(0,o.Z)([(0,r.Mo)("ha-progress-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"progress",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"raised",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"unelevated",value(){return!1}},{kind:"field",decorators:[(0,r.SB)()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){const t=this._result||this.progress;return(0,s.dy)(l||(l=p`
      <mwc-button ?raised=${0} .unelevated=${0} .disabled=${0} class=${0}>
        <slot></slot>
      </mwc-button>
      ${0}
    `),this.raised,this.unelevated,this.disabled||this.progress,this._result||"",t?(0,s.dy)(c||(c=p`
            <div class="progress">
              ${0}
            </div>
          `),"success"===this._result?(0,s.dy)(d||(d=p`<ha-svg-icon .path=${0}></ha-svg-icon>`),_):"error"===this._result?(0,s.dy)(u||(u=p`<ha-svg-icon .path=${0}></ha-svg-icon>`),m):this.progress?(0,s.dy)(h||(h=p`<ha-spinner size="small"></ha-spinner>`)):s.Ld):s.Ld)}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(t){this._result=t,setTimeout((()=>{this._result=void 0}),2e3)}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(v||(v=p`mwc-button.error,mwc-button.success{--mdc-theme-primary:white;transition:none;border-radius:4px;pointer-events:none}:host{outline:0;display:inline-block;position:relative;pointer-events:none}mwc-button{transition:1s;pointer-events:initial}mwc-button.success{background-color:var(--success-color)}mwc-button[raised].success,mwc-button[unelevated].success{--mdc-theme-primary:var(--success-color);--mdc-theme-on-primary:white}mwc-button.error{background-color:var(--error-color)}mwc-button[raised].error,mwc-button[unelevated].error{--mdc-theme-primary:var(--error-color);--mdc-theme-on-primary:white}.progress{bottom:4px;position:absolute;text-align:center;top:4px;width:100%}ha-svg-icon{color:#fff}mwc-button.error slot,mwc-button.success slot{visibility:hidden}:host([destructive]){--mdc-theme-primary:var(--error-color)}`))}}]}}),s.oi);e()}catch(l){e(l)}}))},17170:function(t,e,i){i.a(t,(async function(t,o){try{i.r(e),i.d(e,{HaSpinner:()=>v});var s=i(61701),r=i(72621),n=(i(71695),i(47021),i(97677)),a=i(43580),l=i(57243),c=i(50778),d=t([n]);n=(d.then?(await d)():d)[0];let u,h=t=>t,v=(0,s.Z)([(0,c.Mo)("ha-spinner")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(t){if((0,r.Z)(i,"updated",this,3)([t]),t.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value(){return[a.Z,(0,l.iv)(u||(u=h`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`))]}}]}}),n.Z);o()}catch(u){o(u)}}))},96530:function(t,e,i){i.d(e,{X:()=>r,y:()=>s});var o=i(92636);const s=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],r=(0,o.z)(s)},91270:function(t,e,i){i.a(t,(async function(t,o){try{i.r(e);var s=i(61701),r=(i(19083),i(71695),i(19423),i(40251),i(19134),i(5740),i(47021),i(57243)),n=i(50778),a=i(27486),l=i(36522),c=i(20172),d=i(29095),u=(i(29073),i(23334),i(56785)),h=i(74617),v=i(28008),p=i(73192),m=t([d]);d=(m.then?(await m)():m)[0];let _,g,k,f,y=t=>t;const w="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",b="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",L=(0,a.Z)(((t,e,i,o)=>[{name:"name",required:!0,disabled:e,selector:{text:{}}},{name:"usage",required:!0,type:"select",options:[[h.eX.BACKUP,t("ui.panel.config.storage.network_mounts.mount_usage.backup")],[h.eX.MEDIA,t("ui.panel.config.storage.network_mounts.mount_usage.media")],[h.eX.SHARE,t("ui.panel.config.storage.network_mounts.mount_usage.share")]]},{name:"server",required:!0,selector:{text:{}}},{name:"type",required:!0,type:"select",options:[[h.mw.CIFS,t("ui.panel.config.storage.network_mounts.mount_type.cifs")],[h.mw.NFS,t("ui.panel.config.storage.network_mounts.mount_type.nfs")]]},..."nfs"===i?[{name:"path",required:!0,selector:{text:{}}}]:"cifs"===i?[...o?[{name:"version",required:!0,selector:{select:{options:[{label:t("ui.panel.config.storage.network_mounts.cifs_versions.auto"),value:"auto"},{label:t("ui.panel.config.storage.network_mounts.cifs_versions.legacy",{version:"2.0"}),value:"2.0"},{label:t("ui.panel.config.storage.network_mounts.cifs_versions.legacy",{version:"1.0"}),value:"1.0"}],mode:"dropdown"}}}]:[],{name:"share",required:!0,selector:{text:{}}},{name:"username",required:!1,selector:{text:{}}},{name:"password",required:!1,selector:{text:{type:"password"}}}]:[]]));(0,s.Z)([(0,n.Mo)("dialog-mount-view")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_waiting",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_validationError",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_validationWarning",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_existing",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_showCIFSVersion",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_reloadMounts",value:void 0},{kind:"method",key:"showDialog",value:async function(t){var e;this._data=t.mount,this._existing=void 0!==t.mount,this._reloadMounts=t.reloadMounts,"cifs"===(null===(e=t.mount)||void 0===e?void 0:e.type)&&t.mount.version&&"auto"!==t.mount.version&&(this._showCIFSVersion=!0)}},{kind:"method",key:"closeDialog",value:function(){this._data=void 0,this._waiting=void 0,this._error=void 0,this._validationError=void 0,this._validationWarning=void 0,this._existing=void 0,this._showCIFSVersion=void 0,this._reloadMounts=void 0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var t;return void 0===this._existing?r.Ld:(0,r.dy)(_||(_=y`
      <ha-dialog open scrimClickAction escapeKeyAction .heading=${0} @closed=${0}>
        <ha-dialog-header slot="heading">
          <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label=${0} .path=${0}></ha-icon-button>
          <span slot="title">${0}
          </span>
          <a slot="actionItems" class="header_button" href=${0} title=${0} target="_blank" rel="noreferrer" dir=${0}>
            <ha-icon-button .path=${0}></ha-icon-button>
          </a>
        </ha-dialog-header>
        ${0}
        <ha-form .data=${0} .schema=${0} .error=${0} .warning=${0} .computeLabel=${0} .computeHelper=${0} .computeError=${0} .computeWarning=${0} @value-changed=${0} dialogInitialFocus></ha-form>

        ${0}

        <div slot="primaryAction">
          <ha-button @click=${0} dialogInitialFocus>
            ${0}
          </ha-button>
          <ha-progress-button .progress=${0} @click=${0}>
            ${0}
          </ha-progress-button>
        </div>
      </ha-dialog>
    `),this._existing?this.hass.localize("ui.panel.config.storage.network_mounts.update_title"):this.hass.localize("ui.panel.config.storage.network_mounts.add_title"),this.closeDialog,this.hass.localize("ui.common.close"),w,this._existing?this.hass.localize("ui.panel.config.storage.network_mounts.update_title"):this.hass.localize("ui.panel.config.storage.network_mounts.add_title"),(0,p.R)(this.hass,"/common-tasks/os#network-storage"),this.hass.localize("ui.panel.config.storage.network_mounts.documentation"),(0,c.Zu)(this.hass),b,this._error?(0,r.dy)(g||(g=y`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):r.Ld,this._data,L(this.hass.localize,this._existing,null===(t=this._data)||void 0===t?void 0:t.type,this._showCIFSVersion),this._validationError,this._validationWarning,this._computeLabelCallback,this._computeHelperCallback,this._computeErrorCallback,this._computeWarningCallback,this._valueChanged,this._existing?(0,r.dy)(k||(k=y`<ha-button @click=${0} destructive slot="secondaryAction">
              ${0}
            </ha-button>`),this._deleteMount,this.hass.localize("ui.common.delete")):r.Ld,this.closeDialog,this.hass.localize("ui.common.cancel"),this._waiting,this._connectMount,this._existing?this.hass.localize("ui.panel.config.storage.network_mounts.update"):this.hass.localize("ui.panel.config.storage.network_mounts.connect"))}},{kind:"field",key:"_computeLabelCallback",value(){return t=>this.hass.localize(`ui.panel.config.storage.network_mounts.options.${t.name}.title`)}},{kind:"field",key:"_computeHelperCallback",value(){return t=>this.hass.localize(`ui.panel.config.storage.network_mounts.options.${t.name}.description`)}},{kind:"field",key:"_computeErrorCallback",value(){return t=>this.hass.localize(`ui.panel.config.storage.network_mounts.errors.${t}`)||t}},{kind:"field",key:"_computeWarningCallback",value(){return t=>this.hass.localize(`ui.panel.config.storage.network_mounts.warnings.${t}`)||t}},{kind:"method",key:"_valueChanged",value:function(t){var e,i,o;this._validationError={},this._validationWarning={},this._data=t.detail.value,null!==(e=this._data)&&void 0!==e&&e.name&&!/^\w+$/.test(this._data.name)&&(this._validationError.name="invalid_name"),"cifs"!==(null===(i=this._data)||void 0===i?void 0:i.type)||this._data.version||(this._data.version="auto"),"cifs"===(null===(o=this._data)||void 0===o?void 0:o.type)&&this._data.version&&["1.0","2.0"].includes(this._data.version)&&(this._validationWarning.version="not_recomeded_cifs_version")}},{kind:"method",key:"_connectMount",value:async function(t){const e=t.target;this._error=void 0,this._waiting=!0;const i=Object.assign({},this._data);"cifs"===i.type&&"auto"===i.version&&(i.version=void 0);try{this._existing?await(0,h.TF)(this.hass,i):await(0,h.xM)(this.hass,i)}catch(o){return this._error=(0,u.js)(o),this._waiting=!1,e.actionError(),void("cifs"!==this._data.type||this._showCIFSVersion||(this._showCIFSVersion=!0))}this._reloadMounts&&this._reloadMounts(),this.closeDialog()}},{kind:"method",key:"_deleteMount",value:async function(){this._error=void 0,this._waiting=!0;try{await(0,h.ap)(this.hass,this._data.name)}catch(t){return this._error=(0,u.js)(t),void(this._waiting=!1)}this._reloadMounts&&this._reloadMounts(),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,v.yu,(0,r.iv)(f||(f=y`ha-icon-button{color:var(--primary-text-color)}`))]}}]}}),r.oi);o()}catch(_){o(_)}}))},30338:function(t,e,i){var o=i(97934),s=i(71998),r=i(4576),n=i(36760);t.exports=function(t,e){e&&"string"==typeof t||s(t);var i=n(t);return r(s(void 0!==i?o(i,t):t))}},60933:function(t,e,i){var o=i(40810),s=i(57877),r=i(63983),n=i(12360),a=i(13053),l=i(47645);o({target:"Array",proto:!0},{flatMap:function(t){var e,i=n(this),o=a(i);return r(t),(e=l(i,0)).length=s(e,i,i,o,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},32126:function(t,e,i){i(35709)("flatMap")},25677:function(t,e,i){var o=i(40810),s=i(97934),r=i(63983),n=i(71998),a=i(4576),l=i(30338),c=i(79995),d=i(14181),u=i(92288),h=c((function(){for(var t,e,i=this.iterator,o=this.mapper;;){if(e=this.inner)try{if(!(t=n(s(e.next,e.iterator))).done)return t.value;this.inner=null}catch(r){d(i,"throw",r)}if(t=n(s(this.next,i)),this.done=!!t.done)return;try{this.inner=l(o(t.value,this.counter++),!1)}catch(r){d(i,"throw",r)}}}));o({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(t){return n(this),r(t),new h(a(this),{mapper:t,inner:null})}})},68783:function(t,e,i){i.a(t,(async function(t,o){try{i.d(e,{A:()=>d});i(71695),i(47021);var s=i(64699),r=i(15073),n=i(81048),a=i(31027),l=i(57243),c=t([r]);r=(c.then?(await c)():c)[0];let u,h=t=>t;var d=class extends a.P{constructor(){super(...arguments),this.localize=new r.V(this)}render(){return(0,l.dy)(u||(u=h`
      <svg part="base" class="spinner" role="progressbar" aria-label=${0}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `),this.localize.term("loading"))}};d.styles=[n.N,s.D],o()}catch(u){o(u)}}))},64699:function(t,e,i){i.d(e,{D:()=>s});let o;var s=(0,i(57243).iv)(o||(o=(t=>t)`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`))},97677:function(t,e,i){i.a(t,(async function(t,o){try{i.d(e,{Z:()=>s.A});var s=i(68783),r=(i(64699),i(15073)),n=i(21262),a=(i(81048),i(31027),i(52812),t([r,n,s]));[r,n,s]=a.then?(await a)():a,o()}catch(l){o(l)}}))},43580:function(t,e,i){i.d(e,{Z:()=>o.D});var o=i(64699);i(52812)},92903:function(t,e,i){i.d(e,{XM:()=>o.XM,Xe:()=>o.Xe,pX:()=>o.pX});var o=i(45779)}}]);
//# sourceMappingURL=57057.46325677d294cfe1.js.map