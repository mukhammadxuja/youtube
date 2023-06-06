var values = [];

console.log(values);

const inputs = document.querySelectorAll("input[type='text']");
const btn = document.getElementsByClassName("btn");
const check = document.getElementById("check");

const buttons = [...btn];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // check if the button value is already in the array
    if (values.includes(button.value)) {
      // if it is, remove it from the array
      values = values.filter((value) => value !== button.value);

      button.style.background = "#e5e7eb";
      button.style.color = "#000";
      check.style.display = "none";

      console.log(values);
    } else {
      // if it isn't, add it to the array
      values.push(button.value);
      button.style.background = "#000";
      button.style.color = "#fff";
        check.style.display = "block";
        
        console.log(values);
    }
  });
});
