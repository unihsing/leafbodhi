!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=372)}({11:function(e,t){e.exports=jQuery},372:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.updateModules()}var t,n,r;return t=e,(n=[{key:"updateModules",value:function(){var e=a()("#module-video-sitemap"),t=a()("#module-news-sitemap"),n=e.is(":checked"),r=t.is(":checked");a()(".rank-math-modules").on("change",(function(){var o=a()(this).val();if("sitemap"===o||"rich-snippet"===o){var i=a()("#module-rich-snippet").is(":checked"),u=a()("#module-sitemap").is(":checked"),c=i&&u;e.attr("disabled",!c),e.next().toggleClass("rank-math-tooltip"),e.attr("checked",c&&n),c&&n?e.parents(".rank-math-box").addClass("active"):e.parents(".rank-math-box").removeClass("active"),"sitemap"===o&&(t.attr("disabled",!u),t.next().toggleClass("rank-math-tooltip"),t.parents(".rank-math-box").toggleClass(r?"active":""),t.attr("checked",u&&r))}}))}}])&&o(t.prototype,n),r&&o(t,r),e}();a()(document).ready((function(){new i}))}});