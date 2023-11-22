const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    content.forEach(function (article) {
      article.classList.remove("active");
      if (article.id === id) {
        article.classList.add("active");
      }
    });
  }
});
