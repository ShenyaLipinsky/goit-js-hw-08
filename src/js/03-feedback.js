import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

console.log(form);

form.addEventListener('input', throttle(onFormText, 500));
form.addEventListener('submit', onFormSubmit);
const LOCALSTORAGE_KEY = 'feedback-form-state';

function onFormText() {
  const email = form.email.value;
  const message = form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}
if (LOCALSTORAGE_KEY) {
  const tempMailData = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  const tempMessageData = JSON.parse(localStorage.getItem('feedback-form-state')).message;

  form.elements.email.value = tempMailData;
  form.elements.message.value = tempMessageData;
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.message.value;
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
