// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Select all buttons and the display input field
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector('.display');

  // Store the current expression typed by the user
  let currentValue = "";

  // Loop through each button and add click event
  buttons.forEach(button => {
    button.addEventListener("click", () => {

      // Get the text inside the clicked button
      const value = button.textContent;

      // If user clicks "C", clear everything
      if (value === "C") {
        currentValue = ""; // reset expression
        display.value = currentValue; // update UI

      // If user clicks "DEL", remove last character
      } else if (value === "DEL") {
        currentValue = currentValue.slice(0, -1); // remove last char
        display.value = currentValue; // update UI

      // If user clicks "=", evaluate the expression
      } else if (value === "=") {
        try {
          currentValue = eval(currentValue).toString(); // evaluate and convert to string
          display.value = currentValue; // show result
        } catch (error) {
          display.value = "Error"; // show error if invalid
          currentValue = ""; // reset
        }

      // Otherwise, just append the clicked value (number or operator)
      } else {
        currentValue += value; // add value to current expression
        display.value = currentValue; // update display
      }

    });
  });
});
