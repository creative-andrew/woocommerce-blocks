(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[74],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(53);var r=n(37);const c=()=>r.n>1},116:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(23),c=n(20);const a=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{}},151:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(66),c=n(115),a=n(20),s=n(116);const o=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalUseBorderProps)({...e,style:n})}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return r(t)&&e in t}},21:function(t,e,n){"use strict";var r=n(0),c=n(6),a=n.n(c);e.a=t=>{let e,{label:n,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=t;const l=null!=n,u=null!=c;return!l&&u?(e=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(r.createElement)(e,o,c)):(e=s||r.Fragment,l&&u&&n!==c?Object(r.createElement)(e,o,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(e,o,n))}},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(66),c=n(115),a=n(20),s=n(116);const o=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(20),c=n(116);const a=t=>{const e=Object(r.a)(t)?t:{},n=Object(c.a)(e.style),a=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:a.fontSize,lineHeight:a.lineHeight,fontWeight:a.fontWeight,fontStyle:a.fontStyle,textTransform:a.textTransform,fontFamily:e.fontFamily}}}},325:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return j}));var r=n(0),c=n(1),a=n(6),s=n.n(a),o=n(21),l=n(52),u=n(151),i=n(285),f=n(289),b=n(327),p=n(137);n(326);const j=t=>{const{className:e,align:n}=t,{parentClassName:a}=Object(l.useInnerBlockLayoutContext)(),{product:p}=Object(l.useProductDataContext)(),j=Object(u.a)(t),O=Object(i.a)(t),d=Object(f.a)(t),y=Object(b.a)(t);if(!p.id||!p.on_sale)return null;const m="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(r.createElement)("div",{className:s()("wc-block-components-product-sale-badge",e,m,{[a+"__product-onsale"]:a},O.className,j.className),style:{...O.style,...j.style,...d.style,...y.style}},Object(r.createElement)(o.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};e.default=Object(p.withProductDataContext)(j)},326:function(t,e){},327:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(66),c=n(115),a=n(20),s=n(116);const o=t=>{if(!Object(c.a)())return{style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},6:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var s=c.apply(null,r);s&&t.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&t.push(o);else t.push(r.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()}}]);