(this.webpackJsonptradix=this.webpackJsonptradix||[]).push([[8],{297:function(e,t,a){"use strict";var n=a(1),s=a(2),c=a(11),i=a(54),r=a(0);t.a=Object(c.b)((function(e){return{withdraw_request:e.dashboard_state.withdraw_request}}),(function(e){return{fetchWithdrawRequest:function(){return e(Object(i.g)())}}}))((function(e){var t=e.fetchWithdrawRequest,a=e.withdraw_request,c={fontSize:"11px",color:"white",marginLeft:"-10px",display:"inline-flex"},i={fontSize:"14px",marginLeft:"-10px"};return Object(n.useEffect)((function(){t()}),[t]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)("div",{className:"menu",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsxs)(s.b,{to:"./admin_dashboard","data-toggle":"tooltip","data-placement":"right",title:"Home",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{style:i,className:"fas fa-users"})}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{style:c,children:"Accounts"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(s.b,{to:"./admin_withdrawal_request","data-toggle":"tooltip","data-placement":"right",title:"Account",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{style:i,className:"fas fa-money-check-alt"})}),0!==(null===a||void 0===a?void 0:a.length)&&Object(r.jsx)("span",{style:{fontSize:"9px"},className:"badge badge-pill badge-danger text-white",children:null===a||void 0===a?void 0:a.length}),Object(r.jsx)("span",{style:c,children:"Withdraw Request"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(s.b,{to:"#","data-toggle":"tooltip","data-placement":"right",title:"Setting",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"la la-tools"})}),Object(r.jsx)("span",{style:c,children:"Settings"})]})})]})})})})}))},314:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(15),c=a(297),i=a(34),r=a(14),l=a(11),d=a(54),o=a(9),j=a.n(o),b=a(0);t.default=Object(l.b)((function(e){return{withdraw_request:e.dashboard_state.withdraw_request}}),(function(e){return{fetchWithdrawRequest:function(){return e(Object(d.g)())}}}))((function(e){var t=e.withdraw_request,a=e.fetchWithdrawRequest;Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("num_of_refresh"));localStorage.setItem("num_of_refresh",JSON.stringify((e>=2?-1:e)+1)),setTimeout((function(){e<=1&&window.location.reload()}),500)}),[]);var l=Object(n.useRef)(null),d=Object(n.useRef)(null),o=function(e){var t=function(){return window.event.target?window.event.target:null};t&&(t.textContent="Deleting...",t.disabled=!0),j.a.delete("/admin/request/".concat(e)).then((function(e){t&&(t.textContent="Delete",t.disabled=!1),e.data&&alert("Withdrawal request deleted!"),a()})).catch((function(e){console.log("ERR! Deleting Request ==>",e),t&&(t.textContent="Delete Error",t.disabled=!1)}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{}),Object(b.jsx)(c.a,{}),Object(b.jsx)(i.a,{}),Object(b.jsx)("div",{className:"content-body",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-xl-12",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header border-0",children:Object(b.jsx)("h4",{className:"card-title",children:"Withdrawal Requests"})}),Object(b.jsx)("div",{className:"card-body pt-0",children:Object(b.jsx)("div",{className:"transaction-table",children:Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsx)("table",{className:"table mb-0 table-responsive-sm",children:Object(b.jsx)("tbody",{children:0!==(null===t||void 0===t?void 0:t.length)&&t?t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{ref:l,onClick:function(){return function(e,t,a,n){window.event.preventDefault();var s=window.event.target;s.textContent="Loading...",s.disabled=!0;var c={amount:t,email:a,walletAddress:n};j.a.post("/admin/request/approval",c).then((function(t){var a=window.event.target;a.textContent="Approved",a.disabled=!1,t.data&&(alert("Request approved."),setTimeout((function(){o(e)}),500))})).catch((function(e){var t=window.event.target;t.textContent="Error",t.disabled=!1,console.log("ERR! Aproving Withdraw Request ==>",e)}))}(e._id,e.amount,e.email,e.walletAddress)},className:"btn btn-success",children:"Approve"})}),Object(b.jsx)("td",{children:Object(b.jsx)("span",{className:"badge badge-info",children:e.email})}),Object(b.jsxs)("td",{className:"text-primary",children:["$",e.amount]}),Object(b.jsx)("td",{className:"text-primary",children:e.crypto_type}),Object(b.jsx)("td",{className:"text-primary",children:e.wallet_address}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{ref:d,"data-id":e._id,onClick:function(){return o(e._id)},className:"delete_btn btn btn-danger",children:"Delete"})})]},e._id)})):Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{class:"alert alert-info",role:"alert",children:"You have no widthraw request!"})})})})})})})]})})})})}),Object(b.jsx)(r.a,{})]})}))}}]);
//# sourceMappingURL=8.4c6dc15e.chunk.js.map