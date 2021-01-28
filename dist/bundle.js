(()=>{var e={484:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",s="day",i="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},m={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+f(r,2,"0")+":"+f(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,a),i=n-s<0,o=t.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return{M:a,y:c,w:i,d:s,D:u,h:r,m:n,s:t,ms:e,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",p={};p[g]=h;var $=function(e){return e instanceof w},v=function(e,t,n){var r;if(!e)return g;if("string"==typeof e)p[e]&&(r=e),t&&(p[e]=t,r=e);else{var s=e.name;p[s]=e,r=s}return!n&&r&&(g=r),r||!n&&g},y=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},M=m;M.l=v,M.i=$,M.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=v(e.locale,null,!0),this.parse(e)}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(e,t){var n=y(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return y(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<y(e)},f.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,o){var d=this,l=!!M.u(o)||o,h=M.p(e),f=function(e,t){var n=M.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return l?n:n.endOf(s)},m=function(e,t){return M.w(d.toDate()[e].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},g=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return l?f(1,0):f(31,11);case a:return l?f(1,p):f(0,p+1);case i:var y=this.$locale().weekStart||0,w=(g<y?g+7:g)-y;return f(l?$-w:$+(6-w),p);case s:case u:return m(v+"Hours",0);case r:return m(v+"Minutes",1);case n:return m(v+"Seconds",2);case t:return m(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(i,o){var d,l=M.p(i),h="set"+(this.$u?"UTC":""),f=(d={},d[s]=h+"Date",d[u]=h+"Date",d[a]=h+"Month",d[c]=h+"FullYear",d[r]=h+"Hours",d[n]=h+"Minutes",d[t]=h+"Seconds",d[e]=h+"Milliseconds",d)[l],m=l===s?this.$D+(o-this.$W):o;if(l===a||l===c){var g=this.clone().set(u,1);g.$d[f](m),g.init(),this.$d=g.set(u,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[M.p(e)]()},f.add=function(e,o){var u,d=this;e=Number(e);var l=M.p(o),h=function(t){var n=y(d);return M.w(n.date(n.date()+Math.round(t*e)),d)};if(l===a)return this.set(a,this.$M+e);if(l===c)return this.set(c,this.$y+e);if(l===s)return h(1);if(l===i)return h(7);var f=(u={},u[n]=6e4,u[r]=36e5,u[t]=1e3,u)[l]||1,m=this.$d.getTime()+e*f;return M.w(m,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),s=this.$locale(),i=this.$H,a=this.$m,o=this.$M,c=s.weekdays,u=s.months,d=function(e,r,s,i){return e&&(e[r]||e(t,n))||s[r].substr(0,i)},h=function(e){return M.s(i%12||12,e,"0")},f=s.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(s.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,c,2),ddd:d(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:M.s(i,2,"0"),h:h(1),hh:h(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(e,t){return t||m[e]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(e,u,d){var l,h=M.p(u),f=y(e),m=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,p=M.m(this,f);return p=(l={},l[c]=p/12,l[a]=p,l[o]=p/3,l[i]=(g-m)/6048e5,l[s]=(g-m)/864e5,l[r]=g/36e5,l[n]=g/6e4,l[t]=g/1e3,l)[h]||g,d?p:M.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),D=w.prototype;return y.prototype=D,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W",s],["$M",a],["$y",c],["$D",u]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),y.extend=function(e,t){return e.$i||(e(t,w,y),e.$i=!0),y},y.locale=v,y.isDayjs=$,y.unix=function(e){return y(1e3*e)},y.en=p[g],y.Ls=p,y.p={},y}()}},t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="https://api.rawg.io/api/",t=`${e}games`,r=`${e}platforms`,s="?key=48b91582cb664a68806042763b794757",i={baseUrl:`${t}${s}&page_size=9`,pageNumberUrl:e=>`&page=${e}`,orderedReleased:"&ordering=-released",orderedAdded:"&ordering=-added",dates:(e,t)=>`&dates=${e},${t}`,platformUrl:e=>`&platforms=${e}`};var a=n(484),o=n.n(a);const c=o()().add(1,"day").format("YYYY-MM-DD"),u=o()().add(1,"year").format("YYYY-MM-DD"),d=o()().subtract(50,"year").format("YYYY-MM-DD"),l=o()().format("YYYY-MM-DD"),h=e=>{const{platforms:t}=e;let n=[],r="";const s=["pc","xbox","playstation","switch","ios","android","linux"];return t.forEach((e=>{return t=e.platform.slug,void s.forEach((e=>{t.includes(e)&&n.push(e)}));var t})),n=n.map((e=>"ios"===e||"android"===e?"mobile":e)),n=n.reduce(((e,t)=>(e.includes(t)||e.push(t),e)),[]),n.forEach((e=>{r+=`\n              <img class="platformIcon" src="./src/images/${"ios"===e||"android"===e?"mobile":e}.svg" alt="platform img">\n    `})),r},f=(e,t,n)=>{const{background_image:r,rating:s,rating_top:i,ratings_count:a,genres:o,released:c}=t;e.innerHTML="";let u=[];o.forEach((e=>{u.push(e.name)})),u=u.join(", "),e.innerHTML+=`\n        <div class="text-top-left">\n          <p>${c}</p>\n          <p>${n}</p>\n          <p>${s}/5, ${a} votes</p>\n          <small>Genres: ${u}</small>\n        </div>\n  `},{baseUrl:m,pageNumberUrl:g,orderedReleased:p,platformUrl:$,dates:v}=i,y=document.getElementById("pageContent"),M=async()=>{try{const e=await(async()=>{try{const e=await fetch(r);return(await e.json()).results.map((e=>{const{id:t,name:n,slug:r}=e;return{id:t,name:n,slug:r}}))}catch(e){console.error(e)}})(),n=document.getElementById("welcomeMessage");let i="";e.forEach((e=>{const{id:t,name:n}=e;i+=`\n          <option value="${t}">${n}</option>\n      `}));const a=`\n          <div class="custom-select" style="width:200px;">\n            <select name="platforms" id="platform-select">\n              <option value="" disabled selected hidden>Platform</option>\n              ${i}\n            </select>\n          </div>\n    `;n.insertAdjacentHTML("afterend",a);const o=document.getElementById("platform-select");o.addEventListener("change",(()=>{((e="")=>{const n=async(r=1,i=!0)=>{let a="";const o=`${m}${g(r)}${v(d,l)}${$(e.id)}${p}`;console.log(o);try{const e=await fetch(o),n=await e.json();n.results.forEach((e=>{const{slug:t,background_image:n,name:r,id:s}=e;a+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${n||"../images/no-image.png"}" alt="Game image">\n              </div>\n              <h1><a href="#">${r}</a></h1>\n              <div class="platformsIcons">${h(e)}</div>\n            </div>\n        `})),i?document.querySelector(".page-list").innerHTML=a:document.querySelector(".page-list").innerHTML+=a;for(const e of n.results){const n=`${t}/${e.id}${s}`,r=await fetch(n),i=(await r.json()).developers.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),a=document.getElementById(`picture-zone-${e.slug}`);a.addEventListener("mouseenter",(()=>{f(a,e,i)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${e.background_image}" alt="Game image">`}))}}catch(e){console.error(e)}if(r<3){document.querySelector(".page-list").insertAdjacentHTML("afterend",'<button id="showMoreButton" class="button"><strong>Show more</strong></button>');const e=document.getElementById("showMoreButton");e.addEventListener("click",(()=>{e.remove(),r++,n(r,!1)}))}};y.innerHTML=`\n      <h1>Results for ${e.name}</h1>\n      <span id="welcomeMessage"></span>\n\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    `,M(),n()})(e.filter((e=>e.id==o.value))[0])}))}catch(e){console.error(e)}},{baseUrl:w,pageNumberUrl:D,dates:b,orderedAdded:S}=i,L=document.getElementById("pageContent"),Y={"":()=>{const e=async(n=1,r=!0)=>{let i="";const a=`${w}${D(n)}${b(c,u)}${S}`;try{const e=await fetch(a),n=await e.json();n.results.forEach((e=>{const{slug:t,background_image:n,name:r,id:s}=e;i+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${n||"../images/no-image.png"}" alt="Game image">\n              </div>\n              <h1><a href="#">${r}</a></h1>\n              <div class="platformsIcons">${h(e)}</div>\n            </div>\n        `})),r?document.querySelector(".page-list").innerHTML=i:document.querySelector(".page-list").innerHTML+=i;for(const e of n.results){const n=`${t}/${e.id}${s}`,r=await fetch(n),i=(await r.json()).developers.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),a=document.getElementById(`picture-zone-${e.slug}`);a.addEventListener("mouseenter",(()=>{f(a,e,i)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${e.background_image}" alt="Game image">`}))}}catch(e){console.error(e)}if(n<3){document.querySelector(".page-list").insertAdjacentHTML("afterend",'<button id="showMoreButton" class="button"><strong>Show more</strong></button>');const t=document.getElementById("showMoreButton");t.addEventListener("click",(()=>{t.remove(),n++,e(n,!1)}))}};L.innerHTML='\n      <h1>Welcome,</h1>\n      <span id="welcomeMessage">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</span>\n\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    ',M(),e()},pagelist:(e="")=>{},pagedetail:(e="")=>{console.log("Page Detail",e)}};let _;const H=()=>{let e=window.location.hash.substring(1).split("/");return _=e[1]||"",document.getElementById("pageContent"),Y[e[0]](_),!0};window.addEventListener("hashchange",(()=>H())),window.addEventListener("DOMContentLoaded",(()=>H()))})()})();