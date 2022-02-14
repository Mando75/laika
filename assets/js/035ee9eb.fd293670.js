"use strict";(self.webpackChunk_zendesk_laika_docs=self.webpackChunk_zendesk_laika_docs||[]).push([[389],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,u=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return a?n.createElement(u,l(l({ref:t},k),{},{components:a})):n.createElement(u,l({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6e3:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return k},default:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],p={id:"Laika.Laika-1",title:"Class: Laika",sidebar_label:"Laika.Laika",custom_edit_url:null},d=void 0,o={unversionedId:"api/classes/Laika.Laika-1",id:"api/classes/Laika.Laika-1",isDocsHomePage:!1,title:"Class: Laika",description:"Laika.Laika",source:"@site/docs/api/classes/Laika.Laika-1.md",sourceDirName:"api/classes",slug:"/api/classes/Laika.Laika-1",permalink:"/laika/docs/api/classes/Laika.Laika-1",editUrl:null,tags:[],version:"current",frontMatter:{id:"Laika.Laika-1",title:"Class: Laika",sidebar_label:"Laika.Laika",custom_edit_url:null},sidebar:"default",previous:{title:"Pitfalls",permalink:"/laika/docs/pitfalls"},next:{title:"Laika.InterceptApi",permalink:"/laika/docs/api/classes/Laika.InterceptApi"}},k=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"log",id:"log",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"createLink",id:"createlink",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"intercept",id:"intercept",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"modifyRemote",id:"modifyremote",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],s={toc:k};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/Laika"},"Laika"),".Laika"),(0,i.kt)("p",null,"Class responsible for managing interceptions.\nBy default a singleton is installed on ",(0,i.kt)("inlineCode",{parentName:"p"},"globalThis")," (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),") under ",(0,i.kt)("inlineCode",{parentName:"p"},"laika"),"."),(0,i.kt)("p",null,"Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../modules/Laika"},"module page")," or scroll down to see it's functionality."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"laika.log.startLogging();\n")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Laika"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters.referenceName?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/538dcca/src/laika.ts#L84"},"src/laika.ts:84")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"log"},"log"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"log"),": ",(0,i.kt)("a",{parentName:"p",href:"Laika.LogApi"},(0,i.kt)("inlineCode",{parentName:"a"},"LogApi"))),(0,i.kt)("p",null,"A set of functions that controls logging and recording of all (or selected) operations."),(0,i.kt)("p",null,"Read more on the ",(0,i.kt)("a",{parentName:"p",href:"Laika.LogApi"},"LogApi")," page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"laika.log.startLogging();\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/538dcca/src/laika.ts#L429"},"src/laika.ts:429")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createlink"},"createLink"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createLink"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"onRequest?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloLink")),(0,i.kt)("p",null,"Use this function to create an Apollo Link that uses this Laika instance.\nUseful in unit tests."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onRequest?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"operation"),": ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/zendesk_laika.Operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"forward"),": ",(0,i.kt)("a",{parentName:"td",href:"../modules/zendesk_laika#nextlink"},(0,i.kt)("inlineCode",{parentName:"a"},"NextLink")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApolloLink")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/538dcca/src/laika.ts#L488"},"src/laika.ts:488")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"intercept"},"intercept"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"intercept"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"matcher?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"connectFutureLinksOrMitmFn?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keepNonSubscriptionConnectionsOpen?"),"): ",(0,i.kt)("a",{parentName:"p",href:"Laika.InterceptApi"},(0,i.kt)("inlineCode",{parentName:"a"},"InterceptApi"))),(0,i.kt)("p",null,"Provides functionality to intercept, and optionally mock or modify each operation's subscription.\nThe API returned is heavily inspired on jest's mocking functionality (",(0,i.kt)("inlineCode",{parentName:"p"},"jest.fn()"),")\nand is described in length here: ",(0,i.kt)("a",{parentName:"p",href:"Laika.InterceptApi"},"InterceptApi"),"."),(0,i.kt)("p",null,"Every interceptor you create should be as specific as needed in a given session.\nAt the very least, ensure the order of creating interceptors is from most specific, to least specific."),(0,i.kt)("p",null,"This is because any operations that are executed by your client will end up\nbeing intercepted by the ",(0,i.kt)("strong",{parentName:"p"},"first")," interceptor that matches\nthe constraints of the ",(0,i.kt)("a",{parentName:"p",href:"../modules/typedefs#matcher"},"Matcher"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/laika/docs/pitfalls"},(0,i.kt)("em",{parentName:"a"},"Pitfalls"))," for more information."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const getActiveUsersInterceptor = laika.intercept({\n  clientName: 'users',\n  operationName: 'getActiveUsers',\n});\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matcher?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#matcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Matcher"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","[include:matcher.md]","]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"connectFutureLinksOrMitmFn")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#maninthemiddlefn"},(0,i.kt)("inlineCode",{parentName:"a"},"ManInTheMiddleFn"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, future links will still be called (e.g. reach the backend) and return responses. If set to a function, can serve for man-in-the-middle tinkering with the result.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keepNonSubscriptionConnectionsOpen")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, queries and mutations will behave a little like subscriptions, in that you will be able to fire updates even after the initial response. Experimental.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Laika.InterceptApi"},(0,i.kt)("inlineCode",{parentName:"a"},"InterceptApi"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/538dcca/src/laika.ts#L117"},"src/laika.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"modifyremote"},"modifyRemote"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"modifyRemote"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"matcher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapFn"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Modify backend (or mocked) responses before they reach subscribers."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matcher")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#matcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Matcher"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","[include:matcher.md]","]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mapFn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/zendesk_laika.FetchResult"},(0,i.kt)("inlineCode",{parentName:"a"},"FetchResult")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Object"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"operation"),": ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/zendesk_laika.Operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")),") => ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/zendesk_laika.FetchResult"},(0,i.kt)("inlineCode",{parentName:"a"},"FetchResult")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Object"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mapping function to alter the responses.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"restore")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/538dcca/src/laika.ts#L405"},"src/laika.ts:405")))}m.isMDXComponent=!0}}]);