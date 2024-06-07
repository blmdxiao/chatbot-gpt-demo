var Q={},ie={};function Qe(e,r){for(var a=r,o=0;o<e.length;o++){var c=o===e.length-1,p=e.charAt(o),n=a[p]||(a[p]={chars:{}});c&&(n.self=e),a=n.chars}}function Ae(e){if(e.length===0)return Q;for(var r={},a=0,o=e;a<o.length;a++){var c=o[a];Qe(c,r)}return r}function Ve(e){if(e.length===0)return ie;for(var r={},a=0,o=e;a<o.length;a++){var c=o[a];r[c]=!0}return r}var K={},Ce={type:"String",optional:!0};function Ye(e){var r={type:"NoArgument",optional:!1};function a(n){if(r.type&&r.type!==n&&r.type!=="NoArgument")throw new Error('Conflicting pseudo-class argument type: "'.concat(r.type,'" vs "').concat(n,'".'));r.type=n}for(var o=0,c=e;o<c.length;o++){var p=c[o];p==="NoArgument"&&(r.optional=!0),p==="Formula"&&a("Formula"),p==="FormulaOfSelector"&&(a("Formula"),r.ofSelector=!0),p==="String"&&a("String"),p==="Selector"&&a("Selector")}return r}function _e(e){for(var r={},a=0,o=Object.keys(e);a<o.length;a++){var c=o[a],p=e[c];if(p)for(var n=0,E=p;n<E.length;n++){var x=E[n];(r[x]||(r[x]=[])).push(c)}}return r}function ke(e){for(var r=_e(e),a={},o=0,c=Object.keys(r);o<c.length;o++){var p=c[o],n=r[p];n&&(a[p]=Ye(n))}return a}var V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},V.apply(this,arguments)},et={},oe={wildcard:!0};function tt(e){return e?typeof e=="boolean"?oe:e:et}function rt(e,r){return function(a,o){return r(e(a),e(o))}}function nt(e){return function(r,a){var o=e(r,a);if(!o)throw new Error("Syntax definition cannot be null or undefined.");return o}}function Ie(e,r){return function(a,o){return o===!0?e:r(a===!0?e:a,o)}}function D(e){return function(r,a){if(!a||!r)return a;if(typeof a!="object"||a===null)throw new Error("Unexpected syntax definition extension type: ".concat(a,"."));for(var o=V({},r),c=0,p=Object.entries(a);c<p.length;c++){var n=p[c],E=n[0],x=n[1],Y=e[E];o[E]=Y(r[E],x)}return o}}function O(e,r){return r!==void 0?r:e}function ne(e,r){return r?e?e.concat(r):r:e}function Oe(e,r){if(!r)return e;if(!e)return r;for(var a=V({},e),o=0,c=Object.entries(r);o<c.length;o++){var p=c[o],n=p[0],E=p[1];if(!E){delete a[n];continue}var x=e[n];if(!x){a[n]=E;continue}a[n]=x.concat(E)}return a}var z=nt(D({baseSyntax:O,tag:Ie(oe,D({wildcard:O})),ids:O,classNames:O,namespace:Ie(oe,D({wildcard:O})),combinators:ne,attributes:D({operators:ne,caseSensitivityModifiers:ne,unknownCaseSensitivityModifiers:O}),pseudoClasses:D({unknown:O,definitions:Oe}),pseudoElements:D({unknown:O,notation:O,definitions:rt(function(e){return Array.isArray(e)?{NoArgument:e}:e},Oe)})})),Te={tag:{},ids:!0,classNames:!0,combinators:[],pseudoElements:{unknown:"reject",notation:"singleColon",definitions:["first-letter","first-line"]},pseudoClasses:{unknown:"reject",definitions:{NoArgument:["link","visited","active"]}}},Me=z(Te,{tag:{wildcard:!0},combinators:[">","+"],attributes:{unknownCaseSensitivityModifiers:"reject",operators:["=","~=","|="]},pseudoElements:{definitions:["before","after"]},pseudoClasses:{unknown:"reject",definitions:{NoArgument:["hover","focus","first-child"],String:["lang"]}}}),ue=z(Me,{namespace:{wildcard:!0},combinators:["~"],attributes:{operators:["^=","$=","*="]},pseudoElements:{notation:"both"},pseudoClasses:{definitions:{NoArgument:["root","last-child","first-of-type","last-of-type","only-child","only-of-type","empty","target","enabled","disabled","checked","indeterminate"],Formula:["nth-child","nth-last-child","nth-of-type","nth-last-of-type"],Selector:["not"]}}}),le=z(ue,{combinators:["||"],attributes:{caseSensitivityModifiers:["i","I","s","S"]},pseudoClasses:{definitions:{NoArgument:["any-link","local-link","target-within","scope","current","past","future","focus-within","focus-visible","read-write","read-only","placeholder-shown","default","valid","invalid","in-range","out-of-range","required","optional","blank","user-invalid"],Formula:["nth-col","nth-last-col"],String:["dir"],FormulaOfSelector:["nth-child","nth-last-child"],Selector:["current","is","where","has"]}}}),at=z(le,{pseudoElements:{unknown:"accept"},pseudoClasses:{unknown:"accept"},attributes:{unknownCaseSensitivityModifiers:"accept"}}),Pe={css1:Te,css2:Me,css3:ue,"selectors-3":ue,"selectors-4":le,latest:le,progressive:at};function H(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"||e==="\\"||e>=" "}function Fe(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"||e>=" "}function X(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}var st={" ":!0,"	":!0,"\n":!0,"\r":!0,"\f":!0},it={'"':!0,"'":!0},ae={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0},ot=6,se="css-selector-parser parse error: ";function ut(e){e===void 0&&(e={});var r=e.syntax,a=r===void 0?"latest":r,o=e.substitutes,c=e.strict,p=c===void 0?!0:c,n=typeof a=="object"?a:Pe[a];n.baseSyntax&&(n=z(Pe[n.baseSyntax],n));var E=n.tag?[!0,!!tt(n.tag).wildcard]:[!1,!1],x=E[0],Y=E[1],je=!!n.ids,We=!!n.classNames,M=!!n.namespace,ce=n.namespace&&(n.namespace===!0||n.namespace.wildcard===!0);if(M&&!x)throw new Error("".concat(se,"Namespaces cannot be enabled while tags are disabled."));var fe=!!o,de=n.combinators?Ae(n.combinators):Q,Z=n.attributes?[!0,n.attributes.operators?Ae(n.attributes.operators):Q,n.attributes.caseSensitivityModifiers?Ve(n.attributes.caseSensitivityModifiers):ie,n.attributes.unknownCaseSensitivityModifiers==="accept"]:[!1,Q,ie,!1],Ue=Z[0],De=Z[1],pe=Z[2],me=Z[3],Re=me||Object.keys(pe).length>0,_=n.pseudoClasses?[!0,n.pseudoClasses.definitions?ke(n.pseudoClasses.definitions):K,n.pseudoClasses.unknown==="accept"]:[!1,K,!1],Be=_[0],$e=_[1],He=_[2],R=n.pseudoElements?[!0,n.pseudoElements.notation==="singleColon"||n.pseudoElements.notation==="both",!n.pseudoElements.notation||n.pseudoElements.notation==="doubleColon"||n.pseudoElements.notation==="both",n.pseudoElements.definitions?ke(Array.isArray(n.pseudoElements.definitions)?{NoArgument:n.pseudoElements.definitions}:n.pseudoElements.definitions):K,n.pseudoElements.unknown==="accept"]:[!1,!1,!1,K,!1],ve=R[0],Xe=R[1],ze=R[2],ee=R[3],he=R[4],A="",C=A.length,v=0,l="",u=function(t){return l===t},L=function(){return u("*")||H(l)},U=function(t){v=t,l=A.charAt(v)},f=function(){v++,l=A.charAt(v)},k=function(){var t=l;return v++,l=A.charAt(v),t};function I(t){var s=Math.min(C-1,v),m=new Error("".concat(se).concat(t," Pos: ").concat(s,"."));throw m.position=s,m.name="ParserError",m}function i(t,s){if(!t)return I(s)}var te=function(){i(v<C,"Unexpected end of input.")},j=function(){return v>=C},B=function(t){i(v<C,'Expected "'.concat(t,'" but end of input reached.')),i(l===t,'Expected "'.concat(t,'" but "').concat(l,'" found.')),v++,l=A.charAt(v)};function re(t){var s=ge(t,v);if(s)return v+=s.length,l=A.charAt(v),s}function ge(t,s){var m=A.charAt(s),d=t[m];if(d){var S=ge(d.chars,s+1);if(S)return S;if(d.self)return d.self}}function q(){for(var t=k(),s=1;X(l)&&s<ot;)t+=k(),s++;return qe(),String.fromCharCode(parseInt(t,16))}function Ze(t){var s="";for(B(t);v<C;){if(u(t))return f(),s;u("\\")?(f(),u(t)?(s+=t,f()):l===`
`||l==="\f"?f():l==="\r"?(f(),u(`
`)&&f()):X(l)?s+=q():(s+=l,f())):(s+=l,f())}return s}function y(){if(!H(l))return null;for(var t="";u("-");)t+=l,f();for(t==="-"&&!Fe(l)&&!u("\\")&&I("Identifiers cannot consist of a single hyphen."),p&&t.length>=2&&I("Identifiers cannot start with two hyphens with strict mode on."),ae[l]&&I("Identifiers cannot start with hyphens followed by digits.");v<C;)if(Fe(l))t+=k();else if(u("\\"))f(),te(),X(l)?t+=q():t+=k();else break;return t}function Le(){for(var t="";v<C&&!u(")");)if(u("\\")){if(f(),j()&&!p)return(t+"\\").trim();te(),X(l)?t+=q():t+=k()}else t+=k();return t.trim()}function qe(){if(l===" "||l==="	"||l==="\f"||l===`
`){f();return}l==="\r"&&f(),l===`
`&&f()}function g(){for(;st[l];)f()}function be(t){t===void 0&&(t=!1),g();for(var s=[G(t)];u(",");)f(),g(),s.push(G(t));return{type:"Selector",rules:s}}function Ge(){B("["),g();var t;if(u("|")){i(M,"Namespaces are not enabled."),f();var s=y();i(s,"Expected attribute name."),t={type:"Attribute",name:s,namespace:{type:"NoNamespace"}}}else if(u("*")){i(M,"Namespaces are not enabled."),i(ce,"Wildcard namespace is not enabled."),f(),B("|");var m=y();i(m,"Expected attribute name."),t={type:"Attribute",name:m,namespace:{type:"WildcardNamespace"}}}else{var d=y();if(i(d,"Expected attribute name."),t={type:"Attribute",name:d},u("|")){var S=v;if(f(),H(l)){i(M,"Namespaces are not enabled.");var P=y();i(P,"Expected attribute name."),t={type:"Attribute",name:P,namespace:{type:"NamespaceName",name:d}}}else U(S)}}if(i(t.name,"Expected attribute name."),g(),j()&&!p)return t;if(u("]"))f();else{if(t.operator=re(De),i(t.operator,"Expected a valid attribute selector operator."),g(),te(),it[l])t.value={type:"String",value:Ze(l)};else if(fe&&u("$")){f();var F=y();i(F,"Expected substitute name."),t.value={type:"Substitution",name:F}}else{var T=y();i(T,"Expected attribute value."),t.value={type:"String",value:T}}if(g(),j()&&!p)return t;if(!u("]")){var N=y();if(i(N,"Expected end of attribute selector."),t.caseSensitivityModifier=N,i(Re,"Attribute case sensitivity modifiers are not enabled."),i(me||pe[t.caseSensitivityModifier],"Unknown attribute case sensitivity modifier."),g(),j()&&!p)return t}B("]")}return t}function ye(){for(var t="";ae[l];)t+=k();return i(t!=="","Formula parse error."),parseInt(t)}var Je=function(){return u("-")||u("+")||ae[l]};function Ke(){if(u("e")||u("o")){var t=y();if(t==="even")return g(),[2,0];if(t==="odd")return g(),[2,1]}var s=null,m=1;if(u("-")&&(f(),m=-1),Je()&&(u("+")&&f(),s=ye(),!u("\\")&&!u("n")))return[0,s*m];s===null&&(s=1),s*=m;var d;if(u("\\")?(f(),X(l)?d=q():d=k()):d=k(),i(d==="n",'Formula parse error: expected "n".'),g(),u("+")||u("-")){var S=u("+")?1:-1;return f(),g(),[s,S*ye()]}else return[s,0]}function Se(t,s,m){var d;if(u("(")){if(f(),g(),fe&&u("$")){f();var S=y();i(S,"Expected substitute name."),d={type:"Substitution",name:S}}else if(m.type==="String")d={type:"String",value:Le()},i(d.value,"Expected ".concat(s," argument value."));else if(m.type==="Selector")d=be(!0);else if(m.type==="Formula"){var P=Ke(),F=P[0],T=P[1];if(d={type:"Formula",a:F,b:T},m.ofSelector&&(g(),u("o")||u("\\"))){var N=y();i(N==="of","Formula of selector parse error."),g(),d={type:"FormulaOfSelector",a:F,b:T,selector:G()}}}else return I("Invalid ".concat(s," signature."));if(g(),j()&&!p)return d;B(")")}else i(m.optional,"Argument is required for ".concat(s,' "').concat(t,'".'));return d}function $(){if(u("*"))return i(Y,"Wildcard tag name is not enabled."),f(),{type:"WildcardTag"};if(H(l)){i(x,"Tag names are not enabled.");var t=y();return i(t,"Expected tag name."),{type:"TagName",name:t}}else return I("Expected tag name.")}function Ee(){if(u("*")){var t=v;if(f(),!u("|")||(f(),!L()))return U(t),$();i(M,"Namespaces are not enabled."),i(ce,"Wildcard namespace is not enabled.");var s=$();return s.namespace={type:"WildcardNamespace"},s}else if(u("|")){i(M,"Namespaces are not enabled."),f();var s=$();return s.namespace={type:"NoNamespace"},s}else if(H(l)){var m=y();if(i(m,"Expected tag name."),!u("|"))return i(x,"Tag names are not enabled."),{type:"TagName",name:m};var t=v;if(f(),!L())return U(t),{type:"TagName",name:m};i(M,"Namespaces are not enabled.");var s=$();return s.namespace={type:"NamespaceName",name:m},s}else return I("Expected tag name.")}function G(t){var s,m;t===void 0&&(t=!1);var d={type:"Rule",items:[]};if(t){var S=re(de);S&&(d.combinator=S,g())}for(;v<C;)if(L())i(d.items.length===0,"Unexpected tag/namespace start."),d.items.push(Ee());else if(u("|")){var P=v;if(f(),L())i(d.items.length===0,"Unexpected tag/namespace start."),U(P),d.items.push(Ee());else{U(P);break}}else if(u(".")){i(We,"Class names are not enabled."),f();var F=y();i(F,"Expected class name."),d.items.push({type:"ClassName",name:F})}else if(u("#")){i(je,"IDs are not enabled."),f();var T=y();i(T,"Expected ID name."),d.items.push({type:"Id",name:T})}else if(u("["))i(Ue,"Attributes are not enabled."),d.items.push(Ge());else if(u(":")){var N=!1,we=!1;f(),u(":")&&(i(ve,"Pseudo elements are not enabled."),i(ze,"Pseudo elements double colon notation is not enabled."),N=!0,f());var w=y();if(i(N||w,"Expected pseudo-class name."),i(!N||w,"Expected pseudo-element name."),i(w,"Expected pseudo-class name."),i(!N||he||Object.prototype.hasOwnProperty.call(ee,w),'Unknown pseudo-element "'.concat(w,'".')),we=ve&&(N||!N&&Xe&&Object.prototype.hasOwnProperty.call(ee,w)),we){var J=(s=ee[w])!==null&&s!==void 0?s:he&&Ce,xe={type:"PseudoElement",name:w},W=Se(w,"pseudo-element",J);W&&(i(W.type!=="Formula"&&W.type!=="FormulaOfSelector","Pseudo-elements cannot have formula argument."),xe.argument=W),d.items.push(xe)}else{i(Be,"Pseudo-classes are not enabled.");var J=(m=$e[w])!==null&&m!==void 0?m:He&&Ce;i(J,'Unknown pseudo-class: "'.concat(w,'".'));var W=Se(w,"pseudo-class",J),Ne={type:"PseudoClass",name:w};W&&(Ne.argument=W),d.items.push(Ne)}}else break;if(d.items.length===0)return j()?I("Expected rule but end of input reached."):I('Expected rule but "'.concat(l,'" found.'));if(g(),!j()&&!u(",")&&!u(")")){var S=re(de);g(),d.nestedRule=G(),d.nestedRule.combinator=S}return d}return function(t){if(typeof t!="string")throw new Error("".concat(se,"Expected string input."));return A=t,C=A.length,v=0,l=A.charAt(0),be()}}var h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},h.apply(this,arguments)};function b(e){return function(r,a){var o;return o={},o[r]=function(c){return h({type:e},c)},o[a]=function(c){return typeof c=="object"&&c!==null&&c.type===e},o}}h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h({},b("Selector")("selector","isSelector")),b("Rule")("rule","isRule")),b("TagName")("tagName","isTagName")),b("Id")("id","isId")),b("ClassName")("className","isClassName")),b("WildcardTag")("wildcardTag","isWildcardTag")),b("NamespaceName")("namespaceName","isNamespaceName")),b("WildcardNamespace")("wildcardNamespace","isWildcardNamespace")),b("NoNamespace")("noNamespace","isNoNamespace")),b("Attribute")("attribute","isAttribute")),b("PseudoClass")("pseudoClass","isPseudoClass")),b("PseudoElement")("pseudoElement","isPseudoElement")),b("String")("string","isString")),b("Formula")("formula","isFormula")),b("FormulaOfSelector")("formulaOfSelector","isFormulaOfSelector")),b("Substitution")("substitution","isSubstitution"));export{ut as c};
