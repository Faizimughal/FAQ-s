let plusButtons = document.querySelectorAll(".fa-square-plus");
let minusButtons = document.querySelectorAll(".fa-square-minus");
let texts = document.querySelectorAll(".text1");

window.addEventListener("DOMContentLoaded", () => {
  minusButtons.forEach((button) => {
    button.style.display = "none"; // Hide minus buttons on load
  });

  texts.forEach((text) => {
    text.style.display = "none"; // Hide all texts on load
  });
});

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    texts[index].style.display = "block"; // Show corresponding text
    button.style.display = "none"; // Hide plus button
    minusButtons[index].style.display = "block"; // Show minus button
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    texts[index].style.display = "none"; // Hide corresponding text
    button.style.display = "none"; // Hide minus button
    plusButtons[index].style.display = "block"; // Show plus button
  });
});
