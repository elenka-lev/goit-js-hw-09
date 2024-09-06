const form = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: "",
};

const storageKey = 'feedback-form-state';

const saveData = localStorage.getItem(storageKey);

if (saveData) {
    formData = JSON.parse(saveData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
};

form.addEventListener('input', (event) => {
    event.preventDefault();

    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return
    } 

    console.log(formData);

    localStorage.removeItem(storageKey);
    formData = {
        email: "",
        message: "",
        };
    form.elements.email.value = '';
    form.elements.message.value = '';
    
    form.reset();
})


