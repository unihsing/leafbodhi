!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=376)}({376:function(e,r){var t;(t=jQuery)(document).ready((function(){var e="#rank-math-custom-mode-",r=t(e+"form"),n=t(e+"form-initial"),a=t(e+"file-field",r),o=t(e+"submit",r),d=t(e+"import-success",r),i=t(e+"import-fail",r),s=t(e+"import-message",r),l=t(e+"import-progress",r),u=r.siblings(".rank-math-mode-description"),p=t(".form-footer .button"),c=t('input[name="setup_mode"]');c.change((function(){"custom"==t(this).val()?(r.removeClass("hidden"),u.addClass("hidden"),p.addClass("disabled")):(r.addClass("hidden"),u.removeClass("hidden"),p.removeClass("disabled"))})).filter(":checked").change(),o.click((function(e){e.preventDefault();var r=new FormData;r.append("action","rank_math_import_settings"),r.append("security",rankMath.security),r.append("import-me",a[0].files[0]||""),c.prop("disabled",!0),o.prop("disabled",!0),n.addClass("hidden"),i.addClass("hidden"),d.addClass("hidden"),l.removeClass("hidden"),t.ajax({url:rankMath.ajaxurl,type:"POST",enctype:"multipart/form-data",data:r,processData:!1,contentType:!1}).always((function(){c.prop("disabled",!1),l.addClass("hidden"),o.prop("disabled",!1)})).done((function(e){e.success?(d.removeClass("hidden"),p.removeClass("disabled").prop("disabled",!1)):(i.removeClass("hidden"),s.html(""),e.error&&s.text(e.error),n.removeClass("hidden"))}))}))}))}});