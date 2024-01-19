"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[841],{5937:function(n,t,e){e.d(t,{l:function(){return u}});var r=e(9439),i=e(2791),o=e(184),u=function(n){var t=n.addTodo,e=n.text,u=(0,i.useState)(""),c=(0,r.Z)(u,2),a=c[0],s=c[1];return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(a),s("")},style:{marginBottom:"20px"},children:[(0,o.jsx)("label",{children:(0,o.jsx)("input",{value:a,type:"text",name:"query",onChange:function(n){var t=n.target.value;s(t)},required:!0})}),(0,o.jsx)("button",{children:e})]})}},5488:function(n,t,e){e.d(t,{u:function(){return u}});var r=e(6804),i=e(2791),o=e(184),u=function(n){var t=n.closeModal,e=n.children;(0,i.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,o.jsx)(r.Y,{onClick:function(n){n.target===n.currentTarget&&t()},children:e})}},6467:function(n,t,e){e.d(t,{$h:function(){return T},W2:function(){return B},Py:function(){return I},$0:function(){return D},gy:function(){return V}});var r,i,o,u,c,a,s,d,l,f,p,x,h,g=e(100),m=e(168),v=e(7924),j=v.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  overflow: hidden;\n  margin: 0 auto;\n  box-shadow: ",";\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.shadows.regular}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.white})),y=v.ZP.img(i||(i=(0,m.Z)(["\n  object-fit: cover;\n"]))),Z=v.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),b=v.ZP.span(u||(u=(0,m.Z)(["\n  align-self: flex-start;\n  padding: ",";\n  border-radius: ",";\n  font-size: ",";\n  color: ",";\n  background: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.tagBackground})),w=v.ZP.h2(c||(c=(0,m.Z)(["\n  font-size: ",";\n  text-transform: capitalize;\n"])),(function(n){return n.theme.spacing(6)})),k=v.ZP.p(a||(a=(0,m.Z)(["\n  font-weight: 200;\n  letter-spacing: 0.8px;\n"]))),P=v.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  padding: ",";\n  margin-top: auto;\n"])),(function(n){return n.theme.spacing(4)})),C=v.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),S=v.ZP.img(l||(l=(0,m.Z)(["\n  border-radius: 50%;\n"]))),E=v.ZP.h3(f||(f=(0,m.Z)(["\n  font-size: 14px;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(1)})),z=v.ZP.span(p||(p=(0,m.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.gray})),L=e(184),T=function(n){var t,e=n.name,r=n.description,i=n.title,o=n.poster,u=n.tag,c=n.avatar,a=n.postedAt;return(0,L.jsxs)(j,{children:[(0,L.jsx)(y,{src:o,alt:u}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(b,{children:u}),(0,L.jsx)(w,{children:i}),(0,L.jsx)(k,{children:r})]}),(0,L.jsx)(P,{children:(0,L.jsxs)(C,{children:[(0,L.jsx)(S,{src:c,alt:e}),(0,L.jsxs)("div",{children:[(0,L.jsx)(E,{children:e}),(0,L.jsx)(z,{children:(t=a,(0,g.Q)(new Date(t),{addSuffix:!0}))})]})]})})]})},B=v.ZP.div(x||(x=(0,m.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: ",";\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)})),D=v.ZP.section(h||(h=(0,m.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),_=e(1413),q=function(n){var t=n.title,e=n.total;return(0,L.jsxs)("li",{children:[(0,L.jsx)("p",{children:t}),(0,L.jsx)("p",{children:e})]})},V=function(n){var t=n.statistics,e=n.title;return(0,L.jsxs)("div",{children:[e&&(0,L.jsx)("h2",{children:e}),(0,L.jsx)("ul",{children:t.map((function(n){return(0,L.jsx)(q,(0,_.Z)({},n),n.id)}))})]})},A=e(2942),$=e(1909),I=function(n){var t=n.defaultValue,e=n.updateTodo,r=n.cancelEdit;return(0,L.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target.elements.text.value;e(t)},style:{marginBottom:20},children:[(0,L.jsx)("input",{defaultValue:t,name:"text",type:"text",required:!0}),(0,L.jsx)("button",{type:"submit",children:(0,L.jsx)(A.P05,{size:16,color:"green"})}),(0,L.jsx)("button",{type:"button",onClick:function(){return r()},children:(0,L.jsx)($.xg7,{size:16,color:"red"})})]})};e(4343)},841:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(1413),i=e(3433),o=e(9439),u=e(5937),c=e(2942),a=e(184),s=function(n){var t=n.todo,e=n.onDelete,r=n.disabled,i=void 0!==r&&r,o=n.onEdit;return(0,a.jsx)("ul",{style:{display:"flex",gap:"8px"},children:t.map((function(n){return(0,a.jsxs)("li",{style:{padding:"10px",width:"150px",border:"1px solid black",position:"relative"},children:[(0,a.jsx)("span",{style:{display:"block",marginBottom:"5px"},children:n.text}),(0,a.jsx)("button",{style:{position:"absolute",right:0,top:0},type:"button",onClick:function(){return e(n.id)},disabled:i,children:(0,a.jsx)(c.qy0,{size:16,color:i?"grey":"red"})}),(0,a.jsx)("button",{type:"button",style:{position:"absolute",right:0,bottom:0},disabled:i,onClick:function(){return o(n)},children:(0,a.jsx)(c.enh,{size:16,color:i?"grey":"lightblue"})})]},n.id)}))})},d=e(2791),l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},f=function(n){var t=n.value,e=n.onChange;return(0,a.jsxs)("label",{style:{marginBottom:"20px"},children:["Filter:",(0,a.jsx)("input",{type:"text",value:t,onChange:e})]})},p=e(6467),x=e(5488),h=function(){var n=function(n,t){var e=(0,d.useState)((function(){var e=t;try{e=JSON.parse(localStorage.getItem(n))||t}catch(r){e=t}return e})),r=(0,o.Z)(e,2),i=r[0],u=r[1];return(0,d.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[i,n]),[i,u]}("todoes",[]),t=(0,o.Z)(n,2),e=t[0],c=t[1],h=(0,d.useState)(""),g=(0,o.Z)(h,2),m=g[0],v=g[1],j=(0,d.useState)(!1),y=(0,o.Z)(j,2),Z=y[0],b=y[1],w=(0,d.useState)({}),k=(0,o.Z)(w,2),P=k[0],C=k[1],S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(!Z),C(n)},E=function(n){var t=e.find((function(t){return t.text.toLowerCase()===n.toLowerCase()}));return t&&alert("Todo: ".concat(n," is already exist")),t},z=e.filter((function(n){return n.text.toLowerCase().includes(m.toLowerCase())}));return(0,a.jsx)(p.$0,{children:(0,a.jsxs)(p.W2,{children:[(0,a.jsx)(u.l,{addTodo:function(n){E(n)||c((function(t){return[].concat((0,i.Z)(t),[{text:n,id:l()}])}))},text:"Add todos"}),(0,a.jsx)(f,{value:m,onChange:function(n){var t=n.target;v(t.value)}}),(0,a.jsx)(s,{todo:z,onDelete:function(n){c((function(t){return t.filter((function(t){return t.id!==n}))}))},onEdit:S,disabled:Z}),Z&&(0,a.jsx)(x.u,{closeModal:S,children:(0,a.jsx)(p.Py,{cancelEdit:S,updateTodo:function(n){E(n)||(c((function(t){return t.map((function(t){return t.id===P.id?(0,r.Z)((0,r.Z)({},P),{},{text:n}):t}))})),b(!1),C({}))},defaultValue:P.text})})]})})}}}]);
//# sourceMappingURL=841.73535121.chunk.js.map