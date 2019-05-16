"use strict";
/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)
 Released under the MIT license.

 Modified again by Dahan Gong(gdh1995@qq.com), in order to support Vimium C and add functions and operators.

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/var MathParser=(function(){function t(t,i,s,h){this.t=t,this.i=i||0,this.s=s||0,this.h=void 0!==h&&null!==h?h:0}function i(t,i){this.tokens=t,this.ops1=i.ops1,this.ops2=i.ops2,this.functions=i.functions}function s(t,i){for(var s,h=i.split(/\./),r=t;s=h.shift();){if(!(s in r))return false;r=r[s]}return true}function h(t,i){for(var s,h=i.split(/\./),r=t;s=h.shift();)r=r[s];return r}function r(t,i){return Number(t)+Number(i)}function n(t,i){return t-i}function e(t,i){return t*i}function u(t,i){return t/i}function f(t,i){return(0|t)/(0|i)|0}function a(t,i){return t%i}function o(t,i){return""+t+i}function c(t,i){return t===i}function l(t,i){return t!==i}function M(t,i){return t>i}function p(t,i){return t<i}function v(t,i){return t>=i}function w(t,i){return t<=i}function b(t,i){return t&i}function d(t,i){return t|i}function x(t,i){return t^i}function _(t,i){return t<<i}function k(t,i){return t>>i}function g(t,i){return t>>>i}function m(t,i){return t&&i}function E(t,i){return t||i}function y(t){return Math.sinh?Math.sinh(t):(Math.exp(t)-Math.exp(-t))/2}function I(t){return Math.cosh?Math.cosh(t):(Math.exp(t)+Math.exp(-t))/2}function S(t){return Math.tanh?Math.tanh(t):t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function C(t){return Math.asinh?Math.asinh(t):t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function A(t){return Math.acosh?Math.acosh(t):Math.log(t+Math.sqrt(t*t-1))}function L(t){return Math.atanh?Math.atanh(t):Math.log((1+t)/(1-t))/2}function N(t){return Math.log(t)*Math.LOG10E}function O(t){return-t}function P(t){return!t}function j(t){return~t}function q(t){return Math.random()*(t||1)}function F(t){for(var i=t=Math.floor(t);t>1;)i*=--t;return i}function R(t,i,s){return t?i:s}function T(t,i){return"[object Array]"!={}.toString.call(t)?[t,i]:((t=t.slice()).push(i),t)}function MathParser(){this.success=false,this.errormsg="",this.expression="",this.pos=0,this.tokennumber=0,this.tokenprio=0,this.tokenindex=0,this.tmpprio=0,this.ops1={__proto__:null,sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:y,cosh:I,tanh:S,asinh:C,acosh:A,atanh:L,sqrt:Math.sqrt,log:Math.log,lg:N,log10:N,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:z,"-":O,"!":P,"~":j,not:P,exp:Math.exp},this.ops2={__proto__:null,"+":r,"-":n,"*":e,"/":u,":":u,"\\":f,"%":a,"**":Math.pow,"&":b,"|":d,"^":x,"&&":m,"||":E,",":T,";":o,"==":c,"!=":l,"<":p,"<<":_,"<=":w,">":M,">=":v,">>":k,">>>":g,and:m,or:E},this.functions={__proto__:null,random:q,fac:F,min:Math.min,max:Math.max,hypot:B,pyt:B,pow:Math.pow,atan2:Math.atan2,if:R},this.consts={__proto__:null,E:Math.E,PI:Math.PI}}var V,W,z,B,D,G,H,J,K,Q,U,X,Y,Z=0,$=1,tt=2,it=3,st=4;return t.prototype.toString=function(){switch(this.t){case Z:return this.h;case $:case tt:case it:return this.i;case st:return"CALL";default:return"Invalid Token"}},V=/[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,W={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","'":"\\'","\\":"\\\\"},i.prototype={constructor:i,simplify:function(r){var n,e,u,f,a,o,c,l;for(r=r||{},n=[],e=[],a=this.tokens.length,c=0;c<a;c++)if((l=(o=this.tokens[c]).t)===Z)n.push(o);else if(l===it&&s(r,o.i))o=new t(Z,0,0,h(r,o.i)),n.push(o);else if(l===tt&&n.length>1)f=n.pop(),u=n.pop(),o=new t(Z,0,0,(0,this.ops2[o.i])(u.h,f.h)),n.push(o);else if(l===$&&n.length>0)u=n.pop(),o=new t(Z,0,0,(0,this.ops1[o.i])(u.h)),n.push(o);else{for(;n.length>0;)e.push(n.shift());e.push(o)}for(;n.length>0;)e.push(n.shift());return new i(e,this)},substitute:function(s,h){var r,n,e,u,f,a,o;for(h instanceof i||(h=MathParser.singleton.parse(String(h))),r=[],n=this.tokens.length,u=0;u<n;u++)if((e=this.tokens[u]).t===it&&e.i===s)for(f=0;f<h.tokens.length;f++)o=new t((a=h.tokens[f]).t,a.i,a.s,a.h),r.push(o);else r.push(e);return new i(r,this)},evaluate:function(t){var i,r,n,e,u,f,a,o;for(t=t||{},i=[],u=this.tokens.length,a=0;a<u;a++)if((o=(f=this.tokens[a]).t)===Z)i.push(f.h);else if(o===tt)n=i.pop(),r=i.pop(),i.push((e=this.ops2[f.i])(r,n));else if(o===it)if(s(t,f.i))i.push(h(t,f.i));else{if(!s(this.functions,f.i))throw new Error("undefined variable: "+f.i);i.push(h(this.functions,f.i))}else if(o===$)r=i.pop(),i.push((e=this.ops1[f.i])(r));else{if(o!==st)throw new Error("invalid Expression");if(r=i.pop(),!(e=i.pop()).apply||!e.call)throw new Error(e+" is not a function");"[object Array]"=={}.toString.call(r)?i.push(e.apply(void 0,r)):i.push(e.call(void 0,r))}if(i.length>1)throw new Error("invalid Expression (parity)");return i[0]},toString:function(t){var i,s,h,r,n,e,u,f=[],a=this.tokens.length;for(n=0;n<a;n++)if((e=(r=this.tokens[n]).t)===Z)f.push("string"===typeof(u=r.h)?(V.lastIndex=0,V.test(u)?"'"+u.replace(V,function(t){var i=W[t];return"string"===typeof i?i:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+"'":"'"+u+"'"):u);else if(e===tt)s=f.pop(),i=f.pop(),h=r.i,f.push(t&&"^"==h?"Math.pow("+i+","+s+")":"("+i+h+s+")");else if(e===it)f.push(r.i);else if(e===$)i=f.pop(),f.push("-"===(h=r.i)?"("+h+i+")":h+"("+i+")");else{if(e!==st)throw new Error("invalid Expression");i=f.pop(),h=f.pop(),f.push(h+"("+i+")")}if(f.length>1)throw new Error("invalid Expression (parity)");return f[0]},variables:function(){var t,i,s=this.tokens.length,h=[];for(t=0;t<s;t++)(i=this.tokens[t]).t===it&&-1==h.indexOf(i.i)&&h.push(i.i);return h}},z=Math.trunc||function(t){return t<0?Math.ceil(t):Math.floor(t)},B=Math.hypot||function(){var t,i,s=0,h=arguments.length;for(t=0;t<h;t++){if(i=arguments[t],(i*=i)===1/0)return i;s+=i}return Math.sqrt(s)},MathParser.Expression=i,D=1,G=2,H=4,J=8,K=16,Q=32,U=64,X=128,Y=256,MathParser.prototype={constructor:MathParser,parse:function(s){var h,r,n,e,u,f=[],a=[],o=D|J|H|U,c=0;for(this.errormsg="",this.success=true,this.tmpprio=0,this.expression=s,this.pos=0;this.pos<this.expression.length;)this.isOperator()?(this.tokenprio>=60||51===this.tokenprio)&&o&U||3===this.tokenprio&&o&H?("+"!==this.tokenindex&&(c++,this.addfunc(a,f,$)),o=D|J|H|U):this.isComment()||(0===(o&G)&&this.error_parsing(this.pos,"unexpected operator"),c+=2,this.addfunc(a,f,tt),o=D|J|H|U):this.isNumber()?(0===(o&D)&&this.error_parsing(this.pos,"unexpected number"),h=new t(Z,0,0,this.tokennumber),a.push(h),o=G|K|Q):this.isString()?(0===(o&D)&&this.error_parsing(this.pos,"unexpected string"),h=new t(Z,0,0,this.tokennumber),a.push(h),o=G|K|Q):this.isLeftParenth()?(0===(o&J)&&this.error_parsing(this.pos,'unexpected "("'),o&X&&(c+=2,this.tokenprio=-2,this.tokenindex=-1,this.addfunc(a,f,st)),o=D|J|H|U|Y):this.isRightParenth()?(o&Y?(h=new t(Z,0,0,[]),a.push(h)):0===(o&K)&&this.error_parsing(this.pos,'unexpected ")"'),o=G|K|Q|J|X):this.isComma()?(0===(o&Q)&&this.error_parsing(this.pos,'unexpected ","'),this.addfunc(a,f,tt),c+=2,o=D|J|H|U):this.isConst()?(0===(o&D)&&this.error_parsing(this.pos,"unexpected constant"),n=new t(Z,0,0,this.tokennumber),a.push(n),o=G|K|Q):this.isOp1(r=this.getOpStr())?(0===(o&H)&&this.error_parsing(this.pos,"unexpected function"),this.addfunc(a,f,$),c++,o=D|J|H|U):this.isVar(r)?(0===(o&D)&&this.error_parsing(this.pos,"unexpected variable"),e=new t(it,this.tokenindex,0,0),a.push(e),o=G|K|Q|J|X):this.isWhite()||this.error_parsing(this.pos,""===this.errormsg?"unknown character":this.errormsg);for(this.tmpprio<0?this.error_parsing(this.pos,'unmatched "()"'):this.tmpprio>=100&&(this.tmpprio=0,o&Y&&(h=new t(Z,0,0,[]),a.push(h))),c===a.length+f.length&&f.length>0&&f[f.length-1].t===tt&&(f.pop(),c-=2);f.length>0;)u=f.pop(),a.push(u);return c+1!==a.length&&this.error_parsing(this.pos,"parity"),new i(a,this)},evaluate:function(t,i){return this.parse(t).evaluate(i)},error_parsing:function(t,i){throw this.success=false,this.errormsg="parse error [column "+t+"]: "+i,this.column=t,new Error(this.errormsg)},addfunc:function(i,s,h){for(var r=new t(h,this.tokenindex,this.tokenprio+this.tmpprio,0),n=h===$?-1:0;s.length>0&&r.s-s[s.length-1].s<=n;)i.push(s.pop());s.push(r)},isNumber:function(){for(var t,i,s=this.pos,h=false,r=10;s<this.expression.length;s++)if((i=this.expression.charCodeAt(s))>=48&&i<=57);else{if(46!==i){if(69===i||101===i){for(s+=43===(i=this.expression.charCodeAt(s+1))||45===i?1:0,h=true;(i=this.expression.charCodeAt(++s))>=48&&i<=57;);break}if(88===i||120===i){if(s-this.pos!==1||48!==this.expression.charCodeAt(s-1))break;for(r=16;(i=this.expression.charCodeAt(++s))>=48&&i<=57||i>=97&&i<=102||i>=65&&i<=70;);break}break}if(h)return false;h=true}return!(s<=this.pos)&&(t=this.expression.substring(this.pos,s),this.tokennumber=h?parseFloat(t):parseInt(t,10===r&&48===this.expression.charCodeAt(this.pos)?8:r),this.pos=s,true)},unescape:function(t,i){var s,h,r,n=[],e=true;for(s=0;s<t.length;s++)if(h=t.charAt(s),e)"\\"==h?e=false:n.push(h);else{switch(h){case"'":n.push("'");break;case"\\":n.push("\\");break;case"/":n.push("/");break;case"b":n.push("\b");break;case"f":n.push("\f");break;case"n":n.push("\n");break;case"r":n.push("\r");break;case"t":n.push("\t");break;case"u":r=parseInt(t.substring(s+1,s+5),16),n.push(String.fromCharCode(r)),s+=4;break;default:throw this.error_parsing(i+s,"Illegal escape sequence: '\\"+h+"'")}e=true}return n.join("")},isString:function(){var t=false,i="",s=this.pos;if(this.pos<this.expression.length&&"'"==this.expression.charAt(this.pos))for(this.pos++;this.pos<this.expression.length;){if("'"==this.expression.charAt(this.pos)&&"\\"!=i.slice(-1)){this.pos++,this.tokennumber=this.unescape(i,s),t=true;break}i+=this.expression.charAt(this.pos),this.pos++}return t},isConst:function(){var t,i;for(t in this.consts)if(t===this.expression.substr(this.pos,i=t.length))return this.tokennumber=this.consts[t],this.pos+=i,true;return false},isOperator:function(){var t=this.expression.charCodeAt(this.pos);if(111===t){if(114!==this.expression.charCodeAt(this.pos+1))return false;this.pos++,this.tokenprio=1,this.tokenindex="or"}else if(97===t){if(110!==this.expression.charCodeAt(this.pos+1)||100!==this.expression.charCodeAt(this.pos+2))return false;this.pos+=2,this.tokenprio=2,this.tokenindex="and"}else if(110===t){if(111!==this.expression.charCodeAt(this.pos+1)||116!==this.expression.charCodeAt(this.pos+2))return false;this.pos+=2,this.tokenprio=3,this.tokenindex="not"}else if(124===t)124===this.expression.charCodeAt(this.pos+1)?(this.pos++,this.tokenprio=11,this.tokenindex="||"):(this.tokenprio=21,this.tokenindex="|");else if(94===t)this.tokenprio=22,this.tokenindex="^";else if(38===t)38===this.expression.charCodeAt(this.pos+1)?(this.pos++,this.tokenprio=12,this.tokenindex="&&"):(this.tokenprio=23,this.tokenindex="&");else if(61===t){if(61!==this.expression.charCodeAt(this.pos+1))return false;this.pos++,this.tokenprio=31,this.tokenindex="=="}else if(33===t){if(61!==this.expression.charCodeAt(this.pos+1))return false;this.pos++,this.tokenprio=31,this.tokenindex="!="}else if(62===t)61===(t=this.expression.charCodeAt(this.pos+1))?(this.pos++,this.tokenprio=32,this.tokenindex=">="):62!==t?(this.tokenprio=32,this.tokenindex=">"):62===this.expression.charCodeAt(this.pos+2)?(this.pos+=2,this.tokenprio=41,this.tokenindex=">>>"):(this.pos++,this.tokenprio=41,this.tokenindex=">>");else if(60===t)t=this.expression.charCodeAt(this.pos+1),this.pos++,60===t?(this.tokenprio=41,this.tokenindex="<<"):61===t?(this.tokenprio=32,this.tokenindex="<="):62===t?(this.tokenprio=32,this.tokenindex="!="):(this.pos--,this.tokenprio=32,this.tokenindex="<");else if(58===t||65306===t)this.tokenprio=50,this.tokenindex=":";else if(43===t)this.tokenprio=51,this.tokenindex="+";else if(45===t)this.tokenprio=51,this.tokenindex="-";else if(8729===t||8226===t)this.tokenprio=52,this.tokenindex="*";else if(42===t)42===this.expression.charCodeAt(this.pos+1)?(this.pos++,this.tokenprio=53,this.tokenindex="**"):(this.tokenprio=52,this.tokenindex="*");else if(47===t)this.tokenprio=52,this.tokenindex="/";else if(92===t)this.tokenprio=52,this.tokenindex="\\";else if(37===t)this.tokenprio=52,this.tokenindex="%";else if(33===t)this.tokenprio=61,this.tokenindex="!";else{if(126!==t)return false;this.tokenprio=61,this.tokenindex="~"}return this.pos++,true},isLeftParenth:function(){var t=this.expression.charCodeAt(this.pos);return(40===t||65288===t)&&(this.pos++,this.tmpprio+=100,true)},isRightParenth:function(){var t=this.expression.charCodeAt(this.pos);return(41===t||65289===t)&&(this.pos++,this.tmpprio-=100,true)},isComma:function(){var t=this.expression.charCodeAt(this.pos);return(44===t||59===t)&&(this.pos++,this.tokenprio=-1,this.tokenindex=44===t?",":";",true)},isWhite:function(){var t=this.expression.charCodeAt(this.pos);return(32===t||9===t||10===t||13===t)&&(this.pos++,true)},getOpStr:function(){for(var t,i=this.pos,s=this.expression;i<s.length&&(!((t=s.charCodeAt(i))<65||t>122||t>90&&t<97)||!(i===this.pos||95!=t&&(t<48||t>57)));i++);return s.substring(this.pos,i)},isOp1:function(t){return t.length>0&&t in this.ops1&&(this.tokenindex=t,this.tokenprio=61,this.pos+=t.length,true)},isVar:function(t){return t.length>0&&(this.tokenindex=t,this.tokenprio=61,this.pos+=t.length,true)},isComment:function(){return 47===this.expression.charCodeAt(this.pos-1)&&42===this.expression.charCodeAt(this.pos)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),true)}},MathParser.singleton=new MathParser})();