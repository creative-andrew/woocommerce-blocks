(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[42],{117:function(e,t,c){"use strict";var a=c(12),n=c.n(a),o=c(0),r=c(148),l=c(4),s=c.n(l);c(214);const i=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:c,currency:a,onValueChange:l,displayType:u="text",...m}=e;const p="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(p))return null;const b=p/10**a.minorUnit;if(!Number.isFinite(b))return null;const d=s()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...m,...i(a),value:void 0,currency:void 0,onValueChange:void 0},x=l?e=>{const t=+e.value*10**a.minorUnit;l(t)}:()=>{};return Object(o.createElement)(r.a,n()({className:d,displayType:u},f,{value:b,onValueChange:x}))}},214:function(e,t){},353:function(e,t){},415:function(e,t,c){"use strict";var a=c(0),n=c(1),o=c(4),r=c.n(o),l=c(117),s=c(10),i=c(38),u=c(2);c(353),t.a=e=>{let{currency:t,values:c,className:o}=e;const m=Object(u.getSetting)("taxesEnabled",!0)&&Object(u.getSetting)("displayCartPricesIncludingTax",!1),{total_price:p,total_tax:b}=c,{receiveCart:d,...f}=Object(i.a)(),x=Object(s.__experimentalApplyCheckoutFilter)({filterName:"totalLabel",defaultValue:Object(n.__)("Total","woo-gutenberg-products-block"),extensions:f.extensions,arg:{cart:f}}),O=parseInt(b,10);return Object(a.createElement)(s.TotalsItem,{className:r()("wc-block-components-totals-footer-item",o),currency:t,label:x,value:parseInt(p,10),description:m&&0!==O&&Object(a.createElement)("p",{className:"wc-block-components-totals-footer-item-tax"},Object(a.createInterpolateElement)(Object(n.__)("Including <TaxAmount/> in taxes","woo-gutenberg-products-block"),{TaxAmount:Object(a.createElement)(l.a,{className:"wc-block-components-totals-footer-item-tax-value",currency:t,value:O})}))})}},496:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(415),o=c(40),r=c(38),l=c(10);const s=()=>{const{extensions:e,receiveCart:t,...c}=Object(r.a)(),n={extensions:e,cart:c,context:"woocommerce/checkout"};return Object(a.createElement)(l.ExperimentalOrderMeta.Slot,n)};t.default=e=>{let{children:t,className:c=""}=e;const{cartTotals:l}=Object(r.a)(),i=Object(o.getCurrencyFromPriceResponse)(l);return Object(a.createElement)("div",{className:c},t,Object(a.createElement)("div",{className:"wc-block-components-totals-wrapper"},Object(a.createElement)(n.a,{currency:i,values:l})),Object(a.createElement)(s,null))}}}]);