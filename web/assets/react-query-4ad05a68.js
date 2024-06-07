import{a as l,o as U}from"./@babel-d99aad0a.js";import{R as F}from"./react-dff1db10.js";import{R as Ct}from"./react-dom-f42ccf45.js";var $=function(){function u(){this.listeners=[]}var n=u.prototype;return n.subscribe=function(t){var e=this,i=t||function(){};return this.listeners.push(i),this.onSubscribe(),function(){e.listeners=e.listeners.filter(function(s){return s!==i}),e.onUnsubscribe()}},n.hasListeners=function(){return this.listeners.length>0},n.onSubscribe=function(){},n.onUnsubscribe=function(){},u}(),ut=typeof window>"u";function b(){}function Ft(u,n){return typeof u=="function"?u(n):u}function Pt(u){return typeof u=="number"&&u>=0&&u!==1/0}function I(u){return Array.isArray(u)?u:[u]}function qt(u,n){return Math.max(u+(n||0)-Date.now(),0)}function V(u,n,r){return T(u)?typeof n=="function"?l({},r,{queryKey:u,queryFn:n}):l({},n,{queryKey:u}):u}function Mt(u,n,r){return T(u)?typeof n=="function"?l({},r,{mutationKey:u,mutationFn:n}):l({},n,{mutationKey:u}):typeof u=="function"?l({},n,{mutationFn:u}):l({},u)}function D(u,n,r){return T(u)?[l({},n,{queryKey:u}),r]:[u||{},n]}function Qt(u,n){if(u===!0&&n===!0||u==null&&n==null)return"all";if(u===!1&&n===!1)return"none";var r=u??!n;return r?"active":"inactive"}function z(u,n){var r=u.active,t=u.exact,e=u.fetching,i=u.inactive,s=u.predicate,a=u.queryKey,o=u.stale;if(T(a)){if(t){if(n.queryHash!==X(a,n.options))return!1}else if(!H(n.queryKey,a))return!1}var c=Qt(r,i);if(c==="none")return!1;if(c!=="all"){var h=n.isActive();if(c==="active"&&!h||c==="inactive"&&h)return!1}return!(typeof o=="boolean"&&n.isStale()!==o||typeof e=="boolean"&&n.isFetching()!==e||s&&!s(n))}function tt(u,n){var r=u.exact,t=u.fetching,e=u.predicate,i=u.mutationKey;if(T(i)){if(!n.options.mutationKey)return!1;if(r){if(A(n.options.mutationKey)!==A(i))return!1}else if(!H(n.options.mutationKey,i))return!1}return!(typeof t=="boolean"&&n.state.status==="loading"!==t||e&&!e(n))}function X(u,n){var r=(n==null?void 0:n.queryKeyHashFn)||A;return r(u)}function A(u){var n=I(u);return _t(n)}function _t(u){return JSON.stringify(u,function(n,r){return W(r)?Object.keys(r).sort().reduce(function(t,e){return t[e]=r[e],t},{}):r})}function H(u,n){return st(I(u),I(n))}function st(u,n){return u===n?!0:typeof u!=typeof n?!1:u&&n&&typeof u=="object"&&typeof n=="object"?!Object.keys(n).some(function(r){return!st(u[r],n[r])}):!1}function at(u,n){if(u===n)return u;var r=Array.isArray(u)&&Array.isArray(n);if(r||W(u)&&W(n)){for(var t=r?u.length:Object.keys(u).length,e=r?n:Object.keys(n),i=e.length,s=r?[]:{},a=0,o=0;o<i;o++){var c=r?o:e[o];s[c]=at(u[c],n[c]),s[c]===u[c]&&a++}return t===i&&a===t?u:s}return n}function W(u){if(!et(u))return!1;var n=u.constructor;if(typeof n>"u")return!0;var r=n.prototype;return!(!et(r)||!r.hasOwnProperty("isPrototypeOf"))}function et(u){return Object.prototype.toString.call(u)==="[object Object]"}function T(u){return typeof u=="string"||Array.isArray(u)}function Dt(u){return new Promise(function(n){setTimeout(n,u)})}function nt(u){Promise.resolve().then(u).catch(function(n){return setTimeout(function(){throw n})})}function ot(){if(typeof AbortController=="function")return new AbortController}var St=function(u){U(n,u);function n(){var t;return t=u.call(this)||this,t.setup=function(e){var i;if(!ut&&((i=window)!=null&&i.addEventListener)){var s=function(){return e()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},t}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}},r.setEventListener=function(e){var i,s=this;this.setup=e,(i=this.cleanup)==null||i.call(this),this.cleanup=e(function(a){typeof a=="boolean"?s.setFocused(a):s.onFocus()})},r.setFocused=function(e){this.focused=e,e&&this.onFocus()},r.onFocus=function(){this.listeners.forEach(function(e){e()})},r.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},n}($),j=new St,wt=function(u){U(n,u);function n(){var t;return t=u.call(this)||this,t.setup=function(e){var i;if(!ut&&((i=window)!=null&&i.addEventListener)){var s=function(){return e()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},t}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}},r.setEventListener=function(e){var i,s=this;this.setup=e,(i=this.cleanup)==null||i.call(this),this.cleanup=e(function(a){typeof a=="boolean"?s.setOnline(a):s.onOnline()})},r.setOnline=function(e){this.online=e,e&&this.onOnline()},r.onOnline=function(){this.listeners.forEach(function(e){e()})},r.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},n}($),N=new wt;function At(u){return Math.min(1e3*Math.pow(2,u),3e4)}function G(u){return typeof(u==null?void 0:u.cancel)=="function"}var ct=function(n){this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent};function J(u){return u instanceof ct}var ft=function(n){var r=this,t=!1,e,i,s,a;this.abort=n.abort,this.cancel=function(d){return e==null?void 0:e(d)},this.cancelRetry=function(){t=!0},this.continueRetry=function(){t=!1},this.continue=function(){return i==null?void 0:i()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){s=d,a=f});var o=function(f){r.isResolved||(r.isResolved=!0,n.onSuccess==null||n.onSuccess(f),i==null||i(),s(f))},c=function(f){r.isResolved||(r.isResolved=!0,n.onError==null||n.onError(f),i==null||i(),a(f))},h=function(){return new Promise(function(f){i=f,r.isPaused=!0,n.onPause==null||n.onPause()}).then(function(){i=void 0,r.isPaused=!1,n.onContinue==null||n.onContinue()})},v=function d(){if(!r.isResolved){var f;try{f=n.fn()}catch(p){f=Promise.reject(p)}e=function(m){if(!r.isResolved&&(c(new ct(m)),r.abort==null||r.abort(),G(f)))try{f.cancel()}catch{}},r.isTransportCancelable=G(f),Promise.resolve(f).then(o).catch(function(p){var m,M;if(!r.isResolved){var O=(m=n.retry)!=null?m:3,g=(M=n.retryDelay)!=null?M:At,C=typeof g=="function"?g(r.failureCount,p):g,x=O===!0||typeof O=="number"&&r.failureCount<O||typeof O=="function"&&O(r.failureCount,p);if(t||!x){c(p);return}r.failureCount++,n.onFail==null||n.onFail(r.failureCount,p),Dt(C).then(function(){if(!j.isFocused()||!N.isOnline())return h()}).then(function(){t?c(p):d()})}})}};v()},Rt=function(){function u(){this.queue=[],this.transactions=0,this.notifyFn=function(r){r()},this.batchNotifyFn=function(r){r()}}var n=u.prototype;return n.batch=function(t){var e;this.transactions++;try{e=t()}finally{this.transactions--,this.transactions||this.flush()}return e},n.schedule=function(t){var e=this;this.transactions?this.queue.push(t):nt(function(){e.notifyFn(t)})},n.batchCalls=function(t){var e=this;return function(){for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];e.schedule(function(){t.apply(void 0,s)})}},n.flush=function(){var t=this,e=this.queue;this.queue=[],e.length&&nt(function(){t.batchNotifyFn(function(){e.forEach(function(i){t.notifyFn(i)})})})},n.setNotifyFunction=function(t){this.notifyFn=t},n.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},u}(),y=new Rt,lt=console;function ht(){return lt}function xt(u){lt=u}var Et=function(){function u(r){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=r.defaultOptions,this.setOptions(r.options),this.observers=[],this.cache=r.cache,this.queryKey=r.queryKey,this.queryHash=r.queryHash,this.initialState=r.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=r.meta,this.scheduleGc()}var n=u.prototype;return n.setOptions=function(t){var e;this.options=l({},this.defaultOptions,t),this.meta=t==null?void 0:t.meta,this.cacheTime=Math.max(this.cacheTime||0,(e=this.options.cacheTime)!=null?e:5*60*1e3)},n.setDefaultOptions=function(t){this.defaultOptions=t},n.scheduleGc=function(){var t=this;this.clearGcTimeout(),Pt(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){t.optionalRemove()},this.cacheTime))},n.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},n.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},n.setData=function(t,e){var i,s,a=this.state.data,o=Ft(t,a);return(i=(s=this.options).isDataEqual)!=null&&i.call(s,a,o)?o=a:this.options.structuralSharing!==!1&&(o=at(a,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt}),o},n.setState=function(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})},n.cancel=function(t){var e,i=this.promise;return(e=this.retryer)==null||e.cancel(t),i?i.then(b).catch(b):Promise.resolve()},n.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},n.reset=function(){this.destroy(),this.setState(this.initialState)},n.isActive=function(){return this.observers.some(function(t){return t.options.enabled!==!1})},n.isFetching=function(){return this.state.isFetching},n.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(t){return t.getCurrentResult().isStale})},n.isStaleByTime=function(t){return t===void 0&&(t=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!qt(this.state.dataUpdatedAt,t)},n.onFocus=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnWindowFocus()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},n.onOnline=function(){var t,e=this.observers.find(function(i){return i.shouldFetchOnReconnect()});e&&e.refetch(),(t=this.retryer)==null||t.continue()},n.addObserver=function(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))},n.removeObserver=function(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(function(e){return e!==t}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:t}))},n.getObserversCount=function(){return this.observers.length},n.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},n.fetch=function(t,e){var i=this,s,a,o;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(e!=null&&e.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){var h=this.observers.find(function(g){return g.options.queryFn});h&&this.setOptions(h.options)}var v=I(this.queryKey),d=ot(),f={queryKey:v,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return i.abortSignalConsumed=!0,d.signal}});var p=function(){return i.options.queryFn?(i.abortSignalConsumed=!1,i.options.queryFn(f)):Promise.reject("Missing queryFn")},m={fetchOptions:e,options:this.options,queryKey:v,state:this.state,fetchFn:p,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var M;(M=this.options.behavior)==null||M.onFetch(m)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=m.fetchOptions)==null?void 0:a.meta)){var O;this.dispatch({type:"fetch",meta:(O=m.fetchOptions)==null?void 0:O.meta})}return this.retryer=new ft({fn:m.fetchFn,abort:d==null||(o=d.abort)==null?void 0:o.bind(d),onSuccess:function(C){i.setData(C),i.cache.config.onSuccess==null||i.cache.config.onSuccess(C,i),i.cacheTime===0&&i.optionalRemove()},onError:function(C){J(C)&&C.silent||i.dispatch({type:"error",error:C}),J(C)||(i.cache.config.onError==null||i.cache.config.onError(C,i),ht().error(C)),i.cacheTime===0&&i.optionalRemove()},onFail:function(){i.dispatch({type:"failed"})},onPause:function(){i.dispatch({type:"pause"})},onContinue:function(){i.dispatch({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay}),this.promise=this.retryer.promise,this.promise},n.dispatch=function(t){var e=this;this.state=this.reducer(this.state,t),y.batch(function(){e.observers.forEach(function(i){i.onQueryUpdate(t)}),e.cache.notify({query:e,type:"queryUpdated",action:t})})},n.getDefaultState=function(t){var e=typeof t.initialData=="function"?t.initialData():t.initialData,i=typeof t.initialData<"u",s=i?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,a=typeof e<"u";return{data:e,dataUpdateCount:0,dataUpdatedAt:a?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},n.reducer=function(t,e){var i,s;switch(e.type){case"failed":return l({},t,{fetchFailureCount:t.fetchFailureCount+1});case"pause":return l({},t,{isPaused:!0});case"continue":return l({},t,{isPaused:!1});case"fetch":return l({},t,{fetchFailureCount:0,fetchMeta:(i=e.meta)!=null?i:null,isFetching:!0,isPaused:!1},!t.dataUpdatedAt&&{error:null,status:"loading"});case"success":return l({},t,{data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=e.error;return J(a)&&a.revert&&this.revertState?l({},this.revertState):l({},t,{error:a,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return l({},t,{isInvalidated:!0});case"setState":return l({},t,e.state);default:return t}},u}(),Kt=function(u){U(n,u);function n(t){var e;return e=u.call(this)||this,e.config=t||{},e.queries=[],e.queriesMap={},e}var r=n.prototype;return r.build=function(e,i,s){var a,o=i.queryKey,c=(a=i.queryHash)!=null?a:X(o,i),h=this.get(c);return h||(h=new Et({cache:this,queryKey:o,queryHash:c,options:e.defaultQueryOptions(i),state:s,defaultOptions:e.getQueryDefaults(o),meta:i.meta}),this.add(h)),h},r.add=function(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))},r.remove=function(e){var i=this.queriesMap[e.queryHash];i&&(e.destroy(),this.queries=this.queries.filter(function(s){return s!==e}),i===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))},r.clear=function(){var e=this;y.batch(function(){e.queries.forEach(function(i){e.remove(i)})})},r.get=function(e){return this.queriesMap[e]},r.getAll=function(){return this.queries},r.find=function(e,i){var s=D(e,i),a=s[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(o){return z(a,o)})},r.findAll=function(e,i){var s=D(e,i),a=s[0];return Object.keys(a).length>0?this.queries.filter(function(o){return z(a,o)}):this.queries},r.notify=function(e){var i=this;y.batch(function(){i.listeners.forEach(function(s){s(e)})})},r.onFocus=function(){var e=this;y.batch(function(){e.queries.forEach(function(i){i.onFocus()})})},r.onOnline=function(){var e=this;y.batch(function(){e.queries.forEach(function(i){i.onOnline()})})},n}($),Ut=function(){function u(r){this.options=l({},r.defaultOptions,r.options),this.mutationId=r.mutationId,this.mutationCache=r.mutationCache,this.observers=[],this.state=r.state||dt(),this.meta=r.meta}var n=u.prototype;return n.setState=function(t){this.dispatch({type:"setState",state:t})},n.addObserver=function(t){this.observers.indexOf(t)===-1&&this.observers.push(t)},n.removeObserver=function(t){this.observers=this.observers.filter(function(e){return e!==t})},n.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(b).catch(b)):Promise.resolve()},n.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},n.execute=function(){var t=this,e,i=this.state.status==="loading",s=Promise.resolve();return i||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){t.mutationCache.config.onMutate==null||t.mutationCache.config.onMutate(t.state.variables,t)}).then(function(){return t.options.onMutate==null?void 0:t.options.onMutate(t.state.variables)}).then(function(a){a!==t.state.context&&t.dispatch({type:"loading",context:a,variables:t.state.variables})})),s.then(function(){return t.executeMutation()}).then(function(a){e=a,t.mutationCache.config.onSuccess==null||t.mutationCache.config.onSuccess(e,t.state.variables,t.state.context,t)}).then(function(){return t.options.onSuccess==null?void 0:t.options.onSuccess(e,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(e,null,t.state.variables,t.state.context)}).then(function(){return t.dispatch({type:"success",data:e}),e}).catch(function(a){return t.mutationCache.config.onError==null||t.mutationCache.config.onError(a,t.state.variables,t.state.context,t),ht().error(a),Promise.resolve().then(function(){return t.options.onError==null?void 0:t.options.onError(a,t.state.variables,t.state.context)}).then(function(){return t.options.onSettled==null?void 0:t.options.onSettled(void 0,a,t.state.variables,t.state.context)}).then(function(){throw t.dispatch({type:"error",error:a}),a})})},n.executeMutation=function(){var t=this,e;return this.retryer=new ft({fn:function(){return t.options.mutationFn?t.options.mutationFn(t.state.variables):Promise.reject("No mutationFn found")},onFail:function(){t.dispatch({type:"failed"})},onPause:function(){t.dispatch({type:"pause"})},onContinue:function(){t.dispatch({type:"continue"})},retry:(e=this.options.retry)!=null?e:0,retryDelay:this.options.retryDelay}),this.retryer.promise},n.dispatch=function(t){var e=this;this.state=$t(this.state,t),y.batch(function(){e.observers.forEach(function(i){i.onMutationUpdate(t)}),e.mutationCache.notify(e)})},u}();function dt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function $t(u,n){switch(n.type){case"failed":return l({},u,{failureCount:u.failureCount+1});case"pause":return l({},u,{isPaused:!0});case"continue":return l({},u,{isPaused:!1});case"loading":return l({},u,{context:n.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:n.variables});case"success":return l({},u,{data:n.data,error:null,status:"success",isPaused:!1});case"error":return l({},u,{data:void 0,error:n.error,failureCount:u.failureCount+1,isPaused:!1,status:"error"});case"setState":return l({},u,n.state);default:return u}}var Tt=function(u){U(n,u);function n(t){var e;return e=u.call(this)||this,e.config=t||{},e.mutations=[],e.mutationId=0,e}var r=n.prototype;return r.build=function(e,i,s){var a=new Ut({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(i),state:s,defaultOptions:i.mutationKey?e.getMutationDefaults(i.mutationKey):void 0,meta:i.meta});return this.add(a),a},r.add=function(e){this.mutations.push(e),this.notify(e)},r.remove=function(e){this.mutations=this.mutations.filter(function(i){return i!==e}),e.cancel(),this.notify(e)},r.clear=function(){var e=this;y.batch(function(){e.mutations.forEach(function(i){e.remove(i)})})},r.getAll=function(){return this.mutations},r.find=function(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(function(i){return tt(e,i)})},r.findAll=function(e){return this.mutations.filter(function(i){return tt(e,i)})},r.notify=function(e){var i=this;y.batch(function(){i.listeners.forEach(function(s){s(e)})})},r.onFocus=function(){this.resumePausedMutations()},r.onOnline=function(){this.resumePausedMutations()},r.resumePausedMutations=function(){var e=this.mutations.filter(function(i){return i.state.isPaused});return y.batch(function(){return e.reduce(function(i,s){return i.then(function(){return s.continue().catch(b)})},Promise.resolve())})},n}($);function Lt(){return{onFetch:function(n){n.fetchFn=function(){var r,t,e,i,s,a,o=(r=n.fetchOptions)==null||(t=r.meta)==null?void 0:t.refetchPage,c=(e=n.fetchOptions)==null||(i=e.meta)==null?void 0:i.fetchMore,h=c==null?void 0:c.pageParam,v=(c==null?void 0:c.direction)==="forward",d=(c==null?void 0:c.direction)==="backward",f=((s=n.state.data)==null?void 0:s.pages)||[],p=((a=n.state.data)==null?void 0:a.pageParams)||[],m=ot(),M=m==null?void 0:m.signal,O=p,g=!1,C=n.options.queryFn||function(){return Promise.reject("Missing queryFn")},x=function(Q,R,P,K){return O=K?[R].concat(O):[].concat(O,[R]),K?[P].concat(Q):[].concat(Q,[P])},E=function(Q,R,P,K){if(g)return Promise.reject("Cancelled");if(typeof P>"u"&&!R&&Q.length)return Promise.resolve(Q);var _={queryKey:n.queryKey,signal:M,pageParam:P,meta:n.meta},w=C(_),L=Promise.resolve(w).then(function(Ot){return x(Q,P,Ot,K)});if(G(w)){var B=L;B.cancel=w.cancel}return L},q;if(!f.length)q=E([]);else if(v){var Y=typeof h<"u",mt=Y?h:it(n.options,f);q=E(f,Y,mt)}else if(d){var Z=typeof h<"u",bt=Z?h:jt(n.options,f);q=E(f,Z,bt,!0)}else(function(){O=[];var S=typeof n.options.getNextPageParam>"u",Q=o&&f[0]?o(f[0],0,f):!0;q=Q?E([],S,p[0]):Promise.resolve(x([],p[0],f[0]));for(var R=function(_){q=q.then(function(w){var L=o&&f[_]?o(f[_],_,f):!0;if(L){var B=S?p[_]:it(n.options,w);return E(w,S,B)}return Promise.resolve(x(w,p[_],f[_]))})},P=1;P<f.length;P++)R(P)})();var k=q.then(function(S){return{pages:S,pageParams:O}}),gt=k;return gt.cancel=function(){g=!0,m==null||m.abort(),G(q)&&q.cancel()},k}}}}function it(u,n){return u.getNextPageParam==null?void 0:u.getNextPageParam(n[n.length-1],n)}function jt(u,n){return u.getPreviousPageParam==null?void 0:u.getPreviousPageParam(n[0],n)}var Xt=function(){function u(r){r===void 0&&(r={}),this.queryCache=r.queryCache||new Kt,this.mutationCache=r.mutationCache||new Tt,this.defaultOptions=r.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var n=u.prototype;return n.mount=function(){var t=this;this.unsubscribeFocus=j.subscribe(function(){j.isFocused()&&N.isOnline()&&(t.mutationCache.onFocus(),t.queryCache.onFocus())}),this.unsubscribeOnline=N.subscribe(function(){j.isFocused()&&N.isOnline()&&(t.mutationCache.onOnline(),t.queryCache.onOnline())})},n.unmount=function(){var t,e;(t=this.unsubscribeFocus)==null||t.call(this),(e=this.unsubscribeOnline)==null||e.call(this)},n.isFetching=function(t,e){var i=D(t,e),s=i[0];return s.fetching=!0,this.queryCache.findAll(s).length},n.isMutating=function(t){return this.mutationCache.findAll(l({},t,{fetching:!0})).length},n.getQueryData=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state.data},n.getQueriesData=function(t){return this.getQueryCache().findAll(t).map(function(e){var i=e.queryKey,s=e.state,a=s.data;return[i,a]})},n.setQueryData=function(t,e,i){var s=V(t),a=this.defaultQueryOptions(s);return this.queryCache.build(this,a).setData(e,i)},n.setQueriesData=function(t,e,i){var s=this;return y.batch(function(){return s.getQueryCache().findAll(t).map(function(a){var o=a.queryKey;return[o,s.setQueryData(o,e,i)]})})},n.getQueryState=function(t,e){var i;return(i=this.queryCache.find(t,e))==null?void 0:i.state},n.removeQueries=function(t,e){var i=D(t,e),s=i[0],a=this.queryCache;y.batch(function(){a.findAll(s).forEach(function(o){a.remove(o)})})},n.resetQueries=function(t,e,i){var s=this,a=D(t,e,i),o=a[0],c=a[1],h=this.queryCache,v=l({},o,{active:!0});return y.batch(function(){return h.findAll(o).forEach(function(d){d.reset()}),s.refetchQueries(v,c)})},n.cancelQueries=function(t,e,i){var s=this,a=D(t,e,i),o=a[0],c=a[1],h=c===void 0?{}:c;typeof h.revert>"u"&&(h.revert=!0);var v=y.batch(function(){return s.queryCache.findAll(o).map(function(d){return d.cancel(h)})});return Promise.all(v).then(b).catch(b)},n.invalidateQueries=function(t,e,i){var s,a,o,c=this,h=D(t,e,i),v=h[0],d=h[1],f=l({},v,{active:(s=(a=v.refetchActive)!=null?a:v.active)!=null?s:!0,inactive:(o=v.refetchInactive)!=null?o:!1});return y.batch(function(){return c.queryCache.findAll(v).forEach(function(p){p.invalidate()}),c.refetchQueries(f,d)})},n.refetchQueries=function(t,e,i){var s=this,a=D(t,e,i),o=a[0],c=a[1],h=y.batch(function(){return s.queryCache.findAll(o).map(function(d){return d.fetch(void 0,l({},c,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))})}),v=Promise.all(h).then(b);return c!=null&&c.throwOnError||(v=v.catch(b)),v},n.fetchQuery=function(t,e,i){var s=V(t,e,i),a=this.defaultQueryOptions(s);typeof a.retry>"u"&&(a.retry=!1);var o=this.queryCache.build(this,a);return o.isStaleByTime(a.staleTime)?o.fetch(a):Promise.resolve(o.state.data)},n.prefetchQuery=function(t,e,i){return this.fetchQuery(t,e,i).then(b).catch(b)},n.fetchInfiniteQuery=function(t,e,i){var s=V(t,e,i);return s.behavior=Lt(),this.fetchQuery(s)},n.prefetchInfiniteQuery=function(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(b).catch(b)},n.cancelMutations=function(){var t=this,e=y.batch(function(){return t.mutationCache.getAll().map(function(i){return i.cancel()})});return Promise.all(e).then(b).catch(b)},n.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},n.executeMutation=function(t){return this.mutationCache.build(this,t).execute()},n.getQueryCache=function(){return this.queryCache},n.getMutationCache=function(){return this.mutationCache},n.getDefaultOptions=function(){return this.defaultOptions},n.setDefaultOptions=function(t){this.defaultOptions=t},n.setQueryDefaults=function(t,e){var i=this.queryDefaults.find(function(s){return A(t)===A(s.queryKey)});i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})},n.getQueryDefaults=function(t){var e;return t?(e=this.queryDefaults.find(function(i){return H(t,i.queryKey)}))==null?void 0:e.defaultOptions:void 0},n.setMutationDefaults=function(t,e){var i=this.mutationDefaults.find(function(s){return A(t)===A(s.mutationKey)});i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})},n.getMutationDefaults=function(t){var e;return t?(e=this.mutationDefaults.find(function(i){return H(t,i.mutationKey)}))==null?void 0:e.defaultOptions:void 0},n.defaultQueryOptions=function(t){if(t!=null&&t._defaulted)return t;var e=l({},this.defaultOptions.queries,this.getQueryDefaults(t==null?void 0:t.queryKey),t,{_defaulted:!0});return!e.queryHash&&e.queryKey&&(e.queryHash=X(e.queryKey,e)),e},n.defaultQueryObserverOptions=function(t){return this.defaultQueryOptions(t)},n.defaultMutationOptions=function(t){return t!=null&&t._defaulted?t:l({},this.defaultOptions.mutations,this.getMutationDefaults(t==null?void 0:t.mutationKey),t,{_defaulted:!0})},n.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},u}(),Nt=function(u){U(n,u);function n(t,e){var i;return i=u.call(this)||this,i.client=t,i.setOptions(e),i.bindMethods(),i.updateResult(),i}var r=n.prototype;return r.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},r.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},r.onUnsubscribe=function(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}},r.onMutationUpdate=function(e){this.updateResult();var i={listeners:!0};e.type==="success"?i.onSuccess=!0:e.type==="error"&&(i.onError=!0),this.notify(i)},r.getCurrentResult=function(){return this.currentResult},r.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},r.mutate=function(e,i){return this.mutateOptions=i,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,l({},this.options,{variables:typeof e<"u"?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},r.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:dt(),i=l({},e,{isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=i},r.notify=function(e){var i=this;y.batch(function(){i.mutateOptions&&(e.onSuccess?(i.mutateOptions.onSuccess==null||i.mutateOptions.onSuccess(i.currentResult.data,i.currentResult.variables,i.currentResult.context),i.mutateOptions.onSettled==null||i.mutateOptions.onSettled(i.currentResult.data,null,i.currentResult.variables,i.currentResult.context)):e.onError&&(i.mutateOptions.onError==null||i.mutateOptions.onError(i.currentResult.error,i.currentResult.variables,i.currentResult.context),i.mutateOptions.onSettled==null||i.mutateOptions.onSettled(void 0,i.currentResult.error,i.currentResult.variables,i.currentResult.context))),e.listeners&&i.listeners.forEach(function(s){s(i.currentResult)})})},n}($),It=Ct.unstable_batchedUpdates;y.setBatchNotifyFunction(It);var Ht=console;xt(Ht);var rt=F.createContext(void 0),vt=F.createContext(!1);function yt(u){return u&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=rt),window.ReactQueryClientContext):rt}var Gt=function(){var n=F.useContext(yt(F.useContext(vt)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},Yt=function(n){var r=n.client,t=n.contextSharing,e=t===void 0?!1:t,i=n.children;F.useEffect(function(){return r.mount(),function(){r.unmount()}},[r]);var s=yt(e);return F.createElement(vt.Provider,{value:e},F.createElement(s.Provider,{value:r},i))};function Bt(u,n,r){return typeof n=="function"?n.apply(void 0,r):typeof n=="boolean"?n:!!u}function Zt(u,n,r){var t=F.useRef(!1),e=F.useState(0),i=e[1],s=Mt(u,n,r),a=Gt(),o=F.useRef();o.current?o.current.setOptions(s):o.current=new Nt(a,s);var c=o.current.getCurrentResult();F.useEffect(function(){t.current=!0;var v=o.current.subscribe(y.batchCalls(function(){t.current&&i(function(d){return d+1})}));return function(){t.current=!1,v()}},[]);var h=F.useCallback(function(v,d){o.current.mutate(v,d).catch(b)},[]);if(c.error&&Bt(void 0,o.current.options.useErrorBoundary,[c.error]))throw c.error;return l({},c,{mutate:h,mutateAsync:c.mutate})}var pt={exports:{}};pt.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};var kt=pt.exports;export{Xt as Q,Yt as a,kt as d,Zt as u};