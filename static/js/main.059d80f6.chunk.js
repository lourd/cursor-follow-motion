(this.webpackJsonpcircle_study=this.webpackJsonpcircle_study||[]).push([[0],{63:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var n=t(4),r=t(1),s=t.n(r),i=t(33),o=t.n(i),l=t(12),j=t(66),a=t(27),b=t(6);function x(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://github.com/lourd/cursor-follow",className:"source",children:"Cursor Follow Motion Study"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(a.b,{exact:!0,to:"/",children:"Exact Follow"}),Object(n.jsx)(a.b,{to:"/second",children:"Spring-based follow"}),Object(n.jsxs)(a.b,{to:"/third",children:["Spring-based follow ","&"," scale"]})]}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/second",children:Object(n.jsx)(d,{})}),Object(n.jsx)(b.a,{exact:!0,path:"/third",children:Object(n.jsx)(O,{})}),Object(n.jsx)(b.a,{path:"/",children:Object(n.jsx)(u,{})})]})]})})}function u(){var e=Object(r.useState)({x:0,y:0}),c=Object(l.a)(e,2),t=c[0],s=t.x,i=t.y,o=c[1];return Object(n.jsx)("svg",{onMouseMove:function(e){o({x:e.clientX,y:e.clientY})},children:Object(n.jsx)("circle",{cx:s,cy:i,r:24,fill:"green"})})}function d(){var e=Object(j.useSpring)((function(){return{x:0,y:0,config:j.config.wobbly}})),c=Object(l.a)(e,2),t=c[0],r=t.x,s=t.y,i=c[1];return Object(n.jsx)("svg",{onMouseMove:function(e){i({x:e.clientX,y:e.clientY})},children:Object(n.jsx)(j.animated.circle,{cx:r,cy:s,r:24,fill:"green"})})}function O(){var e=Object(j.useSpring)((function(){return{xy:[0,0],config:j.config.wobbly}})),c=Object(l.a)(e,2),t=c[0].xy,r=c[1],s=Object(j.useSpring)((function(){return{scaleX:1,config:j.config.stiff}})),i=Object(l.a)(s,2),o=i[0].scaleX,a=i[1];return Object(n.jsx)("svg",{onMouseMove:function(e){r({xy:[e.clientX,e.clientY]});var c=t.get(),n=Object(l.a)(c,1)[0];a({scaleX:e.clientX>n?1:-1})},children:Object(n.jsx)(j.animated.g,{transform:t.to((function(e,c){return"translate(".concat(e," ").concat(c,") scale(").concat(o.get()," 1)")})),children:Object(n.jsxs)("g",{width:"196",height:"51",transform:"translate(-98 -44)",children:[Object(n.jsx)("path",{d:"M66.5 11.5C80 17.5673 96.0001 44 96.0001 44C96.0001 44 91.5001 24.2813 89.0001 20.2364C86.5001 16.1915 65.5001 2.03447 48.0001 1.02325C30.5001 0.0120331 14.5 8.5 14.5 8.5C14.5 8.5 8.5 19.0842 20 11.5C31.5 3.91585 53 5.43269 66.5 11.5Z",fill:"#393939",stroke:"#393939"}),Object(n.jsx)("path",{d:"M65.5 27.2364C79 33.3037 96.5 42.5 96.5 42.5C96.5 42.5 91.5 31.2812 89 27.2364C86.5 23.1915 64 9.51119 46.5 8.49997C29 7.48875 19 16 19 16C19 16 7.50003 34.8205 19 27.2364C30.5 19.6522 52 21.1691 65.5 27.2364Z",fill:"#393939",stroke:"#393939"}),Object(n.jsx)("circle",{cx:"97",cy:"43",r:"8",fill:"#393939"})]})})})}t(63);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.059d80f6.chunk.js.map