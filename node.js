function appendToDisplay(input) {
  let display = document.getElementById("disp");
  display.value += input;
}
console.log(input);
function clearDisplay(input) {
  let display = document.getElementById("disp");
  display.value = "";
}

function calculate(input) {
  let display = document.getElementById("disp");
  display.value = eval(display.value);
}

function percent(input) {
  let display = document.getElementById("disp");
  display1 = parseFloat(display.value) / 100;
  display.value = display1;
}

function c1() {
  document.getElementById("C");
  let display = document.getElementById("disp");
  let v = display.value;
  let v1 = v.slice(0, v.length - 1);
  display.value = v1;
}
