export const __webpack_ids__=["31058"];export const __webpack_modules__={78344:function(t){var e=TypeError;t.exports=function(t){if("string"==typeof t)return t;throw new e("Argument is not a string")}},87265:function(t,e,r){var i=r(61896),n=String,s=TypeError;t.exports=function(t){if(void 0===t||i(t))return t;throw new s(n(t)+" is not an object or undefined")}},87038:function(t,e,r){var i=r(59069),n=TypeError;t.exports=function(t){if("Uint8Array"===i(t))return t;throw new n("Argument is not an Uint8Array")}},15419:function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=e+"+/",i=e+"-_",n=function(t){for(var e={},r=0;r<64;r++)e[t.charAt(r)]=r;return e};t.exports={i2c:r,c2i:n(r),i2cUrl:i,c2iUrl:n(i)}},93474:function(t){var e=TypeError;t.exports=function(t){var r=t&&t.alphabet;if(void 0===r||"base64"===r||"base64url"===r)return r||"base64";throw new e("Incorrect `alphabet` option")}},30338:function(t,e,r){var i=r(97934),n=r(71998),s=r(4576),o=r(36760);t.exports=function(t,e){e&&"string"==typeof t||n(t);var r=o(t);return s(n(void 0!==r?i(r,t):t))}},47057:function(t,e,r){var i=r(1569),n=r(72878),s=r(87265),o=r(78344),a=r(39129),h=r(15419),l=r(93474),d=r(38511),c=h.c2i,u=h.c2iUrl,g=i.SyntaxError,p=i.TypeError,v=n("".charAt),_=function(t,e){for(var r=t.length;e<r;e++){var i=v(t,e);if(" "!==i&&"\t"!==i&&"\n"!==i&&"\f"!==i&&"\r"!==i)break}return e},f=function(t,e,r){var i=t.length;i<4&&(t+=2===i?"AA":"A");var n=(e[v(t,0)]<<18)+(e[v(t,1)]<<12)+(e[v(t,2)]<<6)+e[v(t,3)],s=[n>>16&255,n>>8&255,255&n];if(2===i){if(r&&0!==s[1])throw new g("Extra bits");return[s[0]]}if(3===i){if(r&&0!==s[2])throw new g("Extra bits");return[s[0],s[1]]}return s},y=function(t,e,r){for(var i=e.length,n=0;n<i;n++)t[r+n]=e[n];return r+i};t.exports=function(t,e,r,i){o(t),s(e);var n="base64"===l(e)?c:u,h=e?e.lastChunkHandling:void 0;if(void 0===h&&(h="loose"),"loose"!==h&&"strict"!==h&&"stop-before-partial"!==h)throw new p("Incorrect `lastChunkHandling` option");r&&d(r.buffer);var w=r||[],b=0,m=0,k="",x=0;if(i)for(;;){if((x=_(t,x))===t.length){if(k.length>0){if("stop-before-partial"===h)break;if("loose"!==h)throw new g("Missing padding");if(1===k.length)throw new g("Malformed padding: exactly one additional character");b=y(w,f(k,n,!1),b)}m=t.length;break}var $=v(t,x);if(++x,"="===$){if(k.length<2)throw new g("Padding is too early");if(x=_(t,x),2===k.length){if(x===t.length){if("stop-before-partial"===h)break;throw new g("Malformed padding: only one =")}"="===v(t,x)&&(++x,x=_(t,x))}if(x<t.length)throw new g("Unexpected character after padding");b=y(w,f(k,n,"strict"===h),b),m=t.length;break}if(!a(n,$))throw new g("Unexpected character");var S=i-b;if(1===S&&2===k.length||2===S&&3===k.length)break;if(4===(k+=$).length&&(b=y(w,f(k,n,!1),b),k="",m=x,b===i))break}return{bytes:w,read:m,written:b}}},35303:function(t,e,r){var i=r(1569),n=r(72878),s=i.Uint8Array,o=i.SyntaxError,a=i.parseInt,h=Math.min,l=/[^\da-f]/i,d=n(l.exec),c=n("".slice);t.exports=function(t,e){var r=t.length;if(r%2!=0)throw new o("String should be an even number of characters");for(var i=e?h(e.length,r/2):r/2,n=e||new s(i),u=0,g=0;g<i;){var p=c(t,u,u+=2);if(d(l,p))throw new o("String should only contain hex characters");n[g++]=a(p,16)}return{bytes:n,read:u}}},25677:function(t,e,r){var i=r(40810),n=r(97934),s=r(63983),o=r(71998),a=r(4576),h=r(30338),l=r(79995),d=r(14181),c=r(92288),u=l((function(){for(var t,e,r=this.iterator,i=this.mapper;;){if(e=this.inner)try{if(!(t=o(n(e.next,e.iterator))).done)return t.value;this.inner=null}catch(t){d(r,"throw",t)}if(t=o(n(this.next,r)),this.done=!!t.done)return;try{this.inner=h(i(t.value,this.counter++),!1)}catch(t){d(r,"throw",t)}}}));i({target:"Iterator",proto:!0,real:!0,forced:c},{flatMap:function(t){return o(this),s(t),new u(a(this),{mapper:t,inner:null})}})},21917:function(t,e,r){var i=r(40810),n=r(1569),s=r(47057),o=r(87038);n.Uint8Array&&i({target:"Uint8Array",proto:!0},{setFromBase64:function(t){o(this);var e=s(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}})},56193:function(t,e,r){var i=r(40810),n=r(1569),s=r(78344),o=r(87038),a=r(38511),h=r(35303);n.Uint8Array&&i({target:"Uint8Array",proto:!0},{setFromHex:function(t){o(this),s(t),a(this.buffer);var e=h(t,this).read;return{read:e,written:e/2}}})},25020:function(t,e,r){var i=r(40810),n=r(1569),s=r(72878),o=r(87265),a=r(87038),h=r(38511),l=r(15419),d=r(93474),c=l.i2c,u=l.i2cUrl,g=s("".charAt);n.Uint8Array&&i({target:"Uint8Array",proto:!0},{toBase64:function(){var t=a(this),e=arguments.length?o(arguments[0]):void 0,r="base64"===d(e)?c:u,i=!!e&&!!e.omitPadding;h(this.buffer);for(var n,s="",l=0,p=t.length,v=function(t){return g(r,n>>6*t&63)};l+2<p;l+=3)n=(t[l]<<16)+(t[l+1]<<8)+t[l+2],s+=v(3)+v(2)+v(1)+v(0);return l+2===p?(n=(t[l]<<16)+(t[l+1]<<8),s+=v(3)+v(2)+v(1)+(i?"":"=")):l+1===p&&(n=t[l]<<16,s+=v(3)+v(2)+(i?"":"==")),s}})},86913:function(t,e,r){var i=r(40810),n=r(1569),s=r(72878),o=r(87038),a=r(38511),h=s(1..toString);n.Uint8Array&&i({target:"Uint8Array",proto:!0},{toHex:function(){o(this),a(this.buffer);for(var t="",e=0,r=this.length;e<r;e++){var i=h(this[e],16);t+=1===i.length?"0"+i:i}return t}})},68783:function(t,e,r){r.a(t,(async function(t,i){try{r.d(e,{A:()=>d});var n=r(64699),s=r(15073),o=r(81048),a=r(31027),h=r(57243),l=t([s]);s=(l.then?(await l)():l)[0];var d=class extends a.P{constructor(){super(...arguments),this.localize=new s.V(this)}render(){return h.dy`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};d.styles=[o.N,n.D],i()}catch(t){i(t)}}))},64699:function(t,e,r){r.d(e,{D:()=>i});var i=r(57243).iv`
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
`},97677:function(t,e,r){r.a(t,(async function(t,i){try{r.d(e,{Z:()=>n.A});var n=r(68783),s=(r(64699),r(15073)),o=r(21262),a=(r(81048),r(31027),r(52812),t([s,o,n]));[s,o,n]=a.then?(await a)():a,i()}catch(t){i(t)}}))},43580:function(t,e,r){r.d(e,{Z:()=>i.D});var i=r(64699);r(52812)},89149:function(t,e,r){r(9359),r(31526);var i=r(9065),n=r(57243),s=r(15093);class o extends n.oi{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this.outside=!1,this._scale=1,this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+8*Math.PI)%(2*Math.PI)}_value2angle(t){const e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let r=1;this._angleInside(270)||(r=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let n=1;this._angleInside(180)||(n=Math.max(-t.x,-e.x));let s=1;return this._angleInside(0)||(s=Math.max(t.x,e.x)),{up:r,down:i,left:n,right:s,height:r+i,width:n+s}}_mouse2value(t){const e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,r=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=this._boundaries,s=e-(i.left+n.left*i.width/n.width),o=r-(i.top+n.up*i.height/n.height),a=this._xy2angle(s,o);return this._angle2value(a)}dragStart(t){if(!this._showHandle||this.disabled)return;let e,r=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(r.classList.contains("shadowpath"))if("touchstart"===t.type&&(e=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)r=this.shadowRoot.querySelector("#value");else{const e=this._mouse2value(t);r=Math.abs(e-this.low)<Math.abs(e-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(r.classList.contains("overflow")&&(r=r.nextElementSibling),!r.classList.contains("handle"))return;r.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i="high"===r.id?this.low:this.min,n="low"===r.id?this.high:this.max;this._rotation={handle:r,min:i,max:n,start:this[r.id],type:t.type,cooldown:e},this.dragging=!0}_cleanupRotation(){const t=this._rotation.handle;t.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,t.blur()}dragEnd(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;this._cleanupRotation();let r=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]},bubbles:!0,composed:!0});this.dispatchEvent(r),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;t.preventDefault();const e=this._mouse2value(t);this._dragpos(e)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let r=new CustomEvent("value-changing",{detail:{[e.id]:t},bubbles:!0,composed:!0});this.dispatchEvent(r)}_keyStep(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}updated(t){if(this.shadowRoot.querySelector(".slider")){const t=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(t&&t.strokeWidth){const e=parseFloat(t.strokeWidth);if(e>this.handleSize*this.handleZoom){const t=this._boundaries,r=`\n          ${e/2*Math.abs(t.up)}px\n          ${e/2*Math.abs(t.right)}px\n          ${e/2*Math.abs(t.down)}px\n          ${e/2*Math.abs(t.left)}px`;this.shadowRoot.querySelector("svg").style.margin=r}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=e*this._scale+"px"}));const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),r=Math.max(e.width,e.height);this._scale=2/r}}_renderArc(t,e){const r=e-t,i=this._angle2xy(t),n=this._angle2xy(e+.001);return`\n      M ${i.x} ${i.y}\n      A 1 1,\n        0,\n        ${r>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${n.x} ${n.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),r=this._angle2xy(e),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return n.YP`
      <g class="${t} handle">
        <path id=${t} class="overflow" d="
          M ${r.x} ${r.y}
          L ${r.x+.001} ${r.y+.001}
          " vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="${4*this.handleSize*this._scale}"/>
        <path id=${t} class="handle" d="
          M ${r.x} ${r.y}
          L ${r.x+.001} ${r.y+.001}
          " vector-effect="non-scaling-stroke" stroke-width="${2*this.handleSize*this._scale}" tabindex="0" @focus=${this.dragStart} @blur=${this.dragEnd} role="slider" aria-valuemin=${this.min} aria-valuemax=${this.max} aria-valuenow=${this[t]} aria-disabled=${this.disabled} aria-label=${i||""}/>
        </g>
      `}render(){const t=this._boundaries;return n.dy`
      <svg @mousedown=${this.dragStart} @touchstart=${this.dragStart} xmln="http://www.w3.org/2000/svg" viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}" style="margin:${this.handleSize*this.handleZoom}px" ?disabled=${this.disabled} focusable="false">
        <g class="slider">
          <path class="path" d=${this._renderArc(this._start,this._end)} vector-effect="non-scaling-stroke"/>
          <g class="bar">
            ${null!=this.low&&null!=this.high&&this.outside?n.YP`
          <path class="bar low" vector-effect="non-scaling-stroke" d=${this._renderArc(this._value2angle(this.min),this._value2angle(this.low))}/>
          <path class="bar high" vector-effect="non-scaling-stroke" d=${this._renderArc(this._value2angle(this.high),this._value2angle(this.max))}/>
          `:n.YP`
          <path class="bar" vector-effect="non-scaling-stroke" d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}/>
          `}
          </g>
          <path class="shadowpath" d=${this._renderArc(this._start,this._end)} vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="${3*this.handleSize*this._scale}" stroke-linecap="butt"/>
        </g>

        <g class="handles">
          ${this._showHandle?null!=this.low?this._reverseOrder?n.YP`${this._renderHandle("high")} ${this._renderHandle("low")}`:n.YP`${this._renderHandle("low")} ${this._renderHandle("high")}`:n.YP`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return n.iv`:host{display:inline-block;width:100%}svg{overflow:visible;display:block}path{transition:stroke 1s ease-out,stroke-width .2s ease-out}.slider{fill:none;stroke-width:var(--round-slider-path-width,3);stroke-linecap:var(--round-slider-linecap,round)}.path{stroke:var(--round-slider-path-color,lightgray)}g.bar{stroke:var(--round-slider-bar-color,deepskyblue)}.bar.low{stroke:var(--round-slider-low-bar-color)}.bar.high{stroke:var(--round-slider-high-bar-color)}svg[disabled] .bar,svg[disabled] g.handles{stroke:var(--round-slider-disabled-bar-color,darkgray)}g.handles{stroke:var(--round-slider-handle-color,var(--round-slider-bar-color,deepskyblue));stroke-linecap:round;cursor:var(--round-slider-handle-cursor,pointer)}g.low.handle{stroke:var(--round-slider-low-handle-color)}g.high.handle{stroke:var(--round-slider-high-handle-color)}.handle:focus{outline:unset}`}}(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"value",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"high",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"low",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"min",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"max",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"step",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"startAngle",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"arcLength",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"handleSize",void 0),(0,i.__decorate)([(0,s.Cb)({type:Number})],o.prototype,"handleZoom",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],o.prototype,"readonly",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],o.prototype,"disabled",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],o.prototype,"dragging",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],o.prototype,"rtl",void 0),(0,i.__decorate)([(0,s.Cb)()],o.prototype,"valueLabel",void 0),(0,i.__decorate)([(0,s.Cb)()],o.prototype,"lowLabel",void 0),(0,i.__decorate)([(0,s.Cb)()],o.prototype,"highLabel",void 0),(0,i.__decorate)([(0,s.Cb)({type:Boolean})],o.prototype,"outside",void 0),(0,i.__decorate)([(0,s.SB)()],o.prototype,"_scale",void 0),customElements.define("round-slider",o)}};
//# sourceMappingURL=31058.2e5d3476570ca694.js.map