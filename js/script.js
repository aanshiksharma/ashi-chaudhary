// ==== CONSTANTS ====
// Navigation Bar
const __navbarToggleButtons = document.querySelectorAll(
  ".navbar-toggle-button"
);
const navbarToggleButtons = Array.from(__navbarToggleButtons);

const navbar = document.querySelector(".primary-navbar");

// Form
const url =
  "https://script.google.com/macros/s/AKfycbx0mwuG6VQqZBUtjHHma32dLUEU6c9WGChALfJLSEr6eA-nwrkBT5QQV8VNvKOqikVt/exec";

const submitButton = document.getElementById("submitButton");
const form = document.querySelector(".review-form");

const __inputFields = document.querySelectorAll("input, textarea");
const inputFields = Array.from(__inputFields);

// ==== LOGICS ====
// Navigation Bar Toggle Button's Functioning
navbarToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navbar.classList.toggle("navbar-visible");
  });
});

// Submitting the form
submitButton.addEventListener("click", () => {
  setTimeout(() => {}, 2000);
});

inputFields.forEach((inputField) => {
  inputField.addEventListener("keypress", () => {
    submitButton.innerText = "Submit Review";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.innerText = "Submitting...";
  submitButton.blur();

  let data = new FormData(form);

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.text())
    .then((finalRes) => (submitButton.innerText = `Review Submitted`));
});
