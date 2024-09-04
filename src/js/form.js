const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

const storageKey = localStorage.getItem('feedback-form-state');

if (storageKey) {
        formData = JSON.parse(storageKey);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
};

function handleFormInput(e) {
    e.preventDefault();

   formData[e.target.name] = e.target.value.trim();
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}
function handleFormSubmit(e) {
    e.preventDefault();

    if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  } else {
    // alert('Fill please all fields');
  }
    form.reset();
}

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormSubmit);
