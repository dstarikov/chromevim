"use strict";function H(n){return new Date(+n-6e4*(new Date).getTimezoneOffset()).toJSON().substring(0,19).replace("T"," ")}function j(){p>=65&&M&&(URL.revokeObjectURL(M),M="")}function P(n,e,t){var o,i,r,s,c,a,f,d,g,p,w,S,_,v=e.environment,b=v&&v.platform||"",h=v&&parseFloat(v.extension||0)||0,y=h>parseFloat(l.hn.wc);if(b&&(b=(""+b).substring(0,10)),confirm("You are loading "+(true!==t?"a settings copy":"the recommended settings:")+"\n      * from "+(h>1?"version "+h+" of ":"")+"Vimium C"+(y?" (newer)":"")+"\n      * for "+(b?"the "+(b[0].toUpperCase()+b.substring(1))+" platform":"common platforms")+"\n      * exported "+(n?"at "+H(n):"before")+"\n\nAre you sure you want to continue?")){for(s in null==e.vimSync&&(i=(o=l.ic("vimSync"))&&confirm("Do you want to keep settings synchronized with your current Google account?"),e.vimSync=i||null,o&&console.log("Before importing: You chose to",i?"keep settings synced.":"stop syncing settings.")),r=function(n,e){var t,o,i=[];for(t=2;t<arguments.length;t++)i[t-2]=arguments[t];return o="string"!==typeof(o=i.pop())||o.length<=72?o:o.substring(0,71).trimRight()+"\u2026",console.log.apply(console,["%s %c%s",n,"color:darkred",e].concat(i,[o]))},n>1e4?console.info("IMPORT settings saved at %c%s%c.","color:darkblue",H(n),"color:auto"):console.info("IMPORT settings:",t?"recommended.":"saved before."),delete e.name,delete e.time,delete e.environment,delete e.author,delete e.description,e)"@"===s[0]&&delete e[s];for(c=localStorage,a=l.oc,f=m.vh,d=/\r\n?/g,g=c.length;0<=--g;)(s=c.key(g)).indexOf("|")>=0||s in e||(e[s]=null);for(p in delete e.findModeRawQuery,delete e.findModeRawQueryList,delete e.innerCSS,delete e.findCSS,delete e.omniCSS,delete e.newTabUrl_f,delete e.vomnibarPage_f,e.vimSync!==l.ic("vimSync")&&(r("import","vimSync",e.vimSync),l.uc("vimSync",e.vimSync),f.vimSync.sh()),f)if(S=e[s=(w=f[p]).th],delete e[s],null==S?S=a[s]:("string"===typeof a[s]&&(S instanceof Array&&(S=S.join("\n").trimRight()),S=S.replace(d,"\n")),S=w.rh(S,"object"===typeof a[s])),w.bh(l.ic(s),S)){if(w.eh)continue;w.sh()}else r("import",s,S),l.uc(s,S),s in l.Xa&&m.fh.push(s),w.sh(),w.dh&&w.dh();for(s in e)if(null!=(S=e[s]))"string"===typeof a[s]&&(S instanceof Array&&(S=S.join("\n").trimRight()),S=S.replace(d,"\n")),s in a?l.ic(s)!==S&&(l.uc(s,S),r("update",s,S)):(c.setItem(s,S),r("save",s,S));else{if(s in a){if(S=a[s],l.ic(s)!==S){l.uc(s,S),r("reset",s,S);continue}S=l.ic(s)}else S=c.getItem(s);c.removeItem(s),r("remove",s,":=",S)}return u("#saveOptions").onclick(false),u("#advancedOptionsButton").getAttribute("aria-checked")!==""+l.ic("showAdvancedOptions")&&u("#advancedOptionsButton").onclick(null,true),console.info("IMPORT settings: finished."),(_=window.VDom&&VDom.UI.UI&&VDom.UI.UI.querySelector("#HClose"))&&(_.click(),u("#showCommands").click()),window.VHud?VHud.Kn("Import settings data: OK!",1e3):void 0}window.VHud&&VHud.Kn("You cancelled importing.",1e3)}function F(n,e,t){var i,r,s,u=null,l=null,c="";try{(i=J(t?e:e.replace(/\xa0/g," ")))instanceof Error?l=i:i?u=i:c="No JSON data found!"}catch(n){l=n}if(null!=l&&(c=(r=/^(\d+):(\d+)$/.exec(c=l?(l.message||l)+"":"Error: "+(""!==l?l:"(unknown)")))?"Sorry, Vimium C can not parse the JSON file:\n  an unexpect character at line "+r[1]+", column "+r[2]:c),u&&(n=+new Date(u&&u.time||("object"===typeof n?+n:n))||0,("Vimium C"!==u.name&&"Vimium++"!==u.name||n<1e4&&n>0)&&(c="Sorry, no Vimium C settings data found!",u=null)),c)return alert(c);s=m.vh.keyMappings.oh?1:new Promise(function(n){O("options_checker.js").onload=function(){n(1)}}),Promise.all([o.Utils.ba("Commands"),o.Utils.ba("Exclusions"),s]).then(function(){setTimeout(P,17,n,u,t)})}function J(n){function e(){return/a?/.test("")}function t(n){if(" ".repeat)return" ".repeat(n.length);for(var e="",t=n.length;0<t--;)e+=" ";return e}var o,i,r,s,u,l,c=/[^\r\n]+/g,a=/\b(?:position (\d+)|line (\d+) column (\d+))/,f=/"(?:\\[\\\"]|[^"])*"|'(?:\\[\\\']|[^'])*'|\/\/[^\r\n]*|\/\*[^]*?\*\//g;if(!n||!(n=n.trimRight()))return null;try{return i=JSON.parse(n.replace(f,function(n){var e=n[0];return"/"===e||"#"===e?"/*"===n[0]?n.replace(c,t):t(n):n})),e(),i}catch(n){if(o=a.exec(n+""),e(),!o||!o[0])throw n}return o[2]?(r=+o[2],s=+o[3]):+o[1]>0?(u=n.indexOf("\r")<0?"\n":n.indexOf("\r\n")<0?"\r\n":"\r",s=(l=n.substring(0,+o[1]).split(u))[(r=l.length)-1].length+1):r=s=1,new SyntaxError(r+":"+s)}var M,A;u("#showCommands").onclick=function(n){var e,t,o;if(window.VDom){if(t=VDom.UI.UI,n&&n.preventDefault(),t){if((e=t.querySelector("#HClose"))&&(o=null!=t.querySelector(".HelpCommandName"),T(e),o))return}else;VPort.ii({H:12,b:true,n:true,t:true}),n||setTimeout(function(){var n=VDom.UI.UI&&VDom.UI.UI.querySelector("#HelpDialog");n&&n.querySelector("#HClose").addEventListener("click",function(){location.hash=""})},100)}},x.prototype.Vf=function(n){var e,t,o,i,r,s,u,l;if(!n||!this.Dn){for(t=/^([:^]?[a-z\-?*]+:\/\/)?([^\/]+)(\/.*)?/,r=0,s=e=this.hh();r<s.length;r++)(i=t.exec(o=(u=s[r]).pattern))&&i[1]&&i[2]&&(o=i[3]||"",(i=i[2].split(".")).reverse(),o=i.join(".")+o),u.key=o;e.sort(function(n,e){return n.key<e.key?-1:n.key===e.key?0:1}),this.uh(e),n&&(l=this,this.Dn=setTimeout(function(n,e){n.firstChild.data=e,l.Dn=0},1e3,n,n.firstChild.data),n.firstChild.data="(Sorted)")}},u("#exclusionSortButton").onclick=function(){return m.vh.exclusionRules.Vf(this)},M="",u("#exportButton").onclick=function(n){var e,t,o,i,r,s,u,c,a,f,d,g,m,w,S;for(j(),t=!!n&&(n.ctrlKey||n.metaKey||n.shiftKey),o=new Date,(e=Object.create(null)).name="Vimium C",t||(e["@time"]=o.toLocaleString(),e.time=o.getTime()),e.environment={extension:l.hn.wc,platform:l.hn.Mc},e.environment.chrome=p,i=localStorage,r=l.oc,s=0,u=i.length,c=void 0;s<u;s++)(a=i.key(s)).indexOf("|")>=0||"_f"===a.substring(a.length-2)||"findModeRawQueryList"===a||a.lastIndexOf("CSS")===a.length-3||(f=i.getItem(a),"string"!==typeof r[a]?e[a]=a in r?l.ic(a):f:f.indexOf("\n")>0?(e[a]=c=f.split("\n"),c.push("")):e[a]=f);d=JSON.stringify(e,null,"\t"),g=H(o),"win"===e.environment.platform&&(d=d.replace(/\n/g,"\r\n")),e=null,m="vimium-c_",m+=t?"settings":g.replace(/[\-:]/g,"").replace(" ","_"),m+=".json",w=new Blob([d],{type:"application/json",endings:"native"}),(S=document.createElement("a")).download=m,S.href=URL.createObjectURL(w),T(S),M=S.href,console.info("EXPORT settings to %c%s%c at %c%s%c.","color:darkred",m,"color:auto","color:darkblue",g,"color:auto")},(A=u("#settingsFile")).onclick=null,A.onchange=function(){var n,e,t=this.files[0];this.value="",t&&(n=new FileReader,e=t.lastModified||t.lastModifiedDate||0,n.onload=function(){return F(e,this.result,false)},n.readAsText(t))},(A=u("#importOptions")).onclick=null,A.onchange=function(){if(u("#importButton").focus(),"exported"!==this.value){var n=new XMLHttpRequest;n.open("GET","../settings_template.json",true),n.responseType="text",n.onload=function(){return F(0,this.responseText,true)},n.send()}else T(u("#settingsFile"))},A=null,window.Cf&&(function(){var n,e=window.Cf;delete window.Cf,(n=u(e[0])).onclick&&n.onclick(e[1]),o.Utils.Ga()})();