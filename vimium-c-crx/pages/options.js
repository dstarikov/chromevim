"use strict";function O(t){var n=document.createElement("script");return n.src=t,document.head.appendChild(n)}function S(){null==S.info&&(S.info=this.id,O("options_checker.js"))}function B(){function t(){var t,n,e,i=m.vh;for(t in i)"object"===typeof(e=(n=i[t]).zu)&&e&&(n.zu=l.ic(n.th));m.vh.keyMappings.eh||o.Commands||o.Utils.ba("Commands"),m.vh.exclusionRules._s.length>0&&(o.Exclusions||o.Utils.ba("Exclusions"),o.Commands||o.Utils.ba("Commands"))}o.removeEventListener("unload",B),setTimeout(function(){if(o=chrome.extension.getBackgroundPage(),!o)return window.onbeforeunload=null,void window.close();if(l=o.Settings,l){if(o.addEventListener("unload",B),"loading"!==o.document.readyState)return t();o.addEventListener("DOMContentLoaded",function n(){return o.removeEventListener("DOMContentLoaded",n,true),t()},true)}else o=null},100)}function T(t){var n=document.createEvent("MouseEvents");return n.initMouseEvent("click",true,true,window,1,0,0,0,0,false,false,false,false,0,null),t.dispatchEvent(n)}var G,k,C,$,E,N,V,D=document.querySelectorAll.bind(document);m.fh=[],m.prototype.ih=function(t){t.call(this),window.VSettings&&(window.VSettings.cache[this.th]=this.hh())},m.df=function(){var t,n,e=m.vh;for(t in e)if(!(n=e[t]).eh&&!n.ch())return false;for(t in e.vimSync.eh||e.vimSync.lh(),e)e[t].eh||e[t].lh();return true},m.gf=function(){var t,n=m.vh;for(t in n)if(!n[t].eh)return true;return false},m.prototype.bh=function(t,n){return t===n},G=(function(t){function n(e,i){var o,s,r=t.call(this,e,i)||this;return r.oh={min:(o=e.min)&&!isNaN(s=parseFloat(o))?s:null,max:(o=e.max)&&!isNaN(s=parseFloat(o))?s:null,default:l.oc[r.th],ah:n._f},r.Ci.oninput=r.nh,r.Ci.onfocus=r.pf.bind(r),r}return i(n,t),n.prototype.uh=function(t){this.Ci.value=""+t},n.prototype.hh=function(){return parseFloat(this.Ci.value)},n.prototype.pf=function(){var t=this,n=this.Ci,e=function(n){return t.wf(n)},i=function(){n.removeEventListener("wheel",e,{passive:false}),n.removeEventListener("blur",i),t.bf=0};this.bf=0,n.addEventListener("wheel",e,{passive:false}),n.addEventListener("blur",i)},n.prototype.wf=function(t){var n,e,i,o,s,r,u,a;if(t.preventDefault(),n=this.bf,!((e=Date.now())-n<100&&e+99>n&&n>0))return this.bf=e,s=(i=this.Ci).value,"function"===typeof(u=(o=(t.deltaY||t.deltaX)>0)?i.stepUp:i.stepDown)?(u.call(i),r=i.value,i.value=s):(a=(u=parseFloat)(i.step)||1,e=(+i.value||0)+(o?a:-a),isNaN(a=u(i.max))||(e=Math.min(e,a)),isNaN(a=u(i.min))||(e=Math.max(e,a)),r=""+e),this.vf(r,n>0,false)},n._f=function(t){return isNaN(t)&&(t=this.default),t=null!=this.min?Math.max(this.min,t):t,null!=this.max?Math.min(this.max,t):t},n})(m),(k=(function(t){function n(n,e){var i=t.call(this,n,e)||this;return i.Ci.oninput=i.nh,i.Sf=i.Ci.dataset.converter||"",i}return i(n,t),n.prototype.uh=function(t,n){if(t=t.replace(this.Of,"\xa0"),true===n)return this.vf(t,true,true);this.Ci.value=t},n.prototype.hh=function(){var t=this.Ci.value.trim().replace(this.xf," ");return t&&this.Sf&&(t="lower"===this.Sf?t.toLowerCase():"upper"===this.Sf?t.toUpperCase():t),t},n})(m)).prototype.Of=/ /g,k.prototype.xf=/\xa0/g,C=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.hh=function(){var n=t.prototype.hh.call(this);return n||(n=l.oc[this.th],this.uh(n,true)),n},n})(k),k.prototype.vf=G.prototype.vf=function(t,n,e){n&&(this.Bf=true,document.activeElement!==this.Ci&&this.Ci.focus(),document.execCommand("undo")),this.Bf=e,this.Ci.select(),document.execCommand("insertText",false,t),this.Bf=false},$=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.uh=function(n,e){var i=this.Ci instanceof HTMLInputElement,o=JSON.stringify(n,null,i?1:2),s=i?o.replace(/(,?)\n\s*/g,function(t,n){return n?", ":""}):o;t.prototype.uh.call(this,s,e)},n.prototype.hh=function(){var n=t.prototype.hh.call(this),e=null;if(n)try{e=JSON.parse(n)}catch(t){}else e=l.oc[this.th],this.uh(e,true);return e},n})(k),E=(function(t){function n(n,e){var i=t.call(this,n,e)||this;return i.Tf=true,i.Ci.classList.add("masked"),i.uh(i.zu),i.yf=i.Gf.bind(i),i.Ci.addEventListener("focus",i.yf),i}return i(n,t),n.prototype.Gf=function(){this.yf&&(this.Ci.removeEventListener("focus",this.yf),this.Ci.classList.remove("masked"),this.yf=null,this.Tf=false,this.Ci.removeAttribute("placeholder"),this.sh())},n.prototype.uh=function(n,e){this.Tf?this.Ci.placeholder=this.Ci.dataset.mask||"  # Click to unmask the content\u2026":t.prototype.uh.call(this,n,e)},n.prototype.hh=function(){return this.Tf?this.zu:t.prototype.hh.call(this)},n})(k),$.prototype.bh=m.ph,N=(function(t){function n(n,e){var i=t.call(this,n,e)||this;return i.Ci.onchange=i.nh,i}return i(n,t),n.prototype.uh=function(t){this.Ci.checked=t||false,this.Ci.indeterminate=null===t},n.prototype.hh=function(){return this.Ci.indeterminate?null:this.Ci.checked},n})(m),x.prototype.Sh=function(t){var n,e,i,s,r,a;if(this._s.length===t)for(t&&!o.Exclusions&&(o.Utils.ba("Exclusions"),o.Utils.ba("Commands")),e=(n=u("#exclusionToolbar")).querySelectorAll("[data-model]"),n.style.visibility=t?"":"hidden",i=0,s=e.length;i<s;i++)(a=(r=m.vh[e[i].id]).Ci.parentNode.style).visibility=t||r.eh?"":"visible",a.display=!t&&r.eh?"none":""},x.prototype.fl=function(){this.zu.length>0&&(u("#exclusionToolbar").style.visibility="")},k.prototype.kf=function(t,n,e){var i,o,s,r;null!=e||(e=!!t),o=(i=this.Ci).classList,r=(s=i.parentElement).querySelector(".tip"),e?(null==r&&((r=document.createElement("div")).className="tip",s.insertBefore(r,s.querySelector(".nonEmptyTip"))),r.textContent=t,null!==n&&o.add(n||"has-error")):(o.remove("has-error"),o.remove("highlight"),r&&r.remove())},(function(){function t(){this.Bf||((this.eh=this.bh(this.hh(),this.zu))?b&&!m.gf()&&(_.disabled=true,_.firstChild.data="No Changes",w.disabled=false,b=false,window.onbeforeunload=null):b||(window.onbeforeunload=i,b=true,_.disabled=false,_.firstChild.data="Save Changes",w.disabled=true))}function n(t){var n,e,i,o=Object.create(null),s={N:6,d:o};for(n=0,e=t;n<e.length;n++)o[i=e[n]]=l.ic(i);l.fc(s)}function e(t){return t.tabIndex=-1,t.setAttribute("aria-hidden","true")}function i(){return"You have unsaved changes to options."}var s,r,a,f,c,h,d,g,_=u("#saveOptions"),w=u("#exportButton"),b=false;for(_.onclick=function(t){if(false===t||m.df()){var e=m.fh;m.fh=[],this.disabled=true,this.firstChild.data="Saved",w.disabled=false,b=false,window.onbeforeunload=null,0!==e.length&&setTimeout(n,100,e)}},s=D("[data-model]"),a={Number:G,Text:k,NonEmptyText:C,JSON:$,MaskedText:E,Boolean:N,ExclusionRules:x},f=s.length;0<=--f;)c=new(0,a[(r=s[f]).dataset.model])(r,t),m.vh[c.th]=c;for(f=(s=D("[data-check]")).length;0<=--f;)(r=s[f]).addEventListener(r.dataset.check||"input",S);for(h=false,(r=u("#advancedOptionsButton")).onclick=function(t,n){null==n||"hash"===n&&false===l.ic("showAdvancedOptions")?(h=!h,l.uc("showAdvancedOptions",h)):h=l.ic("showAdvancedOptions");var e=u("#advancedOptions");e.previousElementSibling.style.display=e.style.display=h?"":"none",this.firstChild.data=(h?"Hide":"Show")+" Advanced Options",this.setAttribute("aria-checked",""+h)},r.onclick(null,true),document.addEventListener("keydown",function(t){var n,e;if(32===t.keyCode)(e=t.target)instanceof HTMLSpanElement&&e.parentElement instanceof HTMLLabelElement&&t.preventDefault();else{if(!window.VKeyboard)return;(n=191===t.keyCode||63===t.keyCode?"?":"")&&VKeyboard.an(t)===n&&VKeyboard.cn(t,n)===n&&(VEvent.qi()||(console.log('The document receives a "?" key which has been passed (excluded) by Vimium C,',"so open the help dialog."),u("#showCommands").click()))}}),document.addEventListener("keyup",function(t){var n=t.target,e=t.keyCode;if(13===e){if(n instanceof HTMLAnchorElement)n.hasAttribute("href")||setTimeout(function(t){T(t),t.blur()},0,n);else if((t.ctrlKey||t.metaKey)&&(n.blur&&n.blur(),b))return _.onclick()}else{if(32!==e)return;n instanceof HTMLSpanElement&&n.parentElement instanceof HTMLLabelElement&&(t.preventDefault(),T(n.parentElement.control))}}),f=(s=document.getElementsByClassName("nonEmptyTip")).length;0<=--f;)(r=s[f]).className+=" info",r.textContent="Delete all to reset this option.";for(d=function(){var t,n,e=u("#"+this.dataset.autoResize),i=e.scrollHeight,o=e.scrollWidth,s=o-e.clientWidth;i<=e.clientHeight&&s<=0||(t=Math.max(Math.min(innerWidth,1024)-120,550),e.style.maxWidth=o>t?t+"px":"",e.style.height=e.style.width="",n=e.offsetHeight-e.clientHeight,i+=n=(s=o-e.clientWidth)>0?Math.max(26,n):n+18,s>0&&(e.style.width=e.offsetWidth+s+4+"px"),e.style.height=i+"px")},f=(s=D("[data-auto-resize]")).length;0<=--f;)(r=s[f]).onclick=d,r.tabIndex=0,r.textContent="Auto resize",r.setAttribute("role","button");for(d=function(t){var n=this.dataset.delay,e=null;"continue"!==n&&t&&t.preventDefault(),"event"===n&&(e=t||null),window.Cf=["#"+this.id,e],"complete"!==document.readyState?window.addEventListener("load",function t(n){n.target===document&&(window.removeEventListener("load",t),O("options_ext.js"))}):O("options_ext.js")},f=(s=D("[data-delay]")).length;0<=--f;)s[f].onclick=d;for(d=function(t){t.target===this&&(getSelection().selectAllChildren(this),t.preventDefault())},f=(s=D(".sel-all")).length;0<=--f;)s[f].onmousedown=d;if(m.vh.keyMappings.dh=function(){var t=l.Ya.Za;return this.kf(t?(1===t?"There's 1 error.":"There're "+t+" errors")+" found.\nPlease see logs of background page for more details.":"")},m.vh.keyMappings.dh(),m.vh.linkHintCharacters.dh=function(){return this.kf(this.zu.length<3?"Characters for LinkHints are too few.":"")},m.vh.linkHintCharacters.dh(),m.vh.vomnibarPage.dh=function(){var t=this.Ci,n=this.zu,e=!n.lastIndexOf(location.protocol,0)||!n.lastIndexOf("front/",0);if(p<50)return t.style.textDecoration=e?"":"line-through",this.kf(n===l.oc.vomnibarPage?"":"Only extension vomnibar pages can work before Chrome 50.",null);if(n=l.J.vomnibarPage_f||n,e);else{if(-1!==n.lastIndexOf("file://",0))return this.kf("A file page of vomnibar is limited by Chrome to only work on file://* pages.","highlight");if(-1!==n.lastIndexOf("http://",0))return this.kf("A HTTP page of vomnibar is limited by Chrome and doesn't work on HTTPS pages.","highlight")}return this.kf("")},m.vh.vomnibarPage.dh(),(s=D("[data-permission]")).length>0&&(function(t){function n(){var t,n=this.querySelector("[data-permission]");this.onclick=null,n&&(n.placeholder="lacking permission"+((t=n.dataset.permission)?' "'+t+'"':""))}var e,i,o,s,r,u=chrome.runtime.getManifest();for(e=0,i=u.permissions||[];e<i.length;e++)u[o=i[e]]=true;for(s=t.length;0<=--s;)(o=(r=t[s]).dataset.permission)in u||(r.disabled=true,o="This option is disabled for lacking permission"+(o?":\n* "+o:""),r instanceof HTMLInputElement&&"checkbox"===r.type?(r.checked=false,(r=r.parentElement).title=o):(r.value="",r.title=o,r.parentElement.onclick=n))})(s),0===o.Settings.hn.Uc.length)for(f=(s=D(".require-shortcuts")).length;0<=--f;)s[f].remove();for(f=(s=D('[data-model="Boolean"]')).length;0<=--f;)(r=s[f]).disabled||(e(r),e(r.parentElement),(r=r.nextElementSibling).classList.add("checkboxHint"),r.setAttribute("role","button"),r.tabIndex=0,r.setAttribute("aria-hidden","false"));for(f=(s=D("[data-href]")).length;0<=--f;)g=(r=s[f]).dataset.href,g=o.Utils.Yo(g,null,-1),r.removeAttribute("data-href"),r.setAttribute("href",g);r=u("#openExtensionPage"),p<65&&(r.href="chrome://extensions/configureCommands",r.parentElement.insertBefore(document.createTextNode('"Keyboard shortcuts" of '),r)),r.onclick=function(t){return t.preventDefault(),o.Backend.fi({u:this.href,r:1,p:true})}})(),u("#userDefinedCss").addEventListener("input",s(function(){var t,n,e,i,o,s,r,u,a,f,c,h,d,g,_,p,w,b;if(window.VDom){if(t=VDom.UI.UI,n=m.vh.userDefinedCss,e=t&&t.querySelector("style.debugged"))e.nextElementSibling&&t.appendChild(e);else{if(n.eh)return;(e=document.createElement("style")).className="debugged",i=function(){var t=localStorage.getItem("innerCSS"),n=t.indexOf("\n");t=t.substring(n+1,n+1+ +t.substring(0,n).split(",")[2]),VDom.UI.pr(t),VDom.UI.UI.appendChild(e)},t?i():(VDom.UI.Gi(e),e.remove(),setTimeout(i,200))}for(s=(o=n.hh())===n.zu,r=l.hc(o),s?n.Ci.classList.remove("debugging"):n.Ci.classList.add("debugging"),e.textContent=r.ui||"",a=0,f=(u=t?t.querySelectorAll("iframe"):[]).length;a<f;a++)h=(c=u[a]).classList.contains("HUD"),(e=(d=c.contentDocument).querySelector("style.debugged"))||(h?((g=l.hc(l.ic("userDefinedCss")).find||"")&&(_=l.J.pc[1],d.querySelector("style").textContent=_.substring(0,_.length-g.length-1)),(e=d.createElement("style")).type="text/css"):(e=d.querySelector("#custom"))||((e=d.createElement("style")).type="text/css",e.id="custom"),e.classList.add("debugged"),e.parentNode||d.head.appendChild(e)),e.textContent=h?r.find||"":(s?"":"\n.transparent { opacity: 1; }\n")+(r.omni&&r.omni+"\n"||""),p=window.VFind,h&&p.pr&&(w=localStorage.getItem("findCSS"),b=parseInt(w,10),p.pr[2]=p.pr[2].substring(0,b-p.pr[0].length-p.pr[1].length-1)+"\n"+(r.find||""))}},1800,u("#userDefinedCss"),0)),m.vh.userDefinedCss.dh=function(){var t,n;window.VDom&&(t=VDom.UI.UI,(n=t&&t.querySelector("style.debugged"))&&setTimeout(function(){var t,e,i,o,s,r;for(n.remove(),e=0,i=(t=VDom.UI.UI.querySelectorAll("iframe")).length;e<i;e++)s=(o=t[e]).classList.contains("HUD"),(r=o.contentDocument.querySelector("style.debugged"))&&(s?r.remove():r.classList.remove("debugged"));m.vh.userDefinedCss.Ci.classList.remove("debugging")},500))},p<43&&(u("select").style.cssText="font-size: 13px !important;"),u("#importButton").onclick=function(){var t=u("#importOptions");t.onchange?t.onchange(null):T(u("#settingsFile"))},u("#defaultNewTab").textContent=l.oc.newTabUrl,u("#defaultSearchEngine").textContent=l.oc.searchUrl,u("#browserName").textContent=(/\bChrom(e|ium)/.exec(navigator.appVersion)||["Chrome"])[0]+" "+p+", "+l.hn.Mc[0].toUpperCase()+l.hn.Mc.substring(1),window.onhashchange=function(){var t,n,e=location.hash;if((e=e.substring("!"===e[1]?2:1))||m.vh.newTabUrl.zu!==l.hn.Nc||(e="newTabUrl"),e&&!/[^a-z\d_\.]/i.test(e))if(t=u('[data-hash="'+e+'"]')){if(t.onclick)return t.onclick(null,"hash")}else if(t=u("#"+e)){if(t.dataset.model&&t.classList.add("highlight"),n=function(n){if(!n||n.target===window){window.onload&&(window.onload=null,window.scrollTo(0,0));var e=t;window.VDom?VDom.Re(e):(e.scrollIntoViewIfNeeded||e.scrollIntoView).call(e)}},"complete"===document.readyState)return n();window.scrollTo(0,0),window.onload=n}},window.onhashchange(null),window.onunload=function(){o.removeEventListener("unload",B),o.Utils.Ga()},o.addEventListener("unload",B),(V=o.a.il["?"])&&35===V.alias||(function(){var t,n=o.a.il,e="";for(t in n)35===n[t].alias&&(e=e&&e.length<t.length?e:t);e&&(u("#questionShortcut").textContent=e)})(),document.addEventListener("click",function t(){window.VDom&&VDom.UI.UI&&(document.removeEventListener("click",t,true),VDom.UI.UI.addEventListener("click",function(t){var n,e=t.target;if(VPort&&e.classList.contains("HelpCommandName"))return n=e.textContent.slice(1,-1),VPort.ii({H:16,d:n}),VHud.li(n)},true))},true);