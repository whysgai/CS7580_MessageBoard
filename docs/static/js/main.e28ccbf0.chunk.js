(this.webpackJsonpcs7580_messageboard=this.webpackJsonpcs7580_messageboard||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(17),o=n.n(a),s=n(4),i=(n(37),n(42),n(15)),l=n(25),u="LOGIN_SUCCESS",d="INVALID_LOGIN",j="LOGIN_NETWORK_ERROR",b="LOGOUT",h="READ_THREADS",f="ADD_REPLY",g="VIEW_LIST",m="VIEW_SINGLE",p="VIEW_LOGIN",O="logged in",v="logged out",y="invalid login",x="network error",N="thread_list",S="single_thread",w="login",C={loginState:v},I=n(3),T={view:N,singleId:"",searchTags:[]},L={},k=n(10),R=[],A=Object(i.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loginState:O};case d:return{loginState:y};case j:return{loginState:x};case b:return{loginState:v};default:return e}},viewReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(I.a)(Object(I.a)({},e),{},{view:N,singleId:"",searchTags:t.payload.searchTags});case m:return Object(I.a)(Object(I.a)({},e),{},{view:S,singleId:t.payload.threadId});case p:return Object(I.a)(Object(I.a)({},e),{},{view:w});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log("Reducer returning user",t.payload.user),t.payload.user;case b:return L;default:return e}},threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("Setting threads in state",t.payload.threads),Object(k.a)(t.payload.threads);case f:var n=[].concat(Object(k.a)(e.filter((function(e){return t.payload.threadId===e.id}))[0].replies),[t.payload.reply]),r=e.map((function(e){return e.id===t.payload.threadId?Object(I.a)(Object(I.a)({},e),{},{replies:n}):e}));return r;default:return e}},testState:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),D=Object(i.d)(A,Object(i.a)(l.a)),F=(n(38),n(39),n(11)),E=function(e){return{type:g,payload:{searchTags:e}}},U=function(){return{type:p}},_=n(1),P=function(e){var t=Object(s.b)(),n=function(e){var n,r=e.split(" ").map((function(e,n){return"#"===e.charAt(0)?Object(_.jsx)("a",{className:"tag",href:"#",value:e,onClick:function(){return t(E(e))},children:e},n):e})),c=[],a=Object(F.a)(r);try{for(a.s();!(n=a.n()).done;){var o=n.value;c.push(o),c.push(" ")}}catch(s){a.e(s)}finally{a.f()}return c.pop(),c};return Object(_.jsxs)("div",{className:"list-group-item","data-testid":"thread-snippet-test",children:[Object(_.jsx)("a",{className:"thread-title",href:"#",onClick:function(){return t((n=e.thread.id,{type:m,payload:{threadId:n}}));var n},children:Object(_.jsx)("h3",{children:e.thread.title})}),Object(_.jsxs)("p",{children:["Author: ",e.thread.author]}),Object(_.jsx)("p",{children:e.thread.body.length>200?n(e.thread.body.substring(0,200)+"..."):n(e.thread.body)}),Object(_.jsxs)("p",{children:["Posted: ",function(e){var t=new Date(e);return t.toLocaleDateString("en-US",{year:"2-digit",month:"long",day:"numeric"})+" at "+t.toLocaleTimeString("en-US",{timeZone:"America/New_York",hourCycle:"h24"})}(e.thread.timestamp)]})]})},B=function(){var e=Object(s.c)((function(e){return e.threads}));return Object(_.jsx)(_.Fragment,{children:e.length>0?e.map((function(e,t){return Object(_.jsx)(P,{thread:e},t)})):Object(_.jsx)("p",{children:"No threads to display."})})},G=function(e){var t=Object(s.b)();return Object(_.jsxs)("div",{className:"list-group-item",children:[Object(_.jsxs)("p",{children:["Author: ",e.reply.author]}),Object(_.jsx)("p",{children:function(e){var n,r=e.split(" ").map((function(e){return"#"===e.charAt(0)?Object(_.jsx)("a",{className:"tag",href:"#",onClick:function(){return t(E(e))},children:e}):e})),c=[],a=Object(F.a)(r);try{for(a.s();!(n=a.n()).done;){var o=n.value;c.push(o),c.push(" ")}}catch(s){a.e(s)}finally{a.f()}return c.pop(),c}(e.reply.body)}),Object(_.jsxs)("p",{children:["Replied: ",function(e){var t=new Date(e);return t.toLocaleDateString("en-US",{year:"2-digit",month:"long",day:"numeric"})+" at "+t.toLocaleTimeString("en-US",{timeZone:"America/New_York",hourCycle:"h24"})}(e.reply.timestamp)]})]})},W=n(8),K=n(22);n(44);K.a.initializeApp({apiKey:"AIzaSyDDYfwcl9nuD6NrGgToNatyDgcROdZb54w",authDomain:"cs7580-a5-message-board.firebaseapp.com",projectId:"cs7580-a5-message-board",storageBucket:"cs7580-a5-message-board.appspot.com",messagingSenderId:"575151180871",appId:"1:575151180871:web:d7469bf4bfca3e2c927562"});var V=K.a,Y=V.firestore(),Z=function(e){return{type:h,payload:{threads:e}}},q=function(){return console.log("Reading threads from server"),function(e){Y.collection("threads").get().then((function(t){var n=[];t.forEach((function(e){n.push(Object(I.a)({id:e.id},e.data()))})),console.log("Threads retreved from server",n),n.sort((function(e,t){return e.timestamp-t.timestamp})),e(Z(n))})).catch((function(e){console.log("Login error",e)}))}},z=function(e){return console.log("Reading thread tags from server",e),function(t){Y.collection("threads").where("tags","array-contains-any",e).get().then((function(e){var n=[];e.forEach((function(e){n.push(Object(I.a)({id:e.id},e.data()))})),console.log("Threads retreved from server",n),n.sort((function(e,t){return e.timestamp-t.timestamp})),t(Z(n))})).catch((function(e){console.log("Login error",e)}))}},J=function(e,t){return function(n){console.log("Adding reply",t),Y.collection("threads").doc(e).update({replies:V.firestore.FieldValue.arrayUnion(t)}).then((function(){n(function(e,t){return{type:f,payload:{threadId:e,reply:t}}}(e,t))})).catch((function(e){console.log("Could not add the reply")}))}},H=function(e){var t=Object(r.useState)(""),n=Object(W.a)(t,2),c=n[0],a=n[1],o=Object(s.c)((function(e){return e.user})),i=Object(s.b)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"form-floating mb-3",children:[Object(_.jsx)("textarea",{className:"form-control",placeholder:"Reply",id:"newReplyBody",value:c,onChange:function(e){return a(e.target.value)}}),Object(_.jsx)("label",{htmlFor:"newReplyBody",children:"Reply content"})]}),Object(_.jsx)("button",{className:"btn btn-success",onClick:function(){return function(){var t={author:o.id,body:c,timestamp:Date.now()};i(J(e.threadId,t)),a("")}()},disabled:""===c,children:"Post"})]})},M=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.loginReducer.loginState})),n=Object(s.c)((function(e){return e.threads})),r=Object(s.c)((function(e){return e.viewReducer.singleId})),c=function(e){var t=new Date(e);return t.toLocaleDateString("en-US",{year:"2-digit",month:"long",day:"numeric"})+" at "+t.toLocaleTimeString("en-US",{timeZone:"America/New_York",hourCycle:"h24"})},a=function(t){var n,r=t.split(" ").map((function(t,n){return"#"===t.charAt(0)?Object(_.jsx)("a",{className:"tag",href:"#",value:t,onClick:function(){return e(E(t))},children:t},n):t})),c=[],a=Object(F.a)(r);try{for(a.s();!(n=a.n()).done;){var o=n.value;c.push(o),c.push(" ")}}catch(s){a.e(s)}finally{a.f()}return c.pop(),c};return Object(_.jsx)(_.Fragment,{children:n.filter((function(e){return r===e.id})).map((function(n,r){return Object(_.jsx)("div",{className:"card card-body",children:Object(_.jsxs)("div",{className:"list-group-flush",children:[Object(_.jsxs)("div",{className:"list-group-item",children:[Object(_.jsxs)("div",{className:"thread-title-box",children:[Object(_.jsx)("h3",{children:n.title}),Object(_.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:function(){return e(E(""))}})]}),Object(_.jsxs)("p",{children:["Author: ",n.author]}),Object(_.jsx)("p",{children:a(n.body)}),Object(_.jsxs)("p",{children:["Posted: ",c(n.timestamp)]})]}),Object(_.jsx)("div",{className:"list-group-item",children:t===O?Object(_.jsx)(H,{threadId:n.id}):Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("p",{children:["Want to join the conversation? ",Object(_.jsx)("button",{className:"btn btn-success",onClick:function(){return e(U())},children:"Log In"})]})})}),n.replies.map((function(e,t){return Object(_.jsx)(G,{reply:e},t)}))]})},r)}))})},X=V.firestore(),Q=function(e,t){return console.log("Calling validateUser"),function(n){X.collection("users").where("username","==",e).where("password","==",t).get().then((function(e){if(1===e.size){var t={id:e.docs[0].id};console.log("Action user:",t),n(function(e){return{type:u,payload:{user:e}}}(t)),n(E([]))}else console.log("Loginfail"),n({type:d})})).catch((function(e){console.log("Login error",e),n({type:j})}))}},$=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(W.a)(a,2),i=o[0],l=o[1],u=Object(r.useState)([]),d=Object(W.a)(u,2),j=d[0],b=d[1],h=Object(s.c)((function(e){return e.user})),f=Object(s.b)();Object(r.useEffect)((function(){var e=i.split(" ").filter((function(e){return"#"===e.charAt(0)}));b(e)}),[i]);var g=function(){var e={author:h.id,body:i,replies:[],tags:j,timestamp:Date.now(),title:n};f(function(e){console.log("Posting thread to server");var t=D.getState().threads;return function(n){Y.collection("threads").add(e).then((function(r){var c=t.concat([Object(I.a)(Object(I.a)({},e),{},{id:r.id})]);console.log("Updated threads after add",c),t.sort((function(e,t){return e.timestamp-t.timestamp})),n(Z(t))})).catch((function(e){return console.log(e)}))}}(e)),c(""),l(""),b([])};return Object(_.jsxs)("div",{className:"list-group-item",children:[Object(_.jsx)("button",{className:"btn btn-primary start-thread-open",type:"button","data-bs-toggle":"collapse","data-bs-target":"#startThreadCollapse","aria-expanded":"false","aria-controls":"startThreadCollapse",children:"Start a new thread"}),Object(_.jsxs)("div",{className:"collapse mt-3",id:"startThreadCollapse",children:[Object(_.jsxs)("div",{className:"form-floating mb-3",children:[Object(_.jsx)("input",{type:"text",className:"form-control",id:"newThreadTitle",placeholder:"Thread title",value:n,onChange:function(e){return c(e.target.value)}}),Object(_.jsx)("label",{htmlFor:"newThreadTitle",children:"Thread title"})]}),Object(_.jsxs)("div",{className:"form-floating mb-3",children:[Object(_.jsx)("textarea",{className:"form-control",placeholder:"Thread content",id:"newThreadBody",value:i,onChange:function(e){return l(e.target.value)},rows:"5"}),Object(_.jsx)("label",{htmlFor:"newThreadBody",children:"Thread content"})]}),Object(_.jsx)("button",{className:"btn btn-success start-thread-submit",onClick:function(){return g()},disabled:""===n||""===i,children:"Post"})]})]})},ee=function(){var e=Object(s.c)((function(e){return e.viewReducer.searchTags})),t=(Object(s.c)((function(e){return e.loginReducer.loginState})),Object(s.c)((function(e){return e.testState})),Object(r.useState)("")),n=Object(W.a)(t,2),c=n[0],a=n[1];console.log("Search now equals",c);var o=Object(r.useState)([]),i=Object(W.a)(o,2),l=i[0],u=i[1],d=Object(s.b)();Object(r.useEffect)((function(){d(q())}),[d]),Object(r.useEffect)((function(){if(""!==c){var e=c.split(" ").map((function(e){return"#"!==e.charAt(0)?"#"+e:e}));u(e),console.log("Set new tags",e)}}),[c]),Object(r.useEffect)((function(){var t,n="",r=Object(F.a)(e);try{for(r.s();!(t=r.n()).done;){n=n+t.value+""}}catch(o){r.e(o)}finally{r.f()}if(""!==n){a(n);var c=n.split(" ").map((function(e){return"#"!==e.charAt(0)?"#"+e:e}));u(c),d(z(c))}}),[e,d]);var j=function(){""===c?b():d(z(l))},b=function(){a(""),d(q())};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"form-floating input-group mb-3",children:[Object(_.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by tags",id:"tagSearch",value:c,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){var t;13===(t=e).keyCode&&(t.preventDefault(),j())}}),Object(_.jsx)("label",{htmlFor:"tagSearch",children:"Search threads by tag"}),""!==c?Object(_.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return b()},children:"X"}):Object(_.jsx)(_.Fragment,{}),Object(_.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return j()},children:"Search"})]})})},te=!1,ne=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(W.a)(a,2),i=o[0],l=o[1],u=Object(s.c)((function(e){return e.loginState})),d=Object(s.b)(),j=function(){d(Q(n,i)),h()},b=function(e){13===e.keyCode&&(e.preventDefault(),j())},h=function(){te=!1,c(""),l("")};return Object(_.jsxs)("div",{className:"container",children:[!te&&u===y&&Object(_.jsx)("div",{className:"alert alert-danger",children:"Invalid username / password! Please try again."}),!te&&u===x&&Object(_.jsx)("div",{className:"alert alert-danger",children:"Unable to connect to the server. Please check your internet connection."}),Object(_.jsxs)("div",{className:"row my-4 add-form",children:[Object(_.jsx)("div",{className:"col-12 col-sm-2",children:Object(_.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username:"})}),Object(_.jsx)("div",{className:"col",children:Object(_.jsx)("input",{type:"text",id:"username",name:"username",className:"form-control",value:n,onChange:function(e){te=!0,c(e.target.value)},onKeyUp:function(e){return b(e)}})})]}),Object(_.jsxs)("div",{className:"row my-4 add-form",children:[Object(_.jsx)("div",{className:"col-12 col-sm-2",children:Object(_.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password:"})}),Object(_.jsx)("div",{className:"col",children:Object(_.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",value:i,onChange:function(e){te=!0,l(e.target.value)},onKeyUp:function(e){return b(e)}})})]}),Object(_.jsx)("div",{className:"row",children:Object(_.jsx)("div",{className:"col",children:Object(_.jsx)("button",{className:"btn btn-secondary float-end login-button",onClick:j,children:"Log in"})})})]})};var re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.loginReducer.loginState})),n=Object(s.c)((function(e){return e.user})),r=Object(s.c)((function(e){return e.viewReducer.view}));return Object(_.jsxs)("div",{className:"App container",children:[console.log("loginState equals",t),console.log("User equals",n),r===w?Object(_.jsx)(ne,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("nav",{className:"navbar",children:t!==O?Object(_.jsx)("button",{className:"btn btn-success heading-button",onClick:function(){return e(U())},children:"Log In"}):Object(_.jsx)("button",{className:"btn btn-secondary heading-button",onClick:function(){return e({type:b})},children:"Log Out"})}),r===N?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ee,{}),Object(_.jsxs)("div",{className:"card card-body list-group-flush",children:[t===O?Object(_.jsx)($,{}):Object(_.jsx)("div",{className:"list-group-item",children:Object(_.jsxs)("p",{children:["Want to join the conversation? ",Object(_.jsx)("button",{className:"btn btn-success",onClick:function(){return e(U())},children:"Log In"})]})}),Object(_.jsx)(B,{})]})]}):Object(_.jsx)(_.Fragment,{children:r===S?Object(_.jsx)(M,{}):Object(_.jsxs)("p",{children:["Error: view set to ",r]})})]})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(s.a,{store:D,children:Object(_.jsx)(re,{})})}),document.getElementById("root")),ce()}},[[43,1,2]]]);
//# sourceMappingURL=main.e28ccbf0.chunk.js.map