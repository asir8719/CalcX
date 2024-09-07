// function f() {
//   document.getElementById("C").style.color = "red";
//   document.getElementById("C").style.backgroundColor = "blue";
// }
function f() {
  let string = "";
  let buttons = document.querySelectorAll(".k");
  Array.from(buttons).forEach((k) => {
    k.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("disp").value = string;
      }
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("disp").value = string;
    });
  });
}
