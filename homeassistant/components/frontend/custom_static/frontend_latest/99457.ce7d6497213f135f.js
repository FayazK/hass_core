export const __webpack_ids__=["99457"];export const __webpack_modules__={17170:function(t,e,i){i.a(t,(async function(t,n){try{i.r(e),i.d(e,{HaSpinner:()=>h});var a=i(44249),o=i(72621),s=i(97677),r=i(43580),c=i(57243),l=i(15093),d=t([s]);s=(d.then?(await d)():d)[0];let h=(0,a.Z)([(0,l.Mo)("ha-spinner")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"size",value:void 0},{kind:"method",key:"updated",value:function(t){if((0,o.Z)(i,"updated",this,3)([t]),t.has("size"))switch(this.size){case"tiny":this.style.setProperty("--ha-spinner-size","16px");break;case"small":this.style.setProperty("--ha-spinner-size","28px");break;case"medium":this.style.setProperty("--ha-spinner-size","48px");break;case"large":this.style.setProperty("--ha-spinner-size","68px");break;case void 0:this.style.removeProperty("--ha-progress-ring-size")}}},{kind:"field",static:!0,key:"styles",value:()=>[r.Z,c.iv`:host{--indicator-color:var(
          --ha-spinner-indicator-color,
          var(--primary-color)
        );--track-color:var(--ha-spinner-divider-color, var(--divider-color));--track-width:4px;--speed:3.5s;font-size:var(--ha-spinner-size, 48px)}`]}]}}),s.Z);n()}catch(t){n(t)}}))},57733:function(t,e,i){i.a(t,(async function(t,n){try{i.r(e);var a=i(44249),o=i(72621),s=(i(92745),i(9359),i(31526),i(70104),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(57243)),r=i(15093),c=i(35359),l=i(20552),d=i(73358),h=i(82393),u=i(73850),f=i(47194),g=(i(54977),i(23334),i(51223)),p=i(72099),m=i(3967),y=i(69223),v=i(1617),_=i(5684),b=i(93331),k=i(29401),w=i(63848),x=i(62577),$=(i(76986),t([g,w]));[g,w]=$.then?(await $)():$;const C=new Set(["closed","locked","not_home","off"]);(0,a.Z)([(0,r.Mo)("hui-picture-glance-card")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e("46379"),i.e("24199"),i.e("27506"),i.e("27090"),i.e("3049"),i.e("15134")]).then(i.bind(i,47393)),document.createElement("hui-picture-glance-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"picture-glance",title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",entities:(0,y.j)(t,2,e,i,["sensor","binary_sensor"])}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",key:"_entitiesDialog",value:void 0},{kind:"field",key:"_entitiesToggle",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entities||!Array.isArray(t.entities)||!(t.image||t.image_entity||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid configuration");const e=(0,k.A)(t.entities);this._entitiesDialog=[],this._entitiesToggle=[],e.forEach((e=>{t.force_dialog||!d.Kk.has((0,u.M)(e.entity))?this._entitiesDialog.push(e):this._entitiesToggle.push(e)})),this._config={hold_action:{action:"more-info"},...t}}},{kind:"method",key:"shouldUpdate",value:function(t){if(!this._config||(0,b.G2)(this,t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(this._config.image_entity&&e.states[this._config.image_entity]!==this.hass.states[this._config.image_entity])return!0;if(this._entitiesDialog)for(const t of this._entitiesDialog)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;if(this._entitiesToggle)for(const t of this._entitiesToggle)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}},{kind:"method",key:"updated",value:function(t){if((0,o.Z)(n,"updated",this,3)([t]),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(0,h.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s.Ld;let t=this._config.image;if(this._config.image_entity){const e=this.hass.states[this._config.image_entity];switch((0,u.M)(this._config.image_entity)){case"image":t=(0,p.U)(e);break;case"person":e.attributes.entity_picture&&(t=e.attributes.entity_picture)}}return s.dy`
      <ha-card>
        <hui-image class=${(0,c.$)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.camera_image||this._config.image_entity)})} @action=${this._handleAction} .actionHandler=${(0,m.K)({hasHold:(0,_._)(this._config.hold_action),hasDoubleClick:(0,_._)(this._config.double_tap_action)})} tabindex=${(0,l.o)((0,_._)(this._config.tap_action)?"0":void 0)} .config=${this._config} .hass=${this.hass} .image=${t} .stateImage=${this._config.state_image} .stateFilter=${this._config.state_filter} .cameraImage=${this._config.camera_image} .cameraView=${this._config.camera_view} .entity=${this._config.entity} .aspectRatio=${this._config.aspect_ratio}></hui-image>
        <div class="box">
          ${this._config.title?s.dy`<div class="title">${this._config.title}</div>`:""}
          <div class="row">
            ${this._entitiesDialog.map((t=>this._renderEntity(t,!0)))}
          </div>
          <div class="row">
            ${this._entitiesToggle.map((t=>this._renderEntity(t,!1)))}
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"_renderEntity",value:function(t,e){const i=this.hass.states[t.entity];return t={tap_action:{action:e?"more-info":"toggle"},hold_action:{action:"more-info"},...t},i?s.dy`
      <div class="wrapper">
        <ha-icon-button @action=${this._handleAction} .actionHandler=${(0,m.K)({hasHold:(0,_._)(t.hold_action),hasDoubleClick:(0,_._)(t.double_tap_action)})} tabindex=${(0,l.o)((0,_._)(t.tap_action)?void 0:"-1")} .disabled=${!(0,_._)(t.tap_action)} .config=${t} class=${(0,c.$)({"state-on":!C.has(i.state)})} title=${`${(0,f.C)(i)} : ${this.hass.formatEntityState(i)}`}>
          <ha-state-icon .icon=${t.icon} .stateObj=${i} .hass=${this.hass}></ha-state-icon>
        </ha-icon-button>

        ${!0!==this._config.show_state&&!0!==t.show_state?s.dy`<div class="state"></div>`:s.dy`
              <div class="state">
                ${t.attribute?s.dy`
                      ${t.prefix}${i.attributes[t.attribute]}${t.suffix}
                    `:this.hass.formatEntityState(i)}
              </div>
            `}
      </div>
    `:s.dy`
        <hui-warning-element .label=${(0,x.i)(this.hass,t.entity)}></hui-warning-element>
      `}},{kind:"method",key:"_handleAction",value:function(t){const e=t.currentTarget.config;(0,v.G)(this,this.hass,e,t.detail.action)}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`.box .title,.state{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ha-picture-card-text-color,#fff)}ha-card{position:relative;min-height:48px;overflow:hidden;height:100%;box-sizing:border-box}hui-image.clickable{cursor:pointer}.box{position:absolute;left:0;right:0;bottom:0;background-color:var(--ha-picture-card-background-color,rgba(0,0,0,.3));padding:4px 8px;display:flex;justify-content:space-between;flex-direction:row}.box .title{font-weight:500;margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;font-size:16px;line-height:40px;align-self:center}ha-state-icon{font-size:0}ha-icon-button{--mdc-icon-button-size:40px;--disabled-text-color:currentColor;color:var(--ha-picture-icon-button-color,#a9a9a9)}ha-icon-button.state-on{color:var(--ha-picture-icon-button-on-color,#fff)}hui-warning-element{padding:0 8px}.state{display:block;font-size:12px;text-align:center;line-height:12px}.row{display:flex;flex-direction:row}.wrapper{display:flex;flex-direction:column;width:40px}`}]}}),s.oi);n()}catch(t){n(t)}}))},48734:function(t,e,i){i.a(t,(async function(t,n){try{i.d(e,{P5:()=>u,Ve:()=>g});var a=i(16485),o=(i(9359),i(70104),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),t([a]));a=(o.then?(await o)():o)[0];const s=new Set,r=new Map;let c,l="ltr",d="en";const h="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(h){const p=new MutationObserver(f);l=document.documentElement.dir||"ltr",d=document.documentElement.lang||navigator.language,p.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function u(...t){t.map((t=>{const e=t.$code.toLowerCase();r.has(e)?r.set(e,Object.assign(Object.assign({},r.get(e)),t)):r.set(e,t),c||(c=t)})),f()}function f(){h&&(l=document.documentElement.dir||"ltr",d=document.documentElement.lang||navigator.language),[...s.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}class g{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||d}`.toLowerCase()}getTranslationData(t){var e,i;const n=new Intl.Locale(t.replace(/_/g,"-")),a=null==n?void 0:n.language.toLowerCase(),o=null!==(i=null===(e=null==n?void 0:n.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:n,language:a,region:o,primary:r.get(`${a}-${o}`),secondary:r.get(a)}}exists(t,e){var i;const{primary:n,secondary:a}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(n&&n[t]||a&&a[t]||e.includeFallback&&c&&c[t])}term(t,...e){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let a;if(i&&i[t])a=i[t];else if(n&&n[t])a=n[t];else{if(!c||!c[t])return console.error(`No translation found for: ${String(t)}`),String(t);a=c[t]}return"function"==typeof a?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}n()}catch(m){n(m)}}))},68783:function(t,e,i){i.a(t,(async function(t,n){try{i.d(e,{A:()=>d});var a=i(64699),o=i(15073),s=i(81048),r=i(31027),c=i(57243),l=t([o]);o=(l.then?(await l)():l)[0];var d=class extends r.P{constructor(){super(...arguments),this.localize=new o.V(this)}render(){return c.dy`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};d.styles=[s.N,a.D],n()}catch(t){n(t)}}))},31027:function(t,e,i){i.d(e,{P:()=>r});i(9359),i(31526);var n,a=i(52812),o=i(57243),s=i(15093),r=class extends o.oi{constructor(){super(),(0,a.Ko)(this,n,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e)}))}emit(t,e){const i=new CustomEvent(t,(0,a.ih)({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const n=customElements.get(t);if(!n){try{customElements.define(t,e,i)}catch(n){customElements.define(t,class extends e{},i)}return}let a=" (unknown version)",o=a;"version"in e&&e.version&&(a=" v"+e.version),"version"in n&&n.version&&(o=" v"+n.version),a&&o&&a===o||console.warn(`Attempted to register <${t}>${a}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,i){(0,a.ac)(this,n)||(this.constructor.elementProperties.forEach(((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])})),(0,a.qx)(this,n,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach(((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)}))}};n=new WeakMap,r.version="2.20.1",r.dependencies={},(0,a.u2)([(0,s.Cb)()],r.prototype,"dir",2),(0,a.u2)([(0,s.Cb)()],r.prototype,"lang",2)},15073:function(t,e,i){i.a(t,(async function(t,n){try{i.d(e,{V:()=>r});var a=i(21262),o=i(48734),s=t([o,a]);[o,a]=s.then?(await s)():s;var r=class extends o.Ve{};(0,o.P5)(a.K),n()}catch(t){n(t)}}))},21262:function(t,e,i){i.a(t,(async function(t,n){try{i.d(e,{K:()=>r});var a=i(48734),o=t([a]);a=(o.then?(await o)():o)[0];var s={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};(0,a.P5)(s);var r=s;n()}catch(t){n(t)}}))},64699:function(t,e,i){i.d(e,{D:()=>n});var n=i(57243).iv`
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
`},52812:function(t,e,i){i.d(e,{EZ:()=>f,Ko:()=>y,ac:()=>m,ih:()=>u,qx:()=>v,u2:()=>g});var n=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=t=>{throw TypeError(t)},h=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,u=(t,e)=>{for(var i in e||(e={}))c.call(e,i)&&h(t,i,e[i]);if(r)for(var i of r(e))l.call(e,i)&&h(t,i,e[i]);return t},f=(t,e)=>a(t,s(e)),g=(t,e,i,a)=>{for(var s,r=a>1?void 0:a?o(e,i):e,c=t.length-1;c>=0;c--)(s=t[c])&&(r=(a?s(e,i,r):s(r))||r);return a&&r&&n(e,i,r),r},p=(t,e,i)=>e.has(t)||d("Cannot "+i),m=(t,e,i)=>(p(t,e,"read from private field"),i?i.call(t):e.get(t)),y=(t,e,i)=>e.has(t)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),v=(t,e,i,n)=>(p(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i)},81048:function(t,e,i){i.d(e,{N:()=>n});var n=i(57243).iv`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`},97677:function(t,e,i){i.a(t,(async function(t,n){try{i.d(e,{Z:()=>a.A});var a=i(68783),o=(i(64699),i(15073)),s=i(21262),r=(i(81048),i(31027),i(52812),t([o,s,a]));[o,s,a]=r.then?(await r)():r,n()}catch(t){n(t)}}))},43580:function(t,e,i){i.d(e,{Z:()=>n.D});var n=i(64699);i(52812)}};
//# sourceMappingURL=99457.ce7d6497213f135f.js.map