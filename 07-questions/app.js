//using selectors inside the element

let questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});

// traversing the dom
// let btns = document.querySelectorAll(".question-btn");

// btns.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });
