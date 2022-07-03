"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[989],{9989:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(885),r=n(2791),s="ContactList_list__csErn",o="ContactList_item__EZYHO",i="ContactList_btn__6Piat",l=n(6030),c=n(5036),u=n(3329),m=function(e){var t=e.contacts,n=t.items,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},f=function(){var e=(0,l.v9)(m),t=(0,l.I0)();return(0,u.jsx)("ul",{className:s,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,u.jsxs)("li",{className:o,children:[(0,u.jsxs)("span",{children:[a,": ",r]}),(0,u.jsx)("button",{className:i,type:"button",onClick:function(){return t(c.Z.deleteContact(n))},children:"delete"})]},n)}))})},d={form:"Form_form__e1yzW",form__label:"Form_form__label__Tpt8u",form__btn:"Form_form__btn__sPTnm"},_=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,r.useState)(""),i=(0,a.Z)(o,2),m=i[0],f=i[1],_=(0,l.v9)((function(e){return e.contacts.items})),h=(0,l.I0)(),b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":f(a);break;default:return}};return(0,u.jsx)("div",{children:(0,u.jsxs)("form",{className:"styles.form",onSubmit:function(e){e.preventDefault(),function(e,t){e.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase())?alert("".concat(t," is already in contacts.")):h(c.Z.addContact({name:t,number:m}))}(_,n),s(""),f("")},children:[(0,u.jsxs)("label",{className:d.form__label,children:["Name",(0,u.jsx)("input",{className:d.form__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:b})]}),(0,u.jsxs)("label",{className:d.form__label,children:["Number",(0,u.jsx)("input",{className:d.form__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:m,onChange:b})]}),(0,u.jsx)("button",{className:d.form__btn,type:"submit",children:"Add contact"})]})})},h=n(4443),b="Filter_label__vEd1E",p="Filter_input__N7T3z",v=function(){var e=(0,l.v9)((function(e){return e.contacts.filter})),t=(0,l.I0)();return(0,u.jsxs)("label",{className:b,children:["Name",(0,u.jsx)("input",{className:p,type:"text",name:"filter",value:e,onChange:function(e){return t(h.Z.filterChange(e.target.value))}})]})},x=function(){var e=(0,l.I0)(),t=(0,r.useState)(!1),n=(0,a.Z)(t,2),s=n[0],o=n[1];return(0,r.useEffect)((function(){if(!0!==s)return e(c.Z.fetchContacts()),function(){o(!0)}}),[e,s]),(0,u.jsxs)("div",{className:"main",children:[(0,u.jsx)("h2",{children:"Phonebook"}),(0,u.jsx)(_,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(v,{}),(0,u.jsx)(f,{})]})}},885:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,s=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(s.push(a.value),!t||s.length!==t);o=!0);}catch(l){i=!0,r=l}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return s}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=989.c360c661.chunk.js.map