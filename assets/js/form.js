
  document.getElementById("contact-with-us").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          document.getElementById('alertMessage').innerText = "Message sent successfully";
          document.getElementById('alertMessage').style.display = "block";
          // Reset the form after 5 seconds
          setTimeout(function() {
            document.getElementById('contact-with-us').reset();
            document.getElementById('alertMessage').innerText = "Thank you for Contant with me";
          }, 3500); // 5000 milliseconds = 3.5 seconds
        } else {
          document.getElementById('alertMessage').innerText = "Failed to send message";
          document.getElementById('alertMessage').style.display = "block";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('alertMessage').innerText = "An error occurred: " + error;
        document.getElementById('alertMessage').style.display = "block";
      });
  });