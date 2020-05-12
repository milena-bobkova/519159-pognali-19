var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var headerNav = document.querySelector(".page-header");
var pageMain = document.querySelector(".page-main");

navMain.classList.remove("main-nav--nojs");
headerNav.classList.remove("page-header--nojs");
pageMain.classList.remove("page-main--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
