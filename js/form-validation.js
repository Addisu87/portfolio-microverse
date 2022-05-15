// Contact Form Validation

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
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');
const formButton = document.getElementById('formButton');

function storeData() {
  const nameValue = username.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const user = {
    nameValue,
    emailValue,
    messageValue,
  };
  if (nameValue && emailValue && messageValue) {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
  }
}

formButton.addEventListener('click', storeData);
username.addEventListener('keyup', storeData);
email.addEventListener('keyup', storeData);
message.addEventListener('keyup', storeData);