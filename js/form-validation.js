// Form Validation

const form = document.getElementById('contact-form');
const divError = document.getElementById('div-error');
const errorMsg = document.querySelector('error-msg');
const emailForm = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (emailForm.value.match(/^[a-z@.0-9-_]*$/)) {
    divError.style.display = 'none';
    errorMsg.innerHTML = '';
    emailForm.style.border = '1px solid green';
  } else {
    e.preventDefault();
    emailForm.style.border = '2px solid red';
    divError.style.display = 'flex';
    errorMsg.textContent = 'Enter the email in lower case to continue';
  }
});

// Local Storage
const emailErrorMessage = 'Please enter email address in small letters.';
const contactForm = document.getElementById('contact-form');
const emailContainer = document.getElementById('email-container');
const emailInput = document.getElementById('email');
const errorMessageContainer = document.querySelector('error-msg');
const formElement = document.querySelectorAll(
  'textarea.form-group, form-group > input'
);

let formData = { name: '', email: '', msg: '' };
if (localStorage.getItem('formData') !== null) {
  formData = JSON.parse(localStorage.getItem('formData'));
}

const validateEmail = () => {
  const lowercaseEmail = emailInput.value.toLowerCase();
  if (lowercaseEmail !== emailInput.value) {
    emailContainer.classList.add('email-error');
    emailInput.focus();
    errorMessageContainer.textContent = emailErrorMessage;
    return false;
  }
  emailContainer.classList.remove('email-error');
  return true;
};

contactForm.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  } else {
    localStorage.removeItem('formData');
  }
});

formElement.forEach((formItem) => {
  formItem.value = formData[formItem.name];
  formItem.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
