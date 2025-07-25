
// to load page smoothly
document.addEventListener("DOMContentLoaded", ()=>{
// selecting interactions
   const display = document.getElementById("display");
   const buttons = document.querySelectorAll(".button");

// all classes cant be done indivisyally so using foreach
   buttons.forEach(button => {
       button.addEventListener("click", ()=>{

        const buttonvalue = button.textContent;
// cases (could've also been possible with switch case default)
        if (buttonvalue === "C") {
          display.value = "";
        }
   else if (buttonvalue === "DEL") {
      display.value = display.value.slice(0,-1);
   } else if (buttonvalue === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "ERORRRRRRRRRRRRRRRRRR"
      }
   }
   else {
    display.value += buttonvalue;
   }
       })
   });
})
