const EMAILJS_USER_ID = 'n2cZJMW7IUEbEMihy';
const EMAILJS_SERVICE_ID = 'service_fs20m3c';
const EMAILJS_TEMPLATE_ID = 'template_uhk2v2h';

emailjs.init(EMAILJS_USER_ID);

document.getElementById('configForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const statusDiv = document.getElementById('status');

  // Gather form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    rooms: Array.from(form.querySelectorAll('input[name="rooms"]:checked')).map(cb => cb.value).join(', '),
    devices: Array.from(form.devices.selectedOptions).map(opt => opt.value).join(', '),
    automation: form.automation.value,
    comments: form.comments.value
  };

  statusDiv.textContent = "Sending...";
  statusDiv.style.color = "#c3e478";

  // Send email using EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(function(response) {
      statusDiv.textContent = 'Thank you! Your configuration has been sent.';
      statusDiv.style.color = "#c3e478";
      form.reset();
    }, function(error) {
      statusDiv.textContent = 'Error sending form. Please try again later.';
      statusDiv.style.color = "#e47878";
    });
});
