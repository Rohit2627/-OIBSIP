const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
  .then(response => {
    status.innerHTML = 'Thanks for your feedback!';
    form.reset();
  })
  .catch(error => {
    status.innerHTML = 'Oops! There was a problem submitting your feedback. Please try again.';
  });
});
