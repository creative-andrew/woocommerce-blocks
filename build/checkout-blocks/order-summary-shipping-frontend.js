(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[40],{135:function(e,c,t){"use strict";var a=t(0);t(196),c.a=()=>Object(a.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},136:function(e,c,t){"use strict";var a=t(0),n=t(1),s=t(4),r=t.n(s),o=(t(198),t(135));c.a=e=>{let{children:c,className:t,screenReaderLabel:s,showSpinner:l=!1,isLoading:i=!0}=e;return Object(a.createElement)("div",{className:r()(t,{"wc-block-components-loading-mask":i})},i&&l&&Object(a.createElement)(o.a,null),Object(a.createElement)("div",{className:r()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},c),i&&Object(a.createElement)("span",{className:"screen-reader-text"},s||Object(n.__)("Loading…","woo-gutenberg-products-block")))}},196:function(e,c){},198:function(e,c){},464:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(432),s=t(41),r=t(32),o=t(10);c.default=e=>{let{className:c=""}=e;const{cartTotals:t,cartNeedsShipping:l}=Object(r.a)();if(!l)return null;const i=Object(s.getCurrencyFromPriceResponse)(t);return Object(a.createElement)(o.TotalsWrapper,{className:c},Object(a.createElement)(n.a,{showCalculator:!1,showRateSelector:!1,values:t,currency:i}))}}}]);