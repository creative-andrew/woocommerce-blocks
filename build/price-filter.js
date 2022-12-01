this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={18:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([403,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.blocks},102:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(11),i=n(1);n(139),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:l}=e;const s="h"+n;return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+l},Object(i.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-"+l,className:"wc-block-editor-components-title",value:a,onChange:o}))})},103:function(e,t,n){"use strict";var r=n(0);n(140),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(9),c=n(7),o=n(0),i=n(40),a=n(142);const l=e=>{const{namespace:t,resourceName:n,resourceValues:l=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(s),d=Object(i.a)(l),m=Object(a.a)(),f=Object(c.useSelect)(e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,p,u]);return null!==f&&(b.current=f),b.current}},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.React},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),c=n(1),o=n(10),i=n(7),a=n(3),l=n(5);const s=e=>{let{clientId:t,setAttributes:n,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(i.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(i.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(r.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(c.__)("Upgrade block","woo-gutenberg-products-block"))];return Object(r.createElement)(l.Warning,{actions:m},Object(c.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)({}),o=()=>{const{wrapper:e}=Object(r.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},13:function(e,t){e.exports=window.wp.primitives},137:function(e,t){},139:function(e,t){},140:function(e,t){},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},155:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(29);n(197),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(a.a,{label:n,screenReaderLabel:l}))}},156:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(29);n(198),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:s,screenReaderLabel:u=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(r.createElement)(a.a,{label:l,screenReaderLabel:u}))}},16:function(e,t){e.exports=window.wp.url},197:function(e,t){},198:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"b",(function(){return _}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),w=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{})},241:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(16),c=n(2),o=n(125);const i=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function s(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.wc.priceFormat},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(259),o=n(8),i=n(40),a=n(35),l=n(52),s=n(108),u=n(44);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:d}=e,m=Object(u.a)();m+="-collection-data";const[f]=Object(l.a)(m),[g,O]=Object(l.b)("calculate_attribute_counts",[],m),[w,_]=Object(l.b)("calculate_price_range",null,m),[j,h]=Object(l.b)("calculate_stock_status_counts",null,m),[k,y]=Object(l.b)("calculate_rating_counts",null,m),v=Object(i.a)(t||{}),E=Object(i.a)(n),x=Object(i.a)(b),S=Object(i.a)(p);Object(r.useEffect)(()=>{"object"==typeof v&&Object.keys(v).length&&(g.find(e=>Object(a.b)(v,"taxonomy")&&e.taxonomy===v.taxonomy)||O([...g,v]))},[v,g,O]),Object(r.useEffect)(()=>{w!==E&&void 0!==E&&_(E)},[E,_,w]),Object(r.useEffect)(()=>{j!==x&&void 0!==x&&h(x)},[x,h,j]),Object(r.useEffect)(()=>{k!==S&&void 0!==S&&y(S)},[S,y,k]);const[C,N]=Object(r.useState)(!1),[F]=Object(c.a)(C,200);C||N(!0);const T=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(f),[f]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...T},shouldSelect:F})}},29:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:a={}}=e;const l=null!=n,s=null!=c;return!l&&s?(t=i||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=i||r.Fragment,l&&s&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},3:function(e,t){e.exports=window.wp.components},309:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},38:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(131),a=n(4),l=n.n(a);n(137);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:a,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**r.minorUnit;if(!Number.isFinite(d))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(r),value:void 0,currency:void 0,onValueChange:void 0},g=a?e=>{const t=+e.value*10**r.minorUnit;a(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(25),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},403:function(e,t,n){e.exports=n(484)},404:function(e,t){},405:function(e,t){},406:function(e,t){},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},484:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(1),a=n(10),l=n(4),s=n.n(l),u=n(118),b=n(540),p=n(5),d=n(2),m=n(22),f=n(102),g=n(258),O=n(3),w=n(104),_=n(52),j=n(279),h=n(38),k=n(35),y=n(117);n(406);const v=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const a=e=>Number.isFinite(e);return a(o)||(o=t||0),a(i)||(i=n||r),a(t)&&t>o&&(o=t),a(n)&&n<=o&&(o=n-r),a(t)&&t>=i&&(i=t+r),a(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var E=n(156);const x=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},S=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var C=n(155),N=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:c,onChange:a,step:l,currency:u,showInputFields:b=!0,showFilterButton:p=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:f=!1,onSubmit:g=(()=>{})}=e;const O=Object(o.useRef)(null),w=Object(o.useRef)(null),_=l||10**u.minorUnit,[j,N]=Object(o.useState)(t),[F,T]=Object(o.useState)(n),R=Object(o.useRef)(null),[P,U]=Object(o.useState)(0);Object(o.useEffect)(()=>{N(t)},[t]),Object(o.useEffect)(()=>{T(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;d&&R.current&&U(null===(e=R.current)||void 0===e?void 0:e.offsetWidth)},[d,U]);const B=Object(o.useMemo)(()=>isFinite(r)&&isFinite(c),[r,c]),A=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&B?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,c,B]),L=Object(o.useCallback)(e=>{if(m||!B||!O.current||!w.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=O.current.offsetWidth,o=+O.current.value,i=w.current.offsetWidth,a=+w.current.value,l=r*(o/c),s=i*(a/c);Math.abs(n-l)>Math.abs(n-s)?(O.current.style.zIndex="20",w.current.style.zIndex="21"):(O.current.style.zIndex="21",w.current.style.zIndex="20")},[m,c,B]),I=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,l=o?[Math.round(i/_)*_,n]:[t,Math.round(i/_)*_],s=v(l,r,c,_,o);a(s)},[a,t,n,r,c,_]),M=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(j>=F){const e=v([0,F],null,null,_,t);return a([parseInt(e[0],10),parseInt(e[1],10)])}const n=v([j,F],null,null,_,t);a(n)},[a,_,j,F]),V=Object(y.a)(g,600),q=s()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",!B&&"is-disabled",(d||P<=300)&&"wc-block-components-price-slider--is-input-inline"),D=Object(k.a)(O.current)?O.current.ownerDocument.activeElement:void 0,G=D&&D===O.current?_:1,W=D&&D===w.current?_:1,Q=String(j/10**u.minorUnit),Y=String(F/10**u.minorUnit),K=d&&P>300,z=Object(o.createElement)("div",{className:s()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&f}),onMouseMove:L,onFocus:L},B&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:A}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),"aria-valuetext":Q,value:Number.isFinite(t)?t:r,onChange:I,step:G,min:r,max:c,ref:O,disabled:m&&!B,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),"aria-valuetext":Y,value:Number.isFinite(n)?n:c,onChange:I,step:W,min:r,max:c,ref:w,disabled:m,tabIndex:b?-1:0})));return Object(o.createElement)("div",{className:q,ref:R},(!K||!b)&&z,b&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),allowNegative:!1,isLoading:m,isAllowed:S({minConstraint:r,minorUnit:u.minorUnit,currentMaxValue:F}),onValueChange:e=>{e!==j&&N(e)},onBlur:M,disabled:m||!B,value:j}),K&&z,f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),isLoading:m,isAllowed:x({maxConstraint:c,minorUnit:u.minorUnit}),onValueChange:e=>{e!==F&&T(e)},onBlur:M,disabled:m||!B,value:F})),!b&&!f&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(h.a,{currency:u,value:t}),Object(o.createElement)(h.a,{currency:u,value:n})),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},!f&&(t!==r||n!==c)&&Object(o.createElement)(C.a,{onClick:()=>{a([r,c]),V()},screenReaderLabel:Object(i.__)("Reset price filter","woo-gutenberg-products-block")}),p&&Object(o.createElement)(E.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:f,disabled:m||!B,onClick:g,screenReaderLabel:Object(i.__)("Apply price filter","woo-gutenberg-products-block")})))},F=n(103),T=n(26),R=n(16),P=n(241),U=n(125),B=n(96);const A=(e,t,n)=>{const r=10*10**t;let c=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?c=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(o/r)*r));const i=Object(w.a)(c,Number.isFinite);return Number.isFinite(c)?c:i};n(405);var L=n(124);function I(e,t){return Number(e)*10**t}var M=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(L.a)(),c=Object(d.getSettingWithCoercion)("has_filterable_products",!1,U.a),i=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),[a,l]=Object(o.useState)(!1),s=Object(P.d)("min_price"),u=Object(P.d)("max_price"),[b]=Object(_.a)(),{results:p,isLoading:m}=Object(j.a)({queryPrices:!0,queryState:b}),f=Object(T.getCurrencyFromPriceResponse)(Object(k.b)(p,"price_range")?p.price_range:void 0),[g,O]=Object(_.b)("min_price"),[h,v]=Object(_.b)("max_price"),[E,x]=Object(o.useState)(I(s,f.minorUnit)||null),[S,C]=Object(o.useState)(I(u,f.minorUnit)||null),{minConstraint:M,maxConstraint:V}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:A(t||"",r,"ROUND_DOWN"),maxConstraint:A(n||"",r,"ROUND_UP")}})({minPrice:Object(k.b)(p,"price_range")&&Object(k.b)(p.price_range,"min_price")&&Object(B.a)(p.price_range.min_price)?p.price_range.min_price:void 0,maxPrice:Object(k.b)(p,"price_range")&&Object(k.b)(p.price_range,"max_price")&&Object(B.a)(p.price_range.max_price)?p.price_range.max_price:void 0,minorUnit:f.minorUnit});Object(o.useEffect)(()=>{a||(O(I(s,f.minorUnit)),v(I(u,f.minorUnit)),l(!0))},[f.minorUnit,a,u,s,v,O]);const[q,D]=Object(o.useState)(m),G=Object(o.useCallback)((e,t)=>{const n=t>=Number(V)?void 0:t,r=e<=Number(M)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**f.minorUnit,max_price:n/10**f.minorUnit});window.location.href!==e&&Object(P.c)(e)}O(r),v(n)},[M,V,O,v,f.minorUnit]),W=Object(y.a)(G,500),Q=Object(o.useCallback)(e=>{D(!0),e[0]!==E&&x(e[0]),e[1]!==S&&C(e[1]),i&&a&&!t.showFilterButton&&W(e[0],e[1])},[E,S,x,C,i,a,W,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||i||W(E,S)},[E,S,t.showFilterButton,W,i]);const Y=Object(w.a)(g),K=Object(w.a)(h),z=Object(w.a)(M),J=Object(w.a)(V);if(Object(o.useEffect)(()=>{(!Number.isFinite(E)||g!==Y&&g!==E||M!==z&&M!==E)&&x(Number.isFinite(g)?g:M),(!Number.isFinite(S)||h!==K&&h!==S||V!==J&&V!==S)&&C(Number.isFinite(h)?h:V)},[E,S,g,h,M,V,z,J,Y,K]),!c)return r(!1),null;if(!m&&(null===M||null===V||M===V))return r(!1),null;const X="h"+t.headingLevel;r(!0),!m&&q&&D(!1);const $=Object(o.createElement)(X,{className:"wc-block-price-filter__title"},t.heading),H=m&&q?Object(o.createElement)(F.a,null,$):$;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&H,Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:M,maxConstraint:V,minPrice:E,maxPrice:S,currency:f,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Q,onSubmit:()=>G(E,S),isLoading:m,isUpdating:q})))},V=(n(404),n(123)),q=n(309);const D={heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")}};Object(a.registerBlockType)(q,{icon:{src:Object(o.createElement)(u.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})},attributes:{...q.attributes,...D},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:n}=e;return"woocommerce_price_filter"===t&&!(null==n||!n.raw)},transform:e=>{var t;let{instance:n}=e;return Object(a.createBlock)("woocommerce/price-filter",{showInputFields:!1,showFilterButton:!0,heading:(null==n||null===(t=n.raw)||void 0===t?void 0:t.title)||Object(i.__)("Filter by price","woo-gutenberg-products-block"),headingLevel:3,inlineInput:!1})}}]},edit:function(e){let{attributes:t,setAttributes:n,clientId:r}=e;const{heading:c,headingLevel:a,showInputFields:l,inlineInput:s,showFilterButton:w}=t,_=Object(p.useBlockProps)();return Object(o.createElement)("div",_,0===m.o.productCount?Object(o.createElement)(O.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(u.a,{icon:b.a}),label:Object(i.__)("Filter by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("To filter your products by price you first need to assign prices to your products.","woo-gutenberg-products-block")),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(u.a,{icon:g.a})),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(O.PanelBody,{title:Object(i.__)("Settings","woo-gutenberg-products-block")},Object(o.createElement)(O.__experimentalToggleGroupControl,{label:Object(i.__)("Price Range Selector","woo-gutenberg-products-block"),value:l?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"editable",label:Object(i.__)("Editable","woo-gutenberg-products-block")}),Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"text",label:Object(i.__)("Text","woo-gutenberg-products-block")})),l&&Object(o.createElement)(O.ToggleControl,{label:Object(i.__)("Inline input fields","woo-gutenberg-products-block"),checked:s,onChange:()=>n({inlineInput:!s}),help:Object(i.__)("Show input fields inline with the slider.","woo-gutenberg-products-block")}),Object(o.createElement)(O.ToggleControl,{label:Object(i.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:w?Object(i.__)("Products will only update when the button is clicked.","woo-gutenberg-products-block"):Object(i.__)("Products will update when the slider is moved.","woo-gutenberg-products-block"),checked:w,onChange:()=>n({showFilterButton:!w})}))),Object(o.createElement)(V.a,{attributes:t,clientId:r,setAttributes:n,filterType:"price-filter"}),c&&Object(o.createElement)(f.a,{className:"wc-block-price-filter__title",headingLevel:a,heading:c,onChange:e=>n({heading:e})}),Object(o.createElement)(O.Disabled,null,Object(o.createElement)(M,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:a,headingLevel:l}=t,u={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":a,"data-heading-level":l};return Object(o.createElement)("div",c()({},p.useBlockProps.save({className:s()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(9),c=n(7),o=n(0),i=n(25),a=n.n(i),l=n(40),s=n(104),u=n(44);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(n,e,t)},[n,e,l])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),i=Object(l.a)(r),p=Object(l.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},9:function(e,t){e.exports=window.wc.wcBlocksData},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e}});