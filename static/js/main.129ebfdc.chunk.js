(window["webpackJsonpzero-hour-configuration-solver"]=window["webpackJsonpzero-hour-configuration-solver"]||[]).push([[0],{14:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),l=t(5),c=t.n(l),u=t(6),a=t(3),i=t(1),b=function(e,r,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},l=Object(n.useReducer)(r,null,function(){var r=localStorage.getItem(e);try{if(null!=r)return o(JSON.parse(r))}catch(n){console.warn(n)}return o(t)}),c=Object(i.a)(l,2),u=c[0],a=c[1];return Object(n.useEffect)(function(){localStorage.setItem(e,JSON.stringify(u))},[u,e]),[u,a]},m=t(2),s=t.n(m),p={void:{label:"Void",color:"purple"},arc:{label:"Arc",color:"lightblue"},solar:{label:"Solar",color:"orange"}},f=function(e){var r=e.direction,t=e.selected,l=e.onSelect,c=Object(n.useMemo)(function(){var e=s.a.name2rgb(p[t].color);return s.a.rgb2hex(Math.max(0,e.R-50),Math.max(0,e.G-50),Math.max(0,e.B-50))},[t]);return o.a.createElement("div",{style:{display:"flex",flexDirection:r||"row"}},Object.entries(p).map(function(e){var r=Object(i.a)(e,2),n=r[0],u=r[1],a=(u.label,u.color);return o.a.createElement("div",{key:n,style:{display:"flex",justifyContent:"center",alignItems:"center",width:50,height:50,borderRadius:"100%",backgroundColor:t===n?c:a,cursor:t!==n&&"pointer",marginRight:8},onClick:function(e){e.preventDefault(),t!==n&&l(n)}},o.a.createElement("div",{style:{width:25,height:25,borderRadius:"100%",backgroundColor:a}}))}))};function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(t,!0).forEach(function(r){Object(a.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g=function(e,r){return[e*Math.cos(r),e*Math.sin(r)]},h=function(e){var r=e.style,t=e.enabled,l=e.selected,c=e.onSelect,u=Object(n.useMemo)(function(){return Array.isArray(t)?Array.from(new Set(t)):[1,2,3,4,5,6,7,8,9,10,11,12]},[t]);return Object(n.useEffect)(function(){u.includes(l)||(1!==u.length?null!=l&&c(null):c(u[0]))},[u,l,c]),o.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",viewBox:"-50 -50 100 100",style:y({minWidth:100,padding:4},r)},function(e,r,t){for(var n=[],o=e;o<r;o++)n.push(t(o));return n}(1,13,function(e){var r=(e-1)*(Math.PI/6)+.02-Math.PI/2,t=r+Math.PI/6-.04,n=g(40,t-(t-r)/2);return o.a.createElement("g",{key:e,style:{cursor:l!==e&&u.includes(e)?"pointer":"default"},onClick:function(r){r.preventDefault(),u.includes(e)&&c(e)}},o.a.createElement("path",{fill:u.includes(e)?l===e?"lightgreen":"cyan":"grey",d:"\n\t\t\t\t\t\t\t\tM ".concat(g(50,r).join(" "),"\n\t\t\t\t\t\t\t\tA 50 50 0 0 1 ").concat(g(50,t).join(" "),"\n\t\t\t\t\t\t\t\tL ").concat(g(30,t-.01).join(" "),"\n\t\t\t\t\t\t\t\tA 30 30 0 0 0 ").concat(g(30,r+.01).join(" "),"\n\t\t\t\t\t\t\t\tZ\n\t\t\t\t\t\t\t")}),o.a.createElement("text",{style:{fontSize:12,textAnchor:"middle",dominantBaseline:"central"},x:n[0],y:n[1]},e))}))},w=function(e){var r=(e.R+e.G+e.B)/3>128?0:255;return s.a.rgb2hex(r,r,r)},v=[{justify:"space-between",terminals:[6,1]},{justify:"space-around",terminals:[5,3]},{justify:"space-around",terminals:[4]},{justify:"space-between",terminals:[7,2]}],O=function(e){var r=e.color,t=e.number,l=e.right,c=e.locked,u=Object(n.useMemo)(function(){if("black"===r)return"#000000";var e=s.a.name2rgb(r);return w(e)},[r]),a=Object(n.useMemo)(function(){return s.a.hex2hsv(u).V>50?"black":"white"},[u]);return o.a.createElement("div",{style:{display:"flex",flexDirection:l?"row-reverse":"row",justifyContent:"space-between",width:100,height:100,backgroundColor:r,border:"solid 2px",transform:"translate(".concat(l?"":"-","2px, 0px)"),cursor:"default"}},o.a.createElement("div",null),v.map(function(e,n){return o.a.createElement("div",{key:n,style:{display:"flex",flexDirection:l?"column":"column-reverse",justifyContent:e.justify}},e.terminals.map(function(e){return o.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",width:20,height:20,color:null!=c["".concat(r,"-").concat(e)]?r:t===e?a:u,backgroundColor:null==c["".concat(r,"-").concat(e)]&&t===e?u:null}},e)}))}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},o.a.createElement("div",{style:{backgroundColor:"black"!==r?"white":"black",width:2,height:30,transform:"translate(".concat(l?"-":"","2px, 0px)")}})))};function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(t,!0).forEach(function(r){Object(a.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var E=[["green","black"],["white","purple"],["yellow","blue"],["red","cyan"]],k=function(e){var r=e.style,t=void 0===r?{}:r,n=e.color,l=e.number,c=e.locked;return o.a.createElement("div",{style:x({},t,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:100*(E.length+1),border:"solid 2px"})},o.a.createElement("div",null),E.map(function(e,r){return o.a.createElement("div",{key:r,style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},e.map(function(e,r){return o.a.createElement(O,{key:e,color:e,number:n===e&&l,right:r>0,locked:c})}))}),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:100,height:2,transform:"translate(0px, 2px)",backgroundColor:"white"}})))};function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(t,!0).forEach(function(r){Object(a.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var P=function(e){var r=e.style,t=e.barStyle,l=e.value,c=e.max,u=Object(n.useMemo)(function(){return null!=r.height?r.height:32},[r]),a=Object(n.useMemo)(function(){return null!=t&&void 0!==t.backgroundColor?t.backgroundColor:"blue"},[t]),i=Object(n.useMemo)(function(){var e=s.a.name2hex(a);return"#"!==e[0]&&(e=a),s.a.complement(e)},[a]);return o.a.createElement("div",{style:D({padding:0,height:u,border:"2px solid ".concat(a),cursor:"default"},r)},o.a.createElement("div",{style:D({width:"".concat(100*l/c,"%"),height:"100%",margin:0,backgroundColor:a,transition:"all .5s"},t)}),o.a.createElement("div",{style:{padding:0,margin:0,textAlign:"center",fontSize:u-8,fontWeight:"bold",mixBlendMode:"difference",color:i,transform:"translate(0, -".concat(u-2,"px)")}},l," / ",c))},S=function(e){var r=e.open,t=e.onClose,n=e.children;return r?o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(100, 100, 100, .5)",overflow:"auto"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:16,margin:16,borderRadius:16}},n,o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},o.a.createElement("button",{onClick:function(){return t()}},"Close")))):null},I={void:[["1-1:2-12:8-10",{color:"white",number:1}],["1-1:4-5:6-5",{color:"red",number:2}],["1-2:1-4:11-4",{color:"red",number:1}],["1-7:12-3:8-4",{color:"yellow",number:3}],["1-10:7-11:3-12",{color:"red",number:6}],["1-12:1-1:5-4",{color:"cyan",number:3}],["2-4:1-6:3-10",{color:"green",number:2}],["2-5:11-2:3-5",{color:"yellow",number:2}],["2-6:5-4:10-3",{color:"cyan",number:1}],["2-7:2-11:9-10",{color:"yellow",number:6}],["2-9:12-3:10-2",{color:"purple",number:5}],["3-3:1-3:6-8",{color:"green",number:7}],["4-3:2-4:2-9",{color:"green",number:1}],["4-3:2-11:4-7",{color:"purple",number:6}],["4-6:5-6:5-12",{color:"blue",number:4}],["4-8:12-8:9-3",{color:"white",number:5}],["4-9:9-4:5-5",{color:"yellow",number:1}],["5-6:7-3:7-10",{color:"red",number:5}],["5-9:11-7:12-10",{color:"purple",number:7}],["6-5:6-10:1-1",{color:"purple",number:1}],["6-9:12-10:8-5",{color:"white",number:7}],["6-11:11-4:12-4",{color:"cyan",number:4}],["7-2:8-3:3-12",{color:"white",number:6}],["7-4:2-7:7-9",{color:"green",number:5}],["7-9:6-5:5-12",{color:"yellow",number:4}],["7-12:1-2:5-4",{color:"blue",number:5}],["8-4:5-8:9-4",{color:"cyan",number:2}],["8-5:11-8:11-11",{color:"cyan",number:7}],["8-6:2-9:2-10",{color:"white",number:3}],["8-6:9-2:12-12",{color:"yellow",number:5}],["8-10:5-6:11-11",{color:"red",number:3}],["8-12:5-9:9-4",{color:"cyan",number:6}],["9-3:12-7:12-12",{color:"green",number:3}],["9-7:7-8:12-7",{color:"purple",number:4}],["9-9:8-10:8-6",{color:"purple",number:2}],["10-2:3-8:9-3",{color:"white",number:2}],["10-3:2-3:7-11",{color:"green",number:4}],["10-5:6-2:3-9",{color:"blue",number:2}],["10-12:11-5:8-12",{color:"green",number:6}],["11-1:5-7:10-2",{color:"blue",number:6}],["11-4:2-8:4-8",{color:"blue",number:7}],["11-4:4-11:12-3",{color:"yellow",number:7}],["11-4:5-4:7-6",{color:"red",number:4}],["11-6:12-8:11-11",{color:"red",number:7}],["11-7:6-3:12-5",{color:"purple",number:3}],["11-11:7-3:8-11",{color:"blue",number:3}],["12-2:11-4:2-11",{color:"cyan",number:5}],["12-5:7-1:5-7",{color:"white",number:4}],["12-5:12-11:4-4",{color:"blue",number:1}]],arc:[["1-4:5-7:6-7",{color:"red",number:6}],["1-6:11-3:5-1",{color:"yellow",number:7}],["2-4:12-10:8-6",{color:"green",number:3}],["2-9:4-3:2-11",{color:"green",number:2}],["2-9:5-9:1-8",{color:"purple",number:6}],["3-5:7-6:4-12",{color:"cyan",number:2}],["3-8:1-8:3-7",{color:"yellow",number:4}],["4-4:10-3:4-1",{color:"cyan",number:1}],["4-5:9-7:1-6",{color:"white",number:4}],["4-6:6-12:9-8",{color:"purple",number:2}],["4-7:3-5:5-1",{color:"blue",number:5}],["4-8:8-7:4-8",{color:"white",number:5}],["4-9:1-1:11-5",{color:"cyan",number:5}],["4-12:2-7:2-10",{color:"green",number:6}],["4-12:5-6:4-4",{color:"yellow",number:1}],["5-4:5-2:8-5",{color:"red",number:5}],["5-4:11-8:9-8",{color:"cyan",number:7}],["5-8:3-2:2-11",{color:"red",number:7}],["5-9:1-1:5-11",{color:"red",number:1}],["5-9:6-8:2-2",{color:"red",number:4}],["6-2:12-5:9-3",{color:"blue",number:3}],["6-2:1-7:7-5",{color:"purple",number:5}],["6-3:10-3:7-3",{color:"white",number:1}],["6-5:2-12:7-3",{color:"blue",number:1}],["7-3:2-9:9-5",{color:"cyan",number:3}],["7-9:5-12:10-4",{color:"yellow",number:5}],["8-1:11-2:7-4",{color:"red",number:2}],["8-3:4-9:5-9",{color:"purple",number:7}],["8-9:9-12:11-1",{color:"green",number:7}],["8-11:7-9:9-5",{color:"cyan",number:4}],["8-12:6-4:12-6",{color:"white",number:7}],["9-1:12-4:11-4",{color:"yellow",number:3}],["9-6:5-3:8-7",{color:"purple",number:4}],["9-10:11-4:7-11",{color:"yellow",number:2}],["9-11:12-6:3-7",{color:"blue",number:4}],["9-11:1-3:7-11",{color:"blue",number:7}],["9-12:7-6:4-9",{color:"purple",number:1}],["10-8:11-6:4-2",{color:"red",number:3}],["10-9:3-7:7-12",{color:"blue",number:6}],["10-11:3-2:8-7",{color:"green",number:1}],["10-11:9-3:4-9",{color:"yellow",number:6}],["10-12:8-4:12-4",{color:"green",number:5}],["10-12:9-6:5-7",{color:"white",number:3}],["11-1:2-10:7-1",{color:"white",number:2}],["11-11:9-11:3-6",{color:"white",number:6}],["12-7:1-8:5-7",{color:"purple",number:3}],["12-8:1-8:8-3",{color:"blue",number:2}],["12-5:11-4:5-1",{color:"cyan",number:6}],["12-12:1-6:4-1",{color:"green",number:4}]],solar:[["1-2:6-10:12-11",{color:"green",number:4}],["1-3:7-7:4-12",{color:"cyan",number:4}],["1-7:2-8:5-6",{color:"white",number:6}],["1-7:9-5:10-6",{color:"green",number:6}],["1-10:5-2:2-4",{color:"yellow",number:2}],["1-11:6-4:6-10",{color:"yellow",number:6}],["2-6:8-9:6-8",{color:"purple",number:2}],["2-10:7-1:1-7",{color:"purple",number:5}],["2-11:1-6:6-10",{color:"blue",number:4}],["2-11:12-8:9-1",{color:"blue",number:6}],["3-5:2-4:9-12",{color:"white",number:7}],["4-6:9-2:10-8",{color:"white",number:5}],["4-8:2-6:5-5",{color:"red",number:2}],["5-6:1-7:8-9",{color:"purple",number:6}],["5-10:10-1:4-8",{color:"purple",number:4}],["5-11:3-12:1-8",{color:"cyan",number:6}],["5-11:7-2:7-6",{color:"yellow",number:5}],["6-7:4-1:1-11",{color:"green",number:7}],["6-8:10-7:11-9",{color:"purple",number:7}],["6-11:12-8:5-11",{color:"purple",number:1}],["7-4:3-7:3-8",{color:"red",number:7}],["7-8:1-9:6-5",{color:"white",number:3}],["7-8:3-4:9-12",{color:"green",number:3}],["7-11:1-9:7-9",{color:"red",number:1}],["7-12:6-5:2-2",{color:"red",number:4}],["8-5:4-10:4-5",{color:"green",number:1}],["8-7:4-8:8-10",{color:"blue",number:3}],["8-10:7-9:4-8",{color:"white",number:1}],["8-11:4-12:10-10",{color:"red",number:5}],["8-12:11-7:3-1",{color:"blue",number:5}],["9-4:10-9:7-2",{color:"cyan",number:7}],["9-6:1-6:9-8",{color:"cyan",number:3}],["9-7:3-5:2-8",{color:"yellow",number:1}],["9-10:3-3:11-6",{color:"purple",number:3}],["9-10:10-3:8-3",{color:"green",number:2}],["9-10:11-11:8-7",{color:"blue",number:1}],["9-11:7-2:8-9",{color:"white",number:2}],["9-11:3-10:9-5",{color:"blue",number:2}],["10-3:8-4:9-12",{color:"yellow",number:3}],["10-5:6-12:3-12",{color:"cyan",number:1}],["10-6:5-2:5-7",{color:"cyan",number:2}],["10-10:2-6:12-8",{color:"cyan",number:5}],["11-2:8-2:9-2",{color:"white",number:4}],["11-4:4-6:12-5",{color:"blue",number:7}],["11-9:11-4:9-3",{color:"yellow",number:7}],["11-11:8-7:1-12",{color:"red",number:3}],["12-1:3-10:12-10",{color:"red",number:6}],["12-7:11-7:1-12",{color:"yellow",number:4}],["12-10:6-5:1-1",{color:"green",number:5}]]};function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(t,!0).forEach(function(r){Object(a.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var R=I.void.reduce(function(e,r){var t=Object(i.a)(r,2)[1].color;return A({},e,Object(a.a)({},t,w(s.a.name2rgb(t))))},{}),W=function(){var e=Object(n.useState)(!1),r=Object(i.a)(e,2),t=r[0],l=r[1],c=Object(n.useReducer)(function(e,r){return Object.values(A({},e,{},r))},4,function(e){return new Array(e).fill(null)}),m=Object(i.a)(c,2),s=m[0],p=m[1],d=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},o=Object(n.useState)(function(){var n=localStorage.getItem(e);try{if(null!=n)return t(JSON.parse(n))}catch(o){console.warn(o)}return"function"===typeof r?r():r}),l=Object(i.a)(o,2),c=l[0],u=l[1];return Object(n.useEffect)(function(){localStorage.setItem(e,JSON.stringify(c))},[c,e]),[c,u]}("config","void"),y=Object(i.a)(d,2),g=y[0],w=y[1],v=b("consoleNumbers",function(e,r){return A({},e,{},r)},[1,2]),O=Object(i.a)(v,2),j=O[0],x=O[1],E=Object(n.useMemo)(function(){return I[g].reduce(function(e,r){var t=Object(i.a)(r,2),n=t[0],o=t[1],l=n.split(":");return A({},e,Object(a.a)({},"".concat(l[parseInt(j[0],10)-1],"-").concat(l[parseInt(j[1],10)-1]),o))},{})},[g,j]),C=b("locked",function(e,r){switch(r.type){case"add":return A({},e,Object(a.a)({},"".concat(r.solution.color,"-").concat(r.solution.number),!0));case"remove":var t="".concat(r.solution.color,"-").concat(r.solution.number);return Object.keys(e).reduce(function(e,r){return r!==t?A({},e,Object(a.a)({},r,!0)):e},{});case"clear":return{};default:throw new Error("Unknown action type: ".concat(r.type))}},{}),D=Object(i.a)(C,2),M=D[0],W=D[1],z=b("lastLocked",function(e,r){switch(r.type){case"push":return[].concat(Object(u.a)(e),[r.solution]);case"pop":return e.slice(0,e.length-1);case"clear":return[];default:throw new Error("Unknown action type: ".concat(r.type))}},[]),J=Object(i.a)(z,2),N=J[0],q=J[1],B=Object(n.useCallback)(function(e){return null!=e&&null!=M["".concat(e.color,"-").concat(e.number)]},[M]),_=Object(n.useMemo)(function(){return new Array(4).fill(null).map(function(e,r){return Object.keys(E).filter(function(e){return!B(E[e])}).map(function(e){return e.split("-").map(function(e){return parseInt(e,10)})}).filter(function(e){return e.slice(0,r).every(function(e,r){return e===s[r]})}).map(function(e){return e[r]})})},[E,s,B]),L=Object(n.useMemo)(function(){return E[s.join("-")]||{color:"grey",number:0}},[E,s]);return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"0px 8px"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("h3",null,"Configuration"),o.a.createElement(f,{selected:g,onSelect:function(e){w(e),0!==Object.keys(M).length&&window.confirm("Would you like to reset the puzzle state?")&&W({type:"clear"})}}),o.a.createElement("h3",null,"Console"," ",o.a.createElement("select",{value:j[0],onChange:function(e){return x({0:e.target.value})}},[1,2,3].filter(function(e){return parseInt(j[1],10)!==e}).map(function(e,r){return o.a.createElement("option",{key:r,value:e},e)}))),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"start",minWidth:300,maxWidth:500}},o.a.createElement(h,{style:{flex:"0 1 100%"},enabled:_[0],selected:s[0],onSelect:function(e){return p({0:e})}}),o.a.createElement(h,{style:{flex:"0 .8 100%"},enabled:_[1],selected:s[1],onSelect:function(e){return p({1:e})}})),o.a.createElement("h3",null,"Console"," ",o.a.createElement("select",{value:j[1],onChange:function(e){return x({1:e.target.value})}},[1,2,3].filter(function(e){return parseInt(j[0],10)!==e}).map(function(e,r){return o.a.createElement("option",{key:r,value:e},e)}))),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"start",minWidth:300,maxWidth:500}},o.a.createElement(h,{style:{flex:"0 1 100%"},enabled:_[2],selected:s[2],onSelect:function(e){return p({2:e})}}),o.a.createElement(h,{style:{flex:"0 .8 100%"},enabled:_[3],selected:s[3],onSelect:function(e){return p({3:e})}}))),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"0 1 400px"}},o.a.createElement("h3",null,"Solution"," ",L.number>0?null==M["".concat(L.color,"-").concat(L.number)]?o.a.createElement("span",{style:{color:L.color,backgroundColor:R[L.color],padding:8,borderRadius:8}},"".concat(L.color[0].toUpperCase()).concat(L.color.substring(1))," ",L.number):o.a.createElement("span",{style:{color:"blue",padding:8}},"Previously Found"):o.a.createElement("span",{style:{color:"red",padding:8}},"Not Found")),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},o.a.createElement("button",{style:{color:"white",backgroundColor:L.number>0?"blue":"lightblue"},disabled:0===L.number,onClick:function(){W({type:"add",solution:L}),q({type:"push",solution:L})}},"Lock Sequence"),o.a.createElement("button",{disabled:0===N.length,onClick:function(){W({type:"remove",solution:N[N.length-1]}),q({type:"pop"})}},"Undo"),o.a.createElement("button",{disabled:0===Object.keys(M).length,onClick:function(){window.confirm("Are you sure that you want to reset the puzzle state?")&&(W({type:"clear"}),q({type:"clear"}))}},"Reset")),o.a.createElement(P,{style:{backgroundColor:"lightgrey",marginTop:16},value:Object.keys(M).length,max:49}),o.a.createElement(k,{style:{marginTop:16},color:L.color,number:L.number,locked:M}))),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap",marginTop:16}},o.a.createElement("button",{style:{marginRight:"1em"},onClick:function(){return l(!0)}},"Show Instructions"),o.a.createElement("div",{style:{margin:"1em 0px"}},"Created by DeedleFake. Inspired by"," ",o.a.createElement("a",{href:"https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/"},"this comment"),".")),o.a.createElement(S,{open:t,onClose:function(){return l(!1)}},o.a.createElement("h4",null,"Instructions"),o.a.createElement("p",{style:{maxWidth:600}},"To use, simply click the numbers on the corresponding consoles that are highlighted in game. Once enough numbers have been entered to determine a solution, a terminal in one of the colored rooms will be highlighted in the solution diagram. Simply go to the corresponding terminal in game and lock the sequence."),o.a.createElement("p",{style:{maxWidth:600}},"As an extra convienence, clicking the ",o.a.createElement("code",null,"Lock Sequence")," ","button below the solution will mark the current terminal as having been locked, removing it from the map and removing the terminal sequences for that solution from the possibilities.")))};t(14);c.a.render(o.a.createElement(W,null),document.querySelector("#root"))},7:function(e,r,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.129ebfdc.chunk.js.map