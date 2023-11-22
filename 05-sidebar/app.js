btn = document.querySelector(".sidebar-toggle");
clsbtn = document.querySelector(".close-btn");
sdebr = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  sdebr.classList.toggle("show-sidebar");
});

clsbtn.addEventListener("click", function () {
  sdebr.classList.remove("show-sidebar");
});
