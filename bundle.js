!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){var n,i,a;i=[],void 0===(a="function"==typeof(n=function(){var t={0:{pattern:/\d/,_default:"0"},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,optional:!0,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/},U:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},L:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},$:{escape:!0}};function e(e,r){for(var n=0,i=r-1,a={escape:!0};i>=0&&a&&a.escape;)n+=(a=t[e.charAt(i)])&&a.escape?1:0,i--;return n>0&&n%2==1}function r(t,e,r,n){return n&&"function"==typeof n.transform&&(e=n.transform(e)),r.reverse?e+t:t+e}function n(t,e,r){var n=t.split("");return n.splice(r,0,e),n.join("")}function i(t,e){this.options=e||{},this.options={reverse:this.options.reverse||!1,usedefaults:this.options.usedefaults||this.options.reverse},this.pattern=t}return i.prototype.process=function(i){if(!i)return{result:"",valid:!1};i+="";var a=this.pattern,o=!0,s="",u=this.options.reverse?i.length-1:0,l=0,c=function(t,e){var r=t.replace(/[^0]/g,"").length;return e.replace(/[^\d]/g,"").length-r}(a,i),p=!1,f=[],d=!1,h={start:this.options.reverse?a.length-1:0,end:this.options.reverse?-1:a.length,inc:this.options.reverse?-1:1};function v(e){if(!d&&!f.length&&function e(r,n,i){var a=r.charAt(n),o=t[a];return""!==a&&(!(!o||o.escape)||e(r,n+i,i))}(a,l,h.inc))return!0;if(!d&&f.length&&function e(r,n,i){var a=r.charAt(n),o=t[a];return""!==a&&(!(!o||!o.recursive)||e(r,n+i,i))}(a,l,h.inc))return!0;if(d||(d=f.length>0),d){var r=f.shift();if(f.push(r),e.reverse&&u>=0)return l++,a=n(a,r,l),!0;if(!e.reverse&&u<i.length)return a=n(a,r,l),!0}return l<a.length&&l>=0}for(l=h.start;v(this.options);l+=h.inc){var g=i.charAt(u),_=a.charAt(l),m=t[_];if(f.length&&m&&!m.recursive&&(m=null),!d||g){if(this.options.reverse&&e(a,l)){s=r(s,_,this.options,m),l+=h.inc;continue}if(!this.options.reverse&&p){s=r(s,_,this.options,m),p=!1;continue}if(!this.options.reverse&&m&&m.escape){p=!0;continue}}if(!d&&m&&m.recursive)f.push(_);else{if(d&&!g){s=r(s,_,this.options,m);continue}if(!d&&f.length>0&&!g)continue}if(m)if(m.optional){if(m.pattern.test(g)&&c)s=r(s,g,this.options,m),u+=h.inc,c--;else if(f.length>0&&g){o=!1;break}}else if(m.pattern.test(g))s=r(s,g,this.options,m),u+=h.inc;else{if(g||!m._default||!this.options.usedefaults){o=!1;break}s=r(s,m._default,this.options,m)}else s=r(s,_,this.options,m),!d&&f.length&&f.push(_)}return{result:s,valid:o}},i.prototype.apply=function(t){return this.process(t).result},i.prototype.validate=function(t){return this.process(t).valid},i.process=function(t,e,r){return new i(e,r).process(t)},i.apply=function(t,e,r){return new i(e,r).apply(t)},i.validate=function(t,e,r){return new i(e,r).validate(t)},i})?n.apply(e,i):n)||(t.exports=a)},function(t,e,r){"use strict";t.exports=function(t){return()=>({restrict:"A",require:"ngModel",link:function(e,r,n,i){i.$formatters.push((function(e){if(i.$isEmpty(e))return e;var r=t.clearValue(e.toString(),n);return t.format(r)})),i.$parsers.push((function(e){if(i.$isEmpty(e))return e;var r=t.clearValue(e.toString(),n),a=t.format(r);return i.$viewValue!==a&&(i.$setViewValue(a),i.$render()),r})),angular.forEach(t.validations,(function(t,e){i.$validators[e]=function(e,r){return i.$isEmpty(e)||t(e,r,n)}}))}})}},function(t,e,r){const{ColombiaValidators:n}=r(7);t.exports=new n},function(t,e,r){r(4)},function(t,e,r){angular.module("colombia.validators",[]).directive("coNit",[r(5)]).directive("coCarPlate",[r(10)]).directive("coPhone",[r(12)])},function(t,e,r){"use strict";const{NineDigitsPattern:n,TenDigitsPattern:i}=r(6),a=r(2),o=r(1);t.exports=o({clearValue:t=>t.replace(/\D/g,""),format:t=>{let e;return e=t.length>9?i.apply(t):n.apply(t),(e||"").trim().replace(/\D$/,"")},validations:{nit:t=>t.length<9||a.NIT.validate(t)}})},function(t,e,r){const n=r(0),i=new n("000.000.000-0"),a=new n("00.000.000-0");t.exports={NineDigitsPattern:a,TenDigitsPattern:i}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ColombiaValidators=void 0;var n=r(8),i=r(9),a=function(){this.NIT=new n.ColombiaNITValidator,this.Plate=new i.ColombiaPlateValidator};e.ColombiaValidators=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ColombiaNITValidator=void 0;var n=function(){function t(){this._regexFormat=/^(\d|\.|\-)+$/,this._regexAdjust=/\D/gi,this._baseMod=11,this._multipliers=[3,7,13,17,19,23,29,37,41,43,47,53,59,67,71]}return t.prototype.validate=function(t){if(!t)return!1;if(!this._regexFormat.test(t))return!1;var e=t.replace(this._regexAdjust,"");if(![9,10].includes(e.length))return!1;for(var r=e.substr(e.length-1),n=e.substr(0,e.length-1).split("").reverse(),i=0,a=0;a<n.length;a++)i+=parseInt(n[a],10)*this._multipliers[a];var o=i%this._baseMod;return o>=2&&(o=this._baseMod-o),o===parseInt(r,10)},t}();e.ColombiaNITValidator=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ColombiaPlateValidator=void 0;var n=function(){function t(){var t=this;this._regexTankTruckPlate=/^\T\d{4}$/i,this._regexTrailerPlate=/^\R\d{5}$/i,this._regexCarPlate=/^[a-zA-Z]{3}\d{3}$/i,this._regexMotorcyclePlate=/^[a-zA-Z]{3}\d{2}[a-zA-Z]?$/i,this._regexTuktukPlate=/^\d{3}[a-zA-Z]{3}$/i,this._regexDiplomaticPlate=/^[a-zA-Z]{2}\d{4}$/i,this._regexArmedForces=/^\d{6}$/i,this._regexCheckContent=/[^A-Za-z0-9\-]/,this._regexAdjust=/[^A-Za-z0-9]/gi,this._adjustContent=function(e){return e?e.replace(t._regexAdjust,""):""},this.validate=function(e){return t.validateTankTruck(e)||t.validateCar(e)||t.validateMotorcycle(e)||t.validateArmedForces(e)||t.validateDiplomatic(e)||t.validateTrailer(e)||t.validateTuktuk(e)}}return t.prototype._generalValidate=function(t,e){return!!t&&(!this._regexCheckContent.test(t)&&this._adjustContent(t).length===e)},t.prototype.validateArmedForces=function(t){if(!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexArmedForces.test(e)},t.prototype.validateDiplomatic=function(t){if(!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexDiplomaticPlate.test(e)},t.prototype.validateTuktuk=function(t){if(!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexTuktukPlate.test(e)},t.prototype.validateTankTruck=function(t){if(!this._generalValidate(t,5))return!1;var e=this._adjustContent(t);return this._regexTankTruckPlate.test(e)},t.prototype.validateTrailer=function(t){if(!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexTrailerPlate.test(e)},t.prototype.validateCar=function(t){if(!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexCarPlate.test(e)},t.prototype.validateMotorcycle=function(t){if(!this._generalValidate(t,5)&&!this._generalValidate(t,6))return!1;var e=this._adjustContent(t);return this._regexMotorcyclePlate.test(e)},t}();e.ColombiaPlateValidator=n},function(t,e,r){"use strict";const{DefaultPattern:n,MotorcylePattern:i,TukTukPattern:a,ArmedForcesPattern:o,TrailerPattern:s,DiplomaticPattern:u,TankTruckPattern:l}=r(11),c=r(2),p=r(1),f=/^[A-Z]{2}\d{1,4}$/,d=/^[A-Z]{3}\d{2}[A-Z]{1}$/,h=/^\d{4,6}$/,v=/^\d{1,3}[A-Z]{0,3}$/,g=/^\R\d{0,5}$/,_=/^\T\d{0,4}$/;t.exports=p({clearValue:t=>t.replace(/[^A-Za-z0-9]/g,"").slice(0,6).toUpperCase(),format:t=>(function(t){return h.test(t)?o:v.test(t)?a:f.test(t)?u:d.test(t)?i:_.test(t)?l:g.test(t)?s:n}(t).apply(t)||"").trim().replace(/[^A-Z0-9]$/,""),validations:{plate:t=>c.Plate.validate(t)}})},function(t,e,r){const n=r(0),i=new n("UUU-000"),a=new n("UUU-00U"),o=new n("000-UUU"),s=new n("00-0000"),u=new n("U-00000"),l=new n("U-0000"),c=new n("UU-0000");t.exports={DefaultPattern:i,MotorcylePattern:a,TukTukPattern:o,ArmedForcesPattern:s,TrailerPattern:u,DiplomaticPattern:c,TankTruckPattern:l}},function(t,e,r){"use strict";const{ShortPattern:n,CompletePattern:i}=r(13),a=r(1);t.exports=a({clearValue:t=>t.replace(/\D/g,""),format:t=>(function(t){return t.length>8?i.apply(t):n.apply(t)}(t)||"").trim().replace(/\D$/,""),validations:{phone:t=>8===t.length||10===t.length}})},function(t,e,r){const n=r(0),i=new n("(0)000-0000"),a=new n("+00 0 000-0000");t.exports={ShortPattern:i,CompletePattern:a}}]);