"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{789:function(n,t,r){r.d(t,{PR:function(){return f},Q6:function(){return o},mG:function(){return p},uK:function(){return s}});var e=r(5861),i=r(7757),u=r.n(i),c=r(5294).Z.create({baseURL:"https://www.thecocktaildb.com/api/json/v1/1"}),a=Array.from({length:12},(function(){return"/random.php"})),o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.map(function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get(t);case 2:return r=n.sent,e=r.data,n.abrupt("return",e.drinks[0]);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),n.abrupt("return",Promise.all(t));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search.php?s=".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.drinks);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/lookup.php?i=".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.drinks[0]);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/lookup.php?iid=".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.ingredients);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8341:function(n,t,r){r.d(t,{e:function(){return c}});r(2791);var e=r(7689),i=r(1087),u=r(184),c=function(n){var t=n.cocktails,r=(0,e.TH)();return(0,u.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:t.map((function(n){var t=n.strDrink,e=n.idDrink,c=n.strDrinkThumb;return(0,u.jsx)("li",{style:{flexBasis:"25%"},children:(0,u.jsxs)(i.rU,{to:"/searchcocktails/".concat(e),state:{from:r},children:[(0,u.jsx)("img",{src:c,alt:t}),(0,u.jsx)("h3",{children:t})]})},e)}))})}},6467:function(n,t,r){r.d(t,{$h:function(){return C},W2:function(){return Q},Py:function(){return U},$0:function(){return T},gy:function(){return A}});var e,i,u,c,a,o,s,p,f,l,d,h,x,m=r(100),g=r(168),v=r(7924),j=v.ZP.div(e||(e=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  overflow: hidden;\n  margin: 0 auto;\n  box-shadow: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.shadows.regular}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.white})),Z=v.ZP.img(i||(i=(0,g.Z)(["\n  object-fit: cover;\n"]))),k=v.ZP.div(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),w=v.ZP.span(c||(c=(0,g.Z)(["\n  align-self: flex-start;\n  padding: ",";\n  border-radius: ",";\n  font-size: ",";\n  color: ",";\n  background: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.tagBackground})),b=v.ZP.h2(a||(a=(0,g.Z)(["\n  font-size: ",";\n  text-transform: capitalize;\n"])),(function(n){return n.theme.spacing(6)})),y=v.ZP.p(o||(o=(0,g.Z)(["\n  font-weight: 200;\n  letter-spacing: 0.8px;\n"]))),P=v.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  padding: ",";\n  margin-top: auto;\n"])),(function(n){return n.theme.spacing(4)})),z=v.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),D=v.ZP.img(f||(f=(0,g.Z)(["\n  border-radius: 50%;\n"]))),S=v.ZP.h3(l||(l=(0,g.Z)(["\n  font-size: 14px;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(1)})),_=v.ZP.span(d||(d=(0,g.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.gray})),B=r(184),C=function(n){var t,r=n.name,e=n.description,i=n.title,u=n.poster,c=n.tag,a=n.avatar,o=n.postedAt;return(0,B.jsxs)(j,{children:[(0,B.jsx)(Z,{src:u,alt:c}),(0,B.jsxs)(k,{children:[(0,B.jsx)(w,{children:c}),(0,B.jsx)(b,{children:i}),(0,B.jsx)(y,{children:e})]}),(0,B.jsx)(P,{children:(0,B.jsxs)(z,{children:[(0,B.jsx)(D,{src:a,alt:r}),(0,B.jsxs)("div",{children:[(0,B.jsx)(S,{children:r}),(0,B.jsx)(_,{children:(t=o,(0,m.Q)(new Date(t),{addSuffix:!0}))})]})]})})]})},Q=v.ZP.div(h||(h=(0,g.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: ",";\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)})),T=v.ZP.section(x||(x=(0,g.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),W=r(1413),$=function(n){var t=n.title,r=n.total;return(0,B.jsxs)("li",{children:[(0,B.jsx)("p",{children:t}),(0,B.jsx)("p",{children:r})]})},A=function(n){var t=n.statistics,r=n.title;return(0,B.jsxs)("div",{children:[r&&(0,B.jsx)("h2",{children:r}),(0,B.jsx)("ul",{children:t.map((function(n){return(0,B.jsx)($,(0,W.Z)({},n),n.id)}))})]})},E=r(2942),R=r(1909),U=function(n){var t=n.defaultValue,r=n.updateTodo,e=n.cancelEdit;return(0,B.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.elements.text.value;r(t)},style:{marginBottom:20},children:[(0,B.jsx)("input",{defaultValue:t,name:"text",type:"text",required:!0}),(0,B.jsx)("button",{type:"submit",children:(0,B.jsx)(E.P05,{size:16,color:"green"})}),(0,B.jsx)("button",{type:"button",onClick:function(){return e()},children:(0,B.jsx)(R.xg7,{size:16,color:"red"})})]})};r(4343)},3974:function(n,t,r){r.r(t);var e=r(9439),i=r(789),u=r(6467),c=r(8341),a=r(3579),o=r(2791),s=r(184);t.default=function(){var n=(0,o.useState)([]),t=(0,e.Z)(n,2),r=t[0],p=t[1],f=(0,o.useState)(!1),l=(0,e.Z)(f,2),d=l[0],h=l[1];return(0,o.useEffect)((function(){h(!0),(0,i.Q6)().then(p).finally((function(){return h(!1)}))}),[]),(0,s.jsx)(u.$0,{children:(0,s.jsxs)(u.W2,{children:[r.length>0&&(0,s.jsx)(c.e,{cocktails:r}),d&&(0,s.jsx)(a.a,{})]})})}}}]);
//# sourceMappingURL=974.f71251ea.chunk.js.map