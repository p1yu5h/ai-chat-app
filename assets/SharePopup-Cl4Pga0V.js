import{c as s,u as r,j as o,F as l,T as d,I as h,B as p}from"./index-B8iEzZIX.js";import{D as x,a as g,b as j,c as u,d as y,e as C,f as k,g as D}from"./dialog-DTe10Ww_.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],m=s("Copy",b),L=({onDismiss:i})=>{const a=r().pathname.split("/"),e=a[a.length-1],t=`${window.location.origin}/ai-chat-app/conversation/public/${e}`,n=()=>{navigator.clipboard.writeText(t).then(()=>{alert("Link copied to clipboard!")}).catch(c=>{console.error("Failed to copy: ",c)})};return o.jsx(x,{open:!0,children:o.jsxs(g,{children:[o.jsx(j,{children:o.jsx(u,{children:"Share this conversation"})}),o.jsx(y,{children:o.jsxs(l,{gap:4,children:[o.jsx(d,{mb:4,children:t}),o.jsx(h,{onClick:n,children:o.jsx(m,{})})]})}),o.jsx(C,{children:o.jsx(k,{asChild:!0,children:o.jsx(p,{variant:"outline",onClick:i,children:"Cancel"})})}),o.jsx(D,{onClick:i})]})})};export{L as default};
