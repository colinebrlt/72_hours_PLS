(()=>{"use strict";var n,e={"":function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("Home",n)},pagelist:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("Page List",n)},pagedetail:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("Page Detail",n)}},t=function(){var t=window.location.hash.substring(1).split("/");return n=t[1]||"",document.getElementById("pageContent"),e[t[0]](n),!0};window.addEventListener("hashchange",(function(){return t()})),window.addEventListener("DOMContentLoaded",(function(){return t()}))})();