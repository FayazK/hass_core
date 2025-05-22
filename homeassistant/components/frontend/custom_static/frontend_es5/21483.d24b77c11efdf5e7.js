"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["21483"],{17705:function(t,a,e){e.d(a,{Cj:()=>n,Hs:()=>k,Kd:()=>v,Kj:()=>u,Nw:()=>y,PA:()=>l,Py:()=>r,Qm:()=>w,Z0:()=>g,_Y:()=>i,_m:()=>c,dL:()=>o,dO:()=>p,hN:()=>h,h_:()=>_,j2:()=>$,q6:()=>m,uR:()=>d});e(19083),e(71695),e(9359),e(52924),e(61006),e(47021);var s=e(47194);const l=99387==e.j?["entity_not_recorded","entity_no_longer_recorded","state_class_removed","units_changed","no_state"]:null,c=t=>t.sendMessagePromise({type:"recorder/info"}),d=(t,a)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:a}),r=(t,a)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:a}),o=(t,a,e,s,l="hour",c,d)=>t.callWS({type:"recorder/statistics_during_period",start_time:a.toISOString(),end_time:null==e?void 0:e.toISOString(),statistic_ids:s,period:l,units:c,types:d}),i=(t,a,e,s)=>t.callWS({type:"recorder/statistic_during_period",statistic_id:a,units:s,fixed_period:e.fixed_period?{start_time:e.fixed_period.start instanceof Date?e.fixed_period.start.toISOString():e.fixed_period.start,end_time:e.fixed_period.end instanceof Date?e.fixed_period.end.toISOString():e.fixed_period.end}:void 0,calendar:e.calendar,rolling_window:e.rolling_window}),_=t=>t.callWS({type:"recorder/validate_statistics"}),n=(t,a,e)=>t.callWS({type:"recorder/update_statistics_metadata",statistic_id:a,unit_of_measurement:e}),h=(t,a)=>t.callWS({type:"recorder/clear_statistics",statistic_ids:a}),u=t=>{let a=null;if(!t)return null;for(const e of t)null!==e.change&&void 0!==e.change&&(null===a?a=e.change:a+=e.change);return a},m=(t,a)=>{let e=null;for(const s of a){if(!(s in t))continue;const a=u(t[s]);null!==a&&(null===e?e=a:e+=a)}return e},y=(t,a)=>t.some((t=>void 0!==t[a]&&null!==t[a])),b=["mean","min","max"],f=["sum","state","change"],g=(t,a)=>!(!b.includes(a)||!t.has_mean)||!(!f.includes(a)||!t.has_sum),$=(t,a,e,s,l)=>{const c=new Date(e).toISOString();return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:a,start_time:c,adjustment:s,adjustment_unit_of_measurement:l})},v=(t,a,e)=>{const l=t.states[a];return l?(0,s.C)(l):(null==e?void 0:e.name)||a},p=(t,a,e)=>{let s;var l;a&&(s=null===(l=t.states[a])||void 0===l?void 0:l.attributes.unit_of_measurement);return void 0===s?null==e?void 0:e.statistics_unit_of_measurement:s},k=t=>t.includes(":"),w=t=>t.callWS({type:"recorder/update_statistics_issues"})},6736:function(t,a,e){e.d(a,{f:()=>d});var s=e(61701),l=e(72621),c=(e(19083),e(71695),e(9359),e(52924),e(40251),e(61006),e(47021),e(50778));const d=t=>(0,s.Z)(null,(function(t,a){class e extends a{constructor(...a){super(...a),t(this)}}return{F:e,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,l.Z)(e,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,l.Z)(e,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,l.Z)(e,"updated",this,3)([t]),t.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const a of t.keys())if(this.hassSubscribeRequiredHostProps.includes(a))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},20548:function(t,a,e){e.d(a,{H:()=>c});e(81804);var s=e(11259),l=e(4643);function c(t,a,e,c,d,r){const o=t.getPropertyValue(d+"-"+r).trim(),i=o.length>0?o:t.getPropertyValue(d).trim();let _=(0,s.Rq)(i);return 0===o.length&&r&&(_=(0,s.CO)((0,s.p3)(a?(0,l.C)((0,s.Rw)((0,s.wK)(_)),r):(0,l.W)((0,s.Rw)((0,s.wK)(_)),r)))),c?_+=e?"32":"7F":e&&(_+="7F"),_}},74549:function(t,a,e){e.a(t,(async function(t,s){try{e.r(a),e.d(a,{HuiEnergySourcesTableCard:()=>wt});var l=e(61701),c=(e(71695),e(9359),e(70104),e(52924),e(47021),e(23985)),d=e(57243),r=e(50778),o=e(35359),i=e(69634),_=e(50602),n=e(20548),h=(e(54977),e(1118)),u=e(17705),m=e(6736),y=e(93331),b=e(36522),f=t([h,_]);[h,_]=f.then?(await f)():f;let g,$,v,p,k,w,C,S,K,M,j,H,W,x,z,I,P,R,V,q,O,Z,B,F,D,E,N,L,T,U,A,J,Q,Y,G,X,tt,at,et,st,lt,ct,dt,rt,ot,it,_t,nt,ht,ut,mt,yt,bt,ft,gt,$t,vt,pt=t=>t;const kt={grid_return:"--energy-grid-return-color",grid_consumption:"--energy-grid-consumption-color",battery_in:"--energy-battery-in-color",battery_out:"--energy-battery-out-color",solar:"--energy-solar-color",gas:"--energy-gas-color",water:"--energy-water-color"};let wt=(0,l.Z)([(0,r.Mo)("hui-energy-sources-table-card")],(function(t,a){return{F:class extends a{constructor(...a){super(...a),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,h.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._data=t}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){var t,a,e,s,l,c,r,m,y,b,f;if(!this.hass||!this._config)return d.Ld;if(!this._data)return(0,d.dy)(g||(g=pt`${0}`),this.hass.localize("ui.panel.lovelace.cards.energy.loading"));let vt=0,wt=0,Ct=0,St=0,Kt=0,Mt=0,jt=0,Ht=0,Wt=!1,xt=!1,zt=!1,It=0,Pt=0,Rt=0,Vt=0,qt=0,Ot=0,Zt=0,Bt=0;const Ft=(0,h.Jj)(this._data.prefs),Dt=getComputedStyle(this),Et=(null===(t=Ft.grid)||void 0===t?void 0:t[0].flow_from.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price)))||(null===(a=Ft.grid)||void 0===a?void 0:a[0].flow_to.some((t=>t.stat_compensation||t.entity_energy_price||t.number_energy_price)))||(null===(e=Ft.gas)||void 0===e?void 0:e.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price)))||(null===(s=Ft.water)||void 0===s?void 0:s.some((t=>t.stat_cost||t.entity_energy_price||t.number_energy_price))),Nt=(0,h.vE)(this.hass,this._data.prefs,this._data.statsMetadata),Lt=(0,h.b)(this.hass),Tt=void 0!==this._data.statsCompare;return(0,d.dy)($||($=pt` <ha-card>
      ${0}
      <div class="mdc-data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="Energy sources">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell"></th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
                  ${0}
                </th>
                ${0}
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">
                  ${0}
                </th>
                ${0}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
              ${0}
            </tbody>
          </table>
        </div>
      </div>
    </ha-card>`),this._config.title?(0,d.dy)(v||(v=pt`<h1 class="card-header">${0}</h1>`),this._config.title):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.source"),Tt?(0,d.dy)(p||(p=pt`<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">
                        ${0}
                      </th>
                      ${0}`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_energy"),Et?(0,d.dy)(k||(k=pt`<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">
                            ${0}
                          </th>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_cost")):""):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy"),Et?(0,d.dy)(w||(w=pt` <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">
                      ${0}
                    </th>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")):"",null===(l=Ft.solar)||void 0===l?void 0:l.map(((t,a)=>{var e;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;Ct+=s;const l=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;return Rt+=l,(0,d.dy)(C||(C=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                  <td class="mdc-data-table__cell cell-bullet">
                    <div class="bullet" style=${0}></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${0}
                  </th>
                  ${0}
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                    ${0} kWh
                  </td>
                  ${0}
                </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.solar,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.solar,a)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_from]),Tt?(0,d.dy)(S||(S=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0} kWh
                        </td>
                        ${0}`),(0,_.uf)(l,this.hass.locale),Et?(0,d.dy)(K||(K=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(s,this.hass.locale),Et?(0,d.dy)(M||(M=pt`<td class="mdc-data-table__cell"></td>`)):"")})),Ft.solar?(0,d.dy)(j||(j=pt`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} kWh
                    </td>
                    ${0}
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.solar_total"),Tt?(0,d.dy)(H||(H=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            kWh
                          </td>
                          ${0}`),(0,_.uf)(Rt,this.hass.locale),Et?(0,d.dy)(W||(W=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(Ct,this.hass.locale),Et?(0,d.dy)(x||(x=pt`<td class="mdc-data-table__cell"></td>`)):""):"",null===(c=Ft.battery)||void 0===c?void 0:c.map(((t,a)=>{var e,s;const l=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0,c=(0,u.Kj)(this._data.stats[t.stat_energy_to])||0;St+=l-c;const r=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0,h=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_to])||0;return Vt+=r-h,(0,d.dy)(z||(z=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                    <td class="mdc-data-table__cell cell-bullet">
                      <div class="bullet" style=${0}></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} kWh
                    </td>
                    ${0}
                  </tr>
                  <tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                    <td class="mdc-data-table__cell cell-bullet">
                      <div class="bullet" style=${0}></div>
                    </td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} kWh
                    </td>
                    ${0}
                  </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.battery_out,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.battery_out,a)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_from]),Tt?(0,d.dy)(I||(I=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            kWh
                          </td>
                          ${0}`),(0,_.uf)(r,this.hass.locale),Et?(0,d.dy)(P||(P=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(l,this.hass.locale),Et?(0,d.dy)(R||(R=pt`<td class="mdc-data-table__cell"></td>`)):"",(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_to)}),this._handleMoreInfo,t.stat_energy_to,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.battery_in,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.battery_in,a)}),(0,u.Kd)(this.hass,t.stat_energy_to,null===(s=this._data)||void 0===s?void 0:s.statsMetadata[t.stat_energy_to]),Tt?(0,d.dy)(V||(V=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            kWh
                          </td>
                          ${0}`),(0,_.uf)(-1*h,this.hass.locale),Et?(0,d.dy)(q||(q=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(-1*c,this.hass.locale),Et?(0,d.dy)(O||(O=pt`<td class="mdc-data-table__cell"></td>`)):"")})),Ft.battery?(0,d.dy)(Z||(Z=pt`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} kWh
                    </td>
                    ${0}
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total"),Tt?(0,d.dy)(B||(B=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            kWh
                          </td>
                          ${0}`),(0,_.uf)(Vt,this.hass.locale),Et?(0,d.dy)(F||(F=pt`<td class="mdc-data-table__cell"></td>`)):""):"",(0,_.uf)(St,this.hass.locale),Et?(0,d.dy)(D||(D=pt`<td class="mdc-data-table__cell"></td>`)):""):"",null===(r=Ft.grid)||void 0===r?void 0:r.map((t=>(0,d.dy)(E||(E=pt`${0}
                  ${0}`),t.flow_from.map(((t,a)=>{var e;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;vt+=s;const l=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;It+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(Wt=!0,wt+=r);const h=Tt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(Pt+=h),(0,d.dy)(N||(N=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                      <td class="mdc-data-table__cell cell-bullet">
                        <div class="bullet" style=${0}></div>
                      </td>
                      <th class="mdc-data-table__cell" scope="row">
                        ${0}
                      </th>
                      ${0}
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        ${0} kWh
                      </td>
                      ${0}
                    </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.grid_consumption,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.grid_consumption,a)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_from]),Tt?(0,d.dy)(L||(L=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                              ${0}
                              kWh
                            </td>
                            ${0}`),(0,_.uf)(l,this.hass.locale),Et?(0,d.dy)(T||(T=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                                  ${0}
                                </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Et?(0,d.dy)(U||(U=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                          </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),t.flow_to.map(((t,a)=>{var e;const s=-1*((0,u.Kj)(this._data.stats[t.stat_energy_to])||0);vt+=s;const l=t.stat_compensation||this._data.info.cost_sensors[t.stat_energy_to],c=l?-1*((0,u.Kj)(this._data.stats[l])||0):null;null!==c&&(Wt=!0,wt+=c);const r=-1*(Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_to])||0);It+=r;const h=Tt&&l?-1*((0,u.Kj)(this._data.statsCompare[l])||0):null;return null!==h&&(Pt+=h),(0,d.dy)(A||(A=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                      <td class="mdc-data-table__cell cell-bullet">
                        <div class="bullet" style=${0}></div>
                      </td>
                      <th class="mdc-data-table__cell" scope="row">
                        ${0}
                      </th>
                      ${0}
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        ${0} kWh
                      </td>
                      ${0}
                    </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_to)}),this._handleMoreInfo,t.stat_energy_to,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.grid_return,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.grid_return,a)}),(0,u.Kd)(this.hass,t.stat_energy_to,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_to]),Tt?(0,d.dy)(J||(J=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                              ${0}
                              kWh
                            </td>
                            ${0}`),(0,_.uf)(r,this.hass.locale),Et?(0,d.dy)(Q||(Q=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                                  ${0}
                                </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Et?(0,d.dy)(Y||(Y=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                          </td>`),null!==c?(0,_.uf)(c,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")}))))),Ft.grid&&(null!==(m=Ft.grid)&&void 0!==m&&null!==(m=m[0].flow_from)&&void 0!==m&&m.length||null!==(y=Ft.grid)&&void 0!==y&&null!==(y=y[0].flow_to)&&void 0!==y&&y.length)?(0,d.dy)(G||(G=pt` <tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} kWh
                    </td>
                    ${0}
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total"),Tt?(0,d.dy)(X||(X=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            kWh
                          </td>
                          ${0}`),(0,_.uf)(It,this.hass.locale),Et?(0,d.dy)(tt||(tt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                                ${0}
                              </td>`),Wt?(0,_.uf)(Pt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(vt,this.hass.locale),Et?(0,d.dy)(at||(at=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0}
                        </td>`),Wt?(0,_.uf)(wt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(b=Ft.gas)||void 0===b?void 0:b.map(((t,a)=>{var e;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;Kt+=s;const l=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;qt+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(xt=!0,Mt+=r);const h=Tt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(Ot+=h),(0,d.dy)(et||(et=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                  <td class="mdc-data-table__cell cell-bullet">
                    <div class="bullet" style=${0}></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${0}
                  </th>
                  ${0}
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                    ${0} ${0}
                  </td>
                  ${0}
                </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.gas,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.gas,a)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_from]),Tt?(0,d.dy)(st||(st=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0}
                          ${0}
                        </td>
                        ${0}`),(0,_.uf)(l,this.hass.locale),Nt,Et?(0,d.dy)(lt||(lt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                              ${0}
                            </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Nt,Et?(0,d.dy)(ct||(ct=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        ${0}
                      </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),Ft.gas?(0,d.dy)(dt||(dt=pt`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} ${0}
                    </td>
                    ${0}
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.gas_total"),Tt?(0,d.dy)(rt||(rt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            ${0}
                          </td>
                          ${0}`),(0,_.uf)(qt,this.hass.locale),Nt,Et?(0,d.dy)(ot||(ot=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                                ${0}
                              </td>`),xt?(0,_.uf)(Ot,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(Kt,this.hass.locale),Nt,Et?(0,d.dy)(it||(it=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0}
                        </td>`),xt?(0,_.uf)(Mt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(f=Ft.water)||void 0===f?void 0:f.map(((t,a)=>{var e;const s=(0,u.Kj)(this._data.stats[t.stat_energy_from])||0;jt+=s;const l=Tt&&(0,u.Kj)(this._data.statsCompare[t.stat_energy_from])||0;Zt+=l;const c=t.stat_cost||this._data.info.cost_sensors[t.stat_energy_from],r=c?(0,u.Kj)(this._data.stats[c])||0:null;null!==r&&(zt=!0,Ht+=r);const h=Tt&&c?(0,u.Kj)(this._data.statsCompare[c])||0:null;return null!==h&&(Bt+=h),(0,d.dy)(_t||(_t=pt`<tr class="mdc-data-table__row ${0}" @click=${0} .entity=${0}>
                  <td class="mdc-data-table__cell cell-bullet">
                    <div class="bullet" style=${0}></div>
                  </td>
                  <th class="mdc-data-table__cell" scope="row">
                    ${0}
                  </th>
                  ${0}
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                    ${0} ${0}
                  </td>
                  ${0}
                </tr>`),(0,o.$)({clickable:!(0,u.Hs)(t.stat_energy_from)}),this._handleMoreInfo,t.stat_energy_from,(0,i.V)({borderColor:(0,n.H)(Dt,this.hass.themes.darkMode,!1,!1,kt.water,a),backgroundColor:(0,n.H)(Dt,this.hass.themes.darkMode,!0,!1,kt.water,a)}),(0,u.Kd)(this.hass,t.stat_energy_from,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[t.stat_energy_from]),Tt?(0,d.dy)(nt||(nt=pt` <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0}
                          ${0}
                        </td>
                        ${0}`),(0,_.uf)(l,this.hass.locale),Lt,Et?(0,d.dy)(ht||(ht=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                              ${0}
                            </td>`),null!==h?(0,_.uf)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(s,this.hass.locale),Lt,Et?(0,d.dy)(ut||(ut=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                        ${0}
                      </td>`),null!==r?(0,_.uf)(r,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):"")})),Ft.water?(0,d.dy)(mt||(mt=pt`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0} ${0}
                    </td>
                    ${0}
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.water_total"),Tt?(0,d.dy)(yt||(yt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                            ${0}
                          </td>
                          ${0}`),(0,_.uf)(Zt,this.hass.locale),Lt,Et?(0,d.dy)(bt||(bt=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                                ${0}
                              </td>`),zt?(0,_.uf)(Bt,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,_.uf)(jt,this.hass.locale),Lt,Et?(0,d.dy)(ft||(ft=pt`<td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                          ${0}
                        </td>`),zt?(0,_.uf)(Ht,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",[xt,zt,Wt].filter(Boolean).length>1?(0,d.dy)(gt||(gt=pt`<tr class="mdc-data-table__row total">
                    <td class="mdc-data-table__cell"></td>
                    <th class="mdc-data-table__cell" scope="row">
                      ${0}
                    </th>
                    ${0}
                    <td class="mdc-data-table__cell"></td>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                      ${0}
                    </td>
                  </tr>`),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs"),Tt?(0,d.dy)($t||($t=pt`<td class="mdc-data-table__cell"></td>
                          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                            ${0}
                          </td>`),(0,_.uf)(Ot+Pt+Bt,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"",(0,_.uf)(Mt+wt+Ht,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"")}},{kind:"method",key:"_handleMoreInfo",value:function(t){var a;const e=null===(a=t.currentTarget)||void 0===a?void 0:a.entity;e&&!(0,u.Hs)(e)&&(0,b.B)(this,"hass-more-info",{entityId:e})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(vt||(vt=pt`${0} .mdc-data-table{width:100%;border:0}.mdc-data-table__cell,.mdc-data-table__header-cell{color:var(--primary-text-color);border-bottom-color:var(--divider-color);text-align:var(--float-start)}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.clickable{cursor:pointer}.total{--mdc-typography-body2-font-weight:500}.total .mdc-data-table__cell{border-top:1px solid var(--divider-color)}ha-card{height:100%;overflow:hidden}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.cell-bullet{width:32px;padding-right:0;padding-inline-end:0;padding-inline-start:16px;direction:var(--direction)}.bullet{border-width:1px;border-style:solid;border-radius:4px;height:16px;width:32px}.mdc-data-table__cell--numeric{direction:ltr}`),(0,d.$m)(c))}}]}}),(0,m.f)(d.oi));s()}catch(g){s(g)}}))}}]);
//# sourceMappingURL=21483.d24b77c11efdf5e7.js.map