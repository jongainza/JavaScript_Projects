// set initial count
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let action = e.currentTarget.classList;
    if (action.contains("reset")) {
      count = 0;
    } else if (action.contains("increase")) {
      count++;
    } else if (action.contains("decrease")) {
      count--;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "blue";
    }
    return (value.textContent = count);
  });
});
