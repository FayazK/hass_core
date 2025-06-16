"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["79212"],{87707:function(e,t,i){i.d(t,{Q:()=>s});const s=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},17170:function(e,t,i){i.a(e,(async function(e,s){try{i.r(t),i.d(t,{HaSpinner:()=>p});var a=i(61701),r=i(72621),n=(i(71695),i(47021),i(97677)),o=i(43580),d=i(57243),c=i(50778),l=e([n]);n=(l.then?(await l)():l)[0];let h,u=e=>e,p=(0,a.Z)([(0,c.Mo)("ha-spinner")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(e){if((0,r.Z)(i,"updated",this,3)([e]),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value(){return[o.Z,(0,d.iv)(h||(h=u`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`))]}}]}}),n.Z);s()}catch(h){s(h)}}))},19643:function(e,t,i){i.a(e,(async function(e,t){try{var s=i(61701),a=i(72621),r=(i(71695),i(92745),i(61893),i(9359),i(56475),i(1331),i(31526),i(70104),i(40251),i(88044),i(47021),i(57243)),n=i(50778),o=i(70445),d=i(73850),c=i(97547),l=i(47194),h=i(6280),u=i(5460),p=i(45729),f=e([u,h,c,p]);[u,h,c,p]=f.then?(await f)():f;let m,y,v,g,x,k,b,_,w,S=e=>e;(0,s.Z)([(0,n.Mo)("entities-history-panel")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"selected-date"})],key:"selectedDate",value(){return new Date}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"selectedEntities",value(){return[]}},{kind:"field",decorators:[(0,n.SB)()],key:"_historyItems",value(){return[]}},{kind:"field",decorators:[(0,n.SB)()],key:"_isLoading",value(){return!1}},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value(){return null}},{kind:"method",key:"_getUserForStateChange",value:function(e,t){var i;const s=null===(i=t.a)||void 0===i?void 0:i.user_id;if(s){const e=Object.values(this.hass.states).filter((e=>e.entity_id.startsWith("person."))).find((e=>e.attributes.user_id===s||e.attributes.id===s));if(e)return{id:s,name:e.attributes.friendly_name||e.entity_id,picture:e.attributes.entity_picture}}const a=this.hass.user;if(a)return{id:a.id,name:a.name,picture:a.picture};const r=Object.values(this.hass.states).find((e=>"person.home_assistant"===e.entity_id));return r?{id:"system",name:r.attributes.friendly_name||"Home Assistant",picture:r.attributes.entity_picture}:{id:"system",name:"System",picture:void 0}}},{kind:"method",key:"_formatStateChange",value:function(e,t,i,s){switch(e){case"light":case"switch":return"on"===s?"Turned On":"Turned Off";case"climate":return"off"===s?"Turned Off":i&&"off"!==i&&i!==s?`${s.charAt(0).toUpperCase()+s.slice(1)} Mode`:"off"===i?`Turned On (${s.charAt(0).toUpperCase()+s.slice(1)} Mode)`:`${s.charAt(0).toUpperCase()+s.slice(1)} Mode`;case"cover":switch(s){case"open":return"Opened";case"closed":return"Closed";case"opening":return"Opening";case"closing":return"Closing";default:return`${s}`}default:return"on"===s?"Turned On":"off"===s?"Turned Off":`${s}`}}},{kind:"method",key:"_getStateColor",value:function(e,t){switch(e){case"light":return"on"===t?"#4caf50":"#9e9e9e";case"switch":return"on"===t?"#2196f3":"#9e9e9e";case"climate":return"off"===t?"#9e9e9e":"heat"===t?"#ff5722":"cool"===t?"#03a9f4":"auto"===t?"#9c27b0":"#4caf50";case"cover":return"open"===t?"#4caf50":"closed"===t?"#f44336":"#ff9800";default:return"on"===t?"#4caf50":"off"===t?"#9e9e9e":"#607d8b"}}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),this.hass&&this._updateHistoryItems()}},{kind:"method",key:"updated",value:function(e){e.has("selectedDate")&&(console.log("Selected date property changed:",this.selectedDate),this._updateHistoryItems())}},{kind:"method",key:"_updateHistoryItems",value:async function(){if(this.hass&&this.selectedEntities&&0!==this.selectedEntities.length)try{let t=this.selectedDate;if(!(t instanceof Date)||isNaN(t.getTime())){console.log("Converting selectedDate to Date object:",t);try{t=new Date(t)}catch(e){console.error("Failed to convert selectedDate to Date:",e),t=new Date}}console.log("Fetching history for date:",t,"and entities:",this.selectedEntities),this._isLoading=!0,this._error=null,this.requestUpdate();const i=new Date(t);i.setHours(0,0,0,0);const s=new Date(t);s.setHours(23,59,59,999);const a=await(0,h.iz)(this.hass,i,s,this.selectedEntities);console.log("Received history data:",a);const r=[];if(!a||0===Object.keys(a).length)return this._historyItems=[],void(this._isLoading=!1);Object.entries(a).forEach((([e,t])=>{if(!t||0===t.length)return;const i=(0,d.M)(e),s=this.hass.states[e],a=s?(0,l.C)(s):e;for(let n=1;n<t.length;n++){const o=t[n-1],d=t[n];if(o.s===d.s)continue;const l=s?(0,c.computeStateDisplay)(this.hass.localize,s,this.hass.locale,o.s):o.s,h=s?(0,c.computeStateDisplay)(this.hass.localize,s,this.hass.locale,d.s):d.s,u=this._getUserForStateChange(e,d);r.push({entityId:e,entityName:a,entityDomain:i,oldState:o.s,newState:d.s,oldStateDisplay:l,newStateDisplay:h,user:u,timestamp:new Date(1e3*(d.lc||d.lu))})}})),r.sort(((e,t)=>t.timestamp.getTime()-e.timestamp.getTime())),this._historyItems=r,console.log("Processed history items:",this._historyItems)}catch(e){console.error("Error fetching history data:",e),this._error="Failed to load history data",this._historyItems=[]}finally{this._isLoading=!1,this.requestUpdate()}else this._historyItems=[]}},{kind:"method",key:"_renderFallback",value:function(e){return(0,r.dy)(m||(m=S`
      <ha-svg-icon .path=${0}></ha-svg-icon>
    `),p.Rb)}},{kind:"method",key:"render",value:function(){return(0,r.dy)(y||(y=S`
      <div class="history-container">
        <div class="timeline-container">
          ${0}
        </div>
      </div>
    `),this._isLoading?(0,r.dy)(v||(v=S`
                <div class="loading-message">
                  <div class="spinner"></div>
                  <div>Loading history...</div>
                </div>
              `)):this._error?(0,r.dy)(g||(g=S`
                  <div class="error-message">
                    <div>Error: ${0}</div>
                  </div>
                `),this._error):0===this._historyItems.length?(0,r.dy)(x||(x=S`
                    <div class="empty-message">
                      <div>No history found for this date</div>
                    </div>
                  `)):this._historyItems.map((e=>{var t,i,s;return(0,r.dy)(k||(k=S`
                      <div class="timeline-item">
                        <div class="timeline-header">
                          <div class="user-info">
                            ${0}
                            <div class="user-name">
                              ${0}
                            </div>
                          </div>
                          <div class="timestamp">
                            ${0}
                          </div>
                        </div>
                        <div class="timeline-content">
                          <div class="action-text">
                            <span style="margin-left:-7px;margin-top:13px;font-size:14px">${0}</span>
                            <span class="state-change" style="background-color:${0}">
                              ${0}
                            </span>
                          </div>
                        </div>
                      </div>
                    `),null!==(t=e.user)&&void 0!==t&&t.picture?(0,r.dy)(b||(b=S`
                                  <div class="user-avatar with-image">
                                    <img src="${0}" alt="${0}"/>
                                  </div>
                                `),e.user.picture,e.user.name):(0,r.dy)(_||(_=S`
                                  <div class="user-avatar">
                                    ${0}
                                  </div>
                                `),(null===(i=e.user)||void 0===i?void 0:i.name.charAt(0))||"S"),(null===(s=e.user)||void 0===s?void 0:s.name)||"System",(0,o.WU)(e.timestamp,"dd MMM, hh:mm a"),e.entityName,this._getStateColor(e.entityDomain,e.newState),this._formatStateChange(e.entityDomain,e.entityName,e.oldState||"",e.newState))})))}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(w||(w=S`:host{display:block;height:100%;overflow:hidden;min-height:300px}.history-container{height:100%;width:100%;display:block;position:relative;overflow:hidden}.timeline-container{height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:20px;padding:12px;position:relative}.timeline-item{position:relative;z-index:1;margin-left:5px;margin-right:5px;border-radius:12px;overflow:hidden;min-height:75px}.timeline-header{display:flex;justify-content:space-between;align-items:center;padding:5px}.user-info{display:flex;align-items:center;gap:12px}.user-avatar{width:28px;height:28px;border-radius:50%;background-color:rgba(80,80,80,.5);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:#fff}.action-text,.timestamp,.user-name{color:var(--primary-text-color)}.user-name{font-weight:500;font-size:16px}.timestamp{font-size:14px}.timeline-content{padding:0 16px 16px}.action-text{font-size:18px;display:flex}.action-value{font-weight:500;margin-left:8px}.empty-message,.error-message,.loading-message{display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--primary-text-color);height:100px;margin:20px 0;text-align:center;font-size:16px}.spinner{width:40px;height:40px;margin-bottom:16px;border:4px solid rgba(255,255,255,.1);border-radius:50%;border-top-color:var(--primary-color);animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.user-avatar.with-image{padding:0;overflow:hidden}.user-avatar.with-image img{width:100%;height:100%;object-fit:cover}.state-change{margin-left:8px;font-weight:500;padding:4px 5px 5px;height:18px;font-size:13px;border-radius:9px;margin-top:8px;color:#fff}state-badge{margin-bottom:3px}`))}}]}}),r.oi);t()}catch(m){t(m)}}))}}]);
//# sourceMappingURL=79212.d401372c9d13bfba.js.map