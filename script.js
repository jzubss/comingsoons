document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").innerText = "Thanks for reaching out! Someone from the Zubko team will contact you shortly.";
  this.reset();
});
