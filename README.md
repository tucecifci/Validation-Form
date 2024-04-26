# Validation-Form

Hello everybody! 👋 </br>
✨ Welcome to the Validation Form Project README! This project is a comprehensive solution for creating and implementing a validation form using HTML, CSS, and JavaScript. Whether you're a beginner looking to understand the basics of form validation or an experienced developer seeking a robust validation system, this project offers insights and practical examples to meet your needs.

## 👀 Overview

### 📷 Screenshot

![screencapture-127-0-0-1-3000-index-html-2024-04-26-11_10_59](https://github.com/tucecifci/Validation-Form/assets/151346784/890aa72f-e4dc-47bf-baa0-412560fa9383)

![screencapture-127-0-0-1-3000-index-html-2024-04-26-11_11_17](https://github.com/tucecifci/Validation-Form/assets/151346784/dc7383ad-8675-449e-b98a-a5dfd37c54a3)

![screencapture-127-0-0-1-3000-index-html-2024-04-26-11_12_06](https://github.com/tucecifci/Validation-Form/assets/151346784/b8f9d6e5-0def-46c6-83e8-0563c4a10761)


### 🔗 Links

- [https://tucecifci.github.io/Random-Quotes/](https://tucecifci.github.io/Validation-Form/)

## My process

### 💡 Built with

The Validation Form Project leverages the following technologies:

- HTML: Provides the structure and content of the web form.
- CSS: Styles the form elements and layout to enhance visual appeal and usability.
- JavaScript: Implements the validation logic and handles user interactions to create a dynamic and interactive form.

### 🧠 What I learned

During the development of the Validation Form Project, I gained valuable insights and skills in several key areas:

- Form Validation: I learned how to implement form validation techniques using JavaScript to ensure that user input is accurate and complete before submission. This includes validating various types of input fields, such as text, email, and password fields, and providing real-time feedback to users.
- Regular Expressions: I improved my understanding of regular expressions (regex) and how they can be used to validate and manipulate strings, particularly for validating email addresses and password strength requirements.
- DOM Manipulation: I enhanced my proficiency in DOM manipulation techniques, such as selecting elements, modifying their attributes and styles, and dynamically updating the content of the web page based on user interactions.
- Responsive Design: I learned how to create a responsive design for the form, ensuring that it looks and functions well across different devices and screen sizes. This involved using CSS media queries and flexible layout techniques to adapt the form's appearance to various viewport sizes.
- Error Handling: I gained experience in error handling and providing meaningful error messages to users when their input is invalid. This involved implementing logic to detect and display errors next to the corresponding form fields, guiding users to correct their mistakes.
- User Experience: I focused on improving the overall user experience of the form by making it intuitive, user-friendly, and visually appealing. This included adding clear instructions, labels, and visual cues to guide users through the form-filling process.
- Version Control: I practiced using version control with Git and GitHub to manage the project's codebase, track changes, collaborate with others, and maintain a clean and organized code repository.
Overall, the Validation Form Project provided me with practical experience in building interactive web forms and honed my skills in front-end development, JavaScript programming, and web design principles. These newfound skills will be valuable assets as I continue to explore and pursue opportunities in web development.

```javascript
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
```
```javascript
  function validateMessage() {
  let message = document.getElementById("contact-message").value;
  const required = 20;
  const left = required - message.length;
```

### 👩🏼‍💻 Features

The Validation Form Project is designed to provide users with a seamless experience while submitting data through a web form. By implementing real-time validation checks, users receive immediate feedback on their input, ensuring that all required fields are correctly filled out before submission. This not only improves the user experience but also helps prevent errors and data loss.
- Real-Time Validation: The form validates user input in real-time as they type, providing instant feedback on the validity of each field.
- Error Messaging: Clear and concise error messages are displayed next to each field, indicating any missing or incorrect input.
- Submit Validation: The form only allows submission if all required fields are correctly filled out, preventing incomplete or erroneous form submissions.
- Responsive Design: The form is designed to be fully responsive, ensuring a consistent user experience across different devices and screen sizes.


### 🤔 How to Use

The validation form checks the following aspects of user input:

- Name: Ensures that the name field is not empty and contains only valid characters.
- Email: Validates that a valid email address is entered using regular expressions.
- Confirmation: Verifies that the password confirmation matches the original password to prevent typos or errors.

### 🤌🏻 Useful resources

- https://www.youtube.com/@GreatStackDev

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
