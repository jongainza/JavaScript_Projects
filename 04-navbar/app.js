// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let btn = document.querySelector(".nav-toggle");
let lst = document.querySelector(".links");

btn.addEventListener("click", function () {
  lst.classList.toggle("show-links");
});
