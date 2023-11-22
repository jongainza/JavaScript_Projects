// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navTaggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navTaggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");
  let containerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
let navbar = document.getElementById("nav");
let topButton = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > navbar.getBoundingClientRect().height) {
    navbar.classList.add("fixed-nav");
    topButton.classList.add("show-link");
  } else {
    navbar.classList.remove("fixed-nav");
    topButton.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((p) => {
  p.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    let id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    let element = document.getElementById(id);
    // calculate the heights
    let navHeight = navbar.getBoundingClientRect().height;
    let contHeight = linksContainer.getBoundingClientRect().height;
    let fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + contHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
