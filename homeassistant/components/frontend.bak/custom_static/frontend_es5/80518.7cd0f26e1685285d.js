"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["80518"],{44732:function(t,e,i){var a=i(61701),n=(i(71695),i(47021),i(57243)),r=i(50778),s=i(35359);let o,l,c=t=>t;(0,a.Z)([(0,r.Mo)("ha-more-info-control-select-container")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"render",value:function(){const t=`items-${this.childElementCount}`;return(0,n.dy)(o||(o=c`
      <div class="controls">
        <div class="controls-scroll ${0}">
          <slot></slot>
        </div>
      </div>
    `),(0,s.$)({[t]:!0,multiline:this.childElementCount>=4}))}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(l||(l=c`.controls{display:flex;flex-direction:row;justify-content:center}.controls-scroll{display:flex;flex-direction:row;justify-content:flex-start;gap:12px;margin:-2px -24px;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;padding:2px 24px}.controls-scroll::-webkit-scrollbar{display:none}::slotted(*){min-width:120px;max-width:160px;flex:none}@media all and (hover:hover),all and (min-width:600px) and (min-height:501px){.controls-scroll{justify-content:center;flex-wrap:wrap;width:100%;max-width:450px}.controls-scroll.items-4{max-width:300px}.controls-scroll.items-3 ::slotted(*){max-width:140px}.multiline ::slotted(*){width:140px}}`))}}]}}),n.oi)},12173:function(t,e,i){i.d(e,{b:()=>n});let a;const n=(0,i(57243).iv)(a||(a=(t=>t)`:host{display:flex;flex-direction:column;flex:1;justify-content:space-between}.controls{display:flex;flex-direction:column;align-items:center}.controls:not(:last-child),.controls>:not(:last-child){margin-bottom:24px}.buttons{display:flex;align-items:center;justify-content:center;margin-bottom:12px}.buttons>*{margin:8px}ha-attributes{display:block;width:100%}ha-more-info-control-select-container+ha-attributes:not([empty]){margin-top:16px}`))},60054:function(t,e,i){i.a(t,(async function(t,a){try{i.r(e);var n=i(61701),r=(i(71695),i(61893),i(9359),i(70104),i(40251),i(47021),i(57243)),s=i(50778),o=i(49976),l=i(75278),c=(i(34058),i(7285),i(96194)),u=i(6703),h=i(89555),d=(i(44732),i(12173)),m=t([h]);h=(m.then?(await m)():m)[0];let p,v,b,_,y,f,g=t=>t;const $="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",k="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14",x="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z";(0,n.Z)([(0,s.Mo)("more-info-water_heater")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){if(!this.stateObj)return r.Ld;const t=this.stateObj,e=(0,l.e)(t,u.SN.OPERATION_MODE),i=(0,l.e)(t,u.SN.AWAY_MODE),a=this.stateObj.attributes.current_temperature;return(0,r.dy)(p||(p=g`
      <div class="current">
        ${0}
      </div>
      <div class="controls">
        <ha-state-control-water_heater-temperature .hass=${0} .stateObj=${0}></ha-state-control-water_heater-temperature>
      </div>
      <ha-more-info-control-select-container>
        ${0}
        ${0}
      </ha-more-info-control-select-container>
    `),null!=a?(0,r.dy)(v||(v=g`
              <div>
                <p class="label">
                  ${0}
                </p>
                <p class="value">
                  ${0}
                </p>
              </div>
            `),this.hass.formatEntityAttributeName(this.stateObj,"current_temperature"),this.hass.formatEntityAttributeValue(this.stateObj,"current_temperature")):r.Ld,this.hass,this.stateObj,e&&t.attributes.operation_list?(0,r.dy)(b||(b=g`
              <ha-control-select-menu .label=${0} .value=${0} .disabled=${0} fixedMenuPosition naturalMenuWidth @selected=${0} @closed=${0}>
                <ha-svg-icon slot="icon" .path=${0}></ha-svg-icon>
                ${0}
              </ha-control-select-menu>
            `),this.hass.localize("ui.card.water_heater.mode"),t.state,t.state===c.nZ,this._handleOperationModeChanged,o.U,x,t.attributes.operation_list.concat().sort(u.P_).map((e=>(0,r.dy)(_||(_=g`
                      <ha-list-item .value=${0} graphic="icon">
                        <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
                        ${0}
                      </ha-list-item>
                    `),e,(0,u.J6)(e),this.hass.formatEntityState(t,e))))):r.Ld,i?(0,r.dy)(y||(y=g`
              <ha-control-select-menu .label=${0} .value=${0} .disabled=${0} fixedMenuPosition naturalMenuWidth @selected=${0} @closed=${0}>
                <ha-svg-icon slot="icon" .path=${0}></ha-svg-icon>
                <ha-list-item value="on" graphic="icon">
                  <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
                  ${0}
                </ha-list-item>
                <ha-list-item value="off" graphic="icon">
                  <ha-svg-icon slot="graphic" .path=${0}></ha-svg-icon>
                  ${0}
                </ha-list-item>
              </ha-control-select-menu>
            `),this.hass.formatEntityAttributeName(t,"away_mode"),t.attributes.away_mode,t.state===c.nZ,this._handleAwayModeChanged,o.U,$,k,this.hass.formatEntityAttributeValue(t,"away_mode","on"),$,this.hass.formatEntityAttributeValue(t,"away_mode","off")):r.Ld)}},{kind:"method",key:"_handleOperationModeChanged",value:function(t){const e=t.target.value;this._callServiceHelper(this.stateObj.state,e,"set_operation_mode",{operation_mode:e})}},{kind:"method",key:"_handleAwayModeChanged",value:function(t){const e="on"===t.target.value,i="on"===this.stateObj.attributes.away_mode;this._callServiceHelper(i,e,"set_away_mode",{away_mode:e})}},{kind:"method",key:"_callServiceHelper",value:async function(t,e,i,a){if(t===e)return;a.entity_id=this.stateObj.entity_id;const n=this.stateObj;await this.hass.callService("water_heater",i,a),await new Promise((t=>{setTimeout(t,2e3)})),this.stateObj===n&&(this.stateObj=void 0,await this.updateComplete,void 0===this.stateObj&&(this.stateObj=n))}},{kind:"get",static:!0,key:"styles",value:function(){return[d.b,(0,r.iv)(f||(f=g`.current,.current div{display:flex;text-align:center}.current,.current div,.current p{text-align:center}:host{color:var(--primary-text-color)}.current{flex-direction:row;align-items:center;justify-content:center;margin-bottom:40px}.current div{flex-direction:column;align-items:center;justify-content:center;flex:1}.current p{margin:0;color:var(--primary-text-color)}.current .label{opacity:.8;font-size:14px;line-height:16px;letter-spacing:.4px;margin-bottom:4px}.current .value{font-size:22px;font-weight:500;line-height:28px;direction:ltr}`))]}}]}}),r.oi);a()}catch(p){a(p)}}))},89555:function(t,e,i){i.a(t,(async function(t,e){try{var a=i(61701),n=i(72621),r=(i(71695),i(11740),i(47021),i(57243)),s=i(50778),o=i(69634),l=i(73358),c=i(5839),u=i(42818),h=i(75278),d=i(34593),m=i(22381),p=i(1703),v=(i(5906),i(75138),i(37583),i(96194)),b=i(6703),_=i(3015),y=t([p,_]);[p,_]=y.then?(await y)():y;let f,g,$,k,x,w,O,j,C,V=t=>t;const T="M19,13H5V11H19V13Z",H="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";(0,a.Z)([(0,s.Mo)("ha-state-control-water_heater-temperature")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"show-current",type:Boolean})],key:"showCurrent",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"prevent-interaction-on-scroll"})],key:"preventInteractionOnScroll",value(){return!1}},{kind:"field",decorators:[(0,s.SB)()],key:"_targetTemperature",value:void 0},{kind:"field",key:"_sizeController",value(){return(0,_.$)(this)}},{kind:"method",key:"willUpdate",value:function(t){(0,n.Z)(i,"willUpdate",this,3)([t]),t.has("stateObj")&&(this._targetTemperature=this.stateObj.attributes.temperature)}},{kind:"get",key:"_step",value:function(){return this.stateObj.attributes.target_temp_step||(this.hass.config.unit_system.temperature===l.gD?1:.5)}},{kind:"get",key:"_min",value:function(){return this.stateObj.attributes.min_temp}},{kind:"get",key:"_max",value:function(){return this.stateObj.attributes.max_temp}},{kind:"method",key:"_valueChanged",value:function(t){const e=t.detail.value;isNaN(e)||(this._targetTemperature=e,this._callService())}},{kind:"method",key:"_valueChanging",value:function(t){const e=t.detail.value;isNaN(e)||(this._targetTemperature=e)}},{kind:"field",key:"_debouncedCallService",value(){return(0,m.D)((()=>this._callService()),1e3)}},{kind:"method",key:"_callService",value:function(){this.hass.callService("water_heater","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this._targetTemperature})}},{kind:"method",key:"_handleButton",value:function(t){var e;const i=t.currentTarget.step;let a=null!==(e=this._targetTemperature)&&void 0!==e?e:this._min;a+=i,a=(0,d.u)(a,this._min,this._max),this._targetTemperature=a,this._debouncedCallService()}},{kind:"method",key:"_renderLabel",value:function(){return this.stateObj.state===v.nZ?(0,r.dy)(f||(f=V`
        <p class="label disabled">
          ${0}
        </p>
      `),this.hass.formatEntityState(this.stateObj,v.nZ)):(0,h.e)(this.stateObj,b.SN.TARGET_TEMPERATURE)&&this._targetTemperature?(0,r.dy)($||($=V`
      <p class="label">${0}</p>
    `),this.hass.localize("ui.card.water_heater.target")):(0,r.dy)(g||(g=V`
        <p class="label">${0}</p>
      `),this.hass.formatEntityState(this.stateObj))}},{kind:"method",key:"_renderButtons",value:function(){return(0,r.dy)(k||(k=V`
      <div class="buttons">
        <ha-outlined-icon-button .step=${0} @click=${0}>
          <ha-svg-icon .path=${0}></ha-svg-icon>
        </ha-outlined-icon-button>
        <ha-outlined-icon-button .step=${0} @click=${0}>
          <ha-svg-icon .path=${0}></ha-svg-icon>
        </ha-outlined-icon-button>
      </div>
    `),-this._step,this._handleButton,T,this._step,this._handleButton,H)}},{kind:"method",key:"_renderTargetTemperature",value:function(t){var e,i;const a=null!==(e=null===(i=this._step.toString().split("."))||void 0===i||null===(i=i[1])||void 0===i?void 0:i.length)&&void 0!==e?e:0,n={maximumFractionDigits:a,minimumFractionDigits:a};return(0,r.dy)(x||(x=V`
      <ha-big-number .value=${0} .unit=${0} .hass=${0} .formatOptions=${0}></ha-big-number>
    `),t,this.hass.config.unit_system.temperature,this.hass,n)}},{kind:"method",key:"_renderCurrentTemperature",value:function(t){return this.showCurrent&&null!=t?(0,r.dy)(O||(O=V`
      <p class="label">
        ${0}
        <span>
          ${0}
        </span>
      </p>
    `),this.hass.localize("ui.card.water_heater.currently"),this.hass.formatEntityAttributeValue(this.stateObj,"current_temperature",t)):(0,r.dy)(w||(w=V`<p class="label"> </p>`))}},{kind:"method",key:"render",value:function(){const t=(0,h.e)(this.stateObj,b.SN.TARGET_TEMPERATURE),e=(0,u.Hh)(this.stateObj),i=(0,c.v)(this.stateObj),a=this._sizeController.value?` ${this._sizeController.value}`:"";return t&&null!=this._targetTemperature&&this.stateObj.state!==v.nZ?(0,r.dy)(j||(j=V`
        <div class="container${0}" style=${0}>
          <ha-control-circular-slider .preventInteractionOnScroll=${0} .inactive=${0} .value=${0} .min=${0} .max=${0} .step=${0} .current=${0} @value-changed=${0} @value-changing=${0}>
          </ha-control-circular-slider>
          <div class="info">
            ${0}
            ${0}
            ${0}
          </div>
          ${0}
        </div>
      `),a,(0,o.V)({"--state-color":e}),this.preventInteractionOnScroll,!i,this._targetTemperature,this._min,this._max,this._step,this.stateObj.attributes.current_temperature,this._valueChanged,this._valueChanging,this._renderLabel(),this._renderTargetTemperature(this._targetTemperature),this._renderCurrentTemperature(this.stateObj.attributes.current_temperature),this._renderButtons()):(0,r.dy)(C||(C=V`
      <div class="container${0}" style=${0}>
        <ha-control-circular-slider .preventInteractionOnScroll=${0} mode="full" .current=${0} .min=${0} .max=${0} .step=${0} readonly=readonly .disabled=${0}>
        </ha-control-circular-slider>
        <div class="info">
          ${0}
          ${0}
        </div>
      </div>
    `),a,(0,o.V)({"--state-color":e}),this.preventInteractionOnScroll,this.stateObj.attributes.current_temperature,this._min,this._max,this._step,!i,this._renderLabel(),this._renderCurrentTemperature(this.stateObj.attributes.current_temperature))}},{kind:"get",static:!0,key:"styles",value:function(){return _.r}}]}}),r.oi);e()}catch(f){e(f)}}))}}]);
//# sourceMappingURL=80518.7cd0f26e1685285d.js.map