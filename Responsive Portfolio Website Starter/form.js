const scriptURL = 'https://script.google.com/macros/s/AKfycbzmtNWEe5hElIzhA9BQZvCLlx35Rau9OGWsKbvyxNo_FsJsomevMP68NdtFL2iDV2Wd/exec';
const form = document.forms['contact-form'];
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Show a loading message while the request is being processed
  messageDiv.style.display = 'block';
  messageDiv.style.color = 'blue';
  messageDiv.innerHTML = 'Sending message...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        // Show success message
        messageDiv.style.color = 'green';
        messageDiv.innerHTML = 'Message sent successfully!';
        form.reset(); // Reset the form fields
      } else {
        // Show error message if the response is not OK
        messageDiv.style.color = 'red';
        messageDiv.innerHTML = 'Failed to send message. Please try again.';
      }

      // Hide the message after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    })
    .catch((error) => {
      // Show error message if there is a network or server error
      messageDiv.style.color = 'red';
      messageDiv.innerHTML = 'An error occurred. Please try again later.';

      // Hide the message after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    });
});