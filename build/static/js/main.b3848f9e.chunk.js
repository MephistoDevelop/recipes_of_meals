(this["webpackJsonpmeal-recipe"]=this["webpackJsonpmeal-recipe"]||[]).push([[0],{51:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=a(21),o=a(22),s=a(2),u=a.n(s),m=a(9),d=a(3),f=a(11),p=a.n(f),h=a(8),E=a(15),v=function(e){e.categories;var t=[],a=Object(n.useState)(!1),c=Object(d.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),f=s[0],h=s[1];return r.a.createElement("div",{id:"filter-container"},r.a.createElement("input",{type:"text",placeholder:"Find Recipe",onChange:function(e){return function(e){(function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(a));case 2:n=e.sent,(t=[]).push(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e.target.value),void 0!==t[0]&&(h(t[0].meals),i(!0))}(e)}}),!0===l?r.a.createElement(E.a,{from:"*",to:{pathname:"/finded",state:{meals:f}}}):null)},b=function(e){var t=e.categories;return r.a.createElement("div",{id:"navbar-container",className:"d-flex"},r.a.createElement("div",{id:"title-container"},"MEALS RECIPES"),r.a.createElement(v,{categories:t}),r.a.createElement(h.b,{id:"home-link",to:"/home"},"Home"),r.a.createElement(h.b,{id:"random-link",to:"/random"},"Random Meals"),r.a.createElement(h.b,{id:"categories-link",to:"/categories"},"Categories"))},g=a(14),j=0,O=function(e){var t=e.randomMeals,a=Object(n.useState)(!1),c=Object(d.a)(a,2),l=c[0],i=c[1],o=Object(E.f)();if(o.location&&o.location.state&&o.location.state.from){var s=Object(g.a)({},o.location.state);delete s.from,o.replace(Object(g.a)({},o.location,{state:s}))}return r.a.createElement("div",{id:"random-list-container",className:"justify-content-center col"},r.a.createElement("div",{id:"random-header"},"Random Recipes"),r.a.createElement("div",{className:"d-flex justify-content-center"},w(t,l,i,o)))},w=function(e,t,a,n){var c=[];if(e.length>=7)for(var l=function(l){c.push(r.a.createElement("div",{key:l,className:"random-item-container",onClick:function(t){return function(e,t,a){t(!0),j=a}(e[l],a,l)}},r.a.createElement("div",{className:"img-random-container hover01"},r.a.createElement("figure",{className:"d-flex justify-content-center"},r.a.createElement("img",{className:"img-thumbnail random-img",src:e[l].strMealThumb}))),r.a.createElement("div",{className:"title-random-container"},e[l].strMeal),!0===t?n.replace({pathname:"/details",state:{meal:e[j]}}):null))},i=0;i<7;i+=1)l(i);return c},x=function(e){var t=e.categories,a=[],c=Object(n.useState)(!1),l=Object(d.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)({}),u=Object(d.a)(s,2),m=u[0],f=u[1],p=Object(E.f)();if(p.location&&p.location.state&&p.location.state.from){var h=Object(g.a)({},p.location.state);delete h.from,p.replace(Object(g.a)({},p.location,{state:h}))}return r.a.createElement("div",{id:"recipe-list-container col"},r.a.createElement("div",{id:"recipe-list-header"},"Categories "),r.a.createElement("div",{className:"trios "},function(){for(var e=function(e){a.push(r.a.createElement("div",{key:e,className:"item-list-object col justify-content-center",onClick:function(a){return n=t[e],o(!0),void f(n);var n}},r.a.createElement("div",{className:"d-flex justify-content-center hover01"},r.a.createElement("figure",null,r.a.createElement("img",{alt:"thumb meal",className:"img-item random-img",src:t[e].strCategoryThumb}))),r.a.createElement("div",{className:"text-center text"},t[e].strCategory)))},n=0;n<t.length;n+=1)e(n);return a}(),!0===i?r.a.createElement(E.a,{from:"*",to:{pathname:"/meals",state:{category:m}}}):null))},y=a(50),k=a.n(y),N=function(){var e=Object(E.g)(),t=e.state.meal;console.log("Imlocaion: ".concat(JSON.stringify(e)));return r.a.createElement("div",null,r.a.createElement("div",{id:"header-container",className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{id:"image-details-container",className:"mr-5"},r.a.createElement("img",{id:"img-details",src:t.strMealThumb}),r.a.createElement("div",{id:"meal-name"},t.strMeal),r.a.createElement("div",{id:"meal-category"},"Category:",t.strCategory)),r.a.createElement("div",{id:"ingredients-container"},r.a.createElement("div",{className:"d-flex col"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ingredient"),r.a.createElement("th",null,"Measure")),function(e){for(var t=[],a=1;a<19;a+=1)""!==e["strIngredient".concat(a)]&&t.push(r.a.createElement("tr",null,r.a.createElement("td",null,e["strIngredient".concat(a)]),r.a.createElement("td",null,e["strMeasure".concat(a)])));return t}(t))),r.a.createElement("div",null))),r.a.createElement("div",{id:"instructions-container"},r.a.createElement("p",null,"Instrucions:")," ",t.strInstructions),r.a.createElement("div",{id:"video-container",className:"mt-5"},r.a.createElement(k.a,{url:t.strYoutube})))},M=[],S=[],C=function(e){e.randomMeals;var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),s=o[0],f=o[1],h=Object(E.g)().state.category,v=Object(E.f)(),b=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(t)).then((function(e){M=[];for(var t=0;t<e.data.meals.length;t+=1)M.push(e.data.meals[t]);l(!0)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t.idMeal)).then((function(e){(S=[]).push(e.data.meals[0])}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:f(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b(h.strCategory)}),[]),r.a.createElement("div",null,function(e){var t=[];if(c){for(var a=function(a){t.push(r.a.createElement("div",{role:"button",className:"details-container d-flex m-4",name:e[a].idMeal,onClick:function(){return j(e[a])}},r.a.createElement("div",null,r.a.createElement("img",{alt:"meal",className:"img-list",src:e[a].strMealThumb})),r.a.createElement("div",{className:"d-flex align-self-center ml-3"},r.a.createElement("p",null,e[a].strMeal))))},n=0;n<e.length;n+=1)a(n);return t}return!0}(M),s?v.replace({pathname:"./details",state:{meal:S[0]}}):null)},I=function(){return r.a.createElement("div",{id:"img-home"})},T=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(d.a)(l,2),o=i[0],s=i[1],f=Object(E.g)().state.meals,h=[],v=Object(E.f)(),b=function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:t=h[0],s(h[0]),c(!0),a.val="",console.log(JSON.stringify(t));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t.idMeal)).then((function(e){(h=[]).push(e.data.meals[0])}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"mt-5"},function(e){var t=[];if(e){for(var a=function(a){t.push(r.a.createElement("div",{role:"button",className:"details-container d-flex m-4",name:e[a].idMeal,onClick:function(t){return b(e[a],t)}},r.a.createElement("div",null,r.a.createElement("img",{alt:"meal",className:"img-list",src:e[a].strMealThumb})),r.a.createElement("div",{className:"d-flex align-self-center ml-3"},r.a.createElement("p",null,e[a].strMeal))))},n=0;n<e.length;n+=1)a(n);return t}return!0}(f),a?v.replace({pathname:"./details",state:{meal:o,hey:"Hello"}}):null)},R=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(d.a)(l,2),s=i[0],f=i[1],v=[],g=[],j=Object(o.b)();return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<8)){e.next=8;break}return e.next=4,p.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){var t=e.data.meals[0];g.push(t)}));case 4:7===t&&f(g);case 5:t+=1,e.next=1;break;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){e.data.categories.forEach((function(e){v.push(e)})),c(v)})),function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"main-container"},r.a.createElement(h.a,null,r.a.createElement(b,{categories:a,onClick:function(){return j(c)}}),r.a.createElement("div",{id:"content"},r.a.createElement(E.b,{path:"/home",component:function(){return r.a.createElement(I,null)}}),r.a.createElement(E.b,{path:"/random",component:function(){return r.a.createElement(O,{randomMeals:s})}}),r.a.createElement(E.b,{path:"/details",component:function(){return r.a.createElement(N,null)}}),r.a.createElement(E.b,{path:"/categories",component:function(){return r.a.createElement(x,{categories:a})}}),r.a.createElement(E.b,{path:"/meals",component:function(){return r.a.createElement(C,null)}}),r.a.createElement(E.b,{path:"/finded",component:function(){return r.a.createElement(T,null)}}))))},A={counter:0,recipes:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);switch(t.type){case"SET_CATEGORIES":a.categories=Object(g.a)({},e,{ok:"good"});break;case"DECREASE":a.counter-=1;break;case"SET_MEAL":break;default:return a}return a},H=(a(84),Object(i.b)(J));l.a.render(r.a.createElement(o.a,{store:H},r.a.createElement(R,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b3848f9e.chunk.js.map