var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var headerNav = document.querySelector(".page-header");
var introTop = document.querySelector(".intro");

navMain.classList.remove("main-nav--nojs");
headerNav.classList.remove("page-header--nojs");
introTop.classList.remove("intro--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
