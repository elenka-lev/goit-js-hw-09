import"./assets/styles-DpH5eVAF.js";const a=document.querySelector(".feedback-form");let e={email:"",message:""};const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),a.elements.email.value=e.email,a.elements.message.value=e.message);function m(o){o.preventDefault(),e.email&&e.message&&(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""),a.reset()}a.addEventListener("submit",m);a.addEventListener("input",m);
//# sourceMappingURL=form.js.map
