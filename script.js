const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "E-mail is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "E-mail Invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  const required = 20;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
