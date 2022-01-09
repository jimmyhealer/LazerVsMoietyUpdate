function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequire94c2;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequire94c2=i),i.register("5WhQr",(function(t,e){
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
!function(e,n){"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:t.exports,(function(t,e){var n=[],r=Object.getPrototypeOf,i=n.slice,s=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},o=n.push,a=n.indexOf,u={},c=u.toString,l=u.hasOwnProperty,h=l.toString,f=h.call(Object),d={},p=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item},g=function(t){return null!=t&&t===t.window},m=t.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function v(t,e,n){var r,i,s=(n=n||m).createElement("script");if(s.text=t,e)for(r in y)(i=e[r]||e.getAttribute&&e.getAttribute(r))&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function w(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?u[c.call(t)]||"object":typeof t}var b="3.6.0",T=function(t,e){return new T.fn.init(t,e)};function E(t){var e=!!t&&"length"in t&&t.length,n=w(t);return!p(t)&&!g(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}T.fn=T.prototype={jquery:b,constructor:T,length:0,toArray:function(){return i.call(this)},get:function(t){return null==t?i.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=T.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return T.each(this,t)},map:function(t){return this.pushStack(T.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var t,e,n,r,i,s,o=arguments[0]||{},a=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||p(o)||(o={}),a===u&&(o=this,a--);a<u;a++)if(null!=(t=arguments[a]))for(e in t)r=t[e],"__proto__"!==e&&o!==r&&(c&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[e],s=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,o[e]=T.extend(c,s,r)):void 0!==r&&(o[e]=r));return o},T.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==c.call(t))&&(!(e=r(t))||"function"==typeof(n=l.call(e,"constructor")&&e.constructor)&&h.call(n)===f)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){v(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,r=0;if(E(t))for(n=t.length;r<n&&!1!==e.call(t[r],r,t[r]);r++);else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(E(Object(t))?T.merge(n,"string"==typeof t?[t]:t):o.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:a.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r=[],i=0,s=t.length,o=!n;i<s;i++)!e(t[i],i)!==o&&r.push(t[i]);return r},map:function(t,e,n){var r,i,o=0,a=[];if(E(t))for(r=t.length;o<r;o++)null!=(i=e(t[o],o,n))&&a.push(i);else for(o in t)null!=(i=e(t[o],o,n))&&a.push(i);return s(a)},guid:1,support:d}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){u["[object "+e+"]"]=e.toLowerCase()}));var C=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(t){var e,n,r,i,s,o,a,u,c,l,h,f,d,p,g,m,y,v,w,b="sizzle"+1*new Date,T=t.document,E=0,C=0,x=ut(),S=ut(),A=ut(),I=ut(),N=function(t,e){return t===e&&(h=!0),0},D={}.hasOwnProperty,k=[],L=k.pop,R=k.push,_=k.push,O=k.slice,P=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",j="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q="\\[[\\x20\\t\\r\\n\\f]*("+j+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+j+"))|)"+F+"*\\]",V=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",U=new RegExp(F+"+","g"),H=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),B=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),$=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),z=new RegExp(F+"|>"),W=new RegExp(V),K=new RegExp("^"+j+"$"),G={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+V),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),nt=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},rt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,it=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},st=function(){f()},ot=bt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{_.apply(k=O.call(T.childNodes),T.childNodes),k[T.childNodes.length].nodeType}catch(t){_={apply:k.length?function(t,e){R.apply(t,O.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}function at(t,e,r,i){var s,a,c,l,h,p,y,v=e&&e.ownerDocument,T=e?e.nodeType:9;if(r=r||[],"string"!=typeof t||!t||1!==T&&9!==T&&11!==T)return r;if(!i&&(f(e),e=e||d,g)){if(11!==T&&(h=Z.exec(t)))if(s=h[1]){if(9===T){if(!(c=e.getElementById(s)))return r;if(c.id===s)return r.push(c),r}else if(v&&(c=v.getElementById(s))&&w(e,c)&&c.id===s)return r.push(c),r}else{if(h[2])return _.apply(r,e.getElementsByTagName(t)),r;if((s=h[3])&&n.getElementsByClassName&&e.getElementsByClassName)return _.apply(r,e.getElementsByClassName(s)),r}if(n.qsa&&!I[t+" "]&&(!m||!m.test(t))&&(1!==T||"object"!==e.nodeName.toLowerCase())){if(y=t,v=e,1===T&&(z.test(t)||$.test(t))){for((v=tt.test(t)&&yt(e.parentNode)||e)===e&&n.scope||((l=e.getAttribute("id"))?l=l.replace(rt,it):e.setAttribute("id",l=b)),a=(p=o(t)).length;a--;)p[a]=(l?"#"+l:":scope")+" "+wt(p[a]);y=p.join(",")}try{return _.apply(r,v.querySelectorAll(y)),r}catch(e){I(t,!0)}finally{l===b&&e.removeAttribute("id")}}}return u(t.replace(H,"$1"),e,r,i)}function ut(){var t=[];return function e(n,i){return t.push(n+" ")>r.cacheLength&&delete e[t.shift()],e[n+" "]=i}}function ct(t){return t[b]=!0,t}function lt(t){var e=d.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ht(t,e){for(var n=t.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=e}function ft(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function dt(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function gt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ot(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function mt(t){return ct((function(e){return e=+e,ct((function(n,r){for(var i,s=t([],n.length,e),o=s.length;o--;)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function yt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in n=at.support={},s=at.isXML=function(t){var e=t&&t.namespaceURI,n=t&&(t.ownerDocument||t).documentElement;return!X.test(e||n&&n.nodeName||"HTML")},f=at.setDocument=function(t){var e,i,o=t?t.ownerDocument||t:T;return o!=d&&9===o.nodeType&&o.documentElement?(p=(d=o).documentElement,g=!s(d),T!=d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",st,!1):i.attachEvent&&i.attachEvent("onunload",st)),n.scope=lt((function(t){return p.appendChild(t).appendChild(d.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),n.attributes=lt((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=lt((function(t){return t.appendChild(d.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(d.getElementsByClassName),n.getById=lt((function(t){return p.appendChild(t).id=b,!d.getElementsByName||!d.getElementsByName(b).length})),n.getById?(r.filter.ID=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var n=e.getElementById(t);return n?[n]:[]}}):(r.filter.ID=function(t){var e=t.replace(et,nt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var n,r,i,s=e.getElementById(t);if(s){if((n=s.getAttributeNode("id"))&&n.value===t)return[s];for(i=e.getElementsByName(t),r=0;s=i[r++];)if((n=s.getAttributeNode("id"))&&n.value===t)return[s]}return[]}}),r.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,s=e.getElementsByTagName(t);if("*"===t){for(;n=s[i++];)1===n.nodeType&&r.push(n);return r}return s},r.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&g)return e.getElementsByClassName(t)},y=[],m=[],(n.qsa=J.test(d.querySelectorAll))&&(lt((function(t){var e;p.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+M+")"),t.querySelectorAll("[id~="+b+"-]").length||m.push("~="),(e=d.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),t.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),lt((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=d.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=J.test(v=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt((function(t){n.disconnectedMatch=v.call(t,"*"),v.call(t,"[s!='']:x"),y.push("!=",V)})),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),e=J.test(p.compareDocumentPosition),w=e||J.test(p.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},N=e?function(t,e){if(t===e)return h=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r||(1&(r=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===r?t==d||t.ownerDocument==T&&w(T,t)?-1:e==d||e.ownerDocument==T&&w(T,e)?1:l?P(l,t)-P(l,e):0:4&r?-1:1)}:function(t,e){if(t===e)return h=!0,0;var n,r=0,i=t.parentNode,s=e.parentNode,o=[t],a=[e];if(!i||!s)return t==d?-1:e==d?1:i?-1:s?1:l?P(l,t)-P(l,e):0;if(i===s)return ft(t,e);for(n=t;n=n.parentNode;)o.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);for(;o[r]===a[r];)r++;return r?ft(o[r],a[r]):o[r]==T?-1:a[r]==T?1:0},d):d},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if(f(t),n.matchesSelector&&g&&!I[e+" "]&&(!y||!y.test(e))&&(!m||!m.test(e)))try{var r=v.call(t,e);if(r||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(t){I(e,!0)}return at(e,d,null,[t]).length>0},at.contains=function(t,e){return(t.ownerDocument||t)!=d&&f(t),w(t,e)},at.attr=function(t,e){(t.ownerDocument||t)!=d&&f(t);var i=r.attrHandle[e.toLowerCase()],s=i&&D.call(r.attrHandle,e.toLowerCase())?i(t,e,!g):void 0;return void 0!==s?s:n.attributes||!g?t.getAttribute(e):(s=t.getAttributeNode(e))&&s.specified?s.value:null},at.escape=function(t){return(t+"").replace(rt,it)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},at.uniqueSort=function(t){var e,r=[],i=0,s=0;if(h=!n.detectDuplicates,l=!n.sortStable&&t.slice(0),t.sort(N),h){for(;e=t[s++];)e===t[s]&&(i=r.push(s));for(;i--;)t.splice(r[i],1)}return l=null,t},i=at.getText=function(t){var e,n="",r=0,s=t.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=i(t)}else if(3===s||4===s)return t.nodeValue}else for(;e=t[r++];)n+=i(e);return n},(r=at.selectors={cacheLength:50,createPseudo:ct,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||at.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return G.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&W.test(n)&&(e=o(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=x[t+" "];return e||(e=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+t+"("+F+"|$)"),x(t,(function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})))},ATTR:function(t,e,n){return function(r){var i=at.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(U," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var c,l,h,f,d,p,g=s!==o?"nextSibling":"previousSibling",m=e.parentNode,y=a&&e.nodeName.toLowerCase(),v=!u&&!a,w=!1;if(m){if(s){for(;g;){for(f=e;f=f[g];)if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;p=g="only"===t&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&v){for(w=(d=(c=(l=(h=(f=m)[b]||(f[b]={}))[f.uniqueID]||(h[f.uniqueID]={}))[t]||[])[0]===E&&c[1])&&c[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(w=d=0)||p.pop();)if(1===f.nodeType&&++w&&f===e){l[t]=[E,d,w];break}}else if(v&&(w=d=(c=(l=(h=(f=e)[b]||(f[b]={}))[f.uniqueID]||(h[f.uniqueID]={}))[t]||[])[0]===E&&c[1]),!1===w)for(;(f=++d&&f&&f[g]||(w=d=0)||p.pop())&&((a?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++w||(v&&((l=(h=f[b]||(f[b]={}))[f.uniqueID]||(h[f.uniqueID]={}))[t]=[E,w]),f!==e)););return(w-=i)===r||w%r==0&&w/r>=0}}},PSEUDO:function(t,e){var n,i=r.pseudos[t]||r.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);return i[b]?i(e):i.length>1?(n=[t,t,"",e],r.setFilters.hasOwnProperty(t.toLowerCase())?ct((function(t,n){for(var r,s=i(t,e),o=s.length;o--;)t[r=P(t,s[o])]=!(n[r]=s[o])})):function(t){return i(t,0,n)}):i}},pseudos:{not:ct((function(t){var e=[],n=[],r=a(t.replace(H,"$1"));return r[b]?ct((function(t,e,n,i){for(var s,o=r(t,null,i,[]),a=t.length;a--;)(s=o[a])&&(t[a]=!(e[a]=s))})):function(t,i,s){return e[0]=t,r(e,null,s,n),e[0]=null,!n.pop()}})),has:ct((function(t){return function(e){return at(t,e).length>0}})),contains:ct((function(t){return t=t.replace(et,nt),function(e){return(e.textContent||i(e)).indexOf(t)>-1}})),lang:ct((function(t){return K.test(t||"")||at.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:gt(!1),disabled:gt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!r.pseudos.empty(t)},header:function(t){return Y.test(t.nodeName)},input:function(t){return Q.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:mt((function(){return[0]})),last:mt((function(t,e){return[e-1]})),eq:mt((function(t,e,n){return[n<0?n+e:n]})),even:mt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:mt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:mt((function(t,e,n){for(var r=n<0?n+e:n>e?e:n;--r>=0;)t.push(r);return t})),gt:mt((function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t}))}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=dt(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=pt(e);function vt(){}function wt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function bt(t,e,n){var r=e.dir,i=e.next,s=i||r,o=n&&"parentNode"===s,a=C++;return e.first?function(e,n,i){for(;e=e[r];)if(1===e.nodeType||o)return t(e,n,i);return!1}:function(e,n,u){var c,l,h,f=[E,a];if(u){for(;e=e[r];)if((1===e.nodeType||o)&&t(e,n,u))return!0}else for(;e=e[r];)if(1===e.nodeType||o)if(l=(h=e[b]||(e[b]={}))[e.uniqueID]||(h[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=l[s])&&c[0]===E&&c[1]===a)return f[2]=c[2];if(l[s]=f,f[2]=t(e,n,u))return!0}return!1}}function Tt(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function Et(t,e,n,r,i){for(var s,o=[],a=0,u=t.length,c=null!=e;a<u;a++)(s=t[a])&&(n&&!n(s,r,i)||(o.push(s),c&&e.push(a)));return o}function Ct(t,e,n,r,i,s){return r&&!r[b]&&(r=Ct(r)),i&&!i[b]&&(i=Ct(i,s)),ct((function(s,o,a,u){var c,l,h,f=[],d=[],p=o.length,g=s||function(t,e,n){for(var r=0,i=e.length;r<i;r++)at(t,e[r],n);return n}(e||"*",a.nodeType?[a]:a,[]),m=!t||!s&&e?g:Et(g,f,t,a,u),y=n?i||(s?t:p||r)?[]:o:m;if(n&&n(m,y,a,u),r)for(c=Et(y,d),r(c,[],a,u),l=c.length;l--;)(h=c[l])&&(y[d[l]]=!(m[d[l]]=h));if(s){if(i||t){if(i){for(c=[],l=y.length;l--;)(h=y[l])&&c.push(m[l]=h);i(null,y=[],c,u)}for(l=y.length;l--;)(h=y[l])&&(c=i?P(s,h):f[l])>-1&&(s[c]=!(o[c]=h))}}else y=Et(y===o?y.splice(p,y.length):y),i?i(null,o,y,u):_.apply(o,y)}))}function xt(t){for(var e,n,i,s=t.length,o=r.relative[t[0].type],a=o||r.relative[" "],u=o?1:0,l=bt((function(t){return t===e}),a,!0),h=bt((function(t){return P(e,t)>-1}),a,!0),f=[function(t,n,r){var i=!o&&(r||n!==c)||((e=n).nodeType?l(t,n,r):h(t,n,r));return e=null,i}];u<s;u++)if(n=r.relative[t[u].type])f=[bt(Tt(f),n)];else{if((n=r.filter[t[u].type].apply(null,t[u].matches))[b]){for(i=++u;i<s&&!r.relative[t[i].type];i++);return Ct(u>1&&Tt(f),u>1&&wt(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(H,"$1"),n,u<i&&xt(t.slice(u,i)),i<s&&xt(t=t.slice(i)),i<s&&wt(t))}f.push(n)}return Tt(f)}return vt.prototype=r.filters=r.pseudos,r.setFilters=new vt,o=at.tokenize=function(t,e){var n,i,s,o,a,u,c,l=S[t+" "];if(l)return e?0:l.slice(0);for(a=t,u=[],c=r.preFilter;a;){for(o in n&&!(i=B.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(s=[])),n=!1,(i=$.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(H," ")}),a=a.slice(n.length)),r.filter)!(i=G[o].exec(a))||c[o]&&!(i=c[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return e?a.length:a?at.error(t):S(t,u).slice(0)},a=at.compile=function(t,e){var n,i=[],s=[],a=A[t+" "];if(!a){for(e||(e=o(t)),n=e.length;n--;)(a=xt(e[n]))[b]?i.push(a):s.push(a);a=A(t,function(t,e){var n=e.length>0,i=t.length>0,s=function(s,o,a,u,l){var h,p,m,y=0,v="0",w=s&&[],b=[],T=c,C=s||i&&r.find.TAG("*",l),x=E+=null==T?1:Math.random()||.1,S=C.length;for(l&&(c=o==d||o||l);v!==S&&null!=(h=C[v]);v++){if(i&&h){for(p=0,o||h.ownerDocument==d||(f(h),a=!g);m=t[p++];)if(m(h,o||d,a)){u.push(h);break}l&&(E=x)}n&&((h=!m&&h)&&y--,s&&w.push(h))}if(y+=v,n&&v!==y){for(p=0;m=e[p++];)m(w,b,o,a);if(s){if(y>0)for(;v--;)w[v]||b[v]||(b[v]=L.call(u));b=Et(b)}_.apply(u,b),l&&!s&&b.length>0&&y+e.length>1&&at.uniqueSort(u)}return l&&(E=x,c=T),w};return n?ct(s):s}(s,i)),a.selector=t}return a},u=at.select=function(t,e,n,i){var s,u,c,l,h,f="function"==typeof t&&t,d=!i&&o(t=f.selector||t);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===e.nodeType&&g&&r.relative[u[1].type]){if(!(e=(r.find.ID(c.matches[0].replace(et,nt),e)||[])[0]))return n;f&&(e=e.parentNode),t=t.slice(u.shift().value.length)}for(s=G.needsContext.test(t)?0:u.length;s--&&(c=u[s],!r.relative[l=c.type]);)if((h=r.find[l])&&(i=h(c.matches[0].replace(et,nt),tt.test(u[0].type)&&yt(e.parentNode)||e))){if(u.splice(s,1),!(t=i.length&&wt(u)))return _.apply(n,i),n;break}}return(f||a(t,d))(i,e,!g,n,!e||tt.test(t)&&yt(e.parentNode)||e),n},n.sortStable=b.split("").sort(N).join("")===b,n.detectDuplicates=!!h,f(),n.sortDetached=lt((function(t){return 1&t.compareDocumentPosition(d.createElement("fieldset"))})),lt((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||ht("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&lt((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||ht("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),lt((function(t){return null==t.getAttribute("disabled")}))||ht(M,(function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null})),at}(t);T.find=C,T.expr=C.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=C.uniqueSort,T.text=C.getText,T.isXMLDoc=C.isXML,T.contains=C.contains,T.escapeSelector=C.escape;var x=function(t,e,n){for(var r=[],i=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(i&&T(t).is(n))break;r.push(t)}return r},S=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},A=T.expr.match.needsContext;function I(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(t,e,n){return p(e)?T.grep(t,(function(t,r){return!!e.call(t,r,t)!==n})):e.nodeType?T.grep(t,(function(t){return t===e!==n})):"string"!=typeof e?T.grep(t,(function(t){return a.call(e,t)>-1!==n})):T.filter(e,t,n)}T.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?T.find.matchesSelector(r,t)?[r]:[]:T.find.matches(t,T.grep(e,(function(t){return 1===t.nodeType})))},T.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!=typeof t)return this.pushStack(T(t).filter((function(){for(e=0;e<r;e++)if(T.contains(i[e],this))return!0})));for(n=this.pushStack([]),e=0;e<r;e++)T.find(t,i[e],n);return r>1?T.uniqueSort(n):n},filter:function(t){return this.pushStack(D(this,t||[],!1))},not:function(t){return this.pushStack(D(this,t||[],!0))},is:function(t){return!!D(this,"string"==typeof t&&A.test(t)?T(t):t||[],!1).length}});var k,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||k,"string"==typeof t){if(!(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:L.exec(t))||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof T?e[0]:e,T.merge(this,T.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:m,!0)),N.test(r[1])&&T.isPlainObject(e))for(r in e)p(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return(i=m.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):p(t)?void 0!==n.ready?n.ready(t):t(T):T.makeArray(t,this)}).prototype=T.fn,k=T(m);var R=/^(?:parents|prev(?:Until|All))/,_={children:!0,contents:!0,next:!0,prev:!0};function O(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}T.fn.extend({has:function(t){var e=T(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(T.contains(this,e[t]))return!0}))},closest:function(t,e){var n,r=0,i=this.length,s=[],o="string"!=typeof t&&T(t);if(!A.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,t))){s.push(n);break}return this.pushStack(s.length>1?T.uniqueSort(s):s)},index:function(t){return t?"string"==typeof t?a.call(T(t),this[0]):a.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),T.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return x(t,"parentNode")},parentsUntil:function(t,e,n){return x(t,"parentNode",n)},next:function(t){return O(t,"nextSibling")},prev:function(t){return O(t,"previousSibling")},nextAll:function(t){return x(t,"nextSibling")},prevAll:function(t){return x(t,"previousSibling")},nextUntil:function(t,e,n){return x(t,"nextSibling",n)},prevUntil:function(t,e,n){return x(t,"previousSibling",n)},siblings:function(t){return S((t.parentNode||{}).firstChild,t)},children:function(t){return S(t.firstChild)},contents:function(t){return null!=t.contentDocument&&r(t.contentDocument)?t.contentDocument:(I(t,"template")&&(t=t.content||t),T.merge([],t.childNodes))}},(function(t,e){T.fn[t]=function(n,r){var i=T.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(_[t]||T.uniqueSort(i),R.test(t)&&i.reverse()),this.pushStack(i)}}));var P=/[^\x20\t\r\n\f]+/g;function M(t){return t}function F(t){throw t}function j(t,e,n,r){var i;try{t&&p(i=t.promise)?i.call(t).done(e).fail(n):t&&p(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}T.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return T.each(t.match(P)||[],(function(t,n){e[n]=!0})),e}(t):T.extend({},t);var e,n,r,i,s=[],o=[],a=-1,u=function(){for(i=i||t.once,r=e=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&t.stopOnFalse&&(a=s.length,n=!1);t.memory||(n=!1),e=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!e&&(a=s.length-1,o.push(n)),function e(n){T.each(n,(function(n,r){p(r)?t.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==w(r)&&e(r)}))}(arguments),n&&!e&&u()),this},remove:function(){return T.each(arguments,(function(t,e){for(var n;(n=T.inArray(e,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(t){return t?T.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||e||(s=n=""),this},locked:function(){return!!i},fireWith:function(t,n){return i||(n=[t,(n=n||[]).slice?n.slice():n],o.push(n),e||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},T.extend({Deferred:function(e){var n=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return T.Deferred((function(e){T.each(n,(function(n,r){var i=p(t[r[4]])&&t[r[4]];s[r[1]]((function(){var t=i&&i.apply(this,arguments);t&&p(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[r[0]+"With"](this,i?[t]:arguments)}))})),t=null})).promise()},then:function(e,r,i){var s=0;function o(e,n,r,i){return function(){var a=this,u=arguments,c=function(){var t,c;if(!(e<s)){if((t=r.apply(a,u))===n.promise())throw new TypeError("Thenable self-resolution");c=t&&("object"==typeof t||"function"==typeof t)&&t.then,p(c)?i?c.call(t,o(s,n,M,i),o(s,n,F,i)):(s++,c.call(t,o(s,n,M,i),o(s,n,F,i),o(s,n,M,n.notifyWith))):(r!==M&&(a=void 0,u=[t]),(i||n.resolveWith)(a,u))}},l=i?c:function(){try{c()}catch(t){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(t,l.stackTrace),e+1>=s&&(r!==F&&(a=void 0,u=[t]),n.rejectWith(a,u))}};e?l():(T.Deferred.getStackHook&&(l.stackTrace=T.Deferred.getStackHook()),t.setTimeout(l))}}return T.Deferred((function(t){n[0][3].add(o(0,t,p(i)?i:M,t.notifyWith)),n[1][3].add(o(0,t,p(e)?e:M)),n[2][3].add(o(0,t,p(r)?r:F))})).promise()},promise:function(t){return null!=t?T.extend(t,i):i}},s={};return T.each(n,(function(t,e){var o=e[2],a=e[5];i[e[1]]=o.add,a&&o.add((function(){r=a}),n[3-t][2].disable,n[3-t][3].disable,n[0][2].lock,n[0][3].lock),o.add(e[3].fire),s[e[0]]=function(){return s[e[0]+"With"](this===s?void 0:this,arguments),this},s[e[0]+"With"]=o.fireWith})),i.promise(s),e&&e.call(s,s),s},when:function(t){var e=arguments.length,n=e,r=Array(n),s=i.call(arguments),o=T.Deferred(),a=function(t){return function(n){r[t]=this,s[t]=arguments.length>1?i.call(arguments):n,--e||o.resolveWith(r,s)}};if(e<=1&&(j(t,o.done(a(n)).resolve,o.reject,!e),"pending"===o.state()||p(s[n]&&s[n].then)))return o.then();for(;n--;)j(s[n],a(n),o.reject);return o.promise()}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,n){t.console&&t.console.warn&&e&&q.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},T.readyException=function(e){t.setTimeout((function(){throw e}))};var V=T.Deferred();function U(){m.removeEventListener("DOMContentLoaded",U),t.removeEventListener("load",U),T.ready()}T.fn.ready=function(t){return V.then(t).catch((function(t){T.readyException(t)})),this},T.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==t&&--T.readyWait>0||V.resolveWith(m,[T]))}}),T.ready.then=V.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?t.setTimeout(T.ready):(m.addEventListener("DOMContentLoaded",U),t.addEventListener("load",U));var H=function(t,e,n,r,i,s,o){var a=0,u=t.length,c=null==n;if("object"===w(n))for(a in i=!0,n)H(t,e,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,p(r)||(o=!0),c&&(o?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(T(t),n)})),e))for(;a<u;a++)e(t[a],n,o?r:r.call(t[a],a,e(t[a],n)));return i?t:c?e.call(t):u?e(t[0],n):s},B=/^-ms-/,$=/-([a-z])/g;function z(t,e){return e.toUpperCase()}function W(t){return t.replace(B,"ms-").replace($,z)}var K=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function G(){this.expando=T.expando+G.uid++}G.uid=1,G.prototype={cache:function(t){var e=t[this.expando];return e||(e={},K(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"==typeof e)i[W(e)]=n;else for(r in e)i[W(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][W(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){n=(e=Array.isArray(e)?e.map(W):(e=W(e))in r?[e]:e.match(P)||[]).length;for(;n--;)delete r[e[n]]}(void 0===e||T.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!T.isEmptyObject(e)}};var X=new G,Q=new G,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(J,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(r))){try{n=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:Y.test(t)?JSON.parse(t):t)}(n)}catch(t){}Q.set(t,e,n)}else n=void 0;return n}T.extend({hasData:function(t){return Q.hasData(t)||X.hasData(t)},data:function(t,e,n){return Q.access(t,e,n)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,n){return X.access(t,e,n)},_removeData:function(t,e){X.remove(t,e)}}),T.fn.extend({data:function(t,e){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===t){if(this.length&&(i=Q.get(s),1===s.nodeType&&!X.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(r=o[n].name).indexOf("data-")&&(r=W(r.slice(5)),Z(s,r,i[r]));X.set(s,"hasDataAttrs",!0)}return i}return"object"==typeof t?this.each((function(){Q.set(this,t)})):H(this,(function(e){var n;if(s&&void 0===e)return void 0!==(n=Q.get(s,t))||void 0!==(n=Z(s,t))?n:void 0;this.each((function(){Q.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){Q.remove(this,t)}))}}),T.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=X.get(t,e),n&&(!r||Array.isArray(n)?r=X.access(t,e,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=T.queue(t,e),r=n.length,i=n.shift(),s=T._queueHooks(t,e);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete s.stop,i.call(t,(function(){T.dequeue(t,e)}),s)),!r&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return X.get(t,n)||X.access(t,n,{empty:T.Callbacks("once memory").add((function(){X.remove(t,[e+"queue",n])}))})}}),T.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?T.queue(this[0],t):void 0===e?this:this.each((function(){var n=T.queue(this,t,e);T._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&T.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){T.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=T.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)(n=X.get(s[o],t+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(e)}});var tt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,et=new RegExp("^(?:([+-])=|)("+tt+")([a-z%]*)$","i"),nt=["Top","Right","Bottom","Left"],rt=m.documentElement,it=function(t){return T.contains(t.ownerDocument,t)},st={composed:!0};rt.getRootNode&&(it=function(t){return T.contains(t.ownerDocument,t)||t.getRootNode(st)===t.ownerDocument});var ot=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&it(t)&&"none"===T.css(t,"display")};function at(t,e,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return T.css(t,e,"")},u=a(),c=n&&n[3]||(T.cssNumber[e]?"":"px"),l=t.nodeType&&(T.cssNumber[e]||"px"!==c&&+u)&&et.exec(T.css(t,e));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;o--;)T.style(t,e,l+c),(1-s)*(1-(s=a()/u||.5))<=0&&(o=0),l/=s;l*=2,T.style(t,e,l+c),n=n||[]}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var ut={};function ct(t){var e,n=t.ownerDocument,r=t.nodeName,i=ut[r];return i||(e=n.body.appendChild(n.createElement(r)),i=T.css(e,"display"),e.parentNode.removeChild(e),"none"===i&&(i="block"),ut[r]=i,i)}function lt(t,e){for(var n,r,i=[],s=0,o=t.length;s<o;s++)(r=t[s]).style&&(n=r.style.display,e?("none"===n&&(i[s]=X.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&ot(r)&&(i[s]=ct(r))):"none"!==n&&(i[s]="none",X.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(t[s].style.display=i[s]);return t}T.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){ot(this)?T(this).show():T(this).hide()}))}});var ht,ft,dt=/^(?:checkbox|radio)$/i,pt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,gt=/^$|^module$|\/(?:java|ecma)script/i;ht=m.createDocumentFragment().appendChild(m.createElement("div")),(ft=m.createElement("input")).setAttribute("type","radio"),ft.setAttribute("checked","checked"),ft.setAttribute("name","t"),ht.appendChild(ft),d.checkClone=ht.cloneNode(!0).cloneNode(!0).lastChild.checked,ht.innerHTML="<textarea>x</textarea>",d.noCloneChecked=!!ht.cloneNode(!0).lastChild.defaultValue,ht.innerHTML="<option></option>",d.option=!!ht.lastChild;var mt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function yt(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&I(t,e)?T.merge([t],n):n}function vt(t,e){for(var n=0,r=t.length;n<r;n++)X.set(t[n],"globalEval",!e||X.get(e[n],"globalEval"))}mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead,mt.th=mt.td,d.option||(mt.optgroup=mt.option=[1,"<select multiple='multiple'>","</select>"]);var wt=/<|&#?\w+;/;function bt(t,e,n,r,i){for(var s,o,a,u,c,l,h=e.createDocumentFragment(),f=[],d=0,p=t.length;d<p;d++)if((s=t[d])||0===s)if("object"===w(s))T.merge(f,s.nodeType?[s]:s);else if(wt.test(s)){for(o=o||h.appendChild(e.createElement("div")),a=(pt.exec(s)||["",""])[1].toLowerCase(),u=mt[a]||mt._default,o.innerHTML=u[1]+T.htmlPrefilter(s)+u[2],l=u[0];l--;)o=o.lastChild;T.merge(f,o.childNodes),(o=h.firstChild).textContent=""}else f.push(e.createTextNode(s));for(h.textContent="",d=0;s=f[d++];)if(r&&T.inArray(s,r)>-1)i&&i.push(s);else if(c=it(s),o=yt(h.appendChild(s),"script"),c&&vt(o),n)for(l=0;s=o[l++];)gt.test(s.type||"")&&n.push(s);return h}var Tt=/^([^.]*)(?:\.(.+)|)/;function Et(){return!0}function Ct(){return!1}function xt(t,e){return t===function(){try{return m.activeElement}catch(t){}}()==("focus"===e)}function St(t,e,n,r,i,s){var o,a;if("object"==typeof e){for(a in"string"!=typeof n&&(r=r||n,n=void 0),e)St(t,a,n,r,e[a],s);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ct;else if(!i)return t;return 1===s&&(o=i,i=function(t){return T().off(t),o.apply(this,arguments)},i.guid=o.guid||(o.guid=T.guid++)),t.each((function(){T.event.add(this,e,i,r,n)}))}function At(t,e,n){n?(X.set(t,e,!1),T.event.add(t,e,{namespace:!1,handler:function(t){var r,s,o=X.get(this,e);if(1&t.isTrigger&&this[e]){if(o.length)(T.event.special[e]||{}).delegateType&&t.stopPropagation();else if(o=i.call(arguments),X.set(this,e,o),r=n(this,e),this[e](),o!==(s=X.get(this,e))||r?X.set(this,e,!1):s={},o!==s)return t.stopImmediatePropagation(),t.preventDefault(),s&&s.value}else o.length&&(X.set(this,e,{value:T.event.trigger(T.extend(o[0],T.Event.prototype),o.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===X.get(t,e)&&T.event.add(t,e,Et)}T.event={global:{},add:function(t,e,n,r,i){var s,o,a,u,c,l,h,f,d,p,g,m=X.get(t);if(K(t))for(n.handler&&(n=(s=n).handler,i=s.selector),i&&T.find.matchesSelector(rt,i),n.guid||(n.guid=T.guid++),(u=m.events)||(u=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(e){return void 0!==T&&T.event.triggered!==e.type?T.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(P)||[""]).length;c--;)d=g=(a=Tt.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),d&&(h=T.event.special[d]||{},d=(i?h.delegateType:h.bindType)||d,h=T.event.special[d]||{},l=T.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:p.join(".")},s),(f=u[d])||((f=u[d]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(t,r,p,o)||t.addEventListener&&t.addEventListener(d,o)),h.add&&(h.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,l):f.push(l),T.event.global[d]=!0)},remove:function(t,e,n,r,i){var s,o,a,u,c,l,h,f,d,p,g,m=X.hasData(t)&&X.get(t);if(m&&(u=m.events)){for(c=(e=(e||"").match(P)||[""]).length;c--;)if(d=g=(a=Tt.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),d){for(h=T.event.special[d]||{},f=u[d=(r?h.delegateType:h.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=f.length;s--;)l=f[s],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(f.splice(s,1),l.selector&&f.delegateCount--,h.remove&&h.remove.call(t,l));o&&!f.length&&(h.teardown&&!1!==h.teardown.call(t,p,m.handle)||T.removeEvent(t,d,m.handle),delete u[d])}else for(d in u)T.event.remove(t,d+e[c],n,r,!0);T.isEmptyObject(u)&&X.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,s,o,a=new Array(arguments.length),u=T.event.fix(t),c=(X.get(this,"events")||Object.create(null))[u.type]||[],l=T.event.special[u.type]||{};for(a[0]=u,e=1;e<arguments.length;e++)a[e]=arguments[e];if(u.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,u)){for(o=T.event.handlers.call(this,u,c),e=0;(i=o[e++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(s=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==s.namespace&&!u.rnamespace.test(s.namespace)||(u.handleObj=s,u.data=s.data,void 0!==(r=((T.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,u),u.result}},handlers:function(t,e){var n,r,i,s,o,a=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(s=[],o={},n=0;n<u;n++)void 0===o[i=(r=e[n]).selector+" "]&&(o[i]=r.needsContext?T(i,this).index(c)>-1:T.find(i,this,null,[c]).length),o[i]&&s.push(r);s.length&&a.push({elem:c,handlers:s})}return c=this,u<e.length&&a.push({elem:c,handlers:e.slice(u)}),a},addProp:function(t,e){Object.defineProperty(T.Event.prototype,t,{enumerable:!0,configurable:!0,get:p(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[T.expando]?t:new T.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return dt.test(e.type)&&e.click&&I(e,"input")&&At(e,"click",Et),!1},trigger:function(t){var e=this||t;return dt.test(e.type)&&e.click&&I(e,"input")&&At(e,"click"),!0},_default:function(t){var e=t.target;return dt.test(e.type)&&e.click&&I(e,"input")&&X.get(e,"click")||I(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},T.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},T.Event=function(t,e){if(!(this instanceof T.Event))return new T.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Et:Ct,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&T.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Ct,isPropagationStopped:Ct,isImmediatePropagationStopped:Ct,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Et,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Et,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Et,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(t,e){T.event.special[t]={setup:function(){return At(this,t,xt),!1},trigger:function(){return At(this,t),!0},_default:function(){return!0},delegateType:e}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){T.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,s=t.handleObj;return i&&(i===r||T.contains(r,i))||(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}})),T.fn.extend({on:function(t,e,n,r){return St(this,t,e,n,r)},one:function(t,e,n,r){return St(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,T(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=Ct),this.each((function(){T.event.remove(this,t,n,e)}))}});var It=/<script|<style|<link/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,Dt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function kt(t,e){return I(t,"table")&&I(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}function Lt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Rt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function _t(t,e){var n,r,i,s,o,a;if(1===e.nodeType){if(X.hasData(t)&&(a=X.get(t).events))for(i in X.remove(e,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)T.event.add(e,i,a[i][n]);Q.hasData(t)&&(s=Q.access(t),o=T.extend({},s),Q.set(e,o))}}function Ot(t,e,n,r){e=s(e);var i,o,a,u,c,l,h=0,f=t.length,g=f-1,m=e[0],y=p(m);if(y||f>1&&"string"==typeof m&&!d.checkClone&&Nt.test(m))return t.each((function(i){var s=t.eq(i);y&&(e[0]=m.call(this,i,s.html())),Ot(s,e,n,r)}));if(f&&(o=(i=bt(e,t[0].ownerDocument,!1,t,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(a=T.map(yt(i,"script"),Lt)).length;h<f;h++)c=i,h!==g&&(c=T.clone(c,!0,!0),u&&T.merge(a,yt(c,"script"))),n.call(t[h],c,h);if(u)for(l=a[a.length-1].ownerDocument,T.map(a,Rt),h=0;h<u;h++)c=a[h],gt.test(c.type||"")&&!X.access(c,"globalEval")&&T.contains(l,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},l):v(c.textContent.replace(Dt,""),c,l))}return t}function Pt(t,e,n){for(var r,i=e?T.filter(e,t):t,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||T.cleanData(yt(r)),r.parentNode&&(n&&it(r)&&vt(yt(r,"script")),r.parentNode.removeChild(r));return t}T.extend({htmlPrefilter:function(t){return t},clone:function(t,e,n){var r,i,s,o,a,u,c,l=t.cloneNode(!0),h=it(t);if(!(d.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||T.isXMLDoc(t)))for(o=yt(l),r=0,i=(s=yt(t)).length;r<i;r++)a=s[r],u=o[r],c=void 0,"input"===(c=u.nodeName.toLowerCase())&&dt.test(a.type)?u.checked=a.checked:"input"!==c&&"textarea"!==c||(u.defaultValue=a.defaultValue);if(e)if(n)for(s=s||yt(t),o=o||yt(l),r=0,i=s.length;r<i;r++)_t(s[r],o[r]);else _t(t,l);return(o=yt(l,"script")).length>0&&vt(o,!h&&yt(t,"script")),l},cleanData:function(t){for(var e,n,r,i=T.event.special,s=0;void 0!==(n=t[s]);s++)if(K(n)){if(e=n[X.expando]){if(e.events)for(r in e.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,e.handle);n[X.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),T.fn.extend({detach:function(t){return Pt(this,t,!0)},remove:function(t){return Pt(this,t)},text:function(t){return H(this,(function(t){return void 0===t?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Ot(this,arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||kt(this,t).appendChild(t)}))},prepend:function(){return Ot(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=kt(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Ot(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Ot(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(T.cleanData(yt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return T.clone(this,t,e)}))},html:function(t){return H(this,(function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!It.test(t)&&!mt[(pt.exec(t)||["",""])[1].toLowerCase()]){t=T.htmlPrefilter(t);try{for(;n<r;n++)1===(e=this[n]||{}).nodeType&&(T.cleanData(yt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Ot(this,arguments,(function(e){var n=this.parentNode;T.inArray(this,t)<0&&(T.cleanData(yt(this)),n&&n.replaceChild(e,this))}),t)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){T.fn[t]=function(t){for(var n,r=[],i=T(t),s=i.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),T(i[a])[e](n),o.apply(r,n.get());return this.pushStack(r)}}));var Mt=new RegExp("^("+tt+")(?!px)[a-z%]+$","i"),Ft=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=t),n.getComputedStyle(e)},jt=function(t,e,n){var r,i,s={};for(i in e)s[i]=t.style[i],t.style[i]=e[i];for(i in r=n.call(t),e)t.style[i]=s[i];return r},qt=new RegExp(nt.join("|"),"i");function Vt(t,e,n){var r,i,s,o,a=t.style;return(n=n||Ft(t))&&(""!==(o=n.getPropertyValue(e)||n[e])||it(t)||(o=T.style(t,e)),!d.pixelBoxStyles()&&Mt.test(o)&&qt.test(e)&&(r=a.width,i=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=n.width,a.width=r,a.minWidth=i,a.maxWidth=s)),void 0!==o?o+"":o}function Ut(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",rt.appendChild(c).appendChild(l);var e=t.getComputedStyle(l);r="1%"!==e.top,u=12===n(e.marginLeft),l.style.right="60%",o=36===n(e.right),i=36===n(e.width),l.style.position="absolute",s=12===n(l.offsetWidth/3),rt.removeChild(c),l=null}}function n(t){return Math.round(parseFloat(t))}var r,i,s,o,a,u,c=m.createElement("div"),l=m.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",d.clearCloneStyle="content-box"===l.style.backgroundClip,T.extend(d,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),s},reliableTrDimensions:function(){var e,n,r,i;return null==a&&(e=m.createElement("table"),n=m.createElement("tr"),r=m.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",r.style.height="9px",r.style.display="block",rt.appendChild(e).appendChild(n).appendChild(r),i=t.getComputedStyle(n),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,rt.removeChild(e)),a}}))}();var Ht=["Webkit","Moz","ms"],Bt=m.createElement("div").style,$t={};function zt(t){var e=T.cssProps[t]||$t[t];return e||(t in Bt?t:$t[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),n=Ht.length;n--;)if((t=Ht[n]+e)in Bt)return t}(t)||t)}var Wt=/^(none|table(?!-c[ea]).+)/,Kt=/^--/,Gt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:"0",fontWeight:"400"};function Qt(t,e,n){var r=et.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function Yt(t,e,n,r,i,s){var o="width"===e?1:0,a=0,u=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(u+=T.css(t,n+nt[o],!0,i)),r?("content"===n&&(u-=T.css(t,"padding"+nt[o],!0,i)),"margin"!==n&&(u-=T.css(t,"border"+nt[o]+"Width",!0,i))):(u+=T.css(t,"padding"+nt[o],!0,i),"padding"!==n?u+=T.css(t,"border"+nt[o]+"Width",!0,i):a+=T.css(t,"border"+nt[o]+"Width",!0,i));return!r&&s>=0&&(u+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-s-u-a-.5))||0),u}function Jt(t,e,n){var r=Ft(t),i=(!d.boxSizingReliable()||n)&&"border-box"===T.css(t,"boxSizing",!1,r),s=i,o=Vt(t,e,r),a="offset"+e[0].toUpperCase()+e.slice(1);if(Mt.test(o)){if(!n)return o;o="auto"}return(!d.boxSizingReliable()&&i||!d.reliableTrDimensions()&&I(t,"tr")||"auto"===o||!parseFloat(o)&&"inline"===T.css(t,"display",!1,r))&&t.getClientRects().length&&(i="border-box"===T.css(t,"boxSizing",!1,r),(s=a in t)&&(o=t[a])),(o=parseFloat(o)||0)+Yt(t,e,n||(i?"border":"content"),s,r,o)+"px"}function Zt(t,e,n,r,i){return new Zt.prototype.init(t,e,n,r,i)}T.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Vt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,s,o,a=W(e),u=Kt.test(e),c=t.style;if(u||(e=zt(a)),o=T.cssHooks[e]||T.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(t,!1,r))?i:c[e];"string"===(s=typeof n)&&(i=et.exec(n))&&i[1]&&(n=at(t,e,i),s="number"),null!=n&&n==n&&("number"!==s||u||(n+=i&&i[3]||(T.cssNumber[a]?"":"px")),d.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),o&&"set"in o&&void 0===(n=o.set(t,n,r))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,s,o,a=W(e);return Kt.test(e)||(e=zt(a)),(o=T.cssHooks[e]||T.cssHooks[a])&&"get"in o&&(i=o.get(t,!0,n)),void 0===i&&(i=Vt(t,e,r)),"normal"===i&&e in Xt&&(i=Xt[e]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),T.each(["height","width"],(function(t,e){T.cssHooks[e]={get:function(t,n,r){if(n)return!Wt.test(T.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Jt(t,e,r):jt(t,Gt,(function(){return Jt(t,e,r)}))},set:function(t,n,r){var i,s=Ft(t),o=!d.scrollboxSize()&&"absolute"===s.position,a=(o||r)&&"border-box"===T.css(t,"boxSizing",!1,s),u=r?Yt(t,e,r,a,s):0;return a&&o&&(u-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(s[e])-Yt(t,e,"border",!1,s)-.5)),u&&(i=et.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=T.css(t,e)),Qt(0,n,u)}}})),T.cssHooks.marginLeft=Ut(d.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(Vt(t,"marginLeft"))||t.getBoundingClientRect().left-jt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(t,e){T.cssHooks[t+e]={expand:function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];r<4;r++)i[t+nt[r]+e]=s[r]||s[r-2]||s[0];return i}},"margin"!==t&&(T.cssHooks[t+e].set=Qt)})),T.fn.extend({css:function(t,e){return H(this,(function(t,e,n){var r,i,s={},o=0;if(Array.isArray(e)){for(r=Ft(t),i=e.length;o<i;o++)s[e[o]]=T.css(t,e[o],!1,r);return s}return void 0!==n?T.style(t,e,n):T.css(t,e)}),t,e,arguments.length>1)}}),T.Tween=Zt,Zt.prototype={constructor:Zt,init:function(t,e,n,r,i,s){this.elem=t,this.prop=n,this.easing=i||T.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=s||(T.cssNumber[n]?"":"px")},cur:function(){var t=Zt.propHooks[this.prop];return t&&t.get?t.get(this):Zt.propHooks._default.get(this)},run:function(t){var e,n=Zt.propHooks[this.prop];return this.options.duration?this.pos=e=T.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Zt.propHooks._default.set(this),this}},Zt.prototype.init.prototype=Zt.prototype,Zt.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=T.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){T.fx.step[t.prop]?T.fx.step[t.prop](t):1!==t.elem.nodeType||!T.cssHooks[t.prop]&&null==t.elem.style[zt(t.prop)]?t.elem[t.prop]=t.now:T.style(t.elem,t.prop,t.now+t.unit)}}},Zt.propHooks.scrollTop=Zt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},T.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},T.fx=Zt.prototype.init,T.fx.step={};var te,ee,ne=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function ie(){ee&&(!1===m.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(ie):t.setTimeout(ie,T.fx.interval),T.fx.tick())}function se(){return t.setTimeout((function(){te=void 0})),te=Date.now()}function oe(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)i["margin"+(n=nt[r])]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function ae(t,e,n){for(var r,i=(ue.tweeners[e]||[]).concat(ue.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,e,t))return r}function ue(t,e,n){var r,i,s=0,o=ue.prefilters.length,a=T.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1;for(var e=te||se(),n=Math.max(0,c.startTime+c.duration-e),r=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(r);return a.notifyWith(t,[c,r,n]),r<1&&o?n:(o||a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:T.extend({},e),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:e,originalOptions:n,startTime:te||se(),duration:n.duration,tweens:[],createTween:function(e,n){var r=T.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),l=c.props;for(!function(t,e){var n,r,i,s,o;for(n in t)if(i=e[r=W(n)],s=t[n],Array.isArray(s)&&(i=s[1],s=t[n]=s[0]),n!==r&&(t[r]=s,delete t[n]),(o=T.cssHooks[r])&&"expand"in o)for(n in s=o.expand(s),delete t[r],s)n in t||(t[n]=s[n],e[n]=i);else e[r]=i}(l,c.opts.specialEasing);s<o;s++)if(r=ue.prefilters[s].call(c,t,l,c.opts))return p(r.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return T.map(l,ae,c),p(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(ue,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return at(n.elem,t,et.exec(e),n),n}]},tweener:function(t,e){p(t)?(e=t,t=["*"]):t=t.match(P);for(var n,r=0,i=t.length;r<i;r++)n=t[r],ue.tweeners[n]=ue.tweeners[n]||[],ue.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var r,i,s,o,a,u,c,l,h="width"in e||"height"in e,f=this,d={},p=t.style,g=t.nodeType&&ot(t),m=X.get(t,"fxshow");for(r in n.queue||(null==(o=T._queueHooks(t,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,f.always((function(){f.always((function(){o.unqueued--,T.queue(t,"fx").length||o.empty.fire()}))}))),e)if(i=e[r],ne.test(i)){if(delete e[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}d[r]=m&&m[r]||T.style(t,r)}if((u=!T.isEmptyObject(e))||!T.isEmptyObject(d))for(r in h&&1===t.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=X.get(t,"display")),"none"===(l=T.css(t,"display"))&&(c?l=c:(lt([t],!0),c=t.style.display||c,l=T.css(t,"display"),lt([t]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===T.css(t,"float")&&(u||(f.done((function(){p.display=c})),null==c&&(l=p.display,c="none"===l?"":l)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),u=!1,d)u||(m?"hidden"in m&&(g=m.hidden):m=X.access(t,"fxshow",{display:c}),s&&(m.hidden=!g),g&&lt([t],!0),f.done((function(){for(r in g||lt([t]),X.remove(t,"fxshow"),d)T.style(t,r,d[r])}))),u=ae(g?m[r]:0,r,f),r in m||(m[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(t,e){e?ue.prefilters.unshift(t):ue.prefilters.push(t)}}),T.speed=function(t,e,n){var r=t&&"object"==typeof t?T.extend({},t):{complete:n||!n&&e||p(t)&&t,duration:t,easing:n&&e||e&&!p(e)&&e};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){p(r.old)&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(t,e,n,r){return this.filter(ot).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=T.isEmptyObject(t),s=T.speed(e,n,r),o=function(){var e=ue(this,T.extend({},t),s);(i||X.get(this,"finish"))&&e.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,i=null!=t&&t+"queueHooks",s=T.timers,o=X.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&re.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=t&&s[i].queue!==t||(s[i].anim.stop(n),e=!1,s.splice(i,1));!e&&n||T.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=X.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],s=T.timers,o=r?r.length:0;for(n.finish=!0,T.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;e<o;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(t,e){var n=T.fn[e];T.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(oe(e,!0),t,r,i)}})),T.each({slideDown:oe("show"),slideUp:oe("hide"),slideToggle:oe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){T.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}})),T.timers=[],T.fx.tick=function(){var t,e=0,n=T.timers;for(te=Date.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||T.fx.stop(),te=void 0},T.fx.timer=function(t){T.timers.push(t),T.fx.start()},T.fx.interval=13,T.fx.start=function(){ee||(ee=!0,ie())},T.fx.stop=function(){ee=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,n){return e=T.fx&&T.fx.speeds[e]||e,n=n||"fx",this.queue(n,(function(n,r){var i=t.setTimeout(n,e);r.stop=function(){t.clearTimeout(i)}}))},function(){var t=m.createElement("input"),e=m.createElement("select").appendChild(m.createElement("option"));t.type="checkbox",d.checkOn=""!==t.value,d.optSelected=e.selected,(t=m.createElement("input")).value="t",t.type="radio",d.radioValue="t"===t.value}();var ce,le=T.expr.attrHandle;T.fn.extend({attr:function(t,e){return H(this,T.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){T.removeAttr(this,t)}))}}),T.extend({attr:function(t,e,n){var r,i,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===t.getAttribute?T.prop(t,e,n):(1===s&&T.isXMLDoc(t)||(i=T.attrHooks[e.toLowerCase()]||(T.expr.match.bool.test(e)?ce:void 0)),void 0!==n?null===n?void T.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:null==(r=T.find.attr(t,e))?void 0:r)},attrHooks:{type:{set:function(t,e){if(!d.radioValue&&"radio"===e&&I(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(P);if(i&&1===t.nodeType)for(;n=i[r++];)t.removeAttribute(n)}}),ce={set:function(t,e,n){return!1===e?T.removeAttr(t,n):t.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=le[e]||T.find.attr;le[e]=function(t,e,r){var i,s,o=e.toLowerCase();return r||(s=le[o],le[o]=i,i=null!=n(t,e,r)?o:null,le[o]=s),i}}));var he=/^(?:input|select|textarea|button)$/i,fe=/^(?:a|area)$/i;function de(t){return(t.match(P)||[]).join(" ")}function pe(t){return t.getAttribute&&t.getAttribute("class")||""}function ge(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(P)||[]}T.fn.extend({prop:function(t,e){return H(this,T.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[T.propFix[t]||t]}))}}),T.extend({prop:function(t,e,n){var r,i,s=t.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&T.isXMLDoc(t)||(e=T.propFix[e]||e,i=T.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=T.find.attr(t,"tabindex");return e?parseInt(e,10):he.test(t.nodeName)||fe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(T.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(t){var e,n,r,i,s,o,a,u=0;if(p(t))return this.each((function(e){T(this).addClass(t.call(this,e,pe(this)))}));if((e=ge(t)).length)for(;n=this[u++];)if(i=pe(n),r=1===n.nodeType&&" "+de(i)+" "){for(o=0;s=e[o++];)r.indexOf(" "+s+" ")<0&&(r+=s+" ");i!==(a=de(r))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,r,i,s,o,a,u=0;if(p(t))return this.each((function(e){T(this).removeClass(t.call(this,e,pe(this)))}));if(!arguments.length)return this.attr("class","");if((e=ge(t)).length)for(;n=this[u++];)if(i=pe(n),r=1===n.nodeType&&" "+de(i)+" "){for(o=0;s=e[o++];)for(;r.indexOf(" "+s+" ")>-1;)r=r.replace(" "+s+" "," ");i!==(a=de(r))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t,r="string"===n||Array.isArray(t);return"boolean"==typeof e&&r?e?this.addClass(t):this.removeClass(t):p(t)?this.each((function(n){T(this).toggleClass(t.call(this,n,pe(this),e),e)})):this.each((function(){var e,i,s,o;if(r)for(i=0,s=T(this),o=ge(t);e=o[i++];)s.hasClass(e)?s.removeClass(e):s.addClass(e);else void 0!==t&&"boolean"!==n||((e=pe(this))&&X.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":X.get(this,"__className__")||""))}))},hasClass:function(t){var e,n,r=0;for(e=" "+t+" ";n=this[r++];)if(1===n.nodeType&&(" "+de(pe(n))+" ").indexOf(e)>-1)return!0;return!1}});var me=/\r/g;T.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=p(t),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?t.call(this,n,T(this).val()):t)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,(function(t){return null==t?"":t+""}))),(e=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))}))):i?(e=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(me,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(t){var e=T.find.attr(t,"value");return null!=e?e:de(T.text(t))}},select:{get:function(t){var e,n,r,i=t.options,s=t.selectedIndex,o="select-one"===t.type,a=o?null:[],u=o?s+1:i.length;for(r=s<0?u:o?s:0;r<u;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!I(n.parentNode,"optgroup"))){if(e=T(n).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var n,r,i=t.options,s=T.makeArray(e),o=i.length;o--;)((r=i[o]).selected=T.inArray(T.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(t.selectedIndex=-1),s}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=T.inArray(T(t).val(),e)>-1}},d.checkOn||(T.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),d.focusin="onfocusin"in t;var ye=/^(?:focusinfocus|focusoutblur)$/,ve=function(t){t.stopPropagation()};T.extend(T.event,{trigger:function(e,n,r,i){var s,o,a,u,c,h,f,d,y=[r||m],v=l.call(e,"type")?e.type:e,w=l.call(e,"namespace")?e.namespace.split("."):[];if(o=d=a=r=r||m,3!==r.nodeType&&8!==r.nodeType&&!ye.test(v+T.event.triggered)&&(v.indexOf(".")>-1&&(w=v.split("."),v=w.shift(),w.sort()),c=v.indexOf(":")<0&&"on"+v,(e=e[T.expando]?e:new T.Event(v,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=w.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+w.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),n=null==n?[e]:T.makeArray(n,[e]),f=T.event.special[v]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!g(r)){for(u=f.delegateType||v,ye.test(u+v)||(o=o.parentNode);o;o=o.parentNode)y.push(o),a=o;a===(r.ownerDocument||m)&&y.push(a.defaultView||a.parentWindow||t)}for(s=0;(o=y[s++])&&!e.isPropagationStopped();)d=o,e.type=s>1?u:f.bindType||v,(h=(X.get(o,"events")||Object.create(null))[e.type]&&X.get(o,"handle"))&&h.apply(o,n),(h=c&&o[c])&&h.apply&&K(o)&&(e.result=h.apply(o,n),!1===e.result&&e.preventDefault());return e.type=v,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(y.pop(),n)||!K(r)||c&&p(r[v])&&!g(r)&&((a=r[c])&&(r[c]=null),T.event.triggered=v,e.isPropagationStopped()&&d.addEventListener(v,ve),r[v](),e.isPropagationStopped()&&d.removeEventListener(v,ve),T.event.triggered=void 0,a&&(r[c]=a)),e.result}},simulate:function(t,e,n){var r=T.extend(new T.Event,n,{type:t,isSimulated:!0});T.event.trigger(r,null,e)}}),T.fn.extend({trigger:function(t,e){return this.each((function(){T.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return T.event.trigger(t,e,n,!0)}}),d.focusin||T.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){T.event.simulate(e,t.target,T.event.fix(t))};T.event.special[e]={setup:function(){var r=this.ownerDocument||this.document||this,i=X.access(r,e);i||r.addEventListener(t,n,!0),X.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=X.access(r,e)-1;i?X.access(r,e,i):(r.removeEventListener(t,n,!0),X.remove(r,e))}}}));var we=t.location,be={guid:Date.now()},Te=/\?/;T.parseXML=function(e){var n,r;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(t){}return r=n&&n.getElementsByTagName("parsererror")[0],n&&!r||T.error("Invalid XML: "+(r?T.map(r.childNodes,(function(t){return t.textContent})).join("\n"):e)),n};var Ee=/\[\]$/,Ce=/\r?\n/g,xe=/^(?:submit|button|image|reset|file)$/i,Se=/^(?:input|select|textarea|keygen)/i;function Ae(t,e,n,r){var i;if(Array.isArray(e))T.each(e,(function(e,i){n||Ee.test(t)?r(t,i):Ae(t+"["+("object"==typeof i&&null!=i?e:"")+"]",i,n,r)}));else if(n||"object"!==w(e))r(t,e);else for(i in e)Ae(t+"["+i+"]",e[i],n,r)}T.param=function(t,e){var n,r=[],i=function(t,e){var n=p(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!T.isPlainObject(t))T.each(t,(function(){i(this.name,this.value)}));else for(n in t)Ae(n,t[n],e,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=T.prop(this,"elements");return t?T.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!T(this).is(":disabled")&&Se.test(this.nodeName)&&!xe.test(t)&&(this.checked||!dt.test(t))})).map((function(t,e){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(t){return{name:e.name,value:t.replace(Ce,"\r\n")}})):{name:e.name,value:n.replace(Ce,"\r\n")}})).get()}});var Ie=/%20/g,Ne=/#.*$/,De=/([?&])_=[^&]*/,ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Le=/^(?:GET|HEAD)$/,Re=/^\/\//,_e={},Oe={},Pe="*/".concat("*"),Me=m.createElement("a");function Fe(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,s=e.toLowerCase().match(P)||[];if(p(n))for(;r=s[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function je(t,e,n,r){var i={},s=t===Oe;function o(a){var u;return i[a]=!0,T.each(t[a]||[],(function(t,a){var c=a(e,n,r);return"string"!=typeof c||s||i[c]?s?!(u=c):void 0:(e.dataTypes.unshift(c),o(c),!1)})),u}return o(e.dataTypes[0])||!i["*"]&&o("*")}function qe(t,e){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&T.extend(!0,t,r),t}Me.href=we.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:we.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?qe(qe(t,T.ajaxSettings),e):qe(T.ajaxSettings,t)},ajaxPrefilter:Fe(_e),ajaxTransport:Fe(Oe),ajax:function(e,n){"object"==typeof e&&(n=e,e=void 0),n=n||{};var r,i,s,o,a,u,c,l,h,f,d=T.ajaxSetup({},n),p=d.context||d,g=d.context&&(p.nodeType||p.jquery)?T(p):T.event,y=T.Deferred(),v=T.Callbacks("once memory"),w=d.statusCode||{},b={},E={},C="canceled",x={readyState:0,getResponseHeader:function(t){var e;if(c){if(!o)for(o={};e=ke.exec(s);)o[e[1].toLowerCase()+" "]=(o[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=o[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(t,e){return null==c&&(t=E[t.toLowerCase()]=E[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){return null==c&&(d.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)x.always(t[x.status]);else for(e in t)w[e]=[w[e],t[e]];return this},abort:function(t){var e=t||C;return r&&r.abort(e),S(0,e),this}};if(y.promise(x),d.url=((e||d.url||we.href)+"").replace(Re,we.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(P)||[""],null==d.crossDomain){u=m.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=Me.protocol+"//"+Me.host!=u.protocol+"//"+u.host}catch(t){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),je(_e,d,n,x),c)return x;for(h in(l=T.event&&d.global)&&0==T.active++&&T.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Le.test(d.type),i=d.url.replace(Ne,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Ie,"+")):(f=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(Te.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(De,"$1"),f=(Te.test(i)?"&":"?")+"_="+be.guid+++f),d.url=i+f),d.ifModified&&(T.lastModified[i]&&x.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&x.setRequestHeader("If-None-Match",T.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Pe+"; q=0.01":""):d.accepts["*"]),d.headers)x.setRequestHeader(h,d.headers[h]);if(d.beforeSend&&(!1===d.beforeSend.call(p,x,d)||c))return x.abort();if(C="abort",v.add(d.complete),x.done(d.success),x.fail(d.error),r=je(Oe,d,n,x)){if(x.readyState=1,l&&g.trigger("ajaxSend",[x,d]),c)return x;d.async&&d.timeout>0&&(a=t.setTimeout((function(){x.abort("timeout")}),d.timeout));try{c=!1,r.send(b,S)}catch(t){if(c)throw t;S(-1,t)}}else S(-1,"No Transport");function S(e,n,o,u){var h,f,m,b,E,C=n;c||(c=!0,a&&t.clearTimeout(a),r=void 0,s=u||"",x.readyState=e>0?4:0,h=e>=200&&e<300||304===e,o&&(b=function(t,e,n){for(var r,i,s,o,a=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)s=u[0];else{for(i in n){if(!u[0]||t.converters[i+" "+u[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==u[0]&&u.unshift(s),n[s]}(d,x,o)),!h&&T.inArray("script",d.dataTypes)>-1&&T.inArray("json",d.dataTypes)<0&&(d.converters["text script"]=function(){}),b=function(t,e,n,r){var i,s,o,a,u,c={},l=t.dataTypes.slice();if(l[1])for(o in t.converters)c[o.toLowerCase()]=t.converters[o];for(s=l.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!u&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=s,s=l.shift())if("*"===s)s=u;else if("*"!==u&&u!==s){if(!(o=c[u+" "+s]||c["* "+s]))for(i in c)if((a=i.split(" "))[1]===s&&(o=c[u+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[i]:!0!==c[i]&&(s=a[0],l.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+u+" to "+s}}}return{state:"success",data:e}}(d,b,x,h),h?(d.ifModified&&((E=x.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=E),(E=x.getResponseHeader("etag"))&&(T.etag[i]=E)),204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=b.state,f=b.data,h=!(m=b.error))):(m=C,!e&&C||(C="error",e<0&&(e=0))),x.status=e,x.statusText=(n||C)+"",h?y.resolveWith(p,[f,C,x]):y.rejectWith(p,[x,C,m]),x.statusCode(w),w=void 0,l&&g.trigger(h?"ajaxSuccess":"ajaxError",[x,d,h?f:m]),v.fireWith(p,[x,C]),l&&(g.trigger("ajaxComplete",[x,d]),--T.active||T.event.trigger("ajaxStop")))}return x},getJSON:function(t,e,n){return T.get(t,e,n,"json")},getScript:function(t,e){return T.get(t,void 0,e,"script")}}),T.each(["get","post"],(function(t,e){T[e]=function(t,n,r,i){return p(n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:t,type:e,dataType:i,data:n,success:r},T.isPlainObject(t)&&t))}})),T.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),T._evalUrl=function(t,e,n){return T.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){T.globalEval(t,e,n)}})},T.fn.extend({wrapAll:function(t){var e;return this[0]&&(p(t)&&(t=t.call(this[0])),e=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return p(t)?this.each((function(e){T(this).wrapInner(t.call(this,e))})):this.each((function(){var e=T(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=p(t);return this.each((function(n){T(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(t){return!T.expr.pseudos.visible(t)},T.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var Ve={0:200,1223:204},Ue=T.ajaxSettings.xhr();d.cors=!!Ue&&"withCredentials"in Ue,d.ajax=Ue=!!Ue,T.ajaxTransport((function(e){var n,r;if(d.cors||Ue&&!e.crossDomain)return{send:function(i,s){var o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];for(o in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);n=function(t){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Ve[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout((function(){n&&r()}))},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(t){if(n)throw t}},abort:function(){n&&n()}}})),T.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return T.globalEval(t),t}}}),T.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),T.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(r,i){e=T("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),m.head.appendChild(e[0])},abort:function(){n&&n()}}}));var He,Be=[],$e=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Be.pop()||T.expando+"_"+be.guid++;return this[t]=!0,t}}),T.ajaxPrefilter("json jsonp",(function(e,n,r){var i,s,o,a=!1!==e.jsonp&&($e.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&$e.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=p(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace($e,"$1"+i):!1!==e.jsonp&&(e.url+=(Te.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return o||T.error(i+" was not called"),o[0]},e.dataTypes[0]="json",s=t[i],t[i]=function(){o=arguments},r.always((function(){void 0===s?T(t).removeProp(i):t[i]=s,e[i]&&(e.jsonpCallback=n.jsonpCallback,Be.push(i)),o&&p(s)&&s(o[0]),o=s=void 0})),"script"})),d.createHTMLDocument=((He=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===He.childNodes.length),T.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(d.createHTMLDocument?((r=(e=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,e.head.appendChild(r)):e=m),s=!n&&[],(i=N.exec(t))?[e.createElement(i[1])]:(i=bt([t],e,s),s&&s.length&&T(s).remove(),T.merge([],i.childNodes)));var r,i,s},T.fn.load=function(t,e,n){var r,i,s,o=this,a=t.indexOf(" ");return a>-1&&(r=de(t.slice(a)),t=t.slice(0,a)),p(e)?(n=e,e=void 0):e&&"object"==typeof e&&(i="POST"),o.length>0&&T.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done((function(t){s=arguments,o.html(r?T("<div>").append(T.parseHTML(t)).find(r):t)})).always(n&&function(t,e){o.each((function(){n.apply(this,s||[t.responseText,e,t])}))}),this},T.expr.pseudos.animated=function(t){return T.grep(T.timers,(function(e){return t===e.elem})).length},T.offset={setOffset:function(t,e,n){var r,i,s,o,a,u,c=T.css(t,"position"),l=T(t),h={};"static"===c&&(t.style.position="relative"),a=l.offset(),s=T.css(t,"top"),u=T.css(t,"left"),("absolute"===c||"fixed"===c)&&(s+u).indexOf("auto")>-1?(o=(r=l.position()).top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(u)||0),p(e)&&(e=e.call(t,n,T.extend({},a))),null!=e.top&&(h.top=e.top-a.top+o),null!=e.left&&(h.left=e.left-a.left+i),"using"in e?e.using.call(t,h):l.css(h)}},T.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){T.offset.setOffset(this,t,e)}));var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,r=this[0],i={top:0,left:0};if("fixed"===T.css(r,"position"))e=r.getBoundingClientRect();else{for(e=this.offset(),n=r.ownerDocument,t=r.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===T.css(t,"position");)t=t.parentNode;t&&t!==r&&1===t.nodeType&&((i=T(t).offset()).top+=T.css(t,"borderTopWidth",!0),i.left+=T.css(t,"borderLeftWidth",!0))}return{top:e.top-i.top-T.css(r,"marginTop",!0),left:e.left-i.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent;t&&"static"===T.css(t,"position");)t=t.offsetParent;return t||rt}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;T.fn[t]=function(r){return H(this,(function(t,r,i){var s;if(g(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===i)return s?s[e]:t[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):t[r]=i}),t,r,arguments.length)}})),T.each(["top","left"],(function(t,e){T.cssHooks[e]=Ut(d.pixelPosition,(function(t,n){if(n)return n=Vt(t,e),Mt.test(n)?T(t).position()[e]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(t,e){T.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,r){T.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===s?"margin":"border");return H(this,(function(e,n,i){var s;return g(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(s=e.documentElement,Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])):void 0===i?T.css(e,n,a):T.style(e,n,i,a)}),e,o?i:void 0,o)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){T.fn[e]=function(t){return this.on(e,t)}})),T.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){T.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}));var ze=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;T.proxy=function(t,e){var n,r,s;if("string"==typeof e&&(n=t[e],e=t,t=n),p(t))return r=i.call(arguments,2),s=function(){return t.apply(e||this,r.concat(i.call(arguments)))},s.guid=t.guid=t.guid||T.guid++,s},T.holdReady=function(t){t?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=I,T.isFunction=p,T.isWindow=g,T.camelCase=W,T.type=w,T.now=Date.now,T.isNumeric=function(t){var e=T.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},T.trim=function(t){return null==t?"":(t+"").replace(ze,"")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return T}));var We=t.jQuery,Ke=t.$;return T.noConflict=function(e){return t.$===T&&(t.$=Ke),e&&t.jQuery===T&&(t.jQuery=We),T},void 0===e&&(t.jQuery=t.$=T),T}))})),i.register("iIS5o",(function(t,e){var n,r,i,s,o;n=t.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),r=t.exports,i="default",s=()=>v,Object.defineProperty(r,i,{get:s,set:o,enumerable:!0,configurable:!0});
/**!
 * Deparam plugin converts query string to a valid JavaScript object
 * Released under MIT license
 * @name Deparam.js
 * @author Sachin Singh <contactsachinsingh@gmail.com>
 * @version 2.1.4
 * @license MIT
 */
var a="undefined"!=typeof window,u=Array.isArray;function c(t){return t=(t+"").trim(),!(["null","undefined",""].indexOf(t)>-1)&&!Number.isNaN(Number(t))}function l(t){return/\[/.test(t)}function h(t,e){return void 0===t?e:t}function f(t,e){var n=this;t=h(t,a?location.search:"").trim(),e=h(e,!0);var r=(t=t.substring("?"===t.charAt(0))).split("&"),i={};return t&&r.forEach((function(t){var r=t.split("=").map((function(t){return decodeURIComponent(t)}));l(r[0])?g.apply(n,[].concat(r).concat([i,e])):m.apply(n,[r,i,!1,e])})),i}function d(t,e){return void 0===t?e?[]:{}:e?t:(r={},u(n=t)&&n.forEach((function(t,e){r[e]=t})),r);var n,r}function p(t,e){return null==(n=t)||u(n)||"[object Object]"!==n.toString()?u(t)||void 0===t?{ob:d(t,c(e))}:{ob:[t],push:null!==t}:{ob:t};var n}function g(t,e,n,r){r=h(r,!0);var i=t.match(/([^\[]+)\[([^\[]*)\]/)||[];if(3===i.length){var s=i[1],o=i[2];if(l(t=t.replace(/\[([^\[]*)\]/,"")))""===o&&(o="0"),g(t=t.replace(/[^\[]+/,o),e,n[s]=p(n[s],o).ob,r);else if(o){var a=p(n[s],o),u=a.ob,c=a.push;n[s]=u;var f=c?{}:n[s];f[o]=y(e,!r),c&&n[s].push(f)}else m([i[1],e],n,!0)}}function m(t,e,n,r){r=h(r,!0);var i=t[0],s=t[1];s=y(s,!r),!function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(e,i)?e[i]=n?[s]:s:(e[i]=u(e[i])?e[i]:[e[i]],e[i].push(s))}function y(t,e){if(null==t)return"";if(e||"string"!=typeof t)return t;if(c(t=t.trim()))return+t;switch(t){case"null":return null;case"undefined":return;case"true":return!0;case"false":return!1;case"NaN":return NaN;default:return t}}var v=function(){return f.apply(this,arguments)}}));var s=i("5WhQr"),o={};!function(t,e){"object"==typeof o?e(o,i("5WhQr"),i("iIS5o")):"function"==typeof define&&define.amd?define(["exports","jquery","deparam.js"],e):e((t=t||self).jqueryrouter={},t.jQuery,t.deparam)}(o,(function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var i={handlers:[]},s=history&&history.pushState,o=window.location,a={noTrigger:!1},u={pathname:/^\/(?=[^?]*)/,routeparams:/:[^\/]+/g,hashQuery:/\?.+/},c={routeChanged:"routeChanged",hashchange:"hashchange",popstate:"popstate"},l="Path is invalid";function h(t,e){null!=t&&"object"===r(t)&&Object.keys(t).forEach((function(n){e[n]=t[n]}))}function f(){var t=0,e=arguments[0]&&"object"===r(arguments[0])?arguments[0]:{};for(t=1;t<arguments.length;t++)h(arguments[t],e);return e}function d(t){return Array.prototype.slice.call(t)}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(a.noTrigger&&e===c.hashchange)a.noTrigger=!1;else{var i=f({},a.currentData);n&&delete a.currentData,x.events.trigger(c.routeChanged,{data:f({},n?i:{},{eventType:e,hash:!!n,route:t,isInit:r})})}}function g(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=n(o.search,t),r={};return o.hash.match(u.hashQuery)&&(r=n(o.hash.match(u.hashQuery)[0],t)),f({},e,r)}function m(t,e,n){if(function(t){return"string"==typeof t&&u.pathname.test(t)}(t))return function(t,e,n){return e||n?"string"==typeof e?(e=e.trim())&&n?"".concat(t).concat(o.search,"&").concat(e.replace("?","")):e?"".concat(t,"?").concat(e.replace("?","")):t:void 0:t}(t,e,n);throw new TypeError(l)}function y(t,e,n){if(t){var i=null,u="",l="",h=!1,d=!1,p=e?"replaceState":"pushState",g={};a.noTrigger=n,"object"===r(t)?(g=t.data,i=t.title,u=t.route,l=t.queryString,h=t.appendQuery):"string"==typeof t&&(u=t),"#"===u.charAt(0)&&(d=!0,u=u.replace("#","")),s&&!d?(history[p](a.data,i,m(u,l,h)),n||(g=f({},g,{eventType:c.popstate,hash:!1,route:u}),x.events.trigger(c.routeChanged,{data:g}))):(a.currentData=g,e?o.replace("#"+m(u,l,h)):o.hash=m(u,l,h))}}function v(t,e){var n=this;"function"==typeof t&&(e=t,t="*"),i.handlers.filter((function(r){var i=r.originalHandler===e&&r.route===t;return n&&(i=i&&r.element===n),i})).length||i.handlers.push({eventName:c.routeChanged,originalHandler:e,handler:e.bind(this),element:this,route:t})}function w(t,e){var n=arguments.length;0===n.length&&(i.handlers.length=0),i.handlers=i.handlers.filter((function(r){return 1===n.length&&"string"==typeof n[0]?r.route!==t:(1===n.length&&"function"==typeof n[0]&&(e=n[0],t="*"),!(r.route===t&&r.handler===e))}))}function b(t){return t.replace(/^([^a-zA-Z0-9]+)|([^a-zA-Z0-9]+)$/g,"")}function T(t,e,n){if(~e.indexOf("?")&&(e=e.substring(0,e.indexOf("?"))),u.routeparams.lastIndex=0,!u.routeparams.test(t))return t===e||"*"===t;n.params={};var r=new RegExp(t.replace(/\//g,"\\/").replace(/:[^\/\\]+/g,"([^\\/]+)"));if(r.test(e)){u.routeparams.lastIndex=0;var i=d(t.match(u.routeparams)).map(b),s=d(e.match(r));return s.shift(),i.forEach((function(t,e){n.params[t]=s[e]})),!0}return!1}function E(t,e){(e=f(e)).data=f(e.data);var n=e.data,r=n.hash,u=n.isInit;i.handlers.forEach((function(n){n.eventName===t&&(!s||r||!T(n.route,o.pathname,e)||u&&n.called?r&&(o.hash||s||!T(n.route,o.pathname,e)?!T(n.route,o.hash.substring(1),e)||u&&n.hashCalled||(n.hashCalled=!0,n.handler(e.data,e.params,g(!1))):(a.data=e.data,o.replace("#"+o.pathname))):(n.called=!0,n.handler(e.data,e.params,g(!1))))}))}var C,x={events:f({trigger:function(t,e){return E.apply(this,[t,e])}},c),init:function(){var t={eventType:s?c.popstate:c.hashchange,hash:!s,route:s?o.pathname:o.hash,isInit:!0};this.events.trigger(c.routeChanged,{data:t}),o.hash&&e(window).trigger(c.hashchange,[!0])},set:function(){return y.apply(this,arguments)},historySupported:!!s};function S(){return v.apply(this,arguments)}function A(){return w.apply(this,arguments)}"function"==typeof e&&(e.route=e.prototype.route=S,e.unroute=e.prototype.unroute=A,e.router=x),(C=e(window)).on(c.popstate,(function(t){p.apply(this,[o.pathname,t.type])})),C.on(c.hashchange,(function(t,e){p.apply(this,[o.hash,t.type,!0,e])})),t.route=S,t.router=x,t.unroute=A,Object.defineProperty(t,"__esModule",{value:!0})}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class l extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h.prototype.create)}}class h{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(f,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new l(r,o,n)}}const f=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(p(n)&&p(s)){if(!d(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function p(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){return t&&t._delegate?t._delegate:t}class m{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new u;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class v{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=[];var b;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(b||(b={}));const T={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},E=b.INFO,C={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},x=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=C[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class S{constructor(t){this.name=t,this._logLevel=E,this._logHandler=x,this._userLogHandler=null,w.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?T[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const I=new S("@firebase/app"),N={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,k=new Map;function L(t,e){try{t.container.addComponent(e)}catch(n){I.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function R(t){const e=t.name;if(k.has(e))return I.debug(`There were multiple attempts to register component ${e}.`),!1;k.set(e,t);for(const e of D.values())L(e,t);return!0}function _(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O=new h("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new m("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e,n){var r;let i=null!==(r=N[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void I.warn(t.join(" "))}R(new m(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F;F="",R(new m("platform-logger",(t=>new A(t)),"PRIVATE")),M("@firebase/app","0.7.12",F),M("@firebase/app","0.7.12","esm2017"),M("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
M("firebase","9.6.2","app");var j,q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},V={},U=U||{},H=q||self;function B(){}function $(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function z(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var W="closure_uid_"+(1e9*Math.random()>>>0),K=0;function G(t,e,n){return t.call.apply(t.bind,arguments)}function X(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Q(t,e,n){return(Q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?G:X).apply(null,arguments)}function Y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function J(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Z(){this.s=this.s,this.o=this.o}var tt={};Z.prototype.s=!1,Z.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,W)&&t[W]||(t[W]=++K)}(this);delete tt[t]}},Z.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const et=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},nt=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function rt(t){return Array.prototype.concat.apply([],arguments)}function it(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function st(t){return/^[\s\xa0]*$/.test(t)}var ot,at=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ut(t,e){return-1!=t.indexOf(e)}function ct(t,e){return t<e?-1:t>e?1:0}t:{var lt=H.navigator;if(lt){var ht=lt.userAgent;if(ht){ot=ht;break t}}ot=""}function ft(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dt(t){const e={};for(const n in t)e[n]=t[n];return e}var pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<pt.length;e++)n=pt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function mt(t){return mt[" "](t),t}mt[" "]=B;var yt,vt,wt=ut(ot,"Opera"),bt=ut(ot,"Trident")||ut(ot,"MSIE"),Tt=ut(ot,"Edge"),Et=Tt||bt,Ct=ut(ot,"Gecko")&&!(ut(ot.toLowerCase(),"webkit")&&!ut(ot,"Edge"))&&!(ut(ot,"Trident")||ut(ot,"MSIE"))&&!ut(ot,"Edge"),xt=ut(ot.toLowerCase(),"webkit")&&!ut(ot,"Edge");function St(){var t=H.document;return t?t.documentMode:void 0}t:{var At="",It=(vt=ot,Ct?/rv:([^\);]+)(\)|;)/.exec(vt):Tt?/Edge\/([\d\.]+)/.exec(vt):bt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(vt):xt?/WebKit\/(\S+)/.exec(vt):wt?/(?:Version)[ \/]?(\S+)/.exec(vt):void 0);if(It&&(At=It?It[1]:""),bt){var Nt=St();if(null!=Nt&&Nt>parseFloat(At)){yt=String(Nt);break t}}yt=At}var Dt,kt={};function Lt(){return function(t){var e=kt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=at(String(yt)).split("."),n=at("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=ct(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||ct(0==i[2].length,0==s[2].length)||ct(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(H.document&&bt){var Rt=St();Dt=Rt||(parseInt(yt,10)||void 0)}else Dt=void 0;var _t=Dt,Ot=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",B,e),H.removeEventListener("test",B,e)}catch(t){}return t}();function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Mt(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ct){t:{try{mt(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ft[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mt.Z.h.call(this)}}Pt.prototype.h=function(){this.defaultPrevented=!0},J(Mt,Pt);var Ft={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),qt=0;function Vt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++qt,this.ca=this.fa=!1}function Ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ht(t){this.src=t,this.g={},this.h=0}function Bt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=et(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $t(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Ht.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$t(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Vt(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var zt="closure_lm_"+(1e6*Math.random()|0),Wt={};function Kt(t,e,n,r,i){if(r&&r.once)return Xt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Kt(t,e[s],n,r,i);return null}return n=ne(n),t&&t[jt]?t.N(e,n,z(r)?!!r.capture:!!r,i):Gt(t,e,n,!1,r,i)}function Gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=z(i)?!!i.capture:!!i,a=te(t);if(a||(t[zt]=a=new Ht(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Zt;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Jt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Xt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xt(t,e[s],n,r,i);return null}return n=ne(n),t&&t[jt]?t.O(e,n,z(r)?!!r.capture:!!r,i):Gt(t,e,n,!0,r,i)}function Qt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Qt(t,e[s],n,r,i);else r=z(r)?!!r.capture:!!r,n=ne(n),t&&t[jt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$t(s=t.g[e],n,r,i))&&(Ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=te(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$t(e,n,r,i)),(n=-1<t?e[t]:null)&&Yt(n))}function Yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[jt])Bt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Jt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=te(e))?(Bt(n,t),0==n.h&&(n.src=null,e[zt]=null)):Ut(t)}}}function Jt(t){return t in Wt?Wt[t]:Wt[t]="on"+t}function Zt(t,e){if(t.ca)t=!0;else{e=new Mt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Yt(t),t=n.call(r,e)}return t}function te(t){return(t=t[zt])instanceof Ht?t:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(t){return"function"==typeof t?t:(t[ee]||(t[ee]=function(e){return t.handleEvent(e)}),t[ee])}function re(){Z.call(this),this.i=new Ht(this),this.P=this,this.I=null}function ie(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;gt(e=new Pt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=se(o,r,!0,e)&&i}if(i=se(o=e.g=t,r,!0,e)&&i,i=se(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=se(o=e.g=n[s],r,!1,e)&&i}function se(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Bt(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}J(re,Z),re.prototype[jt]=!0,re.prototype.removeEventListener=function(t,e,n,r){Qt(this,t,e,n,r)},re.prototype.M=function(){if(re.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ut(n[r]);delete e.g[t],e.h--}}this.I=null},re.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var oe=H.JSON.stringify;function ae(){var t=pe;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ue,ce=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new le),(t=>t.reset()));class le{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function he(t){H.setTimeout((()=>{throw t}),0)}function fe(t,e){ue||function(){var t=H.Promise.resolve(void 0);ue=function(){t.then(ge)}}(),de||(ue(),de=!0),pe.add(t,e)}var de=!1,pe=new class{constructor(){this.h=this.g=null}add(t,e){const n=ce.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ge(){for(var t;t=ae();){try{t.h.call(t.g)}catch(t){he(t)}var e=ce;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}de=!1}function me(t,e){re.call(this),this.h=t||1,this.g=e||H,this.j=Q(this.kb,this),this.l=Date.now()}function ye(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ve(t,e,n){if("function"==typeof t)n&&(t=Q(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Q(t.handleEvent,t)}return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function we(t){t.g=ve((()=>{t.g=null,t.i&&(t.i=!1,we(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}J(me,re),(j=me.prototype).da=!1,j.S=null,j.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ie(this,"tick"),this.da&&(ye(this),this.start()))}},j.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},j.M=function(){me.Z.M.call(this),ye(this),delete this.g};class be extends Z{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:we(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(t){Z.call(this),this.h=t,this.g={}}J(Te,Z);var Ee=[];function Ce(t,e,n,r){Array.isArray(n)||(n&&(Ee[0]=n.toString()),n=Ee);for(var i=0;i<n.length;i++){var s=Kt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function xe(t){ft(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Yt(t)}),t),t.g={}}function Se(){this.g=!0}function Ae(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return oe(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Te.prototype.M=function(){Te.Z.M.call(this),xe(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Se.prototype.Aa=function(){this.g=!1},Se.prototype.info=function(){};var Ie={},Ne=null;function De(){return Ne=Ne||new re}function ke(t){Pt.call(this,Ie.Ma,t)}function Le(t){const e=De();ie(e,new ke(e,t))}function Re(t,e){Pt.call(this,Ie.STAT_EVENT,t),this.stat=e}function _e(t){const e=De();ie(e,new Re(e,t))}function Oe(t,e){Pt.call(this,Ie.Na,t),this.size=e}function Pe(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return H.setTimeout((function(){t()}),e)}Ie.Ma="serverreachability",J(ke,Pt),Ie.STAT_EVENT="statevent",J(Re,Pt),Ie.Na="timingevent",J(Oe,Pt);var Me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function je(){}function qe(t){return t.h||(t.h=t.i())}function Ve(){}je.prototype.h=null;var Ue,He={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Be(){Pt.call(this,"d")}function $e(){Pt.call(this,"c")}function ze(){}function We(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Te(this),this.P=Ge,t=Et?125:void 0,this.W=new me(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ke}function Ke(){this.i=null,this.g="",this.h=!1}J(Be,Pt),J($e,Pt),J(ze,je),ze.prototype.g=function(){return new XMLHttpRequest},ze.prototype.i=function(){return{}},Ue=new ze;var Ge=45e3,Xe={},Qe={};function Ye(t,e,n){t.K=1,t.v=Tn(gn(e)),t.s=n,t.U=!0,Je(t,null)}function Je(t,e){t.F=Date.now(),nn(t),t.A=gn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),On(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ke,t.g=Or(t.l,n?e:null,!t.s),0<t.O&&(t.L=new be(Q(t.Ia,t,t.g),t.O)),Ce(t.V,t.g,"readystatechange",t.gb),e=t.H?dt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Le(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ze(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function tn(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=en(t,n),r==Qe){4==e&&(t.o=4,_e(14),i=!1),Ae(t.j,t.m,null,"[Incomplete Response]");break}if(r==Xe){t.o=4,_e(15),Ae(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ae(t.j,t.m,r,null),un(t,r)}Ze(t)&&r!=Qe&&r!=Xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,_e(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ar(e),e.L=!0,_e(11))):(Ae(t.j,t.m,n,"[Invalid Chunked Response]"),an(t),on(t))}function en(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Qe:(n=Number(e.substring(n,r)),isNaN(n)?Xe:(r+=1)+n>e.length?Qe:(e=e.substr(r,n),t.C=r+n,e))}function nn(t){t.Y=Date.now()+t.P,rn(t,t.P)}function rn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Pe(Q(t.eb,t),e)}function sn(t){t.B&&(H.clearTimeout(t.B),t.B=null)}function on(t){0==t.l.G||t.I||Dr(t.l,t)}function an(t){sn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ye(t.W),xe(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function un(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Vn(n.i,t)))if(n.I=t.N,!t.J&&Vn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Nr(n),yr(n)}Sr(n),_e(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Pe(Q(n.ab,n),6e3));if(1>=qn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Lr(n,11)}else if((t.J||n.g==t)&&Nr(n),!st(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(ut(t,"spdy")||ut(t,"quic")||ut(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Un(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,bn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=_r(r,r.H?r.la:null,r.W),o.J){Hn(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(sn(a),nn(a)),r.g=o}else xr(r);0<n.l.length&&br(n)}else"stop"!=c[0]&&"close"!=c[0]||Lr(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Lr(n,7):mr(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}Le(4)}catch(t){}}function cn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if($(t)||"string"==typeof t)nt(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if($(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if($(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ln(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ln)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function hn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];fn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)fn(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(j=We.prototype).setTimeout=function(t){this.P=t},j.gb=function(t){t=t.target;const e=this.L;e&&3==hr(t)?e.l():this.Ia(t)},j.Ia=function(t){try{if(t==this.g)t:{const l=hr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Et||this.g&&(this.h.h||this.g.ga()||fr(this.g)))){this.I||4!=l||7==e||Le(8==e||0>=h?3:2),sn(this);var n=this.g.ba();this.N=n;e:if(Ze(this)){var r=fr(this.g);t="";var i=r.length,s=4==hr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){an(this),on(this);var o="";break e}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!st(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,_e(12),an(this),on(this);break t}Ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,un(this,n)}this.U?(tn(this,l,o),Et&&this.i&&3==l&&(Ce(this.V,this.W,"tick",this.fb),this.W.start())):(Ae(this.j,this.m,o,null),un(this,o)),4==l&&an(this),this.i&&!this.I&&(4==l?Dr(this.l,this):(this.i=!1,nn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,_e(12)):(this.o=0,_e(13)),an(this),on(this)}}}catch(t){}},j.fb=function(){if(this.g){var t=hr(this.g),e=this.g.ga();this.C<e.length&&(sn(this),tn(this,t,e),this.i&&4!=t&&nn(this))}},j.cancel=function(){this.I=!0,an(this)},j.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Le(3),_e(17)),an(this),this.o=2,on(this)):rn(this,this.Y-t)},(j=ln.prototype).R=function(){hn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},j.T=function(){return hn(this),this.g.concat()},j.get=function(t,e){return fn(this.h,t)?this.h[t]:e},j.set=function(t,e){fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},j.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var dn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof pn){this.g=void 0!==e?e:t.g,mn(this,t.j),this.s=t.s,yn(this,t.i),vn(this,t.m),this.l=t.l,e=t.h;var n=new kn;n.i=e.i,e.g&&(n.g=new ln(e.g),n.h=e.h),wn(this,n),this.o=t.o}else t&&(n=String(t).match(dn))?(this.g=!!e,mn(this,n[1]||"",!0),this.s=En(n[2]||""),yn(this,n[3]||"",!0),vn(this,n[4]),this.l=En(n[5]||"",!0),wn(this,n[6]||"",!0),this.o=En(n[7]||"")):(this.g=!!e,this.h=new kn(null,this.g))}function gn(t){return new pn(t)}function mn(t,e,n){t.j=n?En(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yn(t,e,n){t.i=n?En(e,!0):e}function vn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wn(t,e,n){e instanceof kn?(t.h=e,function(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Rn(this,e),On(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Cn(e,Nn)),t.h=new kn(e,t.g))}function bn(t,e,n){t.h.set(e,n)}function Tn(t){return bn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function En(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,xn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cn(e,Sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Cn(e,Sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Cn(n,"/"==n.charAt(0)?In:An,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cn(n,Dn)),t.join("")};var Sn=/[#\/\?@]/g,An=/[#\?:]/g,In=/[#\?]/g,Nn=/[#\?@]/g,Dn=/#/g;function kn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new ln,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Rn(t,e){Ln(t),e=Pn(t,e),fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,fn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&hn(t)))}function _n(t,e){return Ln(t),e=Pn(t,e),fn(t.g.h,e)}function On(t,e,n){Rn(t,e),0<n.length&&(t.i=null,t.g.set(Pn(t,e),it(n)),t.h+=n.length)}function Pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(j=kn.prototype).add=function(t,e){Ln(this),this.i=null,t=Pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},j.forEach=function(t,e){Ln(this),this.g.forEach((function(n,r){nt(n,(function(n){t.call(e,n,r,this)}),this)}),this)},j.T=function(){Ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},j.R=function(t){Ln(this);var e=[];if("string"==typeof t)_n(this,t)&&(e=rt(e,this.g.get(Pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=rt(e,t[n])}return e},j.set=function(t,e){return Ln(this),this.i=null,_n(this,t=Pn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},j.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},j.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Mn(t){this.l=t||Fn,H.PerformanceNavigationTiming?t=0<(t=H.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fn=10;function jn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function qn(t){return t.h?1:t.g?t.g.size:0}function Vn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Un(t,e){t.g?t.g.add(e):t.h=e}function Hn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Bn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return it(t.i)}function $n(){}function zn(){this.g=new $n}function Wn(t,e,n){const r=n||"";try{cn(t,(function(t,n){let i=t;z(t)&&(i=oe(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Kn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Gn(t){this.l=t.$b||null,this.j=t.ib||!1}function Xn(t,e){re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mn.prototype.cancel=function(){if(this.i=Bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},$n.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)},$n.prototype.parse=function(t){return H.JSON.parse(t,void 0)},J(Gn,je),Gn.prototype.g=function(){return new Xn(this.l,this.j)},Gn.prototype.i=function(t){return function(){return t}}({}),J(Xn,re);var Qn=0;function Yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Jn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zn(t)}function Zn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(j=Xn.prototype).open=function(t,e){if(this.readyState!=Qn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zn(this)},j.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Jn(this)),this.readyState=Qn},j.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==H.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},j.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jn(this):Zn(this),3==this.readyState&&Yn(this)}},j.Ua=function(t){this.g&&(this.response=this.responseText=t,Jn(this))},j.Ta=function(t){this.g&&(this.response=t,Jn(this))},j.ha=function(){this.g&&Jn(this)},j.setRequestHeader=function(t,e){this.v.append(t,e)},j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var tr=H.JSON.parse;function er(t){re.call(this),this.headers=new ln,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nr,this.K=this.L=!1}J(er,re);var nr="",rr=/^https?$/i,ir=["POST","PUT"];function sr(t){return"content-type"==t.toLowerCase()}function or(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ar(t),cr(t)}function ar(t){t.D||(t.D=!0,ie(t,"complete"),ie(t,"error"))}function ur(t){if(t.h&&void 0!==U&&(!t.C[1]||4!=hr(t)||2!=t.ba()))if(t.v&&4==hr(t))ve(t.Fa,0,t);else if(ie(t,"readystatechange"),4==hr(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(dn)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!rr.test(i?i.toLowerCase():"")}n=r}if(n)ie(t,"complete"),ie(t,"success");else{t.m=6;try{var o=2<hr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",ar(t)}}finally{cr(t)}}}function cr(t,e){if(t.g){lr(t);const n=t.g,r=t.C[0]?B:null;t.g=null,t.C=null,e||ie(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function lr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function hr(t){return t.g?t.g.readyState:0}function fr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function dr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return ft(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):bn(t,e,n))}function pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gr(t){this.za=0,this.l=[],this.h=new Se,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pr("baseRetryDelayMs",5e3,t),this.$a=pr("retryDelaySeedMs",1e4,t),this.Ya=pr("forwardChannelMaxRetries",2,t),this.ra=pr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Mn(t&&t.concurrentRequestLimit),this.Ca=new zn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function mr(t){if(vr(t),3==t.G){var e=t.V++,n=gn(t.F);bn(n,"SID",t.J),bn(n,"RID",e),bn(n,"TYPE","terminate"),Er(t,n),(e=new We(t,t.h,e,void 0)).K=2,e.v=Tn(gn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&((new Image).src=e.v,n=!0),n||(e.g=Or(e.l,null),e.g.ea(e.v)),e.F=Date.now(),nn(e)}Rr(t)}function yr(t){t.g&&(Ar(t),t.g.cancel(),t.g=null)}function vr(t){yr(t),t.u&&(H.clearTimeout(t.u),t.u=null),Nr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&H.clearTimeout(t.m),t.m=null)}function wr(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&br(t)}function br(t){jn(t.i)||t.m||(t.m=!0,fe(t.Ha,t),t.C=0)}function Tr(t,e){var n;n=e?e.m:t.V++;const r=gn(t.F);bn(r,"SID",t.J),bn(r,"RID",n),bn(r,"AID",t.U),Er(t,r),t.o&&t.s&&dr(r,t.o,t.s),n=new We(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Un(t.i,n),Ye(n,r,e)}function Er(t,e){t.j&&cn({},(function(t,n){bn(e,n,t)}))}function Cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Q(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{Wn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function xr(t){t.g||t.u||(t.Y=1,fe(t.Ga,t),t.A=0)}function Sr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Pe(Q(t.Ga,t),kr(t,t.A)),t.A++,!0)}function Ar(t){null!=t.B&&(H.clearTimeout(t.B),t.B=null)}function Ir(t){t.g=new We(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=gn(t.oa);bn(e,"RID","rpc"),bn(e,"SID",t.J),bn(e,"CI",t.N?"0":"1"),bn(e,"AID",t.U),Er(t,e),bn(e,"TYPE","xmlhttp"),t.o&&t.s&&dr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tn(gn(e)),n.s=null,n.U=!0,Je(n,t)}function Nr(t){null!=t.v&&(H.clearTimeout(t.v),t.v=null)}function Dr(t,e){var n=null;if(t.g==e){Nr(t),Ar(t),t.g=null;var r=2}else{if(!Vn(t.i,e))return;n=e.D,Hn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;ie(r=De(),new Oe(r,n,e,i)),br(t)}else xr(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(qn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Pe(Q(t.Ha,t,e),kr(t,t.C)),t.C++,0)))}(t,e)||2==r&&Sr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Lr(t,5);break;case 4:Lr(t,10);break;case 3:Lr(t,6);break;default:Lr(t,2)}}function kr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Lr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=Q(t.jb,t);n||(n=new pn("//www.google.com/images/cleardot.gif"),H.location&&"http"==H.location.protocol||mn(n,"https"),Tn(n)),function(t,e){const n=new Se;if(H.Image){const r=new Image;r.onload=Y(Kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Y(Kn,n,r,"TestLoadImage: error",!1,e),r.onabort=Y(Kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Y(Kn,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else _e(2);t.G=0,t.j&&t.j.va(e),Rr(t),vr(t)}function Rr(t){t.G=0,t.I=-1,t.j&&(0==Bn(t.i).length&&0==t.l.length||(t.i.i.length=0,it(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){let r=function(t){return t instanceof pn?gn(t):new pn(t,void 0)}(n);if(""!=r.i)e&&yn(r,e+"."+r.i),vn(r,r.m);else{const t=H.location;r=function(t,e,n,r){var i=new pn(null,void 0);return t&&mn(i,t),e&&yn(i,e),n&&vn(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ft(t.aa,(function(t,e){bn(r,e,t)})),e=t.D,n=t.sa,e&&n&&bn(r,e,n),bn(r,"VER",t.ma),Er(t,r),r}function Or(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new er(new Gn({ib:!0})):new er(t.qa)).L=t.H,e}function Pr(){}function Mr(){if(bt&&!(10<=Number(_t)))throw Error("Environmental error: no available transport.")}function Fr(t,e){re.call(this),this.g=new gr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!st(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!st(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Vr(this)}function jr(t){Be.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function qr(){$e.call(this),this.status=1}function Vr(t){this.g=t}(j=er.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ue.g(),this.C=this.u?qe(this.u):qe(Ue),this.g.onreadystatechange=Q(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void or(this,t)}t=n||"";const i=new ln(this.headers);r&&cn(r,(function(t,e){i.set(e,t)})),r=function(t){t:{var e=sr;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=H.FormData&&t instanceof H.FormData,!(0<=et(ir,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lr(this),0<this.B&&((this.K=function(t){return bt&&Lt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Q(this.pa,this)):this.A=ve(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){or(this,t)}},j.pa=function(){void 0!==U&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ie(this,"timeout"),this.abort(8))},j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ie(this,"complete"),ie(this,"abort"),cr(this))},j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cr(this,!0)),er.Z.M.call(this)},j.Fa=function(){this.s||(this.F||this.v||this.l?ur(this):this.cb())},j.cb=function(){ur(this)},j.ba=function(){try{return 2<hr(this)?this.g.status:-1}catch(t){return-1}},j.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},j.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),tr(e)}},j.Da=function(){return this.m},j.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(j=gr.prototype).ma=8,j.G=1,j.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},j.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new We(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=dt(s),gt(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Cr(this,i,e),bn(n=gn(this.F),"RID",t),bn(n,"CVER",22),this.D&&bn(n,"X-HTTP-Session-Id",this.D),Er(this,n),this.o&&s&&dr(n,this.o,s),Un(this.i,i),this.Ra&&bn(n,"TYPE","init"),this.ja?(bn(n,"$req",e),bn(n,"SID","null"),i.$=!0,Ye(i,n,null)):Ye(i,n,e),this.G=2}}else 3==this.G&&(t?Tr(this,t):0==this.l.length||jn(this.i)||Tr(this))},j.Ga=function(){if(this.u=null,Ir(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Pe(Q(this.bb,this),t)}},j.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_e(10),yr(this),Ir(this))},j.ab=function(){null!=this.v&&(this.v=null,yr(this),Sr(this),_e(19))},j.jb=function(t){t?(this.h.info("Successfully pinged google.com"),_e(2)):(this.h.info("Failed to ping google.com"),_e(1))},(j=Pr.prototype).xa=function(){},j.wa=function(){},j.va=function(){},j.ua=function(){},j.Oa=function(){},Mr.prototype.g=function(t,e){return new Fr(t,e)},J(Fr,re),Fr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),fe(Q(t.hb,t,e))),_e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),br(t)},Fr.prototype.close=function(){mr(this.g)},Fr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,wr(this.g,e)}else this.v?((e={}).__data__=oe(t),wr(this.g,e)):wr(this.g,t)},Fr.prototype.M=function(){this.g.j=null,delete this.j,mr(this.g),delete this.g,Fr.Z.M.call(this)},J(jr,Be),J(qr,$e),J(Vr,Pr),Vr.prototype.xa=function(){ie(this.g,"a")},Vr.prototype.wa=function(t){ie(this.g,new jr(t))},Vr.prototype.va=function(t){ie(this.g,new qr(t))},Vr.prototype.ua=function(){ie(this.g,"b")},Mr.prototype.createWebChannel=Mr.prototype.g,Fr.prototype.send=Fr.prototype.u,Fr.prototype.open=Fr.prototype.m,Fr.prototype.close=Fr.prototype.close,Me.NO_ERROR=0,Me.TIMEOUT=8,Me.HTTP_ERROR=6,Fe.COMPLETE="complete",Ve.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",re.prototype.listen=re.prototype.N,er.prototype.listenOnce=er.prototype.O,er.prototype.getLastError=er.prototype.La,er.prototype.getLastErrorCode=er.prototype.Da,er.prototype.getStatus=er.prototype.ba,er.prototype.getResponseJson=er.prototype.Qa,er.prototype.getResponseText=er.prototype.ga,er.prototype.send=er.prototype.ea;var Ur,Hr,Br=V.createWebChannelTransport=function(){return new Mr},$r=V.getStatEventTarget=function(){return De()},zr=V.ErrorCode=Me,Wr=V.EventType=Fe,Kr=V.Event=Ie,Gr=V.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Xr=V.FetchXmlHttpFactory=Gn,Qr=V.WebChannel=Ve,Yr=V.XhrIo=er,Jr={};function Zr(){throw new Error("setTimeout has not been defined")}function ti(){throw new Error("clearTimeout has not been defined")}function ei(t){if(Ur===setTimeout)return setTimeout(t,0);if((Ur===Zr||!Ur)&&setTimeout)return Ur=setTimeout,setTimeout(t,0);try{return Ur(t,0)}catch(e){try{return Ur.call(null,t,0)}catch(e){return Ur.call(this,t,0)}}}!function(){try{Ur="function"==typeof setTimeout?setTimeout:Zr}catch(t){Ur=Zr}try{Hr="function"==typeof clearTimeout?clearTimeout:ti}catch(t){Hr=ti}}();var ni,ri=[],ii=!1,si=-1;function oi(){ii&&ni&&(ii=!1,ni.length?ri=ni.concat(ri):si=-1,ri.length&&ai())}function ai(){if(!ii){var t=ei(oi);ii=!0;for(var e=ri.length;e;){for(ni=ri,ri=[];++si<e;)ni&&ni[si].run();si=-1,e=ri.length}ni=null,ii=!1,function(t){if(Hr===clearTimeout)return clearTimeout(t);if((Hr===ti||!Hr)&&clearTimeout)return Hr=clearTimeout,clearTimeout(t);try{Hr(t)}catch(e){try{return Hr.call(null,t)}catch(e){return Hr.call(this,t)}}}(t)}}function ui(t,e){this.fun=t,this.array=e}function ci(){}Jr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];ri.push(new ui(t,e)),1!==ri.length||ii||ei(ai)},ui.prototype.run=function(){this.fun.apply(null,this.array)},Jr.title="browser",Jr.browser=!0,Jr.env={},Jr.argv=[],Jr.version="",Jr.versions={},Jr.on=ci,Jr.addListener=ci,Jr.once=ci,Jr.off=ci,Jr.removeListener=ci,Jr.removeAllListeners=ci,Jr.emit=ci,Jr.prependListener=ci,Jr.prependOnceListener=ci,Jr.listeners=function(t){return[]},Jr.binding=function(t){throw new Error("process.binding is not supported")},Jr.cwd=function(){return"/"},Jr.chdir=function(t){throw new Error("process.chdir is not supported")},Jr.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}li.UNAUTHENTICATED=new li(null),li.GOOGLE_CREDENTIALS=new li("google-credentials-uid"),li.FIRST_PARTY=new li("first-party-uid"),li.MOCK_USER=new li("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let hi="9.6.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new S("@firebase/firestore");function di(){return fi.logLevel}function pi(t,...e){if(fi.logLevel<=b.DEBUG){const n=e.map(yi);fi.debug(`Firestore (${hi}): ${t}`,...n)}}function gi(t,...e){if(fi.logLevel<=b.ERROR){const n=e.map(yi);fi.error(`Firestore (${hi}): ${t}`,...n)}}function mi(t,...e){if(fi.logLevel<=b.WARN){const n=e.map(yi);fi.warn(`Firestore (${hi}): ${t}`,...n)}}function yi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t="Unexpected state"){const e=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: `+t;throw gi(e),new Error(e)}function wi(t,e){t||vi()}function bi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ei extends l{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Si{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(li.UNAUTHENTICATED)))}shutdown(){}}class Ai{constructor(t){this.t=t,this.currentUser=li.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ci,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{pi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(pi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ci)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(pi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(wi("string"==typeof e.accessToken),new xi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wi(null===t||"string"==typeof t),new li(t)}}class Ii{constructor(t,e,n){this.type="FirstParty",this.user=li.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ni{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ii(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(li.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Di{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ki{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>{return null!=(t=n).error&&pi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token);var t}))};const n=t=>{pi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):pi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(wi("string"==typeof t.token),new Di(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.I=-1;class _i{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Ri(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Oi(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ei(Ti.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ei(Ti.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ei(Ti.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ei(Ti.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Mi.fromMillis(Date.now())}static fromDate(t){return Mi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Mi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Oi(this.nanoseconds,t.nanoseconds):Oi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Fi(t)}static min(){return new Fi(new Mi(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n){void 0===e?e=0:e>t.length&&vi(),void 0===n?n=t.length-e:n>t.length-e&&vi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ui.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ui?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Hi extends Ui{construct(t,e,n){return new Hi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ei(Ti.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Hi(e)}static emptyPath(){return new Hi([])}}const Bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $i extends Ui{construct(t,e,n){return new $i(t,e,n)}static isValidIdentifier(t){return Bi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$i.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $i(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ei(Ti.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Ei(Ti.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ei(Ti.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Ei(Ti.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $i(e)}static emptyPath(){return new $i([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new zi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new zi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Oi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}zi.EMPTY_BYTE_STRING=new zi("");const Wi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(t){if(wi(!!t),"string"==typeof t){let e=0;const n=Wi.exec(t);if(wi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Gi(t.seconds),nanos:Gi(t.nanos)}}function Gi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Xi(t){return"string"==typeof t?zi.fromBase64String(t):zi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Yi(t){const e=t.mapValue.fields.__previous_value__;return Qi(e)?Yi(e):e}function Ji(t){const e=Ki(t.mapValue.fields.__local_write_time__.timestampValue);return new Mi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return null==t}function ts(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){this.path=t}static fromPath(t){return new es(Hi.fromString(t))}static fromName(t){return new es(Hi.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Hi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Hi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new es(new Hi(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qi(t)?4:10:vi()}function rs(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ki(t.timestampValue),r=Ki(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Xi(t.bytesValue).isEqual(Xi(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Gi(t.geoPointValue.latitude)===Gi(e.geoPointValue.latitude)&&Gi(t.geoPointValue.longitude)===Gi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Gi(t.integerValue)===Gi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Gi(t.doubleValue),r=Gi(e.doubleValue);return n===r?ts(n)===ts(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],rs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ji(n)!==ji(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!rs(n[t],r[t])))return!1;return!0}(t,e);default:return vi()}var r}function is(t,e){return void 0!==(t.values||[]).find((t=>rs(t,e)))}function ss(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return Oi(n,r);switch(n){case 0:return 0;case 1:return Oi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Gi(t.integerValue||t.doubleValue),r=Gi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return os(t.timestampValue,e.timestampValue);case 4:return os(Ji(t),Ji(e));case 5:return Oi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Xi(t),r=Xi(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Oi(n[t],r[t]);if(0!==e)return e}return Oi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Oi(Gi(t.latitude),Gi(e.latitude));return 0!==n?n:Oi(Gi(t.longitude),Gi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=ss(n[t],r[t]);if(e)return e}return Oi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Oi(r[t],s[t]);if(0!==e)return e;const o=ss(n[r[t]],i[s[t]]);if(0!==o)return o}return Oi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw vi()}}function os(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Oi(t,e);const n=Ki(t),r=Ki(e),i=Oi(n.seconds,r.seconds);return 0!==i?i:Oi(n.nanos,r.nanos)}function as(t){return us(t)}function us(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ki(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,es.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=us(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${us(t.fields[i])}`;return n+"}"}(t.mapValue):vi()}function cs(t){return!!t&&"integerValue"in t}function ls(t){return!!t&&"arrayValue"in t}function hs(t){return!!t&&"nullValue"in t}function fs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ds(t){return!!t&&"mapValue"in t}function ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ps(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.value=t}static empty(){return new gs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ds(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ps(e)}setAll(t){let e=$i.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ps(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ds(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return rs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ds(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qi(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new gs(ps(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ms(t,0,Fi.min(),gs.empty(),0)}static newFoundDocument(t,e,n){return new ms(t,1,e,n,0)}static newNoDocument(t,e){return new ms(t,2,e,gs.empty(),0)}static newUnknownDocument(t,e){return new ms(t,3,e,gs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ms&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ms(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function vs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ys(t,e,n,r,i,s,o)}function ws(t){const e=bi(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+as(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Rs(e.startAt)),e.endAt&&(t+="|ub:",t+=Rs(e.endAt)),e.R=t}return e.R}function bs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Os(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!rs(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ms(t.startAt,e.startAt)&&Ms(t.endAt,e.endAt)}function Ts(t){return es.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Es extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Cs(t,e,n):"array-contains"===e?new Is(t,n):"in"===e?new Ns(t,n):"not-in"===e?new Ds(t,n):"array-contains-any"===e?new ks(t,n):new Es(t,e,n)}static P(t,e,n){return"in"===e?new xs(t,n):new Ss(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ss(e,this.value)):null!==e&&ns(this.value)===ns(e)&&this.v(ss(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return vi()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Cs extends Es{constructor(t,e,n){super(t,e,n),this.key=es.fromName(n.referenceValue)}matches(t){const e=es.comparator(t.key,this.key);return this.v(e)}}class xs extends Es{constructor(t,e){super(t,"in",e),this.keys=As("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ss extends Es{constructor(t,e){super(t,"not-in",e),this.keys=As("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function As(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>es.fromName(t.referenceValue)))}class Is extends Es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ls(e)&&is(e.arrayValue,this.value)}}class Ns extends Es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&is(this.value.arrayValue,e)}}class Ds extends Es{constructor(t,e){super(t,"not-in",e)}matches(t){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!is(this.value.arrayValue,e)}}class ks extends Es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ls(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>is(this.value.arrayValue,t)))}}class Ls{constructor(t,e){this.position=t,this.before=e}}function Rs(t){return`${t.before?"b":"a"}:${t.position.map((t=>as(t))).join(",")}`}class _s{constructor(t,e="asc"){this.field=t,this.dir=e}}function Os(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ps(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?es.comparator(es.fromName(o.referenceValue),n.key):ss(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ms(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function js(t,e,n,r,i,s,o,a){return new Fs(t,e,n,r,i,s,o,a)}function qs(t){return new Fs(t)}function Vs(t){return!Zi(t.limit)&&"F"===t.limitType}function Us(t){return!Zi(t.limit)&&"L"===t.limitType}function Hs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bs(t){for(const e of t.filters)if(e.V())return e.field;return null}function $s(t){return null!==t.collectionGroup}function zs(t){const e=bi(t);if(null===e.S){e.S=[];const t=Bs(e),n=Hs(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new _s(t)),e.S.push(new _s($i.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new _s($i.keyField(),t))}}}return e.S}function Ws(t){const e=bi(t);if(!e.D)if("F"===e.limitType)e.D=vs(e.path,e.collectionGroup,zs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of zs(e)){const e="desc"===n.dir?"asc":"desc";t.push(new _s(n.field,e))}const n=e.endAt?new Ls(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ls(e.startAt.position,!e.startAt.before):null;e.D=vs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Ks(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gs(t,e){return bs(Ws(t),Ws(e))&&t.limitType===e.limitType}function Xs(t){return`${ws(Ws(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${as(e.value)}`})).join(", ")}]`),Zi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+Rs(t.startAt)),t.endAt&&(e+=", endAt: "+Rs(t.endAt)),`Target(${e})`}(Ws(t))}; limitType=${t.limitType})`}function Ys(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):es.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!Ps(n.startAt,zs(n),r)||n.endAt&&Ps(n.endAt,zs(n),r)));var n,r}function Js(t){return(e,n)=>{let r=!1;for(const i of zs(t)){const t=Zs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Zs(t,e,n){const r=t.field.isKeyField()?es.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ss(r,i):vi()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return vi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function eo(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._=void 0}}function ro(t,e,n){return t instanceof oo?ao(t,e):t instanceof uo?co(t,e):n}function io(t,e){var n,r;return t instanceof lo?cs(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class so extends no{}class oo extends no{constructor(t){super(),this.elements=t}}function ao(t,e){const n=fo(e);for(const e of t.elements)n.some((t=>rs(t,e)))||n.push(e);return{arrayValue:{values:n}}}class uo extends no{constructor(t){super(),this.elements=t}}function co(t,e){let n=fo(e);for(const e of t.elements)n=n.filter((t=>!rs(t,e)));return{arrayValue:{values:n}}}class lo extends no{constructor(t,e){super(),this.k=t,this.N=e}}function ho(t){return Gi(t.integerValue||t.doubleValue)}function fo(t){return ls(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class go{}function mo(t,e,n){var r;t instanceof bo?function(t,e,n){const r=t.value.clone(),i=Co(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof To?function(t,e,n){if(!po(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Co(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Eo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function yo(t,e,n){var r;t instanceof bo?function(t,e,n){if(!po(t.precondition,e))return;const r=t.value.clone(),i=xo(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(wo(e),r).setHasLocalMutations()}(t,e,n):t instanceof To?function(t,e,n){if(!po(t.precondition,e))return;const r=xo(t.fieldTransforms,n,e),i=e.data;i.setAll(Eo(t)),i.setAll(r),e.convertToFoundDocument(wo(e),i).setHasLocalMutations()}(t,e,n):(r=e,po(t.precondition,r)&&r.convertToNoDocument(Fi.min()))}function vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Pi(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof oo&&r instanceof oo||n instanceof uo&&r instanceof uo?Pi(n.elements,r.elements,rs):n instanceof lo&&r instanceof lo?rs(n.N,r.N):n instanceof so&&r instanceof so);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}function wo(t){return t.isFoundDocument()?t.version:Fi.min()}class bo extends go{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class To extends go{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Eo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Co(t,e,n){const r=new Map;wi(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ro(o,a,n[i]))}return r}function xo(t,e,n){const r=new Map;for(const a of t){const t=a.transform,u=n.data.field(a.field);r.set(a.field,(s=u,o=e,(i=t)instanceof so?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof oo?ao(i,s):i instanceof uo?co(i,s):function(t,e){const n=io(t,e),r=ho(n)+ho(t.N);return cs(n)&&cs(t.N)?eo(r):to(t.k,r)}(i,s)))}var i,s,o;return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,Io;function No(t){if(void 0===t)return gi("GRPC error has no .code"),Ti.UNKNOWN;switch(t){case Ao.OK:return Ti.OK;case Ao.CANCELLED:return Ti.CANCELLED;case Ao.UNKNOWN:return Ti.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return Ti.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return Ti.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return Ti.INTERNAL;case Ao.UNAVAILABLE:return Ti.UNAVAILABLE;case Ao.UNAUTHENTICATED:return Ti.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return Ti.INVALID_ARGUMENT;case Ao.NOT_FOUND:return Ti.NOT_FOUND;case Ao.ALREADY_EXISTS:return Ti.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return Ti.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return Ti.FAILED_PRECONDITION;case Ao.ABORTED:return Ti.ABORTED;case Ao.OUT_OF_RANGE:return Ti.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return Ti.UNIMPLEMENTED;case Ao.DATA_LOSS:return Ti.DATA_LOSS;default:return vi()}}(Io=Ao||(Ao={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(t,e){this.comparator=t,this.root=e||Lo.EMPTY}insert(t,e){return new Do(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lo.BLACK,null,null))}remove(t){return new Do(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ko(this.root,t,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ko(this.root,t,this.comparator,!0)}}class ko{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lo{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Lo.RED,this.left=null!=r?r:Lo.EMPTY,this.right=null!=i?i:Lo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Lo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Lo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Lo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vi();if(this.right.isRed())throw vi();const t=this.left.check();if(t!==this.right.check())throw vi();return t+(this.isRed()?0:1)}}Lo.EMPTY=null,Lo.RED=!0,Lo.BLACK=!1,Lo.EMPTY=new class{constructor(){this.size=0}get key(){throw vi()}get value(){throw vi()}get color(){throw vi()}get left(){throw vi()}get right(){throw vi()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Lo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.comparator=t,this.data=new Do(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ro))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ro(this.comparator);return e.data=t,e}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Do(es.comparator);function Po(){return Oo}const Mo=new Do(es.comparator);function Fo(){return Mo}new Do(es.comparator);const jo=new Ro(es.comparator);function qo(...t){let e=jo;for(const n of t)e=e.add(n);return e}const Vo=new Ro(Oi);function Uo(){return Vo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Bo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ho(Fi.min(),n,Uo(),Po(),qo())}}class Bo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Bo(zi.EMPTY_BYTE_STRING,e,qo(),qo(),qo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.O=r}}class zo{constructor(t,e){this.targetId=t,this.F=e}}class Wo{constructor(t,e,n=zi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ko{constructor(){this.M=0,this.L=Qo(),this.B=zi.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=qo(),e=qo(),n=qo();return this.L.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:vi()}})),new Bo(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=Qo()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Go{constructor(t){this.et=t,this.nt=new Map,this.st=Po(),this.it=Xo(),this.rt=new Ro(Oi)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.at(e,t.O):this.ct(e,t.key,t.O);for(const e of t.removedTargetIds)this.ct(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:vi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.F.count,r=this.wt(e);if(r){const t=r.target;if(Ts(t))if(0===n){const n=new es(t.path);this.ct(e,n,ms.newNoDocument(n,Fi.min()))}else wi(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ts(i.target)){const e=new es(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,ms.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}}));let n=qo();this.it.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Ho(t,e,this.rt,this.st,n);return this.st=Po(),this.it=Xo(),this.rt=new Ro(Oi),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Ko,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Ro(Oi),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||pi("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Ko),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function Xo(){return new Do(es.comparator)}function Qo(){return new Do(es.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={asc:"ASCENDING",desc:"DESCENDING"},Jo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Zo{constructor(t,e){this.databaseId=t,this.C=e}}function ta(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.C?e.toBase64():e.toUint8Array()}function na(t){return wi(!!t),Fi.fromTimestamp(function(t){const e=Ki(t);return new Mi(e.seconds,e.nanos)}(t))}function ra(t,e){return(n=t,new Hi(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function ia(t){const e=Hi.fromString(t);return wi(Ta(e)),e}function sa(t,e){const n=ia(e);if(n.get(1)!==t.databaseId.projectId)throw new Ei(Ti.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ei(Ti.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new es(ca(n))}function oa(t,e){return ra(t.databaseId,e)}function aa(t){const e=ia(t);return 4===e.length?Hi.emptyPath():ca(e)}function ua(t){return new Hi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ca(t){return wi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function la(t,e){return{documents:[oa(t,e.path)]}}function ha(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=oa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(fs(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NAN"}};if(hs(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(fs(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NOT_NAN"}};if(hs(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:va(t.field),op:ya(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:va((e=t).field),direction:ma(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,u=e.limit,a.C||Zi(u)?u:{value:u});var a,u;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=pa(e.startAt)),e.endAt&&(n.structuredQuery.endAt=pa(e.endAt)),n}function fa(t){let e=aa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wi(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=da(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new _s(wa((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Zi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=ga(n.startAt));let c=null;return n.endAt&&(c=ga(n.endAt)),js(e,i,o,s,a,"F",u,c)}function da(t){return t?void 0!==t.unaryFilter?[ba(t)]:void 0!==t.fieldFilter?[(e=t,Es.create(wa(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return vi()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>da(t))).reduce(((t,e)=>t.concat(e))):vi():[];var e}function pa(t){return{before:t.before,values:t.position}}function ga(t){const e=!!t.before,n=t.values||[];return new Ls(n,e)}function ma(t){return Yo[t]}function ya(t){return Jo[t]}function va(t){return{fieldPath:t.canonicalString()}}function wa(t){return $i.fromServerFormat(t.fieldPath)}function ba(t){switch(t.unaryFilter.op){case"IS_NAN":const e=wa(t.unaryFilter.field);return Es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=wa(t.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wa(t.unaryFilter.field);return Es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wa(t.unaryFilter.field);return Es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return vi()}}function Ta(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xa(e)),e=Ca(t.get(n),e);return xa(e)}function Ca(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function xa(t){return t+""}class Sa{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Sa.store="owner",Sa.key="owner";class Aa{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Aa.store="mutationQueues",Aa.keyPath="userId";class Ia{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Ia.store="mutations",Ia.keyPath="batchId",Ia.userMutationsIndex="userMutationsIndex",Ia.userMutationsKeyPath=["userId","batchId"];class Na{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Ea(e)]}static key(t,e,n){return[t,Ea(e),n]}}Na.store="documentMutations",Na.PLACEHOLDER=new Na;class Da{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Da.store="remoteDocuments",Da.readTimeIndex="readTimeIndex",Da.readTimeIndexPath="readTime",Da.collectionReadTimeIndex="collectionReadTimeIndex",Da.collectionReadTimeIndexPath=["parentPath","readTime"];class ka{constructor(t){this.byteSize=t}}ka.store="remoteDocumentGlobal",ka.key="remoteDocumentGlobalKey";class La{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}La.store="targets",La.keyPath="targetId",La.queryTargetsIndexName="queryTargetsIndex",La.queryTargetsKeyPath=["canonicalId","targetId"];class Ra{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Ra.store="targetDocuments",Ra.keyPath=["targetId","path"],Ra.documentTargetsIndex="documentTargetsIndex",Ra.documentTargetsKeyPath=["path","targetId"];class _a{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}_a.key="targetGlobalKey",_a.store="targetGlobal";class Oa{constructor(t,e){this.collectionId=t,this.parent=e}}Oa.store="collectionParents",Oa.keyPath=["collectionId","parent"];class Pa{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Pa.store="clientMetadata",Pa.keyPath="clientId";class Ma{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Ma.store="bundles",Ma.keyPath="bundleId";class Fa{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Fa.store="namedQueries",Fa.keyPath="name";Aa.store,Ia.store,Na.store,Da.store,La.store,Sa.store,_a.store,Ra.store,Pa.store,ka.store,Oa.store,Ma.store,Fa.store;const ja="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&vi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Va(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Va?e:Va.resolve(e)}catch(t){return Va.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Va.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Va.reject(e)}static resolve(t){return new Va(((e,n)=>{e(t)}))}static reject(t){return new Va(((e,n)=>{n(t)}))}static waitFor(t){return new Va(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Va.resolve(!1);for(const n of t)e=e.next((t=>t?Va.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&mo(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&yo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&yo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Fi.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),qo())}isEqual(t){return this.batchId===t.batchId&&Pi(this.mutations,t.mutations,((t,e)=>vo(t,e)))&&Pi(this.baseMutations,t.baseMutations,((t,e)=>vo(t,e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t,e,n,r,i=Fi.min(),s=Fi.min(),o=zi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ba(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.Gt=t}}function za(t){const e=fa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ks(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.zt=new Ka}addToCollectionParentIndex(t,e){return this.zt.add(e),Va.resolve()}getCollectionParents(t,e){return Va.resolve(this.zt.getEntries(e))}}class Ka{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ro(Hi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ro(Hi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ga(t,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.DEFAULT_COLLECTION_PERCENTILE=10,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ga.DEFAULT=new Ga(41943040,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ga.DISABLED=new Ga(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Xa(0)}static re(){return new Xa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qa(t){if(t.code!==Ti.FAILED_PRECONDITION||t.message!==ja)throw t;pi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){qi(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Vi(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.changes=new Ya((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Fi.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:ms.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Va.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,es.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Sn(t,e.path):$s(e)?this.Dn(t,e,n):this.Cn(t,e,n);var r}Sn(t,e){return this.Rn(t,new es(e)).next((t=>{let e=Fo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const r=e.collectionGroup;let i=Fo();return this.Jt.getCollectionParents(t,r).next((s=>Va.forEach(s,(s=>{const o=(a=e,u=s.child(r),new Fs(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,r).next((t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ms.newInvalidDocument(n),r=r.insert(n,i)),yo(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Ys(e,n)||(r=r.remove(t))})),r)))}Nn(t,e,n){let r=qo();for(const t of e)for(const e of t.mutations)e instanceof To&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=qo(),r=qo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new tu(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{On(t){this.Fn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Fi.min())?this.Mn(t,e):this.Fn.vn(t,r).next((i=>{const s=this.Ln(e,i);return(Vs(e)||Us(e))&&this.Bn(e.limitType,s,r,n)?this.Mn(t,e):(di()<=b.DEBUG&&pi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Qs(e)),this.Fn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Ln(t,e){let n=new Ro(Js(t));return e.forEach(((e,r)=>{Ys(t,r)&&(n=n.add(r))})),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return di()<=b.DEBUG&&pi("QueryEngine","Using full collection scan to execute query:",Qs(e)),this.Fn.getDocumentsMatchingQuery(t,e,Fi.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new Do(Oi),this.Kn=new Ya((t=>ws(t)),bs),this.jn=Fi.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Za(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}function ru(t,e,n,r){return new nu(t,e,n,r)}async function iu(t,e){const n=bi(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.An.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Za(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=qo();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function su(t){const e=bi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function ou(t,e,n,r,i){let s=qo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Po();return n.forEach(((n,o)=>{const a=t.get(n),u=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Fi.min())?(e.removeEntry(n,u),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,u),s=s.insert(n,o)):pi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function au(t,e){const n=bi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.He.getTargetData(t,e).next((i=>i?(r=i,Va.resolve(r)):n.He.allocateTargetId(t).next((i=>(r=new Ba(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}async function uu(t,e,n){const r=bi(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ua(t))throw t;pi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function cu(t,e,n){const r=bi(t);let i=Fi.min(),s=qo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=bi(t),i=r.Kn.get(n);return void 0!==i?Va.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,Ws(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:Fi.min(),n?s:qo()))).next((t=>({documents:t,zn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Va.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),Va.resolve()}getNamedQuery(t,e){return Va.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,{name:(n=e).name,query:za(n.bundledQuery),readTime:na(n.readTime)}),Va.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.ts=new Ro(fu.es),this.ns=new Ro(fu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new fu(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new fu(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new es(new Hi([])),n=new fu(e,t),r=new fu(e,t+1),i=[];return this.ns.forEachInRange([n,r],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new es(new Hi([])),n=new fu(e,t),r=new fu(e,t+1);let i=qo();return this.ns.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new fu(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fu{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return es.comparator(t.key,e.key)||Oi(t.fs,e.fs)}static ss(t,e){return Oi(t.fs,e.fs)||es.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Ro(fu.es)}checkEmpty(t){return Va.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Ha(i,e,n,r);this.An.push(s);for(const e of r)this.ws=this.ws.add(new fu(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Va.resolve(s)}lookupMutationBatch(t,e){return Va.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return Va.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Va.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Va.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fu(e,0),r=new fu(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(t=>{const e=this._s(t.fs);i.push(e)})),Va.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ro(Oi);return e.forEach((t=>{const e=new fu(t,0),r=new fu(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],(t=>{n=n.add(t.fs)}))})),Va.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;es.isDocumentKey(i)||(i=i.child(""));const s=new fu(new es(i),0);let o=new Ro(Oi);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)}),s),Va.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){wi(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Va.forEach(e.mutations,(r=>{const i=new fu(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new fu(e,0),r=this.ws.firstAfterOrEqual(n);return Va.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Va.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Do(es.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Va.resolve(n?n.document.mutableCopy():ms.newInvalidDocument(e))}getEntries(t,e){let n=Po();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ms.newInvalidDocument(t))})),Va.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Po();const i=new es(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Ys(e,i)&&(r=r.insert(i.key,i.mutableCopy()))}return Va.resolve(r)}Es(t,e){return Va.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new gu(this)}getSize(t){return Va.resolve(this.size)}}class gu extends Ja{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),Va.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.persistence=t,this.Is=new Ya((t=>ws(t)),bs),this.lastRemoteSnapshotVersion=Fi.min(),this.highestTargetId=0,this.As=0,this.Rs=new hu,this.targetCount=0,this.bs=Xa.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Va.resolve()}getLastRemoteSnapshotVersion(t){return Va.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Va.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Va.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Va.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Xa(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Va.resolve()}updateTargetData(t,e){return this.ce(e),Va.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Va.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Va.waitFor(i).next((()=>r))}getTargetCount(t){return Va.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Va.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Va.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Va.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Va.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Va.resolve(n)}containsKey(t,e){return Va.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e){var n,r;this.Ps={},this.Be=new Li(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new mu(this),this.Jt=new Wa,this.Je=(n=this.Jt,r=t=>this.referenceDelegate.vs(t),new pu(n,r)),this.k=new $a(e),this.Ye=new lu(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new du(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){pi("MemoryPersistence","Starting transaction:",t);const r=new vu(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((t=>this.referenceDelegate.Ss(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ds(t,e){return Va.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class vu extends qa{constructor(t){super(),this.currentSequenceNumber=t}}class wu{constructor(t){this.persistence=t,this.Cs=new hu,this.Ns=null}static ks(t){return new wu(t)}get xs(){if(this.Ns)return this.Ns;throw vi()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Va.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Va.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Va.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Va.forEach(this.xs,(n=>{const r=es.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Va.or([()=>Va.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.activeTargetIds=Uo()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Fs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tu{constructor(){this.pi=new bu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new bu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){pi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){pi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Fi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);pi("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then((t=>(pi("RestConnection","Received: ",t),t)),(e=>{throw mi("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+hi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=xu[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise(((i,s)=>{const o=new Yr;o.listenOnce(Wr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case zr.NO_ERROR:const e=o.getResponseJson();pi("Connection","XHR received:",JSON.stringify(e)),i(e);break;case zr.TIMEOUT:pi("Connection",'RPC "'+t+'" timed out'),s(new Ei(Ti.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const n=o.getStatus();if(pi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ti).indexOf(e)>=0?e:Ti.UNKNOWN}(t.status);s(new Ei(e,t.message))}else s(new Ei(Ti.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ei(Ti.UNAVAILABLE,"Connection failed."));break;default:vi()}}finally{pi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Br(),s=$r(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Xr({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())||"object"==typeof navigator&&"ReactNative"===navigator.product||c().indexOf("Electron/")>=0||function(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||c().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");pi("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,h=!1;const f=new Su({Vi:t=>{h?pi("Connection","Not sending because WebChannel is closed:",t):(l||(pi("Connection","Opening WebChannel transport."),u.open(),l=!0),pi("Connection","WebChannel sending:",t),u.send(t))},Si:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Qr.EventType.OPEN,(()=>{h||pi("Connection","WebChannel transport opened.")})),d(u,Qr.EventType.CLOSE,(()=>{h||(h=!0,pi("Connection","WebChannel transport closed"),f.Oi())})),d(u,Qr.EventType.ERROR,(t=>{h||(h=!0,mi("Connection","WebChannel transport errored:",t),f.Oi(new Ei(Ti.UNAVAILABLE,"The operation could not be completed")))})),d(u,Qr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];wi(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){pi("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ao[t];if(void 0!==e)return No(e)}(t),n=i.message;void 0===e&&(e=Ti.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.Oi(new Ei(e,n)),u.close()}else pi("Connection","WebChannel received:",n),f.Fi(n)}})),d(s,Kr.STAT_EVENT,(t=>{t.stat===Gr.PROXY?pi("Connection","Detected buffering proxy"):t.stat===Gr.NOPROXY&&pi("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.$i()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new Zo(t,!0)}class Du{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Fe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&pi("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Fe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n,r,i,s,o,a){this.Fe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Du(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Fe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===Ti.RESOURCE_EXHAUSTED?(gi(e.toString()),gi("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===Ti.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new Ei(Ti.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Fe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return pi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Fe.enqueueAndForget((()=>this.rr===t?e():(pi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lu extends ku{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:vi(),s=e.targetChange.targetIds||[],o=function(t,e){return t.C?(wi(void 0===e||"string"==typeof e),zi.fromBase64String(e||"")):(wi(void 0===e||e instanceof Uint8Array),zi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?Ti.UNKNOWN:No(t.code);return new Ei(e,t.message||"")}(a);n=new Wo(i,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sa(t,r.document.name),s=na(r.document.updateTime),o=new gs({mapValue:{fields:r.document.fields}}),a=ms.newFoundDocument(i,s,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $o(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sa(t,r.document),s=r.readTime?na(r.readTime):Fi.min(),o=ms.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sa(t,r.document),s=r.removedTargetIds||[];n=new $o([],s,i,null)}else{if(!("filter"in e))return vi();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new So(r),s=t.targetId;n=new zo(s,i)}}var r;return n}(this.k,t),n=function(t){if(!("targetChange"in t))return Fi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Fi.min():e.readTime?na(e.readTime):Fi.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=ua(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=Ts(r)?{documents:la(t,r)}:{query:ha(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ea(t,e.resumeToken):e.snapshotVersion.compareTo(Fi.min())>0&&(n.readTime=ta(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return vi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=ua(this.k),e.removeTarget=t,this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new Ei(Ti.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ti.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ei(Ti.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ti.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ei(Ti.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class _u{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Fr=0,this.Mr=null,this.Lr=!0}Br(){0===this.Fr&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Fr++,this.Fr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Fr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(gi(e),this.Lr=!1):pi("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Bu(this)&&(pi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=bi(t);e.Gr.add(4),await Mu(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Pu(e)}(this))}))})),this.Jr=new _u(n,r)}}async function Pu(t){if(Bu(t))for(const e of t.zr)await e(!0)}async function Mu(t){for(const e of t.zr)await e(!1)}function Fu(t,e){const n=bi(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Hu(n)?Uu(n):Qu(n).lr()&&qu(n,e))}function ju(t,e){const n=bi(t),r=Qu(n);n.Wr.delete(e),r.lr()&&Vu(n,e),0===n.Wr.size&&(r.lr()?r._r():Bu(n)&&n.Jr.set("Unknown"))}function qu(t,e){t.Yr.X(e.targetId),Qu(t).Pr(e)}function Vu(t,e){t.Yr.X(e),Qu(t).vr(e)}function Uu(t){t.Yr=new Go({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Qu(t).start(),t.Jr.Br()}function Hu(t){return Bu(t)&&!Qu(t).hr()&&t.Wr.size>0}function Bu(t){return 0===bi(t).Gr.size}function $u(t){t.Yr=void 0}async function zu(t){t.Wr.forEach(((e,n)=>{qu(t,e)}))}async function Wu(t,e){$u(t),Hu(t)?(t.Jr.Kr(e),Uu(t)):t.Jr.set("Unknown")}async function Ku(t,e,n){if(t.Jr.set("Online"),e instanceof Wo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){pi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gu(t,n)}else if(e instanceof $o?t.Yr.ot(e):e instanceof zo?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(Fi.min()))try{const e=await su(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(zi.EMPTY_BYTE_STRING,n.snapshotVersion)),Vu(t,e);const r=new Ba(n.target,e,1,n.sequenceNumber);qu(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){pi("RemoteStore","Failed to raise snapshot:",e),await Gu(t,e)}}async function Gu(t,e,n){if(!Ua(e))throw e;t.Gr.add(1),await Mu(t),t.Jr.set("Offline"),n||(n=()=>su(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{pi("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Pu(t)}))}async function Xu(t,e){const n=bi(t);e?(n.Gr.delete(2),await Pu(n)):e||(n.Gr.add(2),await Mu(n),n.Jr.set("Unknown"))}function Qu(t){return t.Xr||(t.Xr=function(t,e,n){const r=bi(t);return r.Or(),new Lu(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(t.datastore,t.asyncQueue,{Di:zu.bind(null,t),Ni:Wu.bind(null,t),br:Ku.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Hu(t)?Uu(t):t.Jr.set("Unknown")):(await t.Xr.stop(),$u(t))}))),t.Xr}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Yu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ei(Ti.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(gi("AsyncQueue",`${e}: ${t}`),Ua(t))return new Ei(Ti.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||es.comparator(e.key,n.key):(t,e)=>es.comparator(t.key,e.key),this.keyedMap=Fo(),this.sortedSet=new Do(this.comparator)}static emptySet(t){return new Zu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Zu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Zu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.eo=new Do(es.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):vi():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ec{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ec(t,e,Zu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.so=void 0,this.listeners=[]}}class rc{constructor(){this.queries=new Ya((t=>Xs(t)),Gs),this.onlineState="Unknown",this.io=new Set}}async function ic(t,e){const n=bi(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nc),i)try{s.so=await n.onListen(r)}catch(t){const n=Ju(t,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&uc(n)}async function sc(t,e){const n=bi(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function oc(t,e){const n=bi(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(r=!0);i.so=t}}r&&uc(n)}function ac(t,e,n){const r=bi(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function uc(t){t.io.forEach((t=>{t.next()}))}class cc{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ec(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ec.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(t){this.key=t}}class hc{constructor(t){this.key=t}}class fc{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=qo(),this.mutatedKeys=qo(),this.Ao=Js(t),this.Ro=new Zu(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new tc,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Vs(this.query)&&r.size===this.query.limit?r.last():null,u=Us(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=Ys(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Vo(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Ao(l,a)>0||u&&this.Ao(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Vs(this.query)||Us(this.query))for(;s.size>this.query.limit;){const t=Vs(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vi()}};return n(t)-n(e)}(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new ec(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new tc,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=qo(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new hc(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new lc(n))})),e}ko(t){this.To=t.zn,this.Io=qo();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return ec.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class dc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class pc{constructor(t){this.key=t,this.$o=!1}}class gc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Fo=new Ya((t=>Xs(t)),Gs),this.Mo=new Map,this.Lo=new Set,this.Bo=new Do(es.comparator),this.Uo=new Map,this.qo=new hu,this.Ko={},this.jo=new Map,this.Qo=Xa.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function mc(t,e){const n=kc(t);let r,i;const s=n.Fo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await au(n.localStore,Ws(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await yc(n,e,r,"current"===s),n.isPrimaryClient&&Fu(n.remoteStore,t)}return i}async function yc(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.Po(n);i.Bn&&(i=await cu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return xc(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await cu(t.localStore,e,!0),s=new fc(e,i.zn),o=s.Po(i.documents),a=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),u=s.applyChanges(o,t.isPrimaryClient,a);xc(t,n,u.Co);const c=new dc(e,n,s);return t.Fo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),u.snapshot}async function vc(t,e){const n=bi(t),r=n.Fo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((t=>!Gs(t,e)))),void n.Fo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ju(n.remoteStore,r.targetId),Ec(n,r.targetId)})).catch(Qa)):(Ec(n,r.targetId),await uu(n.localStore,r.targetId,!0))}async function wc(t,e){const n=bi(t);try{const t=await function(t,e){const n=bi(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.He.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);var l,h,f;e.targetMismatches.has(a)?c=c.withResumeToken(zi.EMPTY_BYTE_STRING,Fi.min()).withLastLimboFreeSnapshotVersion(Fi.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),h=c,f=s,(0===(l=u).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0)&&o.push(n.He.updateTargetData(t,c))}));let a=Po();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ou(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(Fi.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Va.waitFor(o).next((()=>s.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Uo.get(e);r&&(wi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?wi(r.$o):t.removedDocuments.size>0&&(wi(r.$o),r.$o=!1))})),await Ic(n,t,e)}catch(t){await Qa(t)}}function bc(t,e,n){const r=bi(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fo.forEach(((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=bi(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(r=!0)})),r&&uc(n)}(r.eventManager,e),t.length&&r.Oo.br(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tc(t,e,n){const r=bi(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new Do(es.comparator);t=t.insert(s,ms.newNoDocument(s,Fi.min()));const n=qo().add(s),i=new Ho(Fi.min(),new Map,new Ro(Oi),t,n);await wc(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Ac(r)}else await uu(r.localStore,e,!1).then((()=>Ec(r,e,n))).catch(Qa)}function Ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Fo.delete(r),n&&t.Oo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||Cc(t,e)}))}function Cc(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(ju(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Ac(t))}function xc(t,e,n){for(const r of n)r instanceof lc?(t.qo.addReference(r.key,e),Sc(t,r)):r instanceof hc?(pi("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Cc(t,r.key)):vi()}function Sc(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(pi("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Ac(t))}function Ac(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new es(Hi.fromString(e)),r=t.Qo.next();t.Uo.set(r,new pc(n)),t.Bo=t.Bo.insert(n,r),Fu(t.remoteStore,new Ba(Ws(qs(n.path)),r,2,Li.I))}}async function Ic(t,e,n){const r=bi(t),i=[],s=[],o=[];r.Fo.isEmpty()||(r.Fo.forEach(((t,a)=>{o.push(r.Go(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=tu.$n(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Oo.br(i),await async function(t,e){const n=bi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Va.forEach(e,(e=>Va.forEach(e.kn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Va.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ua(t))throw t;pi("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function Nc(t,e){const n=bi(t);if(!n.currentUser.isEqual(e)){pi("SyncEngine","User change. New user:",e.toKey());const t=await iu(n.localStore,e);n.currentUser=e,(r=n).jo.forEach((t=>{t.forEach((t=>{t.reject(new Ei(Ti.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.jo.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ic(n,t.Gn)}var r}function Dc(t,e){const n=bi(t),r=n.Uo.get(e);if(r&&r.$o)return qo().add(r.key);{let t=qo();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Fo.get(e);t=t.unionWith(r.view.bo)}return t}}function kc(t){const e=bi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tc.bind(null,e),e.Oo.br=oc.bind(null,e.eventManager),e.Oo.zo=ac.bind(null,e.eventManager),e}class Lc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Nu(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return ru(this.persistence,new eu,t.initialUser,this.k)}Yo(t){return new yu(wu.ks,this.k)}Jo(t){return new Tu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>bc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nc.bind(null,this.syncEngine),await Xu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rc}createDatastore(t){const e=Nu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Au(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new Ru(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>bc(this.syncEngine,t,0),s=Cu.Pt()?new Cu:new Eu,new Ou(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new gc(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=bi(t);pi("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Mu(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=li.UNAUTHENTICATED,this.clientId=_i.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{pi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ei(Ti.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ju(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),pi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await iu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fc(t);pi("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=bi(t);n.asyncQueue.verifyOperationInProgress(),pi("RemoteStore","RemoteStore received new credentials");const r=Bu(n);n.Gr.add(3),await Mu(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Pu(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Fc(t){return t.offlineComponents||(pi("FirestoreClient","Using default OfflineComponentProvider"),await Pc(t,new Lc)),t.offlineComponents}async function jc(t){return t.onlineComponents||(pi("FirestoreClient","Using default OnlineComponentProvider"),await Mc(t,new Rc)),t.onlineComponents}async function qc(t){const e=await jc(t),n=e.eventManager;return n.onListen=mc.bind(null,e.syncEngine),n.onUnlisten=vc.bind(null,e.syncEngine),n}function Vc(t,e,n={}){const r=new Ci;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new _c({next:s=>{e.enqueueAndForget((()=>sc(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ei(Ti.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ei(Ti.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new cc(qs(n.path),s,{includeMetadataChanges:!0,wo:!0});return ic(t,o)}(await qc(t),t.asyncQueue,e,n,r))),r.promise}class Uc{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Hc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Hc&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e,n){if(!n)throw new Ei(Ti.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zc(t){if(!es.isDocumentKey(t))throw new Ei(Ti.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":vi()}function Kc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ei(Ti.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new Ei(Ti.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ei(Ti.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ei(Ti.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Ei(Ti.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1,t instanceof Hc?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ei(Ti.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hc(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ei(Ti.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ei(Ti.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Si;switch(t.type){case"gapi":const e=t.client;return wi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ni(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ei(Ti.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Bc.get(t);e&&(pi("ComponentProvider","Removing Datastore"),Bc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qc(this.firestore,t,this._key)}}class Yc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yc(this.firestore,t,this._query)}}class Jc extends Yc{constructor(t,e,n){super(t,e,qs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qc(this.firestore,null,new es(t))}withConverter(t){return new Jc(this.firestore,t,this._path)}}function Zc(t,e,...n){if(t=g(t),1===arguments.length&&(e=_i.A()),$c("doc","path",e),t instanceof Xc){const r=Hi.fromString(e,...n);return zc(r),new Qc(t,null,new es(r))}{if(!(t instanceof Qc||t instanceof Jc))throw new Ei(Ti.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Hi.fromString(e,...n));return zc(r),new Qc(t.firestore,t instanceof Jc?t.converter:null,new es(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Du(this,"async_queue_retry"),this.Ra=()=>{const t=Iu();t&&pi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Iu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ba(),this.Pa(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Iu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.ba(),this.ya)return new Promise((()=>{}));const e=new Ci;return this.Pa((()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Ua(t))throw t;pi("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}Pa(t){const e=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{this.Ta=t,this.Ea=!1;throw gi("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ea=!1,t))))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.ba(),this.Aa.indexOf(t)>-1&&(e=0);const r=Yu.createAndSchedule(this,t,e,n,(t=>this.Va(t)));return this.pa.push(r),r}ba(){this.Ta&&vi()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class el extends Xc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new tl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||rl(this),this._firestoreClient.terminate()}}function nl(t){return t._firestoreClient||rl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rl(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Uc(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new Oc(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ei(Ti.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $i(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sl(zi.fromBase64String(t))}catch(t){throw new Ei(Ti.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new sl(zi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ol{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ei(Ti.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ei(Ti.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Oi(this._lat,t._lat)||Oi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new RegExp("[~\\*/\\[\\]]");function ul(t,e,n){if(e.search(al)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new il(...e.split("."))._internalPath}catch(r){throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Ei(Ti.INVALID_ARGUMENT,a+t+u)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new hl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class hl extends ll{data(){return super.data()}}function fl(t,e){return"string"==typeof e?ul(t,e):e instanceof il?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pl extends ll{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gl extends pl{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{convertValue(t,e="none"){switch(ns(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw vi()}}convertObject(t,e){const n={};return qi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new ol(Gi(t.latitude),Gi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Yi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ji(t));default:return null}}convertTimestamp(t){const e=Ki(t);return new Mi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Hi.fromString(t);wi(Ta(n));const r=new Hc(n.get(1),n.get(3)),i=new es(n.popFirst(5));return r.isEqual(e)||gi(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends ml{constructor(t){super(),this.firestore=t}convertBytes(t){return new sl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qc(this.firestore,null,e)}}function vl(t,e,n){const r=n.docs.get(e._key),i=new yl(t);return new pl(t,i,e._key,r,new dl(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){hi="9.6.2",R(new m("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new el(r,new Ai(t.getProvider("auth-internal")),new ki(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),M("@firebase/firestore","3.4.2",t),M("@firebase/firestore","3.4.2","esm2017")}();const wl=function(t=function(t="[DEFAULT]"){const e=D.get(t);if(!e)throw O.create("no-app",{appName:t});return e}()){return _(t,"firestore").getImmediate()}(function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw O.create("bad-app-name",{appName:String(r)});const i=D.get(r);if(i){if(d(t,i.options)&&d(n,i.config))return i;throw O.create("duplicate-app",{appName:r})}const s=new v(r);for(const t of k.values())s.addComponent(t);const o=new P(t,n,s);return D.set(r,o),o}({apiKey:"AIzaSyD30eurLvUO4TiyNK6_wNZuS1RBIO0_YUc",authDomain:"lazervsmoiety.firebaseapp.com",databaseURL:"https://lazervsmoiety-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"lazervsmoiety",storageBucket:"lazervsmoiety.appspot.com",messagingSenderId:"377792998877",appId:"1:377792998877:web:7ed0e41f065ff68f59da34",measurementId:"G-L94KY87XKS"}));o.route((e=>{switch(console.log(e.route),e.route){case"/LazerVsMoietyUpdate/":t(s)("#msg").html("Home");break;case"/LazerVsMoietyUpdate/latest":(
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){t=Kc(t,Qc);const e=Kc(t.firestore,el);return Vc(nl(e),t._key).then((n=>vl(e,t,n)))})(Zc(wl,"setting","latest")).then((e=>{t(s)("#msg").html(e.data().version)}));break;default:t(s)("#msg").html("404 Not Found")}})),o.router.init();
//# sourceMappingURL=index.1e995643.js.map
