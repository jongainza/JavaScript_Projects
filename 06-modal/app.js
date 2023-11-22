let opn = document.querySelector(".modal-btn");
let cls = document.querySelector(".close-btn");

let banner = document.querySelector(".banner");
let overlay = document.querySelector(".modal-overlay");

opn.addEventListener("click", function () {
  //   banner.classList.add("modal-overlay");
  overlay.classList.add("open-modal");
});
cls.addEventListener("click", function () {
  //   banner.classList.remove("modal-overlay");
  overlay.classList.remove("open-modal");
});
