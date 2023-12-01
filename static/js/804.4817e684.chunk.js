"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[804],{2929:function(n,e,r){r.d(e,{a:function(){return l},i:function(){return s}});var t,a=r(3430),o=r(168),i=r(5867).ZP.div(t||(t=(0,o.Z)(["\n  margin: 0 auto;\n  width: 100px;\n  margin-top: 20px;\n"]))),c=r(3329),s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.fe,{visible:!0,height:"120",width:"120",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})},l=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.p2,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#272727",backgroundColor:"#F4442E"})})}},6804:function(n,e,r){r.r(e),r.d(e,{ContactContainer:function(){return q},default:function(){return D}});var t,a,o,i,c,s,l,p,d=r(168),u=r(2791),x=r(9434),b=r(5867),f=r(9439),g=r(3064),h=r(6916),m=function(n){return n.contacts.contacts},w=function(n){return n.filter.filter},k=function(n){return n.contacts.isLoading},j=(0,h.P1)([m,w],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))})),v=r(1686),Z=r.n(v),y=b.ZP.form(t||(t=(0,d.Z)(["\n  width: 700px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid transparent;\n  color: black;\n  background-color: #2b3035;\n  border-radius: 8px;\n  padding: 8px 16px;\n  transition: all 0.3s linear 0s;\n  box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 3px, rgba(0, 0, 0, 0.17) 0px 2px 3px;\n  margin: 20px auto;\n"]))),C=b.ZP.label(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n  color: white;\n\n  input {\n    padding: 6px 10px;\n    border-radius: 8px;\n    border: 1px solid #198754;\n    background-color: #464e56;\n    &:focus {\n      background-color: #e8f0fe;\n    }\n  }\n"]))),P=b.ZP.button(o||(o=(0,d.Z)(["\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  font-size: 18px;\n  border: 1px solid transparent;\n  color: white;\n  background-color: #198754;\n  border-radius: 8px;\n  padding: 8px 16px;\n  margin: 20px 20px 30px 20px;\n  cursor: pointer;\n  transition: all 0.3s linear 0s;\n  box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 3px, rgba(0, 0, 0, 0.17) 0px 2px 3px;\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover {\n    background-color: #313131;\n  }\n"]))),z=r(3329),L=function(){var n=(0,x.I0)(),e=(0,x.v9)(m),r=(0,u.useState)(""),t=(0,f.Z)(r,2),a=t[0],o=t[1],i=(0,u.useState)(""),c=(0,f.Z)(i,2),s=c[0],l=c[1],p=function(n){var e=n.target,r=e.name,t=e.value;"name"===r&&o(t),"number"===r&&l(t)};return(0,z.jsxs)(y,{onSubmit:function(r){if(r.preventDefault(),e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return Z().Notify.warning("".concat(a," is already in contacts"));var t={name:a,number:s};n((0,g.el)(t)),o(""),l("")},children:[(0,z.jsxs)(C,{children:["Name",(0,z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a,onChange:p,required:!0})]}),(0,z.jsxs)(C,{children:["Number",(0,z.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s,onChange:p,required:!0})]}),(0,z.jsx)(P,{type:"submit",children:"Add contact"})]})},_=b.ZP.button(i||(i=(0,d.Z)(["\n  align-items: center;\n  font-size: 14px;\n  border: 1px solid transparent;\n  color: white;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  margin: 10px 10px 15px 10px;\n  cursor: pointer;\n  transition: all 0.3s linear 0s;\n\n  &:hover {\n    background-color: #198754;\n  }\n"]))),A=(b.ZP.p(c||(c=(0,d.Z)(["\n  font-weight: 200;\n  font-size: 40px;\n  text-align: center;\n"]))),b.ZP.ul(s||(s=(0,d.Z)(["\n  text-align: center;\n  li {\n    background-color: #00000012;\n    border-radius: 8px;\n    width: 400px;\n    margin: 10px auto 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid #198754;\n    p {\n      margin-left: 10px;\n      a {\n        text-decoration: none;\n        color: #9f9f9f;\n        transition: all 0.3s linear 0s;\n        &:hover {\n          text-decoration: underline;\n          color: #198754;\n        }\n      }\n    }\n  }\n"])))),S=function(){var n=(0,x.I0)(),e=(0,x.v9)(j);return(0,u.useEffect)((function(){n((0,g.mk)())}),[n]),(0,z.jsx)(A,{children:e.map((function(e){return(0,z.jsxs)("li",{children:[(0,z.jsxs)("p",{children:[e.name,":"," ",(0,z.jsx)("a",{href:"tel:".concat(e.number),tel:"",children:e.number})]}),(0,z.jsx)(_,{type:"button",onClick:function(){return n((0,g.GK)(e.id))},children:"Delete"})]},e.id)}))})},F=r(4060),I=b.ZP.label(l||(l=(0,d.Z)(["\n  align-items: center;\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 10px;\n\n  input {\n    padding: 8px 15px;\n    border-radius: 8px;\n    border: 1px solid #198754;\n    background-color: #464e56;\n    color: black;\n\n    &:focus {\n      background-color: #e8f0fe;\n    }\n  }\n"]))),N=function(){var n=(0,x.I0)(),e=(0,x.v9)(w);return(0,z.jsxs)(I,{children:["Find contacts by name",(0,z.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,F.z)(e.target.value))}})]})},E=r(2929),q=b.ZP.div(p||(p=(0,d.Z)(["\n  width: 700px;\n  color: white;\n  background-color: #2b3035;\n  padding: 15px;\n  margin: 0 auto;\n  border-radius: 8px;\n"]))),D=function(){var n=(0,x.I0)(),e=(0,x.v9)(k);return(0,u.useEffect)((function(){n((0,g.mk)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(L,{}),(0,z.jsxs)(q,{children:[(0,z.jsx)(N,{}),e&&(0,z.jsx)(E.a,{}),(0,z.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=804.4817e684.chunk.js.map