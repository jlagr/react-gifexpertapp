(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),u(""))},children:Object(j.jsx)("input",{value:a,onChange:function(t){u(t.target.value)}})})};d.prototype={setCategories:o.a.func.isRequired};var p=d,l=n(11),b=n(6),f=n.n(b),O=n(9),h=function(){var t=Object(O.a)(f.a.mark((function t(e){var n,r,c,a,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"UM94LJDCMUMrs5o1Cno1aGiXcRzmIqSG",n=encodeURI(e),r="https://api.giphy.com/v1/gifs/search?q=".concat(n,"&limit=10&api_key=").concat("UM94LJDCMUMrs5o1Cno1aGiXcRzmIqSG"),t.next=5,fetch(r);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,i=a.data,s=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",s);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsxs)("p",{children:[" ",e," "]})]})},g=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){h(t).then((function(t){return setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[" ",e," "]}),a&&Object(j.jsx)("p",{children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(j.jsx)(x,Object(l.a)({},t),t.id)}))})]})},m=function(){var t=Object(r.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(p,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(g,{category:t},t)}))})]})};n(20);a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.03eaffef.chunk.js.map