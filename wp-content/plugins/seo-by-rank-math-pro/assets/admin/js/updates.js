!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=375)}({13:function(t,e){t.exports=jQuery},375:function(t,e,n){"use strict";n.r(e);var r=n(13);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.n(r)()((function(t){!function(){if(!window.rankMath.canUpdatePro||window.rankMath.betaOptinEnabled){var e=t('input[value="seo-by-rank-math-pro/rank-math-pro.php"]');if(e.length){window.rankMath.canUpdatePro||e.prop("disabled",!0);var n=e.closest("tr").find(".plugin-title > p"),r=n.text();if(-1!==r.indexOf("[[")){var i=r.match(/\[\[.*\]\]/g);if("object"===o(i)&&1===i.length){var a='<div class="rank-math-pro-update-unavailable notice notice-warning" style="margin:15px 0 0;"><p>'+(i=i[0]).substring(2,i.length-2)+"</p></div>";n.html(n.html().replace(i,"")),n.after(a)}}}}}()}))}});