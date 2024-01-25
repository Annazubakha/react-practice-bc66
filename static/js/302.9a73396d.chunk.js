"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[302],{5937:function(n,t,e){e.d(t,{l:function(){return u}});var r=e(9439),i=e(2791),o=e(184),u=function(n){var t=n.addTodo,e=n.text,u=(0,i.useState)(""),a=(0,r.Z)(u,2),c=a[0],s=a[1];return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(c),s("")},style:{marginBottom:"20px"},children:[(0,o.jsx)("label",{children:(0,o.jsx)("input",{value:c,type:"text",name:"query",onChange:function(n){var t=n.target.value;s(t)},required:!0})}),(0,o.jsx)("button",{children:e})]})}},5488:function(n,t,e){e.d(t,{u:function(){return c}});var r=e(6804),i=e(2791),o=e(4164),u=e(184),a=document.querySelector("#modalRoot"),c=function(n){var t=n.closeModal,e=n.children;(0,i.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,o.createPortal)((0,u.jsx)(r.Y,{onClick:function(n){n.target===n.currentTarget&&t()},children:e}),a)}},9894:function(n,t,e){e.d(t,{P:function(){return c}});var r=e(2942),i=e(1909),o=e(208),u=e(4420),a=e(184),c=function(n){var t=n.defaultValue,e=(n.updateTodo,n.id),c=(0,u.I0)();return console.log(t),(0,a.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.elements.text.value;c((0,o.bm)({id:e,text:t}))},style:{marginBottom:20},children:[(0,a.jsx)("textarea",{defaultValue:t,name:"text",type:"text",style:{width:"500px",height:"150px",resize:"none"},required:!0}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)(r.P05,{size:16,color:"green"})}),(0,a.jsx)("button",{type:"button",children:(0,a.jsx)(i.xg7,{size:16,color:"red"})})]})}},4944:function(n,t,e){e.d(t,{$h:function(){return M},W2:function(){return L},$0:function(){return T},gy:function(){return E},TI:function(){return V}});var r,i,o,u,a,c,s,l,d,f,p,h,x,m=e(100),g=e(168),v=e(7924),j=v.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  overflow: hidden;\n  margin: 0 auto;\n  box-shadow: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.shadows.regular}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.white})),Z=v.ZP.img(i||(i=(0,g.Z)(["\n  object-fit: cover;\n"]))),b=v.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),w=v.ZP.span(u||(u=(0,g.Z)(["\n  align-self: flex-start;\n  padding: ",";\n  border-radius: ",";\n  font-size: ",";\n  color: ",";\n  background: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.tagBackground})),y=v.ZP.h2(a||(a=(0,g.Z)(["\n  font-size: ",";\n  text-transform: capitalize;\n"])),(function(n){return n.theme.spacing(6)})),k=v.ZP.p(c||(c=(0,g.Z)(["\n  font-weight: 200;\n  letter-spacing: 0.8px;\n"]))),S=v.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  padding: ",";\n  margin-top: auto;\n"])),(function(n){return n.theme.spacing(4)})),P=v.ZP.div(l||(l=(0,g.Z)(["\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),C=v.ZP.img(d||(d=(0,g.Z)(["\n  border-radius: 50%;\n"]))),q=v.ZP.h3(f||(f=(0,g.Z)(["\n  font-size: 14px;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(1)})),z=v.ZP.span(p||(p=(0,g.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.gray})),_=e(184),M=function(n){var t,e=n.name,r=n.description,i=n.title,o=n.poster,u=n.tag,a=n.avatar,c=n.postedAt;return(0,_.jsxs)(j,{children:[(0,_.jsx)(Z,{src:o,alt:u}),(0,_.jsxs)(b,{children:[(0,_.jsx)(w,{children:u}),(0,_.jsx)(y,{children:i}),(0,_.jsx)(k,{children:r})]}),(0,_.jsx)(S,{children:(0,_.jsxs)(P,{children:[(0,_.jsx)(C,{src:a,alt:e}),(0,_.jsxs)("div",{children:[(0,_.jsx)(q,{children:e}),(0,_.jsx)(z,{children:(t=c,(0,m.Q)(new Date(t),{addSuffix:!0}))})]})]})})]})},L=v.ZP.div(h||(h=(0,g.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: ",";\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)})),T=v.ZP.section(x||(x=(0,g.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),B=e(1413),D=function(n){var t=n.title,e=n.total;return(0,_.jsxs)("li",{children:[(0,_.jsx)("p",{children:t}),(0,_.jsx)("p",{children:e})]})},E=function(n){var t=n.statistics,e=n.title;return(0,_.jsxs)("div",{children:[e&&(0,_.jsx)("h2",{children:e}),(0,_.jsx)("ul",{children:t.map((function(n){return(0,_.jsx)(D,(0,B.Z)({},n),n.id)}))})]})},I=(e(9894),e(4343),e(9439)),A=e(2791),W=e(4420),$=e(6351),R=e(208),V=function(n){var t=n.text,e=(0,A.useState)(""),r=(0,I.Z)(e,2),i=r[0],o=r[1],u=(0,W.I0)(),a=(0,W.v9)($.g),c=function(n){var t=a.find((function(t){return t.text.toLowerCase()===n.toLowerCase()}));return t&&alert("Todo: ".concat(n," is already exist")),t};return(0,_.jsxs)("form",{onSubmit:function(n){n.preventDefault(),c(i)||(u((0,R.rk)(i)),o(""))},style:{marginBottom:"20px"},children:[(0,_.jsx)("label",{children:(0,_.jsx)("input",{value:i,type:"text",name:"query",onChange:function(n){var t=n.target.value;o(t)},required:!0})}),(0,_.jsx)("button",{children:t})]})}},8302:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(3433),i=e(5861),o=e(9439),u=e(4687),a=e.n(u),c=e(2791),s=e(5937),l=e(5294).Z.create({baseURL:"https://api.unsplash.com",headers:{common:{Authorization:"Client-ID 4dc0c9edd3f8399861773bf78562a506e26384e3c5d582c06359e3e1c4b70c33"}}}),d=function(){var n=(0,i.Z)(a().mark((function n(t,e){var r,i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:t,page:e,per_page:20,color:"black_and_white",orientation:"portrait"},n.next=3,l.get("/search/photos",{params:r});case 3:return i=n.sent,o=i.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=e(184),p=function(n){var t=n.alt,e=n.small,r=n.full,i=n.openModal;return(0,f.jsx)("li",{onClick:function(){return i(r)},style:{flexBasis:"20%"},children:(0,f.jsx)("img",{src:e,alt:t})})},h=function(n){var t=n.photos,e=n.openModal;return(0,f.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"},children:t.map((function(n){var t=n.id,r=n.urls,i=n.alt_description;return(0,f.jsx)(p,{openModal:e,small:r.small,alt:i,full:r.full},t)}))})},x=e(4944),m=e(3579),g=e(5488),v=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],u=t[1],l=(0,c.useState)(""),p=(0,o.Z)(l,2),v=p[0],j=p[1],Z=(0,c.useState)(1),b=(0,o.Z)(Z,2),w=b[0],y=b[1],k=(0,c.useState)(!1),S=(0,o.Z)(k,2),P=S[0],C=S[1],q=(0,c.useState)(!1),z=(0,o.Z)(q,2),_=z[0],M=z[1],L=(0,c.useState)(null),T=(0,o.Z)(L,2),B=T[0],D=T[1],E=(0,c.useState)(!1),I=(0,o.Z)(E,2),A=I[0],W=I[1],$=(0,c.useState)(""),R=(0,o.Z)($,2),V=R[0],F=R[1];(0,c.useEffect)((function(){v&&(W(!0),(0,i.Z)(a().mark((function n(){var t,e,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d(v,w);case 3:if(t=n.sent,e=t.results,i=t.total,e.length){n.next=9;break}return M(!0),n.abrupt("return");case 9:u((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))})),C(w<Math.ceil(i/20)),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),D(n.t0.message);case 16:return n.prev=16,W(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])})))())}),[v,w]);var N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";F(n)};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x.$0,{children:(0,f.jsxs)(x.W2,{children:[(0,f.jsx)(s.l,{addTodo:function(n){j(n),M(!1),u([]),y(1),D(null)},text:"Search photos"}),(0,f.jsx)(h,{photos:e,openModal:N}),A&&(0,f.jsx)(m.a,{}),P&&(0,f.jsx)("button",{onClick:function(){y((function(n){return n+1}))},type:"button",children:"Load more"}),_&&(0,f.jsx)("p",{children:"No photos for your query!"}),B&&(0,f.jsxs)("p",{children:["Sorry, something went wrong ",B]}),V&&(0,f.jsx)(g.u,{closeModal:N,children:(0,f.jsx)("img",{src:V,alt:"",width:"70%"})})]})})})}},6351:function(n,t,e){e.d(t,{A:function(){return i},g:function(){return r}});var r=function(n){return n.todos},i=function(n){return n.filter}}}]);
//# sourceMappingURL=302.9a73396d.chunk.js.map