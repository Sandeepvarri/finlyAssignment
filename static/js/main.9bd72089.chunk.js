(this["webpackJsonpcomment-app"]=this["webpackJsonpcomment-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),m=n(4),i=n.n(m),s=(n(9),n(2)),r=(n(10),n(0));var l=function(e){var t=e.comments,n=e.addComment,o=e.deleteComment,m=e.handleCheck,i=Object(c.useState)(!1),l=Object(s.a)(i,2),a=l[0],d=l[1],u=Object(c.useState)(""),j=Object(s.a)(u,2),b=j[0],h=j[1];return Object(r.jsxs)("div",{children:[t.map((function(e){return Object(r.jsxs)("div",{className:"comment-item",children:[Object(r.jsxs)("div",{children:["comment: ",e.comment,Object(r.jsx)("button",{onClick:function(){return o(e.commentID)},children:"Delete comment"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["Liked ",Object(r.jsx)("input",{type:"checkbox",defaultChecked:e.liked,onChange:function(t){return m(t,e.commentID)}})]})})]},e.commentID)})),a?Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(b),h("")},children:[Object(r.jsx)("label",{children:"Comment"}),Object(r.jsx)("input",{type:"text",name:"comment",value:b,onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"Post"})]}):null,Object(r.jsx)("button",{onClick:function(){return d(!a)},children:"Add Comment"})]})};var a=function(){var e=Object(c.useState)([{commentID:1,comment:"good  click",liked:!1},{commentID:2,comment:"great post ",liked:!0}]),t=Object(s.a)(e,2),n=t[0],o=t[1],m=Object(c.useState)(3),i=Object(s.a)(m,2),a=i[0],d=i[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"post"}),Object(r.jsx)("div",{className:"comments-list",children:Object(r.jsx)(l,{comments:n,addComment:function(e){var t={commentID:a,comment:e,liked:!1};n.push(t),d(a+1)},handleCheck:function(e,t){var c=n.findIndex((function(e){return e.commentID===t}));n[c].liked=e.target.checked,o(n),console.log(n)},deleteComment:function(e){var t=n.filter((function(t){return t.commentID!==e}));console.log(e),console.log(t),o(t)}})})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,m=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),m(e),i(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(a,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9bd72089.chunk.js.map