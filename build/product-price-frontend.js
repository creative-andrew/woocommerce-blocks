(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[62],{102:function(e,c,t){"use strict";var r=t(12),n=t.n(r),a=t(0),i=t(137),l=t(4),o=t.n(l);t(197);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});c.a=e=>{let{className:c,value:t,currency:r,onValueChange:l,displayType:u="text",...p}=e;const m="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(m))return null;const b=m/10**r.minorUnit;if(!Number.isFinite(b))return null;const d=o()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",c),y={...p,...s(r),value:void 0,currency:void 0,onValueChange:void 0},f=l?e=>{const c=+e.value*10**r.minorUnit;l(c)}:()=>{};return Object(a.createElement)(i.a,n()({className:d,displayType:u},y,{value:b,onValueChange:f}))}},121:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var r=t(45),n=t(18);const a=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(n.a)(e)?e:{}},18:function(e,c,t){"use strict";t.d(c,"a",(function(){return r})),t.d(c,"b",(function(){return n}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function n(e,c){return r(e)&&c in e}},197:function(e,c){},200:function(e,c,t){"use strict";t.d(c,"a",(function(){return n})),t(103);var r=t(48);const n=()=>r.m>1},252:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var r=t(18),n=t(121);const a=e=>{const c=Object(r.a)(e)?e:{},t=Object(n.a)(c.style),a=Object(r.a)(t.typography)?t.typography:{};return{style:{fontSize:c.fontSize?`var(--wp--preset--font-size--${c.fontSize})`:a.fontSize,lineHeight:a.lineHeight,fontWeight:a.fontWeight,textTransform:a.textTransform,fontFamily:c.fontFamily}}}},272:function(e,c,t){"use strict";t.d(c,"a",(function(){return l}));var r=t(114),n=t(200),a=t(18),i=t(121);const l=e=>{if(!Object(n.a)())return{className:"",style:{}};const c=Object(a.a)(e)?e:{},t=Object(i.a)(c.style);return Object(r.__experimentalUseColorProps)({...c,style:t})}},286:function(e,c,t){"use strict";var r=t(0),n=t(1),a=t(102),i=t(4),l=t.n(i),o=t(41);t(287);const s=e=>{let{currency:c,maxPrice:t,minPrice:i,priceClassName:s,priceStyle:u={}}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(n.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(o.formatPrice)(i),Object(o.formatPrice)(t))),Object(r.createElement)("span",{"aria-hidden":!0},Object(r.createElement)(a.a,{className:l()("wc-block-components-product-price__value",s),currency:c,value:i,style:u})," — ",Object(r.createElement)(a.a,{className:l()("wc-block-components-product-price__value",s),currency:c,value:t,style:u})))},u=e=>{let{currency:c,regularPriceClassName:t,regularPriceStyle:i,regularPrice:o,priceClassName:s,priceStyle:u,price:p}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Previous price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:c,renderText:e=>Object(r.createElement)("del",{className:l()("wc-block-components-product-price__regular",t),style:i},e),value:o}),Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:c,renderText:e=>Object(r.createElement)("ins",{className:l()("wc-block-components-product-price__value","is-discounted",s),style:u},e),value:p}))};c.a=e=>{let{align:c,className:t,currency:n,format:i="<price/>",maxPrice:o,minPrice:p,price:m,priceClassName:b,priceStyle:d,regularPrice:y,regularPriceClassName:f,regularPriceStyle:O}=e;const g=l()(t,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+c]:c});i.includes("<price/>")||(i="<price/>",console.error("Price formats need to include the `<price/>` tag."));const j=y&&m!==y;let _=Object(r.createElement)("span",{className:l()("wc-block-components-product-price__value",b)});return j?_=Object(r.createElement)(u,{currency:n,price:m,priceClassName:b,priceStyle:d,regularPrice:y,regularPriceClassName:f,regularPriceStyle:O}):void 0!==p&&void 0!==o?_=Object(r.createElement)(s,{currency:n,maxPrice:o,minPrice:p,priceClassName:b,priceStyle:d}):m&&(_=Object(r.createElement)(a.a,{className:l()("wc-block-components-product-price__value",b),currency:n,value:m,style:d})),Object(r.createElement)("span",{className:g},Object(r.createInterpolateElement)(i,{price:_}))}},287:function(e,c){},402:function(e,c,t){"use strict";t.r(c);var r=t(0),n=t(4),a=t.n(n),i=t(286),l=t(41),o=t(47),s=t(272),u=t(252),p=t(119);c.default=Object(p.withProductDataContext)(e=>{var c,t;const{className:n,textAlign:p}=e,{parentClassName:m}=Object(o.useInnerBlockLayoutContext)(),{product:b}=Object(o.useProductDataContext)(),d=Object(s.a)(e),y=Object(u.a)(e),f=a()("wc-block-components-product-price",n,d.className,{[m+"__product-price"]:m}),O={...y.style,...d.style};if(!b.id)return Object(r.createElement)(i.a,{align:p,className:f});const g=b.prices,j=Object(l.getCurrencyFromPriceResponse)(g),_=g.price!==g.regular_price,v=a()({[m+"__product-price__value"]:m,[m+"__product-price__value--on-sale"]:_});return Object(r.createElement)(i.a,{align:p,className:f,priceStyle:O,regularPriceStyle:O,priceClassName:v,currency:j,price:g.price,minPrice:null==g||null===(c=g.price_range)||void 0===c?void 0:c.min_amount,maxPrice:null==g||null===(t=g.price_range)||void 0===t?void 0:t.max_amount,regularPrice:g.regular_price,regularPriceClassName:a()({[m+"__product-price__regular"]:m})})})}}]);