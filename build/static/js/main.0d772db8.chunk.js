(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(2),c=a.n(s),l=a(18),i=a.n(l),o=(a(24),a(4)),r=a(5),d=a(6),u=a(8),m=a(7),p=a(3),h=a.n(p),f=a.p+"static/media/team.f6f939bc.jpg",j=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={firstName:"",lastName:"",place:""},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){""!==t.state.firstName&&""!==t.state.lastName&&""!==t.state.place&&(h.a.post("http://localhost:5000/students",t.state).then((function(e){console.log("sucessfully added"),t.setState({firstName:"",lastName:"",place:""})})).catch((function(t){console.log("thers is an error")})),window.location="/")},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"row text-center",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("form",{onSubmit:function(){return t.handleSubmit()},children:[Object(n.jsx)("input",{required:!0,onChange:function(e){return t.handleChange(e)},name:"firstName",value:this.state.firstName,style:{borderRadius:"10px",fontFamily:"cursive, sans-serif",marginLeft:"50px",marginTop:"20px"},type:"text",placeholder:"firstName",className:"form-control"}),Object(n.jsx)("input",{required:!0,onChange:function(e){return t.handleChange(e)},name:"lastName",value:this.state.lastName,style:{borderRadius:"10px",fontFamily:"cursive, sans-serif",marginLeft:"50px",marginTop:"20px"},type:"text",placeholder:"lastName",className:"form-control"}),Object(n.jsx)("input",{required:!0,onChange:function(e){return t.handleChange(e)},name:"place",value:this.state.place,style:{borderRadius:"10px",fontFamily:"cursive, sans-serif",marginLeft:"50px",marginTop:"20px"},type:"text",placeholder:"place",className:"form-control"}),Object(n.jsx)("button",{style:{borderRadius:"10px",fontFamily:"cursive, sans-serif",width:"320px",alignContent:"center",marginLeft:"65px",marginTop:"20px"},className:"btn btn-primary",type:"submit",children:"CREATE"})]})}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("img",{src:f,alt:"team"})})]})}}]),a}(c.a.Component),b=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={students:[],ufirstName:"",ulastName:"",uplace:""},t.getStudents=function(){h.a.get("http://localhost:5000/").then((function(e){console.log(e),t.setState({students:e.data})}))},t.componentDidMount=function(){t.getStudents()},t.handleDelete=function(t){h.a.delete("http://localhost:5000/students/".concat(t)).then((function(t){console.log(t),window.location="/"}))},t.handleUpdate=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleModalUpdate=function(e){h.a.put("http://localhost:5000/students/".concat(t.state.uid),{firstName:t.state.ufirstName,lastName:t.state.ulastName,place:t.state.uplace}).then((function(e){console.log(e),t.setState({ufirstName:"",ulastName:"",uplace:""}),window.location="/"}))},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{children:this.state.students.map((function(e){return Object(n.jsx)("div",{class:"card",style:{borderRadius:"10px",padding:"15px",backgroundColor:"whitesmoke",display:"inline-block",fontFamily:"cursive, sans-serif",width:"400px",marginLeft:"10px",marginRight:"10px",marginTop:"10px"},children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsxs)("h2",{style:{fontSize:"25px"},children:["First Name : ",e.firstName]}),Object(n.jsxs)("h2",{style:{fontSize:"25px"},children:["Last Name : ",e.lastName]}),Object(n.jsxs)("h2",{style:{fontSize:"25px"},children:["Place : ",e.place]}),Object(n.jsxs)("div",{class:"container",style:{display:"inline"},children:[Object(n.jsx)("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#myModal",onClick:function(){t.setState({uid:e._id,ufirstName:e.firstName,ulastName:e.lastName,uplace:e.place})},children:"UPDATE"}),Object(n.jsx)("button",{style:{marginLeft:"20px"},onClick:function(){return t.handleDelete(e._id)},class:"btn btn-danger",children:"DELETE"}),Object(n.jsx)("div",{class:"modal fade",id:"myModal",role:"dialog",children:Object(n.jsx)("div",{class:"modal-dialog",children:Object(n.jsxs)("div",{class:"modal-content",children:[Object(n.jsxs)("div",{class:"modal-header",children:[Object(n.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"}),Object(n.jsx)("h4",{class:"modal-title",children:"UPDATE"})]}),Object(n.jsxs)("div",{class:"modal-body",children:[Object(n.jsx)("input",{onChange:function(e){return t.handleUpdate(e)},value:t.state.ufirstName,name:"ufirstName",class:"form-control",style:{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"},placeholder:"First Name"}),Object(n.jsx)("input",{onChange:function(e){return t.handleUpdate(e)},value:t.state.ulastName,name:"ulastName",class:"form-control",style:{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"},placeholder:"Last Name"}),Object(n.jsx)("input",{onChange:function(e){return t.handleUpdate(e)},value:t.state.uplace,name:"uplace",class:"form-control",style:{marginBottom:"10px",fontFamily:"cursive",fontSize:"15px"},placeholder:"Place"})]}),Object(n.jsxs)("div",{class:"modal-footer",children:[Object(n.jsx)("button",{class:"btn btn-warning",onClick:function(e){return t.handleModalUpdate(e)},children:"Update"}),Object(n.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){t.setState({ufirstName:"",ulastName:"",uplace:""})},children:"Close"})]})]})})})]})]})},e._id)}))})}}]),a}(c.a.Component);a(42);var x=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)(b,{})]})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,l=e.getTTFB;a(t),n(t),s(t),c(t),l(t)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.0d772db8.chunk.js.map